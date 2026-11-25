import numpy as np, sys
from PIL import Image
P = np.load('/home/claude/pix/pal24.npy'); CH = '0123456789abcdefghijklmn'
# 12x14: bail ring, chimney with the lavender gem, pyramid roof with a bronze hip, gothic window with a cross bar
# and the flame, bronze drip tray, two feet. '1' outline, '4/8' iron, 'd/a' bronze, 'i/l/n' glass and flame, 'j' gem.
mirror = lambda rows: [r + r[::-1] for r in rows]   # author the left half; icons are exactly symmetric
I12 = mirror([
 '....1d',     # bail ring
 '...1d1',
 '....1d',
 '....1j',     # chimney with the spirit gem
 '...144',     # pyramid roof, bronze hip down the middle
 '..1448',
 '.1488d',
 '.1aaaa',     # eave
 '.1444l',     # gothic arch shoulders
 '.14iln',     # glass with the flame
 '.14iln',
 '.14iil',
 '.1dddd',     # drip tray
 '..1a1.',     # feet
])
I16 = mirror([
 '......11',
 '.....1dd',
 '.....1d1',
 '.....1dd',
 '......18',
 '.....11j',
 '....1444',
 '...14488',
 '..14488d',
 '.148888d',
 '.1aaaaaa',
 '.1444lln',
 '.144ilnn',
 '.14iilnn',
 '.144444k',   # transom bar; the candle passes through
 '.14iiilk',
 '.14iiilk',
 '.1dddddd',
 '..1a1...',
])
def render(rows, name):
    h, w = len(rows), max(len(r) for r in rows)
    a = np.zeros((h, w, 4), np.uint8)
    for y, r in enumerate(rows):
        for x, c in enumerate(r):
            if c != '.' and c != ' ': a[y, x] = (*P[CH.index(c)], 255)
    im = Image.fromarray(a); im.save(name + '.png')
    return im
ims = [render(I12, 'icon_lantern_12x14'), render(I16, 'icon_lantern_16x19')]
sheet = Image.new('RGBA', (sum(i.width * 10 + 30 for i in ims) + 10, 19 * 10 + 20), (33, 26, 45, 255)); x = 15
for i in ims: sheet.alpha_composite(i.resize((i.width * 10, i.height * 10), Image.NEAREST), (x, 10)); x += i.width * 10 + 30
sheet.save('hand_sheet.png'); print([len(r) for r in I16])
