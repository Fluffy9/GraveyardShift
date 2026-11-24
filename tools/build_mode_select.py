# Builds the play-style select screen assets into hud/ui/ (1 PNG pixel = 1 art pixel on the HUD grid).
#
# Two kinds of output:
#  * Paintings (cathedral background, the three mode illustrations) are re-pixelated from
#    assets/playstyle-ui: premultiplied area downsample to the target art size, hard alpha, one shared
#    palette, single-pixel despeckle. The supplied PNGs are soft "pixel-look" art with no consistent grid,
#    so scaling them up directly would never sit on the HUD's integer pixel grid.
#  * UI chrome (card frames, banner, divider, corners, arrows, pips, sparkles, icons, hatch) is redrawn
#    here in code, using the asset sheet only as a style reference, so it shares the HUD palette and grid.
#
# Run manually after changing sources:  python3 tools/build_mode_select.py   (needs numpy + Pillow)
import os, sys
import numpy as np
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__)); ROOT = os.path.dirname(HERE)
SRC = os.path.join(ROOT, 'assets', 'playstyle-ui')
OUT = os.path.join(ROOT, 'hud', 'ui')
sys.path.insert(0, HERE)
import font5x7 as F

# ---------------------------------------------------------------- palette (chrome)
HEX = {
    'k': '#0e0816',  # outline / darkest
    'f': '#170d22',  # card fill
    'g': '#22142f',  # fill highlight
    'm': '#c07aa6',  # mauve line (standard)
    'n': '#7e4580',  # mauve shade
    'v': '#b05cf0',  # violet line (selected)
    'w': '#f3e8ff',  # white-violet highlight
    'u': '#6a2aa8',  # violet glow
    'x': '#3a1460',  # deep violet glow
    'l': '#84708a',  # locked line
    'e': '#4e4256',  # locked shade
    'h': '#211830',  # hatch stripe
    'p': '#f7dbb0',  # parchment (game palette)
    'a': '#ffb85b',  # amber (game palette)
    'i': '#b49ab6',  # icon
    'j': '#6e5a74',  # icon shade
    'q': '#e9d4ea',  # paper
}
def rgba(c): c = HEX[c]; return (int(c[1:3], 16), int(c[3:5], 16), int(c[5:7], 16), 255)

def from_rows(rows):
    w = max(len(r) for r in rows); im = Image.new('RGBA', (w, len(rows)), (0, 0, 0, 0))
    for y, r in enumerate(rows):
        for x, ch in enumerate(r):
            if ch not in '. ': im.putpixel((x, y), rgba(ch))
    return im
def from_grid(g):
    h, w = len(g), len(g[0]); im = Image.new('RGBA', (w, h), (0, 0, 0, 0))
    for y in range(h):
        for x in range(w):
            if g[y][x]: im.putpixel((x, y), rgba(g[y][x]))
    return im
def recolor(im, mapping):
    out = im.copy(); px = out.load(); inv = {rgba(k): rgba(v) for k, v in mapping.items()}
    for y in range(out.height):
        for x in range(out.width):
            if px[x, y] in inv: px[x, y] = inv[px[x, y]]
    return out
mirror = lambda im: im.transpose(Image.FLIP_LEFT_RIGHT)

# ---------------------------------------------------------------- shape helpers
def chamfer_inside(N, M, d, c):
    """Chamfered rectangle (corner cut c) inset by d, as a boolean mask of size MxN."""
    y, x = np.mgrid[0:M, 0:N]
    xi, yi = x - d, y - d; xr, yb = (N - 1 - d) - x, (M - 1 - d) - y
    inside = (xi >= 0) & (yi >= 0) & (xr >= 0) & (yb >= 0)
    for a, b in ((xi, yi), (xr, yi), (xi, yb), (xr, yb)):
        inside &= (a + b) >= c
    return inside

def card_frame(kind, N=32):
    """9-slice card border (slice 12). kind: std | sel | lock. Centre is left transparent (CSS fills it)."""
    line, shade, glow = {'std': ('m', 'n', None), 'sel': ('v', 'u', 'x'), 'lock': ('l', 'e', None)}[kind]
    g = [[None] * N for _ in range(N)]
    rings = [(0, glow), (1, line), (2, shade), (3, 'f'), (4, 'f')]
    for d, col in rings:
        if col is None: continue
        ring = chamfer_inside(N, N, d, 4) & ~chamfer_inside(N, N, d + 1, 4)
        for y, x in zip(*np.nonzero(ring)): g[y][x] = col
    fill = chamfer_inside(N, N, 5, 4)
    for y, x in zip(*np.nonzero(fill)):
        if g[y][x] is None: g[y][x] = 'f'
    # inner corner bracket + dot, mirrored into all four corners
    br = shade if kind != 'sel' else 'v'
    pts = [(6, 6), (7, 6), (8, 6), (9, 6), (6, 7), (6, 8), (6, 9), (8, 8)]
    for (x, y) in pts:
        for X, Y in ((x, y), (N - 1 - x, y), (x, N - 1 - y), (N - 1 - x, N - 1 - y)):
            g[Y][X] = br
    if kind == 'sel':           # bright glints on the chamfers
        for (x, y) in ((1, 4), (2, 3), (3, 2), (4, 1)):
            for X, Y in ((x, y), (N - 1 - x, y), (x, N - 1 - y), (N - 1 - x, N - 1 - y)):
                g[Y][X] = 'w'
    im = from_grid(g)
    # clear the centre so CSS can fill it (solid or hatch) without the border-image stretching
    c = np.asarray(im).copy(); c[12:N - 12, 12:N - 12] = 0
    return Image.fromarray(c, 'RGBA')

