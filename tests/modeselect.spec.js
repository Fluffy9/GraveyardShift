// Play-style select screen (src/modeselect.js): TITLE -> SELECT -> run, keyboard + mouse, locked modes,
// remembered mode, per-mode bests, game-over return, and pixel-grid layout.
const { test, expect, boot, snap } = require('./boot');

test.beforeEach(async ({ page }) => { await boot(page); });

const state = page => page.evaluate(() => window.__GS.S.state);
const selected = page => page.evaluate(() => window.__GS.modeSelect.selected());
const openSelect = async page => { await page.keyboard.press('Enter'); expect(await state(page)).toBe('select'); };

test('Enter on the title opens the select screen with Night Shift highlighted; Enter starts Night Shift', async ({ page }) => {
  await openSelect(page);
  expect(await selected(page)).toBe('night');
  await expect(page.locator('#overlay')).toHaveClass(/modesel/);
  await expect(page.locator('.ms-card')).toHaveCount(3);
  await expect(page.locator('.ms-card.sel .ms-name')).toHaveText('NIGHT SHIFT');
  await page.keyboard.press('Enter');
  expect(await state(page)).toBe('playing');
  const r = await page.evaluate(() => ({ mode: window.__GS.S.mode, round: window.__GS.director.round + 1, phase: window.__GS.director.phase }));
  expect(r).toEqual({ mode: 'night', round: 1, phase: 'active' });
  await expect(page.locator('#overlay')).not.toHaveClass(/modesel/);
});

test('arrows / A-D move and wrap, the description follows, Esc returns to the title', async ({ page }) => {
  await openSelect(page);
  await page.keyboard.press('ArrowRight');
  expect(await selected(page)).toBe('quick');
  await page.keyboard.press('KeyD');
  expect(await selected(page)).toBe('endless');
  await expect(page.locator('.ms-desc')).toHaveText(/survive till midnight/i);
  await page.keyboard.press('ArrowRight');
  expect(await selected(page)).toBe('night');            // wraps
  await page.keyboard.press('KeyA');
  expect(await selected(page)).toBe('endless');          // wraps back
  await expect(page.locator('.ms-dots .ui-dot_on')).toHaveCount(1);
  await page.keyboard.press('Escape');
  expect(await state(page)).toBe('title');
  await expect(page.locator('#overlay')).not.toHaveClass(/modesel/);
  await expect(page.locator('#overlay')).toContainText('TO CLOCK IN');
});

test('the locked Quick Shift cannot be started', async ({ page }) => {
  await openSelect(page);
  await page.keyboard.press('ArrowRight');
  await expect(page.locator('.ms-card.sel')).toHaveClass(/locked/);
  await page.keyboard.press('Enter');
  expect(await state(page)).toBe('select');
  await expect(page.locator('.ms-card.sel')).toHaveClass(/nope/);
  await page.locator('.ms-card.locked').click();
  expect(await state(page)).toBe('select');
});

test('mouse: hovering highlights a card, clicking it starts that mode', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name === 'window', '640x360 shows one card at a time (arrows instead)');
  await openSelect(page);
  const over = page.locator('.ms-card').nth(2);
  await over.hover();
  expect(await selected(page)).toBe('endless');
  await expect(over).toHaveClass(/sel/);
  await over.click();
  expect(await state(page)).toBe('playing');
  expect(await page.evaluate(() => window.__GS.S.mode)).toBe('endless');
});

test('arrow buttons step the selection', async ({ page }) => {
  await openSelect(page);
  await page.locator('.ms-arrow.r').click();
  expect(await selected(page)).toBe('quick');
  await page.locator('.ms-arrow.l').click();
  await page.locator('.ms-arrow.l').click();
  expect(await selected(page)).toBe('endless');
});

test('the last started mode is remembered across a reload', async ({ page }) => {
  await openSelect(page);
  await page.keyboard.press('ArrowLeft');
  await page.keyboard.press('Enter');
  expect(await page.evaluate(() => localStorage.getItem('gs_mode'))).toBe('endless');
  await boot(page);
  await openSelect(page);
  expect(await selected(page)).toBe('endless');
});

