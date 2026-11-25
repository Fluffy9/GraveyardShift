// Found items: three decoy lanterns (lures), the Gravestone Turret and the Bellstone.
// +Y up, origin at ground centre, front faces +Z. Lures are ~0.6-0.9 tall; the stone items ~0.9 / 0.6.
// Colours: 5 parchment, 6 amber, 14 brown, 20 dark wood, 22 hot glow, 34 bronze, 40 gold, 17 iron, 15 near black,
// 2 dark stone, 3 stone, 4 light stone, 8 lavender, 9 pale lavender, 16 violet, 43 soul teal, 12 moss.
const { m, glow, ROT_X, ROT_Y, ROT_Z } = require('./common.js');

const WOOD = m(20), IRON = m(17), BRONZE = m(34), GOLD = m(40), STONE = m(3), DSTONE = m(2), LSTONE = m(4), MOSS = m(12);
const VERT = ROT_X(Math.PI / 2);          // a torus/ring that stands facing +z

module.exports = {
  // Tier 1: a paper lantern. Round, ribbed, flimsy; a short loop of string on top.
  lure_paper: {
    bounds: [[-0.3, -0.02, -0.3], [0.3, 0.92, 0.3]], tris: 700, slim: 900, slimErr: 0.012, res: 0.012,
    build(S) {
      S.lathe([0, 0.0, 0], 0.05, [0.17, 0.15], WOOD, { res: 0.01 });                                     // base disc
      S.ball([0, 0.38, 0], [0.22, 0.3, 0.22], glow(5, 22), { res: 0.01 });                               // glowing paper body
      for (const y of [0.2, 0.3, 0.4, 0.5, 0.58]) {                                                      // bamboo ribs
        const t = (y - 0.38) / 0.3, r = 0.22 * Math.sqrt(Math.max(0.0001, 1 - t * t)) + 0.006;
        S.torus([0, y, 0], r, 0.007, WOOD, { res: 0.005 });
      }
      S.lathe([0, 0.64, 0], 0.07, [0.09, 0.07], WOOD, { res: 0.008 });                                   // top cap
      S.tube([[0, 0.7, 0], [0.0, 0.8, 0.0]], 0.012, 0.012, m(14), { res: 0.006 });                       // string
      S.torus([0, 0.78, 0], 0.035, 0.006, m(14), { res: 0.005, ax: VERT });
      S.tube([[0.13, 0.05, 0.13], [0.15, -0.0, 0.15]], 0.008, 0.008, m(13), { res: 0.005 });            // tassel cord
      S.ball([0.15, 0.03, 0.15], 0.018, m(13), { res: 0.006 });
    }
  },

  // Tier 2: a brass lantern. Six posts, domed cap, ring handle, steady flame.
  lure_brass: {
    bounds: [[-0.3, -0.02, -0.3], [0.3, 0.95, 0.3]], tris: 1100, slim: 1400, slimErr: 0.012, res: 0.01,
    build(S) {
      S.lathe([0, 0.0, 0], 0.07, [0.2, 0.17], BRONZE, { res: 0.008 });                                   // stepped base
      S.lathe([0, 0.07, 0], 0.03, [0.18, 0.15], GOLD, { res: 0.007 });
      S.lathe([0, 0.1, 0], 0.4, [0.15, 0.15], glow(6), { res: 0.008 });                                  // amber glass
      for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2, x = Math.cos(a) * 0.16, z = Math.sin(a) * 0.16;
        S.tube([[x, 0.09, z], [x, 0.52, z]], 0.014, 0.014, BRONZE, { res: 0.006 }); }                     // posts
      for (const y of [0.18, 0.5]) S.torus([0, y, 0], 0.16, 0.011, GOLD, { res: 0.006 });
      S.lathe([0, 0.52, 0], 0.16, t => 0.2 * Math.pow(1 - t, 0.6) + 0.01, BRONZE, { res: 0.008 });       // domed cap
      S.ball([0, 0.7, 0], 0.025, GOLD, { res: 0.006 });                                                  // finial
      S.torus([0, 0.78, 0], 0.075, 0.011, GOLD, { res: 0.006, ax: VERT });                               // handle
      S.tube([[0, 0.7, 0], [0, 0.71, 0]], 0.014, 0.014, GOLD, { res: 0.006 });
    }
  },

  // Tier 3: a spirit lantern. Violet base, a cage that arches and meets, a teal core, a halo that hovers.
  lure_spirit: {
    bounds: [[-0.35, -0.02, -0.35], [0.35, 1.05, 0.35]], tris: 1400, slim: 1600, slimErr: 0.012, res: 0.01,
    build(S) {
      S.lathe([0, 0.0, 0], 0.09, t => 0.2 - 0.1 * t, m(16), { res: 0.008 });                             // base
      S.torus([0, 0.09, 0], 0.11, 0.012, m(8), { res: 0.006 });
      for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2, c = Math.cos(a), s = Math.sin(a);       // arched cage ribs
        S.tube([[c * 0.1, 0.1, s * 0.1], [c * 0.2, 0.3, s * 0.2], [c * 0.19, 0.5, s * 0.19], [c * 0.04, 0.68, s * 0.04]], 0.016, 0.01, m(8), { res: 0.006 }); }
      S.ball([0, 0.72, 0], 0.035, glow(9), { res: 0.005 });                                              // crown gem
      S.torus([0, 0.62, 0], 0.025, 0.007, m(9), { res: 0.004 });
    }
  },

  // The Bellstone: a squat stone bell on three feet, runes glowing round its waist, a bone clapper.
  bellstone: {
    bounds: [[-0.4, -0.02, -0.4], [0.4, 0.8, 0.4]], tris: 1500, slim: 1400, slimErr: 0.012, res: 0.014,
    build(S) {
      S.lathe([0, 0.07, 0], 0.5, t => 0.3 - 0.2 * Math.pow(t, 0.55), STONE, { res: 0.012 });             // bell body
      S.torus([0, 0.075, 0], 0.3, 0.025, LSTONE, { res: 0.007 });                                         // lip
      S.ball([0, 0.2, 0], 0.045, m(35), { res: 0.008 });                                                  // clapper, just inside the mouth
      S.lathe([0, 0.55, 0], 0.05, [0.1, 0.07], DSTONE, { res: 0.008 });                                   // crown
      S.torus([0, 0.65, 0], 0.06, 0.016, DSTONE, { res: 0.007, ax: VERT });                               // hanging loop
      S.ball([-0.1, 0.14, 0.22], [0.06, 0.03, 0.04], MOSS, { res: 0.008 });
    }
  },

  // ---- animated parts (origin = pivot); see src/items.js for the rigs ----
  lure_brass_flame: { bounds: [[-0.1, -0.16, -0.1], [0.1, 0.16, 0.1]], tris: 200, slim: 200, slimErr: 0.01, res: 0.005,
    build(S) { S.ball([0, 0, 0], [0.055, 0.1, 0.055], glow(22), { res: 0.005 }); S.ball([0, -0.03, 0], [0.03, 0.05, 0.03], glow(6), { res: 0.004 }); } },
  lure_spirit_core: { bounds: [[-0.15, -0.15, -0.15], [0.15, 0.15, 0.15]], tris: 200, slim: 250, slimErr: 0.01, res: 0.005,
    build(S) { S.ball([0, 0, 0], 0.095, glow(43), { res: 0.005 }); S.ball([0, 0, 0], 0.055, glow(9), { res: 0.004 }); } },
  lure_spirit_halo: { bounds: [[-0.25, -0.06, -0.25], [0.25, 0.06, 0.25]], tris: 400, slim: 400, slimErr: 0.01, res: 0.006,
    build(S) { S.torus([0, 0, 0], 0.17, 0.009, glow(43), { res: 0.005 });
      for (let i = 0; i < 3; i++) { const a = i / 3 * Math.PI * 2 + 0.5; S.ball([Math.cos(a) * 0.17, 0, Math.sin(a) * 0.17], 0.02, glow(9), { res: 0.004 }); } } },
  bellstone_feet: { bounds: [[-0.4, -0.02, -0.4], [0.4, 0.1, 0.4]], tris: 300, slim: 300, slimErr: 0.01, res: 0.01,
    build(S) { for (let i = 0; i < 3; i++) { const a = i / 3 * Math.PI * 2 + 0.3;
      S.box([Math.cos(a) * 0.25, 0.03, Math.sin(a) * 0.25], [0.06, 0.03, 0.06], DSTONE, { res: 0.008, ax: ROT_Y(-a) }); } } },
  bellstone_bands: { bounds: [[-0.3, -0.1, -0.3], [0.3, 0.1, 0.3]], tris: 600, slim: 700, slimErr: 0.01, res: 0.006,
    build(S) { S.torus([0, -0.04, 0], 0.235, 0.012, glow(43), { res: 0.005 }); S.torus([0, 0.04, 0], 0.205, 0.01, glow(43), { res: 0.005 });
      for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2; S.ball([Math.cos(a) * 0.222, 0, Math.sin(a) * 0.222], 0.014, glow(9), { res: 0.004 }); } } },

  // The Spellbook Turret, in three parts: the book (pivot at its hover centre), the runes that drift around it, the ground sigil.
  spellbook_book: { bounds: [[-0.5, -0.3, -0.4], [0.5, 0.3, 0.4]], tris: 1400, slim: 1400, slimErr: 0.012, res: 0.01,
    build(S) {
      const TH = 0.45, C = Math.cos(TH), Sn = Math.sin(TH);
      const P = (x, y, z) => [x, y * C - z * Sn, y * Sn + z * C];
      const mul = (A, B) => A.map(r => [0, 1, 2].map(j => r[0] * B[0][j] + r[1] * B[1][j] + r[2] * B[2][j]));
      for (const sx of [-1, 1]) {
        const ax = mul(ROT_X(TH), ROT_Z(sx * 0.22));
        S.box(P(sx * 0.2, -0.03, 0), [0.2, 0.012, 0.16], m(13), { res: 0.007, ax });
        S.box(P(sx * 0.2, 0.0, 0), [0.185, 0.02, 0.145], m(5), { res: 0.006, ax });
        S.box(P(sx * 0.2, 0.024, 0), [0.17, 0.004, 0.135], m(35), { res: 0.005, ax });
        for (const z of [-0.15, 0.15]) S.box(P(sx * 0.38, -0.01, z), [0.025, 0.014, 0.025], GOLD, { res: 0.005, ax });
        for (let i = 0; i < 4; i++) { const z = -0.09 + i * 0.06, w = 0.07 + (i % 2) * 0.04;
          S.tube([P(sx * 0.1, 0.034, z), P(sx * (0.1 + w), 0.034, z)], 0.006, 0.006, glow(43), { res: 0.004 }); }
      }
      S.tube([P(0, -0.085, -0.15), P(0, -0.085, 0.15)], 0.03, 0.03, m(13), { res: 0.007 });
      S.tube([P(0.01, 0.03, 0.12), P(0.03, -0.09, 0.2), P(0.04, -0.2, 0.2)], 0.01, 0.008, m(11), { res: 0.005 });
    } },
  spellbook_runes: { bounds: [[-0.4, -0.3, -0.35], [0.4, 0.3, 0.35]], tris: 400, slim: 400, slimErr: 0.01, res: 0.008,
    build(S) {
      S.ball([0, 0.1, 0.02], 0.04, glow(9), { res: 0.005 });
      for (let i = 0; i < 3; i++) { const a = i / 3 * Math.PI * 2 + 0.4;
        S.ball([Math.cos(a) * 0.26, 0.12 + 0.05 * i, Math.sin(a) * 0.14], 0.016, glow(43), { res: 0.005 }); }
      for (const [x, z] of [[-0.13, -0.05], [0.12, 0.08]]) S.ball([x, -0.2, z], 0.014, glow(43), { res: 0.005 });
    } },
  spellbook_sigil: { bounds: [[-0.35, -0.05, -0.35], [0.35, 0.05, 0.35]], tris: 600, slim: 700, slimErr: 0.01, res: 0.006,
    build(S) { S.torus([0, 0, 0], 0.26, 0.012, glow(43), { res: 0.005 }); S.torus([0, 0, 0], 0.17, 0.008, glow(9), { res: 0.004 });
      for (let i = 0; i < 3; i++) { const a = i / 3 * Math.PI * 2 + 1.1; S.ball([Math.cos(a) * 0.26, 0, Math.sin(a) * 0.26], 0.022, glow(43), { res: 0.004 }); } } },

  // ---- world pickups: small, origin at the object's centre (the rig hovers them); ~0.3 across ----
  // Heart: a chubby rose-pink heart gem with a gold band.
  pickup_heart: { bounds: [[-0.25, -0.25, -0.2], [0.25, 0.25, 0.2]], tris: 700, slim: 800, slimErr: 0.01, res: 0.007,
    build(S) {
      for (const s of [-1, 1]) {
        S.ball([s * 0.075, 0.07, 0], [0.1, 0.1, 0.085], glow(11), { res: 0.006 });
        S.tube([[s * 0.1, 0.1, 0], [s * 0.04, -0.03, 0], [0, -0.13, 0]], 0.085, 0.016, glow(11), { res: 0.006 });
      }
      S.ball([-0.075, 0.1, 0.05], 0.025, glow(9), { res: 0.004 });                                     // highlight
      for (const [x, y] of [[0.17, 0.17], [-0.2, -0.02]]) S.ball([x, y, 0.04], 0.012, glow(22), { res: 0.004 });
    } },
  // Ward Bubble charm: a gyroscope of three pale-blue rings round a pearl.
  pickup_shield: { bounds: [[-0.25, -0.25, -0.25], [0.25, 0.25, 0.25]], tris: 700, slim: 800, slimErr: 0.01, res: 0.006,
    build(S) {
      S.torus([0, 0, 0], 0.16, 0.009, glow(10), { res: 0.005 });
      S.torus([0, 0, 0], 0.16, 0.009, glow(10), { res: 0.005, ax: ROT_X(Math.PI / 2) });
      S.torus([0, 0, 0], 0.16, 0.009, glow(10), { res: 0.005, ax: ROT_Z(Math.PI / 2) });
      S.ball([0, 0, 0], 0.055, glow(9), { res: 0.005 });
      S.ball([0, 0, 0], 0.085, m(28), { res: 0.005 });                                                  // glassy shell round the pearl
      for (const [x, y, z] of [[0.16, 0, 0], [-0.16, 0, 0], [0, 0.16, 0], [0, -0.16, 0], [0, 0, 0.16], [0, 0, -0.16]]) S.ball([x, y, z], 0.016, glow(22), { res: 0.004 });
    } },
  // Soul Draw: a violet horseshoe magnet with glowing tips, a soul pulled up under the arch.
  pickup_magnet: { bounds: [[-0.25, -0.28, -0.12], [0.25, 0.25, 0.12]], tris: 700, slim: 800, slimErr: 0.01, res: 0.006,
    build(S) {
      const pts = [[0.12, -0.12, 0], [0.12, 0.0, 0]];
      for (let i = 1; i < 10; i++) { const a = i / 10 * Math.PI; pts.push([Math.cos(a) * 0.12, Math.sin(a) * 0.12, 0]); }
      pts.push([-0.12, 0, 0], [-0.12, -0.12, 0]);
      S.tube(pts, 0.04, 0.04, m(16), { res: 0.006 });
      for (const s of [-1, 1]) {
        S.lathe([s * 0.12, -0.155, 0], 0.05, [0.052, 0.05], m(4), { res: 0.005 });                          // pole caps
        S.ball([s * 0.12, -0.165, 0], [0.032, 0.012, 0.032], glow(43), { res: 0.004 });
        S.ball([s * 0.12, -0.075, 0], [0.047, 0.012, 0.047], m(40), { res: 0.005 });                      // gold band
      }
      S.ball([0, -0.05, 0], 0.035, glow(43), { res: 0.005 });                                            // the soul
      S.ball([0, -0.05, 0], 0.018, glow(9), { res: 0.004 });
    } },
  // Stillwater: a bronze hourglass, pale glass, teal water caught mid-fall.
  pickup_hourglass: { bounds: [[-0.2, -0.26, -0.2], [0.2, 0.26, 0.2]], tris: 900, slim: 1000, slimErr: 0.01, res: 0.006,
    build(S) {
      for (const y of [0.2, -0.23]) S.lathe([0, y, 0], 0.03, [0.13, 0.13], m(34), { res: 0.005 });
      S.lathe([0, 0.012, 0], 0.19, t => 0.012 + 0.09 * Math.pow(Math.sin(Math.min(1, t * 1.05) * Math.PI * 0.5 + 0.0), 0.8), m(28), { res: 0.005 });
      S.lathe([0, -0.2, 0], 0.19, t => 0.012 + 0.09 * Math.pow(Math.cos(Math.min(1, t * 1.05) * Math.PI * 0.5), 0.8), m(28), { res: 0.005 });
      for (let i = 0; i < 3; i++) { const a = i / 3 * Math.PI * 2 + 0.5;
        S.tube([[Math.cos(a) * 0.115, -0.22, Math.sin(a) * 0.115], [Math.cos(a) * 0.115, 0.22, Math.sin(a) * 0.115]], 0.011, 0.011, m(34), { res: 0.005 }); }
      S.ball([0, 0.09, 0], [0.05, 0.03, 0.05], glow(43), { res: 0.005 });                                 // water above
      S.tube([[0, 0.05, 0], [0, -0.1, 0]], 0.006, 0.006, glow(43), { res: 0.004 });                       // stream
      S.ball([0, -0.16, 0], [0.065, 0.035, 0.065], glow(43), { res: 0.005 });                             // water below
    } },
  // Parcel: a found item, a cloth-wrapped bundle tied with a ribbon and sealed with a glowing wax stamp.
  pickup_parcel: { bounds: [[-0.25, -0.2, -0.25], [0.25, 0.3, 0.25]], tris: 800, slim: 900, slimErr: 0.01, res: 0.007,
    build(S) {
      S.ball([0, -0.03, 0], [0.15, 0.14, 0.15], m(14), { res: 0.007 });                                    // sack
      S.lathe([0, 0.07, 0], 0.13, t => 0.085 - 0.06 * Math.pow(t, 0.7), m(14), { res: 0.006 });            // gathered neck
      S.torus([0, 0.16, 0], 0.03, 0.012, m(13), { res: 0.005 });                                           // tie
      S.lathe([0, 0.17, 0], 0.06, t => 0.03 + 0.05 * t, m(14), { res: 0.005 });                            // frilled top
      for (const s of [-1, 1]) {                                                                             // bow loops and tails
        S.ball([s * 0.045, 0.17, 0.035], [0.035, 0.018, 0.02], m(13), { res: 0.005 });
        S.tube([[s * 0.02, 0.16, 0.035], [s * 0.05, 0.1, 0.06], [s * 0.07, 0.05, 0.05]], 0.01, 0.007, m(13), { res: 0.005 });
      }
      S.ball([0, -0.01, 0.145], 0.042, glow(9), { res: 0.005 });                                           // wax seal
      S.torus([0, -0.01, 0.145], 0.047, 0.008, m(40), { res: 0.004, ax: ROT_X(Math.PI / 2) });
    } },
};
