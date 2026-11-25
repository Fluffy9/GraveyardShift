"""Hero renders of the Caretaker's Lantern via tools/hero_render.html.
Usage: python3 tools/hero_render.py OUTDIR
Writes: hero_dark.png (2048, backdrop + glow), hero_cutout.png (2048, transparent), hero_turntable.gif,
        angles.png (four views)."""
import http.server, threading, functools, sys, os, io, math
from playwright.sync_api import sync_playwright
from PIL import Image, ImageDraw, ImageFilter

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = sys.argv[1]; os.makedirs(OUT, exist_ok=True)

class Q(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *a): pass
srv = http.server.ThreadingHTTPServer(('127.0.0.1', 0), functools.partial(Q, directory=ROOT))
threading.Thread(target=srv.serve_forever, daemon=True).start()
port = srv.server_address[1]

def page(p, w, h):
    pg = p.new_page(viewport={'width': w, 'height': h})
    pg.goto(f'http://127.0.0.1:{port}/tools/hero_render.html?w={w}&h={h}')
    pg.wait_for_function('window.__ready===true'); pg.evaluate('window.__load()')
    return pg
def shot(pg, **kw):
    import json
    pg.evaluate(f'window.__shot({json.dumps(kw)})')
    return Image.open(io.BytesIO(pg.locator('canvas').screenshot(omit_background=True))).convert('RGBA')

def vignette(img, col=(18, 12, 28)):
    w, h = img.size
    m = Image.new('L', (w, h), 0); d = ImageDraw.Draw(m)
    d.ellipse((-w * 0.25, -h * 0.2, w * 1.25, h * 1.2), fill=255)
    m = m.filter(ImageFilter.GaussianBlur(w // 6))
    dark = Image.new('RGBA', (w, h), col + (255,))
    return Image.composite(img, dark, m)

with sync_playwright() as p:
    b = p.chromium.launch(executable_path='/usr/bin/google-chrome', args=['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--no-sandbox'])
    pg = page(b, 1024, 1024)
    hero = shot(pg, yaw=0.62, pitch=0.16, dist=3.3, bg='#211a2d', glow=True, t=0.3)
    vignette(hero).resize((2048, 2048), Image.LANCZOS).save(f'{OUT}/hero_dark.png')
    shot(pg, yaw=0.62, pitch=0.16, dist=3.3, bg='none', glow=False).resize((2048, 2048), Image.LANCZOS).save(f'{OUT}/hero_cutout.png')
    views = [shot(pg, yaw=y, pitch=0.12, dist=3.4, bg='#211a2d', glow=True) for y in (0.0, 0.78, 1.57, 3.14)]
    sheet = Image.new('RGBA', (4 * 512, 512))
    for i, v in enumerate(views): sheet.paste(v.resize((512, 512), Image.LANCZOS), (i * 512, 0))
    sheet.save(f'{OUT}/angles.png')
    pg.close()
    pg = page(b, 480, 480)
    frames = []
    for i in range(48):
        f = shot(pg, yaw=0.62 + 2 * math.pi * i / 48, pitch=0.16, dist=3.3, bg='#211a2d', glow=True, t=i / 15).convert('RGB')
        frames.append(f.quantize(colors=128, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.NONE))
    frames[0].save(f'{OUT}/hero_turntable.gif', save_all=True, append_images=frames[1:], duration=60, loop=0, disposal=2, optimize=True)
    b.close()
print('ok')
