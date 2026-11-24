// ROUND-01..06, LVL-01/02 and friends: the Night Shift round director on Level 1 (src/director.js, src/levels/level1.js).
const { test, expect, boot, snap } = require('./boot');

test.beforeEach(async ({ page }) => { await boot(page); });

// Start a Night Shift run with tutorial tips pre-dismissed.
const night = page => page.evaluate(() => {
  const G = window.__GS;
  G.startGame({ mode: 'night' });
  ['intro', 'cross', 'wisp'].forEach(id => G.S.notes.add(id));
});
const sim = (page, dt, n = 1) => page.evaluate(([d, k]) => window.__GS.stepSim(d, k), [dt, n]);
const clearAll = page => page.evaluate(() => window.__GS.clearEnemies());
const dir = page => page.evaluate(() => { const d = window.__GS.director; return { round: d.round + 1, phase: d.phase, waited: d.waited }; });
const count = (page, type) => page.evaluate(t => window.__GS.events.history.filter(e => e.type === t).length, type);
const roster = page => page.evaluate(() => window.__GS.enemies.map(e => ({ wisp: e.wisp, realm: e.realm })));
const tally = r => ({ wanderers: r.filter(e => !e.wisp).length, wisps: r.filter(e => e.wisp).length,
  living: r.filter(e => e.realm === 0).length, spirit: r.filter(e => e.realm === 1).length });

// Clear the current round and wait out the 5 s intermission (0.01 s steps so 5.00 s lands exactly).
async function nextRound(page) {
  await clearAll(page);
  await sim(page, 0.01, 1);      // director notices the empty arena
  await sim(page, 0.01, 500);    // 5.00 s intermission
}

test('Night Shift starts on Round 1 with the authored line of three SPIRIT wanderers', async ({ page }) => {
  await night(page);
  expect(await dir(page)).toMatchObject({ round: 1, phase: 'active' });
  expect(tally(await roster(page))).toEqual({ wanderers: 3, wisps: 0, living: 0, spirit: 3 });
  expect(await count(page, 'round_started')).toBe(1);
  await sim(page, 1 / 60);
  await expect(page.locator('#phase')).toHaveText('ROUND 1/3');
});

test('ROUND-01 last Round 1 enemy banished fires one round_cleared and enters intermission', async ({ page }) => {
  await night(page);
  await clearAll(page);
  await sim(page, 1 / 60, 30);
  expect(await count(page, 'round_cleared')).toBe(1);
  expect(await count(page, 'intermission_started')).toBe(1);
  expect((await dir(page)).phase).toBe('intermission');
});

test('ROUND-02 intermission at 4.99 s has not spawned the next round', async ({ page }) => {
  await night(page);
  await clearAll(page);
  await sim(page, 0.01, 1);
  await sim(page, 0.01, 499);
  expect(await count(page, 'round_started')).toBe(1);
  expect((await snap(page)).enemies).toHaveLength(0);
  expect((await dir(page)).phase).toBe('intermission');
});

test('ROUND-03 intermission at 5.00 s spawns Round 2 exactly once', async ({ page }) => {
  await night(page);
  await nextRound(page);
  expect(await dir(page)).toMatchObject({ round: 2, phase: 'active' });
  expect(await count(page, 'round_started')).toBe(2);
  await sim(page, 1 / 60, 120);
  expect(await count(page, 'round_started')).toBe(2);
});

test('ROUND-04 Round 2 starts with exactly 5 Wanderers, 3 LIVING / 2 SPIRIT', async ({ page }) => {
  await night(page);
  await nextRound(page);
  expect(tally(await roster(page))).toEqual({ wanderers: 5, wisps: 0, living: 3, spirit: 2 });
});

test('ROUND-05 Round 3 starts with exactly 4 Wanderers and 2 Wisps, split across realms', async ({ page }) => {
  await night(page);
  await nextRound(page);
  await nextRound(page);
  expect(await dir(page)).toMatchObject({ round: 3, phase: 'active' });
  const t = tally(await roster(page));
  expect(t).toMatchObject({ wanderers: 4, wisps: 2 });
  expect(t.living).toBeGreaterThan(0); expect(t.spirit).toBeGreaterThan(0);
});

test('ROUND-06 / LVL-03 zero score still progresses through all rounds to level complete', async ({ page }) => {
  await night(page);
  await nextRound(page);
  await nextRound(page);
  await clearAll(page);
  await sim(page, 1 / 60, 10);
  const s = await snap(page);
  expect(s.score).toBe(0);
  expect(s.state).toBe('won');
  expect(await count(page, 'round_cleared')).toBe(3);
  expect(await count(page, 'level_cleared')).toBe(1);
  expect(await count(page, 'run_finished')).toBe(1);
});

