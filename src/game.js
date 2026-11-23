// Game flow: start/finish, pause, tutorial tips, crossing/banishing, and the per-tick simulation.
import * as THREE from 'three';
import { COL, IS_TOUCH, ARENA_X, ARENA_Z, PLAYER_SPEED, DASH_DISTANCE, DASH_DURATION, DASH_COOLDOWN, TOTAL_TIME } from './config.js';
import { scene } from './render.js';
import { emit } from './particles.js';
import { S, world, keys, touch } from './state.js';
import { spawnEnemy, spawnGroup, removeEnemy, spawnProjectile } from './entities.js';
import { setOverlay, stats, clockText, popup, toast, showTip, hideNote } from './hud.js';
import { Sfx } from './sfx.js';
import { copy, fmt, kbTc } from './copy.js';
import { openPauseMenu, closePauseMenu } from './menu.js';

const isTouchUI = () => IS_TOUCH || document.body.classList.contains('touch');

// ---------- tutorial tips: freeze the game (state 'tutorial') until dismissed ----------
const TIPS = [
  { id: 'intro', at: 0, html: () => copy.tips.intro },
  { id: 'cross', at: 2, when: () => !S.crossed, html: () => isTouchUI() ? copy.tips.crossTc : copy.tips.crossKb },
  { id: 'wisp', at: 60, html: () => copy.tips.wisp,
    then: () => spawnEnemy({ wisp: true, realm: S.realm }) },
];
let activeTip = null, tipShownAt = 0;
// Returns true if a tip just froze the game, so the caller can stop this tick.
function checkTips() {
  for (const tip of TIPS) {
    if (S.notes.has(tip.id) || S.elapsed < tip.at || (tip.when && !tip.when())) continue;
    S.notes.add(tip.id);
    if (S.botInput || S.botAim) { tip.then?.(); continue; }   // unattended runs skip tutorials
    activeTip = tip; tipShownAt = performance.now();
    S.state = 'tutorial'; showTip(tip.html());
    return true;
  }
  return false;
}
// Called by input on any key / tap. Ignores presses within 0.25s so a mid-action input can't skip a tip unread.
export function dismissTip() {
  if (S.state !== 'tutorial' || performance.now() - tipShownAt < 250) return false;
  S.state = 'playing'; hideNote();
  const tip = activeTip; activeTip = null; tip?.then?.();
  return true;
}

// ---------- flow ----------
export function startGame() {
  world.enemies.forEach(e => scene.remove(e.node)); world.projectiles.forEach(p => scene.remove(p.node));
  world.enemies = []; world.projectiles = [];
  Object.assign(S, { state: 'playing', realm: 0, hp: 3, score: 0, combo: 0, comboTimer: 0, timeLeft: TOTAL_TIME, elapsed: 0,
    dashCd: 0, dashRemaining: 0, invuln: 0, spawnClock: 2.5, hitStop: 0, banished: 0, maxCombo: 0, crossed: false });
  S.pos.set(0, 6.5); S.facing.set(0, -1); S.dashHit.clear(); S.notes = new Set(); activeTip = null;
  for (let i = 0; i < 3; i++) spawnEnemy({ wisp: false, realm: 1 });
  setOverlay(null); hideNote();
  Sfx.start(); Sfx.music(true);
}
export function finish(won) {
  S.state = won ? 'won' : 'lost';
  hideNote();
  S.best = Math.max(S.best, S.score);
  try { localStorage.setItem('gs_best', String(S.best)); } catch (e) {}
  Sfx.music(false); won ? Sfx.win() : Sfx.lose();
  if (won) {
    const w = copy.win;
    setOverlay(`
    <h2>${w.title}</h2>
    <p class="flavor">${w.flavor}</p>
    ${stats()}
    <p class="blink">${kbTc(w.againKb, w.againTc)} - ${w.againSuffix}</p>`);
  } else {
    const l = copy.lose;
    setOverlay(`
    <h2 class="bad">${l.title}</h2>
    <p class="flavor">${fmt(l.flavor, { time: clockText() })}</p>
    ${stats()}
    <p class="blink">${kbTc(l.againKb, l.againTc)} - ${l.againSuffix}</p>`);
  }
}
export function pause() {
  if (S.state !== 'playing') return;
  S.state = 'paused';
  openPauseMenu({ resume, restart: startGame });
}
export function resume() {
  if (S.state !== 'paused') return;
  S.state = 'playing';
  closePauseMenu();
}
export function togglePause() { S.state === 'paused' ? resume() : pause(); }

