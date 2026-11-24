// Boot / E2E-02, PAUSE-01, RESET-01: session-level behavior driven through the real keyboard.
const { test, expect, boot, step, startRun, quiet, addEnemy, setState, snap, countFinishCalls } = require('./boot');
const K = require('./constants');
const { copy, snippet } = require('./copy');

test.beforeEach(async ({ page }) => { await boot(page); });

test('E2E-02 boot shows the title; Enter starts; Space crosses and HUD follows; R restarts', async ({ page }) => {
  // title (no pageerror is enforced by the auto fixture)
  await expect(page.locator('body')).toHaveClass(/ready/);
  const overlay = page.locator('#overlay');
  await expect(overlay).toHaveClass(/show/);
  await expect(overlay.locator('[role=img]')).toHaveAttribute('aria-label', copy.titleScreen.ariaLabel);
  await expect(overlay.locator('.flavor')).toContainText(snippet(copy.titleScreen.flavor));
  // Start line uses key/gesture icons; assert structure + suffix from copy, not "PRESS ENTER".
  const start = overlay.locator('.blink');
  await expect(start).toContainText(copy.titleScreen.startSuffix);
  await expect(start.locator('.spr-key_enter')).toBeVisible();
  expect((await snap(page)).state).toBe('title');

  await page.keyboard.press('Enter');
  expect((await snap(page)).state).toBe('playing');
  await expect(overlay).not.toHaveClass(/show/);
  await quiet(page);                            // skip tutorial freezes + random spawns
  await step(page, 1 / 60);
  await expect(page.locator('#realm span')).toHaveClass(/spr-tag_living/);
  await expect(page.locator('#score')).toHaveText('000000');

  await page.keyboard.press('Space');
  await step(page, 1 / 60);
  expect((await snap(page)).realm).toBe(1);
  await expect(page.locator('#realm span')).toHaveClass(/spr-tag_spirit/);

  // dirty the run, then restart with R
  await setState(page, { score: 700, combo: 3, hp: 1 });
  await step(page, 1 / 60);
  await expect(page.locator('#score')).toHaveText('000700');
  await page.keyboard.press('KeyR');
  await quiet(page);
  await step(page, 1 / 60);
  const s = await snap(page);
  expect(s).toMatchObject({ state: 'playing', realm: 0, hp: K.START_HP, score: 0, combo: 0 });
  await expect(page.locator('#realm span')).toHaveClass(/spr-tag_living/);
  await expect(page.locator('#score')).toHaveText('000000');
  await expect(page.locator('#hearts .spr-heart')).toHaveCount(3);
});

test('PAUSE-01 pausing mid-dash freezes the simulation; resuming finishes the dash', async ({ page }) => {
  await startRun(page);
  await addEnemy(page, 5, 4, 1);               // an active chaser that would move if time ran
  await page.keyboard.press('Space');
  await step(page, 0.06);
  const before = await snap(page);
  expect(before.dashRemaining).toBeGreaterThan(0);

  await page.keyboard.press('Escape');
  expect((await snap(page)).state).toBe('paused');
  await expect(page.locator('#overlay .menu-panel')).toBeVisible();
  await step(page, 2);
  const frozen = await snap(page);
  expect(frozen.state).toBe('paused');
  expect({ ...frozen, state: 'playing' }).toEqual(before);   // elapsed, pos, dash, cooldown, enemies all identical

  await page.keyboard.press('KeyP');           // resume
  expect((await snap(page)).state).toBe('playing');
  await step(page, 0.2);
  const after = await snap(page);
  expect(after.dashRemaining).toBe(0);
  expect(after.pos[1]).toBeCloseTo(-K.DASH_DISTANCE, 2);
  expect(after.elapsed).toBeGreaterThan(before.elapsed);
});

test('RESET-01 restart after death resets state, HP, realm, score, combo and enemies', async ({ page }) => {
  await startRun(page);
  await countFinishCalls(page);
  // build up some state: a kill (score + combo), a cross, then die
  await addEnemy(page, 0, -2.5, 1);
  await page.keyboard.press('Space');
  await step(page, 0.25);
  expect(await snap(page)).toMatchObject({ score: 100, combo: 1, realm: 1 });
  await setState(page, { hp: 1 });
  await addEnemy(page, 0, -5.2, 1);            // on top of the player
  await page.evaluate(() => { window.__old = window.__GS.enemies[0]; });
  await step(page, 0.5);
  expect((await snap(page)).state).toBe('lost');

  await page.keyboard.press('KeyR');
  const s = await snap(page);
  expect(s).toMatchObject({
    state: 'playing', realm: 0, hp: K.START_HP, score: 0, combo: 0, banished: 0, crossed: false,
    elapsed: 0, dashCd: 0, dashRemaining: 0, invuln: 0, pos: K.START_POS, projectiles: 0,
  });
  // fresh opening wave only: the three spirit-realm starters, none left over from before
  expect(s.enemies).toHaveLength(3);
  expect(s.enemies.every(e => e.realm === 1 && !e.wisp)).toBe(true);
  expect(await page.evaluate(() => window.__GS.enemies.includes(window.__old))).toBe(false);
  await expect(page.locator('#overlay')).not.toHaveClass(/show/);
});

test('RESET-01b R mid-run restarts too', async ({ page }) => {
  await startRun(page);
  await setState(page, { score: 900, combo: 4, hp: 2, realm: 1 });
  await addEnemy(page, 3, 3, 0);
  await page.keyboard.press('KeyR');
  expect(await snap(page)).toMatchObject({ state: 'playing', realm: 0, hp: K.START_HP, score: 0, combo: 0 });
  expect((await snap(page)).enemies).toHaveLength(3);
});
