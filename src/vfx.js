// Ambient lighting and particle effects: glow halos, flickering lights, embers, fireflies, pollen, dust, ash, soul motes
// and magic swirls. Purely cosmetic and render-side: it has its own random source and never touches the simulation's
// rng streams, so gameplay and tests stay deterministic. Everything registered here is tied to a parent object and only
// runs while that parent (and its ancestors) are visible, so hidden level sets cost nothing.
import * as THREE from 'three';
import { scene } from './render.js';

let seed = 1234567;
const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
const n1 = t => Math.sin(t) * 0.6 + Math.sin(t * 2.3 + 1.7) * 0.3 + Math.sin(t * 5.1 + 0.4) * 0.1;
const visible = o => { for (let p = o; p; p = p.parent) if (!p.visible) return false; return true; };

// ---------- glow halos ----------
// stepped radial falloff (reads as pixel art once the scene is rendered into the low-res buffer)
const glowTex = (() => {
  const N = 64, c = document.createElement('canvas'); c.width = c.height = N; const g = c.getContext('2d'), img = g.createImageData(N, N);
  for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
    const r = Math.hypot(x + 0.5 - N / 2, y + 0.5 - N / 2) / (N / 2);
    const a = r >= 1 ? 0 : Math.round(Math.pow(1 - r, 1.8) * 5) / 5;          // five steps
    img.data.set([255, 255, 255, a * 255], (y * N + x) * 4);
  }
  g.putImageData(img, 0, 0);
  const t = new THREE.CanvasTexture(c); t.magFilter = t.minFilter = THREE.NearestFilter; return t;
})();
// flicker profiles: multiplier around 1 for a light of that kind at time t (phase-shifted per instance)
const FLICKER = {
  candle: t => 0.86 + n1(t * 11) * 0.12 + n1(t * 23) * 0.04,
  lamp: t => 0.93 + n1(t * 6) * 0.05 - (Math.sin(t * 0.37) > 0.97 ? 0.25 : 0),       // rare gutter dip
  brazier: t => 0.82 + n1(t * 5) * 0.16 + n1(t * 13) * 0.08,
  magic: t => 0.85 + Math.sin(t * 1.3) * 0.15,
  window: t => 0.97 + (Math.sin(t * 0.21) > 0.985 ? -0.3 * Math.abs(Math.sin(t * 40)) : 0),
  steady: () => 1,
};
const WARM = new Set(['candle', 'lamp', 'brazier', 'window']);
const glows = [], lamps = [];
export function glow(parent, x, y, z, { color = 0xffb85b, size = 1.2, kind = 'candle', opacity = 0.55 } = {}) {
  const m = new THREE.SpriteMaterial({ map: glowTex, color, transparent: true, opacity, blending: THREE.AdditiveBlending, depthWrite: false });
  const s = new THREE.Sprite(m); s.position.set(x, y, z); s.scale.setScalar(size); s.renderOrder = 6;
  parent.add(s); glows.push({ s, kind, size, opacity, phase: rnd() * 100 });
  return s;
}
// register a point light so it flickers by kind (and warm lights dim in the spirit world)
export function flicker(light, kind = 'lamp') { lamps.push({ L: light, kind, base: light.intensity, phase: rnd() * 100 }); return light; }

// ---------- particles ----------
const MAX = 1400;
const geo = new THREE.BufferGeometry();
const pos = new Float32Array(MAX * 3), col = new Float32Array(MAX * 4), size = new Float32Array(MAX);
geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
geo.setAttribute('color', new THREE.BufferAttribute(col, 4));
geo.setAttribute('size', new THREE.BufferAttribute(size, 1));
geo.setDrawRange(0, 0);
const mat = new THREE.ShaderMaterial({
  vertexShader: `attribute float size; attribute vec4 color; varying vec4 vC; void main(){ vC = color; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); gl_PointSize = size; }`,
  fragmentShader: `varying vec4 vC; void main(){ gl_FragColor = vec4(vC.rgb * vC.a * 1.6, vC.a); }`,
  transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
});
const points = new THREE.Points(geo, mat); points.frustumCulled = false; points.renderOrder = 7; scene.add(points);
const P = [];
const C = hex => new THREE.Color(hex).convertSRGBToLinear();