// ---------- actions ----------
export function cross() {
  if (S.dashCd > 0 || S.dashRemaining > 0) return;
  if (S.touchCross || S.botAim) aimAssist();
  S.realm = 1 - S.realm; S.crossed = true;
  S.dashCd = DASH_COOLDOWN; S.dashRemaining = DASH_DURATION;
  S.dashStart.copy(S.pos);
  S.dashEnd.copy(S.pos).addScaledVector(S.facing, DASH_DISTANCE);
  S.dashEnd.x = THREE.MathUtils.clamp(S.dashEnd.x, -ARENA_X + 0.6, ARENA_X - 0.6);
  S.dashEnd.y = THREE.MathUtils.clamp(S.dashEnd.y, -ARENA_Z + 0.6, ARENA_Z - 0.6);
  S.dashHit.clear();
  S.invuln = Math.max(S.invuln, DASH_DURATION + 0.12);
  S.flash = 0.35; S.ripple = 0;
  Sfx.cross(S.realm);
  emit(S.pos.x, 0.6, S.pos.y, { n: 16, color: S.realm ? COL.lavender : COL.amber, speed: 3, up: 1.5, life: 0.5 });
}
function banish(e) {
  if (e.dead) return;
  S.combo += 1; S.comboTimer = 3; S.maxCombo = Math.max(S.maxCombo, S.combo);
  const pts = 100 * S.combo; S.score += pts; S.banished++;
  S.dashCd = Math.max(0.12, S.dashCd - 0.18);
  S.hitStop = 0.05; S.shake = Math.max(S.shake, 0.18);
  const c = e.realm ? COL.lavender : COL.parchment;
  emit(e.pos.x, 0.8, e.pos.y, { n: 26, color: c, speed: 4, up: 3, life: 0.8, size: 3 });
  emit(e.pos.x, 0.8, e.pos.y, { n: 10, color: 0xffffff, speed: 2, up: 4, life: 0.5, size: 2, grav: 2 });
  popup(e.pos, `+${pts}${S.combo > 1 ? ` <i>x${S.combo}</i>` : ''}`, S.combo > 1);
  Sfx.banish(S.combo);
  try { navigator.vibrate && navigator.vibrate(15); } catch (e) {}
  removeEnemy(e);
}
function takeHit() {
  S.hp -= 1; S.combo = 0; S.invuln = 1.1; S.hurt = 1; S.shake = 0.45;
  emit(S.pos.x, 0.8, S.pos.y, { n: 18, color: COL.pink, speed: 3.5, up: 2.5, life: 0.6 });
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
    if (d < 0.5 || d > DASH_DISTANCE + 0.6) continue;
    const ang = Math.acos(THREE.MathUtils.clamp(to.dot(S.facing) / d, -1, 1));
    if (ang > 0.6) continue;
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
  S.comboTimer -= dt; if (S.comboTimer <= 0) S.combo = 0;

  // pacing per the kit's first-level script
  const cap = S.elapsed < 30 ? 5 : S.elapsed < 60 ? 8 : S.elapsed < 105 ? 11 : 14;
  if (S.spawnClock <= 0 && world.enemies.length < cap) {
    if (S.elapsed > 25 && Math.random() < 0.33) spawnGroup(); else spawnEnemy();
    const base = S.elapsed < 30 ? 3.2 : S.elapsed < 105 ? 2.6 - S.elapsed / 130 : S.elapsed < 150 ? 1.4 : 0.95;
    S.spawnClock = Math.max(0.8, base);
  }
  if (S.elapsed > 150 && !S.notes.has('final')) { S.notes.add('final'); toast(copy.toasts.midnight, 3); }
  if (checkTips()) return;

  // player movement / dash
  if (S.dashRemaining > 0) {
    S.dashRemaining = Math.max(0, S.dashRemaining - dt);
    const p = 1 - S.dashRemaining / DASH_DURATION;
    S.pos.copy(S.dashStart).lerp(S.dashEnd, 1 - Math.pow(1 - p, 2));
    for (const e of [...world.enemies])
      if (e.realm === S.realm && !S.dashHit.has(e) && distToSeg(e.pos, S.dashStart, S.pos) < 0.85) { S.dashHit.add(e); banish(e); }
    emit(S.pos.x, 0.5 + Math.random() * 0.6, S.pos.y, { n: 4, color: S.realm ? COL.lavender : COL.amber, speed: 0.6, up: 0.3, life: 0.35, grav: 0 });
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
      S.pos.addScaledVector(S.facing, PLAYER_SPEED * Math.min(1, Math.max(l, 0.35)) * dt);
      S.moving = Math.min(1, S.moving + dt * 8);
      S.step += dt * 12;
      if (Math.random() < dt * 10) emit(S.pos.x, 0.05, S.pos.y, { n: 1, color: 0x6a5a6e, speed: 0.4, up: 0.6, life: 0.4, grav: -3 });
    } else S.moving = Math.max(0, S.moving - dt * 8);
  }
  S.pos.x = THREE.MathUtils.clamp(S.pos.x, -ARENA_X + 0.6, ARENA_X - 0.6);
  S.pos.y = THREE.MathUtils.clamp(S.pos.y, -ARENA_Z + 0.6, ARENA_Z - 0.6);

  // dash preview targets
  const ready = S.dashCd <= 0 && S.dashRemaining <= 0;
  const end = S.pos.clone().addScaledVector(S.facing, DASH_DISTANCE);
  end.x = THREE.MathUtils.clamp(end.x, -ARENA_X + 0.6, ARENA_X - 0.6); end.y = THREE.MathUtils.clamp(end.y, -ARENA_Z + 0.6, ARENA_Z - 0.6);
  for (const e of world.enemies) e.targeted = ready && e.realm !== S.realm && e.spawn <= 0 && distToSeg(e.pos, S.pos, end) < 0.85;

  // world.enemies
  for (const e of [...world.enemies]) {
    e.bob += dt * 2.5;
    if (e.spawn > 0) { e.spawn -= dt; continue; }
    const to = S.pos.clone().sub(e.pos), d = to.length(), dir = d > 0.01 ? to.clone().divideScalar(d) : new THREE.Vector2();
    if (e.realm !== S.realm) { e.pos.addScaledVector(dir, 0.25 * dt); continue; } // drifting, harmless
    if (e.wisp) {
      if (d < 5) e.pos.addScaledVector(dir, -1.1 * dt); else if (d > 7) e.pos.addScaledVector(dir, 1.1 * dt);
      e.shoot -= dt;
      e.charge = e.shoot < 0.5 ? 1 - e.shoot / 0.5 : 0;
      if (e.shoot <= 0) { spawnProjectile(e.pos, dir, e.realm); e.shoot = 2.5; }
    } else e.pos.addScaledVector(dir, (1.6 + S.elapsed / 100) * dt);
    e.pos.x = THREE.MathUtils.clamp(e.pos.x, -ARENA_X + 0.4, ARENA_X - 0.4);
    e.pos.y = THREE.MathUtils.clamp(e.pos.y, -ARENA_Z + 0.4, ARENA_Z - 0.4);
    if (d < 0.8 && S.invuln <= 0 && S.dashRemaining <= 0) { takeHit(); e.pos.addScaledVector(dir, -1.2); if (S.state !== 'playing') return; }
  }
  // gentle separation so ghosts don't stack
  for (let i = 0; i < world.enemies.length; i++) for (let j = i + 1; j < world.enemies.length; j++) {
    const a = world.enemies[i], b = world.enemies[j], dd = a.pos.distanceTo(b.pos);
    if (dd < 0.9 && dd > 0.001) { const push = b.pos.clone().sub(a.pos).multiplyScalar((0.9 - dd) / dd * 0.5); a.pos.sub(push); b.pos.add(push); }
  }
  // world.projectiles
  for (const b of [...world.projectiles]) {
    b.pos.addScaledVector(b.dir, 4.5 * dt); b.life -= dt;
    if (Math.random() < dt * 30 && b.realm === S.realm) emit(b.pos.x, 0.7, b.pos.y, { n: 1, color: COL.violet, speed: 0.2, up: 0.2, life: 0.3, grav: 0 });
    if (b.realm === S.realm && b.pos.distanceTo(S.pos) < 0.55 && S.invuln <= 0) { takeHit(); b.life = 0; if (S.state !== 'playing') return; }
    if (Math.abs(b.pos.x) > ARENA_X + 1 || Math.abs(b.pos.y) > ARENA_Z + 1) b.life = 0;
    if (b.life <= 0) { scene.remove(b.node); world.projectiles = world.projectiles.filter(x => x !== b); }
  }
  if (S.timeLeft <= 0) finish(true);
}
