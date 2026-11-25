"""Pixel icons of the hero lantern for the HUD, in the game palette with a dark outline.
Usage: python3 tools/lantern_icon.py OUTDIR   (needs /home/claude/pix for the palette helpers)
Writes icon_lantern_<w>x<h>.png at native size plus an 8x preview sheet."""
import http.server, threading, functools, sys, os, io, json
import numpy as np
from playwright.sync_api import sync_playwright
from PIL import Image
sys.path.insert(0, '/home/claude/pix')
from lib import quant_idx, PAL

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = sys.argv[1]; os.makedirs(OUT, exist_ok=True)
SIZES = [(12, 14), (16, 19), (24, 28), (32, 37)]
K = 8                                                     # supersample
OUTLINE = (18, 14, 26)

class Q(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *a): pass
srv = http.server.ThreadingHTTPServer(('127.0.0.1', 0), functools.partial(Q, directory=ROOT))
threading.Thread(target=srv.serve_forever, daemon=True).start()
port = srv.server_address[1]

def to_icon(img, w, h):
    """Crop to the lantern, fit to w x h, then choose each pixel by majority vote of palette colours in its block
    (averaging would mix amber glass with dark iron into olive). Bright amber/flame pixels get extra weight so the
    windows stay lit; covered-area threshold keeps the thin handle at the larger sizes."""
    rgba = np.asarray(img.convert('RGBA'))
    ys, xs = np.nonzero(rgba[..., 3] > 30)
    y0, y1, x0, x1 = ys.min(), ys.max() + 1, xs.min(), xs.max() + 1
    bw, bh = x1 - x0, y1 - y0
    s = max(bw / w, bh / h)                                    # fit, keep aspect, centre
    cw, ch = w * s, h * s
    cx0, cy0 = (x0 + x1) / 2 - cw / 2, (y0 + y1) / 2 - ch / 2
    crop = Image.fromarray(rgba).crop((int(cx0), int(cy0), int(cx0 + cw), int(cy0 + ch))).resize((w * K, h * K), Image.LANCZOS)
    a = np.asarray(crop).astype(np.float32)
    idx = quant_idx(a[..., :3].clip(0, 255).astype(np.uint8))
    lum = PAL.astype(np.float32) @ np.array([0.3, 0.59, 0.11])
    out = np.zeros((h + 2, w + 2, 4), np.uint8)
    for y in range(h):
        for x in range(w):
            blk = idx[y * K:(y + 1) * K, x * K:(x + 1) * K].ravel()
            al = a[y * K:(y + 1) * K, x * K:(x + 1) * K, 3].ravel() > 100
            if al.mean() < 0.3: continue
            b = blk[al]
            votes = np.bincount(b, minlength=len(PAL)) / len(b)
            dark = lum < 70                                      # iron, soot, outline colours
            if votes[dark].sum() >= 0.3 + 3.0 / w: pick = np.where(dark, votes, 0).argmax()   # lines carry the shape
            else: pick = votes.argmax()
            out[y + 1, x + 1] = (*PAL[pick], 255)
    m = out[..., 3] > 0
    ring = np.zeros_like(m)
    for dy, dx in ((1, 0), (-1, 0), (0, 1), (0, -1)): ring |= np.roll(np.roll(m, dy, 0), dx, 1)
    out[ring & ~m] = (*OUTLINE, 255)
    return Image.fromarray(out)

with sync_playwright() as p:
    b = p.chromium.launch(executable_path='/usr/bin/google-chrome', args=['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--no-sandbox'])
    icons = []
    for w, h in SIZES:
        pg = b.new_page(viewport={'width': 512, 'height': 512})
        pg.goto(f'http://127.0.0.1:{port}/tools/hero_render.html?w=512&h=512')
        pg.wait_for_function('window.__ready===true'); pg.evaluate('window.__load()'); pg.evaluate('window.__iconMode()')
        pg.evaluate('window.__shot(' + json.dumps(dict(yaw=0.3 if w >= 24 else 0.12, pitch=0.12, dist=3.0, look=0.49, bg='none', glow=False)) + ')')
        img = Image.open(io.BytesIO(pg.locator('canvas').screenshot(omit_background=True)))
        ic = to_icon(img, w, h); ic.save(f'{OUT}/icon_lantern_{w}x{h}.png'); icons.append(ic)
        pg.close()
    b.close()
sheet_w = sum(i.width * 8 + 32 for i in icons); sheet_h = max(i.height for i in icons) * 8 + 32
sheet = Image.new('RGBA', (sheet_w, sheet_h), (33, 26, 45, 255)); x = 16
for i in icons:
    up = i.resize((i.width * 8, i.height * 8), Image.NEAREST); sheet.alpha_composite(up, (x, 16)); x += up.width + 32
sheet.save(f'{OUT}/icon_sheet.png')
print('ok')
