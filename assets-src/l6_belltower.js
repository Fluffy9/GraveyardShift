// Level 6 (The Bell Tower) and the Hollow Warden boss. The bell, clapper and frame are separate so the bell can swing;
// the boss is split into body / halo / lantern / chain so each can animate. New palette: 45 moon stone, 46 night sky.
const { m, glow, ROT_X, ROT_Y, ROT_Z } = require('./common.js');

const STN = m(45, 3), DST = m(3, 2), BRZ = m(40, 34), IRON = m(17);
const HOOK = [[1, 0, 0], [0, 0, 1], [0, 1, 0]];

module.exports = {
  // Great Bell: bronze, origin at the crown (hangs below y = 0 in code it is placed at the pivot).
  great_bell: {
    bounds: [[-1.75, -0.2, -1.75], [1.75, 3.45, 1.75]], tris: 900, res: 0.04, slim: 900,
    build(S) {
      S.lathe([0, 0.25, 0], 2.4, t => 1.45 - 0.75 * Math.pow(t, 0.7) + (t < 0.08 ? 0.08 : 0), BRZ, { res: 0.04 });
      S.lathe([0, 0.12, 0], 0.18, [1.52, 1.5], m(40), { res: 0.03 });                               // lip band
      S.lathe([0, 1.0, 0], 0.08, [1.12, 1.1], m(40), { res: 0.025 });
      S.lathe([0, 2.62, 0], 0.4, [0.5, 0.3], BRZ, { res: 0.03 });                                    // crown
      S.torus([0, 3.0, 0], 0.22, 0.07, BRZ, { res: 0.02, ax: HOOK });
      S.box([0, 1.6, 1.0], [0.22, 0.22, 0.02], m(40), { res: 0.02, ax: [[0.7, 0.7, 0], [-0.7, 0.7, 0], [0, 0, 1]] }); // emblem
    }
  },
  bell_clapper: {
    bounds: [[-0.3, -0.1, -0.3], [0.3, 2.3, 0.3]], tris: 150, res: 0.025,
    build(S) {
      S.tube([[0, 0.35, 0], [0, 2.2, 0]], 0.05, 0.05, IRON, { res: 0.02 });
      S.ball([0, 0.25, 0], 0.22, IRON, { res: 0.02 });
    }
  },
  // Suspension frame: two timber-and-iron A-frames with a beam and hanging chains. Front faces +z.
  bell_frame: {
    bounds: [[-2.8, -0.3, -1.3], [2.8, 5.6, 1.3]], tris: 900, res: 0.056, slim: 900,
    build(S) {
      const wood = m(20, 14);
      for (const x of [-2.3, 2.3]) {
        S.tube([[x, 0, -0.9], [x, 5.0, 0]], 0.16, 0.13, wood, { res: 0.04 });
        S.tube([[x, 0, 0.9], [x, 5.0, 0]], 0.16, 0.13, wood, { res: 0.04 });
        S.box([x, 0.12, 0], [0.3, 0.12, 1.05], DST, { res: 0.04 });
        S.tube([[x, 2.2, -0.52], [x, 2.2, 0.52]], 0.08, 0.08, wood, { res: 0.03 });
      }
      S.box([0, 5.05, 0], [2.6, 0.18, 0.2], wood, { res: 0.04 });
      for (const x of [-1.2, 0, 1.2]) S.box([x, 5.05, 0], [0.05, 0.22, 0.24], IRON, { res: 0.02 });
      for (const x of [-0.25, 0.25]) for (let i = 0; i < 4; i++) S.torus([x, 4.75 - i * 0.18, 0], 0.08, 0.025, IRON, { res: 0.012, ax: i % 2 ? HOOK : [[0, 0, 1], [0, 1, 0], [1, 0, 0]] });
    }
  },
  // Tower wall bay with a tall arched window to the moonlit night (north side), 3.2 m, front +z.
  tower_window: {
    bounds: [[-1.7, -0.1, -0.6], [1.7, 5.0, 0.6]], tris: 700, res: 0.04, slim: 700,
    build(S) {
      S.box([0, 2.35, -0.2], [1.6, 2.35, 0.35], STN, { res: 0.045 });
      S.box([0, 4.7, -0.15], [1.66, 0.12, 0.42], DST, { res: 0.04 });
      S.box([0, 0.15, 0], [1.66, 0.15, 0.42], DST, { res: 0.04 });
      S.box([0, 2.0, 0.17], [0.7, 1.3, 0.02], m(46, 16), { res: 0.02 });                             // sky through the opening
      S.ball([0, 3.3, 0.17], [0.7, 0.6, 0.02], m(46, 16), { res: 0.02 });
      S.ball([0.3, 3.1, 0.19], 0.14, glow(5, 9), { res: 0.015 });                                     // moon glimpse
      const arc = []; for (let i = 0; i <= 10; i++) { const a = Math.PI * i / 10; arc.push([Math.cos(a) * 0.82, 3.3 + Math.sin(a) * 0.72, 0.22]); }
      S.tube(arc, 0.12, 0.12, DST, { res: 0.03 });
      for (const x of [-0.82, 0.82]) S.box([x, 2.0, 0.22], [0.12, 1.3, 0.1], DST, { res: 0.03 });
      S.box([0, 0.65, 0.3], [0.9, 0.06, 0.15], DST, { res: 0.025 });
      S.tube([[-1.4, 0.3, 0.2], [-1.3, 1.5, 0.22], [-1.45, 2.6, 0.2]], 0.07, 0.03, m(44), { res: 0.025 });  // red ivy
    }
  },
  // Broken clock face set into a wall bay.
  broken_clock: {
    bounds: [[-1.7, -0.1, -0.6], [1.7, 5.0, 0.7]], tris: 800, res: 0.04, slim: 800,
    build(S) {
      S.box([0, 2.35, -0.2], [1.6, 2.35, 0.35], STN, { res: 0.045 });
      S.box([0, 4.7, -0.15], [1.66, 0.12, 0.42], DST, { res: 0.04 });
      S.box([0, 0.15, 0], [1.66, 0.15, 0.42], DST, { res: 0.04 });
      S.lathe([0, 2.6, 0.15], 0.1, [1.05, 1.05], DST, { res: 0.03, ax: ROT_X(Math.PI / 2) });
      S.lathe([0, 2.6, 0.24], 0.04, [0.92, 0.92], m(5, 35), { res: 0.025, ax: ROT_X(Math.PI / 2) });
      for (let i = 0; i < 12; i++) { const a = i / 12 * Math.PI * 2; S.box([Math.cos(a) * 0.78, 2.6 + Math.sin(a) * 0.78, 0.3], [0.04, 0.04, 0.02], IRON, { res: 0.012 }); }
      S.box([0.15, 2.85, 0.31], [0.03, 0.3, 0.02], IRON, { res: 0.012, ax: ROT_Z(-0.5) });
      S.box([-0.2, 2.45, 0.31], [0.025, 0.42, 0.02], IRON, { res: 0.012, ax: ROT_Z(2.3) });
      S.box([0.45, 2.2, 0.27], [0.35, 0.25, 0.04], m(15), { res: 0.02, ax: ROT_Z(0.6) });              // smashed section
      S.lathe([0, 2.6, 0.3], 0.05, [0.08, 0.08], m(40), { res: 0.012, ax: ROT_X(Math.PI / 2) });
    }
  },
  // Crenellated parapet bay (rooftop edge), 3.2 m.
  parapet: {
    bounds: [[-1.7, -0.1, -0.45], [1.7, 1.45, 0.45]], tris: 500, res: 0.04, slim: 500,
    build(S) {
      S.box([0, 0.4, 0], [1.6, 0.4, 0.32], STN, { res: 0.04 });
      S.box([0, 0.83, 0], [1.66, 0.05, 0.36], DST, { res: 0.03 });
      for (const x of [-1.2, 0, 1.2]) S.box([x, 1.1, 0], [0.32, 0.25, 0.3], STN, { res: 0.035 });
      S.ball([0.6, 0.86, 0.2], [0.3, 0.06, 0.15], m(12), { res: 0.03 });
    }
  },
  parapet_broken: {
    bounds: [[-1.75, -0.1, -0.95], [1.75, 1.45, 0.95]], tris: 500, res: 0.04, slim: 500,
    build(S) {
      S.box([-0.8, 0.4, 0], [0.8, 0.4, 0.32], STN, { res: 0.04 });
      S.box([1.0, 0.2, 0], [0.55, 0.2, 0.32], STN, { res: 0.04 });
      S.box([-0.8, 0.83, 0], [0.85, 0.05, 0.36], DST, { res: 0.03 });
      S.box([-1.2, 1.1, 0], [0.32, 0.25, 0.3], STN, { res: 0.035 });
      for (const [x, z, r] of [[0.6, 0.55, 0.4], [1.2, 0.45, 1.3], [0.3, -0.5, 2.2]]) S.box([x, 0.12, z], [0.25, 0.12, 0.18], STN, { res: 0.035, ax: ROT_Y(r) });
    }
  },
  // Signal brazier: iron bowl on a stone stand, lit.
  signal_brazier: {
    bounds: [[-0.6, -0.1, -0.6], [0.6, 2.0, 0.6]], tris: 500, res: 0.03, slim: 500,
    build(S) {
      S.box([0, 0.2, 0], [0.38, 0.2, 0.38], DST, { res: 0.03 });
      S.lathe([0, 0.4, 0], 0.7, [0.14, 0.1], STN, { res: 0.025 });
      S.lathe([0, 1.1, 0], 0.3, t => 0.18 + 0.3 * t, IRON, { res: 0.025 });
      for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2; S.box([Math.cos(a) * 0.5, 1.4, Math.sin(a) * 0.5], [0.04, 0.09, 0.04], IRON, { res: 0.012 }); }
      S.tube([[0, 1.3, 0], [0.04, 1.6, 0], [-0.04, 1.85, 0.02]], 0.3, 0.02, glow(37, 36), { res: 0.02 });
      S.tube([[0.15, 1.32, 0.1], [0.2, 1.62, 0.12]], 0.12, 0.02, glow(6), { res: 0.015 });
    }
  },
  gargoyle: {
    bounds: [[-0.6, -0.1, -0.6], [0.6, 1.4, 0.8]], tris: 600, res: 0.025, slim: 600,
    build(S) {
      S.box([0, 0.15, 0], [0.4, 0.15, 0.4], DST, { res: 0.03 });
      S.ball([0, 0.6, 0], [0.28, 0.32, 0.3], STN, { res: 0.025 });                                    // crouched body
      S.ball([0, 0.95, 0.22], [0.17, 0.16, 0.18], STN, { res: 0.02 });                                // head
      for (const s of [-1, 1]) {
        S.tube([[s * 0.1, 1.08, 0.2], [s * 0.18, 1.25, 0.1]], 0.04, 0.01, STN, { res: 0.012 });       // horns
        S.ball([s * 0.3, 0.85, -0.15], [0.08, 0.32, 0.22], STN, { res: 0.02, ax: ROT_Z(s * 0.4) });  // folded wings
        S.ball([s * 0.07, 0.98, 0.37], 0.025, glow(36), { res: 0.01 });                               // eyes
        S.tube([[s * 0.18, 0.35, 0.2], [s * 0.2, 0.32, 0.38]], 0.05, 0.04, STN, { res: 0.015 });
      }
    }
  },
  bell_gear: {
    bounds: [[-0.85, -0.1, -0.85], [1.3, 0.4, 0.85]], tris: 300, res: 0.025,
    build(S) {
      S.lathe([0, 0, 0], 0.12, [0.55, 0.55], BRZ, { res: 0.02 });
      for (let i = 0; i < 10; i++) { const a = i / 10 * Math.PI * 2; S.box([Math.cos(a) * 0.62, 0.06, Math.sin(a) * 0.62], [0.08, 0.06, 0.06], BRZ, { res: 0.015, ax: ROT_Y(-a) }); }
      S.lathe([0, 0.1, 0], 0.08, [0.15, 0.15], IRON, { res: 0.015 });
      S.box([0.9, 0.05, 0.2], [0.25, 0.05, 0.12], BRZ, { res: 0.02, ax: ROT_Y(0.7) });                // bell fragment
    }
  },

  // ---------------- The Hollow Warden ----------------
  // Body: pointed hood with a void face and two eyes, tapered floating robe, tattered cloak panels. Origin at the
  // robe tip (hover height is set in code). ~3.6 m from tip to hood point; with the halo ~4.4 m.
  warden_body: {
    bounds: [[-1.4, -0.1, -1.0], [1.4, 3.9, 1.1]], tris: 1100, res: 0.035, slim: 1000, slimErr: 0.03,
    build(S) {
      const cloth = m(1, 16), dark = m(15, 1);
      S.lathe([0, 0.25, 0], 2.25, t => 0.12 + 0.62 * Math.pow(t, 0.8) - 0.05 * Math.sin(t * 7), cloth, { res: 0.035 });
      S.lathe([0, 2.45, 0], 0.55, t => 0.74 - 0.18 * t, cloth, { res: 0.03 });                       // shoulders
      S.ball([0, 3.1, 0], [0.52, 0.55, 0.5], cloth, { res: 0.03 });                                   // hood
      S.tube([[0, 3.4, -0.1], [0, 3.65, -0.25], [0, 3.85, -0.45]], 0.3, 0.02, cloth, { res: 0.025 }); // hood point
      S.ball([0, 3.0, 0.3], [0.33, 0.36, 0.22], m(15), { res: 0.02 });                                // void face
      for (const s of [-1, 1]) S.ball([s * 0.12, 3.05, 0.5], [0.06, 0.035, 0.03], glow(9, 16), { res: 0.01 });
      for (let i = 0; i < 9; i++) {                                                                   // tattered hem strips
        const a = i / 9 * Math.PI * 2, r = 0.45;
        S.tube([[Math.cos(a) * r, 1.2, Math.sin(a) * r], [Math.cos(a) * (r + 0.1), 0.6, Math.sin(a) * (r + 0.1)], [Math.cos(a) * (r * 0.6), 0.05 + (i % 3) * 0.15, Math.sin(a) * (r * 0.6)]],
          0.16, 0.03, i % 2 ? cloth : dark, { res: 0.025 });
      }
      for (const s of [-1, 1]) {                                                                      // cloak panels / sleeves
        S.tube([[s * 0.6, 2.7, 0], [s * 1.0, 2.2, 0.05], [s * 1.15, 1.4, 0.1], [s * 1.05, 0.8, 0.05]], 0.24, 0.05, cloth, { res: 0.03 });
        S.ball([s * 1.08, 1.6, 0.18], [0.1, 0.12, 0.08], m(15), { res: 0.015 });                      // empty sleeve
      }
      S.torus([0, 2.35, 0], 0.62, 0.06, BRZ, { res: 0.02 });                                          // bronze collar band
      S.box([0, 2.0, 0.6], [0.14, 0.14, 0.03], glow(9, 31), { res: 0.012, ax: [[0.7, 0.7, 0], [-0.7, 0.7, 0], [0, 0, 1]] }); // sigil
    }
  },
  // Segmented halo: eight bronze segments with gaps (keeps negative space between halo and hood). Faces +z.
  warden_halo: {
    bounds: [[-1.2, -1.2, -0.25], [1.2, 1.2, 0.25]], tris: 500, res: 0.025, slim: 400, slimErr: 0.03,
    build(S) {
      for (let i = 0; i < 8; i++) {
        const a0 = i / 8 * Math.PI * 2 + 0.08, a1 = (i + 1) / 8 * Math.PI * 2 - 0.08, pts = [];
        for (let k = 0; k <= 4; k++) { const a = a0 + (a1 - a0) * k / 4; pts.push([Math.cos(a) * 0.95, Math.sin(a) * 0.95, 0]); }
        S.tube(pts, 0.09, 0.09, BRZ, { res: 0.02 });
        const am = (a0 + a1) / 2;
        S.box([Math.cos(am) * 1.07, Math.sin(am) * 1.07, 0], [0.07, 0.07, 0.07], m(40), { res: 0.015, ax: [[Math.cos(am), Math.sin(am), 0], [-Math.sin(am), Math.cos(am), 0], [0, 0, 1]] });
      }
    }
  },
  // Warden lantern (shared mesh, hangs from a chain end). Origin at the top ring.
  warden_lantern: {
    bounds: [[-0.4, -1.05, -0.4], [0.4, 0.2, 0.4]], tris: 300, res: 0.02, slim: 300, slimErr: 0.04,
    build(S) {
      S.torus([0, 0.05, 0], 0.08, 0.025, BRZ, { res: 0.012, ax: HOOK });
      S.lathe([0, -0.25, 0], 0.22, [0.08, 0.28], BRZ, { res: 0.018 });
      S.box([0, -0.55, 0], [0.22, 0.28, 0.22], glow(9, 31), { res: 0.018 });
      for (const [x, z] of [[-0.22, -0.22], [0.22, -0.22], [-0.22, 0.22], [0.22, 0.22]]) S.box([x, -0.55, z], [0.035, 0.3, 0.035], BRZ, { res: 0.012 });
      S.lathe([0, -0.9, 0], 0.08, [0.27, 0.18], BRZ, { res: 0.015 });
      S.lathe([0, -0.98, 0], 0.06, [0.06, 0.01], BRZ, { res: 0.012 });
    }
  },
  // One oversized chain link (instanced along the chain in code).
  warden_link: {
    bounds: [[-0.32, -0.52, -0.14], [0.32, 0.52, 0.14]], tris: 120, res: 0.02,
    build(S) {
      S.tube([[-0.16, -0.24, 0], [-0.16, 0.24, 0]], 0.06, 0.06, m(31, 16), { res: 0.015 });
      S.tube([[0.16, -0.24, 0], [0.16, 0.24, 0]], 0.06, 0.06, m(31, 16), { res: 0.015 });
      S.torus([0, 0.24, 0], 0.16, 0.06, m(31, 16), { res: 0.015, ax: HOOK });
      S.torus([0, -0.24, 0], 0.16, 0.06, m(31, 16), { res: 0.015, ax: HOOK });
    }
  },
};
