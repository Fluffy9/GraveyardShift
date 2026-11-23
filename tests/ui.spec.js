// UI regression: tutorial tips (ported from tools/tutorial_test.py), pause menu tabs/volumes, HUD fit.
const { test, expect, boot, step, startRun, snap } = require('./boot');

test.beforeEach(async ({ page }) => { await boot(page); });

const readSettings = page => page.evaluate(() => JSON.parse(localStorage.getItem('gs_settings') || '{}'));
// The tip debounce (dismissTip ignores input for 250 ms) runs on the wall clock, not sim time.
const pastTipDebounce = page => page.waitForTimeout(300);

// ---------- tutorial ----------
test('tutorial: intro tip freezes the sim, swallows early input, then dismisses without crossing', async ({ page }) => {
  await startRun(page, { tips: true });
  // Same synchronous task: show the tip, then hit Space inside the 250 ms debounce => ignored.
  const early = await page.evaluate(() => {
    const { S } = window.__GS;
    window.__GS.stepManual(1 / 60, 1);
    const shown = S.state;
    window.dispatchEvent(new KeyboardEvent('keydown', { code: 'Space' }));
    return { shown, after: S.state, crossed: S.crossed };
  });
  expect(early).toEqual({ shown: 'tutorial', after: 'tutorial', crossed: false });
  await expect(page.locator('#note')).toHaveClass(/show/);
  await expect(page.locator('#note')).toContainText('Your shift begins at nine.');
  await expect(page.locator('#note .tip-prompt')).toBeVisible();

  const a = await snap(page);
  await step(page, 2);
  expect(await snap(page)).toEqual(a);          // frozen: elapsed, enemies, everything

  await pastTipDebounce(page);
  await page.keyboard.press('Space');           // dismisses and is swallowed
  const s = await snap(page);
  expect(s.state).toBe('playing');
  expect(s.crossed).toBe(false);
  expect(s.realm).toBe(0);
  await expect(page.locator('#note')).not.toHaveClass(/show/);
});

test('tutorial: cross tip appears at 2s, freezes, and resumes on Enter', async ({ page }) => {
  await startRun(page, { tips: true });
  await step(page, 1 / 60);
  await pastTipDebounce(page);
  await page.keyboard.press('Enter');
  expect((await snap(page)).state).toBe('playing');

  await step(page, 2.1);
  const a = await snap(page);
  expect(a.state).toBe('tutorial');
  expect(a.elapsed).toBeGreaterThanOrEqual(2);
  expect(await page.evaluate(() => [...window.__GS.S.notes])).toContain('cross');
  await expect(page.locator('#note')).toContainText('Space');
  await step(page, 1.5);
  expect(await snap(page)).toEqual(a);

  await pastTipDebounce(page);
  await page.keyboard.press('Enter');
  expect((await snap(page)).state).toBe('playing');
});

test('tutorial: crossing before 2s suppresses the cross tip', async ({ page }) => {
  await startRun(page, { tips: true });
  await step(page, 1 / 60);
  await pastTipDebounce(page);
  await page.keyboard.press('KeyX');            // dismiss intro
  expect((await snap(page)).state).toBe('playing');
  await page.keyboard.press('Space');
  expect((await snap(page)).crossed).toBe(true);
  await step(page, 3);
  expect((await snap(page)).state).toBe('playing');
  expect(await page.evaluate(() => [...window.__GS.S.notes])).not.toContain('cross');
});

test('tutorial: wisp tip at 60s spawns a wisp only once dismissed', async ({ page }) => {
  await startRun(page);                         // intro + cross tips pre-dismissed
  await page.evaluate(() => { window.__GS.S.notes.delete('wisp'); window.__GS.S.elapsed = 59.9; });
  await step(page, 0.2);
  const wisps = () => page.evaluate(() => window.__GS.enemies.filter(e => e.wisp).length);
  expect((await snap(page)).state).toBe('tutorial');
  expect(await wisps()).toBe(0);
  await expect(page.locator('#note')).toContainText('Not all the deceased are the same');
  await pastTipDebounce(page);
  await page.keyboard.press('Enter');
  expect((await snap(page)).state).toBe('playing');
  expect(await wisps()).toBe(1);
});

