import sys, http.server, threading, functools
from playwright.sync_api import sync_playwright
class Q(http.server.SimpleHTTPRequestHandler):
    def log_message(self,*a): pass
srv = http.server.ThreadingHTTPServer(('127.0.0.1', 0), functools.partial(Q, directory='/home/claude/game'))
threading.Thread(target=srv.serve_forever, daemon=True).start()
orient = sys.argv[1]
with sync_playwright() as p:
    b = p.chromium.launch(executable_path='/usr/bin/google-chrome', args=['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader'])
    dev = dict(p.devices['iPhone 13'])
    dev.pop('default_browser_type', None)
    if orient == 'land': dev['viewport'] = {'width': 844, 'height': 390}
    ctx = b.new_context(**dev); pg = ctx.new_page()
    pg.on('pageerror', lambda e: print('PAGEERROR', e))
    pg.goto(f'http://127.0.0.1:{srv.server_address[1]}/dist/index.html'); pg.wait_for_timeout(2500)
    pg.screenshot(path=f'out/m_{orient}_title.png')
    cdp = ctx.new_cdp_session(pg)
    def touch(kind, pts): cdp.send('Input.dispatchTouchEvent', {'type': kind, 'touchPoints': [{'x': x, 'y': y, 'id': i} for i, x, y in pts]})
    W, H = pg.viewport_size['width'], pg.viewport_size['height']
    touch('touchStart', [(0, W*0.7, H*0.5)]); touch('touchEnd', [])
    pg.wait_for_timeout(2500)
    # drag joystick up-left for a while
    sx, sy = W*0.2, H*0.75
    touch('touchStart', [(1, sx, sy)])
    for k in range(12):
        touch('touchMove', [(1, sx - 3*k, sy - 4*k)]); pg.wait_for_timeout(60)
    pg.wait_for_timeout(600)
    pg.screenshot(path=f'out/m_{orient}_move.png')
    # cross with right-side tap while holding stick
    touch('touchStart', [(1, sx-36, sy-48), (2, W*0.85, H*0.8)])
    touch('touchEnd', [(1, sx-36, sy-48)])
    pg.wait_for_timeout(120)
    pg.screenshot(path=f'out/m_{orient}_cross.png')
    touch('touchEnd', [])
    print(orient, pg.evaluate("JSON.stringify({state:__GS.S.state, pos:__GS.S.pos, realm:__GS.S.realm, cd:__GS.S.dashCd, touch:document.body.className})"))
    b.close()
