// Mobile pause button: hittable on the touch project, hidden on desktop and 640x360 windows.
const { test, expect, boot, step, startRun, snap } = require('./boot');
const { copy, menuTab } = require('./copy');

test.beforeEach(async ({ page }) => { await boot(page); });

test('PAUSE button visibility follows the touch class', async ({ page }, testInfo) => {
  const isTouch = testInfo.project.name === 'touch';
  const btn = page.locator('#pausebtn');
  const body = page.locator('body');

  // title screen: never shown (body.menu)
  await expect(btn).toBeHidden();

  await startRun(page);
  await step(page, 1 / 60);

  if (!isTouch) {
    await expect(body).not.toHaveClass(/touch/);
    await expect(btn).toBeHidden();
    return;
  }

  await expect(body).toHaveClass(/touch/);
  await expect(btn).toBeVisible();
  await expect(btn).toContainText(copy.hud.pauseLabel);
  // hittable: inside the viewport and topmost at its own centre
  const box = await btn.boundingBox();
  const vp = page.viewportSize();
  expect(box.x).toBeGreaterThanOrEqual(0);
  expect(box.y).toBeGreaterThanOrEqual(0);
  expect(box.x + box.width).toBeLessThanOrEqual(vp.width);
  expect(box.y + box.height).toBeLessThanOrEqual(vp.height);
  const topmost = await page.evaluate(([x, y]) => !!document.elementFromPoint(x, y)?.closest('#pausebtn'),
    [box.x + box.width / 2, box.y + box.height / 2]);
  expect(topmost).toBe(true);

  // a tap pauses exactly once (touchend + synthetic click must not double-toggle)
  await btn.tap();
  expect((await snap(page)).state).toBe('paused');
  await expect(page.locator('#overlay .menu-panel')).toBeVisible();
  await page.waitForTimeout(150);
  expect((await snap(page)).state).toBe('paused');
  await expect(btn).toBeHidden();              // hidden while the menu is open
  await page.getByRole('button', { name: copy.menu.resume }).tap();
  expect((await snap(page)).state).toBe('playing');
  await expect(btn).toBeVisible();
});

test('touch UI copy: touch hints on touch, keyboard hints otherwise', async ({ page }, testInfo) => {
  const isTouch = testInfo.project.name === 'touch';
  const overlay = page.locator('#overlay');
  await expect(overlay.locator(isTouch ? '.tc' : '.kb').first()).toBeVisible();
  await expect(overlay.locator(isTouch ? '.kb' : '.tc').first()).toBeHidden();
  if (isTouch) {
    await expect(overlay.locator('.howto > .tc .spr-gesture_move')).toBeVisible();
    await expect(overlay.locator('.howto > .tc .spr-gesture_double_tap')).toBeVisible();
  } else {
    await expect(overlay.locator('.kb .spr-key_space')).toBeVisible();
  }
});

test('touch pause menu: how-to and controls use gesture icons', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'touch', 'touch project only');
  await startRun(page);
  await step(page, 1 / 60);
  await page.locator('#pausebtn').tap();
  const panel = page.locator('#overlay .menu-panel');
  await expect(panel).toBeVisible();
  const m = copy.menu;
  const clips = m.howto.clips;
  await expect(panel.locator('.menu-tab.on')).toHaveText(menuTab('pause'));
  await expect(panel.locator('.menu-actions .menu-btn').first()).toHaveText(m.resume);
  await panel.getByRole('tab', { name: menuTab('howto') }).tap();
  await expect(panel.locator('.menu-clip figcaption .spr-gesture_double_tap')).toBeVisible();
  await expect(panel.locator('.menu-slide-meta')).toHaveText(`1 / ${clips.length}`);
  await panel.getByRole('button', { name: m.slides.next }).tap();
  await expect(panel.locator('.menu-slide-meta')).toHaveText(`2 / ${clips.length}`);
  await panel.getByRole('tab', { name: menuTab('controls') }).tap();
  await expect(panel.locator('.menu-controls .spr-gesture_move')).toBeVisible();
  await expect(panel.locator('.menu-controls .spr-gesture_double_tap')).toBeVisible();
  await expect(panel.locator('.menu-controls')).toContainText(m.controls.touch[1].action);
});

test('touch select screen: tap the title, tap a card to highlight it, tap again to clock in', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'touch', 'needs a touchscreen');
  await page.evaluate(() => window.__GS.modeSelect.showTitle());
  await page.waitForTimeout(350);
  await page.touchscreen.tap(200, 200);
  expect(await page.evaluate(() => window.__GS.S.state)).toBe('select');
  // landscape touch viewport shows all three cards; arm Overtime, then start it
  const card = page.locator('.ms-card').nth(2);
  await card.tap();
  expect(await page.evaluate(() => window.__GS.S.state)).toBe('select');
  expect(await page.evaluate(() => window.__GS.modeSelect.selected())).toBe('endless');
  await expect(page.locator('.ms-desc')).toHaveText(/tap again/i);
  await card.tap();
  expect(await page.evaluate(() => window.__GS.S.state)).toBe('playing');
  expect(await page.evaluate(() => window.__GS.S.mode)).toBe('endless');
});
