import http.server, threading, functools
from playwright.sync_api import sync_playwright
class Q(http.server.SimpleHTTPRequestHandler):
    def log_message(self,*a): pass
srv=http.server.ThreadingHTTPServer(('127.0.0.1',0),functools.partial(Q,directory='/home/claude/game/dist'))
threading.Thread(target=srv.serve_forever,daemon=True).start()
with sync_playwright() as p:
    b=p.chromium.launch(executable_path='/usr/bin/google-chrome',args=['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader'])
    ctx=b.new_context(viewport={'width':390,'height':844},has_touch=True,is_mobile=True,device_scale_factor=2); pg=ctx.new_page()
    errs=[]; pg.on('pageerror',lambda e: errs.append(str(e)))
    pg.goto(f'http://127.0.0.1:{srv.server_address[1]}/index.html')
    pg.wait_for_function('document.body.classList.contains("menu")',timeout=120000)
    pg.touchscreen.tap(200,400); pg.wait_for_function('__GS.S.state==="tutorial"',timeout=30000)
    pg.add_style_tag(content='.tip-prompt{animation:none!important}'); pg.wait_for_timeout(400)
    pg.screenshot(path='/home/claude/game/out/tip_touch.png')
    pg.touchscreen.tap(200,500); pg.wait_for_timeout(500)
    print('after tap:', pg.evaluate('__GS.S.state'), 'crossed', pg.evaluate('__GS.S.crossed'), errs or 'no errors')
    b.close()
