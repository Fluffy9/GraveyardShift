const { test, expect, boot } = require('./boot.js');

test('PERF-01 spawning and clearing ghosts and shots does not leak geometries', async ({ page }) => {
  await boot(page);
  const geo = await page.evaluate(() => {
    const G = window.__GS; G.startGame({ mode: 'night' });
    ['intro', 'cross', 'wisp'].forEach(id => G.S.notes.add(id)); G.S.spawnClock = 1e9;
    const churn = () => { for (let i = 0; i < 40; i++) G.spawnEnemy(); for (let i = 0; i < 20; i++) G.addProjectile(0, 0, 1, 0, 0); G.stepManual(1 / 60, 2); G.clearEnemies(); G.stepManual(1 / 60, 30); };
    churn(); const first = G.frameStats().geometries;
    for (let i = 0; i < 4; i++) churn();
    return { first, last: G.frameStats().geometries };
  });
  expect(geo.last).toBeLessThanOrEqual(geo.first + 2);
});
