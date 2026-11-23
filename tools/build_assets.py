import sys, os, json
sys.path.insert(0, '/home/claude/pix')
import numpy as np
from PIL import Image
from sprites import *
from lib import snap, quant_idx, clean_idx, despeckle, PAL as GPAL
import font5x7 as F

OUT = '/home/claude/pix/out'; os.makedirs(OUT, exist_ok=True)
S = {}   # name -> Canvas

# ---- hearts, icons ----
S['heart'] = heart_full(); S['heart_empty'] = heart_empty()
S['icon_lantern'] = from_grid(LANTERN); S['icon_ghost'] = from_grid(GHOST); S['icon_hat'] = from_grid(HAT)

# ---- portrait medallion (caretaker) ----
m = medallion(25, C('n'), C('4')); m.paste(from_grid(HAT), 5, 6); S['portrait'] = m

# ---- lantern bar: medallion + capsule + 6 segments ----
BAR_W, BAR_H = 86, 21
bar = Canvas(BAR_W, BAR_H)
bar.paste(capsule(72, 13, 4, C('g'), C('2'), shade=C('0')), 14, 4)
med = medallion(21, C('g'), C('4')); med.paste(from_grid(LANTERN), 4, 3)
bar.paste(med, 0, 0)
S['bar_frame'] = bar
seg_on = Canvas(8, 7); seg_off = Canvas(8, 7)
for y in range(7):
    for x in range(8):
        seg_on.px(x, y, C('l') if y == 0 else C('d') if y == 6 else C('i'))
        seg_off.px(x, y, C('b') if y == 0 else C('4') if y == 6 else C('8'))
for cv in (seg_on, seg_off):                       # clip the corners so segments read as separate cells
    for (x, y) in ((0, 0), (7, 0), (0, 6), (7, 6)): cv.a[y, x] = 0
S['seg_on'] = seg_on; S['seg_off'] = seg_off
SEG_X0, SEG_Y, SEG_STEP, SEG_N = 24, 7, 9, 6

# ---- pills ----
S['pill_clock'] = capsule(56, 13, 4, C('g'), C('2'), shade=C('0'))
S['pill_combo'] = capsule(56, 13, 4, C('d'), C('3'), shade=C('0'))
def tag(label, ring_col, line_col, fill_col, text_col, icon):
    tw = F.text_width(label); w = 12 + 8 + tw + 14
    cv = Canvas(w, 21)
    cv.paste(capsule(w - 10, 13, 4, line_col, fill_col, shade=C('0')), 10, 4)
    m = medallion(21, ring_col, C('4')); m.paste(from_grid(icon), 4 if icon is LANTERN else 4, 3 if icon is LANTERN else 5)
    cv.paste(m, 0, 0)
    cv.text(10 + 12 + 4, 7, label, text_col, shadow=C('0'))
    return cv
S['tag_living'] = tag('LIVING WORLD', C('l'), C('l'), C('3'), C('l'), LANTERN)
S['tag_spirit'] = tag('SPIRIT WORLD', C('j'), C('j'), C('2'), C('m'), GHOST)

# ---- pause, warning, moon rings ----
p = rrect(17, 17, C('g'), C('2'))
for x0 in (4, 10):
    for y in range(4, 13):
        for x in range(x0, x0 + 3): p.px(x, y, C('n'))
S['btn_pause'] = p
w = diamond(19, C('l'), C('3'))
for y, row in enumerate(F.G['!']):
    for x, v in enumerate(row):
        if v == '#': w.px(9 + x, 5 + y, C('n'))
S['warn'] = w
for i in range(5): S[f'moon{i}'] = ring(15, C('g'), i)
S['ring_cross_ready'] = medallion(15, C('l'), C('4'))

# ---- logo: snap -> curated palette -> transparent bg -> despeckle ----
lg = despeckle(clean_idx(quant_idx(snap('logo'))), de_max=30, passes=2)
bgset = {0, 1, 2}                                   # near-black clusters
H, W = lg.shape
bgmask = np.zeros((H, W), bool); stack = [(0,0),(0,W-1),(H-1,0),(H-1,W-1)]
while stack:
    y, x = stack.pop()
    if not (0 <= y < H and 0 <= x < W) or bgmask[y, x] or lg[y, x] not in (0, 2, 3, 4): continue
    bgmask[y, x] = True
    stack += [(y+1,x),(y-1,x),(y,x+1),(y,x-1)]
logo = Canvas(W, H)
for y in range(H):
    for x in range(W):
        if not bgmask[y, x]: logo.px(x, y, tuple(int(v) for v in GPAL[lg[y, x]]))
S['logo'] = logo

# ---- export ----
for n, cv in S.items(): cv.img(1).save(f'{OUT}/{n}.png')
# atlas (shelf pack)
order = sorted(S, key=lambda n: -S[n].h)
AW = 256; x = y = row_h = 0; place = {}
for n in order:
    cv = S[n]
    if x + cv.w > AW: x = 0; y += row_h + 1; row_h = 0
    place[n] = (x, y, cv.w, cv.h); x += cv.w + 1; row_h = max(row_h, cv.h)
AH = y + row_h
atlas = Canvas(AW, AH)
for n, (ax, ay, w_, h_) in place.items(): atlas.paste(S[n], ax, ay)
atlas.img(1).save(f'{OUT}/atlas.png')
json.dump({'atlas': {n: list(v) for n, v in place.items()},
           'bar': {'x0': SEG_X0, 'y': SEG_Y, 'step': SEG_STEP, 'n': SEG_N},
           'font': {k: v for k, v in F.G.items()}, 'fontH': F.H}, open(f'{OUT}/atlas.json', 'w'))
print('sprites', len(S), 'atlas', AW, AH)
for n in S: print(f'  {n:18s} {S[n].w}x{S[n].h}')
