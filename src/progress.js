// Per-mode best scores and the last chosen mode (localStorage; every access is guarded).
const bestKey = mode => (mode === 'night' ? 'gs_best_night' : 'gs_best');
export function loadBest(mode) { try { return +localStorage.getItem(bestKey(mode)) || 0; } catch (e) { return 0; } }
export function saveBest(mode, v) { try { localStorage.setItem(bestKey(mode), String(v)); } catch (e) {} }
export function loadMode() { try { return localStorage.getItem('gs_mode'); } catch (e) { return null; } }
export function saveMode(mode) { try { localStorage.setItem('gs_mode', mode); } catch (e) {} }
