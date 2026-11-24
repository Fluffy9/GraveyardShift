// Tabbed pause menu: pause actions, how-to-play, controls, audio settings, and credits.
import { isTouchUI } from './config.js';
import { copy } from './copy.js';
import { setOverlay } from './hud.js';
import { Sfx } from './sfx.js';

let tab = 'pause';
let howtoSlide = 0;
let bound = false;
let pauseOpen = false;
let resumeFn = () => {};
let restartFn = () => {};
/** @type {Map<string, 'loading' | 'ready' | 'error'>} */
const clipStatus = new Map();
let preloadStarted = false;

const TABS = ['pause', 'howto', 'controls', 'settings', 'credits'];

function volPct(v) { return Math.round(clamp01(v) * 100); }
function clamp01(v) { return Math.max(0, Math.min(1, Number(v) || 0)); }

function howtoClips() {
  return copy.menu.howto?.clips || [];
}

/** Warm how-to GIFs as soon as the game boots so the pause menu rarely waits on first open. */
export function preloadMenuClips() {
  if (preloadStarted) return;
  preloadStarted = true;
  for (const clip of howtoClips()) {
    if (!clip?.src || clipStatus.has(clip.src)) continue;
    clipStatus.set(clip.src, 'loading');
    const img = new Image();
    img.decoding = 'async';
    img.onload = () => {
      clipStatus.set(clip.src, 'ready');
      if (pauseOpen && tab === 'howto') refresh();
    };
    img.onerror = () => {
      clipStatus.set(clip.src, 'error');
      if (pauseOpen && tab === 'howto') refresh();
    };
    img.src = clip.src;
  }
}

function clipState(src) {
  return clipStatus.get(src) || 'loading';
}

function pausePane() {
  const m = copy.menu;
  const lead = m.pause?.lead || '';
  return `
    <div class="menu-actions">
      ${lead ? `<p class="menu-lead">${lead}</p>` : ''}
      <button type="button" class="menu-btn" data-action="resume">${m.resume}</button>
      <button type="button" class="menu-btn ghost" data-action="restart">${m.restart}</button>
      <p class="tiny menu-hint">${isTouchUI() ? m.hintTc : m.hintKb}</p>
    </div>`;
}

function howtoPane() {
  const m = copy.menu.howto;
  const clips = howtoClips();
  if (!clips.length) return `<p class="menu-lead">${m.lead}</p>`;
  howtoSlide = Math.max(0, Math.min(howtoSlide, clips.length - 1));
  const clip = clips[howtoSlide];
  const caption = isTouchUI() ? (clip.captionTc || clip.caption) : clip.caption;
  const state = clipState(clip.src);
  const loading = state !== 'ready';
  const nav = copy.menu.slides || { prev: 'Prev', next: 'Next', loading: 'Loading' };
  // Lead is folded into the slide chrome so the panel stays short on common viewports.
  return `
    <div class="menu-slides" aria-label="${m.lead}">
      <figure class="menu-clip">
        <div class="menu-clip-media">
          <div class="menu-clip-loading"${loading ? '' : ' hidden'}>${nav.loading}</div>
          <img src="${clip.src}" alt="" width="480" height="270" decoding="async" class="${loading ? 'is-loading' : ''}" />
        </div>
        <figcaption>${caption}</figcaption>
      </figure>
      <div class="menu-slide-nav">
        <button type="button" class="menu-slide-btn" data-slide="-1"${howtoSlide <= 0 ? ' disabled' : ''}>${nav.prev}</button>
        <span class="menu-slide-meta">${howtoSlide + 1} / ${clips.length}</span>
        <button type="button" class="menu-slide-btn" data-slide="1"${howtoSlide >= clips.length - 1 ? ' disabled' : ''}>${nav.next}</button>
      </div>
    </div>`;
}

function controlsPane() {
  const rows = isTouchUI() ? copy.menu.controls.touch : copy.menu.controls.keyboard;
  return `<ul class="menu-controls">${rows.map(r => `
    <li><span class="menu-key">${r.keys}</span><span class="menu-act">${r.action}</span></li>`).join('')}</ul>`;
}

