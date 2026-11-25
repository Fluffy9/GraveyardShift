// GLB loading (embedded base64), toon materials, outlines and blob shadows.
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import ASSETS from './assets.gen.js';
import { scene, toonRamp } from './render.js';

const loader = new GLTFLoader();
const PROTOS = {};
function b64ToBuffer(b64) { const s = atob(b64), a = new Uint8Array(s.length); for (let i = 0; i < s.length; i++) a[i] = s.charCodeAt(i); return a.buffer; }
function toonify(root, { cast = true, receive = true } = {}) {
  root.traverse(o => {
    if (!o.isMesh) return;
    const src = o.material;
    const em = src.emissive && (src.emissive.r + src.emissive.g + src.emissive.b) > 0.01;
    const mat = new THREE.MeshToonMaterial({ color: src.color.clone(), gradientMap: toonRamp, emissive: em ? src.color.clone() : new THREE.Color(0) });
    if (em) mat.emissiveIntensity = 1.15;
    o.material = mat; o.castShadow = cast; o.receiveShadow = receive;
    o.geometry.computeVertexNormals();
  });
  return root;
}
async function loadAll() {
  await Promise.all(Object.entries(ASSETS).map(([name, b64]) => new Promise((res, rej) =>
    loader.parse(b64ToBuffer(b64), '', g => { PROTOS[name] = toonify(g.scene); res(); }, rej))));
}
let instParent = null;                      // set while building a level set so props land in its group
const instInto = g => { instParent = g; };
function inst(name, x, z, ry = 0, s = 1, parent = instParent || scene) {
  const o = PROTOS[name].clone(true);
  o.position.set(x, 0, z); o.rotation.y = ry; o.scale.setScalar(s);
  parent.add(o); return o;
}
function cloneMaterials(o) { o.traverse(m => { if (m.isMesh) m.material = m.material.clone(); }); return o; }

// inverted-hull outline for characters
const outlineMat = color => new THREE.ShaderMaterial({
  uniforms: { color: { value: new THREE.Color(color) }, thick: { value: 0.045 }, opacity: { value: 1 } },
  vertexShader: `uniform float thick; void main(){ vec3 p = position + normal * thick; gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.); }`,
  fragmentShader: `uniform vec3 color; uniform float opacity; void main(){ gl_FragColor = vec4(pow(color, vec3(2.2)), opacity); }`,
  side: THREE.BackSide, transparent: true,
});
function addOutline(root, color = 0x120e1a) {
  const mat = outlineMat(color); const meshes = [];
  root.traverse(o => { if (o.isMesh && !o.userData.outline) meshes.push(o); });
  for (const o of meshes) { const h = new THREE.Mesh(o.geometry, mat); h.userData.outline = true; h.castShadow = false; o.add(h); }
  return mat;
}

const blobTex = (() => {
  const c = document.createElement('canvas'); c.width = c.height = 16; const g = c.getContext('2d');
  for (let y = 0; y < 16; y++) for (let x = 0; x < 16; x++) {
    const d = Math.hypot(x - 7.5, y - 7.5) / 8; if (d < 1) { g.fillStyle = `rgba(14,8,22,${d < .7 ? .6 : .35})`; g.fillRect(x, y, 1, 1); }
  }
  const t = new THREE.CanvasTexture(c); t.magFilter = t.minFilter = THREE.NearestFilter; return t;
})();
function blob(size) {
  const m = new THREE.Mesh(new THREE.PlaneGeometry(size, size), new THREE.MeshBasicMaterial({ map: blobTex, transparent: true, depthWrite: false }));
  m.rotation.x = -Math.PI / 2; m.position.y = 0.03; m.renderOrder = 1; return m;
}

export { PROTOS, loadAll, inst, instInto, cloneMaterials, addOutline, blob };
