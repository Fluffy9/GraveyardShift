// Headless player model. Runs INSIDE the game page (needs window.__GS) and plays the Night Shift campaign through the real
// simulation (stepSim, no rendering). A player is {skill, attention} in 0..1:
//   skill     -> reaction time, aim error, how much danger it weighs, how many dash lines it considers, blunder rate
//   attention -> how often it zones out (hands off / frozen for a moment) and how soon it rage-quits after dying
// Exposes window.__BOT.play(params) -> per-run record.
// Clip API (readme captures): openClip / tickClip / closeClip drives the same brain with stepManual so the canvas paints.
(() => {
  const G = window.__GS, S = G.S, T = G.TUNING;
  for (const k of Object.keys(G.sfx)) if (typeof G.sfx[k] === 'function') G.sfx[k] = () => {};   // simulated time outruns the audio clock: mute
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const hyp = Math.hypot;
  function mulberry(a) { return () => { a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
  const gauss = r => Math.sqrt(-2 * Math.log(1 - r() * 0.999999)) * Math.cos(2 * Math.PI * r());
  function segDist(px, py, ax, ay, bx, by) {
    const dx = bx - ax, dy = by - ay, l2 = dx * dx + dy * dy;
    if (l2 < 1e-3) return hyp(px - ax, py - ay);
    const t = clamp(((px - ax) * dx + (py - ay) * dy) / l2, 0, 1);
    return hyp(px - (ax + dx * t), py - (ay + dy * t));
  }
  const V = (x, y) => new S.pos.constructor(x, y);
  const chaseSpeed = e => e.ward ? e.wardSpeed : e.kind === 'moth' ? T.spirits.moth.speed : e.kind === 'choir' ? T.spirits.choir.speed
    : e.kind === 'wisp' || e.kind === 'bell' ? 0.9 : e.kind === 'bloom' ? 0.2 : T.enemy.wandererSpeed + S.elapsed * T.enemy.wandererSpeedPerSec;
  const KILL_VALUE = { wanderer: 1, wisp: 1.3, moth: 1.25, bell: 1.5, bloom: 1.2, choir: 1 };

  function createRunner(params, opts = {}) {
    const { skill: sk, attention: at } = params;
    const rnd = mulberry((params.id * 7919 + 13) >>> 0);
    // ---- derived traits ----
    const react = 0.72 - 0.54 * sk;                       // seconds between decisions (acts on a snapshot, so latency ~ half this)
    const aimSigma = 0.03 + 0.30 * Math.pow(1 - sk, 1.5); // radians of aim jitter when dashing
    const moveJitter = 0.42 * Math.pow(1 - sk, 1.5);      // radians of steering error
    const sees = { proj: sk > 0.30, pulse: sk > 0.20 };   // novices don't track bullets / shockwaves
    const wSafe = 0.35 + 1.4 * sk;                         // how much it weighs danger
    const scoreNoise = 1.6 * Math.pow(1 - sk, 1.5);
    const blunderP = 0.12 * (1 - sk) ** 2 + 0.02 * (1 - at);
    const nDirs = 6 + Math.round(10 * sk);
    const bankAt = 3 + Math.round(4 * sk);
    const lapseRate = 0.004 + 0.10 * (1 - at);            // zone-outs per second
    const lapseLen = 0.3 + 1.4 * (1 - at);
    const quitBase = 0.24 - 0.22 * at;                    // chance to give up after a death (grows with repeats)
    const timeBudget = (8 + 40 * at) * 60;                // sim-seconds of play before bored
    const dashTheta = 0.45;

    const brain = { clock: 0, next: 0, lapseUntil: 0, nextLapse: -Math.log(1 - rnd()) / lapseRate, input: { x: 0, y: 0 } };
    const rec = { id: params.id, skill: sk, attention: at, won: false, quit: null, levels: [], playtime: 0, deaths: 0, dmg: {}, kills: 0 };
    const lvRec = {};
    const getLv = i => lvRec[i] || (lvRec[i] = (rec.levels[i] = { index: i, id: G.bot.LEVELS[i].id, arrived: true, attempts: 1, deaths: 0, cleared: false, time: 0, clearTime: null, entryHp: S.hp, dmg: {} }));
    const offs = [G.events.on('player_damaged', ev => { const L = rec.levels[G.campaign.index]; const k = ev.source?.kind || '?'; rec.dmg[k] = (rec.dmg[k] || 0) + 1; if (L) L.dmg[k] = (L.dmg[k] || 0) + 1; }),
      G.events.on('enemy_banished', () => { rec.kills++; }),
      G.events.on('level_completed', ev => { const L = rec.levels.find(l => l && l.id === ev.id); if (L) { L.cleared = true; L.clearTime = L.time; } })];

    // ---------------- hazards ----------------
    function threatAt(x, y, realm, tau, skip) {
      let th = 0;
      for (const e of G.enemies) {
        if (e.realm !== realm || e.spawn > 0 || (skip && skip.has(e))) continue;
        const dd = hyp(e.pos.x - x, e.pos.y - y), dp = Math.max(0, dd - chaseSpeed(e) * tau * (e.kind === 'bloom' ? 0 : 1));
        const r = 0.8 + 0.5, reach = e.kind === 'moth' ? 2.2 : 1.5;
        if (dp < r) th += 1.6; else if (dp < r + reach) th += 0.9 * Math.pow((r + reach - dp) / reach, 1.5);
        if (e.pulse && sees.pulse) { const rr = e.pulse.r + T.spirits.bell.waveSpeed * tau, d = hyp(x - e.pulse.x, y - e.pulse.z); if (Math.abs(d - rr) < T.spirits.bell.band + 0.5) th += 1.5; }
      }
      for (const p of sees.proj ? G.projectiles : []) {
        if (p.realm !== realm) continue;
        for (const k of [0.5, 1]) {
          const px = p.pos.x + p.dir.x * T.projectile.speed * tau * k, py = p.pos.y + p.dir.y * T.projectile.speed * tau * k;
          if (hyp(px - x, py - y) < 1.0) { th += 1.4; break; }
        }
      }
      const C = G.campaign;
      for (const a of C.attacks || []) {
        if (a.realm !== realm) continue;
        const age = a.age + tau;
        if (a.kind === 'ring') { const r = Math.max(0, age - 0.85) * 6; if (Math.abs(hyp(x, y) - r) < 0.75 && age < 4) th += 1.8; }
        else { const d = hyp(x - a.x, y - a.z); if (age >= 0.7 && age <= 1.1 && d < 2.2) th += 2; else if (age < 1.1 && d < 2.4) th += 0.8; }
      }
      if (C.boss && C.boss.hp > 0 && C.boss.realm === realm && hyp(x, y) < 1.8) th += 1.6;
      return th;
    }

    // ---------------- dash planning ----------------
    const lvl = () => G.campaign.level;
    const motion = () => { const l = lvl(); return !!(l && (l.portals || l.portalsNS || l.walls || l.solids)); };
    function plan(dir) {
      const dist = T.dash.distance * (G.campaign.relics.includes('key') ? T.campaign.relicKey : 1);
      if (motion()) {
        const r = G.bot.planDash(S.pos, V(dir.x, dir.y), dist, 1 - S.realm);
        return { segs: r.segs.map(([a, b]) => [a.x, a.y, b.x, b.y]), end: [r.pos.x, r.pos.y] };
      }
      const ex = clamp(S.pos.x + dir.x * dist, -T.arena.x + T.arena.playerPad, T.arena.x - T.arena.playerPad);
      const ey = clamp(S.pos.y + dir.y * dist, -T.arena.z + T.arena.playerPad, T.arena.z - T.arena.playerPad);
      return { segs: [[S.pos.x, S.pos.y, ex, ey]], end: [ex, ey] };
    }
    const hitR = () => T.dash.hitRadius - 0.1;
    function evalDash(dir, ctx) {
      const pl = plan(dir), R = S.realm;
      let kills = 0, killedIds = new Set(), boss = 0;
      for (const e of G.enemies) {
        if (e.realm === R || e.spawn > 0) continue;
        for (const s of pl.segs) if (segDist(e.pos.x, e.pos.y, ...s) < hitR()) { kills += (e.shield > 0 ? 0.45 : (KILL_VALUE[e.kind] || 1)) * (ctx.wardBias ? ctx.wardBias(e) : 1); if (e.shield <= 0) killedIds.add(e); break; }
      }
      const C = G.campaign;
      if (C.boss && C.boss.hp > 0 && C.boss.realm !== R) for (const s of pl.segs) if (segDist(0, 0, ...s) < T.campaign.bossRadius - 0.15) { boss = 1; break; }
      // after landing we are in the other realm: surviving enemies of that realm are the danger
      const R2 = 1 - R;
      const before = threatAt(S.pos.x, S.pos.y, R, 0.25);
      const after = threatAt(pl.end[0], pl.end[1], R2, 0.4, killedIds);
      // setup value: when nothing can be hit, flipping realm turns same-realm enemies into targets
      let setup = 0;
      if (kills === 0 && !boss) {
        for (const e of G.enemies) if (e.realm === R && e.spawn <= 0 && hyp(e.pos.x - pl.end[0], e.pos.y - pl.end[1]) < 7.5) setup += 0.6;
        if (C.boss && C.boss.hp > 0 && C.boss.realm === R) setup += 1.2;
        setup = Math.min(setup, 1.5);
      }
      let extra = 0;
      if (ctx.souls) { for (const o of C.souls.orbs) extra += 0.15 * Math.max(0, 1 - hyp(o.x - pl.end[0], o.z - pl.end[1]) / 5); }
      return kills * 1.0 + boss * 2.6 + wSafe * (Math.min(before, 3) - Math.min(after, 3)) + setup + extra;
    }
    // ---------------- goals ----------------
    function context() {
      const C = G.campaign, L = lvl(), ctx = { kind: L.kind, phase: C.phase, targets: [], goal: null, souls: false };
      const R = S.realm;
      for (const e of G.enemies) if (e.realm !== R && e.spawn <= 0) ctx.targets.push(e);
      const nearest = (arr, f) => { let best = null, bd = 1e9; for (const e of arr) { const d = f(e); if (d < bd) { bd = d; best = e; } } return best; };
      if (C.phase === 'exit') { ctx.goal = L.exit; return ctx; }
      if (L.kind === 'wards') {
        const live = C.wards.filter(w => w.alive);
        const wd = e => Math.min(...live.map(w => hyp(w.x - e.pos.x, w.z - e.pos.y)), 99);
        ctx.wardBias = e => 1 + Math.max(0, 5 - wd(e)) * 0.25;
        const t = nearest(ctx.targets, e => wd(e) + hyp(e.pos.x - S.pos.x, e.pos.y - S.pos.y) * 0.4);
        ctx.goal = t ? [t.pos.x, t.pos.y] : [0, 0.5];
        ctx.target = t;
      } else if (L.kind === 'souls') {
        ctx.souls = true;
        const s = C.souls, orbs = s.orbs;
        const bankNow = s.carried >= Math.min(bankAt, T.campaign.soulGoal - s.banked) || (s.carried > 0 && !orbs.length && !ctx.targets.length);
        if (bankNow) ctx.goal = [0, 0];
        else if (orbs.length && s.lock <= 0) { const o = nearest(orbs, o => hyp(o.x - S.pos.x, o.z - S.pos.y)); ctx.goal = [o.x, o.z]; }
        else { const t = nearest(ctx.targets, e => hyp(e.pos.x - S.pos.x, e.pos.y - S.pos.y)); ctx.target = t; ctx.goal = t ? [t.pos.x, t.pos.y] : s.carried > 0 ? [0, 0] : [0, 0]; }
        if (s.carried > 0 && s.banked + s.carried >= T.campaign.soulGoal) ctx.goal = [0, 0];
      } else if (L.kind === 'boss' && C.boss && C.boss.hp > 0) {
        const t = nearest(ctx.targets, e => hyp(e.pos.x - S.pos.x, e.pos.y - S.pos.y));
        ctx.target = t;
        if (C.boss.realm !== R) {
          // line up a dash through the Warden from ~3.6 m, away from the walls: pick the side with room
          const ang = Math.atan2(S.pos.y, S.pos.x);
          ctx.goal = [Math.cos(ang) * 3.6, Math.sin(ang) * 3.6];
          ctx.goalWeight = 1.2;
        } else { const ang = Math.atan2(S.pos.y, S.pos.x); ctx.goal = [Math.cos(ang) * 3.4, Math.sin(ang) * 3.4]; ctx.goalWeight = 0.4; }
        if (t && hyp(t.pos.x - S.pos.x, t.pos.y - S.pos.y) < 4.5 && C.boss.realm === R) { ctx.goal = [t.pos.x, t.pos.y]; ctx.goalWeight = 0.8; }
      } else {
        const t = nearest(ctx.targets, e => hyp(e.pos.x - S.pos.x, e.pos.y - S.pos.y) - (e.kind === 'wisp' ? 1.5 : 0));
        ctx.target = t; ctx.goal = t ? [t.pos.x, t.pos.y] : null;
      }
      return ctx;
    }

    // ---------------- decisions ----------------
    const DIRS = n => Array.from({ length: n }, (_, i) => ({ x: Math.cos(i / n * Math.PI * 2), y: Math.sin(i / n * Math.PI * 2) }));
    function candidates(ctx) {
      const out = DIRS(nDirs);
      const aimAt = (x, y) => { const dx = x - S.pos.x, dy = y - S.pos.y, l = hyp(dx, dy); if (l > 0.3) out.push({ x: dx / l, y: dy / l }); };
      if (sk > 0.25) {
        const cap = Math.round(2 + 8 * sk);
        const sorted = [...ctx.targets].sort((a, b) => hyp(a.pos.x - S.pos.x, a.pos.y - S.pos.y) - hyp(b.pos.x - S.pos.x, b.pos.y - S.pos.y)).slice(0, cap);
        for (const e of sorted) aimAt(e.pos.x, e.pos.y);
        for (let i = 0; i < sorted.length; i++) for (let j = i + 1; j < Math.min(sorted.length, i + 4); j++) aimAt((sorted[i].pos.x + sorted[j].pos.x) / 2, (sorted[i].pos.y + sorted[j].pos.y) / 2);
        if (G.campaign.boss) aimAt(0, 0);
      }
      return out;
    }
    function tryDash(ctx) {
      if (S.dashCd > 0 || S.dashRemaining > 0) return false;
      let best = null, bestS = -1e9;
      for (const d of candidates(ctx)) { const sc = evalDash(d, ctx) + scoreNoise * gauss(rnd); if (sc > bestS) { bestS = sc; best = d; } }
      if (!best || bestS < dashTheta) return false;
      const a = Math.atan2(best.y, best.x) + aimSigma * gauss(rnd);
      S.facing.set(Math.cos(a), Math.sin(a));
      G.cross();
      return true;
    }
    function steer(ctx) {
      const R = S.realm, P = S.pos, tau = 0.4, step = 2.2, L = lvl();
      let bestV = null, bestS = -1e9;
      const n = 16;
      const g = ctx.goal;
      const gd = g ? hyp(g[0] - P.x, g[1] - P.y) : 0;
      // standoff: don't crowd a target we are about to dash at
      const holdOff = ctx.phase !== 'exit' && ctx.target && gd < 3.0 && L.kind !== 'souls';
      for (let i = 0; i < n; i++) {
        const dx = Math.cos(i / n * Math.PI * 2), dy = Math.sin(i / n * Math.PI * 2);
        const x = P.x + dx * step, y = P.y + dy * step;
        let sc = -wSafe * 1.6 * threatAt(x, y, R, tau) - wSafe * 0.5 * threatAt(P.x + dx * 1.0, P.y + dy * 1.0, R, 0.2);
        if (g && !holdOff) sc += (dx * (g[0] - P.x) + dy * (g[1] - P.y)) / Math.max(gd, 0.5) * (ctx.goalWeight || 1) * (ctx.phase === 'exit' ? 2 : 0.8);
        else if (g && holdOff) sc += -Math.abs(gd - 3.4) * 0.0;                      // hold position
        // edges / walls
        const mx = T.arena.x - 1.0, mz = T.arena.z - 1.0;
        if (!(L.portals || L.portalsNS)) { if (Math.abs(x) > mx) sc -= (Math.abs(x) - mx) * 0.9; if (Math.abs(y) > mz) sc -= (Math.abs(y) - mz) * 0.9; }
        else { const sx = L.portals ? 0 : 1, sz = L.portalsNS ? 0 : 1; if (sx && Math.abs(x) > mx) sc -= (Math.abs(x) - mx) * 0.9; if (sz && Math.abs(y) > mz) sc -= (Math.abs(y) - mz) * 0.9; }
        if (L.walls || L.solids) {
          for (const f of [0.5, 1.0, 1.6]) if (G.bot.blocked(V(P.x + dx * f * 1.2, P.y + dy * f * 1.2), R)) { sc -= 2.5 / f; break; }
        }
        if (!ctx.goal && !ctx.target) sc -= hyp(x, y) * 0.03;                         // drift to the middle
        if (sc > bestS) { bestS = sc; bestV = { x: dx, y: dy }; }
      }
      if (holdOff && threatAt(P.x, P.y, R, 0.3) < 0.2 && bestS < 0.1) return { x: 0, y: 0 };
      if (!bestV) return { x: 0, y: 0 };
      const a = Math.atan2(bestV.y, bestV.x) + moveJitter * gauss(rnd);
      return { x: Math.cos(a), y: Math.sin(a) };
    }
    function decide() {
      if (!lvl()) return;
      const ctx = context();
      if (rnd() < blunderP) {                                                         // fumble: a random shove or a wasted dash
        if (rnd() < 0.5) { const a = rnd() * 6.283; brain.input = { x: Math.cos(a), y: Math.sin(a) }; return; }
        if (S.dashCd <= 0) { const a = rnd() * 6.283; S.facing.set(Math.cos(a), Math.sin(a)); G.cross(); return; }
      }
      if (ctx.phase !== 'exit') tryDash(ctx);
      brain.input = steer(ctx);
    }

    // ---------------- relic ----------------
    function pickRelic() {
      const C = G.campaign, has = id => C.relics.includes(id);
      const opts = [...document.querySelectorAll('[data-relic]')].map(b => b.dataset.relic);
      let pick;
      if (rnd() < 0.5 * (1 - sk)) pick = opts[Math.floor(rnd() * opts.length)];
      else if (S.hp < T.player.maxHp && S.hp <= 1) pick = opts.includes('bubble') ? 'bubble' : 'flowers';
      else pick = !has('watch') && opts.includes('watch') ? 'watch' : !has('key') && opts.includes('key') ? 'key'
        : (opts.includes('bubble') ? 'bubble' : 'flowers');
      if (!opts.includes(pick)) pick = opts[0];
      G.chooseRelic(pick);
    }

    // ---------------- stepping ----------------
    // clip mode uses stepManual so the canvas paints; playtest uses stepSim (no render).
    const DT = 1 / 60;
    const step = opts.manual ? (dt) => G.stepManual(dt, 1) : (dt) => G.stepSim(dt, 1);
    const clip = !!opts.clip;
    let lastIdx = -1, ticks = 0, deathsHere = 0, done = false;
    const maxTicks = Math.min(timeBudget, opts.maxSeconds || 1e9) * 60;

    function boot() {
      G.setNextSeed(params.seed >>> 0);
      if (opts.tier != null) G.setTier(opts.tier);
      G.startGame({ mode: 'night' });
      ['intro', 'cross', 'wisp', 'moth', 'bloom', 'choir', 'bell'].forEach(k => S.notes.add(k));
      if (opts.levelId) G.loadLevel(opts.levelId);
      S.botInput = brain.input;
    }
    // One 1/60 s beat. Returns false when the run should stop (play mode).
    function tick() {
      if (done) return false;
      const idx = G.campaign.index;
      if (idx !== lastIdx) { lastIdx = idx; const L = getLv(idx); if (L.attempts === 1 && L.time === 0) L.entryHp = S.hp; deathsHere = 0; }
      const L = rec.levels[idx];
      if (S.state === 'playing') {
        brain.clock += DT;
        if (brain.clock >= brain.nextLapse) {
          brain.lapseUntil = brain.clock + lapseLen * (0.5 + rnd());
          brain.nextLapse = brain.clock - Math.log(1 - rnd()) / lapseRate + lapseLen;
          if (rnd() < 0.6) brain.input = { x: 0, y: 0 };
        }
        if (brain.clock >= brain.lapseUntil && brain.clock >= brain.next) { brain.next = brain.clock + react * (0.7 + 0.6 * rnd()); decide(); }
        S.botInput = brain.input;
        S.hitStop = 0;
        step(DT);
        ticks++; L.time += DT;
        if (window.__BOT_PROBE) window.__BOT_PROBE(ticks, brain);
        if (opts.trace && ticks % 30 === 0) opts.trace.push(`${ticks} ${S.pos.x.toFixed(2)},${S.pos.y.toFixed(2)} r${S.realm} cd${S.dashCd.toFixed(2)} in${brain.input.x.toFixed(2)},${brain.input.y.toFixed(2)} en${G.enemies.length}`);
        if (G.events.history.length > 400) G.events.history.length = 0;
      } else if (S.state === 'relic') {
        pickRelic();
      } else if (S.state === 'won') {
        rec.won = true;
        if (clip && opts.levelId) G.loadLevel(opts.levelId);   // keep the clip rolling on the same court
        else { done = true; return false; }
      } else if (S.state === 'lost') {
        rec.deaths++; L.deaths++; deathsHere++;
        if (clip) { L.attempts++; G.bot.retry(); brain.input = { x: 0, y: 0 }; brain.next = brain.clock + 0.5 + rnd(); }
        else {
          const q = clamp(quitBase + 0.06 * (deathsHere - 1), 0.02, 0.9);
          if (rnd() < q) { rec.quit = 'frustration'; done = true; return false; }
          L.attempts++; G.bot.retry(); brain.input = { x: 0, y: 0 }; brain.next = brain.clock + 0.5 + rnd();
        }
      } else if (S.state === 'tutorial') { G.dismissTip && (S.state = 'playing'); }
      else { done = true; return false; }
      if (!clip) {
        if (ticks > maxTicks) { rec.quit = 'bored'; done = true; return false; }
        if (L.time > 420 && !L.cleared) { rec.quit = 'stuck'; rec.debug = { level: lvl().id, pos: [S.pos.x, S.pos.y], realm: S.realm, dashCd: S.dashCd, input: brain.input, phase: G.campaign.phase, dir: G.director && { round: G.director.round, phase: G.director.phase }, enemies: G.enemies.map(e => ({ k: e.kind, r: e.realm, x: +e.pos.x.toFixed(2), y: +e.pos.y.toFixed(2), sh: e.shield })) }; done = true; return false; }
      }
      return true;
    }
    function finish() {
      rec.playtime = ticks * DT;
      rec.reached = rec.levels.filter(Boolean).length;
      rec.cleared = rec.levels.filter(l => l && l.cleared).length;
      S.botInput = null; offs.forEach(f => f());
      done = true;
      return rec;
    }
    return { boot, tick, finish, rec };
  }

  function play(params, opts = {}) {
    const r = createRunner(params, opts);
    r.boot();
    while (r.tick()) {}
    return r.finish();
  }

  // Framed clip for the readme: expert brain + stepManual, driven from the host one beat at a time.
  function openClip(params, opts = {}) {
    if (window.__BOT_CLIP) closeClip();
    const r = createRunner(params, { ...opts, manual: true, clip: true });
    r.boot();
    window.__BOT_CLIP = r;
    return { level: opts.levelId || null, state: G.S.state };
  }
  function tickClip(frames = 1) {
    const r = window.__BOT_CLIP;
    if (!r) return { done: true, state: G.S.state };
    for (let i = 0; i < frames; i++) if (!r.tick()) return { done: true, state: G.S.state };
    return { done: false, state: G.S.state };
  }
  function closeClip() {
    const r = window.__BOT_CLIP;
    window.__BOT_CLIP = null;
    return r ? r.finish() : null;
  }

  window.__BOT = { play, openClip, tickClip, closeClip };
})();
