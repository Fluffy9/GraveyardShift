// Level set dressing: decorative props placed around each arena. Props never sit on the combat floor and have no
// collision; gameplay geometry (walls, portals, pillars) lives in the level's own systems.
import * as THREE from 'three';
import { scene, toonRamp } from './render.js';
import { COL } from './config.js';
import { inst, PROTOS } from './assets.js';
import { buildWarden } from './warden.js';
import { SPIRITS } from './spirits.js';
import { glow, flicker, fxEmbers, fxFireflies, fxPetals, fxMotes, fxAsh, fxSwirl, fxEmberAt, emitter, tickVfx, vfxRandom } from './vfx.js';
import { rig } from './level.js';
import { S } from './state.js';
import { churchyard } from './level.js';
import { CATACOMB_WALLS, WARD_SPOTS, GARDEN_NS_PORTALS } from './levels/registry.js';

const sets = { old_churchyard: churchyard };
const group = id => {
  if (!sets[id]) { sets[id] = new THREE.Group(); sets[id].name = 'set:' + id; scene.add(sets[id]); }
  return sets[id];
};

// L1 / Overtime: the Old Churchyard keeps its layout; this adds the south gate, mourners by the chapel,
// ruined boundary walls outside the fence, and small memorials on the grass beds.
function dressChurchyard() {
  const g = group('old_churchyard');
  inst('gate', 0, 9.6, 0, 1, g);
  for (const s of [-1, 1]) {
    inst('statue_mourner', s * 3.5, -10.5, s * -0.25, 1, g);
    inst('candles', s * 2.75, -10.05, s * 0.6, 1, g);
    inst('urn', s * 3.7, 10.7, 0, 1, g);
    inst('urn', s * 10.7, -8.7, s * 0.4, 0.9, g);
  }
  inst('wall_ruin', -12.75, -3.6, Math.PI / 2, 1, g);
  inst('wall_ruin', 12.75, 1.4, -Math.PI / 2 + 0.08, 1, g);
  inst('wall_ruin', -8.1, -11.4, 0.05, 1, g);
  inst('wall_ruin', 8.4, -11.3, Math.PI - 0.1, 1, g);
  inst('rubble', -12.8, -0.6, 0.4, 1, g);
  inst('rubble', 12.8, 4.3, 2.2, 1, g);
  inst('rubble', -6.0, -11.7, 1.1, 0.9, g);
  inst('rubble', 6.2, 11.1, -0.7, 0.9, g);
  for (const [x, z, r] of [[-8.7, -4.7, 0.3], [9.3, 2.7, 1.2], [-9.1, 6.5, 2.0], [7.7, -7.9, 0.8]]) inst('candles', x, z, r, 1, g);
}

// Shared helpers ---------------------------------------------------------------------------------------------------
function groundPlane(tex, size = 32, z = -1) {
  const m = new THREE.Mesh(new THREE.PlaneGeometry(size, size), new THREE.MeshToonMaterial({ map: tex, gradientMap: toonRamp }));
  m.rotation.x = -Math.PI / 2; m.position.z = z; m.receiveShadow = true;
  return m;
}
// a run of boundary bays (pillar + module) between two points; skip(mx, mz) leaves a bay open, skipPost(x, z) drops a pillar
function boundary(g, mod, x0, z0, x1, z1, { skip, skipPost, scale = 1 } = {}) {
  const len = Math.hypot(x1 - x0, z1 - z0), n = Math.round(len / 3.2), ry = Math.atan2(-(z1 - z0), x1 - x0);
  for (let i = 0; i <= n; i++) {
    const t = i / n, x = x0 + (x1 - x0) * t, z = z0 + (z1 - z0) * t;
    if (!skipPost || !skipPost(x, z)) inst('pillar', x, z, 0, 1, g);
    if (i < n) {
      const mx = x + (x1 - x0) / n / 2, mz = z + (z1 - z0) / n / 2;
      if (!skip || !skip(mx, mz)) inst(mod, mx, mz, ry, (len / n) / 3.2 * scale, g);
    }
  }
}

// L2: Forgotten Gardens. Twin portal arches straddle the east/west wrap aperture (|z| <= 2.5); the mosaic centre is
// open; conservatory and fountain to the north, gate to the south; planting stays outside the combat lanes.
function buildGardens() {
  const g = group('forgotten_gardens');
  g.add(groundPlane(gardenGround()));
  const FX = 11.6, FZ = 9.6, AZ = 8.0;
  const NS = GARDEN_NS_PORTALS;                                   // x centres of the north-south portals
  const nearNS = x => NS.some(c => Math.abs(x - c) < 3.4);
  const side = { skip: (x, z) => Math.abs(z) < 3.3, skipPost: (x, z) => Math.abs(z) < 3.3 };
  // north and south runs leave room for the conservatory door / gate and the north-south portal arches
  boundary(g, 'balustrade', -FX, -FZ, FX, -FZ, { skip: x => Math.abs(x) < 2.6 || nearNS(x), skipPost: x => nearNS(x) });
  boundary(g, 'balustrade', -FX, FZ, FX, FZ, { skip: x => Math.abs(x) < 1.7 || nearNS(x), skipPost: x => nearNS(x) });
  boundary(g, 'balustrade', -FX, -FZ, -FX, FZ, side);
  boundary(g, 'balustrade', FX, -FZ, FX, FZ, side);
  // east-west portals
  inst('portal_arch', -10.85, 0, Math.PI / 2, 1, g);
  inst('portal_arch', 10.85, 0, -Math.PI / 2, 1, g);
  for (const s of [-1, 1]) {
    const L = new THREE.PointLight(0x9b7bff, 9, 6, 1.6); L.position.set(s * 10.2, 1.6, 0); g.add(L);
    g.add(portalPool(s * 10.25, 0, false));
  }
  // north-south portals: arches face the court; the south pair is see-through so it never hides the player
  for (const x of NS) {
    inst('portal_arch', x, -AZ - 0.65, 0, 1, g);
    const south = inst('portal_arch', x, AZ + 0.65, Math.PI, 1, g);
    south.traverse(o => {
      if (!o.isMesh) return;
      o.material = o.material.clone();
      const glowing = o.material.emissive && o.material.emissive.getHex();
      o.material.transparent = true; o.material.opacity = glowing ? 0.35 : 0.55; o.material.depthWrite = false;
    });
    g.add(portalPool(x, -AZ, true)); g.add(portalPool(x, AZ, true));
    const L = new THREE.PointLight(0x9b7bff, 8, 6, 1.6); L.position.set(x, 1.6, -AZ + 0.3); g.add(L);
  }
  inst('conservatory', 0, -13.1, 0, 0.9, g);
  const cl = new THREE.PointLight(COL.amber, 14, 9, 1.6); cl.position.set(0, 2.2, -10.4); g.add(cl);
  // the fountain is the solid centrepiece where the paths cross (collision: level.solids)
  inst('fountain', 0, 0, 0.4, 1.0, g);
  const fl = new THREE.PointLight(0x4fe0c8, 6, 5, 1.6); fl.position.set(0, 2.4, 0.6); g.add(fl);
  inst('gate', 0, FZ, 0, 1, g);
  for (const s of [-1, 1]) {
    // glowing spirit-blooms instead of lamps: cool teal / violet light
    for (const [x, z, c, sc] of [[s * 2.4, FZ + 0.2, 0x4fe0c8, 1.1], [s * 11.0, -8.6, 0x8f7cff, 1.3], [s * 11.0, 8.7, 0x4fe0c8, 1.3], [s * 12.7, -1.0 * s, 0x8f7cff, 1.1]]) {
      inst('glowbloom', x, z, x * 0.7, sc, g);
      const L = new THREE.PointLight(c, 11, 7, 1.5); L.position.set(x, 1.5, z); g.add(L);
    }
    inst('weeping_angel', s * 3.3, 10.5, s * -0.25, 1, g);
    inst('bench', s * 2.6, -10.9, s * -0.5, 0.9, g);
    inst('urn', s * 2.75, -9.95, 0, 0.9, g);
    inst('flowerbed', s * 1.6, -8.8, 0, 0.7, g);
    inst('topiary', s * 10.05, -4.0, 0, 0.9, g);
    inst('topiary', s * 10.05, 4.0, 0, 0.9, g);
    inst('hedge', s * 12.9, -6.3, Math.PI / 2, 1, g);
    inst('hedge', s * 12.9, 6.3, Math.PI / 2, 1, g);
    inst('rosebush', s * 12.8, -10.4, s, 1, g);
    inst('rosebush', s * 10.4, 10.6, s * 2, 0.9, g);
    inst('rosebush', s * 13.0, 8.8, s * 0.5, 1, g);
  }
  inst('willow', -13.7, -9.4, 0.3, 1, g);
  inst('willow', 13.9, -8.9, 2.1, 0.95, g);
  inst('rubble', -12.6, -7.6, 0.5, 0.8, g);
  g.visible = false;
}

