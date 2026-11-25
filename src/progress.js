// Per-mode best scores and the last chosen mode (localStorage; every access is guarded).
import { currentTier, DEFAULT_TIER } from './difficulty.js';
// Night Shift keeps a best per difficulty tier (tier 3 = the original key, so existing bests carry over)
const bestKey = mode => (mode === 'night' ? (currentTier() === DEFAULT_TIER ? 'gs_best_night' : `gs_best_night_t${currentTier()}`) : 'gs_best');
export function loadBest(mode) { try { return +localStorage.getItem(bestKey(mode)) || 0; } catch (e) { return 0; } }
export function saveBest(mode, v) { try { localStorage.setItem(bestKey(mode), String(v)); } catch (e) {} }
export function loadMode() { try { return localStorage.getItem('gs_mode'); } catch (e) { return null; } }
export function saveMode(mode) { try { localStorage.setItem('gs_mode', mode); } catch (e) {} }
export function loadTier() { try { const t = +localStorage.getItem('gs_tier'); return t >= 1 && t <= 5 ? t : DEFAULT_TIER; } catch (e) { return DEFAULT_TIER; } }
export function saveTier(t) { try { localStorage.setItem('gs_tier', String(t)); } catch (e) {} }
