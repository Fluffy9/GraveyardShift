import sys, http.server, threading, functools
from playwright.sync_api import sync_playwright
class Q(http.server.SimpleHTTPRequestHandler):
    def log_message(self,*a): pass
srv=http.server.ThreadingHTTPServer(('127.0.0.1',0),functools.partial(Q,directory='/home/claude/game/dist'))
threading.Thread(target=srv.serve_forever,daemon=True).start()
port=srv.server_address[1]
W,H,out=int(sys.argv[1]),int(sys.argv[2]),sys.argv[3]
with sync_playwright() as p:
    b=p.chromium.launch(executable_path='/usr/bin/google-chrome',args=['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader'])
    ctx=b.new_context(viewport={'width':W,'height':H},has_touch=True,is_mobile=True,device_scale_factor=2); pg=ctx.new_page()
    logs=[]
    pg.on('pageerror',lambda e: logs.append('PAGEERROR '+str(e)))
    pg.on('response',lambda r: logs.append(f'HTTP {r.status} {r.url[:80]}') if r.status>=400 else None)
    pg.goto(f'http://127.0.0.1:{port}/index.html')
    pg.wait_for_function('document.body.classList.contains("menu")',timeout=120000)
    pg.keyboard.press('Enter'); pg.wait_for_timeout(1200)
    pg.evaluate('__GS.S.hp=2; __GS.S.dashCd=2.5')
    pg.wait_for_timeout(1500)
    pg.screenshot(path=out)
    print('\n'.join(logs[:20]) or 'no errors')
    b.close()
