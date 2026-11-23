// Player-facing copy loaded from JSON so dialogue/HUD text stays out of game logic.
import raw from './copy.json';

export const copy = raw;

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
  if (key) key.textContent = copy.hud.crossKey;
  const cross = document.getElementById('crossbtn');
  if (cross) {
    const ring = cross.querySelector('.ring');
    cross.innerHTML = '';
    if (ring) cross.appendChild(ring);
    cross.append(document.createTextNode(copy.hud.tapCross));
  }
  const pause = document.getElementById('pausebtn');
  if (pause) {
    pause.setAttribute('aria-label', copy.hud.pauseAria);
    const label = pause.querySelector('.pause-label');
    if (label) label.textContent = copy.hud.pauseLabel || copy.hud.pauseAria;
  }
  document.title = `${copy.title} — Demo`;
}
