// Renderer, low-res pixel pipeline (render target + dither/realm post shader), scene, camera, lights.
import * as THREE from 'three';
import { COL } from './config.js';
let RES_W = 480, RES_H = 270;

// ---------- renderer & pixel pipeline ----------
const canvas = document.getElementById('game');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance' });
renderer.setPixelRatio(1);
renderer.setSize(RES_W, RES_H, false);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.BasicShadowMap;
const rt = new THREE.WebGLRenderTarget(RES_W, RES_H, { type: THREE.HalfFloatType, magFilter: THREE.NearestFilter, minFilter: THREE.NearestFilter });
rt.texture.colorSpace = THREE.LinearSRGBColorSpace;

const post = new THREE.ShaderMaterial({
  uniforms: {
    tScene: { value: rt.texture }, realm: { value: 0 }, flash: { value: 0 }, hurt: { value: 0 },
    ripple: { value: new THREE.Vector3(0.5, 0.5, -1) }, time: { value: 0 }, aspect: { value: 16 / 9 },
  },
  vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0., 1.); }`,
  fragmentShader: `
    precision highp float;
    uniform sampler2D tScene; uniform float realm, flash, hurt, time, aspect; uniform vec3 ripple;
    varying vec2 vUv;
    float bayer(vec2 p){
      ivec2 i = ivec2(mod(p, 4.));
      // Same 4x4 Bayer matrix as before; mat4 columns avoid a fragment-shader index loop.
      mat4 m = mat4(
        0.,12.,3.,15.,
        8.,4.,11.,7.,
        2.,14.,1.,13.,
        10.,6.,9.,5.
      );
      return m[i.x][i.y] / 16.;
    }
    void main(){
      vec2 uv = vUv;
      if (ripple.z >= 0.) {
        vec2 d = (uv - ripple.xy) * vec2(aspect, 1.);
        float r = length(d), w = ripple.z * 1.6;
        float ring = smoothstep(0.06, 0., abs(r - w)) * (1. - ripple.z);
        uv -= normalize(d + 1e-5) * ring * 0.012;
      }
      vec3 c = texture2D(tScene, uv).rgb;
      c = pow(max(c, 0.), vec3(1./2.2));
      float l = dot(c, vec3(.3, .55, .15));
      vec3 spirit = mix(vec3(l) * vec3(.72, .74, 1.22) + vec3(.02, .015, .07), c * vec3(.82, .86, 1.2), .45);
      c = mix(c * vec3(1.04, .98, .92), spirit, realm);
      vec2 q = vUv - .5; c *= 1. - dot(q, q) * .9;
      c = mix(c, vec3(.94, .44, .52), hurt * .35 * (1. - smoothstep(.2, .7, length(q))) + hurt * .25);
      c += flash * vec3(.55, .5, .65);
      float L = 14.;
      float b = bayer(floor(gl_FragCoord.xy)) - .5;
      c = floor(c * L + b * .85 + .5) / L;
      gl_FragColor = vec4(c, 1.);
    }`,
  depthTest: false, depthWrite: false,
});
const postScene = new THREE.Scene();
const postCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
postScene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), post));

// ---------- scene ----------
const scene = new THREE.Scene();
scene.background = new THREE.Color(COL.charcoal);
scene.fog = new THREE.Fog(COL.charcoal, 34, 60);
const camera = new THREE.OrthographicCamera(-14, 14, 8, -8, 0.1, 200);
// Adaptive layout: the internal pixel buffer matches the screen's aspect (landscape or portrait),
// and the orthographic camera always keeps the whole combat court in view.
function layout() {
  const w = window.innerWidth, h = window.innerHeight, aspect = w / h;
  const portrait = aspect < 1.15;
  if (portrait) { RES_W = 288; RES_H = Math.round(288 / aspect); }
  else { RES_H = 270; RES_W = Math.round(270 * Math.min(aspect, 2.4)); }
  renderer.setSize(RES_W, RES_H, false); rt.setSize(RES_W, RES_H);
  const minHW = portrait ? 12.0 : 14.2, minHH = 8.0;
  const halfH = Math.max(minHH, minHW / aspect), halfW = halfH * aspect;
  Object.assign(camera, { left: -halfW, right: halfW, top: halfH, bottom: -halfH });
  camera.updateProjectionMatrix();
  post.uniforms.aspect.value = aspect;
  // fill the screen in portrait/touch; letterbox to the buffer's exact aspect otherwise
  const sc = Math.min(w / RES_W, h / RES_H);
  canvas.style.width = Math.round(RES_W * sc) + 'px';
  canvas.style.height = Math.round(RES_H * sc) + 'px';
  // integer HUD scale: 8px font cell x hs keeps the pixel font and sprites on whole device pixels
  const hs = Math.max(2, Math.min(4, Math.floor(Math.min(w / 400, h / 225))));
  document.documentElement.style.setProperty('--hs', hs);
  document.body.classList.toggle('vert', portrait);
}
window.addEventListener('resize', layout);
window.addEventListener('orientationchange', () => setTimeout(layout, 200));
const CAM_POS = new THREE.Vector3(0, 23, 20.8), CAM_TARGET = new THREE.Vector3(0, 0, -1.9);
camera.position.copy(CAM_POS); camera.lookAt(CAM_TARGET);
layout();

const hemi = new THREE.HemisphereLight(0xc9b6e6, 0x3a2e45, 1.45);
scene.add(hemi);
const moon = new THREE.DirectionalLight(0xc9b8ff, 1.1);
moon.position.set(-9, 18, -8); moon.target.position.set(0, 0, 0);
moon.castShadow = true;
moon.shadow.mapSize.set(1024, 1024);
Object.assign(moon.shadow.camera, { left: -18, right: 18, top: 18, bottom: -18, near: 1, far: 60 });
moon.shadow.bias = -0.002;
scene.add(moon, moon.target);

const toonRamp = (() => {
  const d = new Uint8Array([70, 70, 70, 255, 150, 150, 150, 255, 255, 255, 255, 255]);
  const t = new THREE.DataTexture(d, 3, 1); t.magFilter = t.minFilter = THREE.NearestFilter; t.needsUpdate = true; return t;
})();
const toon = (color, emissive) => new THREE.MeshToonMaterial({ color, gradientMap: toonRamp, emissive: emissive ?? 0x000000 });

export { canvas, renderer, rt, post, postScene, postCam, scene, camera, CAM_POS, hemi, moon, toonRamp, layout };
