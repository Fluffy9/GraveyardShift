// Found items and world pickups for Night Shift.
//   Pickups   dropped by banished ghosts: Heart, Ward Bubble, Soul Draw, Stillwater, Parcel (a found item). Realm-bound: you can only
//             collect one while standing in its realm, the other realm shows a faint ring where it lies.
//   Items     kept in the bag (3 of each): three decoy lanterns, the Spellbook turret and the Bellstone.
//   Bubble    absorbs the next hit (the Flowers relic and the Ward Bubble pickup).
// Drops use their own rng stream (seeded from the run seed) so they never shift the gameplay sequence. Rigs and their motion come from
// src/items.js. This module has no dependency on game.js / campaign.js (they call in); `hooks` carries the few things it needs back.
import * as THREE from 'three';
import { COL } from './config.js';
import { TUNING as T } from './tuning.js';
import { scene } from './render.js';
import { PROTOS } from './assets.js';
import { ITEMS, PICKUPS } from './items.js';
import { S, world } from './state.js';
import { createRng } from './sim/rng.js';
import { emitEvent } from './sim/events.js';
import { emit } from './particles.js';
import { Sfx } from './sfx.js';
import { copy, fmt } from './copy.js';

export const ITEM_ORDER = ['lure_paper', 'lure_brass', 'lure_spirit', 'spellbook', 'bellstone'];
const isLure = id => id.startsWith('lure_');
const emptyInv = () => Object.fromEntries(ITEM_ORDER.map(k => [k, 0]));

export const loot = { inv: emptyInv(), bubble: 0, freeze: 0, magnet: 0, pickups: [], lures: [], turrets: [], pity: 0 };
// set by game.js: walk(from, to, realm) -> Vector2 obeying walls; popup(pos, html); toast(html, secs)
export const hooks = { walk: (a, b) => b, popup: () => {}, toast: () => {} };

const lootRng = createRng(7);
const group = new THREE.Group(); group.name = 'loot'; scene.add(group);
let nextId = 1;
const get = n => PROTOS[n].clone(true);
const SCALE = { pickup: 2.2, lure: 1.7, turret: 1.8 };      // the models are small next to a ghost; the world reads at about this size

// ---------- bubble ----------
const bubbleMesh = new THREE.Mesh(new THREE.IcosahedronGeometry(0.7, 2), new THREE.MeshBasicMaterial({ color: 0x9fd8ff, transparent: true, opacity: 0.24, depthWrite: false }));
const bubbleRim = new THREE.Mesh(new THREE.IcosahedronGeometry(0.7, 1), new THREE.MeshBasicMaterial({ color: 0xefe0ff, wireframe: true, transparent: true, opacity: 0.35, depthWrite: false }));
bubbleMesh.visible = bubbleRim.visible = false; scene.add(bubbleMesh, bubbleRim);

export function giveBubble() { if (loot.bubble) return false; loot.bubble = 1; emitEvent('bubble_gained', {}); return true; }
// Called by takeHit: true when the bubble soaked the hit.
export function soakHit() {
  if (!loot.bubble) return false;
  loot.bubble = 0; S.invuln = Math.max(S.invuln, T.player.bubbleInvuln); S.shake = Math.max(S.shake, 0.2); S.flash = 0.25;
  emit(S.pos.x, 0.8, S.pos.y, { n: 30, color: 0x9fd8ff, speed: 4.5, up: 1.5, life: 0.6, spread: 1 });
  emit(S.pos.x, 0.8, S.pos.y, { n: 10, color: 0xffffff, speed: 2, up: 3, life: 0.5, size: 2 });
  hooks.popup(S.pos, copy.bag.popped, false); Sfx.pop();
  emitEvent('bubble_popped', {});
  return true;
}

