// REALM-01/02(current AI), PROJ-01, HP-01/02: what can and cannot hurt the player.
const { test, expect, boot, step, startRun, addEnemy, addProjectile, setState, snap, countFinishCalls, finishCalls } = require('./boot');
const K = require('./constants');

test.beforeEach(async ({ page }) => { await boot(page); });

test('REALM-01 inactive-realm enemy overlapping the player does no damage', async ({ page }) => {
  await startRun(page);                        // player LIVING
  await addEnemy(page, 0, 0, 1);               // SPIRIT enemy standing on the player
  await addEnemy(page, 0.3, 0, 1, true);       // and an inactive wisp
  await step(page, 1.5);
  const s = await snap(page);
  expect(s.hp).toBe(K.START_HP);
  expect(s.state).toBe('playing');
});

test('REALM-01b control: same-realm enemy overlap does damage', async ({ page }) => {
  await startRun(page);
  await addEnemy(page, 0.3, 0, 0);
  await step(page, 0.1);
  expect((await snap(page)).hp).toBe(K.START_HP - 1);
});

// Current AI (not the BUILD_SPEC contract): other-realm enemies are harmless but still drift toward the
// player at 0.25 u/s and wisps hold fire. Flip these only when REALM-02 in spec-pending.spec.js ships.
test('REALM-02 (current AI) inactive enemies drift at 0.25 u/s and never fire', async ({ page }) => {
  await startRun(page);
  await addEnemy(page, 6, 0, 1, true);         // inactive wisp (an active one fires within ~2.3s)
  await addEnemy(page, -6, 0, 1, false);       // inactive wanderer
  await step(page, 4);
  const s = await snap(page);
  expect(s.projectiles).toBe(0);
  const wisp = s.enemies.find(e => e.wisp), wanderer = s.enemies.find(e => !e.wisp);
  expect(6 - wisp.x).toBeCloseTo(K.INACTIVE_DRIFT * 4, 1);
  expect(wanderer.x + 6).toBeCloseTo(K.INACTIVE_DRIFT * 4, 1);
  expect(s.hp).toBe(K.START_HP);
});

test('REALM-02b control: an active wisp does fire', async ({ page }) => {
  await startRun(page);
  await addEnemy(page, 6, 0, 0, true);
  // the first bolt may already have hit the player by the end, so watch for it frame by frame
  const peak = await page.evaluate(() => {
    let max = 0;
    for (let i = 0; i < 180; i++) { window.__GS.stepManual(1 / 60, 1); max = Math.max(max, window.__GS.projectiles.length); }
    return max;
  });
  expect(peak).toBeGreaterThan(0);
});

test('PROJ-01 inactive-realm projectile passes through the player', async ({ page }) => {
  await startRun(page);
  await addProjectile(page, 0, 0, 0, 1, 1);    // SPIRIT bolt on a LIVING player
  await step(page, 0.5);
  expect((await snap(page)).hp).toBe(K.START_HP);
});

test('PROJ-01b control: same-realm projectile hurts and is consumed', async ({ page }) => {
  await startRun(page);
  await addProjectile(page, 0, 0, 0, 1, 0);
  await step(page, 0.1);
  const s = await snap(page);
  expect(s.hp).toBe(K.START_HP - 1);
  expect(s.projectiles).toBe(0);
});

test('HP-01 several hits during invulnerability only cost one heart', async ({ page }) => {
  await startRun(page);
  await addEnemy(page, 0.2, 0, 0);
  await addEnemy(page, -0.2, 0, 0);
  await addProjectile(page, 0, 0, 0, 1, 0);
  await step(page, 1 / 60);
  let s = await snap(page);
  expect(s.hp).toBe(K.START_HP - 1);
  expect(s.invuln).toBeGreaterThan(K.INVULN_HIT - 0.05);
  await step(page, 0.9);                       // still inside the 1.1s window
  s = await snap(page);
  expect(s.hp).toBe(K.START_HP - 1);
  expect(s.invuln).toBeGreaterThan(0);
});

test('HP-02 HP reaching zero fires game over exactly once', async ({ page }) => {
  await startRun(page);
  await countFinishCalls(page);
  await setState(page, { hp: 1 });
  await addEnemy(page, 0.2, 0, 0);             // three simultaneous lethal sources
  await addEnemy(page, -0.2, 0, 0);
  await addProjectile(page, 0, 0, 0, 1, 0);
  await step(page, 0.5);
  let s = await snap(page);
  expect(s.state).toBe('lost');
  expect(s.hp).toBe(0);
  expect(await finishCalls(page)).toBe(1);
  await expect(page.locator('#overlay h2.bad')).toHaveText('SHIFT FAILED');
  await step(page, 2);
  s = await snap(page);
  expect(s.state).toBe('lost');
  expect(s.hp).toBe(0);
  expect(await finishCalls(page)).toBe(1);
});
