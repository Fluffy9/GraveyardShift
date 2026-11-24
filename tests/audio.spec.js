// Recorded score: both loops ship, and the score follows the realm (living = clean, spirit = reverb).
const { test, expect, boot, step, startRun } = require('./boot.js');

test('AUDIO-01 the score files are served', async ({ page, request }) => {
  for (const f of ['melodic_clean_loop', 'melodic_spirit_reverb_loop', 'sfx_world_switch']) {
    const r = await request.get(`/audio/${f}.ogg`);
    expect(r.status(), f).toBe(200);
    expect((await r.body()).length, f).toBeGreaterThan(10_000);
  }
});

test('AUDIO-02 the loops start with the run and follow the realm', async ({ page }) => {
  await boot(page);
  await startRun(page);
  await page.evaluate(() => window.__GS.sfx.unlock());
  let st = await page.evaluate(() => window.__GS.sfx.audioState());
  expect(st.loops).toBe(true);
  expect(st.realm).toBe(0);
  // crossing flips the audible loop; crossing back flips it again
  await page.evaluate(() => window.__GS.cross());
  st = await page.evaluate(() => window.__GS.sfx.audioState());
  expect(st.realm).toBe(1);
  await step(page, 1);
  await page.evaluate(() => window.__GS.cross());
  st = await page.evaluate(() => window.__GS.sfx.audioState());
  expect(st.realm).toBe(0);
});

test('AUDIO-03 a new run starts the score back in the living world', async ({ page }) => {
  await boot(page);
  await startRun(page);
  await page.evaluate(() => window.__GS.cross());
  expect((await page.evaluate(() => window.__GS.sfx.audioState())).realm).toBe(1);
  await startRun(page);
  expect((await page.evaluate(() => window.__GS.sfx.audioState())).realm).toBe(0);
});

test('AUDIO-04 title theme plays on title and select, stops when a run starts', async ({ page, request }) => {
  expect((await request.get('/audio/title_minimal_melody_loop.ogg')).status()).toBe(200);
  await boot(page);
  await page.evaluate(() => { window.__GS.modeSelect.showTitle(); window.__GS.sfx.unlock(); });
  await page.waitForTimeout(600);
  expect((await page.evaluate(() => window.__GS.sfx.audioState())).title).toBe(true);
  await page.evaluate(() => window.__GS.modeSelect.open());
  expect((await page.evaluate(() => window.__GS.sfx.audioState())).title).toBe(true);
  await page.evaluate(() => window.__GS.modeSelect.confirm());
  await page.waitForTimeout(900);
  const st = await page.evaluate(() => window.__GS.sfx.audioState());
  expect(st.title).toBe(false);
  expect(st.playing).toBe(true);
});

test('AUDIO-05 the run score starts at once from the mode select (files already loaded)', async ({ page }) => {
  await boot(page);
  await page.evaluate(() => { window.__GS.modeSelect.open(); window.__GS.sfx.unlock(); });
  await page.waitForTimeout(1500);                                   // time on the select screen
  await page.evaluate(() => window.__GS.modeSelect.confirm());
  await page.waitForTimeout(150);
  const st = await page.evaluate(() => window.__GS.sfx.audioState());
  expect(st.playing).toBe(true);
  expect(st.t[0]).toBeGreaterThan(0);                                // already advancing 150 ms after the confirm
});