// ---------- lifecycle ----------
function dispose(list) { for (const x of list) group.remove(x.node); list.length = 0; }
export function resetLoot(seed = 1) {
  dispose(loot.pickups); dispose(loot.lures); dispose(loot.turrets);
  loot.inv = emptyInv(); loot.bubble = 0; loot.freeze = 0; loot.magnet = 0; loot.pity = 0; nextId = 1;
  lootRng.seed(((seed >>> 0) ^ 0x51ed1007) >>> 0);
}
export function clearLootField() { dispose(loot.pickups); dispose(loot.lures); dispose(loot.turrets); loot.freeze = 0; loot.magnet = 0; }
export const snapshotLoot = () => ({ inv: { ...loot.inv }, bubble: loot.bubble });
export function restoreLoot(s) {
  dispose(loot.pickups); dispose(loot.lures); dispose(loot.turrets); loot.freeze = 0; loot.magnet = 0;
  loot.inv = s ? { ...s.inv } : emptyInv(); loot.bubble = s ? s.bubble : 0;
}
export const bagCount = () => ITEM_ORDER.reduce((n, k) => n + loot.inv[k], 0);

// ---------- entities ----------
function entity(def, model, pos, realm, extra = {}) {
  const id = nextId++, rig = def.build(get, id * 1.7, extra.opts), node = new THREE.Group();
  node.add(rig.root);
  const ring = new THREE.Mesh(new THREE.RingGeometry(0.3, 0.4, 20), new THREE.MeshBasicMaterial({ color: realm ? COL.lavender : COL.amber, transparent: true, opacity: 0.45, depthWrite: false }));
  ring.rotation.x = -Math.PI / 2; ring.position.y = 0.04; node.add(ring);
  node.position.set(pos.x, 0, pos.y); node.scale.setScalar(extra.scale || 1); group.add(node);
  return { id, model, pos: pos.clone(), realm, rig, node, ring, ...extra };
}

// A pickup left in the world. `item` is the bag item a Parcel holds.
export function addPickup(kind, x, z, realm = S.realm, item = null) {
  const p = entity(PICKUPS[kind], kind, new THREE.Vector2(x, z), realm, { kind, item, life: T.items.pickupLife, scale: SCALE.pickup });
  loot.pickups.push(p); emitEvent('pickup_spawned', { id: p.id, kind, item, realm });
  return p;
}
function pickWeighted(table) {
  const keys = Object.keys(table); let total = 0; for (const k of keys) total += table[k];
  let r = lootRng() * total; for (const k of keys) { r -= table[k]; if (r <= 0) return k; }
  return keys[keys.length - 1];
}
// Roll a drop for a banished ghost. ctx.souls: the level collects souls (Soul Draw only makes sense there).
export function dropFrom(e, ctx = {}) {
  if (S.mode !== 'night' && S.mode !== 'endless') return null;
  const D = T.items.drop, p = (D.base + loot.pity) * (T.difficulty.loot ?? 1);
  if (lootRng() >= p) { loot.pity += D.pity; return null; }
  loot.pity = 0;
  const w = { ...D.weights };
  if (S.hp >= T.player.maxHp) w.heart *= 0.2;
  if (loot.bubble) w.shield *= 0.2;
  if (!ctx.souls) w.magnet = 0;
  const kind = pickWeighted(w);
  return addPickup(kind, e.pos.x, e.pos.y, S.realm, kind === 'parcel' ? pickWeighted(D.parcel) : null);
}

function collect(p) {
  const L = copy.bag;
  switch (p.kind) {
    case 'heart': if (S.hp >= T.player.maxHp) return false; S.hp += 1; hooks.popup(p.pos, L.heart, false); break;
    case 'shield': if (!giveBubble()) return false; hooks.popup(p.pos, L.shield, false); break;
    case 'magnet': loot.magnet = T.items.magnet.time; hooks.popup(p.pos, L.magnet, false); break;
    case 'hourglass': loot.freeze = Math.max(loot.freeze, T.items.hourglass.time); S.flash = 0.3; hooks.popup(p.pos, L.hourglass, true); break;
    case 'parcel':
      if (loot.inv[p.item] >= T.items.cap) return false;
      loot.inv[p.item] += 1; hooks.popup(p.pos, fmt(L.got, { item: copy.items[p.item].name }), true); break;
  }
  emit(p.pos.x, 0.5, p.pos.y, { n: 16, color: COL.amber, speed: 2.5, up: 2.5, life: 0.6 });
  Sfx.pickup(); emitEvent('pickup_collected', { id: p.id, kind: p.kind, item: p.item });
  return true;
}

