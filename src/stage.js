// Portal wrap (L2) and realm barriers (L3). No-ops unless the active level asks for them.
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

export function blocked(p, realm, rad = RAD) {
  for (const w of wallsFor(realm)) {
    const hx = w.w / 2 + rad, hz = w.h / 2 + rad;
    if (Math.abs(p.x - w.x) < hx && Math.abs(p.y - w.z) < hz) return w;
  }
  return null;
}

function pushOut(p, realm, rad = RAD) {
  const w = blocked(p, realm, rad);
  if (!w) return p;
  const hx = w.w / 2 + rad, hz = w.h / 2 + rad;
  const dx = p.x - w.x, dz = p.y - w.z;
  const ox = hx - Math.abs(dx), oz = hz - Math.abs(dz);
  if (ox < oz) p.x += Math.sign(dx || 1) * ox;
  else p.y += Math.sign(dz || 1) * oz;
  return p;
}

// Slide a step. Returns the accepted point.
function slide(from, to, realm) {
  if (!level?.walls) return to;
  if (!blocked(to, realm)) return to;
  const xOnly = new THREE.Vector2(to.x, from.y);
  const zOnly = new THREE.Vector2(from.x, to.y);
  if (!blocked(xOnly, realm)) return xOnly;
  if (!blocked(zOnly, realm)) return zOnly;
  return from.clone();
}

// Wrap across the east/west aperture. One crossing per call; caller may repeat.
function wrapOnce(from, to) {
  if (!level?.portals) return null;
  const px = portalX();
  const dx = to.x - from.x;
  if (Math.abs(dx) < 1e-8) return null;
  for (const plane of [-px, px]) {
    const crossing = (from.x - plane) * (to.x - plane) < 0 || to.x === plane && Math.sign(dx) === Math.sign(plane);
    if (!crossing && !((from.x > plane && to.x <= plane) || (from.x < plane && to.x >= plane))) continue;
    if (!((from.x > plane && to.x <= plane) || (from.x < plane && to.x >= plane))) continue;
    const t = (plane - from.x) / dx;
    if (t < 0 || t > 1) continue;
    const z = from.y + (to.y - from.y) * t;
    if (!inAperture(z)) continue;
    const remainX = to.x - plane;
    const remainZ = to.y - z;
    const exitX = -plane;
    return {
      at: new THREE.Vector2(plane, z),
      out: new THREE.Vector2(exitX, z),
      rest: new THREE.Vector2(exitX + remainX, z + remainZ),
    };
  }
  return null;
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
  if (!level?.portals) clampArena(dest);
  else {
    dest.x = THREE.MathUtils.clamp(dest.x, -ax(), ax());
    dest.y = THREE.MathUtils.clamp(dest.y, -az() + pad(), az() - pad());
    if (level.walls) pushOut(dest, realm);
  }
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
  if (!level?.walls || !blocked(p, realm)) return p.clone();
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
