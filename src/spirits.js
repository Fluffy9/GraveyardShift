// Ten new spirits: rigs and their basic animations. Each spirit is a body plus moving parts on pivots
// (ink-studio part-motion style); cloth (veil, hems, ribbons) ripples through the Warden's flow shader.
// Motion is a pure function of time, offset per instance by `phase`, so a crowd never moves in lockstep.
// Usage: const s = SPIRITS.moth.build(name => PROTOS[name].clone(true), phase); scene.add(s.root); s.tick(t);
// Nothing here is wired to gameplay yet; `level` and `role` are design notes for that step.
import * as THREE from 'three';
import { flowMaterial } from './warden.js';

const TAU = Math.PI * 2;
const n1 = t => Math.sin(t) * 0.6 + Math.sin(t * 2.3 + 1.7) * 0.3 + Math.sin(t * 5.1 + 0.4) * 0.1;   // cheap smooth noise

function shadow(root, r = 0.5) {
  const d = new THREE.Mesh(new THREE.CircleGeometry(r, 16), new THREE.MeshBasicMaterial({ color: 0x0e0816, transparent: true, opacity: 0.4, depthWrite: false }));
  d.rotation.x = -Math.PI / 2; d.position.y = 0.02; root.add(d); return d;
}
function flow(obj, uTime, key, opts) { obj.traverse(o => { if (o.isMesh) o.material = flowMaterial(o.material.clone(), uTime, key, opts); }); return obj; }
function glows(obj) { const out = []; obj.traverse(o => { if (o.isMesh && o.material.emissive?.getHex()) { o.material = o.material.clone(); out.push(o.material); } }); return out; }
const at = (o, x, y, z) => { o.position.set(x, y, z); return o; };
const pivot = (parent, x, y, z) => { const g = new THREE.Group(); g.position.set(x, y, z); parent.add(g); return g; };

