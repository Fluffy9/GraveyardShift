#!/usr/bin/env python3
"""Register brown touch-gesture icons into hud/gesture_*.png and atlas.json."""
import json
import os
import shutil

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
HUD = os.path.join(ROOT, 'hud')
ATLAS_PATH = os.path.join(HUD, 'atlas.json')
SRC = os.path.join(ROOT, 'assets', 'touch-gestures')

# Source basename → atlas / CSS sprite id.
GESTURES = {
    'tap': 'gesture_tap',
    'double_tap': 'gesture_double_tap',
    'move': 'gesture_move',
    'swipe': 'gesture_swipe',
}


def main():
    from PIL import Image
    atlas = json.load(open(ATLAS_PATH))
    for src_name, spr in GESTURES.items():
        src = os.path.join(SRC, f'{src_name}.png')
        if not os.path.isfile(src):
            raise SystemExit(f'missing touch gesture: {src}')
        dst = os.path.join(HUD, f'{spr}.png')
        shutil.copyfile(src, dst)
        w, h = Image.open(dst).size
        atlas['atlas'][spr] = [0, 0, w, h]
    json.dump(atlas, open(ATLAS_PATH, 'w'), separators=(',', ':'))
    print('gesture sprites', len(GESTURES))


if __name__ == '__main__':
    main()
