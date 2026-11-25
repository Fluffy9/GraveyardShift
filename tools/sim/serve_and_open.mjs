// Shared helper: static server for dist/ + a headless Chromium page with the game booted.
import http from 'http'; import fs from 'fs'; import path from 'path'; import { fileURLToPath } from 'url';
import { chromium } from '@playwright/test';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..', 'dist');
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.ogg': 'audio/ogg', '.bin': 'application/octet-stream' };
export function serve() {
  const srv = http.createServer((req, res) => {
    const file = path.join(root, decodeURIComponent(req.url.split('?')[0]) === '/' ? 'index.html' : decodeURIComponent(req.url.split('?')[0]));
    fs.readFile(file, (e, b) => e ? res.writeHead(404).end() : res.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream' }).end(b));
  });
  return new Promise(r => srv.listen(0, '127.0.0.1', () => r({ srv, url: `http://127.0.0.1:${srv.address().port}/index.html` })));
}
export async function openGame(browser, url, hook) {
  const page = await browser.newPage({ viewport: { width: 640, height: 360 } });
  page.on('pageerror', e => console.error('pageerror', e.message));
  await page.goto(url); await page.waitForFunction(() => window.__GS, null, { timeout: 60000 });
  return page;
}
export const launch = () => chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
