// Night Shift campaign: six levels, relic choice, proximity exit, and the L4-L6 objectives.
import * as THREE from 'three';
import { TUNING as T } from './tuning.js';
import { S, world } from './state.js';
import { scene } from './render.js';
import { spawnEnemy, removeEnemy } from './entities.js';
import { startLevel, resetDirector, director } from './director.js';
import { emitEvent } from './sim/events.js';
import { setOverlay, updateHud } from './hud.js';
import { copy } from './copy.js';
import { rng } from './sim/rng.js';
import { LEVELS, WARD_SPOTS, CATACOMB_WALLS } from './levels/registry.js';
import { setStage } from './stage.js';

export const campaign = {
  on: false, index: 0, relics: [], phase: 'play', entry: null, level: null, t: 0, pending: null,
  armed: false, holding: false, wards: [], wave: 0, waveN: 0, queued: 0, wait: 0, spawned: 0,
  souls: { carried: 0, banked: 0, orbs: [], lock: 0 },
  boss: null, attacks: [], props: null,
};

const RELICS = [
  { id: 'watch', name: () => copy.campaign.watch, desc: () => copy.campaign.watchDesc },
  { id: 'key', name: () => copy.campaign.key, desc: () => copy.campaign.keyDesc },
  { id: 'flowers', name: () => copy.campaign.flowers, desc: () => copy.campaign.flowersDesc },
];
const WAVE = [
  { n: 12, size: 4, gap: 2.5, intra: 0.18, speed: 1.3, dps: 5 },
  { n: 20, size: 5, gap: 1.8, intra: 0.18, speed: 1.5, dps: 6 },
  { n: 30, size: 6, gap: 1.8, intra: 0.18, speed: 1.7, dps: 7 },
];

export const cdMul = () => campaign.relics.includes('watch') ? T.campaign.relicWatch : 1;
export const distMul = () => campaign.relics.includes('key') ? T.campaign.relicKey : 1;
export const speedBonus = () => campaign.level?.kind === 'souls'
  ? T.campaign.soulSpeed * Math.min(campaign.souls.carried, T.campaign.soulSpeedCap) : 0;

const level = () => LEVELS[campaign.index];
const inExit = () => {
  const e = level()?.exit; if (!e || campaign.phase !== 'exit') return false;
  return Math.hypot(S.pos.x - e[0], S.pos.y - e[1]) <= T.campaign.exitRadius;
};

function clearWorld() {
  [...world.enemies].forEach(removeEnemy);
  for (const p of world.projectiles) scene.remove(p.node);
  world.projectiles = [];
  for (const o of campaign.souls.orbs) scene.remove(o.node);
  campaign.souls = { carried: 0, banked: 0, orbs: [], lock: 0 };
  campaign.boss = null; campaign.attacks = []; campaign.wards = [];
  if (campaign.props) { scene.remove(campaign.props); campaign.props = null; }
}

