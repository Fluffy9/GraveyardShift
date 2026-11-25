// Level 1 (Old Churchyard) dressing. The statue, urn, candles and rubble are shared props reused by later levels.
// Palette indices: 2 dark stone, 3 stone, 4 light stone, 12 moss, 15 near black, 17 iron, 6/22 amber glow, 5 parchment.
const { m, glow, ROT_Z, ROT_X, ROT_Y } = require('./common.js');

// One wrought-iron gate leaf, hinge at local x=0, leaf extends along +x.
function gateLeaf(S, hx, z, dir, swing) {
  const iron = m(17);
  const R = ROT_Y(dir * swing);
  const P = (x, y) => { const lx = dir * x; return [hx + R[0][0] * lx, y, z + R[2][0] * lx]; };
  const W = 1.55;
  for (const y of [0.25, 0.95, 1.55]) {
    const a = P(0, y), b = P(W, y);
    S.tube([a, b], 0.04, 0.04, iron, { res: 0.02 });
  }
  for (let i = 0; i <= 6; i++) {
    const x = 0.06 + i * (W - 0.1) / 6;
    const top = 1.55 + 0.32 * Math.sin(Math.PI * x / W);          // arched top line
    S.tube([P(x, 0.05), P(x, top)], 0.035, 0.035, iron, { res: 0.018 });
    S.lathe(P(x, top), 0.16, [0.06, 0.01], iron, { res: 0.015 });   // spear finial
  }
  S.tube([P(0, 0), P(0, 2.0)], 0.06, 0.06, iron, { res: 0.025 });   // hinge stile
  const ring = [];                                                       // scroll ornament as a closed loop in the leaf plane
  for (let i = 0; i <= 12; i++) { const t = i / 12 * Math.PI * 2; ring.push(P(W * 0.5 + 0.2 * Math.cos(t), 1.25 + 0.2 * Math.sin(t))); }
  S.tube(ring, 0.035, 0.035, iron, { res: 0.015 });
}

