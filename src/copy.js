// Player-facing copy: short UI chrome from ui.json + instructions compiled from INSTRUCTIONS.md.
import ui from './ui.json';
import instructions from './instructions.gen.json';
import { enrichCopy, keyIcon } from './keys.js';

function merge(a, b) {
  if (Array.isArray(b)) return b.slice();
  if (!b || typeof b !== 'object') return b;
  const out = { ...(a && typeof a === 'object' && !Array.isArray(a) ? a : {}) };
  for (const [k, v] of Object.entries(b)) {
    out[k] = (v && typeof v === 'object' && !Array.isArray(v) && out[k] && typeof out[k] === 'object' && !Array.isArray(out[k]))
      ? merge(out[k], v)
      : merge(undefined, v);
  }
  return out;
}

export const copy = enrichCopy(merge(ui, instructions));

export function fmt(template, vars = {}) {
  return String(template).replace(/\{(\w+)\}/g, (_, key) => (
    vars[key] === undefined || vars[key] === null ? '' : String(vars[key])
  ));
}

export function kbTc(kb, tc, suffix = '') {
  const tail = suffix ? ` ${suffix}` : '';
  return `<span class="kb">${kb}</span><span class="tc">${tc}</span>${tail}`;
}

/** Fill static HUD chrome that ships in the HTML shell. */
export function applyShellCopy() {
  const loading = document.getElementById('loading');
  if (loading) loading.textContent = copy.loading;
  const phase = document.getElementById('phase');
  if (phase) phase.textContent = copy.phases[0].label;
  const key = document.querySelector('#lanternbox .key');
  if (key) key.innerHTML = copy.hud.crossKey;
  const cross = document.getElementById('crossbtn');
  if (cross) {
    const ring = cross.querySelector('.ring');
    cross.innerHTML = '';
    if (ring) cross.appendChild(ring);
    const tap = document.createElement('span');
    tap.innerHTML = copy.hud.tapCross;
    cross.appendChild(tap);
  }
  const pause = document.getElementById('pausebtn');
  if (pause) {
    pause.setAttribute('aria-label', copy.hud.pauseAria);
    const label = pause.querySelector('.pause-label');
    if (label) label.textContent = copy.hud.pauseLabel || copy.hud.pauseAria;
  }
  document.title = `${copy.title} — Demo`;
}

export { keyIcon };