function settingsPane() {
  const v = Sfx.getVolumes();
  const m = copy.menu.settings;
  return `
    <div class="menu-setting">
      <label for="vol-sfx">${m.sfx}</label>
      <div class="menu-slider">
        <input id="vol-sfx" type="range" min="0" max="100" step="5" value="${volPct(v.sfx)}" data-vol="sfx" />
        <span class="menu-vol" data-vol-label="sfx">${volPct(v.sfx)}</span>
      </div>
    </div>
    <div class="menu-setting">
      <label for="vol-music">${m.music}</label>
      <div class="menu-slider">
        <input id="vol-music" type="range" min="0" max="100" step="5" value="${volPct(v.music)}" data-vol="music" />
        <span class="menu-vol" data-vol-label="music">${volPct(v.music)}</span>
      </div>
    </div>
    <p class="tiny menu-mute">${m.muteHint}</p>`;
}

function creditsPane() {
  const m = copy.menu.credits || { lead: 'Credits', items: [] };
  const items = (m.items || []).map(it => `
    <div class="menu-credit">
      <h3>${it.title}</h3>
      <p>${it.body}</p>
    </div>`).join('');
  return `
    <p class="menu-lead">${m.lead}</p>
    ${items || '<p class="menu-credit">Thanks for playing.</p>'}`;
}

function pane() {
  if (tab === 'howto') return howtoPane();
  if (tab === 'controls') return controlsPane();
  if (tab === 'settings') return settingsPane();
  if (tab === 'credits') return creditsPane();
  return pausePane();
}

function render() {
  const m = copy.menu;
  return `
    <div class="menu-panel" role="dialog" aria-modal="true" aria-label="${m.title}">
      <div class="menu-head">
        <h2>${m.title}</h2>
      </div>
      <div class="menu-tabs" role="tablist">
        ${TABS.map(id => `<button type="button" class="menu-tab${tab === id ? ' on' : ''}" data-tab="${id}" role="tab" aria-selected="${tab === id}">${m.tabs[id]}</button>`).join('')}
      </div>
      <div class="menu-pane" role="tabpanel">${pane()}</div>
    </div>`;
}

function refresh() {
  setOverlay(render(), { interactive: true });
}

export function openPauseMenu({ resume, restart }) {
  resumeFn = resume;
  restartFn = restart;
  tab = 'pause';
  pauseOpen = true;
  preloadMenuClips();
  refresh();
  bind();
}

export function closePauseMenu() {
  pauseOpen = false;
  setOverlay(null);
}

function bind() {
  if (bound) return;
  bound = true;
  const overlay = document.getElementById('overlay');
  overlay.addEventListener('click', e => {
    const tabBtn = e.target.closest('[data-tab]');
    if (tabBtn) {
      tab = tabBtn.getAttribute('data-tab');
      refresh();
      return;
    }
    const slideBtn = e.target.closest('[data-slide]');
    if (slideBtn) {
      const delta = Number(slideBtn.getAttribute('data-slide')) || 0;
      const max = Math.max(0, howtoClips().length - 1);
      howtoSlide = Math.max(0, Math.min(max, howtoSlide + delta));
      refresh();
      return;
    }
    const action = e.target.closest('[data-action]');
    if (!action) return;
    const kind = action.getAttribute('data-action');
    if (kind === 'resume') resumeFn();
    if (kind === 'restart') restartFn();
  });
  overlay.addEventListener('input', e => {
    const el = e.target;
    if (!(el instanceof HTMLInputElement) || !el.dataset.vol) return;
    const value = clamp01(Number(el.value) / 100);
    if (el.dataset.vol === 'sfx') Sfx.setSfxVolume(value);
    if (el.dataset.vol === 'music') Sfx.setMusicVolume(value);
    const label = overlay.querySelector(`[data-vol-label="${el.dataset.vol}"]`);
    if (label) label.textContent = String(volPct(value));
  });
  // Keep touches inside the panel from bubbling to the document resume handler.
  overlay.addEventListener('touchstart', e => {
    if (e.target.closest('.menu-panel')) e.stopPropagation();
  }, { capture: true });
}
