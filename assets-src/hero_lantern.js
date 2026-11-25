// The Caretaker's Lantern, hero version (promo renders, icon). Height ~1.0 unit including the bail handle.
// Keeps the production reference's identity (square glass body, pyramid roof, finial, bail, warm amber light) and adds:
// gothic-arch window tracery (echoes the chapel), a melted candle and flame inside, crescent-moon roof vents that glow,
// a lavender spirit gem on the chimney (the lantern is what crosses worlds), a hinged door with latch, rivets, ball feet.
// Materials are tagged by colour so the renderer can make the glass translucent: glass = 6, flame = 22, gem = 9.
const { m, glow, ROT_X, ROT_Y, ROT_Z } = require('./common.js');

const IRON = m(15, 17), TRIM = m(40, 34), WAX = m(35, 5), SOOT = m(15);
const GLASS = glow(6), FLAME = glow(22), CORE = glow(22), GEM = glow(9), MOON = glow(36);   // single colours so the renderer can tell them apart
const R = 0.14;              // corner post offset
const Y0 = 0.105, Y1 = 0.48; // glass body bottom / top

// face frame: f = 0..3 around y; local x across the face, local n = outward distance
function onFace(f, x, y, n) { const a = f * Math.PI / 2, c = Math.cos(a), s = Math.sin(a); return [c * x + s * n, y, -s * x + c * n]; }
function faceAx(f) { return ROT_Y(f * Math.PI / 2); }

function tracery(S, f) {
  const n = R + 0.006;
  // gothic arch: two arcs meeting at a point, springing at y = 0.38
  const left = [], right = [];
  for (let i = 0; i <= 8; i++) {
    const t = i / 8, a = Math.PI * (1 - t) * 0.5;
    left.push(onFace(f, -0.115 + 0.115 * (1 - Math.cos(Math.PI / 2 * t)) , 0.36 + 0.1 * Math.sin(Math.PI / 2 * t), n));
    right.push(onFace(f, 0.115 - 0.115 * (1 - Math.cos(Math.PI / 2 * t)), 0.36 + 0.1 * Math.sin(Math.PI / 2 * t), n));
  }
  S.tube(left, 0.011, 0.011, IRON, { res: 0.004 });
  S.tube(right, 0.011, 0.011, IRON, { res: 0.004 });
  S.tube([onFace(f, 0, Y0 + 0.01, n), onFace(f, 0, 0.455, n)], 0.01, 0.01, IRON, { res: 0.004 });      // mullion
  S.tube([onFace(f, -0.12, 0.27, n), onFace(f, 0.12, 0.27, n)], 0.009, 0.009, IRON, { res: 0.004 });     // transom
  S.ball(onFace(f, 0, 0.27, n + 0.004), 0.016, TRIM, { res: 0.004 });                                   // boss where they cross
}

