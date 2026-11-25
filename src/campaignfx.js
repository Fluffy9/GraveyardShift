// Render-side visuals for the Night Shift campaign: exit marker, ward pillar states, soul orbs (dropped, carried, banked),
// the Hollow Warden (realm colour, hits, death) and its attack telegraphs. Reads campaign state and listens to events;
// never changes gameplay state.
import * as THREE from 'three';
import { scene } from './render.js';
import { S } from './state.js';
import { campaign } from './campaign.js';
import { PROTOS } from './assets.js';
import { on } from './sim/events.js';
import { setWardState, bellTowerWarden, bellKick } from './sets.js';
import { glow, fxSwirl, fxSparks } from './vfx.js';

const AMBER = new THREE.Color(0xffb85b), CYAN = new THREE.Color(0x7de3ff);

// ---------- exit marker: amber ring on the floor, a glow and a rising swirl (one per exit position) ----------
const exits = {};
function exitMarker(x, z) {
  const key = x + ',' + z;
  if (exits[key]) return exits[key];
  const g = new THREE.Group(); g.visible = false; g.position.set(x, 0, z); scene.add(g);
  const ring = new THREE.Mesh(new THREE.RingGeometry(0.95, 1.25, 24), new THREE.MeshBasicMaterial({ color: 0xffb85b, transparent: true, opacity: 0.85, depthWrite: false }));
  ring.rotation.x = -Math.PI / 2; ring.position.y = 0.05; g.add(ring);
  const inner = new THREE.Mesh(new THREE.CircleGeometry(0.95, 24), new THREE.MeshBasicMaterial({ color: 0xffb85b, transparent: true, opacity: 0.18, depthWrite: false }));
  inner.rotation.x = -Math.PI / 2; inner.position.y = 0.04; g.add(inner);
  glow(g, 0, 0.6, 0, { color: 0xffb85b, size: 3.2, kind: 'magic', opacity: 0.5 });
  fxSwirl(g, x, 0.1, z, { rate: 14, color: 0xffe29a, color2: 0xff9a3c, r: 1.1, rise: 1.4, w: 2.4, life: 1.6 });   // world coords
  return (exits[key] = { g, ring });
}