function pillarMesh(x, z) {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.4, 1.6, 6), new THREE.MeshToonMaterial({ color: 0x8f7cff }));
  m.position.set(x, 0.8, z); return m;
}
function buildProps() {
  const g = new THREE.Group();
  const lv = level();
  if (lv.portals) {
    for (const x of [-1, 1]) {
      const arch = new THREE.Mesh(new THREE.BoxGeometry(0.25, 2.2, 5), new THREE.MeshBasicMaterial({ color: 0x7d6bff, transparent: true, opacity: 0.45 }));
      arch.position.set(x * T.arena.x, 1.1, 0); g.add(arch);
    }
  }
  if (lv.walls) {
    for (const w of CATACOMB_WALLS) {
      const box = new THREE.Mesh(new THREE.BoxGeometry(w.w, 1.4, w.h), new THREE.MeshToonMaterial({ color: w.realm ? 0x9b7bff : 0xe08a3c, transparent: true, opacity: 0.85 }));
      box.position.set(w.x, 0.7, w.z); g.add(box);
    }
  }
  if (lv.kind === 'wards') for (const s of WARD_SPOTS) g.add(pillarMesh(s[0], s[1]));
  if (lv.kind === 'souls') {
    const shrine = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.9, 0.4, 8), new THREE.MeshToonMaterial({ color: 0xf7dbb0 }));
    shrine.position.set(0, 0.2, 0); g.add(shrine);
  }
  if (lv.kind === 'boss') {
    const body = new THREE.Mesh(new THREE.ConeGeometry(0.7, 2.4, 7), new THREE.MeshToonMaterial({ color: 0xc9b2ff }));
    body.position.set(0, 1.4, 0); g.add(body);
    const halo = new THREE.Mesh(new THREE.TorusGeometry(0.55, 0.06, 4, 10), new THREE.MeshBasicMaterial({ color: 0xffb85b }));
    halo.position.set(0, 2.5, 0); halo.rotation.x = Math.PI / 2; g.add(halo);
  }
  const exit = new THREE.Mesh(new THREE.RingGeometry(0.7, 0.9, 16), new THREE.MeshBasicMaterial({ color: 0xffb85b, transparent: true, opacity: 0.8, side: THREE.DoubleSide }));
  exit.rotation.x = -Math.PI / 2; exit.position.set(lv.exit[0], 0.05, lv.exit[1]); exit.visible = false; exit.name = 'exit';
  g.add(exit);
  scene.add(g); campaign.props = g;
}
function enterLevel(saveEntry = true) {
  const lv = level();
  campaign.level = lv; campaign.phase = 'play'; campaign.armed = false; campaign.t = 0; campaign.pending = null; campaign.holding = false;
  setStage(lv); clearWorld();
  S.realm = 0; S.combo = 0; S.comboTimer = 0; S.dashCd = 0; S.dashRemaining = 0; S.invuln = 0; S.dashHit.clear();
  S.pos.set(lv.start[0], lv.start[1]); S.facing.set(lv.facing[0], lv.facing[1]);
  if (S.state !== 'tutorial') S.state = 'playing';
  resetDirector();
  if (lv.kind === 'rounds') startLevel({ id: lv.id, name: lv.name, rounds: lv.rounds });
  else if (lv.kind === 'wards') initWards();
  else if (lv.kind === 'souls') initSouls();
  else initBoss();
  if (saveEntry) campaign.entry = { index: campaign.index, hp: S.hp, score: S.score, relics: [...campaign.relics], banished: S.banished };
  buildProps();
  emitEvent('level_started', { id: lv.id, index: campaign.index + 1 });
}

export function beginCampaign() {
  campaign.on = true; campaign.index = 0; campaign.relics = [];
  S.hp = T.player.maxHp; S.score = 0; S.banished = 0;
  enterLevel(true);
}
export function retryLevel() {
  if (!campaign.on || !campaign.entry) return false;
  const e = campaign.entry;
  campaign.index = e.index; campaign.relics = [...e.relics];
  S.hp = e.hp; S.score = e.score; S.banished = e.banished;
  enterLevel(false);
  campaign.entry = e;
  return true;
}

function openRelic() {
  campaign.phase = 'relic'; S.state = 'relic';
  const opts = RELICS.filter(r => r.id === 'flowers' || !campaign.relics.includes(r.id));
  const c = copy.campaign;
  setOverlay(`
    <div class="kit-panel res-panel" role="dialog" aria-label="${c.relicTitle}">
      <div class="kit-head"><span class="kit-divider"></span><h2>${c.relicTitle}</h2><span class="kit-divider"></span></div>
      <div class="res-actions">
        ${opts.map(r => `<button type="button" class="kit-btn" data-relic="${r.id}">${r.name()}<br><span class="tiny">${r.desc()}</span></button>`).join('')}
      </div>
    </div>`, { interactive: true, cls: 'results' });
  document.querySelectorAll('[data-relic]').forEach(b => b.addEventListener('click', () => chooseRelic(b.dataset.relic)));
  emitEvent('relic_offered', { options: opts.map(r => r.id) });
  updateHud();
}
export function chooseRelic(id) {
  if (campaign.phase !== 'relic') return false;
  if (id !== 'flowers' && campaign.relics.includes(id)) return false;
  if (!RELICS.some(r => r.id === id)) return false;
  if (id === 'flowers') S.hp = Math.min(T.player.maxHp, S.hp + 1);
  else campaign.relics.push(id);
  emitEvent('relic_selected', { id, hp: S.hp });
  campaign.phase = 'exit'; S.state = 'playing';
  setOverlay(null);
  campaign.armed = !inExit();
  const ring = campaign.props?.getObjectByName('exit'); if (ring) ring.visible = true;
  emitEvent('exit_unlocked', { level: level().id });
  updateHud();
  return true;
}

