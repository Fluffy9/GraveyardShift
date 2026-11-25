// Shared palette and helpers for the sculpts.
const PAL = [
  0x211a2d, // 0 charcoal
  0x4e3b5c, // 1 plum
  0x5e5066, // 2 dark stone
  0x8b7b8d, // 3 stone
  0xb3a3b0, // 4 light stone
  0xf7dbb0, // 5 parchment
  0xffb85b, // 6 amber
  0xb96d48, // 7 warm orange
  0xb9a1e8, // 8 lavender
  0xefe0ff, // 9 pale lavender
  0x71baf5, // 10 spirit blue
  0xf07f95, // 11 danger pink
  0x626a45, // 12 moss
  0x8e3a3e, // 13 scarf red
  0x6b4a3a, // 14 brown
  0x171421, // 15 near black
  0x8a6ad8, // 16 violet
  0x3e3648, // 17 iron
  0xc4503a, // 18 autumn red
  0xe08a3c, // 19 autumn orange
  0x4a3035, // 20 dark wood
  0x5a4250, // 21 hat
  0xffe29a, // 22 hot glow
  0x7a6a7e, // 23 roof slate
  // campaign additions (L2+)
  0x4f6b3e, // 24 leaf green
  0x2f4434, // 25 deep green
  0x4fa39a, // 26 teal
  0xc45a7a, // 27 rose
  0x9fd8cf, // 28 pale glass
  0x3f6f9a, // 29 water
  0xd98ac4, // 30 blossom pink
  0x7d6bff, // 31 portal violet
  // L3
  0xb08a66, // 32 sandstone
  0x7e6450, // 33 dark sandstone
  0x9a6b3c, // 34 bronze
  0xe8dcc0, // 35 bone
  0xff9a3c, // 36 barrier orange
  0xd9602e, // 37 ember
];

const m = (...r) => ({ r });
const glow = (...r) => ({ r, em: true });
const ROT_Z = a => [[Math.cos(a), Math.sin(a), 0], [-Math.sin(a), Math.cos(a), 0], [0, 0, 1]];
const ROT_X = a => [[1, 0, 0], [0, Math.cos(a), Math.sin(a)], [0, -Math.sin(a), Math.cos(a)]];


const ROT_Y = a => [[Math.cos(a), 0, -Math.sin(a)], [0, 1, 0], [Math.sin(a), 0, Math.cos(a)]];
module.exports = { PAL, m, glow, ROT_Z, ROT_X, ROT_Y };
