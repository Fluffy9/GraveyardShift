// Level 3 (The Catacombs). Realm barriers are built from a panel (scaled to the wall length in code) and flame posts.
// New palette: 32 sandstone, 33 dark sandstone, 34 bronze, 35 bone, 36 barrier orange, 37 ember.
const { m, glow, ROT_X, ROT_Y, ROT_Z } = require('./common.js');

const SAND = m(32, 33), DSAND = m(33, 2), BONE = m(35, 5);
function skull(S, x, y, z, s = 1, face = 1) {
  S.ball([x, y, z], [0.11 * s, 0.1 * s, 0.11 * s], BONE, { res: 0.015 });
  S.ball([x - 0.04 * s, y + 0.005, z + face * 0.09 * s], 0.028 * s, m(15), { res: 0.012 });
  S.ball([x + 0.04 * s, y + 0.005, z + face * 0.09 * s], 0.028 * s, m(15), { res: 0.012 });
}

module.exports = {
  // Barrier panel, 2.4 m long (scaled along x in code), no posts. Living = orange, spirit = violet.
  barrier_living: barrierPanel(36, 19, 6),
  barrier_spirit: barrierPanel(31, 16, 9),
  barrier_post_living: barrierPost(37, 36),
  barrier_post_spirit: barrierPost(31, 16),

  // Ossuary wall bay, 3.2 m long, front faces +z: arched niches stacked with skulls, candles on the ledges.
  ossuary_wall: {
    bounds: [[-1.7, -0.1, -0.55], [1.7, 3.0, 0.6]], tris: 1600, res: 0.03, slim: 1600,
    build(S) {
      S.box([0, 1.4, -0.15], [1.6, 1.4, 0.3], SAND, { res: 0.04 });
      S.box([0, 2.85, -0.12], [1.66, 0.1, 0.36], DSAND, { res: 0.035 });
      S.box([0, 0.12, 0.05], [1.66, 0.12, 0.4], DSAND, { res: 0.035 });
      for (const x of [-0.8, 0.8]) for (const y of [0.85, 1.95]) {
        S.box([x, y - 0.05, 0.16], [0.5, 0.36, 0.02], m(15), { res: 0.02 });                   // dark niche back
        S.ball([x, y + 0.31, 0.16], [0.5, 0.22, 0.02], m(15), { res: 0.02 });                    // arched head
        S.box([x, y - 0.44, 0.24], [0.56, 0.05, 0.12], DSAND, { res: 0.02 });                    // sill
        for (let i = 0; i < 4; i++) for (let j = 0; j < 2; j++) skull(S, x - 0.33 + i * 0.22, y - 0.27 + j * 0.21, 0.26, 0.95);
      }
      S.box([0, 1.4, 0.2], [0.16, 1.25, 0.06], m(33), { res: 0.03 });                          // pilaster
      for (const [x, y] of [[-0.62, 0.4], [1.0, 1.5]]) {
        S.lathe([x, y, 0.3], 0.16, [0.035, 0.035], m(5), { res: 0.012 });
        S.ball([x, y + 0.21, 0.3], [0.025, 0.05, 0.025], glow(22, 6), { res: 0.01 });
      }
          }
  },

  // Low wall bay for the south side (keeps the court visible), 3.2 m long.
  half_wall: {
    bounds: [[-1.7, -0.1, -0.4], [1.7, 1.0, 0.4]], tris: 400, res: 0.04, slim: 400,
    build(S) {
      for (let r = 0; r < 4; r++) for (let i = 0; i < 6; i++) {
        const x = -1.35 + i * 0.54 + (r % 2) * 0.27; if (x > 1.5) continue;
        S.box([x, 0.12 + r * 0.22, 0], [0.28, 0.12, 0.26], (i + r) % 3 ? SAND : DSAND, { res: 0.035 });
      }
      S.box([0, 0.92, 0], [1.6, 0.06, 0.3], DSAND, { res: 0.035 });
    }
  },

  // Square column with a carved capital: posts between wall bays.
  crypt_column: {
    bounds: [[-0.55, -0.1, -0.55], [0.55, 3.3, 0.55]], tris: 300, res: 0.04,
    build(S) {
      S.box([0, 0.15, 0], [0.45, 0.15, 0.45], DSAND, { res: 0.04 });
      S.box([0, 1.55, 0], [0.32, 1.3, 0.32], SAND, { res: 0.04 });
      S.box([0, 2.95, 0], [0.44, 0.13, 0.44], DSAND, { res: 0.04 });
      S.box([0, 3.12, 0], [0.38, 0.06, 0.38], SAND, { res: 0.03 });
    }
  },

  // North exit: crypt door in a deep arch, sealed with a bronze-banded door and a glowing ward glyph.
  crypt_door: {
    bounds: [[-2.3, -0.1, -0.9], [2.3, 4.4, 1.2]], tris: 1800, res: 0.045, slim: 1800,
    build(S) {
      S.box([0, 1.9, -0.3], [2.1, 1.9, 0.5], SAND, { res: 0.05 });
      S.box([0, 1.3, 0.22], [1.0, 1.3, 0.02], m(15), { res: 0.02 });                            // dark reveal
      S.ball([0, 2.55, 0.22], [1.0, 0.95, 0.02], m(15), { res: 0.02 });
      const arc = []; for (let i = 0; i <= 12; i++) { const a = Math.PI * i / 12; arc.push([Math.cos(a) * 1.18, 2.5 + Math.sin(a) * 1.18, 0.25]); }
      S.tube(arc, 0.2, 0.2, DSAND, { res: 0.04 });
      for (const x of [-1.18, 1.18]) S.box([x, 1.25, 0.25], [0.2, 1.25, 0.22], DSAND, { res: 0.04 });
      S.box([0, 1.25, 0.28], [0.82, 1.25, 0.05], m(20, 14), { res: 0.03 });                     // door
      for (const y of [0.5, 1.3, 2.1]) S.box([0, y, 0.34], [0.82, 0.05, 0.03], m(34), { res: 0.02 });
      S.torus([0, 1.55, 0.37], 0.34, 0.055, glow(37, 36), { res: 0.02, ax: [[1, 0, 0], [0, 0, 1], [0, 1, 0]] });
      S.box([0, 1.55, 0.37], [0.045, 0.32, 0.03], glow(36), { res: 0.015 });
      S.box([0, 1.55, 0.37], [0.32, 0.045, 0.03], glow(36), { res: 0.015 });
      S.box([0, 3.95, 0.25], [0.5, 0.3, 0.1], m(33), { res: 0.03 });                           // skull keystone
      skull(S, 0, 3.95, 0.37, 1.6);
      S.box([0, 0.08, 0.75], [1.2, 0.08, 0.35], DSAND, { res: 0.04 });                          // threshold step
    }
  },

  // South entrance: stair rising out of the crypt toward the camera, with low side cheeks.
  entrance_stairs: {
    bounds: [[-1.9, -0.1, -0.3], [1.9, 1.5, 3.4]], tris: 500, res: 0.05, slim: 500,
    build(S) {
      for (let i = 0; i < 6; i++) S.box([0, 0.1 * (i + 1), 0.25 + i * 0.5], [1.4, 0.1 * (i + 1), 0.27], i % 2 ? SAND : m(32), { res: 0.045 });
      for (const x of [-1.6, 1.6]) S.box([x, 0.7, 1.55], [0.22, 0.7, 1.6], DSAND, { res: 0.045 });
      S.box([-0.6, 0.45, 1.0], [0.18, 0.04, 0.15], m(35), { res: 0.02 });
    }
  },

  // Sarcophagus with a carved effigy lid.
  sarcophagus: {
    bounds: [[-0.75, -0.1, -1.3], [0.75, 1.2, 1.3]], tris: 700, res: 0.035, slim: 700,
    build(S) {
      S.box([0, 0.1, 0], [0.7, 0.1, 1.22], DSAND, { res: 0.035 });
      S.box([0, 0.5, 0], [0.6, 0.32, 1.12], SAND, { res: 0.035 });
      for (const z of [-0.6, 0, 0.6]) S.box([0.61, 0.5, z], [0.02, 0.2, 0.2], m(33), { res: 0.02 });
      S.box([0, 0.86, 0], [0.66, 0.06, 1.18], DSAND, { res: 0.03 });
      S.ball([0, 0.98, -0.75], [0.17, 0.12, 0.17], SAND, { res: 0.025 });                       // effigy head
      S.ball([0, 0.98, 0.05], [0.3, 0.13, 0.6], SAND, { res: 0.03 });                           // body
      S.ball([0, 1.07, -0.25], [0.12, 0.07, 0.1], SAND, { res: 0.02 });                         // folded hands
      S.box([0, 0.5, 1.13], [0.3, 0.18, 0.02], m(34), { res: 0.015 });                          // bronze plaque
    }
  },

  // Memorial relief: carved tablet with a hooded figure, mounted on a wall bay.
  memorial_relief: {
    bounds: [[-0.9, -0.1, -0.35], [0.9, 2.45, 0.4]], tris: 500, res: 0.03, slim: 500,
    build(S) {
      S.box([0, 1.1, 0], [0.8, 1.1, 0.12], m(33), { res: 0.03 });
      S.box([0, 1.15, 0.12], [0.65, 0.92, 0.04], SAND, { res: 0.025 });
      S.ball([0, 1.6, 0.17], [0.16, 0.2, 0.06], m(33), { res: 0.02 });
      S.ball([0, 0.95, 0.15], [0.26, 0.6, 0.06], m(33), { res: 0.025 });                         // robed figure in relief
      for (let i = 0; i < 3; i++) S.box([0, 0.4 - i * 0.0, 0.17], [0.35 - i * 0.08, 0.015, 0.01], m(2), { res: 0.01 });
      S.ball([0, 2.2, 0], [0.8, 0.18, 0.12], m(33), { res: 0.03 });                             // rounded crown
    }
  },

  // Bone pile with skulls.
  bone_pile: {
    bounds: [[-0.75, -0.1, -0.6], [0.75, 0.7, 0.6]], tris: 500, res: 0.025, slim: 500,
    build(S) {
      S.ball([0, 0.05, 0], [0.6, 0.1, 0.45], BONE, { res: 0.03 });
      for (const [x, z, a] of [[-0.3, 0.1, 0.4], [0.2, -0.2, -0.7], [0.1, 0.25, 1.2], [-0.15, -0.25, 2.1], [0.4, 0.1, 0.2]])
        S.tube([[x - Math.cos(a) * 0.25, 0.14, z - Math.sin(a) * 0.25], [x + Math.cos(a) * 0.25, 0.16, z + Math.sin(a) * 0.25]], 0.035, 0.035, BONE, { res: 0.015 });
      skull(S, -0.1, 0.28, 0.05, 1.3); skull(S, 0.25, 0.2, 0.2, 1.1); skull(S, -0.35, 0.16, -0.15, 1.0);
    }
  },

  // Broken coffin, lid slid off.
  coffin_broken: {
    bounds: [[-0.85, -0.1, -1.25], [0.85, 0.7, 1.25]], tris: 500, res: 0.03, slim: 500,
    build(S) {
      const wood = m(20, 14);
      S.box([0, 0.2, 0], [0.34, 0.2, 0.95], wood, { res: 0.03 });
      S.box([0, 0.26, 0], [0.28, 0.18, 0.88], m(15), { res: 0.03, neg: true });
      S.box([0.42, 0.18, 0.25], [0.32, 0.04, 0.9], wood, { res: 0.025, ax: ROT_Z(0.45) });
      S.box([0.2, 0.05, -0.75], [0.12, 0.04, 0.2], wood, { res: 0.02, ax: ROT_Y(0.8) });
      skull(S, 0, 0.2, -0.6, 1.0);
    }
  },

  // Ritual banner on an iron pole.
  ritual_banner: {
    bounds: [[-0.5, -0.1, -0.3], [0.5, 3.0, 0.3]], tris: 300, res: 0.03,
    build(S) {
      S.box([0, 0.06, 0], [0.18, 0.06, 0.18], DSAND, { res: 0.03 });
      S.tube([[0, 0, 0], [0, 2.85, 0]], 0.04, 0.04, m(17), { res: 0.02 });
      S.tube([[-0.42, 2.7, 0.05], [0.42, 2.7, 0.05]], 0.03, 0.03, m(17), { res: 0.02 });
      S.box([0, 2.0, 0.06], [0.36, 0.68, 0.025], m(13, 18), { res: 0.025 });
      S.box([0, 1.3, 0.06], [0.36, 0.08, 0.025], m(13), { res: 0.02, ax: ROT_Z(0) });
      S.torus([0, 2.1, 0.09], 0.14, 0.03, m(34), { res: 0.015, ax: [[1, 0, 0], [0, 0, 1], [0, 1, 0]] });
      S.box([0, 2.1, 0.09], [0.025, 0.2, 0.02], m(34), { res: 0.012 });
    }
  },
};

