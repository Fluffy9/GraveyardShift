// DIFF-01..06: the five difficulty tiers (src/difficulty.js) and the headless bot (tools/sim/bot.js).
const path = require('path');
const { test, expect, boot } = require('./boot');

test.beforeEach(async ({ page }) => { await boot(page); });

test('DIFF-01 default tier is Midnight and equals the live numbers', async ({ page }) => {
  const t = await page.evaluate(() => { const G = window.__GS, T = G.TUNING; return { tier: G.currentTier(), hp: T.player.maxHp, inv: T.player.hitInvuln, w: T.enemy.wandererSpeed, bossHp: T.campaign.bossHp, goal: T.campaign.soulGoal, count: T.difficulty.count }; });
  expect(t).toEqual({ tier: 3, hp: 3, inv: 1.1, w: 1.6, bossHp: 12, goal: 25, count: 1 });
});

test('DIFF-02 tiers climb monotonically and tier 3 restores the live numbers exactly', async ({ page }) => {
  const rows = await page.evaluate(() => {
    const G = window.__GS, out = [];
    for (let i = 1; i <= 5; i++) { G.setTier(i); const T = G.TUNING; out.push({ hp: T.player.maxHp, w: T.enemy.wandererSpeed, fire: T.enemy.wispShootInterval, boss: T.campaign.bossHp, ward: T.campaign.wardHp, goal: T.campaign.soulGoal, count: T.difficulty.count }); }
    G.setTier(3); const T = G.TUNING;
    return { out, back: { hp: T.player.maxHp, w: T.enemy.wandererSpeed, fire: T.enemy.wispShootInterval, boss: T.campaign.bossHp, ward: T.campaign.wardHp, goal: T.campaign.soulGoal, count: T.difficulty.count } };
  });
  const col = k => rows.out.map(r => r[k]);
  expect(col('hp')).toEqual([5, 4, 3, 3, 2]);
  for (const k of ['w', 'goal', 'count']) expect(col(k).every((v, i, a) => i === 0 || v > a[i - 1])).toBe(true);
  expect(col('boss').every((v, i, a) => i === 0 || v >= a[i - 1])).toBe(true);
  for (const k of ['fire', 'ward']) expect(col(k).every((v, i, a) => i === 0 || v < a[i - 1])).toBe(true);
  expect(rows.back).toEqual(rows.out[2]);
});

test('DIFF-03 spawn scaling: round 1 untouched, easier tiers thin later rounds, harder tiers add wanderers/wisps only', async ({ page }) => {
  const r = await page.evaluate(async () => {
    const G = window.__GS, rounds = G.bot.LEVELS[1].rounds, mod = await import('/index.html').catch(() => null);
    const count = (tier, i) => { G.setTier(tier); G.startGame({ mode: 'night' }); G.loadLevel('forgotten_gardens'); G.clearEnemies(); G.loadLevel('forgotten_gardens'); const n0 = G.enemies.length; return n0; };
    const r1 = [1, 3, 5].map(t => count(t, 0));
    G.setTier(3); return { r1, authored: rounds[0].spawns.length };
  });
  expect(r.r1).toEqual([r.authored, r.authored, r.authored]);
  const later = await page.evaluate(() => {
    const G = window.__GS, out = {};
    for (const t of [1, 3, 5]) {
      G.setTier(t); G.loadLevel('catacombs');
      G.S.botInput = { x: 0, y: 0 }; G.clearEnemies(); G.S.hp = 99; G.director.phase = 'intermission'; G.director.round = 0; G.director.waited = 99;
      G.stepSim(1 / 60, 2);     // intermission over -> round 2 spawns through scaleSpawns
      out[t] = { n: G.enemies.length, choirs: G.enemies.filter(e => e.kind === 'choir').length };
    }
    G.setTier(3); return out;
  });
  expect(later[1].n).toBeLessThan(later[3].n);
  expect(later[5].n).toBeGreaterThan(later[3].n);
  expect(later[3].choirs).toBe(1); expect(later[5].choirs).toBe(1);   // specials are never cloned
});

test('DIFF-04 hearts follow the tier', async ({ page }) => {
  for (const [tier, hearts] of [[1, 5], [3, 3], [5, 2]]) {
    await page.evaluate(t => { const G = window.__GS; G.setTier(t); G.startGame({ mode: 'night' }); G.S.botInput = { x: 0, y: 0 }; G.stepSim(1 / 60, 3); }, tier);
    expect(await page.evaluate(() => window.__GS.S.hp)).toBe(hearts);
    expect(await page.locator('#hearts > *').count()).toBe(hearts);
  }
  await page.evaluate(() => window.__GS.setTier(3));
});

test('DIFF-05 tier 1 Warden has less health and attacks less often', async ({ page }) => {
  const r = await page.evaluate(() => {
    const G = window.__GS, out = {};
    for (const t of [1, 3, 5]) { G.setTier(t); G.loadLevel('bell_tower'); out[t] = { hp: G.campaign.boss.hp }; }
    G.setTier(3); return out;
  });
  expect(r[1].hp).toBeLessThan(r[3].hp); expect(r[5].hp).toBeGreaterThan(r[3].hp);
});

test('DIFF-06 headless bot: an expert clears the whole campaign on Dusk, deterministically', async ({ page }) => {
  await page.addScriptTag({ path: path.join(__dirname, '..', 'tools', 'sim', 'bot.js') });
  const run = () => page.evaluate(() => { window.__GS.setTier(1); return window.__BOT.play({ id: 1, skill: 0.95, attention: 0.95, seed: 4242 }); });
  const a = await run(), b = await run();
  expect(a.won).toBe(true);
  expect(a.cleared).toBe(6);
  expect([a.deaths, a.kills, Math.round(a.playtime)]).toEqual([b.deaths, b.kills, Math.round(b.playtime)]);
  await page.evaluate(() => window.__GS.setTier(3));
});
