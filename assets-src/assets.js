// Graveyard Shift asset sculpts for ink-studio. Select with env ASSET=<name>.
// Every asset: +Y up, origin at ground centre, "front" faces +Z.
// Sources are split by level; names must be unique across files.
const { PAL } = require('./common.js');
const ASSETS = Object.assign({},
  require('./core.js'),
  require('./l1_churchyard.js'),
  require('./l2_gardens.js'),
  require('./l3_catacombs.js'),
  require('./l4_mausoleum.js'),
  require('./l5_hollow.js'),
);

module.exports = ({ makeBuilder, makeSculpt, KIT: K }) => {
  const name = process.env.ASSET;
  const A = ASSETS[name];
  if (!A) throw new Error('Unknown ASSET ' + name + '; options: ' + Object.keys(ASSETS).join(','));
  function build(seed, opts) {
    const B = makeBuilder(seed, PAL);
    const S = K.sculpt(makeSculpt(B));
    A.build(S, K);
    const mesh = opts && K.model.fromSculpt(S, {
      name, palette: PAL, fur: false,
      bounds: { min: A.bounds[0], max: A.bounds[1] },
      resolution: opts.resolution ?? A.res, method: opts.method ?? A.exportMethod,
      // assets with `slim` skip ink's decimator (it stalls on thin parts) and are reduced by tools/slim_glb.mjs
      targetTriangles: opts.targetTriangles ?? (A.slim ? Infinity : A.tris)
    });
    S.bake();
    const W = B.finish({ cam: { target: [0, (A.bounds[1][1]) / 2, 0], dist: A.bounds[1][1] * 3.2, pitch: 0.35, yaw: 0.5 }, detail: 14, dither: 0.25 });
    return mesh || W;
  }
  return { id: name, name, seed: 3, build: s => build(s), model: (s, o = {}) => build(s, o) };
};
module.exports.NAMES = Object.keys(ASSETS);
module.exports.ASSETS = ASSETS;
