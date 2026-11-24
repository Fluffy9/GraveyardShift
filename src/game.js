// Game flow: start/finish, pause, tutorial tips, crossing/banishing, and the per-tick simulation.
import * as THREE from 'three';
import { COL, isTouchUI, TIP_DISMISS_MS } from './config.js';
import { TUNING as T } from './tuning.js';
import { rng, fx, seedRun } from './sim/rng.js';
import { emitEvent, clearHistory } from './sim/events.js';
import { clock } from './sim/clock.js';
import { director, startLevel, resetDirector, updateDirector, inIntermission } from './director.js';
import { LEVEL1 } from './levels/level1.js';
import { loadBest, saveBest } from './progress.js';
import { showResults } from './results.js';
import { openModeSelect } from './modeselect.js';
import { scene } from './render.js';
import { emit } from './particles.js';
import { S, world, keys, touch } from './state.js';
import { spawnEnemy, spawnGroup, removeEnemy, spawnProjectile, resetIds } from './entities.js';
import { setOverlay, stats, clockText, popup, toast, showTip, hideNote, updateHud } from './hud.js';
import { Sfx } from './sfx.js';
import { copy, fmt, kbTc } from './copy.js';
import { openPauseMenu, closePauseMenu } from './menu.js';

const _tmpA = new THREE.Vector2();
const _tmpB = new THREE.Vector2();

// ---------- tutorial tips: freeze the game (state 'tutorial') until dismissed ----------
// Overtime (endless) skips tutorials; Night Shift keeps the orientation tips.
// `modes` limits a tip to listed run modes. Both night wisp sightings share id 'wisp'.
const TIPS = [
  { id: 'intro', at: 0, modes: ['night'], html: () => copy.tips.intro },
  { id: 'cross', at: 2, modes: ['night'], when: () => !S.crossed, html: () => isTouchUI() ? copy.tips.crossTc : copy.tips.crossKb },
  { id: 'wisp', at: 0, modes: ['night'], when: () => world.enemies.some(e => e.wisp && e.spawn <= 0), html: () => copy.tips.wisp },
];
let activeTip = null, tipShownAt = 0;
// Returns true if a tip just froze the game, so the caller can stop this tick.
function checkTips() {
  for (const tip of TIPS) {
    if (S.notes.has(tip.id) || (tip.modes && !tip.modes.includes(S.mode)) || S.elapsed < tip.at || (tip.when && !tip.when())) continue;
    S.notes.add(tip.id);
    if (S.botInput || S.botAim) { tip.then?.(); continue; }   // unattended runs skip tutorials
    activeTip = tip; tipShownAt = performance.now();
    S.state = 'tutorial'; showTip(tip.html());
    return true;
  }
  return false;
}
// Called by input on any key / tap. Ignores presses for TIP_DISMISS_MS so a tip can't be skipped unread.
export function dismissTip() {
  if (S.state !== 'tutorial' || performance.now() - tipShownAt < TIP_DISMISS_MS) return false;
  S.state = 'playing'; hideNote();
  const tip = activeTip; activeTip = null; tip?.then?.();
  return true;
}

// ---------- flow ----------
// Seed for the NEXT run. Left null, each run gets a fresh random seed; tests/replays set it for determinism.
let nextSeed = null;
export const setNextSeed = n => { nextSeed = n; };