// Behaviours. Each particle: x,y,z, vx,vy,vz, life,max, c0,c1 colours, sz, type-specific fields.
const STEP = {
  ember(p, dt, t) { p.vx += n1(t * 3 + p.k) * dt * 0.8; p.vz += n1(t * 2.7 + p.k * 2) * dt * 0.8; p.vy -= dt * 0.15; },
  firefly(p, dt, t) { p.x = p.ox + Math.sin(t * 0.6 + p.k) * p.r; p.z = p.oz + Math.sin(t * 0.47 + p.k * 1.7) * p.r * 0.8; p.y = p.oy + Math.sin(t * 1.1 + p.k) * 0.25; p.blink = 0.5 + 0.5 * Math.sin(t * 2.5 + p.k * 3); },
  petal(p, dt, t) { p.vx = Math.sin(t * 1.7 + p.k) * 0.35 + p.wind; p.vz = Math.cos(t * 1.3 + p.k) * 0.2; },
  mote(p, dt, t) { p.vx = n1(t * 0.4 + p.k) * 0.08; p.vz = n1(t * 0.35 + p.k * 1.3) * 0.08; },
  ash(p, dt, t) { p.vx = p.wind + n1(t * 1.5 + p.k) * 0.4; p.vz = n1(t * 1.2 + p.k) * 0.3; },
  swirl(p, dt, t) {                                                      // orbit a centre, rising, radius easing in
    p.a += dt * p.w; p.h += dt * p.rise; const f = p.life / p.max; const r = p.r * (p.inward ? f : 1);
    p.x = p.ox + Math.cos(p.a) * r * p.sx; p.z = p.oz + Math.sin(p.a) * r * p.sz; p.y = p.oy + p.h; p.vx = p.vy = p.vz = 0;
  },
  spark(p, dt) { p.vy -= dt * 3; },
};
function spawn(type, o) {
  if (P.length >= MAX) return;
  P.push({ type, vx: 0, vy: 0, vz: 0, k: rnd() * 100, blink: 1, sz: 1, ...o, max: o.life });
}

// emitters: { parent, rate, fn(spawnAt) } accumulate fractional spawns while visible
const emitters = [];
export function emitter(parent, rate, fn) { const e = { parent, rate, fn, acc: rnd() }; emitters.push(e); return e; }

// ---------- emitter presets (positions in the parent's local space; parents are level sets at the origin) ----------
export const fxEmbers = (parent, x, y, z, { rate = 3, color = 0xffb85b, spread = 0.15, up = 0.6, life = 1.6 } = {}) =>
  emitter(parent, rate, () => spawn('ember', { x: x + (rnd() - 0.5) * spread, y, z: z + (rnd() - 0.5) * spread, vy: up * (0.6 + rnd() * 0.6), life: life * (0.6 + rnd() * 0.6), c0: C(color), c1: C(0x8e3a3e), sz: rnd() < 0.3 ? 2 : 1 }));
export const fxFireflies = (parent, cx, cz, { n = 10, area = [10, 8], color = 0xffe29a, y = 0.9 } = {}) => {
  for (let i = 0; i < n; i++) spawn('firefly', { parent, ox: cx + (rnd() - 0.5) * area[0], oz: cz + (rnd() - 0.5) * area[1], oy: y + rnd() * 1.2, r: 0.6 + rnd() * 1.2, life: 1e9, c0: C(color), c1: C(color), sz: 2 });
};
export const fxPetals = (parent, { rate = 3, colors = [0xd98ac4, 0xc45a7a, 0xf6d1a5], area = [24, 18], wind = 0.25 } = {}) =>
  emitter(parent, rate, () => { const c = colors[Math.floor(rnd() * colors.length)]; spawn('petal', { x: (rnd() - 0.5) * area[0], y: 4 + rnd() * 2, z: (rnd() - 0.5) * area[1] - 1, vy: -0.45 - rnd() * 0.2, wind: wind * (0.5 + rnd()), life: 10, c0: C(c), c1: C(c), sz: rnd() < 0.4 ? 2 : 1 }); });
export const fxMotes = (parent, { rate = 4, color = 0xf7dbb0, area = [22, 18], y = [0.3, 3], life = 6 } = {}) =>
  emitter(parent, rate, () => spawn('mote', { x: (rnd() - 0.5) * area[0], y: y[0] + rnd() * (y[1] - y[0]), z: (rnd() - 0.5) * area[1] - 1, vy: 0.03, life, c0: C(color), c1: C(color), sz: 1, fade: true }));
export const fxAsh = (parent, { rate = 8, wind = 1.4, colors = [0x9c93a8, 0xff9a3c] } = {}) =>
  emitter(parent, rate, () => { const c = colors[rnd() < 0.8 ? 0 : 1]; spawn('ash', { x: -14 + rnd() * 4, y: 0.5 + rnd() * 4, z: (rnd() - 0.5) * 20 - 1, vy: -0.05, wind: wind * (0.7 + rnd() * 0.6), life: 14, c0: C(c), c1: C(c), sz: rnd() < 0.3 ? 2 : 1, fade: true }); });
