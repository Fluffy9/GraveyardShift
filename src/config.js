// Shared palette and legacy constant aliases. The numbers themselves live in tuning.js.
import { TUNING } from './tuning.js';
export const ARENA_X = TUNING.arena.x, ARENA_Z = TUNING.arena.z;
export const PLAYER_SPEED = TUNING.player.speed;
export const DASH_DISTANCE = TUNING.dash.distance, DASH_DURATION = TUNING.dash.duration, DASH_COOLDOWN = TUNING.dash.cooldown;
export const TOTAL_TIME = TUNING.run.totalTime;
/** Wall-clock ms before a tutorial tip accepts dismiss input / shows the continue prompt. */
export const TIP_DISMISS_MS = 1000;
export const PS = 1.4, ES = 1.3; // character display scales
export const COL = {
  charcoal: 0x211a2d, plum: 0x4e3b5c, stone: 0x8b7b8d, parchment: 0xf7dbb0, amber: 0xffb85b,
  orange: 0xb96d48, lavender: 0xb9a1e8, blue: 0x71baf5, pink: 0xf07f95, moss: 0x626a45, violet: 0xa978ff,
};
export const IS_TOUCH = matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
if (IS_TOUCH) document.body.classList.add('touch');
/** True when the coarse-pointer media query matched at boot, or after the first real touch. */
export const isTouchUI = () => IS_TOUCH || document.body.classList.contains('touch');
/** Default run mode. Night Shift (authored Level 1) stays opt-in via ?mode=night until relics + exit land. */
export const DEFAULT_MODE = (() => { try { return new URLSearchParams(location.search).get('mode') === 'night' ? 'night' : 'endless'; } catch (e) { return 'endless'; } })();