// Portal pool: the arches face east/west, so from the top-down camera their membranes are edge-on. A glowing swirl on
// the floor across the wrap aperture is what reads as "portal" from above; the arch frames it.
const pools = [];
function portalPool(x, z, alongX) {
  const W = 56, H = 100, c = document.createElement('canvas'); c.width = W; c.height = H;
  const g = c.getContext('2d'), img = g.createImageData(W, H);
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const u = (x + 0.5) / W * 2 - 1, v = (y + 0.5) / H * 2 - 1, r = Math.hypot(u, v);
    if (r > 1) continue;
    const a = Math.atan2(v, u), band = (Math.sin(a * 2 + r * 9) + 1) / 2;   // two-arm swirl
    const k = r > 0.86 ? 3 : band > 0.62 ? 2 : band > 0.3 ? 1 : 0;
    const col = [[60, 40, 120], [125, 107, 255], [185, 161, 232], [239, 224, 255]][k];
    const i = (y * W + x) * 4; img.data.set([...col, r > 0.86 ? 230 : 150 + k * 30], i);
  }
  g.putImageData(img, 0, 0);
  const t = new THREE.CanvasTexture(c); t.magFilter = t.minFilter = THREE.NearestFilter; t.colorSpace = THREE.SRGBColorSpace;
  const m = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 5.6), new THREE.MeshBasicMaterial({ map: t, transparent: true, depthWrite: false }));
  m.rotation.x = -Math.PI / 2; m.position.set(x, 0.04, z); m.renderOrder = 1;
  if (alongX) m.rotation.z = Math.PI / 2;                             // north-south portals: aperture runs along x
  pools.push(m); return m;
}
const barriers = [];                    // { node, realm, mats } for the catacomb realm walls
let shownRealm = -1;
export function tickSets(t, realm = 0) {
  tickVfx(t, realm);
  for (const p of previews) p.tick(t);
  if (bell && bell.parent?.parent?.visible) { bellSwing = Math.max(0, bellSwing - 0.012); bell.rotation.x = Math.sin(t * (0.9 + bellSwing * 4)) * (0.05 + bellSwing * 0.3); }
  if (warden && warden.root.visible && warden.root.parent?.visible) warden.tick(t);
  for (const f of flames) if (f.parent?.visible) { f.scale.set(1 + Math.sin(t * 7) * 0.06, 1 + Math.sin(t * 5.3) * 0.12, 1 + Math.cos(t * 6.1) * 0.06); f.rotation.y = t * 0.8; }
  for (const r of rocks) if (r.node.parent?.visible) r.node.position.y = r.y + Math.sin(t * 0.7 + r.p) * 0.2;
  for (const w of wards) if (w.crystal.parent?.parent?.visible && w.crystal.visible) { w.crystal.rotation.y = t * 1.2 + w.i; w.crystal.position.y = w.cy + Math.sin(t * 2 + w.i) * 0.08; }
  for (const p of pools) if (p.parent?.visible) p.material.opacity = 0.8 + 0.2 * Math.sin(t * 3);
  if (realm !== shownRealm && barriers.length) {
    shownRealm = realm;
    // a barrier is solid in its own realm; in the other realm it fades to a ghost so the open route reads at a glance
    for (const b of barriers) for (const m of b.mats) { m.transparent = true; m.opacity = b.realm === realm ? 1 : 0.22; m.depthWrite = b.realm === realm; }
  }
}

