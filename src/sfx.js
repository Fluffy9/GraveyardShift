// WebAudio: recorded score (audio/*.ogg, reactive to the realm) with the old synth as a fallback.
// Separate SFX / music buses with persisted volumes.
import { fx } from './sim/rng.js';
const SETTINGS_KEY = 'gs_settings';
let ctx, master, sfxGain, musicGain, gameG, titleG;
let muted = false, musicOn = false, titleWanted = false, musicTimer = null;
let sfxVol = 0.7, musicVol = 0.55;

function loadSettings() {
  try {
    const raw = JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{}');
    if (typeof raw.sfx === 'number') sfxVol = clamp01(raw.sfx);
    if (typeof raw.music === 'number') musicVol = clamp01(raw.music);
    if (typeof raw.muted === 'boolean') muted = raw.muted;
  } catch (e) {}
}
function saveSettings() {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify({ sfx: sfxVol, music: musicVol, muted }));
  } catch (e) {}
}
const clamp01 = v => Math.max(0, Math.min(1, v));

loadSettings();

function ensure() {
  if (ctx) return true;
  const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return false;
  ctx = new AC();
  master = ctx.createGain(); master.gain.value = muted ? 0 : 1; master.connect(ctx.destination);
  sfxGain = ctx.createGain(); sfxGain.gain.value = sfxVol; sfxGain.connect(master);
  musicGain = ctx.createGain(); musicGain.gain.value = muted ? 0 : musicVol; musicGain.connect(master);
  gameG = ctx.createGain(); gameG.gain.value = 0; gameG.connect(musicGain);     // in-run score
  titleG = ctx.createGain(); titleG.gain.value = 0; titleG.connect(musicGain);   // title / mode-select theme
  return true;
}
function applyVolumes() {
  if (!ensure()) return;
  master.gain.value = muted ? 0 : 1;
  sfxGain.gain.value = sfxVol;
  const ramp = (g, v, t) => { g.gain.cancelScheduledValues(ctx.currentTime); g.gain.setValueAtTime(g.gain.value, ctx.currentTime); g.gain.linearRampToValueAtTime(v, ctx.currentTime + t); };
  ramp(musicGain, muted ? 0 : musicVol, 0.15);
  ramp(gameG, musicOn ? 1 : 0, 0.15);
  ramp(titleG, titleWanted ? 1 : 0, 0.35);
}
function tone(freq, dur, { type = 'square', vol = 0.15, slide = 0, delay = 0, attack = 0.005, dest } = {}) {
  if (!ensure() || muted) return;
  const t = ctx.currentTime + delay, o = ctx.createOscillator(), g = ctx.createGain();
  o.type = type; o.frequency.setValueAtTime(freq, t);
  if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(20, freq * slide), t + dur);
  g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(vol, t + attack); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g); g.connect(dest || sfxGain); o.start(t); o.stop(t + dur + 0.05);
}
function noise(dur, { vol = 0.2, f0 = 800, f1 = 3000, q = 1.5, delay = 0, dest } = {}) {
  if (!ensure() || muted) return;
  const t = ctx.currentTime + delay, n = Math.floor(ctx.sampleRate * dur), buf = ctx.createBuffer(1, n, ctx.sampleRate), d = buf.getChannelData(0);
  for (let i = 0; i < n; i++) d[i] = fx() * 2 - 1;
  const s = ctx.createBufferSource(); s.buffer = buf;
  const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.Q.value = q;
  f.frequency.setValueAtTime(f0, t); f.frequency.exponentialRampToValueAtTime(f1, t + dur);
  const g = ctx.createGain(); g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  s.connect(f); f.connect(g); g.connect(dest || sfxGain); s.start(t);
}
// ---------- recorded score ----------
// Two loops of identical length and tempo (living = clean, spirit = same music through heavy reverb) play
// together; only one is audible. Crossing realms crossfades (equal power) to the other at the SAME position.
// The short "world switch" whoosh starts SWAP_LEAD before the fade so its peak lands on the switch.
const AUDIO = { clean: 'audio/melodic_clean_loop.ogg', spirit: 'audio/melodic_spirit_reverb_loop.ogg', swap: 'audio/sfx_world_switch.ogg' };
// Title / mode-select theme: a single looping track (minimal melody), separate from the in-run score.
const TITLE_SRC = 'audio/title_minimal_melody_loop.ogg';
let titleEl = null, titleTimer = null;
function ensureTitle() {
  if (titleEl || !ensure()) return !!titleEl;
  try {
    titleEl = new Audio(); titleEl.loop = true; titleEl.preload = 'auto'; titleEl.src = TITLE_SRC;
    ctx.createMediaElementSource(titleEl).connect(titleG);
    titleEl.load();
  } catch (e) { titleEl = null; }
  return !!titleEl;
}
function applyTheme() {
  if (!ctx || !ensureTitle()) return;
  clearTimeout(titleTimer); titleTimer = null;
  if (titleWanted) titleEl.play().catch(() => {});
  else titleTimer = setTimeout(() => { if (!titleWanted && titleEl) titleEl.pause(); }, 450);
  applyVolumes();
}
const SWAP_LEAD = 0.27, XFADE = 0.25, MAX_DRIFT = 0.03;
let loops = null, loopsFailed = false, loopRealm = 0, swapBuf = null, pauseTimer = null;
const loopsUsable = () => !!loops && !loopsFailed;