def tab_frame(kind, N=12):
    """Small chamfered 9-slice (slice 4) for tabs, tiles and chips. kind: std | on | dim."""
    line, inner, fill = {'std': ('m', 'n', 'f'), 'on': ('v', 'u', 'x'), 'dim': ('e', 'f', 'f')}[kind]
    g = [[None] * N for _ in range(N)]
    for d, col in ((0, line), (1, inner)):
        ring = chamfer_inside(N, N, d, 2) & ~chamfer_inside(N, N, d + 1, 2)
        for y, x in zip(*np.nonzero(ring)): g[y][x] = col
    for y, x in zip(*np.nonzero(chamfer_inside(N, N, 2, 2))): g[y][x] = fill
    if kind == 'on':
        for (x, y) in ((0, 2), (1, 1), (2, 0)):
            for X, Y in ((x, y), (N - 1 - x, y), (x, N - 1 - y), (N - 1 - x, N - 1 - y)): g[Y][X] = 'w'
    return from_grid(g)

def hex_inside(W, H, d):
    y, x = np.mgrid[0:H, 0:W]
    dxe = np.minimum(x, W - 1 - x) - d
    half = np.minimum(H / 2 - d, dxe + 1.5)
    return (dxe >= 0) & (np.abs(y + 0.5 - H / 2) <= half)

def banner(kind, W=40, H=22):
    """9-slice horizontal banner with pointed ends (slice L/R 12, T/B 5)."""
    line, shade, fill = {'std': ('m', 'n', 'f'), 'sel': ('v', 'u', 'x'), 'title': ('m', 'n', 'k')}[kind]
    g = [[None] * W for _ in range(H)]
    for d, col in ((0, line), (1, shade), (2, fill)):
        m = hex_inside(W, H, d) & (~hex_inside(W, H, d + 1) if d < 2 else True)
        for y, x in zip(*np.nonzero(m)): g[y][x] = col
    if kind == 'sel':           # lighter top half of the fill, like the reference button
        top = hex_inside(W, H, 3)
        for y, x in zip(*np.nonzero(top)):
            if y < H // 2: g[y][x] = 'u'
    # inner keyline
    k = hex_inside(W, H, 3) & ~hex_inside(W, H, 4)
    for y, x in zip(*np.nonzero(k)):
        if kind != 'sel': g[y][x] = 'n' if kind == 'std' else 'n'
    return from_grid(g)

def divider(W=48, H=5):
    """3-slice divider: dotted taper into a solid line (slice 20 left/right)."""
    g = [[None] * W for _ in range(H)]
    taper = [2, 5, 8, 10, 12, 13, 14, 15, 16, 17, 18, 19]
    for x in range(W):
        xm = min(x, W - 1 - x)
        if xm >= 20 or xm in taper:
            g[2][x] = 'm' if xm >= 14 else 'n'
    return from_grid(g)