// garden floor: lawn with drifts of wildflowers, narrow pebble paths and a flagstone apron under the fountain
function gardenGround() {
  const N = 384, size = 32, px = N / size, c = document.createElement('canvas'); c.width = c.height = N;
  const g = c.getContext('2d');
  let seed = 23; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const cx = N / 2, cy = N / 2 + 1 * px;                         // plane centred at z = -1
  const W = (x, z) => [cx + x * px, cy + z * px];
  g.fillStyle = '#3d5639'; g.fillRect(0, 0, N, N);
  for (let i = 0; i < 9000; i++) {                               // grass blades
    g.fillStyle = ['#44613f', '#385035', '#4b6a43', '#3a5a3d', '#52704a', '#33492f'][Math.floor(rnd() * 6)];
    const x = Math.floor(rnd() * N), y = Math.floor(rnd() * N);
    g.fillRect(x, y, 1, 2 + Math.floor(rnd() * 2));
  }
  // pebble paths: east-west between the portals, gate to conservatory, and a walk through each north-south portal pair
  const onPath = (x, z) => (Math.abs(z - 0.35 * Math.sin(x * 0.45)) < 0.75 && Math.abs(x) < 15) || (Math.abs(x - 0.25 * Math.sin(z * 0.6)) < 0.65 && z > -10.2 && z < 16)
    || GARDEN_NS_PORTALS.some(c => Math.abs(x - c - 0.3 * Math.sin(z * 0.5)) < 0.55 && Math.abs(z) < 8.6);   // north-south portal walks
  for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {      // packed-earth bed under the pebbles
    const wx = (x - cx) / px, wz = (y - cy) / px;
    if (onPath(wx, wz)) { g.fillStyle = (x + y) % 5 ? '#4a4336' : '#433c31'; g.fillRect(x, y, 1, 1); }
  }
  for (let i = 0; i < 26000; i++) {
    const x = (rnd() - 0.5) * 32, z = (rnd() - 0.5) * 32 - 1;
    if (!onPath(x, z)) continue;
    const [u, v] = W(x, z), w = 2 + Math.floor(rnd() * 3), h = 2 + Math.floor(rnd() * 2);
    g.fillStyle = '#2f3a2e'; g.fillRect(Math.round(u), Math.round(v) + 1, w, h);
    g.fillStyle = ['#7a7182', '#8a8090', '#6c6474', '#9a90a0'][Math.floor(rnd() * 4)]; g.fillRect(Math.round(u), Math.round(v), w, h);
  }
  // flagstone apron around the fountain where the paths cross
  const R = 2.3;
  for (let y = -R * px; y <= R * px; y++) for (let x = -R * px; x <= R * px; x++) {
    const r = Math.hypot(x, y) / px; if (r > R) continue;
    const a = Math.atan2(y, x), ring = Math.floor(r / 0.6), seg = Math.floor((a / (2 * Math.PI) + 1) * (6 + ring * 5) + ring * 0.5);
    const grout = (r / 0.6) % 1 < 0.12 || ((a / (2 * Math.PI) + 1) * (6 + ring * 5) + ring * 0.5) % 1 < 0.08;
    g.fillStyle = grout ? '#3a3540' : ['#7a7182', '#857b8c', '#6f6778'][(seg * 7 + ring) % 3];
    g.fillRect(Math.round(cx + x), Math.round(cy + y), 1, 1);
  }
  // wildflower drifts: clustered, denser toward the edges, never on the paths or mosaic
  const flowers = ['#c45a7a', '#d98ac4', '#efe0ff', '#ffe29a', '#b9a1e8', '#f07f95'];
  for (let k = 0; k < 70; k++) {
    const fx = (rnd() - 0.5) * 30, fz = (rnd() - 0.5) * 28 - 1, col = flowers[Math.floor(rnd() * flowers.length)];
    const edge = Math.max(Math.abs(fx) / 10, Math.abs(fz + 0) / 8);
    const n = 6 + Math.floor((0.4 + edge) * 16 * rnd());
    for (let i = 0; i < n; i++) {
      const x = fx + (rnd() - 0.5) * 2.2, z = fz + (rnd() - 0.5) * 1.6;
      if (onPath(x, z) || Math.hypot(x, z) < R + 0.2) continue;
      const [u, v] = W(x, z);
      g.fillStyle = col; g.fillRect(Math.round(u), Math.round(v), 2, 2);
      g.fillStyle = '#2c4029'; g.fillRect(Math.round(u) + 1, Math.round(v) + 2, 1, 1);
    }
  }
  for (let i = 0; i < 160; i++) {                                // fallen petals
    g.fillStyle = ['#c45a7a', '#d98ac4', '#e0a8b8'][Math.floor(rnd() * 3)];
    g.fillRect(Math.floor(rnd() * N), Math.floor(rnd() * N), 1, 1);
  }
  const t = new THREE.CanvasTexture(c);
  t.magFilter = t.minFilter = THREE.NearestFilter; t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

// L3: The Catacombs. Ossuary walls on three sides, a low half-wall to the south so the court stays visible, stairs in
// from the south, crypt door out to the north. The six realm barriers come from CATACOMB_WALLS (the collision data).
function buildCatacombs() {
  const g = group('catacombs');
  g.add(groundPlane(catacombGround()));
  const WX = 11.2, WZ = 9.0;
  // north wall: ossuary bays with the crypt door in the middle bay
  for (let i = -3; i <= 3; i++) {
    const x = i * 3.2;
    if (i === 0) inst('crypt_door', 0, -WZ - 0.25, 0, 1, g);
    else inst('ossuary_wall', x, -WZ - 0.1, 0, 1, g);
    if (i < 3 && i !== -1 && i !== 0) inst('crypt_column', x + 1.6, -WZ + 0.05, 0, 1, g);
  }
  inst('crypt_column', -11.2, -WZ + 0.05, 0, 1, g); inst('crypt_column', 11.2, -WZ + 0.05, 0, 1, g);
  // side walls face inward
  for (const s of [-1, 1]) {
    for (let k = 0; k < 6; k++) {
      const z = -WZ + 1.5 + k * 3.0;
      inst('ossuary_wall', s * (WX + 0.15), z, -s * Math.PI / 2, 0.94, g);
      if (k < 5) inst('crypt_column', s * WX, z + 1.5, 0, 0.9, g);
    }
    inst('crypt_column', s * WX, WZ, 0, 0.9, g);
  }
  // south: half walls either side of the entrance stairs
  for (const x of [-9.6, -6.4, -3.2, 3.2, 6.4, 9.6]) inst('half_wall', x, WZ + 0.1, 0, 1, g);
  inst('entrance_stairs', 0, WZ - 0.25, 0, 1, g);
  for (const s of [-1, 1]) inst('urn', s * 2.0, WZ + 0.3, 0, 0.9, g);

  // realm barriers: panel scaled to the wall's length, flame posts at both ends
  for (const w of CATACOMB_WALLS) {
    const along = w.h > w.w, len = along ? w.h : w.w, ry = along ? Math.PI / 2 : 0;
    const b = new THREE.Group(); g.add(b);
    const kind = w.realm ? 'spirit' : 'living';
    const panel = inst('barrier_' + kind, w.x, w.z, ry, 1, b); panel.scale.set((len - 0.2) / 2.4, 1, 1);
    for (const e of [-1, 1]) inst('barrier_post_' + kind, w.x + (along ? 0 : e * len / 2), w.z + (along ? e * len / 2 : 0), 0, 1, b);
    const mats = [];
    b.traverse(o => { if (o.isMesh) { o.material = o.material.clone(); mats.push(o.material); } });
    barriers.push({ node: b, realm: w.realm, mats });
  }

  // memorials: hooded statues by the crypt door, sarcophagi and coffins in the corners, bones along the walls
  for (const s of [-1, 1]) {
    inst('statue_mourner', s * 3.1, -8.45, 0, 0.95, g);
    inst('candles', s * 2.5, -8.0, s, 1, g);
    inst('sarcophagus', s * 8.4, -8.35, Math.PI / 2, 1, g);
    inst('candles', s * 6.9, -8.2, s * 2, 1, g);
    inst('ritual_banner', s * 4.8, -8.75, 0, 1, g);
    inst('memorial_relief', s * 7.9, -8.85, 0, 0.9, g);
    inst('coffin_broken', s * 9.0, 8.3, s * 1.3, 1, g);
    inst('bone_pile', s * 10.3, -3.4, s * 0.8, 1, g);
    inst('bone_pile', s * 10.3, 4.6, s * 2.1, 0.9, g);
    inst('candles', s * 10.4, 1.0, s * 0.3, 1, g);
    inst('candles', s * 10.2, -6.6, s * 1.4, 1, g);
    inst('candles', s * 6.2, 8.4, s * 0.7, 1, g);
    inst('rubble', s * 4.6, 8.5, s, 0.8, g);
  }
  for (const [x, z, c, i, d] of [[0, -7.6, COL.amber, 16, 8], [-9.6, -7.0, COL.amber, 12, 7], [9.6, -7.0, COL.amber, 12, 7],
    [-9.6, 6.6, COL.amber, 10, 7], [9.6, 6.6, COL.amber, 10, 7], [0, 2.0, 0x9b7bff, 6, 8]]) {
    const L = new THREE.PointLight(c, i, d, 1.6); L.position.set(x, 2.0, z); g.add(L);
  }
  g.visible = false;
}

// worn sandstone flagstones with dark grout, a faint compass inlay in the middle, dust; rough dark rock outside the walls
function catacombGround() {
  const N = 384, size = 32, px = N / size, c = document.createElement('canvas'); c.width = c.height = N;
  const g = c.getContext('2d');
  let seed = 41; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const cx = N / 2, cy = N / 2 + 1 * px;
  g.fillStyle = '#2a2230'; g.fillRect(0, 0, N, N);
  for (let i = 0; i < 3000; i++) { g.fillStyle = ['#2f2634', '#261f2b', '#33293a'][Math.floor(rnd() * 3)]; g.fillRect(Math.floor(rnd() * N), Math.floor(rnd() * N), 3, 2); }
  const stones = ['#5e4b44', '#665046', '#57463f', '#6b5549', '#52423d', '#604d4a'];
  const T = 18, TH = 25;                                          // taller in texture: the 45-degree camera squashes z
  for (let row = 0; row * TH < N; row++) {
    let x0 = -Math.floor(rnd() * T);
    while (x0 < N) {
      const w = T + Math.floor(rnd() * 3 - 1) * 5, y0 = row * TH;
      const wx = (x0 + w / 2 - cx) / px, wz = (y0 + TH / 2 - cy) / px;
      if (Math.abs(wx) <= 11.3 && Math.abs(wz) <= 9.2) {
        g.fillStyle = '#2c2329'; g.fillRect(x0, y0, w, TH);            // grout
        g.fillStyle = stones[Math.floor(rnd() * stones.length)]; g.fillRect(x0 + 1, y0 + 1, w - 2, TH - 2);
        g.fillStyle = 'rgba(255,230,190,0.07)'; g.fillRect(x0 + 1, y0 + 1, w - 2, 1);
        if (rnd() < 0.35) { g.fillStyle = 'rgba(30,20,30,0.35)'; g.fillRect(x0 + 2 + Math.floor(rnd() * (w - 8)), y0 + 4 + Math.floor(rnd() * 12), 2 + Math.floor(rnd() * 5), 1); }
      }
      x0 += w;
    }
  }
  // compass inlay: thin bronze ring and eight points, worn
  g.strokeStyle = 'rgba(154,107,60,0.75)'; g.lineWidth = 2;
  g.beginPath(); g.arc(cx, cy, 3.0 * px, 0, Math.PI * 2); g.stroke();
  g.beginPath(); g.arc(cx, cy, 1.4 * px, 0, Math.PI * 2); g.stroke();
  g.fillStyle = 'rgba(154,107,60,0.55)';
  for (let k = 0; k < 8; k++) {
    const a = k * Math.PI / 4, r = (k % 2 ? 2.2 : 3.6) * px;
    g.beginPath(); g.moveTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r);
    g.lineTo(cx + Math.cos(a + 0.18) * 0.5 * px, cy + Math.sin(a + 0.18) * 0.5 * px);
    g.lineTo(cx + Math.cos(a - 0.18) * 0.5 * px, cy + Math.sin(a - 0.18) * 0.5 * px); g.fill();
  }
  for (let i = 0; i < 900; i++) { g.fillStyle = ['rgba(232,220,192,0.18)', 'rgba(20,14,22,0.25)'][i % 2]; g.fillRect(Math.floor(rnd() * N), Math.floor(rnd() * N), 1, 1); }
  const t = new THREE.CanvasTexture(c);
  t.magFilter = t.minFilter = THREE.NearestFilter; t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

// L4: Haunted Mausoleum. Four ward pillars at WARD_SPOTS (three states each), open centre and diagonals, grand
// sarcophagus in the north recess, spawn alcoves and stained glass on the north wall, marble balustrade and steps south.
const wards = [];                       // { i, states: {intact, damaged, broken}, crystal, light, cy }
export function setWardState(i, state) {
  const w = wards[i]; if (!w) return;
  for (const k in w.states) w.states[k].visible = (k === state);
  w.crystal.visible = state !== 'broken';
  w.light.intensity = state === 'intact' ? 10 : state === 'damaged' ? 5 : 0;
  w.light.color.set(state === 'intact' ? COL.amber : 0xd9602e);
}
function buildMausoleum() {
  const g = group('last_ward');
  g.add(groundPlane(mausoleumGround()));
  const WX = 11.3, WZ = 9.4;
  // north wall
  const north = { [-3]: 'stained_glass', [-2]: 'spawn_alcove', [-1]: 'stained_glass', 1: 'stained_glass', 2: 'spawn_alcove', 3: 'stained_glass' };
  for (let i = -3; i <= 3; i++) {
    if (i === 0) {                                     // recess: wall set back, returns either side
      inst('marble_wall', 0, -WZ - 1.6, 0, 1, g);
      for (const s of [-1, 1]) inst('marble_wall', s * 1.6, -WZ - 0.3, -s * Math.PI / 2, 0.45, g);
    } else inst(north[i], i * 3.2, -WZ - 0.1, 0, 1, g);
  }
  // sides face inward; south is a low marble balustrade with entrance steps, so the hall stays readable as interior
  for (const s of [-1, 1]) for (let k = 0; k < 6; k++) inst('marble_wall', s * (WX + 0.15), -WZ + 1.55 + k * 3.1, -s * Math.PI / 2, 0.97, g);
  const fz = WZ + 0.2;
  for (let i = 0; i <= 7; i++) {
    const x = -WX + i * (2 * WX / 7); inst('marble_post', x, fz, 0, 1, g);
    if (i < 7) { const mx = x + WX / 7; if (Math.abs(mx) > 1.7) inst('marble_rail', mx, fz, 0, (2 * WX / 7) / 3.2, g); }
  }
  inst('marble_stairs', 0, fz - 0.3, 0, 1, g);
  inst('grand_sarcophagus', 0, -9.25, 0, 1, g);
  // ward pillars
  WARD_SPOTS.forEach(([x, z], i) => {
    const states = { intact: inst('ward_pillar', x, z, 0, 1, g), damaged: inst('ward_pillar_damaged', x, z, i, 1, g), broken: inst('ward_pillar_broken', x, z, i * 2, 1, g) };
    const crystal = inst('ward_crystal', x, z, 0, 1.25, g); const cy = 2.0; crystal.position.y = cy;
    const light = new THREE.PointLight(COL.amber, 10, 6, 1.6); light.position.set(x, 1.6, z); g.add(light);
    wards.push({ i, states, crystal, light, cy });
    setWardState(i, 'intact');
  });
  for (const s of [-1, 1]) {
    inst('statue_mourner', s * 2.75, -9.9, 0, 0.95, g);
    inst('candelabrum', s * 2.4, -7.75, 0, 1, g);
    inst('statue_mourner', s * 10.2, -8.5, -s * 0.5, 0.95, g);
    for (const z of [-4.6, 1.6, 6.4]) inst('candelabrum', s * 10.45, z, s * Math.PI / 2, 1, g);
    for (const z of [-1.5, 4.0]) inst('ritual_banner', s * 10.75, z, -s * Math.PI / 2, 1, g);
    inst('urn', s * 2.3, fz + 0.15, 0, 0.9, g);
    inst('candles', s * 9.5, 8.6, s, 1, g);
    inst('candles', s * 5.8, -8.4, s * 2, 1, g);
    const W = new THREE.PointLight(0x9b7bff, 7, 7, 1.6); W.position.set(s * 6.4, 2.6, -8.2); g.add(W);
  }
  const L = new THREE.PointLight(COL.amber, 6, 7, 1.6); L.position.set(0, 2.4, -7.4); g.add(L);
  g.visible = false;
}

// polished marble: diagonal two-tone checker, a gold seal ring through the four ward spots, gold diagonals, worn
// petals and wax near the walls
function mausoleumGround() {
  const N = 384, size = 32, px = N / size, c = document.createElement('canvas'); c.width = c.height = N;
  const g = c.getContext('2d');
  let seed = 57; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const cx = N / 2, cy = N / 2 + 1 * px;
  g.fillStyle = '#2a2230'; g.fillRect(0, 0, N, N);
  const T = 14;
  for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
    const wx = (x - cx) / px, wz = (y - cy) / px;
    if (Math.abs(wx) > 11.4 || Math.abs(wz) > 9.6) continue;
    const u = Math.floor((x + y * 1.4) / T), v = Math.floor((x - y * 1.4) / T);
    const light = (u + v) & 1;
    const edge = ((x + y * 1.4) % T < 1) || ((x - y * 1.4 + 4000) % T < 1);
    g.fillStyle = edge ? '#54485f' : light ? '#7f748c' : '#6c617a';
    g.fillRect(x, y, 1, 1);
  }
  for (let i = 0; i < 1400; i++) { g.fillStyle = ['rgba(255,255,255,0.08)', 'rgba(20,10,30,0.12)'][i % 2]; g.fillRect(Math.floor(rnd() * N), Math.floor(rnd() * N), 2, 1); }  // veining
  const R = Math.hypot(4.5, 3.5) * px;
  g.strokeStyle = '#c9a046'; g.lineWidth = 2;
  for (const r of [R, 2.0 * px]) { g.beginPath(); g.ellipse(cx, cy, r, r, 0, 0, Math.PI * 2); g.stroke(); }
  g.lineWidth = 1;
  for (const [x, z] of [[4.5, 3.5], [-4.5, 3.5], [4.5, -3.5], [-4.5, -3.5]]) {
    g.beginPath(); g.moveTo(cx + x * 0.35 * px, cy + z * 0.35 * px); g.lineTo(cx + x * px, cy + z * px); g.stroke();
    g.fillStyle = '#c9a046'; g.save(); g.translate(cx + x * px, cy + z * px); g.rotate(Math.PI / 4); g.fillRect(-9, -9, 18, 18); g.restore();
    g.fillStyle = '#4a3f55'; g.save(); g.translate(cx + x * px, cy + z * px); g.rotate(Math.PI / 4); g.fillRect(-7, -7, 14, 14); g.restore();
  }
  for (let k = 0; k < 4; k++) {                                     // seal glyph
    const a = k * Math.PI / 2 + Math.PI / 4;
    g.beginPath(); g.moveTo(cx + Math.cos(a) * 0.6 * px, cy + Math.sin(a) * 0.6 * px); g.lineTo(cx + Math.cos(a) * 1.8 * px, cy + Math.sin(a) * 1.8 * px); g.stroke();
  }
  for (let i = 0; i < 220; i++) {                                    // petals and wax near the walls
    const x = (rnd() - 0.5) * 22.4, z = (rnd() < 0.5 ? -1 : 1) * (7.6 + rnd() * 1.8);
    g.fillStyle = ['#c45a7a', '#d98ac4', '#f7dbb0'][Math.floor(rnd() * 3)];
    g.fillRect(Math.round(cx + x * px), Math.round(cy + z * px), 2, 1);
  }
  const t = new THREE.CanvasTexture(c);
  t.magFilter = t.minFilter = THREE.NearestFilter; t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

// L5: The Hollow Grounds. Open burial field around a walkable central shrine (banking radius 1.3 m, exit at the
// centre); ruins, dead trees and graves only on the perimeter; fissures glow cool violet so they don't read as hazards.
const flames = [], rocks = [];
function buildHollow() {
  const g = group('hollow_grounds');
  g.add(groundPlane(hollowGround()));
  inst('soul_shrine', 0, 0, Math.PI / 8, 1, g);
  const v = inst('spirit_vessel', 0, 0, 0, 1, g); v.position.y = 0.22;
  const f = inst('soul_flame', 0, 0, 0, 1.1, g); f.position.y = 0.95; flames.push(f);
  const sl = new THREE.PointLight(0x5ff0d8, 16, 8, 1.5); sl.position.set(0, 1.6, 0); g.add(sl);
  // perimeter: broken walls and fence runs with gaps, the ruined gate to the south
  for (const [x, z, r] of [[-9.4, -9.5, 0], [-3.5, -9.9, 0.05], [3.8, -9.7, -0.05], [-11.9, -4.0, Math.PI / 2], [-11.9, 4.4, Math.PI / 2 + 0.1],
    [11.9, -1.5, Math.PI / 2], [11.9, 5.6, Math.PI / 2 - 0.1], [-7.0, 9.6, 0.05], [7.4, 9.5, -0.04]]) inst('wall_ruin', x, z, r, 1, g);
  for (const [x, z, r] of [[-5.6, 9.7, 0], [4.6, 9.8, 0.1], [11.8, 2.2, Math.PI / 2], [-11.8, 0.4, Math.PI / 2]]) { inst('fence', x, z, r, 0.95, g); }
  inst('ruined_gate', 0, 9.7, 0, 1, g);
  inst('dead_tree_big', -8.2, -11.2, 0.6, 1, g);
  inst('collapsed_tomb', 9.4, -10.1, -0.3, 1, g);
  for (const s of [-1, 1]) inst('obelisk', s * 1.0 + s * 0.6, -10.2, s * 0.2, 1, g);
  for (const [x, z, r] of [[-13.6, 7.6, 1.2], [13.8, -7.6, 2.7], [13.5, 8.6, 0.4], [-14.0, -2.2, 2.0]]) inst('dead_tree_small', x, z, r, 1, g);
  for (const [x, z, r] of [[-9.6, 8.5, 0.2], [9.3, 8.4, -0.3], [-10.2, -7.9, Math.PI / 2]]) inst('open_grave', x, z, r, 0.9, g);
  for (const [x, z, r] of [[-6.2, -8.9, 0.2], [6.6, -8.8, -0.3], [-10.6, 2.6, 1.4], [10.6, -4.8, -1.3], [10.8, 3.6, -1.6], [-4.2, 8.9, 0.1], [3.0, 9.0, -0.2], [-10.7, -1.6, 1.7]])
    inst('gravestone_cracked', x, z, r, 1, g);
  for (const [x, z] of [[-7.8, -8.3], [8.0, 7.9], [-10.9, 6.0], [10.7, -7.0], [5.6, -9.4]]) inst('spirit_bramble', x, z, x, 1, g);
  for (const [x, z, r] of [[-12.6, -6.8, 0.4], [12.7, 0.6, 1.9], [-2.0, 10.4, 2.6], [2.6, -9.0, 0.9]]) inst('rubble', x, z, r, 0.9, g);
  for (const [x, z, y, sc] of [[-13.2, -9.4, 3.2, 0.9], [14.2, -4.6, 2.6, 0.7], [13.8, 5.0, 3.6, 0.6], [-14.4, 3.2, 2.2, 0.55]]) {
    const r = inst('floating_rock', x, z, x * 0.3, sc, g); r.position.y = y; rocks.push({ node: r, y, p: x });
  }
  for (const s of [-1, 1]) for (const z of [-7.6, 7.8]) {
    inst('lamp', s * 9.8, z, 0, 1, g);
    const L = new THREE.PointLight(COL.amber, 10, 6.5, 1.6); L.position.set(s * 9.8, 2.1, z); g.add(L);
  }
  for (const [x, z] of [[-9, -8.5], [9, 8]]) { const L = new THREE.PointLight(0x9b7bff, 5, 5, 1.6); L.position.set(x, 1, z); g.add(L); }
  g.visible = false;
}

// cracked earth with dry grass and red leaves, worn paving rings around the shrine, cool violet fissures
function hollowGround() {
  const N = 384, size = 32, px = N / size, c = document.createElement('canvas'); c.width = c.height = N;
  const g = c.getContext('2d');
  let seed = 71; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const cx = N / 2, cy = N / 2 + 1 * px;
  g.fillStyle = '#4e4044'; g.fillRect(0, 0, N, N);
  for (let i = 0; i < 6000; i++) { g.fillStyle = ['#544548', '#483b40', '#5a4a44', '#443840', '#57494d'][Math.floor(rnd() * 5)]; g.fillRect(Math.floor(rnd() * N), Math.floor(rnd() * N), 2 + Math.floor(rnd() * 3), 2); }
  // dry-earth crack network
  g.fillStyle = '#2e252b';
  for (let k = 0; k < 160; k++) {
    let x = rnd() * N, y = rnd() * N, a = rnd() * 6.28;
    for (let i = 0; i < 10; i++) { g.fillRect(Math.round(x), Math.round(y), 1, 1); a += (rnd() - 0.5) * 1.2; x += Math.cos(a) * 2; y += Math.sin(a) * 2; }
  }
  // paving: polar flagstone rings around the shrine, crumbling away at the outer edge
  const hash = (i, j) => { let h = (i * 374761393 + j * 668265263) | 0; h = (h ^ (h >> 13)) * 1274126177; return ((h ^ (h >> 16)) >>> 0) / 4294967295; };
  const pave = ['#6e6270', '#665a69', '#746878', '#5f5462'];
  for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
    const dx = (x - cx) / px, dz = (y - cy) / px, r = Math.hypot(dx, dz);
    if (r < 2.1 || r > 5.6) continue;
    const ring = Math.floor((r - 2.1) / 0.9), fr = ((r - 2.1) / 0.9) % 1;
    const n = Math.round(2 * Math.PI * (2.55 + ring * 0.9) / 1.0);
    const fa = ((Math.atan2(dz, dx) / (2 * Math.PI) + 1) * n + ring * 0.5) % n, seg = Math.floor(fa);
    const hv = hash(ring, seg);
    if (hv < ring * 0.2 - 0.05) continue;                          // missing stones further out
    const grout = fr < 0.08 || (fa % 1) < 0.07 * (2.55 + ring * 0.9) / 2.5;
    g.fillStyle = grout ? '#2f262c' : pave[Math.floor(hv * 4)];
    g.fillRect(x, y, 1, 1);
  }
  // violet fissures: branching lines radiating outward, kept clear of the shrine
  for (let k = 0; k < 9; k++) {
    let a = k / 9 * Math.PI * 2 + rnd() * 0.4, r = 5.2 + rnd(), x = cx + Math.cos(a) * r * px, y = cy + Math.sin(a) * r * px;
    for (let i = 0; i < 30; i++) {
      g.fillStyle = '#5a3f86'; g.fillRect(Math.round(x) - 1, Math.round(y), 3, 1);
      g.fillStyle = '#9b7bff'; g.fillRect(Math.round(x), Math.round(y), 1, 1);
      a += (rnd() - 0.5) * 0.6; x += Math.cos(a) * 2.2; y += Math.sin(a) * 2.2;
      if (rnd() < 0.08) { let bx = x, by = y, ba = a + (rnd() < 0.5 ? 0.9 : -0.9); for (let j = 0; j < 6; j++) { g.fillStyle = '#7d6bff'; g.fillRect(Math.round(bx), Math.round(by), 1, 1); bx += Math.cos(ba) * 2; by += Math.sin(ba) * 2; } }
    }
  }
  for (let i = 0; i < 700; i++) {                                    // dry grass tufts
    const x = Math.floor(rnd() * N), y = Math.floor(rnd() * N);
    if (Math.hypot(x - cx, y - cy) < 6.5 * px) continue;
    g.fillStyle = ['#7a6a4a', '#6a5c44', '#5c6a45'][Math.floor(rnd() * 3)];
    g.fillRect(x, y, 1, 2); g.fillRect(x + 1, y - 1, 1, 2); g.fillRect(x - 1, y, 1, 1);
  }
  for (let k = 0; k < 70; k++) {                                     // blood-red leaf drifts
    const fx = rnd() * N, fy = rnd() * N;
    if (Math.hypot(fx - cx, fy - cy) < 5 * px) continue;
    for (let i = 0; i < 22; i++) { g.fillStyle = ['#a8344a', '#c4503a', '#8e3a3e'][Math.floor(rnd() * 3)]; g.fillRect(Math.round(fx + (rnd() - 0.5) * 22), Math.round(fy + (rnd() - 0.5) * 16), 2, 1); }
  }
  const t = new THREE.CanvasTexture(c);
  t.magFilter = t.minFilter = THREE.NearestFilter; t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

// L6: The Bell Tower. Near-octagonal rooftop, flat circular ritual floor, wide outer ring; the Great Bell hangs in a
// recess north of the floor. Low parapets on the open sides keep the rooftop readable from the top-down camera.
let bell = null, warden = null, bellSwing = 0;
export function bellKick() { bellSwing = 1; }                      // the Warden's shockwave rings the bell
export const bellTowerWarden = () => warden;
function buildBellTower() {
  const g = group('bell_tower');
  g.add(groundPlane(bellGround()));
  const oct = [[-9, -9.6], [9, -9.6], [11.6, -7.2], [11.6, 7.2], [9, 9.6], [-9, 9.6], [-11.6, 7.2], [-11.6, -7.2]];
  // north: tower wall bays either side of the bell recess
  for (const [x, kind] of [[-7.4, 'tower_window'], [-4.4, 'broken_clock'], [4.4, 'tower_window'], [7.4, 'tower_window']]) inst(kind, x, -9.9, 0, 0.94, g);
  for (const s of [-1, 1]) inst('tower_window', s * 2.95, -11.3, -s * Math.PI / 2, 0.85, g);
  inst('tower_window', 0, -12.7, 0, 1, g);
  const frame = inst('bell_frame', 0, -10.5, 0, 0.92, g);
  const pivot = new THREE.Group(); pivot.position.set(0, 4.45, -10.5); g.add(pivot);
  bell = new THREE.Group(); pivot.add(bell);
  const b = inst('great_bell', 0, 0, 0, 0.92, bell); b.position.y = -3.1;
  const cl = inst('bell_clapper', 0, 0, 0, 0.92, bell); cl.position.y = -3.0;
  // rooftop edges: parapets along every edge except the north, gap at the south for the entrance
  for (let i = 1; i < oct.length; i++) {
    const [x0, z0] = oct[i], [x1, z1] = oct[(i + 1) % oct.length];
    const len = Math.hypot(x1 - x0, z1 - z0), n = Math.max(1, Math.round(len / 3.2)), ry = Math.atan2(-(z1 - z0), x1 - x0);
    for (let k = 0; k < n; k++) {
      const t = (k + 0.5) / n, x = x0 + (x1 - x0) * t, z = z0 + (z1 - z0) * t;
      if (Math.abs(z - 9.6) < 0.1 && Math.abs(x) < 1.8) continue;
      inst((i + k) % 4 === 2 ? 'parapet_broken' : 'parapet', x, z, ry, (len / n) / 3.2, g);
    }
  }
  for (const [x, z, r] of [[-11.6, 7.2, 0.6], [11.6, 7.2, -0.6], [-1.9, 9.7, 0], [1.9, 9.7, 0], [-11.6, -7.2, 2.4], [11.6, -7.2, -2.4]]) inst('gargoyle', x, z, r, 0.9, g);
  for (const s of [-1, 1]) {
    inst('weeping_angel', s * 3.7, -9.2, s * -0.3, 1, g);
    inst('ritual_banner', s * 5.9, -9.25, 0, 1.1, g);
    inst('candles', s * 2.4, -8.6, s, 1, g);
    inst('candles', s * 9.4, -8.3, s * 2, 1, g);
    inst('bell_gear', s * 10.2, 3.0, s, 1, g);
    inst('rubble', s * 7.2, 9.0, s * 0.8, 0.9, g);
  }
  for (const [x, z] of [[-10.4, -7.8], [10.4, -7.8], [-10.4, 7.8], [10.4, 7.8]]) {
    inst('signal_brazier', x, z, 0, 1, g);
    const L = new THREE.PointLight(0xff9a3c, 12, 7.5, 1.6); L.position.set(x, 2.2, z); g.add(L);
  }
  const bl = new THREE.PointLight(COL.amber, 10, 8, 1.6); bl.position.set(0, 2.6, -7.9); g.add(bl);
  warden = buildWarden(n => PROTOS[n].clone(true));
  g.add(warden.root);
  const wl = new THREE.PointLight(0x9b7bff, 8, 7, 1.6); wl.position.set(0, 3.0, 0.5); warden.root.add(wl);
  g.visible = false;
}

// rooftop stone with a muted ritual mosaic (rings, eight-point star, rune ticks) and a wide plain outer ring;
// beyond the octagon a dark drop to the distant cemetery
function bellGround() {
  const N = 384, size = 32, px = N / size, c = document.createElement('canvas'); c.width = c.height = N;
  const g = c.getContext('2d');
  let seed = 89; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const cx = N / 2, cy = N / 2 + 1 * px;
  g.fillStyle = '#1b1628'; g.fillRect(0, 0, N, N);
  for (let i = 0; i < 260; i++) { g.fillStyle = ['#2a2238', '#231d33'][i % 2]; g.fillRect(Math.floor(rnd() * N), Math.floor(rnd() * N), 2, 3); }  // distant graves
  const inside = (x, z) => Math.abs(x) <= 11.7 && Math.abs(z) <= 9.7 && Math.abs(x) + Math.abs(z) <= 18.9;
  const hash = (i, j) => { let h = (i * 374761393 + j * 668265263) | 0; h = (h ^ (h >> 13)) * 1274126177; return ((h ^ (h >> 16)) >>> 0) / 4294967295; };
  const flags = ['#5f5868', '#58516a', '#666070', '#524b5c'], ring = ['#6a6276', '#635b70', '#70687c'];
  for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
    const wx = (x - cx) / px, wz = (y - cy) / px;
    if (!inside(wx, wz)) continue;
    const r = Math.hypot(wx, wz);
    let col;
    if (r < 7.4) {                                                   // circular ritual floor: concentric flag rings
      const ri = Math.floor(r / 0.95), n = Math.max(6, Math.round(2 * Math.PI * (ri + 0.5) * 0.95 / 1.0));
      const fa = ((Math.atan2(wz, wx) / (2 * Math.PI) + 1) * n + ri * 0.5) % n;
      const grout = (r / 0.95) % 1 < 0.08 || fa % 1 < 0.06;
      col = grout ? '#3a3346' : ring[Math.floor(hash(ri, Math.floor(fa)) * 3)];
    } else {                                                         // outer ring: square flags
      const i = Math.floor((x + 3) / 16), j = Math.floor(y / 22);
      const grout = (x + 3) % 16 < 1 || y % 22 < 1;
      col = grout ? '#3a3346' : flags[Math.floor(hash(i, j) * 4)];
    }
    g.fillStyle = col; g.fillRect(x, y, 1, 1);
  }
  // muted inlay: rings, eight-point star, rune ticks
  g.strokeStyle = 'rgba(201,160,70,0.55)'; g.lineWidth = 2;
  for (const r of [7.3, 6.4, 2.2]) { g.beginPath(); g.arc(cx, cy, r * px, 0, Math.PI * 2); g.stroke(); }
  g.fillStyle = 'rgba(201,160,70,0.35)';
  for (let k = 0; k < 8; k++) {
    const a = k * Math.PI / 4, r = (k % 2 ? 4.0 : 6.2) * px;
    g.beginPath(); g.moveTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r);
    g.lineTo(cx + Math.cos(a + 0.22) * 1.2 * px, cy + Math.sin(a + 0.22) * 1.2 * px);
    g.lineTo(cx + Math.cos(a - 0.22) * 1.2 * px, cy + Math.sin(a - 0.22) * 1.2 * px); g.fill();
  }
  g.fillStyle = 'rgba(201,160,70,0.6)';
  for (let k = 0; k < 24; k++) { const a = k / 24 * Math.PI * 2; g.fillRect(Math.round(cx + Math.cos(a) * 6.85 * px) - 1, Math.round(cy + Math.sin(a) * 6.85 * px) - 1, 3, 3); }
  for (let i = 0; i < 120; i++) {                                    // cracks and red ivy leaves at the edge
    const x = Math.floor(rnd() * N), y = Math.floor(rnd() * N), wx = (x - cx) / px, wz = (y - cy) / px;
    if (!inside(wx, wz) || Math.hypot(wx, wz) < 7.6) continue;
    g.fillStyle = rnd() < 0.5 ? '#a8344a' : '#2c2536'; g.fillRect(x, y, 2, 1);
  }
  const t = new THREE.CanvasTexture(c);
  t.magFilter = t.minFilter = THREE.NearestFilter; t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