export function motion() {
  return !!(campaign.on && campaign.level && (campaign.level.portals || campaign.level.portalsNS || campaign.level.walls || campaign.level.solids));
}
export function endCampaign() {
  campaign.on = false; campaign.level = null; campaign.phase = 'play'; campaign.pending = null; campaign.relics = [];
  setStage(null); clearWorld();
}
export function loadLevel(id) {
  const i = LEVELS.findIndex(l => l.id === id);
  if (i < 0) return false;
  campaign.on = true; campaign.index = i; S.mode = 'night';
  enterLevel(true);
  return true;
}

function finishLevel() {
  emitEvent('level_completed', { id: level().id });
  if (campaign.index >= LEVELS.length - 1) return 'win';
  campaign.index += 1;
  enterLevel(true);
  return null;
}

function initWards() {
  campaign.wards = WARD_SPOTS.map(([x, z], id) => ({ id, x, z, hp: T.campaign.wardHp, alive: true }));
  campaign.wave = 0; campaign.spawned = 0; campaign.queued = 0; campaign.wait = 0; campaign.bonusPaid = false;
  queueWave(0);
}
function queueWave(i) {
  const w = WAVE[i];
  campaign.wave = i; campaign.waveN = w.n; campaign.spawned = 0; campaign.queued = w.n;
  campaign.queueAt = 0.4;
  campaign.groupLeft = w.size;
  campaign.holding = false;
}
function initSouls() {
  campaign.souls = { carried: 0, banked: 0, orbs: [], lock: 0, next: 2 };
  for (let i = 0; i < 3; i++) spawnEnemy({ wisp: false, realm: 1, pos: new THREE.Vector2(-0.6 + i * 0.6, 2.2 - i * 0.7) });
  for (let i = 0; i < 6; i++) spawnEnemy({ wisp: false, realm: i % 2, pos: new THREE.Vector2((i - 2.5) * 1.6, -2) });
}
function initBoss() {
  campaign.boss = { hp: T.campaign.bossHp, realm: 1, cd: 2, hitThisDash: false };
  campaign.attacks = [];
  for (let i = 0; i < 4; i++) spawnEnemy({ wisp: false, realm: i % 2, pos: new THREE.Vector2(Math.cos(i) * 4, Math.sin(i) * 3) });
}

function orbMesh(x, z) {
  const m = new THREE.Mesh(new THREE.SphereGeometry(0.18, 8, 6), new THREE.MeshBasicMaterial({ color: 0xb9a1e8 }));
  m.position.set(x, 0.35, z); scene.add(m); return m;
}
export function onBanish(e) {
  if (level()?.kind !== 'souls' || S.hp <= 0) return;
  const node = orbMesh(e.pos.x, e.pos.y);
  campaign.souls.orbs.push({ x: e.pos.x, z: e.pos.y, node, id: e.id });
}
export function onDamaged() {
  const s = campaign.souls;
  if (level()?.kind !== 'souls' || s.carried <= 0) return;
  const n = s.carried; s.carried = 0; s.lock = T.campaign.soulScatterLock;
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    const x = THREE.MathUtils.clamp(S.pos.x + Math.cos(a) * 1.4, -T.arena.x + 1, T.arena.x - 1);
    const z = THREE.MathUtils.clamp(S.pos.y + Math.sin(a) * 1.4, -T.arena.z + 1, T.arena.z - 1);
    s.orbs.push({ x, z, node: orbMesh(x, z), id: `s${i}` });
  }
}

function tickSouls(dt) {
  const s = campaign.souls; s.lock = Math.max(0, s.lock - dt);
  if (s.lock <= 0) {
    for (const o of [...s.orbs]) {
      if (Math.hypot(o.x - S.pos.x, o.z - S.pos.y) <= T.campaign.soulPickup) {
        s.carried += 1; scene.remove(o.node); s.orbs = s.orbs.filter(x => x !== o);
      }
    }
  }
  if (s.carried > 0 && Math.hypot(S.pos.x, S.pos.y) <= T.campaign.shrineRadius) {
    S.score += s.carried * T.campaign.soulScore;
    s.banked += s.carried; s.carried = 0;
    emitEvent('souls_banked', { banked: s.banked });
    if (s.banked >= T.campaign.soulGoal) return 'clear';
  }
  if (s.banked >= T.campaign.soulGoal) return 'clear';
  s.next -= dt;
  if (s.next <= 0 && world.enemies.length < T.campaign.soulCap) {
    const edge = rng.int(4);
    const p = new THREE.Vector2(rng.range(-1, 1) * 8, rng.range(-1, 1) * 6);
    if (edge === 0) p.x = -8; else if (edge === 1) p.x = 8; else if (edge === 2) p.y = -6; else p.y = 6;
    const burst = campaign.t > 25 ? 2 : 1;
    for (let i = 0; i < burst && world.enemies.length < T.campaign.soulCap; i++) spawnEnemy({ wisp: false, pos: p.clone() });
    s.next = Math.max(0.7, 2.2 - campaign.t * 0.012);
  }
  return null;
}

