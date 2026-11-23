// Tuning constants (ported from the kit's Godot prototype) and shared palette.
export const ARENA_X = 10.2, ARENA_Z = 8.0;
export const PLAYER_SPEED = 6.5;
export const DASH_DISTANCE = 5.2, DASH_DURATION = 0.18, DASH_COOLDOWN = 0.8;
export const TOTAL_TIME = 180;
export const PS = 1.4, ES = 1.3; // character display scales
export const COL = {
  charcoal: 0x211a2d, plum: 0x4e3b5c, stone: 0x8b7b8d, parchment: 0xf7dbb0, amber: 0xffb85b,
  orange: 0xb96d48, lavender: 0xb9a1e8, blue: 0x71baf5, pink: 0xf07f95, moss: 0x626a45, violet: 0xa978ff,
};
export const IS_TOUCH = matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
if (IS_TOUCH) document.body.classList.add('touch');
/** True when the coarse-pointer media query matched at boot, or after the first real touch. */
export const isTouchUI = () => IS_TOUCH || document.body.classList.contains('touch');