export const fxSwirl = (parent, x, y, z, { rate = 6, color = 0xb9a1e8, r = 0.8, rise = 0.5, w = 2.5, life = 2.2, sx = 1, sz = 1, inward = false, color2 } = {}) =>
  emitter(parent, rate, () => spawn('swirl', { ox: x, oy: y, oz: z, a: rnd() * Math.PI * 2, h: 0, r: r * (0.7 + rnd() * 0.5), rise: rise * (0.6 + rnd() * 0.8), w: w * (rnd() < 0.5 ? 1 : 1.15), sx, sz, inward, life, c0: C(color), c1: C(color2 ?? color), sz: rnd() < 0.35 ? 2 : 1, x, y, z }));
export const fxSparks = (parent, x, y, z, { n = 6, color = 0xffe29a } = {}) => { for (let i = 0; i < n; i++) { const a = rnd() * 6.28; spawn('spark', { x, y, z, vx: Math.cos(a) * 1.2, vy: 1 + rnd(), vz: Math.sin(a) * 1.2, life: 0.5 + rnd() * 0.4, c0: C(color), c1: C(0xd9602e), sz: 1 }); } };

export const fxEmberAt = (x, y, z, { color = 0xffb85b, color2 = 0x8e3a3e, up = 0.5, life = 0.9 } = {}) =>
  spawn('ember', { x: x + (rnd() - 0.5) * 0.12, y, z: z + (rnd() - 0.5) * 0.12, vy: up * (0.5 + rnd()), life: life * (0.6 + rnd() * 0.6), c0: C(color), c1: C(color2), sz: 1 });
export const vfxRandom = rnd;

// ---------- tick ----------
let last = 0, realmVis = 0;
export function tickVfx(t, realm = 0) {
  const dt = Math.min(0.1, Math.max(0, t - last)); last = t;
  realmVis += (realm - realmVis) * Math.min(1, dt * 7);
  for (const g of glows) {
    if (!visible(g.s)) continue;
    const f = FLICKER[g.kind](t + g.phase), warm = WARM.has(g.kind);
    g.s.material.opacity = g.opacity * f * (warm ? 1 - realmVis * 0.55 : 1 + realmVis * 0.3);
    g.s.scale.setScalar(g.size * (0.94 + (f - 0.9) * 0.6));
  }
  for (const l of lamps) if (visible(l.L)) l.L.intensity = l.base * FLICKER[l.kind](t + l.phase) * (WARM.has(l.kind) ? 1 - realmVis * 0.55 : 1 + realmVis * 0.25);
  for (const e of emitters) {
    if (!visible(e.parent)) continue;
    e.acc += e.rate * dt;
    while (e.acc >= 1) { e.acc -= 1; e.fn(); }
  }
  let j = 0;
  for (let i = 0; i < P.length; i++) {
    const p = P[i];
    if (p.parent && !visible(p.parent)) { P[j++] = p; continue; }                  // dormant fireflies keep their slot
    p.life -= dt; if (p.life <= 0) continue;
    STEP[p.type](p, dt, t);
    p.x += p.vx * dt; p.y += p.vy * dt; p.z += p.vz * dt;
    if (p.y < 0.03) { p.y = 0.03; p.vy = 0; }
    P[j++] = p;
  }
  P.length = j;
  let n = 0;
  for (const p of P) {
    if (p.parent && !visible(p.parent)) continue;
    const f = p.life / p.max;
    let a = p.fade ? Math.min(1, Math.min(f, 1 - f) * 4) : Math.min(1, f * 2.5);
    a *= p.blink;
    pos[n * 3] = p.x; pos[n * 3 + 1] = p.y; pos[n * 3 + 2] = p.z;
    const c0 = p.c0, c1 = p.c1, k = 1 - f;
    col[n * 4] = c0.r + (c1.r - c0.r) * k; col[n * 4 + 1] = c0.g + (c1.g - c0.g) * k; col[n * 4 + 2] = c0.b + (c1.b - c0.b) * k; col[n * 4 + 3] = a;
    size[n] = p.sz + 1; n++;                                                   // in low-res buffer pixels
  }
  geo.setDrawRange(0, n);
  geo.attributes.position.needsUpdate = geo.attributes.color.needsUpdate = geo.attributes.size.needsUpdate = true;
}
export const vfxStats = () => ({ particles: P.length, glows: glows.length, lights: lamps.length, emitters: emitters.length });