// ---------- using items ----------
export function useItem(id) {
  if (S.state !== 'playing' || !(loot.inv[id] > 0)) return false;
  const I = T.items;
  if (isLure(id)) {
    if (loot.lures.length >= I.lure.maxActive) { hooks.toast(copy.bag.tooMany, 1.5); return false; }
    const to = S.pos.clone().addScaledVector(S.facing, I.lure.offset), pos = hooks.walk(S.pos.clone(), to, S.realm);
    const L = entity(ITEMS[id], id, pos, S.realm, { hp: I.lure[id].hp, max: I.lure[id].hp, range: I.lure[id].range, scale: SCALE.lure });
    loot.lures.push(L);
    emit(pos.x, 0.5, pos.y, { n: 12, color: COL.amber, speed: 1.5, up: 2, life: 0.5 });
  } else {
    const k = id === 'spellbook' ? I.spellbook : I.bellstone;
    const t = entity(ITEMS[id], id, S.pos, S.realm, { opts: { demo: false }, scale: SCALE.turret, life: k.life, next: id === 'spellbook' ? 0.5 : 0.2 });
    loot.turrets.push(t);
  }
  loot.inv[id] -= 1; Sfx.drop(); emitEvent('item_used', { id, realm: S.realm });
  return true;
}
// test / bot helper
export function grant(id, n = 1) { loot.inv[id] = Math.min(T.items.cap, (loot.inv[id] || 0) + n); }

// ---------- lures ----------
// The lure a ghost is drawn to: the nearest in its realm inside the lure's notice range (shielded Choirs ignore them).
export function lureFor(e) {
  if (!loot.lures.length || (e.kind === 'choir' && e.shield > 0)) return null;
  let best = null, bd = Infinity;
  for (const l of loot.lures) {
    if (l.realm !== e.realm) continue;
    const d = l.pos.distanceTo(e.pos);
    if (d < l.range && d < bd) { bd = d; best = l; }
  }
  return best;
}
export function hurtLure(l, amount) {
  if (l.hp <= 0) return;
  l.hp -= amount; l.hit = 0.15;
  if (l.hp <= 0) {
    emit(l.pos.x, 0.5, l.pos.y, { n: 22, color: 0xffb85b, speed: 3, up: 3, life: 0.7 });
    emit(l.pos.x, 0.5, l.pos.y, { n: 8, color: 0xffffff, speed: 2, up: 4, life: 0.4, size: 2 });
    emitEvent('lure_broken', { id: l.id, model: l.model });
  }
}

// ---------- knockback (spellbook pulse, bellstone toll) ----------
function pulseAt(t, radius, push, stun) {
  for (const e of world.enemies) {
    if (e.realm !== t.realm || e.ward || e.spawn > 0 || e.dead) continue;
    const dx = e.pos.x - t.pos.x, dz = e.pos.y - t.pos.y, d = Math.hypot(dx, dz);
    if (d > radius) continue;
    const k = push * (0.45 + 0.55 * (1 - d / radius)), nx = d > 0.01 ? dx / d : 1, nz = d > 0.01 ? dz / d : 0;
    e.pos.copy(hooks.walk(e.pos.clone(), new THREE.Vector2(e.pos.x + nx * k, e.pos.y + nz * k), e.realm));
    e.stun = Math.max(e.stun || 0, stun); if (e.pulse) e.pulse = null;
  }
  for (const b of world.projectiles) if (b.realm === t.realm && b.pos.distanceTo(t.pos) < radius) b.life = 0;
  for (let i = 0; i < 28; i++) { const a = i / 28 * Math.PI * 2; emit(t.pos.x + Math.cos(a) * 0.5, 0.3, t.pos.y + Math.sin(a) * 0.5, { n: 1, color: 0x5ff0d8, speed: 5, up: 0.4, life: 0.5, grav: 0, vx: Math.cos(a) * 4, vz: Math.sin(a) * 4 }); }
  t.rig.fire();
}

