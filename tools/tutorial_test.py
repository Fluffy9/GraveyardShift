import http.server, threading, functools, json
from playwright.sync_api import sync_playwright
class Q(http.server.SimpleHTTPRequestHandler):
    def log_message(self,*a): pass
srv=http.server.ThreadingHTTPServer(('127.0.0.1',0),functools.partial(Q,directory='/home/claude/game/dist'))
threading.Thread(target=srv.serve_forever,daemon=True).start()
port=srv.server_address[1]
SNAP="(()=>{const G=__GS;return {state:G.S.state,t:+G.S.timeLeft.toFixed(3),el:+G.S.elapsed.toFixed(3),hp:G.S.hp,pos:G.enemies.map(e=>[+e.pos.x.toFixed(3),+e.pos.y.toFixed(3)]),n:G.enemies.length}})()"
with sync_playwright() as p:
    b=p.chromium.launch(executable_path='/usr/bin/google-chrome',args=['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader'])
    pg=b.new_page(viewport={'width':1200,'height':675})
    errs=[]; pg.on('pageerror',lambda e: errs.append(str(e)))
    pg.goto(f'http://127.0.0.1:{port}/index.html')
    pg.wait_for_function('document.body.classList.contains("menu")',timeout=120000)
    pg.keyboard.press('Enter')
    # intro tip should freeze the game on the first tick
    pg.wait_for_function('__GS.S.state==="tutorial"',timeout=20000)
    a=pg.evaluate(SNAP); pg.wait_for_timeout(2500); c=pg.evaluate(SNAP)
    print('intro frozen:', a==c, a['state'], c['state'])
    pg.add_style_tag(content='.tip-prompt{animation:none!important}'); pg.screenshot(path='/home/claude/game/out/tip.png')
    # a held/early key within 250ms is ignored; later key dismisses and does NOT cross
    pg.wait_for_timeout(300); pg.keyboard.press('Space')
    pg.wait_for_timeout(200)
    d=pg.evaluate(SNAP); print('after Space:', d['state'], 'crossed:', pg.evaluate('__GS.S.crossed'))
    # play until the cross tip (2s of play) appears and freezes again
    pg.wait_for_function('__GS.S.state==="tutorial"',timeout=20000)
    a=pg.evaluate(SNAP); pg.wait_for_timeout(1500); c=pg.evaluate(SNAP)
    print('cross tip frozen:', a==c, a['el'])
    pg.wait_for_timeout(300); pg.keyboard.press('Enter'); pg.wait_for_timeout(300)
    print('resumed:', pg.evaluate('__GS.S.state'))
    # crossing before 2s suppresses the cross tip
    pg.evaluate('__GS.startGame()'); pg.wait_for_function('__GS.S.state==="tutorial"'); pg.wait_for_timeout(300); pg.keyboard.press('x'); pg.wait_for_timeout(200)
    pg.keyboard.press('Space'); pg.wait_for_timeout(3500)
    print('no cross tip after crossing:', pg.evaluate('__GS.S.state'), pg.evaluate('[...__GS.S.notes]'))
    # wisp tip at 60s: jump ahead
    pg.evaluate('__GS.S.elapsed=59.9'); pg.wait_for_function('__GS.S.state==="tutorial"',timeout=20000)
    n0=pg.evaluate('__GS.enemies.filter(e=>e.wisp).length'); pg.wait_for_timeout(300); pg.keyboard.press('Enter'); pg.wait_for_timeout(200)
    print('wisp spawned on dismiss:', n0, '->', pg.evaluate('__GS.enemies.filter(e=>e.wisp).length'))
    print('errors:', errs or 'none')
    b.close()