// dev/preview: drop an animated spirit into the scene (not gameplay)
const previews = [];
export function previewSpirit(id, x, z, phase = 0) { const s = SPIRITS[id].build(n => PROTOS[n].clone(true), phase); s.root.position.set(x, 0, z); scene.add(s.root); previews.push(s); return s; }

// ---------- lighting and particle pass ----------
// Emitter coordinates are world space (sets sit at the origin); the parent only gates visibility.
const WARM = 0xffb85b, EMBER = 0xff9a3c, TEAL = 0x5ff0d8, VIOLET = 0x9b7bff, LAV = 0xb9a1e8;
const flickerAll = (g, kind, match = () => true) => g.traverse(o => { if (o.isPointLight && match(o)) flicker(o, kind); });

function fxChurchyard() {
  const g = sets.old_churchyard, d = group('old_churchyard');
  for (const [x, z] of [[-9.6, -7.4], [9.6, -7.4], [-9.6, 7.6], [9.6, 7.6], [-2.2, 9.7], [2.2, 9.7]]) {   // lamp heads
    glow(g, x, 2.12, z, { color: WARM, size: 2.2, kind: 'lamp' }); fxEmbers(g, x, 2.3, z, { rate: 0.6, up: 0.4 });
  }
  glow(g, 0, 2.9, -10.1, { color: WARM, size: 4.5, kind: 'window', opacity: 0.45 });                           // chapel window
  for (const [x, z] of [[-2.75, -10.05], [2.75, -10.05], [-8.7, -4.7], [9.3, 2.7], [-9.1, 6.5], [7.7, -7.9]]) {  // candle clusters
    glow(d, x, 0.6, z, { color: WARM, size: 1.1, kind: 'candle' }); fxEmbers(d, x, 0.65, z, { rate: 0.5, up: 0.3, life: 1.0 });
  }
  fxFireflies(g, 0, -1, { n: 14, area: [22, 17], color: 0xffd27a, y: 0.6 });
  fxPetals(g, { rate: 1.2, colors: [0xe08a3c, 0xc4503a, 0xb96d48], wind: 0.35 });                                // falling leaves
}
function fxGardens() {
  const g = sets.forgotten_gardens;
  g.traverse(o => { if (o.isPointLight && (o.color.getHex() === 0x4fe0c8 || o.color.getHex() === 0x8f7cff)) { flicker(o, 'magic'); glow(g, o.position.x, 1.35, o.position.z, { color: o.color.getHex(), size: 2.2, kind: 'magic' }); } });
  for (const [x, z, sx, sz] of [[-10.25, 0, 0.35, 1], [10.25, 0, 0.35, 1], ...GARDEN_NS_PORTALS.flatMap(x => [[x, -8, 1, 0.35], [x, 8, 1, 0.35]])])
    fxSwirl(g, x, 0.15, z, { rate: 12, color: 0xefe0ff, color2: 0x7d6bff, r: 1.9, rise: 1.3, w: 2.2, sx, sz, life: 1.8 });            // portal swirls
  glow(g, 0, 2.2, -10.6, { color: WARM, size: 4.5, kind: 'window', opacity: 0.4 });                            // conservatory
  fxSwirl(g, 0, 1.0, 0, { rate: 4, color: TEAL, r: 0.7, rise: 0.8, w: 1.4, life: 1.6 });                           // fountain mist
  fxFireflies(g, 0, -1, { n: 18, area: [22, 17], color: 0x9fe8a8, y: 0.5 });
  fxPetals(g, { rate: 2.5, colors: [0xd98ac4, 0xc45a7a, 0xf6d1a5, 0xefe0ff], wind: 0.2 });
}
function fxCatacombs() {
  const g = sets.catacombs;
  flickerAll(g, 'candle', L => L.color.getHex() !== 0x9b7bff);
  for (const b of barriers) b.node.children.forEach(o => {                                                      // flame posts
    if (!o.name && o.position.y === 0 && b.node.children.indexOf(o) > 0) {
      const sp = glow(b.node, o.position.x, 1.82, o.position.z, { color: b.realm ? VIOLET : EMBER, size: 1.3, kind: b.realm ? 'magic' : 'brazier' });
      b.mats.push(sp.material);
    }
  });
  for (const [x, z] of [[-2.5, -8], [2.5, -8], [-6.9, -8.2], [6.9, -8.2], [-10.4, 1], [10.4, 1], [-10.2, -6.6], [10.2, -6.6], [-6.2, 8.4], [6.2, 8.4]]) {
    glow(g, x, 0.6, z, { color: WARM, size: 1.1, kind: 'candle' }); fxEmbers(g, x, 0.65, z, { rate: 0.4, up: 0.3, life: 0.9 });
  }
  glow(g, 0, 1.55, -8.6, { color: EMBER, size: 2.4, kind: 'brazier', opacity: 0.5 });                         // crypt door ward
  fxMotes(g, { rate: 5, color: 0xf7dbb0, area: [20, 16], y: [0.4, 3.2], life: 7 });                             // dust in the candlelight
}
function fxMausoleum() {
  const g = sets.last_ward;
  for (const w of wards) {
    const sp = glow(w.crystal, 0, 0.35, 0, { color: VIOLET, size: 1.3, kind: 'magic' });
    w.glow = sp;
    const [wx, wz] = WARD_SPOTS[w.i];                                    // particles live in world space
    fxSwirl(w.crystal, wx, 1.75, wz, { rate: 3, color: LAV, color2: 0xffe29a, r: 0.45, rise: 0.5, w: 3, life: 1.3 });
    glow(w.states.intact, 0, 0.95, 0, { color: WARM, size: 1.6, kind: 'candle', opacity: 0.45 });
  }
  for (const s of [-1, 1]) {
    for (const z of [-4.6, 1.6, 6.4]) glow(g, s * 10.45, 1.75, z, { color: WARM, size: 1.2, kind: 'candle' });
    glow(g, s * 2.4, 1.75, -7.75, { color: WARM, size: 1.2, kind: 'candle' });
    for (const x of [3.2, 9.6]) glow(g, s * x, 2.2, -9.0, { color: s * x > 5 ? 0xc45a7a : 0x7d6bff, size: 2.6, kind: 'window', opacity: 0.35 });   // stained glass
  }
  fxMotes(g, { rate: 4, color: 0xd9cfe0, area: [20, 16], y: [0.6, 3.5], life: 8 });                             // incense motes
}
function fxHollow() {
  const g = sets.hollow_grounds;
  flickerAll(g, 'lamp', L => L.color.getHex() === COL.amber);
  for (const [x, z] of [[-9.8, -7.6], [9.8, -7.6], [-9.8, 7.8], [9.8, 7.8]]) { glow(g, x, 2.12, z, { color: WARM, size: 2.0, kind: 'lamp' }); fxEmbers(g, x, 2.3, z, { rate: 0.6 }); }
  glow(g, 0, 1.3, 0, { color: TEAL, size: 3.2, kind: 'magic', opacity: 0.5 });
  fxSwirl(g, 0, 0.3, 0, { rate: 10, color: TEAL, color2: 0xefe0ff, r: 1.7, rise: 1.1, w: 2.0, life: 2.0, inward: true });      // souls drawn into the shrine
  for (let i = 0; i < 9; i++) { const a = i / 9 * Math.PI * 2; fxEmbers(g, Math.cos(a) * 6, 0.05, Math.sin(a) * 6, { rate: 0.5, color: VIOLET, spread: 1.6, up: 0.35, life: 2.4 }); }  // from the fissures
  for (const [x, z] of [[-7.8, -8.3], [8.0, 7.9], [-10.9, 6.0], [10.7, -7.0], [5.6, -9.4]]) glow(g, x, 0.7, z, { color: VIOLET, size: 1.4, kind: 'magic', opacity: 0.4 });
}
function fxBellTower() {
  const g = sets.bell_tower;
  flickerAll(g, 'brazier', L => L.color.getHex() === 0xff9a3c);
  for (const [x, z] of [[-10.4, -7.8], [10.4, -7.8], [-10.4, 7.8], [10.4, 7.8]]) {
    glow(g, x, 1.7, z, { color: EMBER, size: 2.6, kind: 'brazier' });
    fxEmbers(g, x, 1.8, z, { rate: 9, color: 0xffd27a, spread: 0.4, up: 1.4, life: 2.4 });
  }
  fxAsh(g, { rate: 14, wind: 1.3 });
  if (warden) {
    fxSwirl(warden.rig, 0, 0.6, 0, { rate: 8, color: 0x8a6ad8, color2: 0x7de3ff, r: 1.9, rise: 1.6, w: 1.6, life: 2.4 });   // motes circling the Warden
    for (const sd of warden.sides) glow(sd.pivot, 0, -0.7, 0, { color: 0xffb85b, size: 1.6, kind: 'candle', opacity: 0.6 });
  }
}
function fxPlayer() {
  // lantern halo and a thin ember trail while moving; lavender motes swirl around it in the spirit world
  glow(rig.body, 0.42, 0.3, 0.14, { color: WARM, size: 1.4, kind: 'lamp', opacity: 0.6 });
  const wp = new THREE.Vector3();
  emitter(rig.player, 8, () => {
    if (S.state !== 'playing' && S.state !== 'tutorial') return;
    rig.lantern.getWorldPosition(wp);
    if (S.realm) { if (vfxRandom() < 0.6) fxEmberAt(wp.x, wp.y + 0.1, wp.z, { color: 0xd9c8ff, color2: 0x7d6bff, up: 0.6, life: 1.1 }); }
    else if (S.moving > 0.3 || vfxRandom() < 0.15) fxEmberAt(wp.x, wp.y + 0.15, wp.z, { up: 0.4 });
  });
}