# ---------------------------------------------------------------- hand-authored pixel pieces
CORNER = [
    'mmmmmmmmmmmmmnnn.n..n',
    'mwmmmmmmmmnn.........',
    'mm...................',
    'mm.mmmmmmn...........',
    'mm.m.................',
    'mm.m.nmmn............',
    'mm.m.m..m............',
    'mm.m.n.mn............',
    'mm.n.................',
    'mn...................',
    'mn.n.................',
    'n....................',
    'n....................',
    'n....................',
    '.....................',
    'n....................',
    '.....................',
    '.....................',
    'n....................',
]
ARROW = [
    '.......k',
    '......km',
    '.....kmm',
    '....kmfm',
    '...kmffm',
    '..kmfffm',
    '.kmffffm',
    'kmfffffm',
    '.kmffffm',
    '..kmfffm',
    '...kmffm',
    '....kmfm',
    '.....kmm',
    '......km',
    '.......k',
]
PIP = ['...m...', '..mfm..', '.mfgfm.', 'mfgggfm', '.mfgfm.', '..mfm..', '...m...']
PIP_SEL = ['....x....', '...xvx...', '..xvwvx..', '.xvwwwvx.', 'xvwwwwwvx', '.xvwwwvx.', '..xvwvx..', '...xvx...', '....x....']
DOT_ON = ['..w..', '.www.', 'wwwww', '.www.', '..w..']
DOT_OFF = ['..n..', '.nfn.', 'nfffn', '.nfn.', '..n..']
SPARK = ['...w...', '...v...', '..vwv..', 'wvwwwvw', '..vwv..', '...v...', '...w...']
SPARK_S = ['.w.', 'wvw', '.w.']
ICONS = {
    'book': ['.iii.iii.', 'i...i...i', 'i.j.i.j.i', 'i...i...i', 'i.j.i.j.i', 'i...i...i', 'iiiijiiii', '....j....'],
    'layers': ['....i....', '..ii.ii..', 'ii.....ii', '..ii.ii..', 'i...i...i', '.ii...ii.', 'i..iii..i', '.ii...ii.', '...iii...'],
    'hourglass': ['iiiiiii', '.i...i.', '.ijjji.', '..iji..', '...i...', '..i.i..', '.i.j.i.', '.ijjji.', 'iiiiiii'],
    'lightning': ['...iii.', '..iii..', '..ii...', '.iiiii.', '...iii.', '...ii..', '..ii...', '..i....', '.i.....'],
    'infinity': ['.ii...ii.', 'i..i.i..i', 'i...i...i', 'i..i.i..i', '.ii...ii.'],
    'trophy': ['iiiiiiiii', 'i.iiiii.i', 'i.iijii.i', '.iiijiii.', '..iiiii..', '...iii...', '....i....', '...iii...', '..iiiii..'],
    'chart': ['.......ii', '.......ii', '....ii.ii', '....ii.ii', '.ii.ii.ii', '.ii.ii.ii', '.ii.ii.ii', '.........', 'iiiiiiiii'],
    'skull': ['.iiiiiii.', 'iiiiiiiii', 'iiiiiiiii', 'i..iii..i', 'i..iii..i', 'iiii.iiii', '.iiiiiii.', '..i.i.i..', '..iiiii..'],
    'target': ['..iiiii..', '.i.....i.', 'i..iii..i', 'i.i...i.i', 'i.i.i.i.i', 'i.i...i.i', 'i..iii..i', '.i.....i.', '..iiiii..'],
    'lock': ['..iii..', '.i...i.', '.i...i.', 'iiiiiii', 'iiijiii', 'iiijiii', 'iiiiiii'],
}
HATCH = ['h.....', '.h....', '..h...', '...h..', '....h.', '.....h']

# ---------------------------------------------------------------- re-pixelating paintings
def to_grid(img, w, h, alpha_cut=0.5):
    a = np.asarray(img.convert('RGBA')).astype(np.float32) / 255
    pm = np.dstack([a[..., :3] * a[..., 3:4], a[..., 3:4]])
    small = np.asarray(Image.fromarray((pm * 255).astype(np.uint8), 'RGBA').resize((w, h), Image.BOX)).astype(np.float32) / 255
    al = small[..., 3]
    col = np.where(al[..., None] > 1e-3, small[..., :3] / np.maximum(al[..., None], 1e-3), 0)
    return np.clip(col, 0, 1), al >= alpha_cut

def make_palette(grids, n):
    px = np.concatenate([c[m] for c, m in grids])
    q = Image.fromarray((px[None] * 255).astype(np.uint8), 'RGB').quantize(n, method=Image.Quantize.MEDIANCUT, kmeans=3)
    return np.array(q.getpalette()[:n * 3]).reshape(-1, 3) / 255

def apply_palette(col, mask, pal):
    idx = ((col[..., None, :] - pal[None, None]) ** 2).sum(-1).argmin(-1)
    H, W = idx.shape; out = idx.copy()
    for y in range(1, H - 1):                     # despeckle lone pixels
        for x in range(1, W - 1):
            if not mask[y, x]: continue
            nb = [idx[y - 1, x], idx[y + 1, x], idx[y, x - 1], idx[y, x + 1]]
            if idx[y, x] not in nb:
                v, c = np.unique(nb, return_counts=True)
                if c.max() >= 3: out[y, x] = v[c.argmax()]
    rgba_ = np.zeros((H, W, 4), np.uint8)
    rgba_[..., :3] = (pal[out] * 255).astype(np.uint8); rgba_[..., 3] = mask * 255
    return Image.fromarray(rgba_, 'RGBA')

def text_px(im, x, y, s, col):
    """Stamp text in the game's 5x7 pixel font."""
    for ch in s.upper():
        rows = F.G.get(ch)
        if rows is None: x += 4; continue
        for r, row in enumerate(rows):
            for c, v in enumerate(row):
                if v == '#': im.putpixel((x + c, y + r), col)
        x += max(len(r) for r in rows) + 1
    return x