test('LVL-01 a round clears only when both realms are empty', async ({ page }) => {
  await night(page);
  await nextRound(page);                                     // Round 2: 3 LIVING + 2 SPIRIT
  // remove only the LIVING ghosts; the SPIRIT pair keeps the round open
  await page.evaluate(() => { const G = window.__GS; G.removeEnemies(e => e.realm === 0); });
  await sim(page, 1 / 60, 60);
  expect(await count(page, 'round_cleared')).toBe(1);        // only Round 1's
  expect((await dir(page)).phase).toBe('active');
  await clearAll(page);
  await sim(page, 1 / 60, 2);
  expect(await count(page, 'round_cleared')).toBe(2);
});

test('real dashing: one Space dash north banishes the whole Round 1 line and clears the round', async ({ page }) => {
  await night(page);
  await sim(page, 1 / 60, 50);                               // past the spawn wind-up
  await page.evaluate(() => window.__GS.cross());
  await sim(page, 1 / 60, 30);
  const evs = await page.evaluate(() => window.__GS.events.history.map(e => e.type));
  expect(evs.filter(t => t === 'enemy_banished')).toHaveLength(3);
  expect(evs.lastIndexOf('enemy_banished')).toBeLessThan(evs.indexOf('round_cleared'));
  expect((await snap(page)).combo).toBe(3);
});

test('authored spawns stay in bounds and at least 3 m from the player, wherever the player stands', async ({ page }) => {
  const res = await page.evaluate(() => {
    const G = window.__GS, T = G.TUNING, out = [];
    const spots = [[0, 6.5], [-6, -2.5], [6, -1.5], [0, 0], [-9.6, -7.4], [9.6, 7.4], [-5, -5], [7, -6]];
    for (const [px, pz] of spots) for (let r = 0; r < 3; r++) {
      G.startGame({ mode: 'night' });
      ['intro', 'cross', 'wisp'].forEach(id => G.S.notes.add(id));
      for (let k = 0; k < r; k++) { G.clearEnemies(); G.stepSim(0.01, 1); G.S.pos.set(px, pz); G.stepSim(0.01, 500); }
      if (r === 0) continue;                                 // Round 1 always spawns from the fixed start position
      for (const e of G.enemies) out.push({ d: e.pos.distanceTo(G.S.pos), inX: Math.abs(e.pos.x) <= T.arena.x, inZ: Math.abs(e.pos.y) <= T.arena.z });
    }
    return out;
  });
  expect(res.length).toBeGreaterThan(0);
  for (const r of res) { expect(r.d).toBeGreaterThanOrEqual(3); expect(r.inX && r.inZ).toBe(true); }
});

test('chain timer is frozen during the intermission', async ({ page }) => {
  await night(page);
  await page.evaluate(() => { const S = window.__GS.S; S.combo = 2; S.comboTimer = 1; });
  await clearAll(page);
  await sim(page, 0.01, 300);                                // 3 s into the intermission
  expect((await snap(page)).combo).toBe(2);
});

test('restart during an intermission starts clean on Round 1 with no stale spawn', async ({ page }) => {
  await night(page);
  await clearAll(page);
  await sim(page, 0.01, 200);
  await page.evaluate(() => { const G = window.__GS; G.startGame(); ['intro', 'cross', 'wisp'].forEach(id => G.S.notes.add(id)); });
  await sim(page, 0.01, 600);
  expect(await dir(page)).toMatchObject({ round: 1, phase: 'active' });
  expect(await count(page, 'round_started')).toBe(1);
  expect(await page.evaluate(() => window.__GS.S.mode)).toBe('night');   // restart keeps the mode
});

test('Overtime (endless) mode is unchanged: no director, timer still ends the run', async ({ page }) => {
  await page.evaluate(() => { const G = window.__GS; G.startGame({ mode: 'endless' }); ['intro', 'cross', 'wisp'].forEach(id => G.S.notes.add(id)); });
  expect(await dir(page)).toMatchObject({ phase: 'idle' });
  expect(await count(page, 'round_started')).toBe(0);
  await page.evaluate(() => { window.__GS.S.timeLeft = 0.01; window.__GS.clearEnemies(); window.__GS.S.spawnClock = 1e9; });
  await sim(page, 1 / 60, 2);
  expect((await snap(page)).state).toBe('won');
});
