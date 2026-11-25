// All gameplay tuning in one place (pure data, no DOM). Values are the LIVE game's numbers, not the
// BUILD_SPEC proposal table: the live feel wins. tests/constants.js is the regression oracle (SIM-01).
export const TUNING = Object.freeze({
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
  hitStop: Object.freeze({ duration: 0.05, timeScale: 0.08 }),
  // endless-mode pacing (kit's first-level script)
  pacing: Object.freeze({
    cap: t => (t < 30 ? 5 : t < 60 ? 8 : t < 105 ? 11 : 14),
    interval: t => Math.max(0.8, t < 30 ? 3.2 : t < 105 ? 2.6 - t / 130 : t < 150 ? 1.4 : 0.95),
    groupAfter: 25, groupChance: 0.33, wispAfter: 60, wispChance: 0.27, bigGroupAfter: 70,
  }),
});