module.exports = {
  // South entrance: open double gate with a thin iron arch. Fits the 3.3 m gap between the fence pillars.
  gate: {
    bounds: [[-2.0, -0.12, -0.3], [2.0, 2.95, 1.7]], tris: 1400, res: 0.04, slim: 1800,
    build(S) {
      const iron = m(17);
      gateLeaf(S, -1.6, 0, 1, 1.15);      // west leaf swung outward (+z)
      gateLeaf(S, 1.6, 0, -1, 1.15);      // east leaf swung outward
      // arch over the opening: two posts and a curved band with a small sign plate
      for (const x of [-1.6, 1.6]) S.tube([[x, 0, 0], [x, 2.2, 0]], 0.07, 0.07, iron, { res: 0.025 });
      const arc = [];
      for (let i = 0; i <= 10; i++) { const t = i / 10, x = -1.6 + 3.2 * t; arc.push([x, 2.2 + 0.45 * Math.sin(Math.PI * t), 0]); }
      S.tube(arc, 0.05, 0.05, iron, { res: 0.022 });
      const arc2 = arc.map(([x, y, z]) => [x, y - 0.18 - 0.1 * Math.sin(Math.PI * (x + 1.6) / 3.2), z]);
      S.tube(arc2, 0.04, 0.04, iron, { res: 0.02 });
      S.box([0, 2.42, 0.03], [0.42, 0.11, 0.025], m(20), { res: 0.02 });
      S.box([0, 2.42, 0.06], [0.3, 0.03, 0.01], m(5), { res: 0.012 });
      S.lathe([0, 2.66, 0], 0.22, [0.035, 0.035], iron, { res: 0.015 });
      S.box([0, 2.82, 0], [0.11, 0.025, 0.025], iron, { res: 0.012 });
    }
  },

  // Hooded mourner on a plinth, hands clasped, head bowed. Shared statue for every level.
  statue_mourner: {
    bounds: [[-0.6, -0.05, -0.6], [0.6, 2.3, 0.6]], tris: 900, res: 0.028, slim: 1200,
    build(S) {
      const st = m(4, 3), dk = m(3, 2);
      S.box([0, 0.12, 0], [0.48, 0.12, 0.48], m(2), { res: 0.04 });
      S.box([0, 0.38, 0], [0.38, 0.16, 0.38], dk, { res: 0.04 });
      S.box([0, 0.56, 0], [0.44, 0.04, 0.44], m(3), { res: 0.03 });
      S.lathe([0, 0.6, 0], 1.15, t => 0.36 - 0.2 * t + 0.04 * Math.sin(t * 9), st, { res: 0.03 });   // robe with folds
      S.ball([0, 1.82, 0.03], [0.2, 0.22, 0.2], st, { res: 0.025 });                                  // hood
      S.ball([0, 1.79, 0.13], [0.12, 0.13, 0.09], m(15), { res: 0.02 });                              // shadowed face
      S.tube([[0, 2.0, -0.1], [0, 1.6, -0.24], [0, 1.0, -0.3]], 0.16, 0.12, st, { res: 0.03 });       // hood drape
      S.tube([[-0.2, 1.55, 0.08], [-0.08, 1.3, 0.24]], 0.07, 0.06, st, { res: 0.022 });               // forearms
      S.tube([[0.2, 1.55, 0.08], [0.08, 1.3, 0.24]], 0.07, 0.06, st, { res: 0.022 });
      S.ball([0, 1.3, 0.27], [0.1, 0.09, 0.08], st, { res: 0.02 });                                   // clasped hands
      S.ball([0.28, 0.58, 0.3], [0.16, 0.05, 0.12], m(12), { res: 0.03 });                            // moss at the base
      S.ball([-0.22, 0.95, -0.25], [0.1, 0.16, 0.06], m(12), { res: 0.025 });
    }
  },

  // Low broken churchyard wall. Origin at centre of the run, runs along x.
  wall_ruin: {
    bounds: [[-1.9, -0.05, -0.9], [1.9, 1.6, 0.9]], tris: 700, res: 0.045, slim: 800, exportRes: 0.045,
    build(S) {
      const st = m(3, 2), lt = m(4, 3);
      const cols = [1.25, 1.05, 1.2, 0.8, 0.55, 0.9, 0.35];
      S.box([0, 0.08, 0], [1.7, 0.08, 0.28], m(2), { res: 0.04 });
      cols.forEach((h, i) => {
        const x = -1.5 + i * 0.5;
        for (let y = 0.16, r = 0; y < h; y += 0.22, r++) {
          const off = (r % 2) * 0.12;
          S.box([x + off, y + 0.1, 0], [0.25, 0.118, 0.22], (i + r) % 3 ? st : lt, { res: 0.04 });
        }
      });
      S.box([-0.2, 1.38, 0], [0.95, 0.06, 0.26], lt, { res: 0.035 });                          // capstone remnant
      S.box([1.2, 0.12, 0.5], [0.26, 0.1, 0.2], st, { res: 0.04, ax: ROT_Y(0.5) });            // fallen blocks
      S.box([0.7, 0.1, -0.5], [0.22, 0.09, 0.18], lt, { res: 0.04, ax: ROT_Y(-0.3) });
      S.ball([-1.3, 1.25, 0.12], [0.3, 0.08, 0.2], m(12), { res: 0.035 });                     // moss
      S.ball([0.4, 0.9, 0.2], [0.25, 0.1, 0.06], m(12), { res: 0.03 });
      S.tube([[-0.8, 0.2, 0.26], [-0.7, 0.7, 0.27], [-0.9, 1.1, 0.26]], 0.04, 0.02, m(12), { res: 0.02 }); // ivy
    }
  },

  // Three to four candles on a small slab with melted wax. Emissive flames, no lights.
  candles: {
    bounds: [[-0.35, -0.05, -0.3], [0.35, 0.8, 0.3]], tris: 400, res: 0.012,
    build(S) {
      S.box([0, 0.03, 0], [0.26, 0.03, 0.2], m(2), { res: 0.015 });
      S.ball([0, 0.06, 0], [0.22, 0.03, 0.16], m(5), { res: 0.015 });          // wax pool
      for (const [x, z, h, r] of [[-0.12, 0.04, 0.36, 0.045], [0.06, -0.06, 0.48, 0.05], [0.14, 0.08, 0.24, 0.04], [-0.02, 0.1, 0.16, 0.035]]) {
        S.lathe([x, 0.06, z], h, [r, r * 0.92], m(5), { res: 0.012 });
        S.ball([x, 0.06 + h + 0.06, z], [0.028, 0.055, 0.028], glow(22, 6), { res: 0.01 });
      }
    }
  },

  // Memorial urn on a short pedestal.
  urn: {
    bounds: [[-0.4, -0.05, -0.4], [0.4, 1.1, 0.4]], tris: 400, res: 0.025,
    build(S) {
      S.box([0, 0.12, 0], [0.24, 0.12, 0.24], m(2), { res: 0.03 });
      S.box([0, 0.3, 0], [0.18, 0.06, 0.18], m(3), { res: 0.025 });
      S.lathe([0, 0.36, 0], 0.62, t => 0.08 + 0.16 * Math.sin(Math.min(1, t * 1.25) * Math.PI) + (t > 0.85 ? 0.06 : 0), m(4, 3), { res: 0.02 });
      S.lathe([0, 0.98, 0], 0.08, [0.1, 0.02], m(4), { res: 0.02 });
      S.ball([0.12, 0.6, 0.1], [0.08, 0.1, 0.05], m(12), { res: 0.02 });
    }
  },

  // Small pile of broken masonry.
  rubble: {
    bounds: [[-0.8, -0.05, -0.6], [0.8, 0.6, 0.6]], tris: 350, res: 0.04,
    build(S) {
      const pieces = [[-0.4, 0.12, 0.1, 0.22, 0.12, 0.16, 0.3, 3], [0.1, 0.1, -0.15, 0.2, 0.1, 0.18, -0.6, 2], [0.45, 0.09, 0.2, 0.16, 0.09, 0.12, 1.1, 4],
        [-0.05, 0.3, 0.05, 0.16, 0.1, 0.12, 0.8, 3], [-0.55, 0.07, -0.3, 0.12, 0.07, 0.1, -0.2, 4], [0.3, 0.06, -0.4, 0.1, 0.06, 0.08, 0.4, 2]];
      for (const [x, y, z, a, b, c, r, col] of pieces) S.box([x, y, z], [a, b, c], m(col, 2), { res: 0.03, ax: ROT_Y(r) });
      S.ball([0.0, 0.03, 0.0], [0.7, 0.05, 0.5], m(2), { res: 0.04 });
    }
  },
};
