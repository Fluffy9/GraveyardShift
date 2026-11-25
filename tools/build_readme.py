#!/usr/bin/env python3
"""Build README.md from the live game: feature copy, court shots, and model turntables.

Re-run when models or levels change:
  .venv/bin/python tools/build_readme.py
"""
import json, os, re, shutil, socket, statistics, subprocess, sys, time
from datetime import date
from http.client import HTTPConnection

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, 'docs', 'readme')
MEDIA = os.path.join(OUT, 'media')
BUDGET = 8_000_000
MARKS = {
    'old_churchyard': 'function dressChurchyard',
    'forgotten_gardens': 'function buildGardens',
    'catacombs': 'function buildCatacombs',
    'last_ward': 'function buildMausoleum',
    'hollow_grounds': 'function buildHollow',
    'bell_tower': 'function buildBellTower',
}

def ensure_venv():
    try:
        import playwright  # noqa: F401
        from PIL import Image  # noqa: F401
    except ImportError:
        venv = os.path.join(ROOT, '.venv', 'bin', 'python')
        if os.path.isfile(venv) and os.path.realpath(sys.executable) != os.path.realpath(venv):
            os.execv(venv, [venv, *sys.argv])
        raise

def read(rel):
    with open(os.path.join(ROOT, rel), encoding='utf-8') as f:
        return f.read()

def find_chrome():
    env = os.environ.get('CHROME')
    if env and os.path.isfile(env):
        return env
    for p in ('/usr/bin/google-chrome', '/usr/bin/google-chrome-stable', '/usr/bin/chromium', '/usr/bin/chromium-browser'):
        if os.path.isfile(p):
            return p
    root = os.path.expanduser('~/.cache/ms-playwright')
    found = []
    if os.path.isdir(root):
        for dirpath, _, files in os.walk(root):
            if os.path.basename(dirpath) == 'chrome-linux64' and 'chrome' in files:
                found.append(os.path.join(dirpath, 'chrome'))
    if not found:
        raise SystemExit('chrome not found')
    return sorted(found)[-1]

def comment_before(src, marker):
    # Level notes sit at column 0. Code between the note and the builder (helpers, exports) is skipped.
    i = src.find('\n' + marker)
    lines = src[:i].splitlines()
    end = next((n for n in range(len(lines) - 1, -1, -1) if lines[n].startswith('//')), None)
    if end is None:
        return ''
    start = end
    while start > 0 and lines[start - 1].startswith('//'):
        start -= 1
    text = ' '.join(re.sub(r'^//\s?', '', lines[n]) for n in range(start, end + 1))
    return re.sub(r'\s+', ' ', text).strip()

def sources():
    registry = read('src/levels/registry.js')
    campaign = read('src/campaign.js')
    spirits = read('src/spirits.js')
    modes = read('src/modeselect.js')
    relic_block = campaign.split('const RELICS', 1)[1].split('];', 1)[0]
    return {
        'levels': re.findall(r"id: '([a-z0-9_]+)', name: '([^']+)'", registry),
        'relics': set(re.findall(r"id: '([a-z0-9_]+)'", relic_block)),
        'spirits': dict(re.findall(r"^\s+(\w+): \{ name: '([^']+)'", spirits, re.M)),
        'modes': set(re.findall(r"id: '([a-z0-9_]+)'", modes)),
        'sets': read('src/sets.js'),
    }

def keep(need, src):
    kind, _, ident = need.partition(':')
    if kind == 'always':
        return True
    if kind == 'level':
        return ident in {i for i, _ in src['levels']}
    if kind == 'relic':
        return ident in src['relics']
    if kind == 'spirit':
        return ident in src['spirits']
    if kind == 'mode':
        return ident in src['modes']
    return False

def checked_features(doc, src):
    sections = []
    for section in doc['sections']:
        items = [it for it in section['items'] if keep(it.get('need', 'always'), src)]
        if items:
            sections.append({'id': section['id'], 'title': section['title'], 'items': items})
    return sections

