#!/usr/bin/env node
/**
 * Record looping gameplay GIFs for the How To menu.
 * Cross: face a dim ghost and Space through it.
 * Chain: multi-banish dash that refunds the lantern.
 *
 * Writes clips/*.gif and copies them into dist/clips/.
 * Invoked from build.sh (skip with SKIP_CLIPS=1).
 */
import { createServer } from 'http';
import { spawn } from 'child_process';
import { chromium } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const OUT = path.join(ROOT, 'clips');
const TMP = path.join(ROOT, 'build', 'clip-frames');
const FPS = 15;
const DT = 1 / FPS;

function assertDist() {
  if (!fs.existsSync(path.join(DIST, 'index.html'))) {
    throw new Error('dist/index.html missing — run ./build.sh first (without SKIP_CLIPS)');
  }
}

function serveDist() {
  const mime = {
    '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css',
    '.png': 'image/png', '.gif': 'image/gif', '.webm': 'video/webm', '.json': 'application/json',
  };
  const server = createServer((req, res) => {
    const url = new URL(req.url || '/', 'http://127.0.0.1');
    let file = path.normalize(url.pathname).replace(/^(\.\.[/\\])+/, '');
    if (file === '/' || file === '') file = '/index.html';
    const full = path.join(DIST, file);
    if (!full.startsWith(DIST) || !fs.existsSync(full) || fs.statSync(full).isDirectory()) {
      res.writeHead(404); res.end('not found'); return;
    }
    res.writeHead(200, { 'Content-Type': mime[path.extname(full)] || 'application/octet-stream' });
    fs.createReadStream(full).pipe(res);
  });
  return new Promise(resolve => {
    server.listen(0, '127.0.0.1', () => {
      const { port } = server.address();
      resolve({ server, base: `http://127.0.0.1:${port}` });
    });
  });
}

function run(cmd, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(cmd, args, { stdio: ['ignore', 'pipe', 'pipe'] });
    let err = '';
    child.stderr.on('data', d => { err += d; });
    child.on('close', code => {
      if (code === 0) resolve();
      else reject(new Error(`${cmd} ${args.join(' ')} failed (${code}): ${err.slice(-400)}`));
    });
  });
}

async function encodeGif(frameDir, outGif) {
  const palette = path.join(frameDir, 'palette.png');
  const pattern = path.join(frameDir, 'f%04d.png');
  await run('ffmpeg', [
    '-y', '-framerate', String(FPS), '-i', pattern,
    '-vf', 'palettegen=stats_mode=diff', palette,
  ]);
  await run('ffmpeg', [
    '-y', '-framerate', String(FPS), '-i', pattern, '-i', palette,
    '-lavfi', 'paletteuse=dither=bayer:bayer_scale=3',
    '-loop', '0', outGif,
  ]);
}

async function captureFrames(page, frameDir, frames, tick) {
  fs.rmSync(frameDir, { recursive: true, force: true });
  fs.mkdirSync(frameDir, { recursive: true });
  for (let i = 0; i < frames; i++) {
    await tick(i);
    await page.locator('#game').screenshot({ path: path.join(frameDir, `f${String(i).padStart(4, '0')}.png`) });
  }
}

async function boot(page, base) {
  await page.goto(`${base}/index.html`);
  await page.waitForFunction(() => document.body.classList.contains('ready') && !!window.__GS, null, { timeout: 90_000 });
  await page.evaluate(() => {
    window.__GS.stepManual(0, 1);
    try { localStorage.setItem('gs_settings', JSON.stringify({ sfx: 0, music: 0, muted: true })); } catch (e) {}
  });
}

function setupClip(page) {
  return page.evaluate(() => {
    const G = window.__GS;
    G.startGame();
    G.clearEnemies();
    ['intro', 'cross', 'wisp', 'final'].forEach(id => G.S.notes.add(id));
    G.S.spawnClock = 1e9;
    G.S.hitStop = 0;
    document.body.classList.remove('menu');
    const overlay = document.getElementById('overlay');
    if (overlay) { overlay.classList.remove('show', 'interactive'); overlay.innerHTML = ''; }
  });
}

async function recordCross(page, outGif) {
  const dir = path.join(TMP, 'cross');
  await setupClip(page);
  // Living player facing a dim SPIRIT ghost — Space crosses through and banishes.
  await page.evaluate(() => {
    const G = window.__GS;
    G.S.pos.set(0, 1.2); G.S.facing.set(0, -1); G.S.realm = 0;
    G.addEnemy(0, -1.6, 1, false);
  });
  // Hold a beat, dash, then linger on the pop / empty path.
  await captureFrames(page, dir, FPS * 3, async (i) => {
    if (i === Math.round(FPS * 0.7)) await page.evaluate(() => window.__GS.cross());
    await page.evaluate((d) => { window.__GS.S.hitStop = 0; window.__GS.stepManual(d, 1); }, DT);
  });
  await encodeGif(dir, outGif);
}

async function recordChain(page, outGif) {
  const dir = path.join(TMP, 'chain');
  await setupClip(page);
  // Three SPIRIT ghosts on the dash line. Cross starts with a full cooldown (empty lantern);
  // each banish refunds and refills the bar.
  await page.evaluate(() => {
    const G = window.__GS;
    G.S.pos.set(0, 2.2); G.S.facing.set(0, -1); G.S.realm = 0;
    for (const z of [0.4, -1.2, -2.6]) G.addEnemy(0, z, 1, false);
  });
  await captureFrames(page, dir, FPS * 3, async (i) => {
    if (i === Math.round(FPS * 0.55)) await page.evaluate(() => window.__GS.cross());
    await page.evaluate((d) => { window.__GS.S.hitStop = 0; window.__GS.stepManual(d, 1); }, DT);
  });
  await encodeGif(dir, outGif);
}

async function main() {
  assertDist();
  fs.mkdirSync(OUT, { recursive: true });
  fs.mkdirSync(path.join(DIST, 'clips'), { recursive: true });

  const { server, base } = await serveDist();
  const browser = await chromium.launch({
    args: [
      '--use-gl=angle',
      '--use-angle=swiftshader',
      '--enable-unsafe-swiftshader',
      '--ignore-gpu-blocklist',
    ],
  });
  const page = await browser.newPage({ viewport: { width: 960, height: 540 } });
  page.on('pageerror', e => console.error('PAGEERROR', e));

  try {
    await boot(page, base);
    const crossGif = path.join(OUT, 'cross.gif');
    const chainGif = path.join(OUT, 'chain.gif');
    console.log('recording cross clip…');
    await recordCross(page, crossGif);
    console.log('recording chain clip…');
    await recordChain(page, chainGif);
    for (const name of ['cross.gif', 'chain.gif']) {
      fs.copyFileSync(path.join(OUT, name), path.join(DIST, 'clips', name));
    }
    console.log('clips →', OUT, 'and dist/clips/');
  } finally {
    await browser.close();
    server.close();
    fs.rmSync(TMP, { recursive: true, force: true });
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