def locked_variant(im):
    """Dim + desaturate toward the locked mauve-grey so a locked mode reads as unavailable."""
    a = np.asarray(im).astype(np.float32)
    lum = (a[..., :3] @ np.array([.3, .59, .11]))[..., None]
    tint = np.array([132, 112, 138], np.float32) / 255
    rgb = lum / 255 * tint * 255 * 0.85 + 10
    out = a.copy(); out[..., :3] = np.clip(rgb, 0, 255)
    return Image.fromarray(out.astype(np.uint8), 'RGBA')

def main():
    os.makedirs(OUT, exist_ok=True)
    out = {}
    # paintings
    bg = Image.open(os.path.join(SRC, 'background', 'cathedral.png')).convert('RGBA')
    w, h = bg.size; ch = round(w * 9 / 16); top = (h - ch) // 2
    sources = {
        'bg_cathedral': (bg.crop((0, top, w, top + ch)), 480, 270),
        'mode_night': (Image.open(os.path.join(SRC, 'modes', 'night_shift.png')), 66, 57),
        'mode_quick': (Image.open(os.path.join(SRC, 'modes', 'quick_shift.png')), 59, 57),
        'mode_overtime': (Image.open(os.path.join(SRC, 'modes', 'overtime.png')), 61, 57),
    }
    grids = {k: to_grid(im, tw, th) for k, (im, tw, th) in sources.items()}
    pal = make_palette(list(grids.values()), 48)
    for k, (c, m) in grids.items():
        out[k] = apply_palette(c, m, pal)
    # the newspaper's painted headline turns to mush at this size: repaint it as clean blocky headline ink
    # (the card already names the mode in the game font underneath)
    ov = out['mode_overtime']; hx, hy, hw, hh = HEADLINE
    ink = (70, 38, 78, 255)
    from collections import Counter
    paper = Counter(ov.getpixel((xx, yy)) for yy in range(hy + hh, hy + hh + 12) for xx in range(hx, hx + hw)
                    if ov.getpixel((xx, yy))[3]).most_common(1)[0][0]      # the sheet's own paper colour
    for yy in range(hy, hy + hh):
        for xx in range(hx, hx + hw):
            if ov.getpixel((xx, yy))[3]: ov.putpixel((xx, yy), paper)
    x = hx + 1
    for n in (7, 4, 8, 5):                         # headline words, 2 px tall
        for xx in range(x, min(x + n, hx + hw - 1)):
            for yy in (hy + 1, hy + 2): ov.putpixel((xx, yy), ink)
        x += n + 2
    x = hx + 1
    for n in (5, 3, 6, 4, 5):                      # sub-headline, 1 px
        for xx in range(x, min(x + n, hx + hw - 1)): ov.putpixel((xx, hy + 5), (150, 96, 150, 255))
        x += n + 2
    out['mode_quick_locked'] = locked_variant(out['mode_quick'])
    # chrome
    out['card_std'] = card_frame('std'); out['card_sel'] = card_frame('sel'); out['card_lock'] = card_frame('lock')
    out['banner'] = banner('std'); out['banner_sel'] = banner('sel'); out['banner_title'] = banner('title')
    out['divider'] = divider()
    out['tab'] = tab_frame('std'); out['tab_on'] = tab_frame('on'); out['tab_dim'] = tab_frame('dim')
    out['corner_l'] = from_rows(CORNER); out['corner_r'] = mirror(out['corner_l'])
    out['arrow_l'] = from_rows(ARROW); out['arrow_r'] = mirror(out['arrow_l'])
    out['arrow_l_on'] = recolor(out['arrow_l'], {'m': 'v'}); out['arrow_r_on'] = mirror(out['arrow_l_on'])
    out['pip'] = from_rows(PIP); out['pip_sel'] = from_rows(PIP_SEL); out['pip_lock'] = recolor(out['pip'], {'m': 'l'})
    out['dot_on'] = from_rows(DOT_ON); out['dot_off'] = from_rows(DOT_OFF)
    out['spark'] = from_rows(SPARK); out['spark_s'] = from_rows(SPARK_S)
    for k, rows in ICONS.items(): out['icon_' + k] = from_rows(rows)
    out['hatch'] = Image.new('RGBA', (6, 6), rgba('f')); out['hatch'].alpha_composite(from_rows(HATCH))
    for k, im in out.items(): im.save(os.path.join(OUT, k + '.png'))
    print('mode select assets:', len(out), '->', os.path.relpath(OUT, ROOT))

HEADLINE = (12, 19, 29, 8)   # x, y, w, h of the newspaper headline on mode_overtime (art px)

if __name__ == '__main__':
    main()
