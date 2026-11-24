// Simulation clock and fixed-timestep driver. The live loop feeds real frame time into a stepper that calls the
// simulation in constant STEP slices, so gameplay never depends on display refresh rate. Tests drive ticks directly.
export const STEP = 1 / 60;
export const clock = { tick: 0 };            // monotonically increasing simulation tick (event ordering)

export function createStepper(step = STEP, maxCatchUp = 3) {
  let acc = 0;
  return {
    // Consume frameDt seconds; run `fn(step)` once per whole step. Returns the number of steps run.
    feed(frameDt, fn) {
      acc += frameDt;
      let n = 0;
      while (acc >= step - 1e-6 && n < maxCatchUp) { fn(step); acc -= step; n++; }
      if (acc >= step) acc = 0;              // fell too far behind: drop the backlog instead of spiralling
      return n;
    },
    reset() { acc = 0; },
  };
}