// Barrier block: the full 0.6 m width of the collision box, so its glowing top face shows the footprint from above.
function barrierPanel(c1, c2, c3) {
  return {
    bounds: [[-1.3, -0.1, -0.45], [1.3, 1.6, 0.45]], tris: 800, res: 0.025, slim: 800,
    build(S) {
      S.box([0, 0.1, 0], [1.2, 0.1, 0.32], DSAND, { res: 0.03 });                               // stone base
      S.box([0, 0.75, 0], [1.15, 0.55, 0.24], glow(c1, c2), { res: 0.025 });                     // glowing field
      for (const y of [0.22, 1.32]) for (const z of [-0.26, 0.26]) S.box([0, y, z], [1.2, 0.05, 0.04], m(34), { res: 0.02 }); // rails
      for (const x of [-0.6, 0.6]) for (const z of [-0.26, 0.26]) S.box([x, 0.77, z], [0.03, 0.55, 0.03], m(34), { res: 0.015 });
      for (const z of [-0.25, 0.25]) {
        S.torus([0, 0.77, z], 0.3, 0.045, glow(c3), { res: 0.02, ax: [[1, 0, 0], [0, 0, 1], [0, 1, 0]] }); // rune ring
        S.box([0, 0.77, z], [0.035, 0.28, 0.02], glow(c3), { res: 0.015 });
        S.box([0, 0.77, z], [0.28, 0.035, 0.02], glow(c3), { res: 0.015 });
      }
      for (const x of [-0.9, -0.3, 0.3, 0.9]) S.box([x, 1.31, 0], [0.09, 0.02, 0.09], glow(c3), { res: 0.012, ax: [[0.7, 0, 0.7], [0, 1, 0], [-0.7, 0, 0.7]] }); // top runes
    }
  };
}
function barrierPost(c1, c2) {
  return {
    bounds: [[-0.35, -0.1, -0.35], [0.35, 2.0, 0.35]], tris: 300, res: 0.025, slim: 300,
    build(S) {
      S.box([0, 0.12, 0], [0.26, 0.12, 0.26], DSAND, { res: 0.03 });
      S.box([0, 0.85, 0], [0.18, 0.7, 0.18], SAND, { res: 0.03 });
      S.box([0, 1.58, 0], [0.24, 0.06, 0.24], DSAND, { res: 0.025 });
      S.lathe([0, 1.64, 0], 0.1, [0.17, 0.12], m(34), { res: 0.02 });
      S.ball([0, 1.82, 0], [0.09, 0.15, 0.09], glow(c1, c2), { res: 0.015 });
    }
  };
}
