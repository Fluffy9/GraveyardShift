// Shared mutable game state. State machine: title | playing | tutorial | paused | won | lost.
import * as THREE from 'three';
import { TOTAL_TIME } from './config.js';
import { TUNING } from './tuning.js';

import { DEFAULT_MODE } from './config.js';
export const S = {
  mode: DEFAULT_MODE,   // 'night' (authored rounds) | 'endless' (Overtime: the original 180 s survival run)
  state: 'title', realm: 0, realmVis: 0, hp: TUNING.player.maxHp, score: 0, combo: 0, comboTimer: 0, best: 0,
  pos: new THREE.Vector2(0, 6.5), facing: new THREE.Vector2(0, -1), timeLeft: TOTAL_TIME, elapsed: 0,
  dashCd: 0, dashRemaining: 0, dashStart: new THREE.Vector2(), dashEnd: new THREE.Vector2(), dashHit: new Set(),
  invuln: 0, spawnClock: 0, hitStop: 0, shake: 0, flash: 0, hurt: 0, ripple: -1, moving: 0, step: 0,
  banished: 0, maxCombo: 0, seed: 0, dashId: 0, notes: new Set(), crossed: false, touchCross: false,
};
export const world = { enemies: [], projectiles: [] };
export const keys = new Set();                                   // held key codes
export const touch = { x: 0, y: 0, active: false, mag: 1 };      // floating-joystick vector
// states in which the simulation (and the animation clock) is stopped
export const isFrozen = () => S.state === 'paused' || S.state === 'tutorial';
