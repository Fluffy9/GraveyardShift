// Level 5 (The Hollow Grounds). The shrine is low and walkable from every side; the banking radius is 1.3 m, so the
// stone ring sits at ~1.5 m. New palette: 41 dead bark, 42 earth, 43 soul teal, 44 blood leaf.
const { m, glow, ROT_X, ROT_Y, ROT_Z } = require('./common.js');

const ST = m(3, 2), LT = m(4, 3), BARK = m(41, 20), EARTH = m(42, 14);

function branch(S, pts, r0, r1, mat = BARK, res = 0.05) { S.tube(pts, r0, r1, mat, { res }); }

module.exports = {
  // Shrine platform: two shallow steps, a ring of short rune posts with teal caps, open on all sides.
  soul_shrine: {
    bounds: [[-2.3, -0.1, -2.3], [2.3, 1.2, 2.3]], tris: 1400, res: 0.045, slim: 1400,
    build(S) {
      S.lathe([0, 0, 0], 0.12, [2.1, 2.05], ST, { res: 0.045 });
      S.lathe([0, 0.12, 0], 0.1, [1.6, 1.55], LT, { res: 0.04 });
      S.torus([0, 0.23, 0], 1.3, 0.05, glow(43, 26), { res: 0.03 });                               // banking ring
      for (let i = 0; i < 8; i++) {
        const a = i / 8 * Math.PI * 2 + Math.PI / 8, x = Math.cos(a) * 1.85, z = Math.sin(a) * 1.85;
        S.box([x, 0.45, z], [0.13, 0.33, 0.13], i % 3 ? ST : LT, { res: 0.03, ax: ROT_Y(-a) });
        S.ball([x, 0.85, z], [0.09, 0.07, 0.09], glow(43, 26), { res: 0.02 });
      }
      for (let i = 0; i < 4; i++) {                                                                  // rune marks on the step
        const a = i * Math.PI / 2;
        S.box([Math.cos(a) * 1.82, 0.13, Math.sin(a) * 1.82], [0.12, 0.012, 0.04], glow(43), { res: 0.012, ax: ROT_Y(-a) });
      }
    }
  },
  // Spirit vessel on the shrine: stone bowl on a short stem with a soul flame. Flame is a separate mesh in code.
  spirit_vessel: {
    bounds: [[-0.6, -0.1, -0.6], [0.6, 1.0, 0.6]], tris: 500, res: 0.025, slim: 500,
    build(S) {
      S.lathe([0, 0, 0], 0.2, [0.35, 0.28], ST, { res: 0.025 });
      S.lathe([0, 0.2, 0], 0.32, [0.13, 0.1], LT, { res: 0.02 });
      S.lathe([0, 0.5, 0], 0.26, t => 0.15 + 0.32 * Math.sin(t * Math.PI / 2), LT, { res: 0.02 });
      S.lathe([0, 0.74, 0], 0.05, [0.44, 0.44], glow(43, 26), { res: 0.02 });                         // pooled soul light
      for (let i = 0; i < 4; i++) { const a = i * Math.PI / 2; S.ball([Math.cos(a) * 0.5, 0.8, Math.sin(a) * 0.5], 0.05, glow(43), { res: 0.012 }); }
    }
  },
  soul_flame: {
    bounds: [[-0.4, -0.3, -0.4], [0.4, 1.1, 0.4]], tris: 200, res: 0.02,
    build(S) {
      S.tube([[0, 0, 0], [0.03, 0.35, 0], [-0.05, 0.65, 0.02], [0.04, 0.95, 0]], 0.26, 0.02, glow(43, 28), { res: 0.02 });
      S.tube([[0.12, 0.05, 0.05], [0.18, 0.4, 0.06]], 0.1, 0.02, glow(26), { res: 0.015 });
      S.tube([[-0.12, 0.05, -0.04], [-0.17, 0.45, -0.05]], 0.1, 0.02, glow(26), { res: 0.015 });
    }
  },
  // Soul orb dropped on banish: a bright core with a short wisp tail.
  soul_orb: {
    bounds: [[-0.3, -0.1, -0.3], [0.3, 0.7, 0.3]], tris: 160, res: 0.015,
    build(S) {
      S.ball([0, 0.3, 0], 0.15, glow(43, 28), { res: 0.012 });
      S.ball([0, 0.3, 0], 0.07, glow(28), { res: 0.01 });
      S.tube([[0, 0.4, -0.05], [0.04, 0.52, -0.1], [-0.02, 0.62, -0.15]], 0.07, 0.01, glow(26), { res: 0.012 });
    }
  },

  // Monumental dead tree: thick twisted trunk, splayed roots, grasping bare branches.
  dead_tree_big: {
    bounds: [[-3.8, -0.6, -3.8], [3.8, 8.0, 3.8]], tris: 1500, res: 0.08, slim: 1500, exportRes: 0.106,
    build(S) {
      branch(S, [[0, 0, 0], [0.2, 1.2, 0.1], [-0.15, 2.4, 0], [0.1, 3.4, -0.1]], 0.55, 0.25, BARK, 0.07);
      for (let i = 0; i < 6; i++) {
        const a = i / 6 * Math.PI * 2 + 0.3;
        branch(S, [[Math.cos(a) * 0.3, 0.4, Math.sin(a) * 0.3], [Math.cos(a) * 1.0, 0.15, Math.sin(a) * 1.0], [Math.cos(a + 0.3) * 1.7, 0.02, Math.sin(a + 0.3) * 1.7]], 0.22, 0.06, BARK, 0.06);
      }
      const limbs = [[1.0, 0.0, 2.6], [1.0, 2.1, 3.0], [0.9, 4.0, 2.8], [0.8, 5.2, 3.3]];
      for (const [r, a, y] of limbs) {
        const x = Math.cos(a), z = Math.sin(a);
        branch(S, [[x * 0.1, y, z * 0.1], [x * r * 1.2, y + 0.9, z * r * 1.2], [x * r * 2.2, y + 1.6, z * r * 2.2 + 0.2], [x * r * 2.6, y + 2.3, z * r * 2.4]], 0.2, 0.06, BARK, 0.05);
        branch(S, [[x * r * 1.2, y + 0.9, z * r * 1.2], [x * r * 1.6 - z * 0.6, y + 1.8, z * r * 1.6 + x * 0.6]], 0.1, 0.055, BARK, 0.04);
      }
      branch(S, [[0.1, 3.4, -0.1], [0.3, 4.6, 0.0], [0.1, 5.8, 0.2]], 0.22, 0.06, BARK, 0.05);
      S.ball([0.2, 1.4, 0.35], [0.12, 0.2, 0.06], m(15), { res: 0.03 });                             // hollow
    }
  },
  dead_tree_small: {
    bounds: [[-1.6, -0.3, -1.6], [1.6, 3.4, 1.6]], tris: 600, res: 0.05, slim: 600,
    build(S) {
      branch(S, [[0, 0, 0], [0.1, 0.9, 0], [-0.1, 1.7, 0.05]], 0.22, 0.1, BARK, 0.045);
      branch(S, [[0, 1.2, 0], [0.7, 1.9, 0.2], [1.2, 2.6, 0.1]], 0.09, 0.02, BARK, 0.035);
      branch(S, [[0, 1.5, 0], [-0.6, 2.2, -0.3], [-0.9, 3.0, -0.2]], 0.08, 0.02, BARK, 0.035);
      branch(S, [[-0.1, 1.7, 0.05], [0.0, 2.6, 0.4], [0.2, 3.2, 0.5]], 0.07, 0.02, BARK, 0.035);
      for (const a of [0.5, 2.6, 4.4]) branch(S, [[0, 0.25, 0], [Math.cos(a) * 0.7, 0.03, Math.sin(a) * 0.7]], 0.1, 0.03, BARK, 0.035);
    }
  },
  // Ruined gate: tall broken arch with one side collapsed.
  ruined_gate: {
    bounds: [[-2.4, -0.1, -0.9], [2.4, 4.6, 1.3]], tris: 1100, res: 0.045, slim: 1100,
    build(S) {
      S.box([-1.7, 1.9, 0], [0.42, 1.9, 0.45], ST, { res: 0.045 });
      S.box([1.7, 1.05, 0], [0.42, 1.05, 0.45], ST, { res: 0.045 });
      S.box([-1.7, 3.95, 0], [0.5, 0.15, 0.52], LT, { res: 0.04 });
      const arc = []; for (let i = 0; i <= 6; i++) { const a = Math.PI - Math.PI * 0.55 * i / 6; arc.push([Math.cos(a) * 1.7, 3.0 + Math.sin(a) * 1.2, 0]); }
      S.tube(arc, 0.3, 0.3, ST, { res: 0.04 });
      for (const [x, z, r] of [[1.4, 0.8, 0.4], [2.0, 0.5, 1.2], [1.0, -0.5, 2.0]]) S.box([x, 0.15, z], [0.3, 0.15, 0.25], ST, { res: 0.04, ax: ROT_Y(r) });
      S.tube([[-1.3, 0.2, 0.47], [-1.4, 1.5, 0.48], [-1.2, 2.8, 0.47]], 0.06, 0.03, glow(16, 31), { res: 0.03 });   // spectral root
      S.box([-1.7, 2.6, 0.46], [0.18, 0.18, 0.02], glow(43), { res: 0.015, ax: ROT_Z(Math.PI / 4) });              // soul rune
    }
  },
  obelisk: {
    bounds: [[-0.8, -0.1, -0.8], [0.8, 3.8, 0.8]], tris: 300, res: 0.04,
    build(S) {
      S.box([0, 0.15, 0], [0.65, 0.15, 0.65], m(2), { res: 0.04 });
      S.box([0, 0.4, 0], [0.48, 0.1, 0.48], ST, { res: 0.04 });
      S.lathe([0, 0.5, 0], 2.8, [0.38, 0.22], LT, { res: 0.04, seg: 4 });
      S.lathe([0, 3.3, 0], 0.35, [0.22, 0.0], LT, { res: 0.03, seg: 4 });
      S.box([0, 2.0, 0.32], [0.08, 0.5, 0.02], glow(43), { res: 0.015 });
    }
  },
  // Open grave: dug pit, dirt mound, headstone, coffin lid propped on the side.
  open_grave: {
    bounds: [[-1.1, -0.1, -1.4], [1.1, 1.3, 1.4]], tris: 600, res: 0.035, slim: 600,
    build(S) {
      S.box([0, 0.06, 0], [0.62, 0.06, 1.05], EARTH, { res: 0.035 });
      S.box([0, 0.1, 0], [0.42, 0.05, 0.85], m(15), { res: 0.03 });
      S.ball([0.75, 0.15, 0.1], [0.32, 0.25, 0.75], EARTH, { res: 0.04 });
      S.box([0, 0.55, -1.15], [0.36, 0.45, 0.1], ST, { res: 0.035 });
      S.box([-0.7, 0.35, 0.3], [0.05, 0.35, 0.8], m(20, 14), { res: 0.03, ax: ROT_Z(-0.4) });
      S.tube([[0.55, 0.3, -0.6], [0.6, 1.2, -0.5]], 0.025, 0.025, m(14), { res: 0.015 });           // shovel
      S.box([0.6, 0.25, -0.62], [0.09, 0.12, 0.02], m(17), { res: 0.015 });
    }
  },
  gravestone_cracked: {
    bounds: [[-0.6, -0.1, -0.4], [0.6, 1.3, 0.4]], tris: 300, res: 0.03, slim: 300,
    build(S) {
      S.box([0, 0.06, 0], [0.45, 0.06, 0.28], m(2), { res: 0.03 });
      S.box([-0.12, 0.45, 0], [0.22, 0.38, 0.11], ST, { res: 0.03, ax: ROT_Z(0.08) });
      S.box([0.22, 0.32, 0], [0.12, 0.25, 0.11], ST, { res: 0.03, ax: ROT_Z(-0.25) });
      S.ball([-0.1, 0.85, 0], [0.24, 0.12, 0.11], ST, { res: 0.03 });
      S.box([0.05, 0.5, 0.12], [0.012, 0.32, 0.012], glow(16, 31), { res: 0.008, ax: ROT_Z(0.3) });  // spirit crack
      S.box([0.45, 0.06, 0.15], [0.1, 0.06, 0.08], ST, { res: 0.02, ax: ROT_Y(0.7) });
    }
  },
  // Collapsed tomb: small crypt with a fallen roof slab.
  collapsed_tomb: {
    bounds: [[-1.7, -0.1, -1.4], [1.7, 2.6, 1.4]], tris: 900, res: 0.045, slim: 900,
    build(S) {
      S.box([0, 0.12, 0], [1.4, 0.12, 1.1], m(2), { res: 0.045 });
      S.box([-1.05, 1.0, 0], [0.25, 0.9, 0.9], ST, { res: 0.045 });
      S.box([1.05, 0.7, -0.2], [0.25, 0.6, 0.7], ST, { res: 0.045 });
      S.box([0, 1.0, -0.85], [1.2, 0.9, 0.2], ST, { res: 0.045 });
      S.box([0.1, 1.5, 0.1], [1.3, 0.12, 1.0], LT, { res: 0.04, ax: ROT_Z(0.35) });                 // slipped roof
      S.box([0, 0.6, -0.62], [0.4, 0.5, 0.02], m(15), { res: 0.02 });                                // dark doorway
      S.box([1.2, 0.18, 0.9], [0.3, 0.15, 0.2], ST, { res: 0.04, ax: ROT_Y(0.6) });
      S.tube([[-1.3, 0.25, 0.9], [-1.25, 1.2, 0.95], [-1.3, 1.9, 0.92]], 0.05, 0.02, glow(16, 31), { res: 0.025 });
    }
  },
  // Spirit bramble: glowing violet roots breaking the ground.
  spirit_bramble: {
    bounds: [[-1.0, -0.1, -1.0], [1.0, 1.2, 1.0]], tris: 500, res: 0.03, slim: 500,
    build(S) {
      for (let i = 0; i < 7; i++) {
        const a = i / 7 * Math.PI * 2, r = 0.5 + (i % 3) * 0.15;
        S.tube([[Math.cos(a) * 0.15, 0.02, Math.sin(a) * 0.15], [Math.cos(a) * r, 0.5 + (i % 2) * 0.3, Math.sin(a) * r], [Math.cos(a + 0.5) * (r + 0.2), 0.9 + (i % 3) * 0.1, Math.sin(a + 0.5) * (r + 0.2)]],
          0.06, 0.012, i % 2 ? glow(16, 31) : m(41), { res: 0.02 });
      }
      for (const [x, z] of [[0.3, 0.2], [-0.4, -0.1], [0.1, -0.45]]) S.ball([x, 0.75, z], 0.05, glow(9), { res: 0.012 });
    }
  },
  // Floating rock for the backdrop: jagged earth chunk with roots hanging below.
  floating_rock: {
    bounds: [[-1.4, -1.6, -1.4], [1.4, 0.8, 1.4]], tris: 400, res: 0.05, slim: 400,
    build(S) {
      S.lathe([0, -1.2, 0], 1.3, t => 0.2 + 1.0 * t, EARTH, { res: 0.05, seg: 6 });
      S.box([0, 0.2, 0], [1.1, 0.15, 0.9], ST, { res: 0.05, ax: ROT_Y(0.4) });
      S.box([0.3, 0.45, -0.2], [0.25, 0.25, 0.2], ST, { res: 0.04 });
      for (const a of [0.4, 2.3, 4.1]) S.tube([[Math.cos(a) * 0.4, -0.8, Math.sin(a) * 0.4], [Math.cos(a) * 0.5, -1.45, Math.sin(a) * 0.45]], 0.05, 0.015, glow(16, 31), { res: 0.02 });
    }
  },
};
