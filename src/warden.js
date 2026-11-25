// The Hollow Warden rig: body, segmented halo, two lanterns on oversized chains. Parts stay separate so each can move.
// `get(name)` returns a fresh clone of a loaded model. Used by the game (sets.js) and tools/turntable.html.
//
// Motion is a pure function of time, so the afterimages can sample the exact pose from a moment ago:
//   - robe flow: vertex shader ripples the hem and tattered strips (strongest at the bottom, still at the hood)
//   - drift: slow figure-eight hover with a lean into the motion, and a slow breath (stretch)
//   - afterimages: three fading copies of the body trail behind it (ink-studio motion-fx "trail" idea)
//   - twitch: every few seconds a sudden head snap and halo stutter, then a slow return
//   - halo spins and wobbles; chains sag and sway with lag; lanterns swing and flicker
// Realm colours: living = amber lanterns and eyes, spirit = cyan; afterimages follow.
import * as THREE from 'three';

const HOVER = 0.7, SCALE = 1.1;
const LIVING = new THREE.Color(0xffb85b), SPIRIT = new THREE.Color(0x7de3ff);
const GHOST_LIVING = new THREE.Color(0x8a6ad8), GHOST_SPIRIT = new THREE.Color(0x5fc8f0);
const TRAIL = [0.22, 0.44, 0.66];                       // seconds behind for each afterimage

const hash = n => { const s = Math.sin(n * 127.1 + 311.7) * 43758.5453; return s - Math.floor(s); };
// twitch envelope: 0..1, sharp in (40 ms) and slow out (~0.5 s), at an irregular moment in each 4.6 s window
function twitch(t) {
  const W = 4.6, k = Math.floor(t / W), at = k * W + 1.2 + hash(k) * 2.4, d = t - at;
  if (d < 0 || d > 0.6) return { e: 0, dir: 1 };
  const e = d < 0.04 ? d / 0.04 : Math.pow(1 - (d - 0.04) / 0.56, 2);
  return { e, dir: hash(k + 0.5) < 0.5 ? -1 : 1 };
}
function pose(t) {
  const tw = twitch(t);
  const x = Math.sin(t * 0.45) * 0.55, z = Math.sin(t * 0.9) * 0.25;
  const vx = Math.cos(t * 0.45) * 0.45 * 0.55;           // drift velocity, for the lean
  return {
    x, z, y: Math.sin(t * 1.6) * 0.12 + Math.sin(t * 0.53) * 0.05,
    lean: -vx * 0.35, pitch: 0.04 + Math.sin(t * 0.7) * 0.03,
    turn: Math.sin(t * 0.31) * 0.12 + tw.dir * tw.e * 0.38,
    tilt: Math.sin(t * 0.37) * 0.07 + tw.dir * tw.e * 0.12,
    breath: 1 + Math.sin(t * 1.1) * 0.035, tw: tw.e,
  };
}

// cloth flow: displace vertices by a weight (GLSL float expression of position), strongest where the weight is 1.
// Default: below the shoulders, more toward the hem. Exported for the other spirits (veils, ribbons, hems).
const HEM = 'clamp((1.9 - position.y) / 1.9, 0.0, 1.0)';
export function flowMaterial(mat, uTime, key, { weight = HEM, amp = 0.13, speed = 1 } = {}) {
  const code = `
  #include <begin_vertex>
  {
    float w = ${weight}; w = w * w;
    float a = atan(position.z, position.x);
    float tt = uTime * ${speed.toFixed(3)};
    transformed.x += sin(tt * 2.1 + position.y * 3.1 + a * 3.0) * ${amp.toFixed(3)} * w;
    transformed.z += cos(tt * 1.7 + position.y * 2.6 + a * 2.0) * ${amp.toFixed(3)} * w;
    transformed.y += sin(tt * 2.9 + a * 4.0) * ${(amp * 0.4).toFixed(3)} * w;
  }`;
  mat.onBeforeCompile = sh => { sh.uniforms.uTime = uTime; sh.vertexShader = 'uniform float uTime;\n' + sh.vertexShader.replace('#include <begin_vertex>', code); };
  mat.customProgramCacheKey = () => key + weight + amp + speed;
  return mat;
}