// ---------- pause menu ----------
test('pause menu: tabs, volume sliders (persisted), resume and restart', async ({ page }) => {
  await startRun(page);
  await page.keyboard.press('Escape');
  expect((await snap(page)).state).toBe('paused');
  const panel = page.locator('#overlay .menu-panel');
  await expect(panel).toBeVisible();
  await expect(panel.locator('h2')).toHaveText('PAUSED');
  await expect(panel.locator('.menu-tab')).toHaveText(['HOW TO', 'CONTROLS', 'SETTINGS', 'CREDITS']);
  await expect(panel.locator('.menu-tab.on')).toHaveText('HOW TO');
  await expect(panel.locator('.menu-lead')).toBeVisible();

  await panel.getByRole('tab', { name: 'CONTROLS' }).click();
  await expect(panel.locator('.menu-tab.on')).toHaveText('CONTROLS');
  await expect(panel.locator('.menu-controls')).toContainText('W');
  await expect(panel.locator('.menu-controls')).toContainText('Space');
  await expect(panel.locator('.menu-controls')).toContainText('Cross worlds + dash');

  await panel.getByRole('tab', { name: 'CREDITS' }).click();
  await expect(panel.locator('.menu-tab.on')).toHaveText('CREDITS');
  await expect(panel.locator('.menu-credit')).toContainText('Szatanik Studio');
  await expect(panel.locator('.menu-credit a')).toHaveAttribute('href', 'https://szatanik-studio.itch.io/');

  await panel.getByRole('tab', { name: 'SETTINGS' }).click();
  const sfx = panel.locator('#vol-sfx'), music = panel.locator('#vol-music');
  await expect(sfx).toHaveValue('70');           // shipped defaults
  await expect(music).toHaveValue('55');
  await sfx.fill('30');
  await music.fill('0');
  await expect(panel.locator('[data-vol-label=sfx]')).toHaveText('30');
  await expect(panel.locator('[data-vol-label=music]')).toHaveText('0');
  expect(await readSettings(page)).toMatchObject({ sfx: 0.3, music: 0 });

  // tab switches re-render from stored volumes
  await panel.getByRole('tab', { name: 'HOW TO' }).click();
  await panel.getByRole('tab', { name: 'SETTINGS' }).click();
  await expect(sfx).toHaveValue('30');
  await expect(music).toHaveValue('0');

  await panel.getByRole('button', { name: 'RESUME' }).click();
  expect((await snap(page)).state).toBe('playing');
  await expect(page.locator('#overlay')).not.toHaveClass(/show/);

  // restart from the menu
  await page.evaluate(() => { window.__GS.S.score = 500; });
  await page.keyboard.press('KeyP');
  await expect(panel).toBeVisible();
  await panel.getByRole('button', { name: 'RESTART' }).click();
  expect(await snap(page)).toMatchObject({ state: 'playing', score: 0, hp: 3 });
});

test('pause menu: P, Escape and Enter all resume', async ({ page }) => {
  await startRun(page);
  for (const key of ['KeyP', 'Escape', 'Enter']) {
    await page.keyboard.press('Escape');
    expect((await snap(page)).state).toBe('paused');
    await page.keyboard.press(key);
    expect((await snap(page)).state).toBe('playing');
  }
});

// ---------- layout (VIS-01 stays a manual screenshot check; this only guards that the HUD fits) ----------
test('HUD stays inside the viewport and the page does not scroll', async ({ page }) => {
  await startRun(page);
  await step(page, 1 / 60);
  const vp = page.viewportSize();
  for (const sel of ['#tl', '#tr', '#score', '#realm', '#game']) {
    const el = page.locator(sel);
    await expect(el, sel).toBeVisible();
    const box = await el.boundingBox();
    expect(box.x, sel).toBeGreaterThanOrEqual(-1);
    expect(box.y, sel).toBeGreaterThanOrEqual(-1);
    expect(box.x + box.width, sel).toBeLessThanOrEqual(vp.width + 1);
    expect(box.y + box.height, sel).toBeLessThanOrEqual(vp.height + 1);
  }
  const scroll = await page.evaluate(() => [document.documentElement.scrollWidth - innerWidth, document.documentElement.scrollHeight - innerHeight]);
  expect(scroll[0]).toBeLessThanOrEqual(0);
  expect(scroll[1]).toBeLessThanOrEqual(0);
});