// opts.mode: 'night' | 'endless'. Without it a restart keeps the current mode. (opts may be a DOM event: ignored.)
export function startGame(opts) {
  if (opts?.mode === 'night' || opts?.mode === 'endless') S.mode = opts.mode;
  world.enemies.forEach(e => scene.remove(e.node)); world.projectiles.forEach(p => scene.remove(p.node));
  world.enemies = []; world.projectiles = [];
  resetIds(); clearHistory(); clock.tick = 0; resetDirector();
  S.best = loadBest(S.mode);      // ticks are run-relative so replays compare equal
  S.seed = seedRun(nextSeed ?? undefined); nextSeed = null; S.dashId = 0;
  Object.assign(S, { state: 'playing', realm: 0, hp: T.player.maxHp, score: 0, combo: 0, comboTimer: 0, timeLeft: T.run.totalTime, elapsed: 0,
    dashCd: 0, dashRemaining: 0, invuln: 0, spawnClock: T.run.startSpawnClock, hitStop: 0, banished: 0, maxCombo: 0, crossed: false });
  S.pos.set(...T.player.startPos); S.facing.set(0, -1); S.dashHit.clear(); S.notes = new Set(); activeTip = null;
  emitEvent('run_started', { seed: S.seed, mode: S.mode });
  if (S.mode === 'night') startLevel(LEVEL1);
  else for (let i = 0; i < T.run.startGhosts; i++) spawnEnemy({ wisp: false, realm: 1 });
  setOverlay(null); hideNote();
  updateHud();
  Sfx.start(); Sfx.music(true);
}
export function finish(won) {
  S.state = won ? 'won' : 'lost';
  hideNote();
  const prevBest = loadBest(S.mode);
  S.best = Math.max(prevBest, S.score);
  emitEvent('run_finished', { won, score: S.score, banished: S.banished, maxCombo: S.maxCombo });
  saveBest(S.mode, S.best);
  Sfx.music(false); won ? Sfx.win() : Sfx.lose();
  showResults({
    won, newBest: S.score > prevBest && S.score > 0,
    flavor: won ? copy.win.flavor : fmt(copy.lose.flavor, { time: clockText() }),
    again: () => startGame(), modes: () => openModeSelect(),
  });
}
export function pause() {
  if (S.state !== 'playing') return;
  S.state = 'paused'; emitEvent('paused');
  openPauseMenu({ resume, restart: startGame });
}
export function resume() {
  if (S.state !== 'paused') return;
  S.state = 'playing'; emitEvent('resumed');
  closePauseMenu();
}
export function togglePause() { S.state === 'paused' ? resume() : pause(); }

// ---------- actions ----------
export function cross() {
  if (S.dashCd > 0 || S.dashRemaining > 0) return;
  if (S.touchCross || S.botAim) aimAssist();
  const fromRealm = S.realm;
  S.realm = 1 - S.realm; S.crossed = true;
  S.dashCd = T.dash.cooldown; S.dashRemaining = T.dash.duration;
  S.dashStart.copy(S.pos);
  S.dashEnd.copy(S.pos).addScaledVector(S.facing, T.dash.distance);
  S.dashEnd.x = THREE.MathUtils.clamp(S.dashEnd.x, -T.arena.x + T.arena.playerPad, T.arena.x - T.arena.playerPad);
  S.dashEnd.y = THREE.MathUtils.clamp(S.dashEnd.y, -T.arena.z + T.arena.playerPad, T.arena.z - T.arena.playerPad);
  S.dashHit.clear();
  S.dashId++;
  S.invuln = Math.max(S.invuln, T.dash.duration + T.dash.invulnPad);
  emitEvent('realm_changed', { from: fromRealm, to: S.realm });
  emitEvent('dash_started', { dashId: S.dashId, from: [S.dashStart.x, S.dashStart.y], to: [S.dashEnd.x, S.dashEnd.y], realm: S.realm });
  S.flash = 0.35; S.ripple = 0;
  Sfx.cross(S.realm);
  emit(S.pos.x, 0.6, S.pos.y, { n: 16, color: S.realm ? COL.lavender : COL.amber, speed: 3, up: 1.5, life: 0.5 });
}
function banish(e) {
  if (e.dead) return;
  S.combo += 1; S.comboTimer = T.combo.window; S.maxCombo = Math.max(S.maxCombo, S.combo);
  const pts = T.combo.baseScore * S.combo; S.score += pts; S.banished++;
  S.dashCd = Math.max(T.dash.cooldownFloor, S.dashCd - T.dash.refundPerKill);
  S.hitStop = T.hitStop.duration; S.shake = Math.max(S.shake, 0.18);
  const c = e.realm ? COL.lavender : COL.parchment;
  emit(e.pos.x, 0.8, e.pos.y, { n: 26, color: c, speed: 4, up: 3, life: 0.8, size: 3 });
  emit(e.pos.x, 0.8, e.pos.y, { n: 10, color: 0xffffff, speed: 2, up: 4, life: 0.5, size: 2, grav: 2 });
  popup(e.pos, `+${pts}${S.combo > 1 ? ` <i>x${S.combo}</i>` : ''}`, S.combo > 1);
  emitEvent('enemy_banished', { id: e.id, wisp: e.wisp, realm: e.realm, combo: S.combo, points: pts, dashId: S.dashId });
  Sfx.banish(S.combo);
  try { navigator.vibrate && navigator.vibrate(15); } catch (e) {}
  removeEnemy(e);
}
function takeHit(source) {
  S.hp -= 1; S.combo = 0; S.invuln = T.player.hitInvuln; S.hurt = 1; S.shake = 0.45;
  emit(S.pos.x, 0.8, S.pos.y, { n: 18, color: COL.pink, speed: 3.5, up: 2.5, life: 0.6 });
  emitEvent('player_damaged', { hp: S.hp, source });
  Sfx.hit();
  try { navigator.vibrate && navigator.vibrate(80); } catch (e) {}
  if (S.hp <= 0) finish(false);
}
const distToSeg = (p, a, b) => {
  const ab = b.clone().sub(a), l2 = ab.lengthSq();
  if (l2 < 1e-3) return p.distanceTo(a);
  const t = THREE.MathUtils.clamp(p.clone().sub(a).dot(ab) / l2, 0, 1);
  return p.distanceTo(a.clone().addScaledVector(ab, t));
};
function aimAssist() {
  let best = null, bestScore = Infinity;
  for (const e of world.enemies) {
    if (e.realm === S.realm || e.spawn > 0) continue;
    const to = e.pos.clone().sub(S.pos), d = to.length();
    if (d < 0.5 || d > T.dash.distance + T.dash.aimRangePad) continue;
    const ang = Math.acos(THREE.MathUtils.clamp(to.dot(S.facing) / d, -1, 1));
    if (ang > T.dash.aimCone) continue;
    const sc = ang * 3 + d * 0.2;
    if (sc < bestScore) { bestScore = sc; best = to.divideScalar(d); }
  }
  if (best) S.facing.copy(best);
}