function tickWards(dt) {
  if (!campaign.wards.some(w => w.alive)) return 'lose';
  if (campaign.wait > 0) {
    campaign.wait -= dt;
    if (campaign.wait <= 0) queueWave(campaign.wave + 1);
    return null;
  }
  if (campaign.queued > 0) {
    campaign.queueAt -= dt;
    if (campaign.queueAt <= 0) {
      const w = WAVE[campaign.wave];
      const p = new THREE.Vector2(rng.range(-6, 6), rng.range(-2, 5));
      const e = spawnEnemy({ wisp: false, realm: campaign.spawned % 2, pos: p });
      e.ward = true; e.wardSpeed = w.speed; e.dps = w.dps; e.atk = 0.45;
      campaign.spawned += 1; campaign.queued -= 1; campaign.groupLeft -= 1;
      campaign.queueAt = campaign.groupLeft > 0 ? w.intra : w.gap;
      if (campaign.groupLeft <= 0) campaign.groupLeft = w.size;
    }
  }
  const done = campaign.spawned >= campaign.waveN && campaign.queued <= 0 && world.enemies.length === 0;
  if (done) {
    if (campaign.wave >= WAVE.length - 1) {
      if (!campaign.bonusPaid) {
        const alive = campaign.wards.filter(w => w.alive).length;
        S.score += alive * T.campaign.wardBonus;
        campaign.bonusPaid = true;
        emitEvent('ward_bonus', { alive, score: S.score });
      }
      return 'clear';
    }
    if (!campaign.holding) { campaign.wait = T.night.intermission; campaign.holding = true; }
  }
  return null;
}

export function driveWard(e, dt) {
  const live = campaign.wards.filter(w => w.alive);
  if (!live.length) return;
  live.sort((a, b) => (a.x - e.pos.x) ** 2 + (a.z - e.pos.y) ** 2 - ((b.x - e.pos.x) ** 2 + (b.z - e.pos.y) ** 2) || a.id - b.id);
  const t = live[0];
  const dir = new THREE.Vector2(t.x - e.pos.x, t.z - e.pos.y);
  const d = dir.length() || 1;
  e.pos.addScaledVector(dir.multiplyScalar(1 / d), e.wardSpeed * dt);
  if (d >= T.campaign.wardAttack) e.atk = 0.45;
  else {
    e.atk = Math.max(0, (e.atk ?? 0.45) - dt);
    if (e.atk <= 0) {
    t.hp = Math.max(0, t.hp - e.dps * dt);
    if (t.hp <= 0 && t.alive) { t.alive = false; emitEvent('ward_destroyed', { id: t.id }); }
    }
  }
}

function bossPhase() {
  const hp = campaign.boss?.hp ?? 0;
  if (hp >= 9) return 0; if (hp >= 5) return 1; return 2;
}
function tickBoss(dt) {
  const b = campaign.boss; if (!b || b.hp <= 0) return null;
  b.cd -= dt;
  if (b.cd <= 0) {
    const phase = bossPhase();
    const kind = phase === 0 || rng.chance(0.5) ? 'ring' : 'strike';
    campaign.attacks.push({ kind, realm: S.realm, age: 0, hit: false, x: S.pos.x, z: S.pos.y, r: 0 });
    b.cd = [3.4, 2.8, 2.2][phase];
    if (world.enemies.length < 4) {
      const room = Math.min(4, 7 - world.enemies.length);
      for (let i = 0; i < room; i++) spawnEnemy({ wisp: false, realm: i % 2, pos: new THREE.Vector2(Math.cos(i) * 4, Math.sin(i) * 3) });
    }
  }
  for (const a of campaign.attacks) {
    a.age += dt;
    if (a.kind === 'ring') {
      if (a.age > 0.85) a.r += 6 * dt;
      const prev = a.r - 6 * dt;
      const dist = Math.hypot(S.pos.x, S.pos.y);
      if (!a.hit && a.age > 0.85 && dist <= a.r + 0.4 && dist >= prev - 0.4 && S.realm === a.realm && S.invuln <= 0 && S.dashRemaining <= 0) {
        a.hit = true; return 'hurt';
      }
    } else if (!a.hit && a.age >= 0.85 && a.age <= 1.05) {
      if (Math.hypot(S.pos.x - a.x, S.pos.y - a.z) <= 1.8 && S.realm === a.realm && S.invuln <= 0 && S.dashRemaining <= 0) {
        a.hit = true; return 'hurt';
      }
    }
  }
  campaign.attacks = campaign.attacks.filter(a => a.age < (a.kind === 'ring' ? 4 : 1.2));
  return null;
}

