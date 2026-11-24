// Tiny synchronous event bus + rolling history. Simulation code emits; HUD/audio/tests observe.
// Consumers must not mutate combat state. A throwing handler is isolated so it cannot break the sim.
import { S } from '../state.js';
import { clock } from './clock.js';

const handlers = new Map();
export const history = [];
const MAX_HISTORY = 512;
let seq = 0;

export function on(type, fn) {
  if (!handlers.has(type)) handlers.set(type, new Set());
  handlers.get(type).add(fn);
  return () => handlers.get(type).delete(fn);
}
export function emitEvent(type, data = {}) {
  const ev = { seq: ++seq, type, tick: clock.tick, t: S.elapsed, ...data };
  history.push(ev);
  if (history.length > MAX_HISTORY) history.shift();
  for (const key of [type, '*']) for (const fn of handlers.get(key) ?? []) { try { fn(ev); } catch (e) { console.error(e); } }
  return ev;
}
export function clearHistory() { history.length = 0; }
