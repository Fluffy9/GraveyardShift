#!/usr/bin/env python3
"""Slice keyboard UI icons into hud/key_*.png and register them in atlas.json."""
import json
import os
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
HUD = os.path.join(ROOT, 'hud')
ATLAS_PATH = os.path.join(HUD, 'atlas.json')
SHEET = os.path.join(ROOT, 'assets', 'keyboard-keys', 'brown.png')

# Letter grid: 24×20 cells, origin (1,1), pitch 25×21 (A–G / H–N / O–U / V–Z).
def letter_box(ch):
    i = ord(ch.upper()) - ord('A')
    row, col = divmod(i, 7)
    x0 = 1 + col * 25
    y0 = 1 + row * 21
    return (x0, y0, x0 + 24, y0 + 20)

CROPS = {
    'key_w': letter_box('W'),
    'key_a': letter_box('A'),
    'key_s': letter_box('S'),
    'key_d': letter_box('D'),
    'key_p': letter_box('P'),
    'key_r': letter_box('R'),
    'key_m': letter_box('M'),
    'key_space': (4, 229, 70, 249),
    'key_esc': (127, 208, 171, 228),
    'key_enter': (4, 187, 70, 207),
    'key_up': (211, 187, 235, 207),
    'key_left': (186, 208, 210, 228),
    'key_right': (236, 208, 260, 228),
    'key_down': (211, 229, 235, 249),
}


def main():
    if not os.path.isfile(SHEET):
        raise SystemExit(f'missing keyboard sheet: {SHEET}')
    im = Image.open(SHEET).convert('RGBA')
    atlas = json.load(open(ATLAS_PATH))
    for name, box in CROPS.items():
        crop = im.crop(box)
        crop.save(os.path.join(HUD, f'{name}.png'))
        w, h = crop.size
        atlas['atlas'][name] = [0, 0, w, h]
    json.dump(atlas, open(ATLAS_PATH, 'w'), separators=(',', ':'))
    print('key sprites', len(CROPS))


if __name__ == '__main__':
    main()
