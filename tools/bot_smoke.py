import re, http.server, threading, functools
from playwright.sync_api import sync_playwright
src=open('/home/claude/game/tools/gif.py').read()
BOT=re.search(r'BOT = r"""(.*?)"""',src,re.S).group(1)
class Q(http.server.SimpleHTTPRequestHandler):
    def log_message(self,*a): pass
srv=http.server.ThreadingHTTPServer(('127.0.0.1',0),functools.partial(Q,directory='/home/claude/game/dist'))
threading.Thread(target=srv.serve_forever,daemon=True).start()
with sync_playwright() as p:
    b=p.chromium.launch(executable_path='/usr/bin/google-chrome',args=['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader'])
    pg=b.new_page(viewport={'width':480,'height':270}); errs=[]; pg.on('pageerror',lambda e: errs.append(str(e)))
    pg.goto(f'http://127.0.0.1:{srv.server_address[1]}/index.html'); pg.wait_for_function('document.body.classList.contains("menu")',timeout=120000)
    pg.evaluate(BOT); pg.evaluate('__GS.S.botAim=true; __GS.startGame()')
    for i in range(240):
        pg.evaluate('__bot(); __GS.stepManual(1/30)')
    print(pg.evaluate('({st:__GS.S.state,score:__GS.S.score,el:__GS.S.elapsed,notes:[...__GS.S.notes]})'), errs or 'no errors')
    pg.evaluate('__GS.S.elapsed=59.8')
    for i in range(30): pg.evaluate('__bot(); __GS.stepManual(1/30)')
    print(pg.evaluate('({st:__GS.S.state,wisps:__GS.enemies.filter(e=>e.wisp).length})'))
    b.close()