// Sculpted in three parts so each can be meshed finer under ink-studio's 1M-cell cap; tools/merge_glb.mjs joins them
// into glb/lantern_hero.glb.
function lowerPart(S) {
      // feet, plinth, drip tray
      for (const [x, z] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) S.ball([x * 0.15, 0.022, z * 0.15], 0.024, TRIM, { res: 0.004 });
      S.box([0, 0.065, 0], [0.17, 0.025, 0.17], IRON, { res: 0.005, k: 0.012 });
      S.box([0, 0.097, 0], [0.185, 0.009, 0.185], TRIM, { res: 0.004, k: 0.004 });
      // corner posts with rivets, top and bottom rails
      for (const [x, z] of [[-R, -R], [R, -R], [-R, R], [R, R]]) {
        S.box([x, (Y0 + Y1) / 2, z], [0.019, (Y1 - Y0) / 2, 0.019], IRON, { res: 0.004 });
        for (const y of [Y0 + 0.02, Y1 - 0.02]) S.ball([x * 1.14, y, z * 1.14], 0.009, TRIM, { res: 0.004 });
      }
      for (const y of [Y0 + 0.008, Y1 - 0.004]) for (let f = 0; f < 4; f++) S.box(onFace(f, 0, y, R), [R, 0.012, 0.012], IRON, { res: 0.004, ax: faceAx(f) });
      // glass panes (translucent amber in the hero render)
      for (let f = 0; f < 4; f++) S.box(onFace(f, 0, (Y0 + Y1) / 2, R - 0.004), [R - 0.012, (Y1 - Y0) / 2 - 0.012, 0.0035], GLASS, { res: 0.003, ax: faceAx(f) });
      for (let f = 0; f < 4; f++) tracery(S, f);
      // front door: hinge barrels on the left post, latch on the right
      for (const y of [0.17, 0.41]) S.lathe(onFace(0, -R - 0.004, y - 0.025, R + 0.012), 0.05, [0.009, 0.009], TRIM, { res: 0.003 });
      S.box(onFace(0, R - 0.004, 0.3, R + 0.018), [0.012, 0.02, 0.006], TRIM, { res: 0.003 });
      S.torus(onFace(0, R + 0.012, 0.28, R + 0.024), 0.012, 0.004, TRIM, { res: 0.003 });
      // candle with wax drips, flame with a hot core
      S.lathe([0, Y0, 0], 0.15, t => 0.042 - 0.004 * t, WAX, { res: 0.004 });
      S.ball([0, Y0 + 0.012, 0], [0.06, 0.012, 0.06], WAX, { res: 0.004 });
      for (const [a, y, l] of [[0.4, 0.2, 0.05], [2.1, 0.22, 0.035], [3.9, 0.19, 0.06], [5.2, 0.23, 0.03]])
        S.tube([[Math.cos(a) * 0.041, y + 0.02, Math.sin(a) * 0.041], [Math.cos(a) * 0.045, y - l + 0.02, Math.sin(a) * 0.045]], 0.008, 0.006, WAX, { res: 0.003 });
      S.tube([[0, Y0 + 0.15, 0], [0, Y0 + 0.165, 0]], 0.003, 0.003, SOOT, { res: 0.002 });                // wick
      S.tube([[0, Y0 + 0.16, 0], [0.002, Y0 + 0.205, 0], [-0.004, Y0 + 0.255, 0], [0, Y0 + 0.29, 0]], 0.03, 0.002, FLAME, { res: 0.003 });
      S.ball([0, Y0 + 0.19, 0], [0.011, 0.02, 0.011], CORE, { res: 0.003 });
}
function roofPart(S) {
  const rise = 0.15, run = 0.18;
      // roof: flared eave, four sloped faces, bronze hip ridges, crescent-moon vents
      S.box([0, 0.494, 0], [0.198, 0.012, 0.198], IRON, { res: 0.004, k: 0.003 });
      const slope = Math.atan2(rise, run), slant = Math.hypot(rise, run) / 2;
      for (let f = 0; f < 4; f++) {
        S.box(onFace(f, 0, 0.506 + rise / 2, run / 2), [run + 0.004, 0.008, slant], IRON, { res: 0.004, ax: mul(ROT_X(slope), faceAx(f)) });
        // crescent: a glowing disc partly covered by an iron disc, both lying on the roof face
        const cpos = (d, lift) => onFace(f, d, 0.506 + rise * 0.42 + lift, run * 0.58 + 0.01 + lift * 0.6);
        S.ball(cpos(0, 0.004), [0.04, 0.04, 0.007], MOON, { res: 0.003, ax: mul(ROT_X(slope), faceAx(f)) });
        S.ball(cpos(0.018, 0.009), [0.035, 0.035, 0.007], IRON, { res: 0.003, ax: mul(ROT_X(slope), faceAx(f)) });
      }
      // solid pyramid core under the slabs so the hips close (thin layers, overlapping, shrinking toward the apex)
      for (let i = 0; i < 18; i++) { const t = i / 17, h = 0.19 * (1 - t) + 0.03 * t; S.box([0, 0.5 + t * 0.145, 0], [h, 0.006, h], IRON, { res: 0.004 }); }
      for (const [x, z] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) S.tube([[x * 0.198, 0.5, z * 0.198], [x * 0.03, 0.648, z * 0.03]], 0.008, 0.006, TRIM, { res: 0.003 });
      S.ball([0.06, 0.6, 0.05], [0.04, 0.02, 0.03], SOOT, { res: 0.004 });
      // chimney with vent slots, domed cap, finial; the spirit gem on its front
      S.lathe([0, 0.64, 0], 0.07, [0.045, 0.042], IRON, { res: 0.004 });
      for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2; S.box([Math.cos(a) * 0.044, 0.675, Math.sin(a) * 0.044], [0.006, 0.018, 0.006], m(15), { res: 0.003, ax: ROT_Y(-a) }); }
      S.lathe([0, 0.705, 0], 0.012, [0.06, 0.058], TRIM, { res: 0.003 });
      S.lathe([0, 0.715, 0], 0.05, t => 0.058 * Math.cos(t * Math.PI / 2), IRON, { res: 0.004 });
      S.lathe([0, 0.76, 0], 0.05, [0.012, 0.002], TRIM, { res: 0.003 });
      S.ball([0, 0.675, 0.05], [0.016, 0.02, 0.01], GEM, { res: 0.003 });
      S.torus([0, 0.675, 0.048], 0.02, 0.004, TRIM, { res: 0.003, ax: [[1, 0, 0], [0, 0, 1], [0, 1, 0]] });
}
function bailPart(S) {
      // bail handle through two lugs, ring at the top
      for (const s of [-1, 1]) S.torus([s * 0.058, 0.69, 0], 0.012, 0.005, IRON, { res: 0.003, ax: [[0, 0, 1], [0, 1, 0], [1, 0, 0]] });
      const bail = []; for (let i = 0; i <= 12; i++) { const a = Math.PI * i / 12; bail.push([Math.cos(a) * 0.07, 0.69 + Math.sin(a) * 0.24, 0]); }
      S.tube(bail, 0.008, 0.008, IRON, { res: 0.003 });
      S.torus([0, 0.95, 0], 0.03, 0.007, TRIM, { res: 0.003, ax: [[1, 0, 0], [0, 0, 1], [0, 1, 0]] });
}

const part = (bounds, res, slim, build) => ({ bounds, tris: 40000, res, slim, slimErr: 0.0008, exportRes: res, maxCells: 1000000, build });
module.exports = {
  lantern_hero_lower: part([[-0.215, -0.02, -0.215], [0.215, 0.515, 0.215]], 0.0047, 14000, lowerPart),
  lantern_hero_roof: part([[-0.215, 0.47, -0.215], [0.215, 0.83, 0.215]], 0.0043, 9000, roofPart),
  lantern_hero_bail: part([[-0.1, 0.64, -0.045], [0.1, 0.99, 0.045]], 0.003, 3000, bailPart),
};

// 3x3 matrix product (rows), for stacking a face rotation on a slope
function mul(A, B) { return A.map(r => [0, 1, 2].map(j => r[0] * B[0][j] + r[1] * B[1][j] + r[2] * B[2][j])); }
