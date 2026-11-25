// The Hollow Warden rig: body, segmented halo, two lanterns on oversized chains. Parts stay separate so the halo can
// spin, the lanterns sway and the whole thing bob. `get(name)` returns a fresh clone of a loaded model.
// Realm colours: living = amber lanterns and eyes, spirit = violet/cyan. Used by the game and tools/turntable.html.
import * as THREE from 'three';

const HOVER = 0.7, SCALE = 1.1;
const LIVING = new THREE.Color(0xffb85b), SPIRIT = new THREE.Color(0x7de3ff);

export function buildWarden(get) {
  const root = new THREE.Group(); root.name = 'warden';
  const rig = new THREE.Group(); rig.scale.setScalar(SCALE); root.add(rig);
  const body = get('warden_body'); body.position.y = HOVER; rig.add(body);
  const halo = get('warden_halo'); halo.position.set(0, HOVER + 3.15, -0.38); rig.add(halo);
  const sides = [];
  for (const s of [-1, 1]) {
    const side = new THREE.Group(); rig.add(side);
    // chain: shoulder -> out and down in a sag, ending at the lantern hook
    const a = new THREE.Vector3(s * 0.7, HOVER + 2.75, -0.1), b = new THREE.Vector3(s * 2.35, HOVER + 2.0, 0.15);
    const ctrl = new THREE.Vector3(s * 1.7, HOVER + 1.75, 0.05);
    const curve = new THREE.QuadraticBezierCurve3(a, ctrl, b);
    const n = 4;
    for (let i = 0; i < n; i++) {
      const t = (i + 0.5) / n, p = curve.getPoint(t), d = curve.getTangent(t);
      const link = get('warden_link'); link.scale.setScalar(0.85);
      link.position.copy(p);
      link.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize());
      if (i % 2) link.rotateY(Math.PI / 2);
      side.add(link);
    }
    const pivot = new THREE.Group(); pivot.position.copy(b); side.add(pivot);
    const lantern = get('warden_lantern'); lantern.scale.setScalar(1.25); pivot.add(lantern);
    // a short tail of chain under the lantern
    for (let i = 0; i < 1; i++) { const l = get('warden_link'); l.scale.setScalar(0.55); l.position.set(0, -1.45 - i * 0.36, 0); if (i % 2) l.rotateY(Math.PI / 2); pivot.add(l); }
    sides.push({ pivot, s });
  }
  // emissive parts that change with the realm
  const glows = [];
  root.traverse(o => { if (o.isMesh && o.material.emissive && o.material.emissive.getHex()) { o.material = o.material.clone(); glows.push(o.material); } });
  const shadowDisc = new THREE.Mesh(new THREE.CircleGeometry(1.4, 20), new THREE.MeshBasicMaterial({ color: 0x0e0816, transparent: true, opacity: 0.45, depthWrite: false }));
  shadowDisc.rotation.x = -Math.PI / 2; shadowDisc.position.y = 0.03; root.add(shadowDisc);
  const w = {
    root, rig, body, halo, sides, glows, realm: 0,
    setRealm(r) {
      w.realm = r;
      for (const m of glows) { m.color.copy(r ? SPIRIT : LIVING); m.emissive.copy(r ? SPIRIT : LIVING); }
    },
    tick(t) {
      rig.position.y = Math.sin(t * 1.6) * 0.12;
      halo.rotation.z = t * 0.5;
      for (const { pivot, s } of sides) pivot.rotation.z = Math.sin(t * 1.3 + s) * 0.12 * s;
      body.rotation.y = Math.sin(t * 0.5) * 0.08;
    },
  };
  w.setRealm(0);
  return w;
}
