// Level set dressing: decorative props placed around each arena. Props never sit on the combat floor and have no
// collision; gameplay geometry (walls, portals, pillars) lives in the level's own systems.
import * as THREE from 'three';
import { scene, toonRamp } from './render.js';
import { COL } from './config.js';
import { inst } from './assets.js';
import { churchyard } from './level.js';
import { CATACOMB_WALLS } from './levels/registry.js';

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
  const FX = 11.6, FZ = 9.6;
  const side = { skip: (x, z) => Math.abs(z) < 3.3, skipPost: (x, z) => Math.abs(z) < 3.3 };
  boundary(g, 'balustrade', -FX, -FZ, FX, -FZ, { skip: x => Math.abs(x) < 2.6 });
  boundary(g, 'balustrade', -FX, FZ, FX, FZ, { skip: x => Math.abs(x) < 1.7 });
  boundary(g, 'balustrade', -FX, -FZ, -FX, FZ, side);
  boundary(g, 'balustrade', FX, -FZ, FX, FZ, side);
  inst('portal_arch', -10.85, 0, Math.PI / 2, 1, g);
  inst('portal_arch', 10.85, 0, -Math.PI / 2, 1, g);
  for (const s of [-1, 1]) {
    const L = new THREE.PointLight(0x9b7bff, 10, 6, 1.6); L.position.set(s * 10.2, 1.6, 0); g.add(L);
    g.add(portalPool(s));
  }
  inst('conservatory', 0, -13.1, 0, 0.9, g);
  const cl = new THREE.PointLight(COL.amber, 14, 9, 1.6); cl.position.set(0, 2.2, -10.4); g.add(cl);
  inst('fountain', 0, -9.3, 0, 1, g);
  inst('gate', 0, FZ, 0, 1, g);
  for (const s of [-1, 1]) {
    // glowing spirit-blooms instead of lamps: cool teal / violet light
    for (const [x, z, c, sc] of [[s * 2.4, FZ + 0.2, 0x4fe0c8, 1.1], [s * 9.7, -7.6, 0x8f7cff, 1.35], [s * 9.7, 7.8, 0x4fe0c8, 1.35], [s * 12.7, -1.0 * s, 0x8f7cff, 1.1]]) {
      inst('glowbloom', x, z, x * 0.7, sc, g);
      const L = new THREE.PointLight(c, 13, 7.5, 1.5); L.position.set(x, 1.5, z); g.add(L);
    }
    inst('weeping_angel', s * 6.6, 8.85, s * -0.2, 1, g);
    inst('bench', s * 5.4, -8.85, 0, 1, g);
    inst('flowerbed', s * 8.0, -8.8, 0, 0.9, g);
    inst('flowerbed', s * 4.4, 8.85, 0, 0.85, g);
    inst('urn', s * 2.75, -9.95, 0, 0.9, g);
    inst('topiary', s * 10.05, -4.0, 0, 0.9, g);
    inst('topiary', s * 10.05, 4.0, 0, 0.9, g);
    inst('hedge', s * 12.9, -6.3, Math.PI / 2, 1, g);
    inst('hedge', s * 12.9, 6.3, Math.PI / 2, 1, g);
    inst('rosebush', s * 12.8, -10.4, s, 1, g);
    inst('rosebush', s * 7.2, 10.7, s * 2, 0.9, g);
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
function portalPool(side) {
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
  m.rotation.x = -Math.PI / 2; m.position.set(side * 10.25, 0.04, 0); m.renderOrder = 1;
  pools.push(m); return m;
}
const barriers = [];                    // { node, realm, mats } for the catacomb realm walls
let shownRealm = -1;
export function tickSets(t, realm = 0) {
  for (const p of pools) if (p.parent?.visible) p.material.opacity = 0.8 + 0.2 * Math.sin(t * 3);
  if (realm !== shownRealm && barriers.length) {
    shownRealm = realm;
    // a barrier is solid in its own realm; in the other realm it fades to a ghost so the open route reads at a glance
    for (const b of barriers) for (const m of b.mats) { m.transparent = true; m.opacity = b.realm === realm ? 1 : 0.22; m.depthWrite = b.realm === realm; }
  }
}

// garden floor: lawn with drifts of wildflowers, narrow pebble paths (portal to portal, gate to fountain) and a small
// mosaic rose at the crossing
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
  // pebble paths: an east-west path between the portals with a gentle wave, and a gate-to-fountain path
  const onPath = (x, z) => (Math.abs(z - 0.35 * Math.sin(x * 0.45)) < 0.75 && Math.abs(x) < 15) || (Math.abs(x - 0.25 * Math.sin(z * 0.6)) < 0.65 && z > -10.2 && z < 16);
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
  // small mosaic rose where the paths cross
  const R = 2.1;
  for (let y = -R * px; y <= R * px; y++) for (let x = -R * px; x <= R * px; x++) {
    const r = Math.hypot(x, y) / px; if (r > R) continue;
    const a = Math.atan2(y, x), petal = Math.abs(Math.cos(a * 4));
    let col;
    if (r > R - 0.22) col = '#7a7182';
    else if (r > R - 0.42) col = '#3f6f6a';
    else if (r < 0.3) col = '#c9a26a';
    else if (r < 1.45 * petal + 0.2) col = r < 0.85 * petal + 0.2 ? '#a75a76' : '#8a5f86';
    else col = ((Math.floor(x / 3) + Math.floor(y / 3)) & 1) ? '#4b4a5e' : '#545266';
    g.fillStyle = col; g.fillRect(Math.round(cx + x), Math.round(cy + y), 1, 1);
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

export function buildSets() { dressChurchyard(); buildGardens(); buildCatacombs(); }
export function showSet(id) { for (const k in sets) sets[k].visible = (k === id); }