// ---------- attack telegraphs: one shader plane per live attack ----------
const TELE = new THREE.PlaneGeometry(1, 1);
function teleMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: { color: { value: new THREE.Color() }, alpha: { value: 1 }, r: { value: 1 }, w: { value: 0.8 }, fill: { value: 0 }, size: { value: 1 } },
    vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); }`,
    fragmentShader: `uniform vec3 color; uniform float alpha, r, w, fill, size; varying vec2 vUv;
      void main(){ float d = length(vUv - 0.5) * size;                           // world-space distance from the centre
        float band = step(r - w * 0.5, d) * step(d, r + w * 0.5);             // the hit band
        float disc = step(d, r * fill) * 0.35;                                // charging fill
        float edge = step(r - 0.08, d) * step(d, r + 0.08) * 0.6;             // thin outline
        float a = max(band, max(disc, edge)) * alpha; if (a < 0.01) discard;
        gl_FragColor = vec4(color * (1.0 + band * 0.6), a); }`,
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
  });
}
const tele = [];
function teleFor(i) {
  while (tele.length <= i) { const m = new THREE.Mesh(TELE, teleMaterial()); m.rotation.x = -Math.PI / 2; m.position.y = 0.06; m.renderOrder = 3; scene.add(m); tele.push(m); }
  return tele[i];
}

// ---------- carried souls orbit the player ----------
const carried = [];
function carriedOrb(i) {
  while (carried.length <= i) { const o = PROTOS.soul_orb.clone(true); o.scale.setScalar(0.7); scene.add(o); carried.push(o); }
  return carried[i];
}

// ---------- events ----------
let wardenFx = { flash: 0, dying: 0, realm: -1 }, prevAttacks = 0;
const wardSeen = [];
on('level_started', e => {
  wardenFx = { flash: 0, dying: 0, realm: -1 }; prevAttacks = 0; wardSeen.length = 0;
  const w = bellTowerWarden(); if (w) { w.root.visible = true; w.root.scale.setScalar(1); w.root.position.y = 0; }
  for (const k in exits) exits[k].g.visible = false;
});
on('boss_hit', () => {
  wardenFx.flash = 1;
  fxSparks(null, 0, 3.0, 0, { n: 24, color: 0xefe0ff });
});
on('boss_defeated', () => { wardenFx.dying = 0.0001; fxSparks(null, 0, 2.5, 0, { n: 60, color: 0x7de3ff }); });
on('souls_banked', () => fxSparks(null, 0, 1.2, 0, { n: 30, color: 0x5ff0d8 }));
on('ward_destroyed', e => { const w = campaign.wards[e.id]; if (w) fxSparks(null, w.x, 1.4, w.z, { n: 40, color: 0xff9a3c }); });

// ---------- per frame ----------
let last = 0;
export function tickCampaignFx(t) {
  const dt = Math.min(0.1, Math.max(0, t - last)); last = t;
  const lv = campaign.on ? campaign.level : null;

  // exit
  for (const k in exits) exits[k].g.visible = false;
  if (lv && campaign.phase === 'exit') {
    const ex = exitMarker(lv.exit[0], lv.exit[1]);
    ex.g.visible = true;
    ex.ring.scale.setScalar(1 + Math.sin(t * 3) * 0.06); ex.ring.material.opacity = 0.7 + Math.sin(t * 3) * 0.15;
  }

  // wards: model state follows health; sparks while a pillar is being hit
  if (lv?.kind === 'wards') campaign.wards.forEach((w, i) => {
    const state = !w.alive ? 'broken' : w.hp > 50 ? 'intact' : 'damaged';
    const prev = wardSeen[i];
    if (!prev || prev.state !== state) setWardState(i, state);
    if (prev && w.hp < prev.hp && t - (prev.spark || 0) > 0.3) { fxSparks(null, w.x, 1.0, w.z, { n: 5, color: 0xffb85b }); prev.spark = t; }
    wardSeen[i] = { state, hp: w.hp, spark: prev?.spark || 0 };
  });

  // souls: dropped orbs bob and spin; carried souls orbit the player
  const s = campaign.souls;
  for (const o of s?.orbs || []) if (o.node) { o.node.position.y = 0.1 + Math.sin(t * 3 + o.x) * 0.08; o.node.rotation.y = t * 2 + o.z; }
  const nCarry = lv?.kind === 'souls' ? Math.min(12, s.carried) : 0;
  carried.forEach((o, i) => { o.visible = i < nCarry; });
  for (let i = 0; i < nCarry; i++) {
    const o = carriedOrb(i), a = t * 2.2 + i / nCarry * Math.PI * 2, r = 0.75 + (i % 2) * 0.15;
    o.visible = true; o.position.set(S.pos.x + Math.cos(a) * r, 0.7 + Math.sin(t * 3 + i) * 0.12, S.pos.y + Math.sin(a) * r);
  }

  // Warden
  const w = bellTowerWarden(), b = campaign.boss;
  if (w && lv?.kind === 'boss') {
    if (b && b.realm !== wardenFx.realm) { w.setRealm(b.realm); wardenFx.realm = b.realm; }
    if (wardenFx.flash > 0) {
      wardenFx.flash = Math.max(0, wardenFx.flash - dt * 3);
      w.rig.scale.setScalar(1.1 * (1 + wardenFx.flash * 0.12));
      for (const m of w.glows) m.emissiveIntensity = 1 + wardenFx.flash * 3;
    } else w.rig.scale.setScalar(1.1);
    if (wardenFx.dying > 0) {
      wardenFx.dying += dt / 1.4;
      const k = Math.min(1, wardenFx.dying);
      w.root.scale.setScalar(1 - k * 0.6); w.root.position.y = -k * 1.5; w.root.rotation.y = k * 4;
      if (k >= 1) w.root.visible = false;
    }
    // telegraphs
    const atks = campaign.attacks;
    if (atks.length > prevAttacks && atks.some(a => a.kind === 'ring' && a.age < 0.1)) bellKick();
    prevAttacks = atks.length;
    atks.forEach((a, i) => {
      const m = teleFor(i), u = m.material.uniforms, mine = a.realm === S.realm;
      m.visible = true;
      u.color.value.copy(a.realm ? CYAN : AMBER);
      if (a.kind === 'ring') {
        const size = Math.max(4, (a.r + 1) * 2.2); m.scale.set(size, size, 1); m.position.set(0, 0.06, 0); u.size.value = size;
        if (a.age < 0.85) { u.r.value = 1.2 + (a.age / 0.85) * 0.6; u.w.value = 0.15; u.fill.value = 0; u.alpha.value = (0.4 + 0.6 * Math.abs(Math.sin(a.age * 12))) * (mine ? 1 : 0.3); }
        else { u.r.value = Math.max(0.3, a.r); u.w.value = 0.8; u.fill.value = 0; u.alpha.value = (mine ? 0.9 : 0.25) * Math.max(0, 1 - (a.age - 0.85) / 3.2); }
      } else {
        m.scale.set(4.2, 4.2, 1); m.position.set(a.x, 0.06, a.z); u.size.value = 4.2;
        u.r.value = 1.8; u.w.value = a.age >= 0.85 && a.age <= 1.05 ? 3.6 : 0.12;
        u.fill.value = Math.min(1, a.age / 0.85); u.alpha.value = (mine ? 0.9 : 0.3) * (a.age > 1.05 ? Math.max(0, 1 - (a.age - 1.05) / 0.15) : 1);
      }
    });
    for (let i = atks.length; i < tele.length; i++) tele[i].visible = false;
  } else for (const m of tele) m.visible = false;
}