// ---------- simulation ----------
export function update(dt) {
  S.elapsed += dt;
  S.timeLeft = Math.max(0, S.timeLeft - dt);
  S.spawnClock -= dt;
  S.dashCd = Math.max(0, S.dashCd - dt);
  S.invuln = Math.max(0, S.invuln - dt);
  // the chain timer is frozen between rounds
  if (!(S.mode === 'night' && inIntermission())) { S.comboTimer -= dt; if (S.comboTimer <= 0) S.combo = 0; }

  if (S.mode === 'night') {
    const was = director.phase;
    if (updateDirector(dt) === 'complete') { finish(true); return; }
    if (was === 'active' && director.phase === 'intermission') toast(copy.rounds.clear, 2);
    else if (was === 'intermission' && director.phase === 'active') toast(fmt(copy.rounds.start, { n: director.round + 1 }), 2);
  } else {
    // endless pacing per the kit's first-level script
    if (S.spawnClock <= 0 && world.enemies.length < T.pacing.cap(S.elapsed)) {
      if (S.elapsed > T.pacing.groupAfter && rng.chance(T.pacing.groupChance)) spawnGroup(); else spawnEnemy();
      S.spawnClock = T.pacing.interval(S.elapsed);
    }
    if (S.elapsed > 150 && !S.notes.has('final')) { S.notes.add('final'); toast(copy.toasts.midnight, 3); }
  }
  if (checkTips()) return;

  // player movement / dash
  if (S.dashRemaining > 0) {
    S.dashRemaining = Math.max(0, S.dashRemaining - dt);
    const p = 1 - S.dashRemaining / T.dash.duration;
    S.pos.copy(S.dashStart).lerp(S.dashEnd, 1 - Math.pow(1 - p, 2));
    for (const e of [...world.enemies])
      if (e.realm === S.realm && !S.dashHit.has(e) && distToSeg(e.pos, S.dashStart, S.pos) < T.dash.hitRadius) { S.dashHit.add(e); banish(e); }
    emit(S.pos.x, 0.5 + fx() * 0.6, S.pos.y, { n: 4, color: S.realm ? COL.lavender : COL.amber, speed: 0.6, up: 0.3, life: 0.35, grav: 0 });
    S.moving = 1;
  } else {
    let ix = 0, iz = 0;
    if (keys.has('KeyD') || keys.has('ArrowRight')) ix += 1;
    if (keys.has('KeyA') || keys.has('ArrowLeft')) ix -= 1;
    if (keys.has('KeyS') || keys.has('ArrowDown')) iz += 1;
    if (keys.has('KeyW') || keys.has('ArrowUp')) iz -= 1;
    if (touch.active) { ix = touch.x * touch.mag; iz = touch.y * touch.mag; }
    if (S.botInput) { ix = S.botInput.x; iz = S.botInput.y; }
    const l = Math.hypot(ix, iz);
    if (l > 0.01) {
      S.facing.set(ix / l, iz / l);
      S.pos.addScaledVector(S.facing, T.player.speed * Math.min(1, Math.max(l, T.player.minStickMag)) * dt);
      S.moving = Math.min(1, S.moving + dt * 8);
      S.step += dt * 12;
      if (fx() < dt * 10) emit(S.pos.x, 0.05, S.pos.y, { n: 1, color: 0x6a5a6e, speed: 0.4, up: 0.6, life: 0.4, grav: -3 });
    } else S.moving = Math.max(0, S.moving - dt * 8);
  }
  S.pos.x = THREE.MathUtils.clamp(S.pos.x, -T.arena.x + T.arena.playerPad, T.arena.x - T.arena.playerPad);
  S.pos.y = THREE.MathUtils.clamp(S.pos.y, -T.arena.z + T.arena.playerPad, T.arena.z - T.arena.playerPad);

  // dash preview targets
  const ready = S.dashCd <= 0 && S.dashRemaining <= 0;
  _tmpA.copy(S.pos).addScaledVector(S.facing, T.dash.distance);
  _tmpA.x = THREE.MathUtils.clamp(_tmpA.x, -T.arena.x + T.arena.playerPad, T.arena.x - T.arena.playerPad);
  _tmpA.y = THREE.MathUtils.clamp(_tmpA.y, -T.arena.z + T.arena.playerPad, T.arena.z - T.arena.playerPad);
  for (const e of world.enemies) e.targeted = ready && e.realm !== S.realm && e.spawn <= 0 && distToSeg(e.pos, S.pos, _tmpA) < T.dash.hitRadius;

  // world.enemies
  for (const e of [...world.enemies]) {
    e.bob += dt * 2.5;
    if (e.spawn > 0) { e.spawn -= dt; continue; }
    _tmpA.copy(S.pos).sub(e.pos);
    const d = _tmpA.length();
    if (d > 0.01) _tmpB.copy(_tmpA).multiplyScalar(1 / d); else _tmpB.set(0, 0);
    if (e.realm !== S.realm) { e.pos.addScaledVector(_tmpB, T.enemy.inactiveDrift * dt); continue; } // drifting, harmless
    if (e.wisp) {
      if (d < T.enemy.wispKeepMin) e.pos.addScaledVector(_tmpB, -T.enemy.wispSpeed * dt); else if (d > T.enemy.wispKeepMax) e.pos.addScaledVector(_tmpB, T.enemy.wispSpeed * dt);
      e.shoot -= dt;
      e.charge = e.shoot < T.enemy.wispChargeWindow ? 1 - e.shoot / T.enemy.wispChargeWindow : 0;
      if (e.shoot <= 0) { spawnProjectile(e.pos, _tmpB, e.realm); e.shoot = T.enemy.wispShootInterval; }
    } else e.pos.addScaledVector(_tmpB, (T.enemy.wandererSpeed + S.elapsed * T.enemy.wandererSpeedPerSec) * dt);
    e.pos.x = THREE.MathUtils.clamp(e.pos.x, -T.arena.x + T.arena.enemyPad, T.arena.x - T.arena.enemyPad);
    e.pos.y = THREE.MathUtils.clamp(e.pos.y, -T.arena.z + T.arena.enemyPad, T.arena.z - T.arena.enemyPad);
    if (d < T.enemy.contactRadius && S.invuln <= 0 && S.dashRemaining <= 0) { takeHit({ kind: 'contact', id: e.id }); e.pos.addScaledVector(_tmpB, -T.enemy.contactKnockback); if (S.state !== 'playing') return; }
  }
  // gentle separation so ghosts don't stack
  for (let i = 0; i < world.enemies.length; i++) for (let j = i + 1; j < world.enemies.length; j++) {
    const a = world.enemies[i], b = world.enemies[j], dd = a.pos.distanceTo(b.pos);
    if (dd < T.enemy.separation && dd > 0.001) {
      _tmpA.copy(b.pos).sub(a.pos).multiplyScalar((T.enemy.separation - dd) / dd * 0.5);
      a.pos.sub(_tmpA); b.pos.add(_tmpA);
    }
  }
  // world.projectiles
  for (const b of [...world.projectiles]) {
    b.pos.addScaledVector(b.dir, T.projectile.speed * dt); b.life -= dt;
    if (fx() < dt * 30 && b.realm === S.realm) emit(b.pos.x, 0.7, b.pos.y, { n: 1, color: COL.violet, speed: 0.2, up: 0.2, life: 0.3, grav: 0 });
    if (b.realm === S.realm && b.pos.distanceTo(S.pos) < T.projectile.hitRadius && S.invuln <= 0) { takeHit({ kind: 'projectile' }); b.life = 0; if (S.state !== 'playing') return; }
    if (Math.abs(b.pos.x) > T.arena.x + 1 || Math.abs(b.pos.y) > T.arena.z + 1) b.life = 0;
    if (b.life <= 0) { scene.remove(b.node); world.projectiles = world.projectiles.filter(x => x !== b); }
  }
  if (S.mode === 'endless' && S.timeLeft <= 0) finish(true);   // in Night Shift the clock is atmospheric only
}
