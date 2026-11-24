// Mobile pause button: hittable on the touch project, hidden on desktop and 640x360 windows.
const { test, expect, boot, step, startRun, snap } = require('./boot');

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
  await expect(btn).toContainText('PAUSE');
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
  await page.getByRole('button', { name: 'RESUME' }).tap();
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
  await expect(panel.locator('.menu-clip figcaption .spr-gesture_double_tap')).toBeVisible();
  await expect(panel.locator('.menu-slide-meta')).toHaveText('1 / 3');
  await panel.getByRole('button', { name: 'Next' }).tap();
  await expect(panel.locator('.menu-slide-meta')).toHaveText('2 / 3');
  await panel.getByRole('tab', { name: 'CONTROLS' }).tap();
  await expect(panel.locator('.menu-controls .spr-gesture_move')).toBeVisible();
  await expect(panel.locator('.menu-controls .spr-gesture_double_tap')).toBeVisible();
  await expect(panel.locator('.menu-controls')).toContainText('Cross worlds + dash');
});
