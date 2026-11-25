// Level 4 (Haunted Mausoleum). Ward pillars come in three states so their health reads at a glance; the crystal is a
// separate model so it can bob and spin. New palette: 38 marble, 39 marble shadow, 40 gold.
const { m, glow, ROT_X, ROT_Y, ROT_Z } = require('./common.js');

const MARB = m(38, 39), MSH = m(39, 2), GOLD = m(40);

function pillarBase(S) {
  S.box([0, 0.12, 0], [0.55, 0.12, 0.55], MSH, { res: 0.03 });
  S.box([0, 0.3, 0], [0.46, 0.08, 0.46], MARB, { res: 0.03 });
  S.box([0, 0.39, 0], [0.48, 0.02, 0.48], GOLD, { res: 0.015 });
}
function lanternBody(S, glowCol, h = 1.0, dim = false) {
  S.box([0, 0.45 + h / 2, 0], [0.3, h / 2, 0.3], dim ? glow(glowCol) : glow(glowCol, 22), { res: 0.025 });  // lit core (dimmer when damaged)
  for (const [x, z] of [[-0.3, -0.3], [0.3, -0.3], [-0.3, 0.3], [0.3, 0.3]]) S.box([x, 0.45 + h / 2, z], [0.06, h / 2, 0.06], MARB, { res: 0.02 });
  for (const y of [0.45, 0.45 + h]) S.box([0, y, 0], [0.36, 0.05, 0.36], MARB, { res: 0.02 });
  for (const s of [-1, 1]) {                                                                       // gold chevrons on the faces
    S.box([0, 0.45 + h * 0.5, s * 0.31], [0.16, 0.025, 0.015], GOLD, { res: 0.012, ax: ROT_Z(0.6) });
    S.box([s * 0.31, 0.45 + h * 0.5, 0], [0.015, 0.025, 0.16], GOLD, { res: 0.012, ax: ROT_X(0.6) });
  }
}

