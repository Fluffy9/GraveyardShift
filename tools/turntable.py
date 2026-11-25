"""Render a turntable GIF (and a still sheet) of GLB models under the game's lights.
Usage: python3 tools/turntable.py OUT_BASENAME COLS name [name ...]
Writes OUT_BASENAME.gif (spinning, labelled) and OUT_BASENAME.png (still, 3/4 view)."""
import http.server, threading, functools, sys, os, io, math, json
from playwright.sync_api import sync_playwright
from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
out, cols, names = sys.argv[1], int(sys.argv[2]), sys.argv[3:]
CELL, SCALE, N = 112, 3, 40

class Q(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *a): pass
    def translate_path(self, p):
        p = p.split('?')[0]
        if p == '/turntable.html': return os.path.join(ROOT, 'tools/turntable.html')
        return os.path.join(ROOT, p.lstrip('/'))
srv = http.server.ThreadingHTTPServer(('127.0.0.1', 0), functools.partial(Q, directory=ROOT))
threading.Thread(target=srv.serve_forever, daemon=True).start()
port = srv.server_address[1]

def label(img, info):
    d = ImageDraw.Draw(img)
    try: f = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf', 13)
    except Exception: f = ImageFont.load_default()
    for i, c in enumerate(info):
        x = (i % cols) * CELL * SCALE + 6; y = (i // cols) * CELL * SCALE + 4
        d.text((x, y), c['name'], fill=(247, 219, 176), font=f, stroke_width=2, stroke_fill=(18, 14, 26))
        d.text((x, y + 16), f"{int(c['tris'])} tris", fill=(185, 161, 232), font=f, stroke_width=2, stroke_fill=(18, 14, 26))
    return img

with sync_playwright() as p:
    b = p.chromium.launch(executable_path='/usr/bin/google-chrome', args=['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--no-sandbox'])
    pg = b.new_page(viewport={'width': 1800, 'height': 1200})
    pg.goto(f'http://127.0.0.1:{port}/turntable.html')
    pg.wait_for_function('window.__ready===true')
    info = pg.evaluate(f'window.__load({json.dumps(names)}, {cols})')
    frames = []
    for i in range(N):
        pg.evaluate(f'window.__frame({2 * math.pi * i / N + 0.6})')
        img = Image.open(io.BytesIO(pg.locator('canvas').screenshot())).convert('RGB')
        img = img.resize((img.width // SCALE * SCALE, img.height // SCALE * SCALE), Image.NEAREST)
        frames.append(label(img, info))
    frames[0].save(out + '.png')
    q = [f.quantize(colors=96, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.NONE) for f in frames]
    q[0].save(out + '.gif', save_all=True, append_images=q[1:], duration=70, loop=0, disposal=2, optimize=True)
    print(json.dumps(info))
    b.close()