function ensureLoops() {
  if (loops || loopsFailed || !ensure()) return loopsUsable();
  try {
    loops = {};
    for (const k of ['clean', 'spirit']) {
      const el = new Audio(); el.loop = true; el.preload = 'auto'; el.src = AUDIO[k];
      el.addEventListener('error', () => { loopsFailed = true; if (musicOn && !musicTimer) musicTimer = setInterval(musicTick, 230); });
      const g = ctx.createGain(); g.gain.value = (k === 'clean') ? 1 : 0;
      ctx.createMediaElementSource(el).connect(g); g.connect(gameG);
      loops[k] = { el, g };
    }
    fetch(AUDIO.swap).then(r => r.arrayBuffer()).then(b => ctx.decodeAudioData(b)).then(buf => { swapBuf = buf; }).catch(() => {});
  } catch (e) { loops = null; loopsFailed = true; }
  return loopsUsable();
}
function startLoops() {
  if (!ensureLoops()) return;
  clearTimeout(pauseTimer); pauseTimer = null;
  const wasPlaying = !loops.clean.el.paused;
  loopRealm = 0;
  for (const k of ['clean', 'spirit']) {
    const { el, g } = loops[k];
    g.gain.cancelScheduledValues(ctx.currentTime); g.gain.value = (k === 'clean') ? 1 : 0;
    if (!wasPlaying) { try { el.currentTime = 0; } catch (e) {} }
    el.play().catch(() => {});
  }
}
function stopLoops() {      // after the music bus has faded out
  if (!loops) return;
  clearTimeout(pauseTimer);
  pauseTimer = setTimeout(() => { if (!musicOn) for (const k in loops) loops[k].el.pause(); }, 300);
}
const FADE_OUT = Float32Array.from({ length: 16 }, (_, i) => Math.cos(i / 15 * Math.PI / 2));
const FADE_IN = Float32Array.from({ length: 16 }, (_, i) => Math.sin(i / 15 * Math.PI / 2));
function fadeLoops(realm, delay = 0) {
  if (!loopsUsable() || realm === loopRealm) return;
  loopRealm = realm;
  const from = realm ? loops.clean : loops.spirit, to = realm ? loops.spirit : loops.clean;
  // keep the incoming loop on the same bar as the outgoing one
  try { if (Math.abs(to.el.currentTime - from.el.currentTime) > MAX_DRIFT) to.el.currentTime = from.el.currentTime; } catch (e) {}
  const t = ctx.currentTime + delay;
  for (const [x, curve] of [[from, FADE_OUT], [to, FADE_IN]]) {
    const gp = x.g.gain;
    if (gp.cancelAndHoldAtTime) gp.cancelAndHoldAtTime(ctx.currentTime); else gp.cancelScheduledValues(ctx.currentTime);
    gp.setValueCurveAtTime(curve, t, XFADE);
  }
}
const SCALE = [0, 3, 5, 7, 10, 12, 15, 17, 19, 22];
const note = (root, i) => root * Math.pow(2, SCALE[i % SCALE.length] / 12 + Math.floor(i / SCALE.length));
let step = 0;
function musicTick() {
  if (!musicOn || muted || musicVol <= 0.001 || loopsUsable()) return;   // synth is only the fallback
  const bass = [110, 110, 98, 103.8][Math.floor(step / 8) % 4];
  if (step % 8 === 0) tone(bass / 2, 1.6, { type: 'triangle', vol: 0.22, dest: gameG, attack: 0.05 });
  if (step % 2 === 0 && fx() < 0.6) tone(note(bass * 2, [0, 2, 4, 3, 5, 4, 2, 1][step % 8]), 0.5, { type: 'triangle', vol: 0.07, dest: gameG, attack: 0.01 });
  if (step % 4 === 2) noise(0.05, { vol: 0.03, f0: 6000, f1: 7000, q: 3, dest: gameG });
  step++;
}
export const Sfx = {
  // first user gesture: wake the audio context and start fetching the music so a run can start instantly
  unlock() {
    if (!ensure()) return;
    if (ctx.state === 'suspended') ctx.resume();
    ensureLoops(); ensureTitle();
    if (titleWanted && titleEl && titleEl.paused) applyTheme();
  },
  // title / mode select theme on or off (the in-run score is music())
  theme(on) { titleWanted = !!on; if (ctx) applyTheme(); },
  start() { this.unlock(); applyVolumes(); },
  getVolumes() { return { sfx: sfxVol, music: musicVol, muted }; },
  setSfxVolume(v) { sfxVol = clamp01(v); applyVolumes(); saveSettings(); },
  setMusicVolume(v) { musicVol = clamp01(v); applyVolumes(); saveSettings(); },
  toggleMute() {
    muted = !muted;
    applyVolumes();
    saveSettings();
  },
  music(on) {
    if (!ensure()) return;
    musicOn = on;
    applyVolumes();
    if (on) {
      startLoops();
      if (!loopsUsable() && !musicTimer) musicTimer = setInterval(musicTick, 230);
    } else stopLoops();
  },
  // crossing realms: the whoosh, then the score swaps living <-> spirit
  cross(realm) {
    if (swapBuf && ensure() && !muted) {
      const src = ctx.createBufferSource(); src.buffer = swapBuf; src.connect(sfxGain); src.start();
      fadeLoops(realm, SWAP_LEAD);
      return;
    }
    noise(0.22, { vol: 0.28, f0: realm ? 600 : 2200, f1: realm ? 3200 : 500, q: 2 });
    tone(realm ? 330 : 440, 0.18, { type: 'sine', vol: 0.12, slide: realm ? 1.5 : 0.66 });
    fadeLoops(realm);
  },
  // test/debug hook
  audioState() { return { title: titleEl ? !titleEl.paused : false, loops: loopsUsable(), failed: loopsFailed, realm: loopRealm, swapReady: !!swapBuf, playing: !!loops && !loops.clean.el.paused, t: loops ? [loops.clean.el.currentTime, loops.spirit.el.currentTime] : null, gain: loops ? [loops.clean.g.gain.value, loops.spirit.g.gain.value] : null }; },
  banish(combo) {
    const base = 523.25;
    tone(note(base, combo - 1), 0.25, { type: 'square', vol: 0.09 });
    tone(note(base, combo + 1), 0.3, { type: 'triangle', vol: 0.1, delay: 0.05 });
    noise(0.12, { vol: 0.12, f0: 4000, f1: 9000, q: 1 });
  },
  hit() { tone(140, 0.3, { type: 'sawtooth', vol: 0.2, slide: 0.4 }); noise(0.25, { vol: 0.25, f0: 300, f1: 100, q: 0.8 }); },
  blip(up = true) { this.unlock(); tone(up ? 784 : 659, 0.06, { type: 'square', vol: 0.045 }); },   // menu move
  deny() { this.unlock(); tone(180, 0.12, { type: 'square', vol: 0.06, slide: 0.8 }); },              // locked option
  zap() { tone(900, 0.18, { type: 'square', vol: 0.04, slide: 0.35 }); },
  win() { [0, 2, 4, 5, 7].forEach((n, i) => tone(note(392, n), 0.5, { type: 'triangle', vol: 0.12, delay: i * 0.12 })); },
  lose() { [4, 3, 1, 0].forEach((n, i) => tone(note(196, n), 0.6, { type: 'triangle', vol: 0.12, delay: i * 0.18 })); },
};