module.exports = {
  ward_pillar: {
    bounds: [[-0.7, -0.1, -0.7], [0.7, 1.95, 0.7]], tris: 700, res: 0.025, slim: 700,
    build(S) {
      pillarBase(S); lanternBody(S, 6, 1.0);
      S.lathe([0, 1.5, 0], 0.18, [0.36, 0.16], MARB, { res: 0.02 });                              // crystal cradle
      for (let i = 0; i < 4; i++) { const a = i * Math.PI / 2 + Math.PI / 4; S.tube([[Math.cos(a) * 0.16, 1.66, Math.sin(a) * 0.16], [Math.cos(a) * 0.24, 1.85, Math.sin(a) * 0.24]], 0.03, 0.02, GOLD, { res: 0.012 }); }
    }
  },
  ward_pillar_damaged: {
    bounds: [[-0.75, -0.1, -0.75], [0.75, 1.95, 0.75]], tris: 700, res: 0.025, slim: 700,
    build(S) {
      pillarBase(S); lanternBody(S, 37, 1.0, true);
      S.lathe([0, 1.5, 0], 0.18, [0.36, 0.16], MARB, { res: 0.02 });
      S.box([0.3, 1.2, 0.3], [0.12, 0.3, 0.12], m(15), { res: 0.02, neg: true });                   // broken corner
      S.tube([[-0.31, 0.6, 0.1], [-0.31, 0.85, -0.05], [-0.31, 1.1, 0.12]], 0.025, 0.02, m(15), { res: 0.012 }); // crack
      S.box([0.55, 0.06, 0.45], [0.12, 0.06, 0.1], MARB, { res: 0.02, ax: ROT_Y(0.5) });           // fallen chips
      S.box([0.35, 0.05, 0.62], [0.08, 0.05, 0.07], MARB, { res: 0.02, ax: ROT_Y(1.2) });
    }
  },
  ward_pillar_broken: {
    bounds: [[-0.9, -0.1, -0.9], [0.9, 1.0, 0.9]], tris: 600, res: 0.025, slim: 600,
    build(S) {
      pillarBase(S);
      for (const [x, z, h] of [[-0.3, -0.3, 0.42], [0.3, -0.3, 0.2], [-0.3, 0.3, 0.3], [0.3, 0.3, 0.12]]) S.box([x, 0.42 + h / 2, z], [0.06, h / 2, 0.06], MARB, { res: 0.02 });
      S.box([0, 0.48, 0], [0.3, 0.06, 0.3], m(2), { res: 0.02 });                                    // dead core
      for (const [x, z, r] of [[0.65, 0.2, 0.3], [-0.55, 0.6, 1.2], [0.2, -0.7, 2.2], [-0.7, -0.35, 0.7]])
        S.box([x, 0.08, z], [0.16, 0.08, 0.1], MARB, { res: 0.02, ax: ROT_Y(r) });
      S.ball([0.45, 0.06, -0.4], [0.12, 0.06, 0.1], m(16), { res: 0.02 });                           // crystal shard, dull
    }
  },
  // Floating ward crystal (spun and bobbed in code). Origin at its centre's foot.
  ward_crystal: {
    bounds: [[-0.35, -0.1, -0.35], [0.35, 0.95, 0.35]], tris: 120, res: 0.02,
    build(S) {
      S.lathe([0, 0, 0], 0.38, [0.0, 0.24], glow(31, 9), { res: 0.015, seg: 6 });
      S.lathe([0, 0.38, 0], 0.5, [0.24, 0.0], glow(9, 31), { res: 0.015, seg: 6 });
    }
  },

  // Grand sarcophagus on a stepped dais, gold trim. Front faces +z.
  grand_sarcophagus: {
    bounds: [[-2.3, -0.1, -1.9], [2.3, 1.9, 1.9]], tris: 1400, res: 0.04, slim: 1400,
    build(S) {
      S.box([0, 0.12, 0], [2.2, 0.12, 1.8], MSH, { res: 0.04 });
      S.box([0, 0.34, 0], [1.85, 0.1, 1.45], MARB, { res: 0.04 });
      S.box([0, 0.45, 0], [1.87, 0.015, 1.47], GOLD, { res: 0.015 });
      S.box([0, 0.85, 0], [0.75, 0.4, 1.15], MARB, { res: 0.035 });
      for (const x of [-0.76, 0.76]) for (const z of [-0.6, 0, 0.6]) S.box([x, 0.85, z], [0.015, 0.25, 0.18], GOLD, { res: 0.012 });
      S.box([0, 1.3, 0], [0.85, 0.07, 1.25], MSH, { res: 0.03 });
      S.box([0, 1.4, 0], [0.7, 0.06, 1.1], MARB, { res: 0.03 });
      S.box([0, 1.48, 0], [0.04, 0.03, 0.8], GOLD, { res: 0.012 });                                  // gold cross on the lid
      S.box([0, 1.48, -0.35], [0.4, 0.03, 0.04], GOLD, { res: 0.012 });
      S.box([0, 0.85, 1.16], [0.4, 0.22, 0.02], GOLD, { res: 0.015 });                               // plaque
      for (const s of [-1, 1]) {                                                                     // candle stands on the dais
        S.lathe([s * 1.55, 0.44, 1.15], 0.4, [0.05, 0.05], GOLD, { res: 0.015 });
        S.ball([s * 1.55, 0.92, 1.15], [0.04, 0.07, 0.04], glow(22, 6), { res: 0.012 });
      }
    }
  },

  // Stained-glass window in a marble wall bay (3.2 m), front faces +z. Backlit glass is emissive.
  stained_glass: {
    bounds: [[-1.7, -0.1, -0.5], [1.7, 4.0, 0.5]], tris: 1200, res: 0.035, slim: 1200,
    build(S) {
      S.box([0, 1.85, -0.15], [1.6, 1.85, 0.3], MARB, { res: 0.04 });
      S.box([0, 3.75, -0.12], [1.66, 0.1, 0.36], MSH, { res: 0.035 });
      S.box([0, 0.12, 0.0], [1.66, 0.12, 0.36], MSH, { res: 0.035 });
      // glass: lancet of coloured panes behind a gold frame
      const panes = [[31, 16], [27, 30], [26, 28], [6, 22]];
      for (let r = 0; r < 4; r++) for (let c = 0; c < 3; c++) {
        const [a, b] = panes[(r + c) % 4];
        S.box([-0.42 + c * 0.42, 0.95 + r * 0.5, 0.17], [0.19, 0.23, 0.02], glow(a, b), { res: 0.02 });
      }
      S.ball([0, 3.05, 0.17], [0.62, 0.32, 0.02], glow(31, 16), { res: 0.02 });
      S.ball([0, 3.05, 0.19], [0.18, 0.18, 0.02], glow(6, 22), { res: 0.015 });                     // rose at the top
      for (const x of [-0.63, -0.21, 0.21, 0.63]) S.box([x, 1.95, 0.2], [0.025, 1.25, 0.03], GOLD, { res: 0.012 });
      for (let r = 0; r <= 4; r++) S.box([0, 0.71 + r * 0.5, 0.2], [0.65, 0.025, 0.03], GOLD, { res: 0.012 });
      const arc = []; for (let i = 0; i <= 10; i++) { const a = Math.PI * i / 10; arc.push([Math.cos(a) * 0.72, 2.75 + Math.sin(a) * 0.62, 0.22]); }
      S.tube(arc, 0.09, 0.09, MARB, { res: 0.02 });
      for (const x of [-0.75, 0.75]) S.box([x, 1.7, 0.22], [0.09, 1.05, 0.08], MARB, { res: 0.02 });
      S.box([0, 0.62, 0.3], [0.85, 0.06, 0.16], MSH, { res: 0.02 });                                 // sill
    }
  },

  // Perimeter spawn alcove: arched doorway with a dark interior and a spirit glow at the threshold. Front +z.
  spawn_alcove: {
    bounds: [[-1.7, -0.1, -0.6], [1.7, 3.9, 0.85]], tris: 900, res: 0.035, slim: 900,
    build(S) {
      S.box([0, 1.85, -0.2], [1.6, 1.85, 0.3], MARB, { res: 0.04 });
      S.box([0, 3.75, -0.15], [1.66, 0.1, 0.36], MSH, { res: 0.035 });
      S.box([0, 1.15, 0.12], [0.75, 1.15, 0.02], m(15), { res: 0.02 });
      S.ball([0, 2.3, 0.12], [0.75, 0.6, 0.02], m(15), { res: 0.02 });
      const arc = []; for (let i = 0; i <= 10; i++) { const a = Math.PI * i / 10; arc.push([Math.cos(a) * 0.86, 2.3 + Math.sin(a) * 0.72, 0.18]); }
      S.tube(arc, 0.12, 0.12, MSH, { res: 0.025 });
      for (const x of [-0.86, 0.86]) S.box([x, 1.15, 0.18], [0.12, 1.15, 0.12], MSH, { res: 0.025 });
      S.box([0, 0.06, 0.4], [0.8, 0.06, 0.3], glow(31, 16), { res: 0.02 });                         // spirit glow spilling out
      S.box([0, 3.15, 0.22], [0.14, 0.14, 0.04], GOLD, { res: 0.015, ax: ROT_Z(Math.PI / 4) });
    }
  },

  // Plain marble wall bay with a pilaster and gold band (sides / fill), 3.2 m, front +z.
  marble_wall: {
    bounds: [[-1.7, -0.1, -0.5], [1.7, 4.0, 0.5]], tris: 300, res: 0.04, slim: 300,
    build(S) {
      S.box([0, 1.85, -0.15], [1.6, 1.85, 0.3], MARB, { res: 0.04 });
      S.box([0, 3.75, -0.12], [1.66, 0.1, 0.36], MSH, { res: 0.035 });
      S.box([0, 0.12, 0.0], [1.66, 0.12, 0.36], MSH, { res: 0.035 });
      S.box([0, 2.6, 0.16], [1.6, 0.04, 0.02], GOLD, { res: 0.015 });
      for (const x of [-1.0, 1.0]) S.box([x, 1.45, 0.17], [0.4, 1.0, 0.02], MSH, { res: 0.02 });  // recessed panels
    }
  },

  // Standing gold candelabrum, five candles.
  candelabrum: {
    bounds: [[-0.55, -0.1, -0.3], [0.55, 2.0, 0.3]], tris: 500, res: 0.02, slim: 500,
    build(S) {
      S.lathe([0, 0, 0], 0.1, [0.22, 0.16], GOLD, { res: 0.015 });
      S.lathe([0, 0.1, 0], 1.3, [0.035, 0.03], GOLD, { res: 0.012 });
      const arms = [[-0.42, 1.48], [-0.22, 1.58], [0, 1.68], [0.22, 1.58], [0.42, 1.48]];
      S.tube([[-0.42, 1.42, 0], [-0.3, 1.25, 0], [0, 1.2, 0], [0.3, 1.25, 0], [0.42, 1.42, 0]], 0.025, 0.025, GOLD, { res: 0.012 });
      S.tube([[-0.22, 1.5, 0], [-0.15, 1.33, 0], [0.15, 1.33, 0], [0.22, 1.5, 0]], 0.022, 0.022, GOLD, { res: 0.012 });
      for (const [x, y] of arms) {
        S.lathe([x, y - 0.08, 0], 0.06, [0.05, 0.05], GOLD, { res: 0.012 });
        S.lathe([x, y - 0.02, 0], 0.16, [0.03, 0.03], m(5), { res: 0.01 });
        S.ball([x, y + 0.2, 0], [0.025, 0.05, 0.025], glow(22, 6), { res: 0.01 });
      }
    }
  },
};