export function bossHit() {
  const b = campaign.boss; if (!b || b.hp <= 0) return false;
  if (S.realm !== b.realm) return false;
  if (b.hitThisDash) return false;
  b.hitThisDash = true; b.hp -= 1; b.realm = 1 - b.realm;
  S.score += T.campaign.bossScore;
  emitEvent('boss_hit', { hp: b.hp, realm: b.realm });
  if (b.hp <= 0) {
    [...world.enemies].forEach(removeEnemy);
    campaign.attacks = [];
    emitEvent('boss_defeated', {});
    campaign.pending = 'clear';
    return 'dead';
  }
  return true;
}

// Returns 'win' | 'lose' | 'hurt' | null. Caller applies hurt/finish.
export function tick(dt) {
  if (!campaign.on || S.mode !== 'night' || campaign.phase === 'relic') return null;
  campaign.t += dt;
  if (campaign.pending === 'clear') {
    campaign.pending = null;
    const done = level();
    if (done?.relic) { openRelic(); return null; }
    return finishLevel();
  }
  if (campaign.phase === 'exit') {
    if (!inExit()) campaign.armed = true;
    else if (campaign.armed) return finishLevel();
    return null;
  }
  const lv = level();
  if (!lv || lv.kind === 'rounds') return null;
  let sig = null;
  if (lv.kind === 'wards') sig = tickWards(dt);
  else if (lv.kind === 'souls') sig = tickSouls(dt);
  else if (lv.kind === 'boss') sig = tickBoss(dt);
  if (sig === 'hurt') return 'hurt';
  if (sig === 'lose') return 'lose';
  if (sig === 'clear') {
    if (lv.relic) { openRelic(); return null; }
    return finishLevel();
  }
  return null;
}

export function onRoundsCleared() {
  const lv = level();
  if (!campaign.on || !lv?.relic) return 'win';
  openRelic();
  return null;
}

export function hudLine() {
  if (!campaign.on || S.mode !== 'night') return null;
  const c = copy.campaign, lv = level();
  if (!lv) return null;
  if (campaign.phase === 'exit') return c.exitHint;
  if (lv.kind === 'souls') return `${lv.name}  ${c.souls.replace('{have}', campaign.souls.banked).replace('{need}', T.campaign.soulGoal)}`;
  if (lv.kind === 'wards') return `${lv.name}  ${c.wards.replace('{n}', campaign.wards.filter(w => w.alive).length)}`;
  if (lv.kind === 'boss' && campaign.boss) return `${lv.name}  ${c.boss.replace('{hp}', campaign.boss.hp)}`;
  if (director.level) return null;
  return lv.name;
}

export function relicKey(code) {
  if (S.state !== 'relic') return false;
  const opts = [...document.querySelectorAll('[data-relic]')];
  const n = code === 'Digit1' ? 0 : code === 'Digit2' ? 1 : code === 'Digit3' ? 2 : -1;
  if (n >= 0 && opts[n]) return chooseRelic(opts[n].dataset.relic);
  if (code === 'Enter' || code === 'Space') { const b = opts[0]; if (b) return chooseRelic(b.dataset.relic); }
  return false;
}

export function snapshot() {
  return {
    on: campaign.on, index: campaign.index, phase: campaign.phase, relics: [...campaign.relics],
    level: level()?.id || null, hp: S.hp, score: S.score,
    souls: campaign.souls ? { carried: campaign.souls.carried, banked: campaign.souls.banked, orbs: campaign.souls.orbs.length } : null,
    boss: campaign.boss ? { hp: campaign.boss.hp, realm: campaign.boss.realm } : null,
    wards: campaign.wards.map(w => w.hp),
  };
}
