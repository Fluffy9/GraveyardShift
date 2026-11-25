// Ten new spirits. Each is a body plus separately exported moving parts (wings, clapper, shovel, petals, ribbons...)
// that src/spirits.js puts on pivots and animates. A part's origin is its pivot. Front faces +z.
// Sizes follow the wanderer (~1.3 m). Colours: 9 pale lavender, 8 lavender, 16 violet, 10 spirit blue, 43 soul teal,
// 28 pale glass, 15 near black (eyes), 5 parchment, 35 bone, 22 / 6 warm glow.
const { m, glow, ROT_X, ROT_Y, ROT_Z } = require('./common.js');

const PALE = m(9), LAV = m(8), VIO = m(16), BLUE = m(10), DARK = m(15), BONE = m(35);
const eyes = (S, y, z, dx = 0.09, r = [0.05, 0.065, 0.04], mat = DARK) => { for (const s of [-1, 1]) S.ball([s * dx, y, z], r, mat, { res: 0.015 }); };
const P = (bounds, res, build, extra = {}) => ({ bounds, tris: 900, res, slim: extra.slim || 700, slimErr: 0.012, build, ...extra });

module.exports = {
  // 1. Veiled Mourner (Mausoleum): tall widow ghost, head bowed, a lily held at the chest. The veil is its own part.
  spirit_mourner: P([[-0.6, -0.1, -0.6], [0.6, 1.9, 0.6]], 0.025, S => {
    S.lathe([0, 0.05, 0], 1.35, t => 0.42 - 0.26 * t + 0.03 * Math.sin(t * 14), PALE, { res: 0.025 });
    for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2; S.tube([[Math.cos(a) * 0.34, 0.25, Math.sin(a) * 0.34], [Math.cos(a) * 0.4, 0.0, Math.sin(a) * 0.4]], 0.09, 0.02, PALE, { res: 0.02 }); }
    S.ball([0, 1.52, 0.06], [0.17, 0.19, 0.17], PALE, { res: 0.02 });
    eyes(S, 1.5, 0.21, 0.06, [0.035, 0.045, 0.03]);
    S.tube([[-0.18, 1.2, 0.08], [-0.06, 1.05, 0.24]], 0.06, 0.05, PALE, { res: 0.018 });
    S.tube([[0.18, 1.2, 0.08], [0.06, 1.05, 0.24]], 0.06, 0.05, PALE, { res: 0.018 });
    S.tube([[0, 0.9, 0.27], [0, 1.3, 0.28]], 0.012, 0.012, m(24), { res: 0.008 });                    // lily stem
    for (let i = 0; i < 5; i++) { const a = i / 5 * Math.PI * 2; S.ball([Math.cos(a) * 0.05, 1.33, 0.28 + Math.sin(a) * 0.05], [0.04, 0.025, 0.04], m(5), { res: 0.01 }); }
    S.ball([0, 1.34, 0.28], 0.02, glow(22), { res: 0.008 });
  }),
  spirit_mourner_veil: P([[-0.5, -1.9, -0.9], [0.5, 0.32, 0.35]], 0.022, S => {      // pivot at the crown of the head
    S.ball([0, 0.0, 0], [0.2, 0.12, 0.2], LAV, { res: 0.018 });
    S.tube([[0, 0.02, -0.08], [0, -0.4, -0.25], [0, -0.9, -0.4], [0, -1.45, -0.48]], 0.22, 0.32, LAV, { res: 0.022 });
    for (const s of [-1, 1]) S.tube([[s * 0.17, -0.05, 0.02], [s * 0.26, -0.5, -0.05], [s * 0.3, -1.0, -0.2]], 0.06, 0.03, LAV, { res: 0.018 });
  }),

  // 2. Lantern Moth (Churchyard): fuzzy body with a glowing abdomen; wings are one part, mirrored.
  spirit_moth: P([[-0.4, -0.1, -0.6], [0.4, 1.1, 0.5]], 0.02, S => {
    S.ball([0, 0.72, 0.12], [0.13, 0.13, 0.15], LAV, { res: 0.018 });                               // thorax
    S.ball([0, 0.75, 0.3], [0.1, 0.1, 0.09], PALE, { res: 0.015 });                                  // head
    eyes(S, 0.78, 0.37, 0.055, [0.035, 0.04, 0.03]);
    for (const s of [-1, 1]) S.tube([[s * 0.04, 0.84, 0.34], [s * 0.12, 1.0, 0.42], [s * 0.22, 1.04, 0.38]], 0.018, 0.012, VIO, { res: 0.01 });
    S.ball([0, 0.62, -0.18], [0.12, 0.13, 0.22], glow(6, 22), { res: 0.018 });                        // lantern abdomen
    for (let i = 0; i < 3; i++) S.torus([0, 0.62, -0.08 - i * 0.1], 0.12 - i * 0.015, 0.012, VIO, { res: 0.008, ax: [[1, 0, 0], [0, 0, 1], [0, 1, 0]].map((r, k) => k === 1 ? [0, 0, 1] : r) });
    S.ball([0, 0.82, 0.15], [0.15, 0.06, 0.12], PALE, { res: 0.015 });                                // fluffy collar
  }),
  spirit_moth_wing: P([[-0.05, -0.55, -0.6], [0.95, 0.5, 0.45]], 0.018, S => {      // root at origin, spreads to +x
    S.ball([0.42, 0.12, 0.08], [0.42, 0.03, 0.3], PALE, { res: 0.015, ax: ROT_Y(-0.3) });          // forewing
    S.ball([0.32, -0.05, -0.25], [0.3, 0.03, 0.24], LAV, { res: 0.015, ax: ROT_Y(0.4) });          // hindwing
    S.ball([0.5, 0.15, 0.05], [0.09, 0.02, 0.09], glow(22, 6), { res: 0.012 });                      // eyespot
    S.ball([0.34, -0.03, -0.26], [0.06, 0.02, 0.06], VIO, { res: 0.012 });
  }, { slim: 300 }),

  // 3. Bell Imp (Bell Tower): a small floating bell with a face in its waist and stub arms; the tongue swings.
  spirit_bell: P([[-0.6, -0.1, -0.6], [0.6, 1.4, 0.6]], 0.022, S => {
    S.lathe([0, 0.25, 0], 0.85, t => 0.5 - 0.27 * Math.pow(t, 0.7) + (t < 0.06 ? 0.04 : 0), m(28), { res: 0.022 });
    S.lathe([0, 0.25, 0], 0.08, [0.53, 0.52], m(40), { res: 0.015 });                               // rim band
    S.lathe([0, 1.08, 0], 0.15, [0.2, 0.1], m(28), { res: 0.015 });
    S.torus([0, 1.28, 0], 0.08, 0.025, m(40), { res: 0.01, ax: [[1, 0, 0], [0, 0, 1], [0, 1, 0]] });
    eyes(S, 0.72, 0.36, 0.11, [0.05, 0.07, 0.04]);
    S.ball([0, 0.56, 0.39], [0.07, 0.04, 0.02], DARK, { res: 0.01 });                                // little 'o' mouth
    for (const s of [-1, 1]) S.tube([[s * 0.4, 0.55, 0.05], [s * 0.55, 0.48, 0.15]], 0.06, 0.05, m(28), { res: 0.015 });
    S.ball([0, 0.27, 0], [0.42, 0.04, 0.42], DARK, { res: 0.015 });                                  // dark mouth of the bell
  }),
  spirit_bell_tongue: P([[-0.15, -0.65, -0.15], [0.15, 0.1, 0.15]], 0.015, S => {   // hangs from origin
    S.tube([[0, 0, 0], [0, -0.45, 0]], 0.025, 0.025, VIO, { res: 0.01 });
    S.ball([0, -0.52, 0], [0.09, 0.1, 0.09], glow(9, 16), { res: 0.012 });
  }, { slim: 200 }),

  // 4. Gravedigger Shade (Hollow Grounds): hunched cloak, wide hat, long arms; the shovel is a part held at the hands.
  spirit_digger: P([[-0.7, -0.1, -0.6], [0.7, 1.7, 0.85]], 0.025, S => {
    S.lathe([0, 0.05, -0.05], 1.0, t => 0.4 - 0.15 * t + 0.03 * Math.sin(t * 12), LAV, { res: 0.025 });
    S.ball([0, 1.05, 0.05], [0.33, 0.3, 0.32], LAV, { res: 0.022 });                                  // hunched shoulders
    S.ball([0, 1.16, 0.36], [0.17, 0.16, 0.16], PALE, { res: 0.02 });                                 // head pushed forward
    S.lathe([0, 1.3, 0.3], 0.035, [0.25, 0.24], VIO, { res: 0.015 });                                // hat brim, tipped back
    S.lathe([0, 1.33, 0.28], 0.2, [0.15, 0.12], VIO, { res: 0.015 });
    eyes(S, 1.15, 0.51, 0.065, [0.04, 0.035, 0.025], glow(43));
    for (const s of [-1, 1]) S.tube([[s * 0.3, 1.1, 0.12], [s * 0.3, 0.85, 0.35], [s * 0.12, 0.8, 0.5]], 0.08, 0.055, LAV, { res: 0.018 });
    for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2; S.tube([[Math.cos(a) * 0.3, 0.3, -0.05 + Math.sin(a) * 0.3], [Math.cos(a) * 0.36, 0.0, -0.05 + Math.sin(a) * 0.36]], 0.08, 0.02, LAV, { res: 0.018 }); }
  }),
  spirit_digger_shovel: P([[-0.18, -1.12, -0.2], [0.18, 0.5, 0.2]], 0.015, S => {      // grip at origin
    S.tube([[0, 0.4, 0], [0, -0.75, 0]], 0.025, 0.025, BLUE, { res: 0.01 });
    S.box([0, 0.42, 0], [0.09, 0.02, 0.02], BLUE, { res: 0.01 });
    S.box([0, -0.88, 0.02], [0.13, 0.15, 0.015], glow(10, 28), { res: 0.01, ax: ROT_X(0.15) });
  }, { slim: 200 }),

  // 5. Wickling (Churchyard): a melting candle with a sleepy face; its flame hair is a part that flickers.
  spirit_wick: P([[-0.45, -0.1, -0.45], [0.45, 1.0, 0.45]], 0.018, S => {
    S.lathe([0, 0, 0], 0.85, t => 0.3 - 0.03 * t, m(5), { res: 0.018 });
    S.ball([0, 0.04, 0], [0.4, 0.06, 0.38], m(5), { res: 0.018 });                                    // wax puddle
    for (const [a, y, l] of [[0.3, 0.8, 0.3], [1.6, 0.82, 0.2], [2.9, 0.78, 0.4], [4.4, 0.8, 0.25], [5.5, 0.83, 0.35]])
      S.tube([[Math.cos(a) * 0.29, y, Math.sin(a) * 0.29], [Math.cos(a) * 0.31, y - l, Math.sin(a) * 0.31]], 0.05, 0.035, m(5), { res: 0.012 });
    S.lathe([0, 0.85, 0], 0.03, [0.3, 0.27], m(35), { res: 0.012 });
    for (const s of [-1, 1]) S.box([s * 0.1, 0.55, 0.29], [0.05, 0.012, 0.012], DARK, { res: 0.008, ax: ROT_Z(s * -0.2) });   // closed eyes
    S.ball([0, 0.44, 0.29], [0.035, 0.02, 0.015], DARK, { res: 0.008 });
    S.tube([[0, 0.86, 0], [0, 0.95, 0]], 0.015, 0.012, DARK, { res: 0.008 });                         // wick
  }),
  spirit_wick_flame: P([[-0.3, -0.22, -0.3], [0.3, 0.75, 0.3]], 0.015, S => {    // base at origin
    S.tube([[0, 0.0, 0], [0.02, 0.2, 0], [-0.04, 0.42, 0.01], [0.03, 0.65, 0]], 0.17, 0.01, glow(10, 28), { res: 0.014 });
    S.ball([0, 0.15, 0], [0.07, 0.11, 0.07], glow(28), { res: 0.01 });
    for (const s of [-1, 1]) S.tube([[s * 0.08, 0.05, 0], [s * 0.16, 0.25, 0.02]], 0.06, 0.01, glow(10), { res: 0.01 });
  }, { slim: 250 }),

  // 6. Ossuary Choir (Catacombs): three singing skulls orbiting a soul core.
  spirit_choir_core: P([[-0.35, -0.1, -0.35], [0.35, 1.2, 0.35]], 0.02, S => {
    S.ball([0, 0.75, 0], 0.18, glow(43, 28), { res: 0.015 });
    S.ball([0, 0.75, 0], 0.09, glow(28), { res: 0.012 });
    S.tube([[0, 0.6, 0], [0.05, 0.4, 0.02], [-0.04, 0.15, 0]], 0.1, 0.01, glow(26), { res: 0.012 });
    for (const a of [0, 2.1, 4.2]) S.tube([[Math.cos(a) * 0.12, 0.85, Math.sin(a) * 0.12], [Math.cos(a) * 0.2, 1.05, Math.sin(a) * 0.2]], 0.04, 0.008, glow(43), { res: 0.01 });
  }, { slim: 300 }),
  spirit_choir_skull: P([[-0.25, -0.25, -0.25], [0.25, 0.25, 0.3]], 0.012, S => {
    S.ball([0, 0.04, 0], [0.17, 0.16, 0.18], BONE, { res: 0.012 });
    S.ball([0, -0.1, 0.06], [0.11, 0.07, 0.11], BONE, { res: 0.01 });                                  // jaw
    eyes(S, 0.05, 0.14, 0.065, [0.045, 0.05, 0.03], glow(43));
    S.ball([0, -0.1, 0.16], [0.05, 0.05, 0.03], DARK, { res: 0.008 });                               // singing mouth
    S.ball([0, -0.03, 0.17], [0.02, 0.025, 0.015], DARK, { res: 0.006 });
  }, { slim: 300 }),

  // 7. Raven Wraith (Bell Tower): ragged spectral crow; wings are one part, mirrored.
  spirit_raven: P([[-0.35, -0.1, -0.8], [0.35, 1.2, 0.6]], 0.018, S => {
    S.ball([0, 0.7, 0], [0.18, 0.2, 0.32], VIO, { res: 0.018 });
    S.ball([0, 0.9, 0.3], [0.13, 0.13, 0.14], VIO, { res: 0.015 });
    S.lathe([0, 0.88, 0.42], 0.22, [0.05, 0.0], m(35), { res: 0.01, ax: ROT_X(Math.PI / 2) });        // bone beak
    eyes(S, 0.94, 0.37, 0.075, [0.03, 0.03, 0.025], glow(9));
    for (let i = 0; i < 4; i++) S.tube([[(i - 1.5) * 0.06, 0.7, -0.25], [(i - 1.5) * 0.12, 0.6, -0.6 - (i % 2) * 0.1]], 0.05, 0.01, VIO, { res: 0.012 });   // ragged tail
    for (let i = 0; i < 3; i++) S.tube([[(i - 1) * 0.08, 0.5, 0.05], [(i - 1) * 0.12, 0.2, 0.02 - i * 0.04], [(i - 1) * 0.1, 0.02, -0.05]], 0.06, 0.01, m(1, 16), { res: 0.012 });  // wispy trail
  }),
  spirit_raven_wing: P([[-0.05, -0.4, -0.55], [1.05, 0.25, 0.35]], 0.016, S => {
    S.ball([0.3, 0, 0], [0.32, 0.04, 0.22], VIO, { res: 0.014 });
    for (let i = 0; i < 5; i++) S.tube([[0.45 + i * 0.08, 0, 0.1 - i * 0.07], [0.75 + i * 0.05, -0.05 - i * 0.03, -0.05 - i * 0.1]], 0.05, 0.01, i % 2 ? VIO : m(1, 16), { res: 0.012 });
  }, { slim: 300 }),

  // 8. Bloom Wraith (Gardens): a bud head on a vine neck over curling roots; petals are instanced and open/close.
  spirit_bloom: P([[-0.6, -0.1, -0.6], [0.6, 1.3, 0.6]], 0.02, S => {
    for (let i = 0; i < 5; i++) {
      const a = i / 5 * Math.PI * 2 + 0.3;
      S.tube([[0, 0.25, 0], [Math.cos(a) * 0.3, 0.12, Math.sin(a) * 0.3], [Math.cos(a + 0.5) * 0.5, 0.03, Math.sin(a + 0.5) * 0.5]], 0.06, 0.015, m(24), { res: 0.014 });
    }
    S.tube([[0, 0.2, 0], [0.06, 0.5, 0.02], [-0.04, 0.8, 0.05], [0, 0.95, 0.08]], 0.07, 0.05, m(24), { res: 0.016 });
    for (const s of [-1, 1]) S.ball([s * 0.15, 0.55, 0.02], [0.14, 0.03, 0.07], m(24), { res: 0.012, ax: ROT_Z(s * 0.4) });   // leaves
    S.ball([0, 1.05, 0.08], [0.17, 0.16, 0.17], glow(30, 27), { res: 0.015 });                        // bud core
    eyes(S, 1.07, 0.24, 0.06, [0.03, 0.04, 0.02]);
  }),
  spirit_bloom_petal: P([[-0.18, -0.05, -0.08], [0.18, 0.5, 0.12]], 0.012, S => {   // hinge at origin, opens about x
    S.ball([0, 0.24, 0], [0.13, 0.25, 0.035], m(30), { res: 0.01 });
    S.ball([0, 0.3, 0.03], [0.05, 0.14, 0.012], m(9), { res: 0.008 });
  }, { slim: 150 }),

  // 9. Shackled (Hollow Grounds): a thin ragged ghost with a cuff on one wrist; ball and chain are parts.
  spirit_shackled: P([[-0.6, -0.1, -0.6], [0.7, 1.6, 0.6]], 0.022, S => {
    S.ball([0, 1.15, 0], [0.32, 0.3, 0.3], PALE, { res: 0.02 });
    S.lathe([0, 0.15, 0], 1.0, t => 0.4 - 0.08 * t, PALE, { res: 0.022 });
    for (let i = 0; i < 8; i++) { const a = i / 8 * Math.PI * 2; S.tube([[Math.cos(a) * 0.36, 0.35, Math.sin(a) * 0.36], [Math.cos(a) * 0.4, 0.02 + (i % 3) * 0.06, Math.sin(a) * 0.4]], 0.1, 0.02, PALE, { res: 0.018 }); }
    eyes(S, 1.18, 0.27, 0.1, [0.06, 0.08, 0.04]);
    S.ball([0, 1.0, 0.29], [0.06, 0.03, 0.02], DARK, { res: 0.01 });                                  // grimace
    S.tube([[0.3, 0.95, 0.05], [0.48, 0.75, 0.15], [0.55, 0.62, 0.2]], 0.08, 0.06, PALE, { res: 0.016 });
    S.torus([0.55, 0.64, 0.2], 0.07, 0.025, m(17), { res: 0.01, ax: [[1, 0, 0], [0, 0, 1], [0, 1, 0]] });  // iron cuff
  }),
  spirit_shackle_ball: P([[-0.25, -0.08, -0.25], [0.25, 0.54, 0.25]], 0.015, S => {
    S.ball([0, 0.2, 0], 0.2, m(4, 3), { res: 0.015 });
    S.torus([0, 0.42, 0], 0.05, 0.018, m(17), { res: 0.008, ax: [[1, 0, 0], [0, 0, 1], [0, 1, 0]] });
    S.ball([0.08, 0.3, 0.14], 0.03, glow(9), { res: 0.008 });                                         // spectral glint
  }, { slim: 250 }),
  spirit_shackle_link: P([[-0.1, -0.12, -0.05], [0.1, 0.12, 0.05]], 0.008, S => {
    S.torus([0, 0, 0], 0.065, 0.018, m(31, 16), { res: 0.006, ax: [[1, 0, 0], [0, 0, 1], [0, 1, 0]] });
  }, { slim: 80 }),

  // 10. Hollow Mask (Mausoleum): a cracked porcelain mask with glowing eye holes; ribbons are instanced and flow.
  spirit_mask: P([[-0.4, -0.45, -0.25], [0.4, 0.5, 0.3]], 0.012, S => {
    S.ball([0, 0, 0], [0.3, 0.38, 0.14], m(9), { res: 0.012 });
    S.ball([0, 0, -0.06], [0.28, 0.36, 0.12], m(9), { res: 0.012, neg: true });
    for (const s of [-1, 1]) {
      S.ball([s * 0.11, 0.08, 0.11], [0.065, 0.045, 0.06], DARK, { res: 0.008, ax: ROT_Z(s * 0.25) });
      S.ball([s * 0.11, 0.08, 0.09], [0.035, 0.025, 0.03], glow(10, 28), { res: 0.008 });
      S.box([s * 0.11, -0.04, 0.125], [0.012, 0.06, 0.006], m(16), { res: 0.006 });                 // painted tear
    }
    S.ball([0, -0.17, 0.115], [0.08, 0.02, 0.02], DARK, { res: 0.008 });
    S.box([0.12, 0.24, 0.1], [0.006, 0.09, 0.01], DARK, { res: 0.005, ax: ROT_Z(0.4) });             // crack
    S.box([0.16, 0.16, 0.11], [0.005, 0.05, 0.01], DARK, { res: 0.005, ax: ROT_Z(-0.3) });
    S.torus([0, 0.3, -0.05], 0.06, 0.015, m(40), { res: 0.006, ax: [[1, 0, 0], [0, 0, 1], [0, 1, 0]] });
  }, { slim: 500 }),
  spirit_mask_ribbon: P([[-0.12, -1.0, -0.6], [0.12, 0.1, 0.1]], 0.01, S => {      // hangs from origin; flat strip
    for (let k = 0; k < 9; k++) S.box([0, -0.05 - k * 0.1, -k * k * 0.006], [0.075 - k * 0.006, 0.065, 0.012], k % 3 === 2 ? m(8) : m(16), { res: 0.008, ax: ROT_X(-k * 0.06) });
  }, { slim: 150 }),
};