// ---------- per-tick ----------
const _v = new THREE.Vector2();
export function tickLoot(dt) {
  const I = T.items;
  loot.freeze = Math.max(0, loot.freeze - dt); loot.magnet = Math.max(0, loot.magnet - dt);
  for (const p of [...loot.pickups]) {
    p.life -= dt;
    if (p.life <= 0) { group.remove(p.node); loot.pickups.splice(loot.pickups.indexOf(p), 1); continue; }
    if (!p.taken && p.realm === S.realm && p.pos.distanceTo(S.pos) < I.pickupRadius && collect(p)) { p.rig.fire(); p.life = Math.min(p.life, 0.3); p.taken = true; }
  }
  for (const l of [...loot.lures]) {
    if (l.hit > 0) l.hit -= dt;
    if (l.hp <= 0) { group.remove(l.node); loot.lures.splice(loot.lures.indexOf(l), 1); }
  }
  for (const t of [...loot.turrets]) {
    t.life -= dt;
    if (t.model === 'spellbook') {
      t.next -= dt;
      if (t.next <= 0 && t.life > 0.3) { t.next = I.spellbook.interval; pulseAt(t, I.spellbook.radius, I.spellbook.push, I.spellbook.stun); Sfx.pulse(); emitEvent('turret_pulse', { id: t.id }); }
    } else if (t.next !== null) {
      t.next -= dt;
      if (t.next <= 0) { t.next = null; pulseAt(t, I.bellstone.radius, I.bellstone.push, I.bellstone.stun); Sfx.toll(); S.shake = Math.max(S.shake, 0.25); emitEvent('bellstone_tolled', { id: t.id }); }
    }
    if (t.life <= 0) { group.remove(t.node); loot.turrets.splice(loot.turrets.indexOf(t), 1); }
  }
  // Soul Draw is applied by campaign.tickSouls (it reads loot.magnet)
}

// ---------- visuals (called from visuals.js each frame) ----------
const SHOWN = new Set(['playing', 'paused', 'tutorial', 'relic', 'bag', 'won', 'lost']);
export function updateLootVisuals(dt, t) {
  group.visible = SHOWN.has(S.state);
  const show = x => {
    const same = x.realm === S.realm;
    x.rig.root.visible = same; x.ring.visible = !same;
    return same;
  };
  for (const p of loot.pickups) {
    show(p); p.rig.tick(t);
    if (!p.taken) p.node.visible = p.life > I3() || Math.sin(t * 18) > -0.2;                           // blink out in the last seconds
  }
  for (const l of loot.lures) {
    show(l); l.rig.tick(t);
    l.rig.root.scale.setScalar(0.55 + 0.45 * Math.max(0.15, l.hp / l.max) + (l.hit > 0 ? 0.06 : 0));
  }
  for (const k of loot.turrets) { show(k); k.rig.tick(t); }
  const b = loot.bubble > 0;
  bubbleMesh.visible = bubbleRim.visible = b;
  if (b) {
    const s = 1 + Math.sin(t * 3) * 0.03;
    bubbleMesh.position.set(S.pos.x, 0.85, S.pos.y); bubbleRim.position.copy(bubbleMesh.position);
    bubbleMesh.scale.setScalar(s); bubbleRim.scale.setScalar(s); bubbleRim.rotation.y = t * 0.6;
  }
}
const I3 = () => T.items.pickupFade;