test('game over: Enter replays the same shift, Esc (or the link) goes back to the select screen', async ({ page }) => {
  await openSelect(page);
  await page.keyboard.press('Enter');                    // Night Shift
  await page.evaluate(() => { const G = window.__GS; ['intro', 'cross', 'wisp'].forEach(i => G.S.notes.add(i)); G.S.hp = 1; G.S.invuln = 0; G.addEnemy(G.S.pos.x, G.S.pos.y - 0.3, 0); G.stepSim(1 / 60, 5); });
  expect(await state(page)).toBe('lost');
  await expect(page.locator('[data-res="modes"]')).toBeVisible();
  await page.waitForTimeout(650);                        // overlay input guard
  await page.keyboard.press('Enter');
  expect(await state(page)).toBe('playing');
  expect(await page.evaluate(() => window.__GS.S.mode)).toBe('night');
  await page.evaluate(() => { const G = window.__GS; ['intro', 'cross', 'wisp'].forEach(i => G.S.notes.add(i)); G.S.hp = 1; G.S.invuln = 0; G.addEnemy(G.S.pos.x, G.S.pos.y - 0.3, 0); G.stepSim(1 / 60, 5); });
  await page.waitForTimeout(650);                        // results ignore keys for 0.6 s so mashing can't skip them
  await page.keyboard.press('Escape');
  expect(await state(page)).toBe('select');
  await page.keyboard.press('Escape');
  expect(await state(page)).toBe('title');
  await page.evaluate(() => { const G = window.__GS; G.startGame({ mode: 'endless' }); G.S.hp = 0; });
  await page.evaluate(() => { const G = window.__GS; G.S.hp = 1; G.S.invuln = 0; ['intro', 'cross', 'wisp'].forEach(i => G.S.notes.add(i)); G.addEnemy(G.S.pos.x, G.S.pos.y - 0.3, 0); G.stepSim(1 / 60, 5); });
  await page.locator('[data-res="modes"]').click();     // clicks are deliberate: no delay needed
  expect(await state(page)).toBe('select');
});

test('best scores are kept per mode', async ({ page }) => {
  await page.evaluate(() => { localStorage.setItem('gs_best', '900'); localStorage.removeItem('gs_best_night'); });
  await page.evaluate(() => {
    const G = window.__GS;
    G.startGame({ mode: 'night' }); ['intro', 'cross', 'wisp'].forEach(i => G.S.notes.add(i));
    G.S.score = 1200; G.S.hp = 1; G.S.invuln = 0;
    G.addEnemy(G.S.pos.x, G.S.pos.y - 0.3, 0); G.stepSim(1 / 60, 5);
  });
  expect(await state(page)).toBe('lost');
  const b = await page.evaluate(() => ({ night: localStorage.getItem('gs_best_night'), endless: localStorage.getItem('gs_best') }));
  expect(b).toEqual({ night: '1200', endless: '900' });
  await page.evaluate(() => window.__GS.modeSelect.open());
  await expect(page.locator('.ms-card').nth(2)).toContainText('BEST 900');
});

test('layout sits on the pixel grid and fits the viewport', async ({ page }) => {
  await openSelect(page);
  const r = await page.evaluate(() => {
    const hs = +getComputedStyle(document.documentElement).getPropertyValue('--hs');
    const o = document.getElementById('overlay'), vw = innerWidth, vh = innerHeight;
    const vis = [...document.querySelectorAll('.ms-card, .ms-desc, .ms-arrow')].filter(e => e.offsetParent).map(e => e.getBoundingClientRect());
    const card = document.querySelector('.ms-card.sel').getBoundingClientRect();
    return { hs, w: card.width, h: card.height, fits: vis.every(b => b.left >= 0 && b.top >= 0 && b.right <= vw + 0.5 && b.bottom <= vh + 0.5),
      noScroll: o.scrollHeight <= o.clientHeight + 1, narrow: o.classList.contains('ms-narrow'),
      shown: [...document.querySelectorAll('.ms-card')].filter(e => e.offsetParent).length };
  });
  expect(r.w).toBe(97 * r.hs);                 // card is exactly 97 x 129 art pixels
  expect(r.h).toBe(129 * r.hs);
  expect(r.fits).toBe(true);
  expect(r.noScroll).toBe(true);
  expect(r.shown).toBe(r.narrow ? 1 : 3);
});

test('the chain label never shows through a results screen', async ({ page }) => {
  await page.evaluate(() => {
    const G = window.__GS;
    G.startGame({ mode: 'night' }); ['intro', 'cross', 'wisp'].forEach(i => G.S.notes.add(i));
    G.S.combo = 4; G.S.comboTimer = 3; G.stepSim(1 / 60, 1);
    for (let r = 0; r < 3; r++) { G.clearEnemies(); G.stepSim(0.01, 1); if (r < 2) G.stepSim(0.01, 500); }
  });
  expect(await page.evaluate(() => window.__GS.S.state)).toBe('relic');
  expect(await page.locator('#combo').evaluate(e => getComputedStyle(e).opacity)).toBe('0');
});

test('results panel: stats, NEW BEST flag, keyboard picks between the two buttons', async ({ page }) => {
  await page.evaluate(() => {
    localStorage.setItem('gs_best_night', '1000');
    const G = window.__GS;
    G.startGame({ mode: 'night' }); ['intro', 'cross', 'wisp'].forEach(i => G.S.notes.add(i));
    G.S.score = 1500; G.finish(true);
  });
  expect(await page.evaluate(() => window.__GS.S.state)).toBe('won');
  const panel = page.locator('.res-panel');
  await expect(panel).toBeVisible();
  await expect(panel).toHaveClass(/hl/);
  await expect(panel.locator('.res-flag')).toBeVisible();          // 1500 > 1000
  await expect(panel.locator('.res-stat').first()).toContainText('1500');
  await expect(panel.locator('[data-res="again"]')).toHaveClass(/on/);
  await page.waitForTimeout(650);
  await page.keyboard.press('ArrowRight');
  await expect(panel.locator('[data-res="modes"]')).toHaveClass(/on/);
  await page.keyboard.press('Enter');
  expect(await page.evaluate(() => window.__GS.S.state)).toBe('select');
});

