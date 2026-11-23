// Tiny WebAudio synth: no audio files needed. Separate SFX / music buses with persisted volumes.
const SETTINGS_KEY = 'gs_settings';
let ctx, master, sfxGain, musicGain;
let muted = false, musicOn = false, musicTimer = null;
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
  musicGain = ctx.createGain(); musicGain.gain.value = 0; musicGain.connect(master);
  return true;
}
function applyVolumes() {
  if (!ensure()) return;
  master.gain.value = muted ? 0 : 1;
  sfxGain.gain.value = sfxVol;
  const target = (!muted && musicOn) ? musicVol : 0;
  musicGain.gain.cancelScheduledValues(ctx.currentTime);
  musicGain.gain.linearRampToValueAtTime(target, ctx.currentTime + 0.15);
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
  for (let i = 0; i < n; i++) d[i] = Math.random() * 2 - 1;
  const s = ctx.createBufferSource(); s.buffer = buf;
  const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.Q.value = q;
  f.frequency.setValueAtTime(f0, t); f.frequency.exponentialRampToValueAtTime(f1, t + dur);
  const g = ctx.createGain(); g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  s.connect(f); f.connect(g); g.connect(dest || sfxGain); s.start(t);
}
const SCALE = [0, 3, 5, 7, 10, 12, 15, 17, 19, 22];
const note = (root, i) => root * Math.pow(2, SCALE[i % SCALE.length] / 12 + Math.floor(i / SCALE.length));
let step = 0;
function musicTick() {
  if (!musicOn || muted || musicVol <= 0.001) return;
  const bass = [110, 110, 98, 103.8][Math.floor(step / 8) % 4];
  if (step % 8 === 0) tone(bass / 2, 1.6, { type: 'triangle', vol: 0.22, dest: musicGain, attack: 0.05 });
  if (step % 2 === 0 && Math.random() < 0.6) tone(note(bass * 2, [0, 2, 4, 3, 5, 4, 2, 1][step % 8]), 0.5, { type: 'triangle', vol: 0.07, dest: musicGain, attack: 0.01 });
  if (step % 4 === 2) noise(0.05, { vol: 0.03, f0: 6000, f1: 7000, q: 3, dest: musicGain });
  step++;
}
export const Sfx = {
  unlock() { if (ensure() && ctx.state === 'suspended') ctx.resume(); },
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
    if (on && !musicTimer) musicTimer = setInterval(musicTick, 230);
  },
  cross(realm) {
    noise(0.22, { vol: 0.28, f0: realm ? 600 : 2200, f1: realm ? 3200 : 500, q: 2 });
    tone(realm ? 330 : 440, 0.18, { type: 'sine', vol: 0.12, slide: realm ? 1.5 : 0.66 });
  },
  banish(combo) {
    const base = 523.25;
    tone(note(base, combo - 1), 0.25, { type: 'square', vol: 0.09 });
    tone(note(base, combo + 1), 0.3, { type: 'triangle', vol: 0.1, delay: 0.05 });
    noise(0.12, { vol: 0.12, f0: 4000, f1: 9000, q: 1 });
  },
  hit() { tone(140, 0.3, { type: 'sawtooth', vol: 0.2, slide: 0.4 }); noise(0.25, { vol: 0.25, f0: 300, f1: 100, q: 0.8 }); },
  zap() { tone(900, 0.18, { type: 'square', vol: 0.04, slide: 0.35 }); },
  win() { [0, 2, 4, 5, 7].forEach((n, i) => tone(note(392, n), 0.5, { type: 'triangle', vol: 0.12, delay: i * 0.12 })); },
  lose() { [4, 3, 1, 0].forEach((n, i) => tone(note(196, n), 0.6, { type: 'triangle', vol: 0.12, delay: i * 0.18 })); },
};
