import http.server, threading, functools
from playwright.sync_api import sync_playwright
class Q(http.server.SimpleHTTPRequestHandler):
    def log_message(self,*a): pass
srv=http.server.ThreadingHTTPServer(('127.0.0.1',0),functools.partial(Q,directory='/home/claude/game/dist'))
threading.Thread(target=srv.serve_forever,daemon=True).start()
port=srv.server_address[1]
variants={'tz':'#note{transform:translateZ(0)!important}','iso':'#note{isolation:isolate!important}','cont':'#note{contain:paint!important}','wc':'#note{will-change:opacity!important}'}
with sync_playwright() as p:
    b=p.chromium.launch(executable_path='/usr/bin/google-chrome',args=['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader'])
    for k,css in variants.items():
        pg=b.new_page(viewport={'width':1200,'height':675})
        pg.goto(f'http://127.0.0.1:{port}/index.html')
        pg.wait_for_function('document.body.classList.contains("menu")',timeout=120000)
        pg.keyboard.press('Enter'); pg.wait_for_timeout(1200)
        pg.add_style_tag(content=css)
        pg.wait_for_timeout(1500)
        pg.screenshot(path=f'/home/claude/game/out/band_{k}.png')
        pg.close()
    b.close()
