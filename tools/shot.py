"""Usage: python3 shot.py <html-or-preview> out.png [glb files...] [--yaw x] [--scale s] [--wait ms] [--keys seq]"""
import sys, json, os, http.server, threading, functools
from playwright.sync_api import sync_playwright

args = sys.argv[1:]
opts = {}
pos = []
i = 0
while i < len(args):
    if args[i].startswith('--'):
        opts[args[i][2:]] = args[i + 1]; i += 2
    else:
        pos.append(args[i]); i += 1

root = '/home/claude/game'
class Q(http.server.SimpleHTTPRequestHandler):
    def log_message(self,*a): pass
handler = functools.partial(Q, directory=root)
srv = http.server.ThreadingHTTPServer(('127.0.0.1', 0), handler)
threading.Thread(target=srv.serve_forever, daemon=True).start()
port = srv.server_address[1]

page_path, out = pos[0], pos[1]
with sync_playwright() as p:
    b = p.chromium.launch(executable_path='/usr/bin/google-chrome', args=['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'])
    pg = b.new_page(viewport={'width': int(opts.get('w', 1200)), 'height': int(opts.get('h', 400))})
    logs = []
    pg.on('console', lambda m: logs.append(m.type + ': ' + m.text))
    pg.on('pageerror', lambda e: logs.append('PAGEERROR: ' + str(e)))
    if page_path == 'preview':
        files = ['/' + os.path.relpath(f, root) for f in pos[2:]]
        pg.goto(f'http://127.0.0.1:{port}/tools/blank.html')
        pg.evaluate(f"window.FILES={json.dumps(files)};window.YAW={opts.get('yaw',0)};window.SCALE={opts.get('scale',1)};")
        pg.add_script_tag(url=f'http://127.0.0.1:{port}/tools/preview.bundle.js')
        pg.wait_for_function('window.DONE || window.ERR', timeout=20000)
    else:
        pg.goto(f'http://127.0.0.1:{port}/{page_path}')
        pg.wait_for_timeout(int(opts.get('wait', 1500)))
        for k in opts.get('keys', '').split(','):
            if not k: continue
            if k.startswith('wait'):
                pg.wait_for_timeout(int(k[4:])); continue
            if ':' in k:
                key, ms = k.split(':'); pg.keyboard.down(key); pg.wait_for_timeout(int(ms)); pg.keyboard.up(key)
            else:
                pg.keyboard.press(k)
        pg.wait_for_timeout(int(opts.get('after', 300)))
    pg.screenshot(path=out)
    print('\n'.join(l for l in logs[-30:] if 'GPU stall' not in l))
    b.close()
