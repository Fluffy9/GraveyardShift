// Level 2 (Forgotten Gardens). Portal arches straddle the east/west wrap aperture (|z| <= 2.5 m), so the arch opening
// is 5.4 m wide and the portal membrane is decorative (no collision). Everything else dresses the edges.
// New palette: 24 leaf green, 25 deep green, 26 teal, 27 rose, 28 pale glass, 29 water, 30 blossom, 31 portal violet.
const { m, glow, ROT_X, ROT_Y, ROT_Z } = require('./common.js');

// a few blooms on a surface
function blooms(S, pts, cols = [27, 30, 5]) {
  pts.forEach(([x, y, z], i) => S.ball([x, y, z], 0.09, m(cols[i % cols.length]), { res: 0.03 }));
}

module.exports = {
  // Twin portal arch. Front faces +z; the walkable opening spans x in [-2.7, 2.7].
  portal_arch: {
    bounds: [[-3.7, -0.1, -0.8], [3.7, 4.25, 0.8]], tris: 1600, res: 0.05, slim: 1600, 
    build(S) {
      const st = m(4, 3), dk = m(3, 2);
      for (const s of [-1, 1]) {
        S.box([s * 3.15, 0.15, 0], [0.5, 0.15, 0.55], m(2), { res: 0.04 });
        S.box([s * 3.15, 1.45, 0], [0.38, 1.2, 0.42], st, { res: 0.04 });
        S.box([s * 3.15, 2.7, 0], [0.46, 0.08, 0.5], dk, { res: 0.04 });
        S.lathe([s * 3.15, 2.78, 0], 0.35, [0.2, 0.06], st, { res: 0.03 });
        S.ball([s * 3.15, 3.2, 0], 0.14, glow(31, 16), { res: 0.025 });                       // spirit flame finial
        // ivy up the posts, with flowers
        S.tube([[s * 2.85, 0.2, 0.45], [s * 2.95, 1.0, 0.46], [s * 2.8, 1.8, 0.45], [s * 2.6, 2.6, 0.4]], 0.07, 0.04, m(24), { res: 0.025 });
        S.ball([s * 3.4, 0.5, 0.44], [0.3, 0.32, 0.1], m(25), { res: 0.03 });
        blooms(S, [[s * 2.88, 0.9, 0.52], [s * 2.75, 1.9, 0.5], [s * 3.5, 0.6, 0.53]]);
      }
      // segmental arch band over the opening
      const arc = [];
      for (let i = 0; i <= 14; i++) { const t = i / 14, x = -3.15 + 6.3 * t; arc.push([x, 2.75 + 0.85 * Math.sin(Math.PI * t), 0]); }
      S.tube(arc, 0.32, 0.32, st, { res: 0.04 });
      S.box([0, 3.65, 0.2], [0.22, 0.24, 0.12], m(4), { res: 0.03 });                          // keystone
      S.ball([0, 3.65, 0.32], 0.1, glow(31, 9), { res: 0.02 });
      S.tube(arc.map(([x, y]) => [x * 0.98, y + 0.25, 0.28]), 0.08, 0.06, m(24), { res: 0.03 }); // ivy along the top
      blooms(S, [[-1.6, 3.48, 0.38], [0.8, 3.66, 0.36], [2.1, 3.3, 0.38], [-2.6, 3.05, 0.36]]);
      // portal membrane: deep violet field with bright concentric rings and a swirl
      S.box([0, 1.5, -0.02], [2.72, 1.48, 0.035], m(31, 16), { res: 0.03 });
      for (const [r, c] of [[1.25, 16], [0.85, 9], [0.45, 10]])
        S.torus([0, 1.45, 0.04], r, 0.09, glow(c), { res: 0.025, ax: [[1, 0, 0], [0, 0, 1], [0, 1, 0]] });
      const sw = [];
      for (let i = 0; i <= 18; i++) { const t = i / 18, a = t * Math.PI * 3.2, r = 0.2 + 1.9 * t; sw.push([Math.cos(a) * r, 1.45 + Math.sin(a) * r * 0.62, 0.05]); }
      S.tube(sw, 0.05, 0.1, glow(9, 31), { res: 0.025 });
    }
  },

  // Victorian glasshouse: octagonal glass hall with a dome, lit from inside. Front faces +z.
  conservatory: {
    bounds: [[-3.9, -0.1, -3.1], [3.9, 6.0, 3.4]], tris: 2600, res: 0.09, slim: 2600, exportRes: 0.09, 
    build(S) {
      const iron = m(17), st = m(3, 2);
      S.box([0, 0.2, 0], [3.5, 0.2, 2.7], m(2), { res: 0.07 });
      S.box([0, 0.55, 0], [3.2, 0.18, 2.4], st, { res: 0.07 });
      S.box([0, 1.85, 0], [3.0, 1.15, 2.2], glow(6, 22), { res: 0.07 });                       // lit glass walls
      S.lathe([0, 3.0, 0], 2.0, t => 1.6 * Math.cos(t * Math.PI / 2) + 0.05, m(28), { res: 0.07 });          // glass dome (cool, unlit)
      S.lathe([0, 3.0, 0], 0.5, [1.68, 1.62], glow(6, 22), { res: 0.06 });                              // lit drum under the dome
      S.box([0, 3.0, 0], [2.95, 0.06, 2.15], m(26, 25), { res: 0.05 });                         // glass roof deck
      S.lathe([0, 4.9, 0], 0.6, [0.18, 0.05], iron, { res: 0.04 });
      S.ball([0, 5.55, 0], 0.12, iron, { res: 0.03 });
      // iron framing: posts around the hall, ribs over the dome, eave band
      for (let i = 0; i <= 6; i++) {
        const x = -3.0 + i;
        for (const z of [-2.22, 2.22]) S.box([x, 1.85, z], [0.06, 1.18, 0.06], iron, { res: 0.04 });
      }
      for (let i = 0; i <= 4; i++) { const z = -2.2 + i * 1.1; for (const x of [-3.02, 3.02]) S.box([x, 1.85, z], [0.06, 1.18, 0.06], iron, { res: 0.04 }); }
      for (const z of [-2.25, 2.25]) S.box([0, 3.04, z], [3.1, 0.09, 0.07], iron, { res: 0.04 });
      for (const x of [-3.05, 3.05]) S.box([x, 3.04, 0], [0.07, 0.09, 2.3], iron, { res: 0.04 });
      S.box([0, 1.85, 0], [3.06, 0.05, 2.26], iron, { res: 0.04 });
      for (let i = 0; i < 8; i++) {
        const a = i / 8 * Math.PI * 2, pts = [];
        for (let k = 0; k <= 6; k++) { const t = k / 6, r = 1.6 * Math.cos(t * Math.PI / 2) + 0.09; pts.push([Math.cos(a) * r, 3.0 + 2.0 * t, Math.sin(a) * r]); }
        S.tube(pts, 0.06, 0.05, iron, { res: 0.04 });
      }
      // porch with door and steps
      S.box([0, 1.6, 2.45], [0.95, 1.4, 0.3], glow(6, 22), { res: 0.05 });
      S.box([0, 3.1, 2.45], [1.05, 0.1, 0.36], iron, { res: 0.04 });
      for (const x of [-0.95, 0, 0.95]) S.box([x, 1.6, 2.76], [0.06, 1.4, 0.06], iron, { res: 0.04 });
      S.box([0, 1.25, 2.77], [0.5, 1.0, 0.03], m(20), { res: 0.03 });
      S.box([0, 0.12, 3.0], [1.2, 0.12, 0.3], st, { res: 0.05 });
      // plants pressing on the glass
      S.ball([-2.2, 1.2, 1.9], [0.5, 0.7, 0.3], m(24, 25), { res: 0.06 });
      S.ball([2.3, 1.0, 1.95], [0.45, 0.55, 0.28], m(25, 24), { res: 0.06 });
      blooms(S, [[-2.0, 1.6, 2.2], [2.5, 1.3, 2.22], [-2.5, 0.9, 2.2]]);
    }
  },

  // Cracked two-tier fountain.
  fountain: {
    bounds: [[-1.5, -0.1, -1.5], [1.5, 2.2, 1.5]], tris: 1100, res: 0.035, slim: 1100,
    build(S) {
      const st = m(4, 3), dk = m(2);
      S.lathe([0, 0, 0], 0.45, [1.35, 1.32], st, { res: 0.04 });                                // basin wall
      S.lathe([0, 0.12, 0], 0.4, [1.18, 1.18], m(29), { res: 0.04, neg: true });
      S.lathe([0, 0.05, 0], 0.32, [1.16, 1.16], m(29, 26), { res: 0.04 });                       // water
      S.torus([0, 0.47, 0], 1.27, 0.09, m(4), { res: 0.03 });                                    // rim
      S.lathe([0, 0.35, 0], 0.9, [0.22, 0.14], st, { res: 0.03 });                                // column
      S.lathe([0, 1.2, 0], 0.22, t => 0.15 + 0.55 * t, st, { res: 0.03 });                       // upper bowl
      S.lathe([0, 1.3, 0], 0.12, [0.6, 0.6], m(28, 26), { res: 0.03 });
      S.lathe([0, 1.42, 0], 0.45, [0.1, 0.06], st, { res: 0.025 });
      S.ball([0, 1.95, 0], [0.12, 0.16, 0.12], m(4), { res: 0.02 });
      S.box([0.95, 0.3, 0.75], [0.04, 0.2, 0.2], dk, { res: 0.02, neg: true, ax: ROT_Y(0.7) });  // crack
      S.box([0.98, 0.07, 1.05], [0.18, 0.07, 0.12], st, { res: 0.03, ax: ROT_Y(0.4) });           // fallen chunk
      for (const [x, z] of [[-0.6, 0.5], [0.3, -0.7], [0.55, 0.35]]) S.lathe([x, 0.36, z], 0.02, [0.16, 0.16], m(24), { res: 0.02 }); // lily pads
      S.ball([-0.6, 0.42, 0.5], 0.06, m(30), { res: 0.02 });
      S.ball([-1.1, 0.3, -0.75], [0.25, 0.3, 0.2], m(12), { res: 0.03 });
    }
  },

  // Weeping angel: kneeling mourner with folded wings, face hidden in hands.
  weeping_angel: {
    bounds: [[-0.9, -0.05, -0.8], [0.9, 2.4, 0.7]], tris: 1300, res: 0.03, slim: 1300, exportRes: 0.03,
    build(S) {
      const st = m(4, 3), dk = m(3, 2);
      S.box([0, 0.12, 0], [0.5, 0.12, 0.45], m(2), { res: 0.04 });
      S.box([0, 0.4, 0], [0.4, 0.17, 0.36], dk, { res: 0.04 });
      S.box([0, 0.6, 0], [0.46, 0.04, 0.42], m(3), { res: 0.03 });
      S.lathe([0, 0.64, 0], 1.0, t => 0.33 - 0.17 * t + 0.03 * Math.sin(t * 10), st, { res: 0.03 });
      S.ball([0, 1.78, 0.1], [0.15, 0.17, 0.15], st, { res: 0.025 });                            // bowed head
      S.tube([[-0.2, 1.45, 0.05], [-0.12, 1.65, 0.24], [-0.04, 1.78, 0.25]], 0.07, 0.05, st, { res: 0.02 });
      S.tube([[0.2, 1.45, 0.05], [0.12, 1.65, 0.24], [0.04, 1.78, 0.25]], 0.07, 0.05, st, { res: 0.02 });
      S.ball([0, 1.78, 0.27], [0.1, 0.09, 0.06], st, { res: 0.02 });                              // hands over face
      for (const s of [-1, 1]) {                                                                 // folded wings
        S.ball([s * 0.34, 1.5, -0.2], [0.16, 0.55, 0.2], st, { res: 0.03, ax: ROT_Z(s * 0.25) });
        S.ball([s * 0.5, 1.9, -0.22], [0.12, 0.35, 0.16], st, { res: 0.03, ax: ROT_Z(s * 0.5) });
        S.tube([[s * 0.4, 2.1, -0.2], [s * 0.6, 2.15, -0.25], [s * 0.7, 1.95, -0.3]], 0.09, 0.03, st, { res: 0.025 });
      }
      S.ball([0.3, 0.62, 0.32], [0.18, 0.05, 0.12], m(12), { res: 0.03 });
      S.tube([[-0.35, 0.65, 0.3], [-0.3, 1.0, 0.32], [-0.36, 1.3, 0.28]], 0.04, 0.025, m(24), { res: 0.02 });
      blooms(S, [[-0.33, 0.9, 0.36], [-0.34, 1.2, 0.33]]);
    }
  },

  // Stone balustrade, one 3.2 m bay between fence pillars (same rhythm as the churchyard fence).
  balustrade: {
    bounds: [[-1.7, -0.05, -0.35], [1.7, 1.15, 0.35]], tris: 700, res: 0.03, slim: 700, 
    build(S) {
      const st = m(4, 3);
      S.box([0, 0.1, 0], [1.6, 0.1, 0.24], m(3, 2), { res: 0.035 });
      S.box([0, 0.95, 0], [1.6, 0.08, 0.22], st, { res: 0.035 });
      for (let i = 0; i < 7; i++) S.lathe([-1.29 + i * 0.43, 0.2, 0], 0.67, t => 0.06 + 0.07 * Math.sin(t * Math.PI * 1.1), st, { res: 0.022 });
      S.tube([[-1.4, 0.98, 0.2], [-0.8, 0.9, 0.24], [-0.4, 0.7, 0.24]], 0.05, 0.03, m(24), { res: 0.02 });
      S.ball([-1.1, 1.03, 0.05], [0.3, 0.07, 0.18], m(12), { res: 0.03 });
    }
  },

  // Weeping willow: thick trunk, drooping curtains of leaves.
  willow: {
    bounds: [[-2.9, -0.45, -2.9], [2.9, 4.9, 2.9]], tris: 1400, res: 0.08, slim: 1400, 
    build(S) {
      const bark = m(20, 14);
      S.tube([[0, 0, 0], [0.15, 1.4, 0.05], [-0.1, 2.6, 0]], 0.36, 0.2, bark, { res: 0.06 });
      S.tube([[0, 2.2, 0], [1.0, 3.2, 0.3]], 0.14, 0.07, bark, { res: 0.05 });
      S.tube([[0, 2.4, 0], [-0.9, 3.4, -0.4]], 0.14, 0.07, bark, { res: 0.05 });
      S.ball([0, 3.6, 0], [1.9, 1.0, 1.9], m(24, 25), { res: 0.08 });
      for (let i = 0; i < 14; i++) {
        const a = i / 14 * Math.PI * 2 + (i % 2) * 0.2, r = 1.55 + (i % 3) * 0.2;
        const top = 3.6, bot = 0.9 + (i % 4) * 0.35;
        S.tube([[Math.cos(a) * r * 0.85, top, Math.sin(a) * r * 0.85], [Math.cos(a) * r, (top + bot) / 2 + 0.3, Math.sin(a) * r], [Math.cos(a) * (r + 0.15), bot, Math.sin(a) * (r + 0.15)]],
          0.36, 0.14, m(i % 3 ? 24 : 25), { res: 0.07 });
      }
    }
  },

  // Clipped topiary in a stone pot.
  topiary: {
    bounds: [[-0.6, -0.05, -0.6], [0.6, 2.1, 0.6]], tris: 500, res: 0.035,
    build(S) {
      S.lathe([0, 0, 0], 0.5, t => 0.32 + 0.12 * t, m(3, 2), { res: 0.03 });
      S.lathe([0, 0.48, 0], 0.06, [0.46, 0.46], m(4), { res: 0.025 });
      S.tube([[0, 0.5, 0], [0, 0.85, 0]], 0.06, 0.05, m(20), { res: 0.025 });
      S.ball([0, 1.05, 0], 0.34, m(24, 25), { res: 0.035 });
      S.ball([0, 1.55, 0], 0.26, m(24, 25), { res: 0.03 });
      S.ball([0, 1.92, 0], 0.15, m(24), { res: 0.025 });
    }
  },

  // Box hedge module, 2.4 m long, with a few roses.
  hedge: {
    bounds: [[-1.4, -0.05, -0.55], [1.4, 1.2, 0.55]], tris: 450, res: 0.05, slim: 450, 
    build(S) {
      S.box([0, 0.55, 0], [1.2, 0.5, 0.36], m(25, 24), { res: 0.05, k: 0.15 });
      for (const x of [-0.8, 0, 0.8]) S.ball([x, 1.0, 0], [0.45, 0.16, 0.38], m(24), { res: 0.05 });
      blooms(S, [[-0.9, 0.75, 0.38], [-0.2, 0.95, 0.36], [0.6, 0.6, 0.38], [1.0, 0.9, 0.34]], [27, 27, 30]);
    }
  },

  // Overgrown rose bush.
  rosebush: {
    bounds: [[-0.75, -0.05, -0.75], [0.75, 1.1, 0.75]], tris: 450, res: 0.04,
    build(S) {
      S.ball([0, 0.45, 0], [0.62, 0.45, 0.55], m(25, 24), { res: 0.045 });
      S.ball([0.25, 0.7, 0.15], [0.35, 0.3, 0.3], m(24), { res: 0.04 });
      blooms(S, [[0.3, 0.95, 0.3], [-0.35, 0.75, 0.4], [0.5, 0.55, 0.42], [-0.1, 0.88, -0.35], [-0.5, 0.5, -0.2], [0.05, 0.6, 0.55]], [27, 30, 27]);
    }
  },

  // Iron-and-wood garden bench. Front faces +z.
  bench: {
    bounds: [[-1.0, -0.05, -0.5], [1.0, 1.0, 0.5]], tris: 500, res: 0.025, slim: 500, 
    build(S) {
      const iron = m(17), wood = m(14, 20);
      for (const x of [-0.8, 0.8]) {
        S.tube([[x, 0.02, 0.28], [x, 0.42, 0.24], [x, 0.42, -0.2], [x, 0.9, -0.3]], 0.04, 0.04, iron, { res: 0.02 });
        S.tube([[x, 0.02, -0.22], [x, 0.42, -0.2]], 0.04, 0.04, iron, { res: 0.02 });
        S.tube([[x, 0.42, 0.24], [x, 0.6, 0.22], [x + Math.sign(x) * 0.08, 0.62, 0.0]], 0.035, 0.03, iron, { res: 0.02 });
      }
      for (const z of [-0.12, 0.02, 0.16]) S.box([0, 0.45, z], [0.92, 0.025, 0.055], wood, { res: 0.02 });
      for (const y of [0.62, 0.78]) S.box([0, y, -0.25 - (y - 0.6) * 0.15], [0.92, 0.05, 0.022], wood, { res: 0.02 });
      S.ball([0.6, 0.5, 0.1], [0.12, 0.04, 0.1], m(18), { res: 0.02 });                           // fallen leaves
    }
  },

  // Raised flowerbed with ferns and blooms, 1.8 m long.
  flowerbed: {
    bounds: [[-1.1, -0.05, -0.6], [1.1, 1.0, 0.6]], tris: 650, res: 0.04, slim: 650, 
    build(S) {
      S.box([0, 0.2, 0], [0.95, 0.2, 0.42], m(3, 2), { res: 0.04 });
      S.box([0, 0.38, 0], [0.86, 0.05, 0.34], m(14), { res: 0.03 });
      for (const [x, z] of [[-0.6, -0.1], [0.05, 0.1], [0.6, -0.05]]) S.ball([x, 0.55, z], [0.3, 0.22, 0.25], m(24, 25), { res: 0.04 });
      for (const [x, z, a] of [[-0.3, 0.15, 0.4], [0.35, -0.15, -0.5], [0.8, 0.12, 0.9]])
        S.tube([[x, 0.42, z], [x + Math.cos(a) * 0.25, 0.75, z + Math.sin(a) * 0.15]], 0.06, 0.02, m(24), { res: 0.025 });
      blooms(S, [[-0.7, 0.75, 0.05], [-0.4, 0.68, -0.2], [-0.05, 0.78, 0.2], [0.25, 0.7, -0.1], [0.55, 0.78, 0.15], [0.8, 0.65, -0.2]], [27, 30, 5, 26]);
    }
  },
};

