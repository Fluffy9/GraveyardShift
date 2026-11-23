import http.server, threading, functools, os, shutil
from playwright.sync_api import sync_playwright
class Q(http.server.SimpleHTTPRequestHandler):
    def log_message(self,*a): pass
srv = http.server.ThreadingHTTPServer(('127.0.0.1', 0), functools.partial(Q, directory='/home/claude/game'))
threading.Thread(target=srv.serve_forever, daemon=True).start()
BOT = r"""
window.__bot = () => {
  const G = __GS, S = G.S, E = G.enemies, P = G.projectiles;
  if (S.state !== 'playing') return;
  S.botAim = true;
  if (S.hp < 2) S.hp = 2;               // keep the recording going
  const ready = S.dashCd <= 0 && S.dashRemaining <= 0;
  if (S.dashRemaining > 0) return;
  if (ready && E.some(e => e.targeted) && Math.random() < 0.55) { G.cross(); return; }
  const live = E.filter(e => e.spawn <= 0);
  const targets = live.filter(e => e.realm !== S.realm), threats = live.filter(e => e.realm === S.realm);
  let mx = 0, my = 0;
  let t = null, td = 1e9;
  for (const e of targets) { const d = e.pos.distanceTo(S.pos); if (d < td) { td = d; t = e; } }
  if (t) {
    const dx = t.pos.x - S.pos.x, dy = t.pos.y - S.pos.y;
    if (td < 3.6 && td > 1.2 && ready) { S.facing.set(dx / td, dy / td); G.cross(); return; }
    // approach to dash range, but keep a little distance
    const want = td > 3.0 ? 1 : -0.6;
    mx += dx / td * want; my += dy / td * want;
  } else { mx += -S.pos.x * 0.1; my += -S.pos.y * 0.1; }
  for (const e of threats) {
    const dx = S.pos.x - e.pos.x, dy = S.pos.y - e.pos.y, d = Math.hypot(dx, dy);
    if (d < 2.4) { mx += dx / d * (2.6 - d) * 1.6; my += dy / d * (2.6 - d) * 1.6;
      if (d < 1.2 && ready && t) { const ddx = t.pos.x - S.pos.x, ddy = t.pos.y - S.pos.y, l = Math.hypot(ddx, ddy); S.facing.set(ddx / l, ddy / l); G.cross(); return; } }
  }
  for (const b of P) {
    if (b.realm !== S.realm) continue;
    const dx = S.pos.x - b.pos.x, dy = S.pos.y - b.pos.y, d = Math.hypot(dx, dy);
    if (d < 2.5) { mx += -b.dir.y * 1.5 * Math.sign(-b.dir.y * dx + b.dir.x * dy || 1); my += b.dir.x * 1.5 * Math.sign(-b.dir.y * dx + b.dir.x * dy || 1); }
  }
  const l = Math.hypot(mx, my);
  S.botInput = l > 0.15 ? { x: mx / l, y: my / l } : { x: 0, y: 0 };
};
"""
out = '/home/claude/game/out/frames'
shutil.rmtree(out, ignore_errors=True); os.makedirs(out)
with sync_playwright() as p:
    b = p.chromium.launch(executable_path='/usr/bin/google-chrome', args=['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader'])
    pg = b.new_page(viewport={'width': 960, 'height': 540})
    pg.on('pageerror', lambda e: print('PAGEERROR', e))
    pg.goto(f'http://127.0.0.1:{srv.server_address[1]}/dist/index.html'); pg.wait_for_timeout(2500)
    pg.evaluate(BOT)
    FPS = 15
    # a few title frames
    for i in range(18):
        pg.evaluate(f"__GS.stepManual({1/FPS})"); pg.screenshot(path=f'{out}/f{i:04d}.png')
    pg.evaluate("__GS.S.botAim = true; __GS.startGame(); __GS.S.elapsed = 56; __GS.S.timeLeft = 124; for (let i=0;i<4;i++) __GS.S.spawnClock = 0;")
    n = 18
    for i in range(int(FPS * 15)):
        pg.evaluate(f"__bot(); __GS.stepManual({1/FPS})")
        pg.screenshot(path=f'{out}/f{n:04d}.png'); n += 1
    print(pg.evaluate("JSON.stringify({score:__GS.S.score, banished:__GS.S.banished, maxCombo:__GS.S.maxCombo, hp:__GS.S.hp, elapsed:__GS.S.elapsed})"))
    b.close()
print('frames', n)
