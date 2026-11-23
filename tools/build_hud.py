# Builds the HUD font (TTF on a strict pixel grid) and a CSS block with the sprites embedded as data URIs.
# One art pixel = 1 unit of the --f grid, so text and sprites stay on whole device pixels at integer --hs.
import sys, os, base64, io, json
HERE = os.path.dirname(os.path.abspath(__file__)); ROOT = os.path.dirname(HERE)
sys.path.insert(0, HERE)
from fontTools.fontBuilder import FontBuilder
from fontTools.pens.ttGlyphPen import TTGlyphPen
import font5x7 as F
from PIL import Image

U = 125                       # 1000 UPM / 8 px cell: at font-size 8px*hs each art pixel is hs device px
CAP = 7 * U

def glyph_for(ch):
    rows = F.G[ch]; w = max(len(r) for r in rows)
    pen = TTGlyphPen(None)
    for r, row in enumerate(rows):
        c = 0
        while c < w:
            if c < len(row) and row[c] == '#':
                s = c
                while c < len(row) and row[c] == '#': c += 1
                x0, x1 = s * U, c * U
                y1, y0 = (7 - r) * U, (6 - r) * U
                pen.moveTo((x0, y0)); pen.lineTo((x0, y1)); pen.lineTo((x1, y1)); pen.lineTo((x1, y0)); pen.closePath()
            else:
                c += 1
    return pen.glyph(), w

chars = sorted(F.G.keys())
glyph_order = ['.notdef', 'space'] + [f'g{ord(c)}' for c in chars]
fb = FontBuilder(1000, isTTF=True)
fb.setupGlyphOrder(glyph_order)
fb.setupCharacterMap({32: 'space', **{ord(c): f'g{ord(c)}' for c in chars}})
glyphs = {'.notdef': TTGlyphPen(None).glyph(), 'space': TTGlyphPen(None).glyph()}
metrics = {'.notdef': (0, 0), 'space': (3 * U, 0)}
for c in chars:
    g, w = glyph_for(c)
    glyphs[f'g{ord(c)}'] = g
    metrics[f'g{ord(c)}'] = ((w + 1) * U, 0)   # 1px tracking
fb.setupGlyf(glyphs)
fb.setupHorizontalMetrics(metrics)
fb.setupHorizontalHeader(ascent=1000, descent=-250)
fb.setupNameTable({'familyName': 'GSPixel', 'styleName': 'Regular'})
fb.setupOS2(sTypoAscender=1000, sTypoDescender=-250, usWinAscent=1000, usWinDescent=250, sCapHeight=CAP)
fb.setupPost()
buf = io.BytesIO(); fb.save(buf)
font_b64 = base64.b64encode(buf.getvalue()).decode()

atlas = json.load(open(os.path.join(ROOT, 'hud', 'atlas.json')))
css = ["@font-face{font-family:'GSPixel';src:url(data:font/ttf;base64," + font_b64 + ") format('truetype');}"]
for name, (x, y, w, h) in atlas['atlas'].items():
    img = Image.open(os.path.join(ROOT, 'hud', name + '.png')).convert('RGBA')
    b = io.BytesIO(); img.save(b, 'PNG')
    uri = 'data:image/png;base64,' + base64.b64encode(b.getvalue()).decode()
    css.append(f".spr-{name}{{display:inline-block;flex:none;width:calc(var(--hs)*{w}px);height:calc(var(--hs)*{h}px);background:url({uri}) 0 0/100% 100% no-repeat;image-rendering:pixelated;vertical-align:top}}")
open(os.path.join(ROOT, 'src', 'hud.gen.css'), 'w').write('\n'.join(css) + '\n')
print('font glyphs', len(chars), 'sprites', len(atlas['atlas']))