// Glowing spirit-bloom plants: the garden's light sources instead of lamps. Leafy base, curved stems, emissive bulbs.
Object.assign(module.exports, {
  glowbloom: {
    bounds: [[-0.75, -0.12, -0.75], [0.75, 1.75, 0.75]], tris: 700, res: 0.03, slim: 700,
    build(S) {
      S.ball([0, 0.15, 0], [0.5, 0.22, 0.45], m(25, 24), { res: 0.035 });
      for (let i = 0; i < 6; i++) {
        const a = i / 6 * Math.PI * 2 + 0.3;
        S.tube([[Math.cos(a) * 0.15, 0.2, Math.sin(a) * 0.15], [Math.cos(a) * 0.5, 0.22, Math.sin(a) * 0.45]], 0.1, 0.03, m(24), { res: 0.025 }); // leaves
      }
      const stems = [[0.0, 0.0, 1.45, 26], [0.3, 1.2, 1.1, 31], [-0.28, 2.4, 1.2, 26], [0.2, 3.6, 0.8, 9], [-0.15, 4.8, 0.95, 31]];
      for (const [r, a, h, c] of stems) {
        const x = Math.cos(a) * r, z = Math.sin(a) * r;
        S.tube([[x * 0.3, 0.2, z * 0.3], [x * 0.8, h * 0.6, z * 0.8], [x, h, z]], 0.035, 0.025, m(25), { res: 0.02 });
        S.ball([x, h + 0.08, z], [0.11, 0.14, 0.11], glow(c), { res: 0.02 });
        S.ball([x, h - 0.02, z], [0.14, 0.05, 0.14], m(24), { res: 0.02 });                     // little calyx
      }
    }
  },
});