export function buildWarden(get) {
  const root = new THREE.Group(); root.name = 'warden';
  const rig = new THREE.Group(); rig.scale.setScalar(SCALE); root.add(rig);
  const lean = new THREE.Group(); rig.add(lean);
  const body = get('warden_body'); body.position.y = HOVER; lean.add(body);
  const uTime = { value: 0 };
  body.traverse(o => { if (o.isMesh) o.material = flowMaterial(o.material.clone(), uTime, 'warden-flow'); });
  const halo = get('warden_halo'); halo.position.set(0, HOVER + 3.15, -0.38); lean.add(halo);

  // afterimages: body geometry only, flat ghost colour, each with its own (older) flow time
  const ghosts = TRAIL.map((lag, i) => {
    const g = new THREE.Group(); g.scale.setScalar(SCALE); root.add(g);
    const inner = new THREE.Group(); g.add(inner);
    const u = { value: 0 };
    const mat = flowMaterial(new THREE.MeshBasicMaterial({ color: GHOST_LIVING, transparent: true, opacity: 0.24 - i * 0.065, depthWrite: false }), u, 'warden-ghost');
    body.traverse(o => { if (o.isMesh) { const m = new THREE.Mesh(o.geometry, mat); m.position.y = HOVER; m.renderOrder = -1; inner.add(m); } });
    return { g, inner, u, mat, lag };
  });

  // chains and lanterns
  const sides = [];
  for (const s of [-1, 1]) {
    const side = new THREE.Group(); lean.add(side);
    const links = [];
    for (let i = 0; i < 4; i++) { const l = get('warden_link'); l.scale.setScalar(0.85); side.add(l); links.push(l); }
    const pivot = new THREE.Group(); side.add(pivot);
    const lantern = get('warden_lantern'); lantern.scale.setScalar(1.25); pivot.add(lantern);
    const tail = get('warden_link'); tail.scale.setScalar(0.55); tail.position.set(0, -1.45, 0); tail.rotateY(Math.PI / 2); pivot.add(tail);
    sides.push({ s, links, pivot, lantern });
  }
  // emissive parts (eyes, sigil, lanterns) change with the realm and flicker
  const glows = [];
  root.traverse(o => {
    if (!o.isMesh || !o.material.emissive || !o.material.emissive.getHex()) return;
    o.material = o.material.clone(); glows.push(o.material);
  });
  const shadowDisc = new THREE.Mesh(new THREE.CircleGeometry(1.4, 20), new THREE.MeshBasicMaterial({ color: 0x0e0816, transparent: true, opacity: 0.45, depthWrite: false }));
  shadowDisc.rotation.x = -Math.PI / 2; shadowDisc.position.y = 0.03; root.add(shadowDisc);

  const up = new THREE.Vector3(0, 1, 0), tmp = new THREE.Vector3();
  const curve = new THREE.QuadraticBezierCurve3(new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3());
  const place = (grp, inner, p) => {
    grp.position.set(p.x, p.y, p.z);
    inner.rotation.set(p.pitch, p.turn, p.lean + p.tilt);
    inner.scale.set(1 / Math.sqrt(p.breath), p.breath, 1 / Math.sqrt(p.breath));
  };

  const w = {
    root, rig, body, halo, sides, glows, realm: 0,
    setRealm(r) {
      w.realm = r;
      for (const m of glows) { m.color.copy(r ? SPIRIT : LIVING); m.emissive.copy(r ? SPIRIT : LIVING); }
      for (const gh of ghosts) gh.mat.color.copy(r ? GHOST_SPIRIT : GHOST_LIVING);
    },
    tick(t) {
      const p = pose(t);
      uTime.value = t;
      place(rig, lean, p);                                            // chains and halo ride on the lean group
      halo.rotation.z = t * 0.45 + p.tw * 1.4;                       // stutters forward on a twitch
      halo.rotation.x = Math.sin(t * 0.8) * 0.14;
      halo.scale.setScalar(1 + Math.sin(t * 2.0) * 0.04 + p.tw * 0.08);
      for (const gh of ghosts) { place(gh.g, gh.inner, pose(t - gh.lag)); gh.u.value = t - gh.lag; }
      for (const { s, links, pivot, lantern } of sides) {
        // chain: shoulder -> sagging control point (sways with lag) -> lantern hook
        const sway = Math.sin(t * 1.3 + s * 0.9 - 0.4) * 0.22;
        curve.v0.set(s * 0.7, HOVER + 2.75, -0.1);
        curve.v1.set(s * (1.7 + sway * 0.4), HOVER + 1.7 + Math.sin(t * 1.9 + s) * 0.12, 0.05 + sway);
        curve.v2.set(s * (2.35 + Math.sin(t * 0.8 + s) * 0.08), HOVER + 2.0 + Math.sin(t * 1.3 + s * 2) * 0.1, 0.15 + sway * 0.6);
        links.forEach((l, i) => {
          const u = (i + 0.5) / links.length;
          l.position.copy(curve.getPoint(u));
          l.quaternion.setFromUnitVectors(up, curve.getTangent(u, tmp).normalize());
          if (i % 2) l.rotateY(Math.PI / 2);
        });
        pivot.position.copy(curve.v2);
        pivot.rotation.set(Math.sin(t * 1.5 + s) * 0.18, 0, Math.sin(t * 1.2 + s * 0.7 - 0.6) * 0.22 * s);
        lantern.rotation.y = Math.sin(t * 0.9 + s) * 0.5;
      }
      const fl = 0.85 + 0.15 * Math.sin(t * 13.0) * Math.sin(t * 7.3) + p.tw * 0.6;  // flicker, flares on a twitch
      for (const m of glows) m.emissiveIntensity = fl;
    },
  };
  w.setRealm(0);
  w.tick(0);
  return w;
}
