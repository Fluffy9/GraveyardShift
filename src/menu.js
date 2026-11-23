// Tabbed pause menu: how-to-play, controls, audio settings, and credits.
import { IS_TOUCH } from './config.js';
import { copy, kbTc } from './copy.js';
import { controlKeysHtml } from './keys.js';
import { setOverlay } from './hud.js';
import { Sfx } from './sfx.js';

let tab = 'howto';
let bound = false;
let resumeFn = () => {};
let restartFn = () => {};

const isTouchUI = () => IS_TOUCH || document.body.classList.contains('touch');

function volPct(v) { return Math.round(clamp01(v) * 100); }
function clamp01(v) { return Math.max(0, Math.min(1, Number(v) || 0)); }

function howtoPane() {
  const m = copy.menu.howto;
  const tip = isTouchUI() ? copy.tips.crossTc : copy.tips.crossKb;
  const t = copy.titleScreen;
  const clips = (m.clips || []).map(c => {
    const caption = isTouchUI() ? (c.captionTc || c.caption) : c.caption;
    return `<figure class="menu-clip">
      <img src="${c.src}" alt="" width="480" height="270" loading="lazy" decoding="async" />
      <figcaption>${caption}</figcaption>
    </figure>`;
  }).join('');
  return `
    <p class="menu-lead">${m.lead}</p>
    <div class="menu-clips">${clips}</div>
    <ul class="menu-list">
      <li>${copy.tips.intro}</li>
      <li>${tip}</li>
      <li>${copy.tips.wisp}</li>
      <li>${t.howto}<span class="tc"> ${t.howtoTouch}</span> ${t.howtoEnd}</li>
    </ul>`;
}

function controlsPane() {
  const rows = isTouchUI() ? copy.menu.controls.touch : copy.menu.controls.keyboard;
  return `<ul class="menu-controls">${rows.map(r => `
    <li><span class="menu-key">${isTouchUI() ? r.keys : controlKeysHtml(r.keys)}</span><span class="menu-act">${r.action}</span></li>`).join('')}</ul>`;
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
  if (tab === 'controls') return controlsPane();
  if (tab === 'settings') return settingsPane();
  if (tab === 'credits') return creditsPane();
  return howtoPane();
}

function render() {
  const m = copy.menu;
  const tabs = ['howto', 'controls', 'settings', 'credits'];
  return `
    <div class="menu-panel" role="dialog" aria-modal="true" aria-label="${m.title}">
      <h2>${m.title}</h2>
      <div class="menu-tabs" role="tablist">
        ${tabs.map(id => `<button type="button" class="menu-tab${tab === id ? ' on' : ''}" data-tab="${id}" role="tab" aria-selected="${tab === id}">${m.tabs[id]}</button>`).join('')}
      </div>
      <div class="menu-pane" role="tabpanel">${pane()}</div>
      <div class="menu-actions">
        <button type="button" class="menu-btn" data-action="resume">${m.resume}</button>
        <button type="button" class="menu-btn ghost" data-action="restart">${m.restart}</button>
      </div>
      <p class="tiny menu-hint">${isTouchUI() ? m.hintTc : m.hintKb}</p>
    </div>`;
}

function refresh() {
  setOverlay(render(), { interactive: true });
}

export function openPauseMenu({ resume, restart }) {
  resumeFn = resume;
  restartFn = restart;
  refresh();
  bind();
}

export function closePauseMenu() {
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