def level_rows(doc, src):
    objectives = {lv['id']: lv['objective'] for lv in doc['levels']}
    rows = []
    for lid, name in src['levels']:
        if lid not in objectives or lid not in MARKS:
            continue
        rows.append({
            'id': lid,
            'name': name,
            'description': comment_before(src['sets'], MARKS[lid]),
            'objective': objectives[lid],
        })
    return rows

def pretty(name, spirit_names):
    if name == '@warden':
        return 'Hollow Warden'
    if name.startswith('@spirit:'):
        return spirit_names.get(name[8:], name[8:].replace('_', ' '))
    return name.replace('_', ' ').title()

def covered_names(groups):
    names = set()
    for group in groups:
        for model in group['models']:
            if not model.startswith('@'):
                names.add(model)
    for rel in ('src/spirits.js', 'src/warden.js'):
        names.update(re.findall(r"get\('([a-z0-9_]+)'\)", read(rel)))
    return names

def with_shelf(groups):
    have = {os.path.splitext(f)[0] for f in os.listdir(os.path.join(ROOT, 'glb')) if f.endswith('.glb')}
    missing = []
    for group in groups:
        for model in group['models']:
            if model.startswith('@'):
                continue
            if model not in have:
                missing.append(model)
    if missing:
        raise SystemExit('groups.json names a missing model: ' + ', '.join(missing))
    left = sorted(have - covered_names(groups))
    if not left:
        return groups
    shelf = {'id': 'shelf', 'title': 'Unplaced models', 'cols': 4, 'models': left}
    out, placed = [], False
    for group in groups:
        if group.get('anim') and not placed:
            out.append(shelf)
            placed = True
        out.append(group)
    if not placed:
        out.append(shelf)
    return out

def render_groups(groups, spirit_names, cell, spin_frames, anim_frames):
    os.makedirs(MEDIA, exist_ok=True)
    rendered = []
    for group in groups:
        frames = anim_frames if group.get('anim') else spin_frames
        base = os.path.join(MEDIA, group['id'])
        labels = {m: pretty(m, spirit_names) for m in group['models']}
        env = os.environ.copy()
        env['CELL'] = str(cell)
        env['FRAMES'] = str(frames)
        env['SKIP_STILL'] = '1'
        env['LABELS'] = json.dumps(labels)
        if group.get('anim'):
            env['ANIM'] = '1'
        cmd = [sys.executable, os.path.join(ROOT, 'tools', 'turntable.py'), base, str(group['cols']), *group['models']]
        print(f"turntable {group['id']} ({len(group['models'])} models, {frames} frames)", flush=True)
        proc = subprocess.run(cmd, cwd=ROOT, env=env, capture_output=True, text=True)
        if proc.returncode != 0:
            sys.stderr.write(proc.stderr[-4000:])
            raise SystemExit(f'turntable failed for {group["id"]}')
        line = next(l for l in reversed(proc.stdout.splitlines()) if l.startswith('['))
        info = json.loads(line)
        total = int(sum(c['tris'] for c in info))
        rendered.append({
            'id': group['id'],
            'title': group['title'],
            'gif': f"media/{group['id']}.gif",
            'total': total,
            'models': [{'name': c['name'], 'label': pretty(c['name'], spirit_names), 'tris': int(c['tris'])} for c in info],
        })
    return rendered

def media_bytes():
    total = 0
    for name in os.listdir(MEDIA):
        total += os.path.getsize(os.path.join(MEDIA, name))
    return total

def free_port():
    s = socket.socket()
    s.bind(('127.0.0.1', 0))
    port = s.getsockname()[1]
    s.close()
    return port

def wait_server(port):
    for _ in range(50):
        try:
            c = HTTPConnection('127.0.0.1', port, timeout=0.5)
            c.request('GET', '/index.html')
            if c.getresponse().status == 200:
                return
        except OSError:
            time.sleep(0.1)
    raise SystemExit('dist server did not start')