export function buildSets() {
  dressChurchyard(); buildGardens(); buildCatacombs(); buildMausoleum(); buildHollow(); buildBellTower();
  fxChurchyard(); fxGardens(); fxCatacombs(); fxMausoleum(); fxHollow(); fxBellTower(); fxPlayer();
}
// Per-level ambient light mood (read by visuals.js; it blends toward the spirit-world tint on top).
export const LIGHT_PROFILES = {
  old_churchyard: { hemi: 0xc9b6e6, hemiI: 1.45, moon: 0xc9b8ff, moonI: 1.1 },
  forgotten_gardens: { hemi: 0xb8d6d0, hemiI: 1.35, moon: 0xb8e0ff, moonI: 1.0 },
  catacombs: { hemi: 0xc8a8a0, hemiI: 1.05, moon: 0xffc8a0, moonI: 0.55 },
  last_ward: { hemi: 0xbfb0f0, hemiI: 1.3, moon: 0xd0c0ff, moonI: 0.9 },
  hollow_grounds: { hemi: 0xc8a6be, hemiI: 1.25, moon: 0xd8a0c0, moonI: 0.95 },
  bell_tower: { hemi: 0xa8b4f0, hemiI: 1.3, moon: 0xd8e0ff, moonI: 1.6 },
};
export const lightProfile = { ...LIGHT_PROFILES.old_churchyard };
export let setEpoch = 0;   // bumps on every set change so the shadow map can refresh at once
export function showSet(id) {
  setEpoch++;
  for (const k in sets) sets[k].visible = (k === id);
  Object.assign(lightProfile, LIGHT_PROFILES[id] || LIGHT_PROFILES.old_churchyard);
}
