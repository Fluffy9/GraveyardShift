// Static level (ground, fences, chapel, graves, lamps) and the player rig.
import * as THREE from 'three';
import { COL, PS } from './config.js';
import { scene, toonRamp } from './render.js';
import { inst, PROTOS, addOutline, blob } from './assets.js';

// ground texture: procedural pixel cobbles + grass
function groundTexture() {
  const N = 384, c = document.createElement('canvas'); c.width = c.height = N;
  const g = c.getContext('2d');
  let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  g.fillStyle = '#463a52'; g.fillRect(0, 0, N, N);
  const px = N / 32; // texture px per world unit (plane is 32 units)
  // grass mottling
  for (let i = 0; i < 2600; i++) {
    g.fillStyle = ['#463a4c', '#41384a', '#4a4148', '#52493f', '#3f4636'][Math.floor(rnd() * 5)];
    g.fillRect(Math.floor(rnd() * N), Math.floor(rnd() * N), 2 + Math.floor(rnd() * 3), 2);
  }
  // cobbled court: ellipse-ish central area
  const cx = N / 2, cy = N / 2 + 1 * px;
  for (let y = 0; y < N; y += 6) for (let x = (y / 6) % 2 ? 0 : 4; x < N; x += 9) {
    const dx = (x - cx) / (8.2 * px), dy = (y - cy) / (7.2 * px);
    const r = dx * dx + dy * dy;
    if (r > 1 + rnd() * 0.25) continue;
    const v = Math.floor(rnd() * 3);
    g.fillStyle = ['#6a5a6e', '#62536a', '#715f75'][v];
    g.fillRect(x, y, 8, 5);
    g.fillStyle = '#7c6a80'; g.fillRect(x, y, 8, 1);
  }
  // path to gate
  for (let y = cy + 7 * px; y < N; y += 6) for (let x = cx - 2 * px + ((y / 6) % 2 ? 0 : 4); x < cx + 2 * px; x += 9) {
    g.fillStyle = '#56485b'; g.fillRect(x, y, 8, 5); g.fillStyle = '#665669'; g.fillRect(x, y, 8, 1);
  }
  // leaves & tufts
  for (let i = 0; i < 260; i++) {
    const x = Math.floor(rnd() * N), y = Math.floor(rnd() * N);
    g.fillStyle = ['#b96d48', '#c4503a', '#e08a3c', '#626a45', '#6f7a4a'][Math.floor(rnd() * 5)];
    g.fillRect(x, y, 2, 2); if (rnd() < .5) g.fillRect(x + 1, y - 1, 1, 1);
  }
  const t = new THREE.CanvasTexture(c);
  t.magFilter = THREE.NearestFilter; t.minFilter = THREE.NearestFilter; t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
const ground = new THREE.Mesh(new THREE.PlaneGeometry(32, 32), new THREE.MeshToonMaterial({ map: groundTexture(), gradientMap: toonRamp }));
ground.rotation.x = -Math.PI / 2; ground.position.z = -1; ground.receiveShadow = true;
scene.add(ground);
// darker apron so tall (portrait) views never show the edge of the world
const apron = new THREE.Mesh(new THREE.PlaneGeometry(120, 120), new THREE.MeshToonMaterial({ color: 0x2c2436, gradientMap: toonRamp }));
apron.rotation.x = -Math.PI / 2; apron.position.y = -0.02; apron.receiveShadow = true; scene.add(apron);

// ---------- level ----------
const lights = { lamps: [], chapel: null };
function buildLevel() {
  const FX = 11.6, FZN = -9.6, FZS = 9.6;
  // fence ring: pillars every 3.2 units with segments between
  const fenceLine = (x0, z0, x1, z1, skip) => {
    const len = Math.hypot(x1 - x0, z1 - z0), n = Math.round(len / 3.2), ry = Math.atan2(-(z1 - z0), x1 - x0);
    for (let i = 0; i <= n; i++) {
      const t = i / n, x = x0 + (x1 - x0) * t, z = z0 + (z1 - z0) * t;
      inst('pillar', x, z);
      if (i < n) {
        const mx = x + (x1 - x0) / n / 2, mz = z + (z1 - z0) / n / 2;
        if (!skip || !skip(mx, mz)) inst('fence', mx, mz, ry, 0.95);
      }
    }
  };
  fenceLine(-FX, FZN, FX, FZN, (x) => Math.abs(x) < 2.5);
  fenceLine(-FX, FZS, FX, FZS, (x) => Math.abs(x) < 1.7);
  fenceLine(-FX, FZN, -FX, FZS);
  fenceLine(FX, FZN, FX, FZS);
  // gate posts with lamps
  inst('lamp', -2.2, FZS + 0.1); inst('lamp', 2.2, FZS + 0.1);
  // chapel behind north fence
  inst('chapel', 0, -12.2, 0, 0.82);
  lights.chapel = new THREE.PointLight(COL.amber, 18, 9, 1.6);
  lights.chapel.position.set(0, 2.4, -9.6); scene.add(lights.chapel);
  // trees
  inst('tree', -13.2, -10.8, 0.4, 1.05); inst('tree', 13.4, -10.4, 2.0, 1.15);
  inst('tree', -14.5, 4.5, 1.2, 0.9); inst('tree', 14.6, 6.5, 3.0, 0.85);
  // lamps inside corners
  for (const [x, z] of [[-9.6, -7.4], [9.6, -7.4], [-9.6, 7.6], [9.6, 7.6]]) {
    inst('lamp', x, z);
    const L = new THREE.PointLight(COL.amber, 14, 7.5, 1.6); L.position.set(x, 2.1, z); scene.add(L);
    lights.lamps.push(L);
  }
  for (const [x, z] of [[-2.2, FZS + 0.1], [2.2, FZS + 0.1]]) {
    const L = new THREE.PointLight(COL.amber, 8, 5, 1.6); L.position.set(x, 2.1, z); scene.add(L); lights.lamps.push(L);
  }
  // graves: perimeter clusters on grass only — never planted on the cobbled court / path
  let seed = 11; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const onTile = (x, z) => {
    const dx = x / 8.2, dy = (z + 1) / 7.2;
    if (dx * dx + dy * dy < 1.12) return true;                 // central cobbled court
    if (Math.abs(x) < 2.4 && z > 3.6) return true;              // path to the south gate
    return false;
  };
  const offTile = (x, z) => {
    let px = x, pz = z;
    for (let i = 0; i < 12 && onTile(px, pz); i++) {
      const len = Math.hypot(px, pz + 1) || 1;
      px += (px / len) * 0.55;
      pz += ((pz + 1) / len) * 0.55;
    }
    return [px, pz];
  };
  // seeded a bit farther into the grass beds so they don't sit on the court edge
  const spots = [[-8.8, -5.6], [-7.4, -7.4], [-9.6, -2.8], [-8.6, 0.4], [-9.8, 3.2], [-8.2, 5.4], [-7.2, 7.2],
    [9.0, -5.8], [7.6, -7.6], [9.8, -2.2], [8.6, 1.0], [9.6, 3.8], [8.0, 6.0], [6.8, 7.4], [-5.4, -8.4], [5.2, -8.6]];
  for (const [sx, sz] of spots) {
    const [x, z] = offTile(sx + (rnd() - .5) * .35, sz + (rnd() - .5) * .3);
    const k = ['grave_a', 'grave_a', 'grave_b', 'grave_c'][Math.floor(rnd() * 4)];
    inst(k, x, z, (rnd() - .5) * 0.5, 0.85 + rnd() * 0.3);
  }
  // fallen leaves as tiny instanced quads
  const leafGeo = new THREE.PlaneGeometry(0.22, 0.16);
  const leafMat = new THREE.MeshToonMaterial({ gradientMap: toonRamp });
  const leaves = new THREE.InstancedMesh(leafGeo, leafMat, 140);
  const mtx = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler();
  const lc = [0xb96d48, 0xc4503a, 0xe08a3c, 0x8e3a3e].map(c => new THREE.Color(c));
  for (let i = 0; i < 140; i++) {
    const x = (rnd() - .5) * 24, z = (rnd() - .5) * 20 - 0.5;
    e.set(-Math.PI / 2, 0, rnd() * 6.28); q.setFromEuler(e);
    mtx.compose(new THREE.Vector3(x, 0.02, z), q, new THREE.Vector3(1, 1, 1));
    leaves.setMatrixAt(i, mtx); leaves.setColorAt(i, lc[Math.floor(rnd() * 4)]);
  }
  leaves.receiveShadow = true; scene.add(leaves);
}

// ---------- player ----------
const rig = {}; // player scene objects, read by visuals.js
function buildPlayer() {
  const player = new THREE.Group(); scene.add(player);
  const body = PROTOS.caretaker.clone(true); body.scale.setScalar(PS);
  body.traverse(o => { if (o.isMesh) o.castShadow = false; });
  player.add(body);
  const outline = addOutline(body);
  const lantern = PROTOS.lantern.clone(true); lantern.position.set(0.42, 0.18, 0.12); lantern.scale.setScalar(1.15);
  lantern.traverse(o => { if (o.isMesh) o.castShadow = false; });
  body.add(lantern);
  addOutline(lantern);
  const lanternLight = new THREE.PointLight(COL.amber, 10, 6, 1.5); lanternLight.position.set(0.42, 0.6, 0.2);
  body.add(lanternLight);
  const shadow = blob(1.7); scene.add(shadow);
  // dash preview: a dotted line of pixels on the ground
  const dashGuideMat = new THREE.MeshBasicMaterial({ color: COL.parchment, transparent: true, opacity: 0.7, depthWrite: false });
  const dashGuide = new THREE.Group();
  for (let i = 0; i < 9; i++) {
    const d = new THREE.Mesh(new THREE.PlaneGeometry(0.22, 0.22), dashGuideMat);
    d.rotation.x = -Math.PI / 2; d.position.y = 0.05; dashGuide.add(d);
  }
  const tip = new THREE.Mesh(new THREE.RingGeometry(0.28, 0.42, 4), dashGuideMat);
  tip.rotation.x = -Math.PI / 2; tip.position.y = 0.05; dashGuide.add(tip);
  scene.add(dashGuide);
  Object.assign(rig, { player, body, outline, lantern, lanternLight, shadow, dashGuide, dashGuideMat });
}

export { buildLevel, buildPlayer, rig, lights };
