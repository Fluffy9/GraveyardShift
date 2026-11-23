#!/usr/bin/env python3
"""Round the title card corners (transparent) for Glance + social cards."""
from __future__ import annotations

import argparse
import math
import struct
import zlib
from pathlib import Path


def read_png_rgba(path: Path) -> tuple[int, int, bytearray]:
    data = path.read_bytes()
    if data[:8] != b"\x89PNG\r\n\x1a\n":
        raise ValueError(f"not a PNG: {path}")
    pos = 8
    idat: list[bytes] = []
    w = h = color = None
    while pos < len(data):
        ln = struct.unpack(">I", data[pos : pos + 4])[0]
        typ = data[pos + 4 : pos + 8]
        chunk = data[pos + 8 : pos + 8 + ln]
        pos += 12 + ln
        if typ == b"IHDR":
            w, h, bit, color, comp, filt, inter = struct.unpack(">IIBBBBB", chunk)
            if bit != 8 or inter != 0 or comp != 0:
                raise ValueError("unsupported PNG")
        elif typ == b"IDAT":
            idat.append(chunk)
        elif typ == b"IEND":
            break
    assert w and h and color is not None
    raw = zlib.decompress(b"".join(idat))
    bpp = {0: 1, 2: 3, 4: 2, 6: 4}[color]
    stride = w * bpp
    rows: list[bytearray] = []
    i = 0
    prev = bytearray(stride)
    for _ in range(h):
        f = raw[i]
        i += 1
        row = bytearray(raw[i : i + stride])
        i += stride
        if f == 1:
            for x in range(bpp, stride):
                row[x] = (row[x] + row[x - bpp]) & 255
        elif f == 2:
            for x in range(stride):
                row[x] = (row[x] + prev[x]) & 255
        elif f == 3:
            for x in range(stride):
                a = row[x - bpp] if x >= bpp else 0
                row[x] = (row[x] + ((a + prev[x]) // 2)) & 255
        elif f == 4:
            for x in range(stride):
                a = row[x - bpp] if x >= bpp else 0
                b = prev[x]
                c = prev[x - bpp] if x >= bpp else 0
                p = a + b - c
                pa, pb, pc = abs(p - a), abs(p - b), abs(p - c)
                pr = a if pa <= pb and pa <= pc else (b if pb <= pc else c)
                row[x] = (row[x] + pr) & 255
        elif f != 0:
            raise ValueError(f"bad filter {f}")
        rows.append(row)
        prev = row
    out = bytearray(w * h * 4)
    for y, row in enumerate(rows):
        for x in range(w):
            o = (y * w + x) * 4
            if color == 2:
                out[o : o + 3] = row[x * 3 : x * 3 + 3]
                out[o + 3] = 255
            elif color == 6:
                out[o : o + 4] = row[x * 4 : x * 4 + 4]
            elif color == 0:
                out[o] = out[o + 1] = out[o + 2] = row[x]
                out[o + 3] = 255
            else:
                raise ValueError(f"unsupported color type {color}")
    return w, h, out


def write_png_rgba(path: Path, w: int, h: int, rgba: bytearray) -> None:
    def chunk(typ: bytes, payload: bytes) -> bytes:
        return (
            struct.pack(">I", len(payload))
            + typ
            + payload
            + struct.pack(">I", zlib.crc32(typ + payload) & 0xFFFFFFFF)
        )

    stride = w * 4
    raw = bytearray()
    for y in range(h):
        raw.append(0)
        raw.extend(rgba[y * stride : (y + 1) * stride])
    ihdr = struct.pack(">IIBBBBB", w, h, 8, 6, 0, 0, 0)
    path.write_bytes(
        b"\x89PNG\r\n\x1a\n"
        + chunk(b"IHDR", ihdr)
        + chunk(b"IDAT", zlib.compress(bytes(raw), 9))
        + chunk(b"IEND", b"")
    )


def round_corners(rgba: bytearray, w: int, h: int, radius: int) -> None:
    r = radius

    def corner_alpha(dx: float, dy: float) -> int:
        dist = math.hypot(dx, dy)
        if dist <= r - 0.5:
            return 255
        if dist >= r + 0.5:
            return 0
        return int(255 * (r + 0.5 - dist))

    for y in range(h):
        for x in range(w):
            if x < r:
                dx = r - x
            elif x > w - 1 - r:
                dx = x - (w - 1 - r)
            else:
                dx = 0
            if y < r:
                dy = r - y
            elif y > h - 1 - r:
                dy = y - (h - 1 - r)
            else:
                dy = 0
            if dx > 0 and dy > 0:
                o = (y * w + x) * 4
                a = corner_alpha(dx, dy)
                rgba[o + 3] = (rgba[o + 3] * a) // 255


def main() -> None:
    root = Path(__file__).resolve().parents[1]
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument(
        "--src",
        type=Path,
        default=root / "graveyard_shift_title_source.png",
        help="square source PNG (falls back to graveyard_shift_title.png)",
    )
    ap.add_argument(
        "--dst",
        type=Path,
        default=root / "graveyard_shift_title.png",
        help="rounded output PNG",
    )
    ap.add_argument(
        "--radius",
        type=float,
        default=0.06,
        help="corner radius as fraction of min(width,height), or pixels if >= 1",
    )
    args = ap.parse_args()
    src = args.src
    if not src.exists():
        src = root / "graveyard_shift_title.png"
    w, h, rgba = read_png_rgba(src)
    radius = int(args.radius) if args.radius >= 1 else max(24, int(min(w, h) * args.radius))
    round_corners(rgba, w, h, radius)
    write_png_rgba(args.dst, w, h, rgba)
    print(f"wrote {args.dst} ({w}x{h}, r={radius})")


if __name__ == "__main__":
    main()