export const SPIRITS = {
  // Glides slowly, head bowed; the veil streams back and ripples, the hem flows.
  mourner: { name: 'Veiled Mourner', level: 'last_ward', role: 'slow, tanky chaser',
    build(get, phase = 0) {
      const root = new THREE.Group(), bob = pivot(root, 0, 0, 0), u = { value: 0 };
      const body = flow(get('spirit_mourner'), u, 'sp-mourner', { weight: 'clamp((1.0 - position.y) / 1.0, 0.0, 1.0)', amp: 0.08 }); bob.add(body);
      const vp = pivot(bob, 0, 1.6, 0.04);
      vp.add(flow(get('spirit_mourner_veil'), u, 'sp-veil', { weight: 'clamp(-position.y / 1.5, 0.0, 1.0)', amp: 0.12, speed: 0.8 }));
      shadow(root, 0.45);
      return { root, tick(t) { t += phase; u.value = t;
        bob.position.y = 0.12 + Math.sin(t * 1.1) * 0.06; bob.rotation.z = Math.sin(t * 0.6) * 0.05; bob.rotation.x = 0.06 + Math.sin(t * 0.4) * 0.04;
        vp.rotation.x = -0.15 - Math.sin(t * 1.4) * 0.1; vp.rotation.z = n1(t * 0.7) * 0.06; } };
    } },
  // Erratic flutter: fast wing beats with a hitch, darting bob, abdomen lantern pulses.
  moth: { name: 'Lantern Moth', level: 'old_churchyard', role: 'fast, erratic flier',
    build(get, phase = 0) {
      const root = new THREE.Group(), fly = pivot(root, 0, 0, 0);
      fly.add(get('spirit_moth'));
      const wings = [-1, 1].map(s => { const p = pivot(fly, s * 0.1, 0.76, 0.08); const w = get('spirit_moth_wing'); w.scale.x = s; p.add(w); return { p, s }; });
      const gl = glows(fly); shadow(root, 0.35);
      return { root, tick(t) { t += phase;
        const beat = Math.sin(t * 16 + Math.sin(t * 3) * 0.8);                       // hitchy beat
        for (const { p, s } of wings) { p.rotation.z = s * (0.15 + beat * 0.65); p.rotation.y = s * Math.sin(t * 16) * 0.12; }
        fly.position.set(n1(t * 1.3) * 0.2, 0.35 + Math.abs(Math.sin(t * 4)) * 0.12 + n1(t * 2.1) * 0.06, n1(t * 1.1 + 4) * 0.15);
        fly.rotation.set(0.15 + beat * 0.05, n1(t * 0.9) * 0.6, n1(t * 1.7) * 0.15);
        for (const m of gl) m.emissiveIntensity = 0.8 + 0.4 * (0.5 + 0.5 * Math.sin(t * 5)); } };
    } },
  // Swings from its ring like a struck bell; the glowing tongue lags behind the swing.
  bell: { name: 'Bell Imp', level: 'bell_tower', role: 'rings out shockwave pulses',
    build(get, phase = 0) {
      const root = new THREE.Group(), hang = pivot(root, 0, 1.7, 0);
      const body = at(get('spirit_bell'), 0, -1.28, 0); hang.add(body);
      const tp = pivot(hang, 0, -0.35, 0); tp.add(get('spirit_bell_tongue'));
      shadow(root, 0.45);
      return { root, tick(t) { t += phase;
        const sw = Math.sin(t * 2.4) * 0.35 * (0.6 + 0.4 * Math.sin(t * 0.5));
        hang.rotation.z = sw; hang.rotation.x = Math.sin(t * 1.3) * 0.08;
        tp.rotation.z = -Math.sin(t * 2.4 - 0.9) * 0.45; hang.position.y = 1.7 + Math.sin(t * 1.2) * 0.08; } };
    } },
  // Dig cycle: raise the shovel, lunge and plunge, scoop and throw; the hunch follows the stroke.
  digger: { name: 'Gravedigger Shade', level: 'hollow_grounds', role: 'leaves lingering pits',
    build(get, phase = 0) {
      const root = new THREE.Group(), u = { value: 0 }, lean = pivot(root, 0, 0.05, 0);
      lean.add(flow(get('spirit_digger'), u, 'sp-digger', { weight: 'clamp((0.6 - position.y) / 0.6, 0.0, 1.0)', amp: 0.07 }));
      const hands = pivot(lean, 0, 0.82, 0.5); hands.add(get('spirit_digger_shovel'));
      shadow(root, 0.5);
      return { root, tick(t) { t += phase; u.value = t;
        const c = (t / 2.4) % 1;                                                     // 0..1 through one dig
        const raise = c < 0.45 ? c / 0.45 : 0, plunge = c >= 0.45 && c < 0.6 ? (c - 0.45) / 0.15 : c >= 0.6 ? 1 : 0;
        const scoop = c >= 0.7 ? Math.sin((c - 0.7) / 0.3 * Math.PI) : 0;
        hands.rotation.x = -0.9 * raise * (1 - plunge) + 0.55 * plunge - 1.0 * scoop;
        lean.rotation.x = 0.1 + 0.25 * plunge - 0.2 * scoop;
        lean.position.y = 0.05 + Math.sin(t * 1.5) * 0.03 - 0.06 * plunge; } };
    } },
  // Sleepy sway and slow breaths; the flame hair flickers and leans against the sway.
  wick: { name: 'Wickling', level: 'old_churchyard', role: 'leaves a short burning trail',
    build(get, phase = 0) {
      const root = new THREE.Group(), body = pivot(root, 0, 0, 0);
      body.add(get('spirit_wick'));
      const fp = pivot(body, 0, 0.92, 0); fp.add(get('spirit_wick_flame'));
      const gl = glows(fp); shadow(root, 0.4);
      return { root, tick(t) { t += phase;
        body.rotation.z = Math.sin(t * 1.1) * 0.08; body.scale.set(1 + Math.sin(t * 1.6) * 0.03, 1 - Math.sin(t * 1.6) * 0.03, 1);
        fp.rotation.z = -body.rotation.z * 1.6 + n1(t * 6) * 0.12; fp.rotation.x = n1(t * 5 + 2) * 0.1;
        fp.scale.set(1 + n1(t * 9) * 0.08, 1 + n1(t * 7 + 1) * 0.2, 1);
        for (const m of gl) m.emissiveIntensity = 0.85 + n1(t * 11) * 0.2; } };
    } },
  // Three skulls circle the soul core at different heights, nodding as they "sing"; the core pulses.
  choir: { name: 'Ossuary Choir', level: 'catacombs', role: 'skulls orbit as a moving shield',
    build(get, phase = 0) {
      const root = new THREE.Group(), core = pivot(root, 0, 0, 0);
      core.add(get('spirit_choir_core'));
      const skulls = [0, 1, 2].map(i => { const s = get('spirit_choir_skull'); root.add(s); return s; });
      const gl = glows(root); shadow(root, 0.5);
      return { root, tick(t) { t += phase;
        core.position.y = Math.sin(t * 1.4) * 0.06; core.scale.setScalar(1 + Math.sin(t * 3) * 0.06);
        skulls.forEach((s, i) => {
          const a = t * 1.3 + i * TAU / 3;
          s.position.set(Math.cos(a) * 0.48, 0.78 + Math.sin(t * 2.2 + i * 2) * 0.12, Math.sin(a) * 0.48);
          s.rotation.set(Math.sin(t * 6 + i) * 0.15, -a + Math.PI / 2, Math.sin(t * 3 + i) * 0.1);
        });
        for (const m of gl) m.emissiveIntensity = 0.8 + 0.3 * Math.sin(t * 3); } };
    } },
  // Hovering wingbeats with glides between bursts; the head snaps around like a crow's.
  raven: { name: 'Raven Wraith', level: 'bell_tower', role: 'swoops in straight lines',
    build(get, phase = 0) {
      const root = new THREE.Group(), u = { value: 0 }, fly = pivot(root, 0, 0, 0);
      fly.add(flow(get('spirit_raven'), u, 'sp-raven', { weight: 'clamp((0.55 - position.y) / 0.55, 0.0, 1.0)', amp: 0.08 }));
      const wings = [-1, 1].map(s => { const p = pivot(fly, s * 0.15, 0.78, 0.02); const w = get('spirit_raven_wing'); w.scale.x = s; p.add(w); return { p, s }; });
      shadow(root, 0.45);
      return { root, tick(t) { t += phase; u.value = t;
        const burst = (Math.sin(t * 0.9) > -0.2) ? 1 : 0.15;                         // flap bursts, then glide
        const beat = Math.sin(t * 9) * burst;
        for (const { p, s } of wings) p.rotation.z = s * (-0.1 + beat * 0.7 + (1 - burst) * -0.25);
        fly.position.y = 0.3 + beat * 0.06 + Math.sin(t * 0.9) * 0.08;
        const k = Math.floor(t / 1.7), snap = Math.sin(k * 12.9898) * 0.6;           // head-snaps: held turns
        fly.rotation.y += (snap - fly.rotation.y) * 0.25; fly.rotation.x = 0.1 - beat * 0.05; } };
    } },
  // Petals breathe open and closed around the glowing bud; the stem sways like it's underwater.
  bloom: { name: 'Bloom Wraith', level: 'forgotten_gardens', role: 'roots in place, sprays pollen shots',
    build(get, phase = 0) {
      const root = new THREE.Group(), sway = pivot(root, 0, 0, 0);
      sway.add(get('spirit_bloom'));
      const bud = pivot(sway, 0, 1.05, 0.08);
      const petals = [0, 1, 2, 3, 4].map(i => { const y = pivot(bud, 0, 0, 0); y.rotation.y = i * TAU / 5; const h = pivot(y, 0, -0.04, 0.1); h.add(get('spirit_bloom_petal')); return h; });
      const gl = glows(sway); shadow(root, 0.5);
      return { root, tick(t) { t += phase;
        const open = 0.5 + 0.5 * Math.sin(t * 1.2);
        for (const h of petals) h.rotation.x = 0.35 + open * 0.95;
        sway.rotation.z = Math.sin(t * 0.8) * 0.07; sway.rotation.x = Math.sin(t * 0.6 + 1) * 0.05;
        bud.rotation.y = t * 0.3; for (const m of gl) m.emissiveIntensity = 0.7 + open * 0.5; } };
    } },
  // Lurch and tug: the ghost leans forward, strains, the chain goes taut and the ball scrapes after it.
  shackled: { name: 'Shackled', level: 'hollow_grounds', role: 'slow, but its ball sweeps an arc',
    build(get, phase = 0) {
      const root = new THREE.Group(), u = { value: 0 }, body = pivot(root, 0, 0, 0);
      body.add(flow(get('spirit_shackled'), u, 'sp-shackled', { weight: 'clamp((0.7 - position.y) / 0.7, 0.0, 1.0)', amp: 0.09 }));
      const ball = get('spirit_shackle_ball'); root.add(ball);
      const links = Array.from({ length: 9 }, () => { const l = get('spirit_shackle_link'); l.scale.setScalar(1.6); root.add(l); return l; });
      shadow(root, 0.5);
      const curve = new THREE.QuadraticBezierCurve3(new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()), up = new THREE.Vector3(0, 1, 0), tmp = new THREE.Vector3();
      const cuff = new THREE.Vector3();
      return { root, tick(t) { t += phase; u.value = t;
        const c = (t / 2.6) % 1, strain = Math.sin(Math.min(1, c / 0.6) * Math.PI);  // lean, strain, release
        const tug = c > 0.55 && c < 0.75 ? (c - 0.55) / 0.2 : c >= 0.75 ? 1 : 0;
        body.rotation.x = 0.05 + strain * 0.3; body.position.z = strain * 0.18; body.position.y = 0.1 + Math.sin(t * 1.3) * 0.04;
        ball.position.set(1.15, 0, -1.05 + tug * 0.3); ball.rotation.x = tug * 1.2;
        cuff.set(0.55, 0.64, 0.2).applyEuler(body.rotation).add(body.position);
        const end = new THREE.Vector3(1.15, 0.42, -1.05 + tug * 0.3);
        curve.v0.copy(cuff); curve.v2.copy(end); curve.v1.copy(cuff).lerp(end, 0.5).setY(0.15 + strain * 0.3);   // taut when straining
        links.forEach((l, i) => { const s = (i + 0.5) / links.length; l.position.copy(curve.getPoint(s)); l.quaternion.setFromUnitVectors(up, curve.getTangent(s, tmp).normalize()); if (i % 2) l.rotateY(Math.PI / 2); });
      } };
    } },
  // Floats at head height and tilts slowly, then cocks to one side; ribbons stream and ripple below.
  mask: { name: 'Hollow Mask', level: 'last_ward', role: 'blinks between realms',
    build(get, phase = 0) {
      const root = new THREE.Group(), u = { value: 0 }, head = pivot(root, 0, 1.1, 0);
      head.add(get('spirit_mask'));
      // ribbons tied behind the mask, fanned out and streaming back (they must never read as legs)
      for (const [x, y, ry, rz, s] of [[-0.22, 0.12, -0.5, -0.5, 0.95], [0.22, 0.12, 0.5, 0.5, 0.95], [-0.12, -0.15, -0.2, -0.22, 1.1], [0.12, -0.15, 0.2, 0.22, 1.05], [0, 0.25, 0, 0, 0.8]]) {
        const r = flow(get('spirit_mask_ribbon'), u, 'sp-ribbon', { weight: 'clamp(-position.y, 0.0, 1.0)', amp: 0.16, speed: 0.9 });
        r.scale.setScalar(s); r.rotation.set(-0.9, ry, rz); head.add(at(r, x, y, -0.1));
      }
      const gl = glows(head); shadow(root, 0.35);
      return { root, tick(t) { t += phase; u.value = t;
        head.position.y = 1.1 + Math.sin(t * 1.0) * 0.1;
        const k = Math.floor(t / 2.3), cock = Math.sin(k * 78.233) * 0.4, fr = (t / 2.3) % 1;
        head.rotation.z = fr < 0.12 ? cock * fr / 0.12 : cock * Math.max(0, 1 - (fr - 0.12) / 0.6);   // quick cock, slow return
        head.rotation.y = Math.sin(t * 0.5) * 0.35; head.rotation.x = Math.sin(t * 0.7) * 0.08;
        for (const m of gl) m.emissiveIntensity = 0.7 + 0.5 * Math.max(0, Math.sin(t * 2.0)); } };
    } },
};
export const SPIRIT_IDS = Object.keys(SPIRITS);