test('results panel fits the viewport without a NEW BEST flag when the score is not a record', async ({ page }) => {
  await page.evaluate(() => {
    localStorage.setItem('gs_best', '5000');
    const G = window.__GS;
    G.startGame({ mode: 'endless' }); ['intro', 'cross', 'wisp'].forEach(i => G.S.notes.add(i));
    G.S.score = 300; G.S.hp = 1; G.S.invuln = 0; G.addEnemy(G.S.pos.x, G.S.pos.y - 0.3, 0); G.stepSim(1 / 60, 5);
  });
  expect(await page.evaluate(() => window.__GS.S.state)).toBe('lost');
  await expect(page.locator('.res-flag')).toHaveCount(0);
  const r = await page.locator('.res-panel').evaluate(p => { const b = p.getBoundingClientRect(); return b.top >= 0 && b.left >= 0 && b.bottom <= innerHeight && b.right <= innerWidth; });
  expect(r).toBe(true);
});

test('clicking the title start button opens the select screen', async ({ page }) => {
  await expect(page.locator('#overlay')).toHaveClass(/title/);
  await page.locator('[data-start]').click();
  expect(await state(page)).toBe('select');
});

// ---- difficulty picker (Night Shift only): W/S or arrows on the select screen, remembered, applied at clock-in
const tierOf = page => page.evaluate(() => window.__GS.currentTier());
const shown = page => page.locator('.ms-diff-name').textContent();

test('difficulty row defaults to Midnight, W/S step it, it clamps, and it hides on Overtime', async ({ page }) => {
  await openSelect(page);
  await expect(page.locator('.ms-diff')).toBeVisible();
  expect(await shown(page)).toBe('MIDNIGHT');
  await page.keyboard.press('KeyW'); expect(await shown(page)).toBe('WITCHING HOUR');
  await page.keyboard.press('ArrowUp'); expect(await shown(page)).toBe('DEAD OF NIGHT');
  await page.keyboard.press('KeyW'); expect(await shown(page)).toBe('DEAD OF NIGHT');   // clamps
  await expect(page.locator('.ms-diff-pips .ui-dot_on')).toHaveCount(5);
  await page.keyboard.press('KeyS'); await page.keyboard.press('ArrowDown'); await page.keyboard.press('KeyS'); await page.keyboard.press('KeyS');
  expect(await shown(page)).toBe('DUSK');
  await expect(page.locator('.ms-diff-pips .ui-dot_on')).toHaveCount(1);
  await page.keyboard.press('ArrowRight'); await page.keyboard.press('ArrowRight');   // Overtime
  await expect(page.locator('.ms-diff')).toBeHidden();
  await page.keyboard.press('KeyW'); expect(await shown(page)).toBe('DUSK');           // ignored while hidden
});

test('clicking the arrows changes the tier; Clock In applies it to Night Shift (hearts, tuning) and remembers it', async ({ page }) => {
  await openSelect(page);
  await page.locator('.ms-darrow.l').click(); await page.locator('.ms-darrow.l').click();
  expect(await shown(page)).toBe('DUSK');
  await page.keyboard.press('Enter');
  expect(await tierOf(page)).toBe(1);
  expect(await page.evaluate(() => ({ hp: window.__GS.S.hp, max: window.__GS.TUNING.player.maxHp }))).toEqual({ hp: 5, max: 5 });
  expect(await page.evaluate(() => localStorage.getItem('gs_tier'))).toBe('1');
  await page.reload(); await page.waitForFunction(() => window.__GS);
  await page.keyboard.press('Enter');
  expect(await shown(page)).toBe('DUSK');                                             // remembered
});

test('Overtime always plays the untouched numbers, whatever tier is picked', async ({ page }) => {
  await openSelect(page);
  await page.keyboard.press('KeyW'); await page.keyboard.press('KeyW');               // Dead of Night picked
  await page.keyboard.press('ArrowRight'); await page.keyboard.press('ArrowRight');
  await page.keyboard.press('Enter');
  expect(await page.evaluate(() => ({ mode: window.__GS.S.mode, tier: window.__GS.currentTier(), hp: window.__GS.S.hp }))).toEqual({ mode: 'endless', tier: 3, hp: 3 });
});

test('Night Shift keeps a separate best per tier (Midnight keeps the original key)', async ({ page }) => {
  const keys = await page.evaluate(() => {
    const G = window.__GS, out = {};
    for (const t of [3, 1]) { G.setTier(t); G.progress.saveBest('night', 100 + t); }
    out.ls = { mid: localStorage.getItem('gs_best_night'), dusk: localStorage.getItem('gs_best_night_t1') };
    G.setTier(1); out.dusk = G.progress.loadBest('night'); G.setTier(3); out.mid = G.progress.loadBest('night');
    return out;
  });
  expect(keys).toEqual({ ls: { mid: '103', dusk: '101' }, dusk: 101, mid: 103 });
});
