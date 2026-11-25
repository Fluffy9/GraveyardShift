// Portal wrap (L2, east-west and north-south), realm barriers (L3) and solid props (L2 fountain).
// No-ops unless the active level asks for them.
import * as THREE from 'three';
import { TUNING as T } from './tuning.js';
import { CATACOMB_WALLS } from './levels/registry.js';

const RAD = 0.35;
let level = null;
export const setStage = lv => { level = lv; };
export const stageLevel = () => level;

const ax = () => T.arena.x;
const az = () => T.arena.z;
const pad = () => T.arena.playerPad;
const portalX = () => ax();

function inAperture(z) { return Math.abs(z) <= T.campaign.portalAperture; }

export function clampArena(p, inset = pad()) {
  p.x = THREE.MathUtils.clamp(p.x, -ax() + inset, ax() - inset);
  p.y = THREE.MathUtils.clamp(p.y, -az() + inset, az() - inset);
  return p;
}

function wallsFor(realm) {
  if (!level?.walls) return [];
  return CATACOMB_WALLS.filter(w => w.realm === realm);
}
// solid round props, blocking in both realms: [{ x, z, r }]
const solids = () => level?.solids || [];

export function blocked(p, realm, rad = RAD) {
  for (const w of wallsFor(realm)) {
    const hx = w.w / 2 + rad, hz = w.h / 2 + rad;
    if (Math.abs(p.x - w.x) < hx && Math.abs(p.y - w.z) < hz) return w;
  }
  for (const c of solids()) if (Math.hypot(p.x - c.x, p.y - c.z) < c.r + rad) return c;
  return null;
}

function pushOut(p, realm, rad = RAD) {
  const w = blocked(p, realm, rad);
  if (!w) return p;
  if (w.r !== undefined) {                                   // round solid: push straight out from its centre
    const dx = p.x - w.x, dz = p.y - w.z, d = Math.hypot(dx, dz) || 1, k = (w.r + rad + 1e-4) / d;
    p.x = w.x + (d > 1e-6 ? dx : 1) * k; p.y = w.z + (d > 1e-6 ? dz : 0) * k;
    return p;
  }
  const hx = w.w / 2 + rad, hz = w.h / 2 + rad;
  const dx = p.x - w.x, dz = p.y - w.z;
  const ox = hx - Math.abs(dx), oz = hz - Math.abs(dz);
  if (ox < oz) p.x += Math.sign(dx || 1) * ox;
  else p.y += Math.sign(dz || 1) * oz;
  return p;
}

// Slide a step. Returns the accepted point.
function slide(from, to, realm) {
  if (!level?.walls && !level?.solids) return to;
  if (!blocked(to, realm)) return to;
  const xOnly = new THREE.Vector2(to.x, from.y);
  const zOnly = new THREE.Vector2(from.x, to.y);
  if (!blocked(xOnly, realm)) return xOnly;
  if (!blocked(zOnly, realm)) return zOnly;
  return from.clone();
}

// Portal planes. East/west: x = +-arena.x, aperture |z| <= portalAperture. North/south (level.portalsNS = [x centres]):
// z = +-arena.z, aperture |x - centre| <= portalAperture. Crossing a plane inside an aperture exits at the opposite plane.
function planes() {
  const out = [];
  if (level?.portals) for (const v of [-ax(), ax()]) out.push({ axis: 'x', v, open: z => inAperture(z) });
  if (level?.portalsNS) for (const v of [-az(), az()]) out.push({ axis: 'y', v, open: x => level.portalsNS.some(c => Math.abs(x - c) <= T.campaign.portalAperture) });
  return out;
}
// Wrap across one portal plane. One crossing per call; caller may repeat.
function wrapOnce(from, to) {
  let best = null;
  for (const pl of planes()) {
    const o = pl.axis === 'x' ? 'y' : 'x';
    const a = from[pl.axis], b = to[pl.axis], d = b - a;
    if (Math.abs(d) < 1e-8) continue;
    if (!((a > pl.v && b <= pl.v) || (a < pl.v && b >= pl.v) || (a === pl.v && Math.sign(d) === Math.sign(pl.v)))) continue;   // also from on the plane
    const t = (pl.v - a) / d;
    if (t < 0 || t > 1 || (best && t >= best.t)) continue;
    const c = from[o] + (to[o] - from[o]) * t;
    if (!pl.open(c)) continue;
    const at = new THREE.Vector2(), out = new THREE.Vector2(), rest = new THREE.Vector2();
    at[pl.axis] = pl.v; at[o] = c;
    out[pl.axis] = -pl.v; out[o] = c;
    rest[pl.axis] = -pl.v + (b - pl.v); rest[o] = c + (to[o] - c);
    best = { t, at, out, rest };
  }
  return best;
}

// Walk or dash endpoint. `segs` are the pieces a swept hit should test (portal gap excluded).
export function travel(from, to, realm) {
  const segs = [];
  let cursor = from.clone();
  let dest = to.clone();
  for (let n = 0; n < 3; n++) {
    const wrap = wrapOnce(cursor, dest);
    if (!wrap) break;
    segs.push([cursor.clone(), wrap.at.clone()]);
    cursor = wrap.out.clone();
    dest = wrap.rest.clone();
  }
  dest = slide(cursor, dest, realm);
  if (!level?.portals && !level?.portalsNS) clampArena(dest);
  else {
    // a portal axis lets you reach its plane (the wrap happens there); the other axis keeps the usual padding
    const px = level.portals ? 0 : pad(), pz = level.portalsNS ? 0 : pad();
    dest.x = THREE.MathUtils.clamp(dest.x, -ax() + px, ax() - px);
    dest.y = THREE.MathUtils.clamp(dest.y, -az() + pz, az() - pz);
  }
  if (level?.walls || level?.solids) pushOut(dest, realm);
  segs.push([cursor.clone(), dest.clone()]);
  return { pos: dest, segs };
}

export function planDash(from, facing, dist, realm) {
  const raw = from.clone().addScaledVector(facing, dist);
  return travel(from, raw, realm);
}

export function pointAlong(segs, u) {
  const lengths = segs.map(([a, b]) => a.distanceTo(b));
  const total = lengths.reduce((s, n) => s + n, 0) || 1;
  let left = THREE.MathUtils.clamp(u, 0, 1) * total;
  for (let i = 0; i < segs.length; i++) {
    if (left <= lengths[i] || i === segs.length - 1) {
      const [a, b] = segs[i];
      const t = lengths[i] < 1e-6 ? 1 : left / lengths[i];
      return a.clone().lerp(b, THREE.MathUtils.clamp(t, 0, 1));
    }
    left -= lengths[i];
  }
  return segs[segs.length - 1][1].clone();
}

// Nearest legal spot within campaign.unstick. null = stay put and reject the cross.
export function unstick(p, realm) {
  if ((!level?.walls && !level?.solids) || !blocked(p, realm)) return p.clone();
  const max = T.campaign.unstick;
  for (let r = 0.25; r <= max + 1e-6; r += 0.25) {
    for (let i = 0; i < 16; i++) {
      const a = (i / 16) * Math.PI * 2;
      const q = new THREE.Vector2(p.x + Math.cos(a) * r, p.y + Math.sin(a) * r);
      clampArena(q);
      if (!blocked(q, realm)) return q;
    }
  }
  return null;
}

export function shotBlocked(p, realm) {
  return !!blocked(p, realm, 0.15);
}
