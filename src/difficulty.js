// Five difficulty tiers. Tier 3 (Midnight) is the live game exactly; the others scale a handful of knobs around it.
// The numbers were calibrated with the headless population runs in tools/sim (100 simulated players, bell-curve skill and
// attention): see tools/sim/README.md for the targets and the latest funnel per tier.
//   hp        player hearts            invuln   post-hit invulnerability (x)
//   speed     chasers: wanderer, moth, choir, ward raiders (x)      fire   shot / toll / pollen cadence (x interval)
//   proj      projectile + shockwave speed (x)                        count  enemies per round / wave / soul spawn rate (x)
//   wardHp    ward health (x)   wardDps  damage raiders deal (x)      souls  souls to bank   bossHp  Warden health   bossCd  Warden attack cadence (x interval)   loot  pickup drop chance (x)
import { TUNING, BASE, resetTuning } from './tuning.js';

export const TIERS = [
  { id: 1, name: 'Dusk',          hp: 5, invuln: 1.6,  speed: 0.76, fire: 1.50, proj: 0.85, count: 0.60, wardHp: 1.8,  wardDps: 0.60, souls: 16, bossHp: 7,  bossCd: 1.5, loot: 1.6 },
  { id: 2, name: 'Nightfall',     hp: 4, invuln: 1.3,  speed: 0.90, fire: 1.18, proj: 0.95, count: 0.85, wardHp: 1.25, wardDps: 0.85, souls: 21, bossHp: 10, bossCd: 1.18, loot: 1.3 },
  { id: 3, name: 'Midnight',      hp: 3, invuln: 1.0,  speed: 1.00, fire: 1.00, proj: 1.00, count: 1.00, wardHp: 1.0,  wardDps: 1.00, souls: 25, bossHp: 12, bossCd: 1.0, loot: 1.0 },
  { id: 4, name: 'Witching Hour', hp: 3, invuln: 0.9,  speed: 1.08, fire: 0.88, proj: 1.06, count: 1.18, wardHp: 0.82, wardDps: 1.12, souls: 27, bossHp: 13, bossCd: 0.90, loot: 0.8 },
  { id: 5, name: 'Dead of Night', hp: 2, invuln: 1.0,  speed: 1.12, fire: 0.80, proj: 1.10, count: 1.25, wardHp: 0.75, wardDps: 1.20, souls: 29, bossHp: 13, bossCd: 0.88, loot: 0.55 },
];
export const DEFAULT_TIER = 3;
let current = DEFAULT_TIER;
export const currentTier = () => current;

export function setTier(n) {
  const t = TIERS[Math.min(5, Math.max(1, Math.round(+n || DEFAULT_TIER))) - 1];
  current = t.id;
  resetTuning();
  const T = TUNING, B = BASE;
  T.player.maxHp = t.hp; T.player.hitInvuln = B.player.hitInvuln * t.invuln;
  T.enemy.wandererSpeed = B.enemy.wandererSpeed * t.speed; T.enemy.wandererSpeedPerSec = B.enemy.wandererSpeedPerSec * t.speed;
  T.enemy.wispShootInterval = B.enemy.wispShootInterval * t.fire;
  T.projectile.speed = B.projectile.speed * t.proj;
  T.spirits.moth.speed = B.spirits.moth.speed * t.speed; T.spirits.choir.speed = B.spirits.choir.speed * t.speed;
  T.spirits.bell.interval = B.spirits.bell.interval * t.fire; T.spirits.bell.waveSpeed = B.spirits.bell.waveSpeed * t.proj;
  T.spirits.bloom.interval = B.spirits.bloom.interval * t.fire;
  T.campaign.wardHp = B.campaign.wardHp * t.wardHp; T.campaign.soulGoal = t.souls; T.campaign.bossHp = t.bossHp;
  Object.assign(T.difficulty, { tier: t.id, count: t.count, wardDps: t.wardDps, wardSpeed: t.speed, bossCd: t.bossCd, loot: t.loot });
  return t;
}

// Authored round spawns, scaled for the tier. Round 1 is left alone (it teaches the dash); rounds 2+ drop or add
// wanderers / wisps evenly through the list (specials such as the Choir, Bloom and Moth are never cloned).
export function scaleSpawns(spawns, round) {
  const c = TUNING.difficulty.count;
  if (round === 0 || c === 1) return spawns;
  const out = [];
  if (c < 1) {
    spawns.forEach((sp, i) => { if (Math.floor((i + 1) * c) > Math.floor(i * c)) out.push(sp); });
    return out.length ? out : spawns.slice(0, 1);
  }
  spawns.forEach((sp, i) => {
    out.push(sp);
    if ((sp.kind === 'wanderer' || sp.kind === 'wisp') && Math.floor((i + 1) * (c - 1)) > Math.floor(i * (c - 1))) out.push({ ...sp, pos: [-sp.pos[0], sp.pos[1] + 0.9] });
  });
  return out;
}