def capture_scenes(levels):
    from playwright.sync_api import sync_playwright
    from PIL import Image
    import io
    subprocess.run(['bash', os.path.join(ROOT, 'build.sh')], cwd=ROOT, env={**os.environ, 'SKIP_CLIPS': '1'}, check=True)
    port = free_port()
    server = subprocess.Popen(['node', os.path.join(ROOT, 'tests', 'serve.js'), str(port)], cwd=ROOT)
    shots = []
    try:
        wait_server(port)
        with sync_playwright() as p:
            browser = p.chromium.launch(
                executable_path=find_chrome(),
                args=['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--no-sandbox'],
            )
            page = browser.new_page(viewport={'width': 960, 'height': 540}, device_scale_factor=1)
            errors = []
            page.on('pageerror', lambda err: errors.append(str(err)))
            page.goto(f'http://127.0.0.1:{port}/index.html')
            page.wait_for_function('document.body.classList.contains("ready") && window.__GS && window.__GS.frameStats')
            if errors:
                raise SystemExit('boot error: ' + errors[0])
            # Same expert cohort as DIFF-06 (skill/attention 0.95, seed 4242) on Dusk (tier 1).
            page.add_script_tag(path=os.path.join(ROOT, 'tools', 'sim', 'bot.js'))
            page.wait_for_function('() => typeof window.__BOT?.openClip === "function"')
            hide_hud = '''() => {
              const overlay = document.getElementById('overlay');
              if (overlay) overlay.style.display = 'none';
              document.querySelectorAll('.hud').forEach(node => { node.style.visibility = 'hidden'; });
            }'''
            page.evaluate(hide_hud)
            renderer = ''
            # 5 s of expert play at 5 fps GIF (12 sim ticks of 1/60 s per frame).
            GIF_N, GIF_TICKS, GIF_MS = 25, 12, 200
            EXPERT = {'id': 1, 'skill': 0.95, 'attention': 0.95, 'seed': 4242}
            for lv in levels:
                print(f"scene {lv['id']}", flush=True)
                page.evaluate('''(args) => {
                  window.__BOT.openClip(args.params, { levelId: args.levelId, tier: 1 });
                }''', {'params': EXPERT, 'levelId': lv['id']})
                page.evaluate(hide_hud)
                frames = []
                for _ in range(GIF_N):
                    page.evaluate('(n) => window.__BOT.tickClip(n)', GIF_TICKS)
                    raw = page.locator('canvas#game').screenshot()
                    img = Image.open(io.BytesIO(raw)).convert('RGB')
                    scale = max(1, img.width // 480)
                    img = img.resize((img.width // scale, img.height // scale), Image.NEAREST)
                    frames.append(img)
                page.evaluate('() => window.__BOT.closeClip()')
                rel = f"media/scene-{lv['id']}.gif"
                path = os.path.join(OUT, rel)
                q = [f.quantize(colors=64, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.NONE) for f in frames]
                q[0].save(path, save_all=True, append_images=q[1:], duration=GIF_MS, loop=0, disposal=2, optimize=True)
                optimize_gif(path)
                frames[0].save(os.path.join(OUT, f"media/scene-{lv['id']}.png"))
                # One rendered frame for triangle/draw counts, then sample rAF while stepping the scene.
                page.evaluate('''() => {
                  const G = window.__GS;
                  G.S.hitStop = 0;
                  G.stepManual(1 / 60, 1);
                }''')
                perf = page.evaluate('''() => new Promise(resolve => {
                  const samples = [];
                  let last = 0;
                  const start = performance.now();
                  function loop(now) {
                    if (last) samples.push(now - last);
                    last = now;
                    window.__GS.S.hitStop = 0;
                    window.__GS.stepManual(1 / 60, 1);
                    if (now - start < 3000) requestAnimationFrame(loop);
                    else resolve({ samples, stats: window.__GS.frameStats() });
                  }
                  requestAnimationFrame(loop);
                })''')
                samples = perf['samples'][1:] or perf['samples']
                stats = perf['stats']
                renderer = stats.get('renderer') or renderer
                shots.append({
                    **lv,
                    'shot': rel,
                    'triangles': int(stats['triangles']),
                    'calls': int(stats['calls']),
                    'median': round(statistics.median(samples), 1) if samples else None,
                    'worst': round(max(samples), 1) if samples else None,
                })
            browser.close()
    finally:
        server.terminate()
        server.wait(timeout=5)
    return shots, renderer

def esc(s):
    return (s or '').replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;').replace('"', '&quot;')

def kit_css():
    t = read('src/index.template.html')
    start = t.find('  .kit-panel {')
    end = t.find('  /* ---------- results')
    if start < 0 or end < 0:
        raise SystemExit('kit CSS block not found')
    return t[start:end]

def page_css():
    return kit_css() + '''
    :root { --hs: 2; --f: calc(8px * var(--hs)); --ink: #f7dbb0; --amber: #ffb85b; --lav: #b9a1e8; --pink: #f07f95; --char: #211a2d; }
    html, body { height: auto; overflow: auto; touch-action: auto; }
    body { display: block; margin: 0; background: #120e1a; color: var(--ink);
      font-family: 'GSPixel', monospace; text-transform: uppercase; font-size: var(--f);
      line-height: calc(var(--f) * 2); -webkit-font-smoothing: none; font-synthesis: none; }
    main { max-width: 1040px; margin: 0 auto; padding: 28px 20px 64px; display: flex; flex-direction: column; gap: 22px; }
    h2 { margin: 0; font-size: calc(var(--f) * 2); line-height: calc(var(--hs) * 16px); font-weight: normal; color: var(--ink); }
    .lede { margin: 0; color: #e9d4ea; text-align: center; }
    .kit-panel { padding: calc(var(--hs) * 8px); }
    .chips, .props, .stats { display: flex; flex-wrap: wrap; gap: calc(var(--hs) * 4px); margin-top: calc(var(--hs) * 8px); }
    .chip { flex-direction: column; align-items: flex-start; white-space: normal; max-width: 320px; height: auto; }
    .chip b { color: var(--amber); font-weight: normal; }
    .court-body { display: grid; grid-template-columns: minmax(240px, 480px) 1fr; gap: 16px; margin-top: 12px; align-items: start; }
    .shot, .sheet { image-rendering: pixelated; image-rendering: crisp-edges; width: 100%; height: auto; display: block; background: #211a2d; }
    .desc, .obj { margin: 0 0 10px; color: #e9d4ea; }
    .obj { color: var(--lav); }
    .foot { text-align: center; color: #b49ab6; }
    @media (max-width: 720px) { .court-body { grid-template-columns: 1fr; } }
    '''

def render_html(catalog):
    parts = [
        '<!doctype html><html lang="en"><head><meta charset="utf-8">',
        '<meta name="viewport" content="width=device-width, initial-scale=1">',
        '<title>Graveyard Shift</title>',
        '<link rel="stylesheet" href="hud.css">',
        '<style>', page_css(), '</style></head><body><main>',
        '<div class="kit-head"><span class="kit-divider"></span><h2>Graveyard Shift</h2><span class="kit-divider"></span></div>',
        f'<p class="lede">{esc(catalog["blurb"])}</p>',
    ]
    for section in catalog['features']:
        parts.append('<section class="kit-panel">')
        parts.append(f'<div class="kit-head"><span class="kit-divider"></span><h2>{esc(section["title"])}</h2><span class="kit-divider"></span></div>')
        parts.append('<div class="chips">')
        for item in section['items']:
            parts.append(f'<div class="kit-tile chip"><b>{esc(item["title"])}</b><span>{esc(item["body"])}</span></div>')
        parts.append('</div></section>')
    parts.append('<div class="kit-head"><span class="kit-divider"></span><h2>Six courts</h2><span class="kit-divider"></span></div>')
    for lv in catalog['levels']:
        med = 'n/a' if lv['median'] is None else f"{lv['median']} ms"
        worst = 'n/a' if lv['worst'] is None else f"{lv['worst']} ms"
        parts.append('<section class="kit-panel">')
        parts.append(f'<div class="kit-head"><span class="kit-divider"></span><h2>{esc(lv["name"])}</h2><span class="kit-divider"></span></div>')
        parts.append('<div class="court-body">')
        parts.append(f'<img class="shot" src="{esc(lv["shot"])}" alt="">')
        parts.append('<div>')
        parts.append(f'<p class="desc">{esc(lv["description"])}</p>')
        parts.append(f'<p class="obj">{esc(lv["objective"])}</p>')
        parts.append('<div class="stats">')
        parts.append(f'<span class="kit-tile">{lv["triangles"]} tris</span>')
        parts.append(f'<span class="kit-tile">{lv["calls"]} draws</span>')
        parts.append(f'<span class="kit-tile">median {med}</span>')
        parts.append(f'<span class="kit-tile">worst {worst}</span>')
        parts.append('</div></div></div></section>')
    parts.append('<div class="kit-head"><span class="kit-divider"></span><h2>Figures</h2><span class="kit-divider"></span></div>')
    for group in catalog['groups']:
        parts.append('<section class="kit-panel">')
        parts.append('<div class="kit-head"><span class="kit-divider"></span>')
        parts.append(f'<h2>{esc(group["title"])}</h2>')
        parts.append(f'<span class="kit-tab">{group["total"]} tris</span>')
        parts.append('<span class="kit-divider"></span></div>')
        parts.append(f'<img class="sheet" src="{esc(group["gif"])}" alt="">')
        parts.append('</section>')
    parts.append('<section class="kit-panel"><div class="kit-head"><span class="kit-divider"></span><h2>Props</h2><span class="kit-divider"></span></div><div class="props">')
    for prop in catalog['props']:
        parts.append(f'<span class="kit-tile">{esc(prop["label"])} {prop["tris"]}</span>')
    parts.append('</div></section>')
    parts.append(f'<p class="foot">{esc(catalog["note"])}</p>')
    parts.append('</main></body></html>')
    with open(os.path.join(OUT, 'index.html'), 'w', encoding='utf-8') as f:
        f.write('\n'.join(parts))

def commas(n):
    return f'{int(n):,}'

CARDS = os.path.join(OUT, 'cards')

def optimize_gif(path):
    """Lossy gifsicle pass when available. Keeps the original if none of the binaries work."""
    bins = ('gifsicle', '/home/linuxbrew/.linuxbrew/bin/gifsicle', '/usr/bin/gifsicle')
    tmp = path + '.opt.gif'
    for bin in bins:
        try:
            subprocess.run([bin, '-O3', '--lossy=55', '--colors', '64', '-o', tmp, path], check=True, capture_output=True)
            os.replace(tmp, path)
            return True
        except (FileNotFoundError, subprocess.CalledProcessError, OSError):
            continue
    if os.path.isfile(tmp):
        os.remove(tmp)
    return False

def slug(text):
    return re.sub(r'[^a-z0-9]+', '-', text.lower()).strip('-')

def sheet_box(w, h):
    if w < 640:
        s = max(2, -(-640 // w))
        return w * s, h * s
    return w, h

def card_page(catalog, prose):
    heads = re.findall(r'\{\{head:([^}]+)\}\}', prose)
    levels = {lv['id']: lv for lv in catalog['levels']}
    groups = {g['id']: g for g in catalog['groups']}
    bits = [
        '<!doctype html><html><head><meta charset="utf-8"><link rel="stylesheet" href="hud.css"><style>',
        kit_css(),
        ''':root { --hs: 3; --f: calc(8px * var(--hs)); --ink: #f7dbb0; --amber: #ffb85b; --lav: #b9a1e8; --pink: #f07f95; --char: #211a2d; }
        html, body { margin: 0; background: #120e1a; }
        body { font-family: "GSPixel", monospace; text-transform: uppercase; color: var(--ink); font-size: var(--f);
          line-height: calc(var(--f) * 2); -webkit-font-smoothing: none; font-synthesis: none; }
        .frame { display: inline-block; background: #120e1a; padding: 6px; }
        .kit-head { width: 100%; }
        .frame.head .kit-head { width: 720px; }
        .kit-head h2 { margin: 0; font-size: calc(var(--f) * 2); line-height: calc(var(--hs) * 16px); font-weight: normal; white-space: nowrap; }
        .kit-panel { padding: calc(var(--hs) * 6px) calc(var(--hs) * 8px) calc(var(--hs) * 8px); }
        .shot, .sheet { display: block; margin: calc(var(--hs) * 4px) auto 0; image-rendering: pixelated; image-rendering: crisp-edges; background: #211a2d; }
        .shot { width: 640px; height: 360px; }
        .stats { display: flex; flex-wrap: wrap; justify-content: center; gap: calc(var(--hs) * 4px); margin-top: calc(var(--hs) * 5px); }
        .kit-tile { white-space: nowrap; }
        </style></head><body>''',
    ]
    for title in heads:
        bits.append(
            f'<div class="frame head" id="head-{slug(title)}"><div class="kit-head">'
            f'<span class="kit-divider"></span><h2>{esc(title)}</h2><span class="kit-divider"></span></div></div>'
        )
    for lv in catalog['levels']:
        med = 'n/a' if lv['median'] is None else f"{lv['median']} ms"
        worst = 'n/a' if lv['worst'] is None else f"{lv['worst']} ms"
        bits.append(
            f'<div class="frame" id="court-{lv["id"]}"><section class="kit-panel">'
            f'<div class="kit-head"><span class="kit-divider"></span><h2>{esc(lv["name"])}</h2><span class="kit-divider"></span></div>'
            f'<img class="shot" id="shot-{lv["id"]}" src="media/{lv["shot"].split("/")[-1]}" alt="">'
            f'<div class="stats">'
            f'<span class="kit-tile">{commas(lv["triangles"])} tris</span>'
            f'<span class="kit-tile">{commas(lv["calls"])} draws</span>'
            f'<span class="kit-tile">median {med}</span>'
            f'<span class="kit-tile">worst {worst}</span>'
            f'</div></section></div>'
        )
    for group in catalog['groups']:
        src = os.path.join(MEDIA, f"{group['id']}.gif")
        from PIL import Image
        with Image.open(src) as im:
            dw, dh = sheet_box(*im.size)
        bits.append(
            f'<div class="frame" id="fig-{group["id"]}"><section class="kit-panel">'
            f'<div class="kit-head"><span class="kit-divider"></span><h2>{esc(group["title"])}</h2>'
            f'<span class="kit-tab">{commas(group["total"])} tris</span><span class="kit-divider"></span></div>'
            f'<img class="sheet" id="sheet-{group["id"]}" src="media/{group["id"]}.gif" width="{dw}" height="{dh}" alt="">'
            f'</section></div>'
        )
    bits.append('</body></html>')
    with open(os.path.join(OUT, 'hud.css'), 'w', encoding='utf-8') as f:
        f.write(read('src/hud.gen.css'))
    with open(os.path.join(OUT, 'cards.html'), 'w', encoding='utf-8') as f:
        f.write('\n'.join(bits))
    return levels, groups

def render_cards(catalog):
    from playwright.sync_api import sync_playwright
    from PIL import Image
    import io
    prose = read('tools/readme/prose.md')
    card_page(catalog, prose)
    os.makedirs(CARDS, exist_ok=True)
    port = free_port()
    server = subprocess.Popen([sys.executable, '-m', 'http.server', str(port), '--bind', '127.0.0.1', '--directory', OUT], cwd=ROOT)
    try:
        wait_server(port)
        with sync_playwright() as p:
            browser = p.chromium.launch(executable_path=find_chrome(), args=['--no-sandbox', '--disable-dev-shm-usage'])
            page = browser.new_page(viewport={'width': 1600, 'height': 1000}, device_scale_factor=1)
            page.goto(f'http://127.0.0.1:{port}/cards.html')
            page.wait_for_selector('.frame.head')

            def shoot(selector, dest):
                page.locator(selector).screenshot(path=dest)
                print('card', os.path.basename(dest), flush=True)

            title_src = os.path.join(ROOT, 'graveyard_shift_title.png')
            if not os.path.isfile(title_src):
                title_src = os.path.join(ROOT, 'build', 'web', 'graveyard_shift_title.png')
            shutil.copy2(title_src, os.path.join(CARDS, 'title.png'))
            print('card title.png', flush=True)
            for title in re.findall(r'\{\{head:([^}]+)\}\}', prose):
                shoot(f'#head-{slug(title)}', os.path.join(CARDS, f'head-{slug(title)}.png'))
            def composite_gif(frame_sel, slot_sel, gif_path, dest, colors=64):
                frame = page.locator(frame_sel)
                slot = page.locator(slot_sel)
                frame_box = frame.bounding_box()
                slot_box = slot.bounding_box()
                raw = frame.screenshot()
                base = Image.open(io.BytesIO(raw)).convert('RGBA')
                scale = base.width / frame_box['width']
                x = round((slot_box['x'] - frame_box['x']) * scale)
                y = round((slot_box['y'] - frame_box['y']) * scale)
                w = round(slot_box['width'] * scale)
                h = round(slot_box['height'] * scale)
                gif = Image.open(gif_path)
                frames, durations = [], []
                for i in range(gif.n_frames):
                    gif.seek(i)
                    fr = gif.convert('RGBA').resize((w, h), Image.NEAREST)
                    canvas = base.copy()
                    canvas.paste(fr, (x, y), fr)
                    frames.append(canvas.convert('RGB').quantize(colors=colors, method=Image.Quantize.MEDIANCUT, dither=Image.Dither.NONE))
                    durations.append(gif.info.get('duration', 100))
                frames[0].save(dest, save_all=True, append_images=frames[1:], duration=durations, loop=0, disposal=2, optimize=True)
                optimize_gif(dest)
                print('card', os.path.basename(dest), flush=True)

            for lv in catalog['levels']:
                gif_name = lv['shot'].split('/')[-1]
                if not gif_name.endswith('.gif'):
                    gif_name = f"scene-{lv['id']}.gif"
                composite_gif(
                    f'#court-{lv["id"]}', f'#shot-{lv["id"]}',
                    os.path.join(MEDIA, gif_name),
                    os.path.join(CARDS, f'court-{lv["id"]}.gif'),
                )
            for group in catalog['groups']:
                composite_gif(
                    f'#fig-{group["id"]}', f'#sheet-{group["id"]}',
                    os.path.join(MEDIA, f"{group['id']}.gif"),
                    os.path.join(CARDS, f'fig-{group["id"]}.gif'),
                )
            browser.close()
    finally:
        server.terminate()
        server.wait(timeout=5)

def img(src, alt, width=None):
    with_px = os.path.join(ROOT, src)
    try:
        from PIL import Image
        w = width or Image.open(with_px).width
    except Exception:
        w = width or 640
    return f'<p align="center"><img src="{src}" alt="{alt}" width="{w}"></p>'

def render_readme(catalog):
    prose = read('tools/readme/prose.md')
    levels = {lv['id']: lv['name'] for lv in catalog['levels']}
    groups = {g['id']: g['title'] for g in catalog['groups']}
    missing_courts = [lv['id'] for lv in catalog['levels'] if f'{{{{card:{lv["id"]}}}}}' not in prose]
    missing_figs = [g['id'] for g in catalog['groups'] if f'{{{{figure:{g["id"]}}}}}' not in prose]
    if missing_courts or missing_figs:
        extra = ['']
        for lid in missing_courts:
            extra.append(f'{{{{card:{lid}}}}}')
            extra.append('')
        for gid in missing_figs:
            extra.append(f'{{{{figure:{gid}}}}}')
            extra.append('')
        prose = prose.rstrip() + '\n' + '\n'.join(extra)
    if catalog.get('software'):
        note = 'The counts and frame times on the cards were measured on this machine under software GL. They are a reading, not a promise.'
    else:
        note = 'The counts and frame times on the cards were measured on this machine. They are a reading, not a promise.'

    def repl(match):
        kind, body = match.group(1), match.group(2)
        if kind == 'title':
            return img('docs/readme/cards/title.png', 'Graveyard Shift', width=480)
        if kind == 'head':
            return img(f'docs/readme/cards/head-{slug(body)}.png', body)
        if kind == 'card':
            path = f'docs/readme/cards/court-{body}.gif'
            if not os.path.isfile(os.path.join(ROOT, path)):
                path = f'docs/readme/cards/court-{body}.png'
            return img(path, levels.get(body, body))
        if kind == 'figure':
            return img(f'docs/readme/cards/fig-{body}.gif', groups.get(body, body))
        if kind == 'note':
            return note
        return match.group(0)

    text = re.sub(r'\{\{(title|head|card|figure|note):?([^}]*)\}\}', repl, prose)
    text = re.sub(r'\n{3,}', '\n\n', text).strip() + '\n'
    with open(os.path.join(ROOT, 'README.md'), 'w', encoding='utf-8') as f:
        f.write(text)

def unique_props(groups):
    seen, props = set(), []
    for group in groups:
        for model in group['models']:
            if model['name'] in seen:
                continue
            seen.add(model['name'])
            props.append({'name': model['name'], 'label': model['label'], 'tris': model['tris']})
    props.sort(key=lambda p: p['label'])
    return props

def main():
    ensure_venv()
    os.chdir(ROOT)
    if os.environ.get('SKIP_CAPTURE'):
        catalog = json.loads(read('docs/readme/catalog.json'))
        render_cards(catalog)
        render_readme(catalog)
        print('wrote README.md', flush=True)
        return
    src = sources()
    doc = json.loads(read('tools/readme/features.json'))
    groups = with_shelf(json.loads(read('tools/readme/groups.json'))['groups'])
    features = checked_features(doc, src)
    os.makedirs(MEDIA, exist_ok=True)
    catalog_path = os.path.join(OUT, 'catalog.json')
    if os.environ.get('SKIP_TABLES') and os.path.isfile(catalog_path):
        rendered = json.loads(read('docs/readme/catalog.json'))['groups']
    else:
        rendered = render_groups(groups, src['spirits'], 96, 12, 10)
    if not os.environ.get('SKIP_TABLES') and media_bytes() > BUDGET:
        print(f"media {media_bytes()} bytes, re-rendering smaller", flush=True)
        for name in os.listdir(MEDIA):
            if name.endswith('.gif'):
                os.remove(os.path.join(MEDIA, name))
        rendered = render_groups(groups, src['spirits'], 80, 8, 8)
    levels, renderer = capture_scenes(level_rows(doc, src))
    soft = any(s in renderer.lower() for s in ('swiftshader', 'llvmpipe', 'softpipe', 'software'))
    today = date.today().isoformat()
    if renderer and soft:
        note = f"Measured {today} on {renderer}. This is software GL, so the frame times are from this machine, not a budget."
    elif renderer:
        note = f"Measured {today} on {renderer}. Frame times are from this machine, not a budget."
    else:
        note = f"Measured {today}. The browser did not report a GPU name. Frame times are from this machine, not a budget."
    catalog = {
        'generated': today,
        'renderer': renderer,
        'software': soft,
        'blurb': doc['blurb'],
        'note': note,
        'features': features,
        'levels': levels,
        'groups': rendered,
        'props': unique_props(rendered),
    }
    with open(os.path.join(OUT, 'catalog.json'), 'w', encoding='utf-8') as f:
        json.dump(catalog, f, indent=2)
        f.write('\n')
    with open(os.path.join(OUT, 'hud.css'), 'w', encoding='utf-8') as f:
        f.write(read('src/hud.gen.css'))
    render_cards(catalog)
    render_readme(catalog)
    print(f"wrote README.md ({media_bytes()} bytes of media)", flush=True)

if __name__ == '__main__':
    main()
