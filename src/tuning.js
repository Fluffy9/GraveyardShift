// All gameplay tuning in one place (pure data, no DOM). Values are the LIVE game's numbers, not the
// BUILD_SPEC proposal table: the live feel wins. tests/constants.js is the regression oracle (SIM-01).
const BASE_DEF = Object.freeze({
  arena: Object.freeze({ x: 10.2, z: 8.0, playerPad: 0.6, enemyPad: 0.4 }),
  run: Object.freeze({ totalTime: 180, startSpawnClock: 2.5, startGhosts: 3 }),
  player: Object.freeze({ speed: 6.5, maxHp: 3, startPos: Object.freeze([0, 6.5]), hitInvuln: 1.1, minStickMag: 0.35 }),
  dash: Object.freeze({
    distance: 5.2, duration: 0.18, cooldown: 0.8,
    hitRadius: 0.85,          // swept-segment hit radius (also used for the dash-target preview)
    refundPerKill: 0.18, cooldownFloor: 0.12,
    invulnPad: 0.12,          // invulnerability lasts duration + pad
    aimRangePad: 0.6, aimCone: 0.6,   // touch aim assist
  }),
  combo: Object.freeze({ window: 3, baseScore: 100 }),
  enemy: Object.freeze({
    spawnWindup: 0.8, spawnMinDist: 5.5, contactRadius: 0.8, contactKnockback: 1.2,
    inactiveDrift: 0.25,      // other-realm ghosts still drift toward the player (kept on purpose)
    wandererSpeed: 1.6, wandererSpeedPerSec: 1 / 100,
    wispSpeed: 1.1, wispKeepMin: 5, wispKeepMax: 7, wispShootInterval: 2.5, wispChargeWindow: 0.5,
    separation: 0.9,
  }),
  projectile: Object.freeze({ speed: 4.5, life: 5, hitRadius: 0.55 }),
  // Night Shift (authored levels): new values from BUILD_SPEC v0.2, nothing in the live game to keep
  night: Object.freeze({ intermission: 5, spawnMinDist: 3 }),
  // Campaign v0.4 provisional defaults (P). Live dash/HP numbers stay above.
  // New spirits (campaign). Speeds are m/s; times are seconds.
  spirits: Object.freeze({
    moth: Object.freeze({ speed: 2.5, zig: 1.4, zigFreq: 4.5 }),
    bell: Object.freeze({ speed: 0.9, keepMin: 3.2, keepMax: 5.0, interval: 3.6, windup: 0.8, waveSpeed: 4.5, waveMax: 4.2, band: 0.4 }),
    bloom: Object.freeze({ interval: 3.2, windup: 0.6, shots: 3, spread: 0.32, creep: 0.15 }),
    choir: Object.freeze({ speed: 0.85, shield: 1, shieldPoints: 50 }),
  }),
  campaign: Object.freeze({
    portalAperture: 2.5,
    exitRadius: 1.3,
    relicWatch: 0.8,
    relicKey: 1.25,
    soulPickup: 0.9,
    soulSpeed: 0.15,
    soulSpeedCap: 15,
    soulScatterLock: 1.2,
    shrineRadius: 1.3,
    soulGoal: 25,
    soulScore: 150,
    soulCap: 32,
    wardHp: 100,
    wardBonus: 500,
    wardAttack: 0.65,
    bossHp: 12,
    bossRadius: 1.35,
    bossScore: 250,
    unstick: 1.5,
  }),
  // multipliers set by the active difficulty tier (all 1 at the default tier)
  difficulty: Object.freeze({ tier: 3, count: 1, wardDps: 1, wardSpeed: 1, bossCd: 1 }),
  hitStop: Object.freeze({ duration: 0.05, timeScale: 0.08 }),
  // endless-mode pacing (kit's first-level script)
  pacing: Object.freeze({
    cap: t => (t < 30 ? 5 : t < 60 ? 8 : t < 105 ? 11 : 14),
    interval: t => Math.max(0.8, t < 30 ? 3.2 : t < 105 ? 2.6 - t / 130 : t < 150 ? 1.4 : 0.95),
    groupAfter: 25, groupChance: 0.33, wispAfter: 60, wispChance: 0.27, bigGroupAfter: 70,
  }),
});

// Difficulty tiers (src/difficulty.js) rewrite TUNING in place, so BASE keeps the untouched live numbers and TUNING is the
// working copy every module reads. At the default tier TUNING equals BASE exactly (tests/constants.js is the oracle).
const clone = o => (Array.isArray(o) ? [...o] : o && typeof o === 'object' ? Object.fromEntries(Object.entries(o).map(([k, v]) => [k, typeof v === 'function' ? v : clone(v)])) : o);
export const BASE = BASE_DEF;
export const TUNING = clone(BASE_DEF);
export function resetTuning() {
  const walk = (dst, src) => { for (const k of Object.keys(src)) { if (Array.isArray(src[k])) dst[k] = [...src[k]]; else if (src[k] && typeof src[k] === 'object') walk(dst[k], src[k]); else dst[k] = src[k]; } };
  walk(TUNING, BASE_DEF);
}