// South edge, interior: a low marble balustrade bay (3.2 m) and marble entrance steps rising toward the camera.
Object.assign(module.exports, {
  marble_rail: {
    bounds: [[-1.7, -0.1, -0.4], [1.7, 1.2, 0.4]], tris: 700, res: 0.03, slim: 700,
    build(S) {
      S.box([0, 0.12, 0], [1.62, 0.12, 0.28], MSH, { res: 0.035 });
      S.box([0, 0.27, 0], [1.6, 0.03, 0.26], GOLD, { res: 0.015 });
      S.box([0, 0.98, 0], [1.62, 0.08, 0.25], MARB, { res: 0.035 });
      S.box([0, 1.07, 0], [1.6, 0.015, 0.2], GOLD, { res: 0.012 });
      for (let i = 0; i < 7; i++) S.lathe([-1.29 + i * 0.43, 0.3, 0], 0.6, t => 0.06 + 0.07 * Math.sin(t * Math.PI * 1.1), MARB, { res: 0.022 });
    }
  },
  marble_post: {
    bounds: [[-0.45, -0.1, -0.45], [0.45, 1.7, 0.45]], tris: 300, res: 0.03,
    build(S) {
      S.box([0, 0.12, 0], [0.38, 0.12, 0.38], MSH, { res: 0.03 });
      S.box([0, 0.75, 0], [0.3, 0.6, 0.3], MARB, { res: 0.03 });
      S.box([0, 1.38, 0], [0.36, 0.06, 0.36], MSH, { res: 0.025 });
      S.box([0, 1.0, 0.31], [0.12, 0.12, 0.01], GOLD, { res: 0.012, ax: [[0.7, 0.7, 0], [-0.7, 0.7, 0], [0, 0, 1]] });
      S.lathe([0, 1.44, 0], 0.18, [0.22, 0.08], MARB, { res: 0.02 });
    }
  },
  marble_stairs: {
    bounds: [[-1.9, -0.1, -0.3], [1.9, 1.0, 2.4]], tris: 400, res: 0.04, slim: 400,
    build(S) {
      for (let i = 0; i < 4; i++) S.box([0, 0.1 * (i + 1), 0.25 + i * 0.5], [1.5, 0.1 * (i + 1), 0.27], i % 2 ? MARB : MSH, { res: 0.04 });
      for (let i = 0; i < 4; i++) S.box([0, 0.2 * (i + 1) + 0.005, 0.0 + i * 0.5], [1.5, 0.01, 0.02], GOLD, { res: 0.012 });
    }
  },
});
