// Pixel-square particle system (one Points object).
import * as THREE from 'three';
import { COL } from './config.js';
import { scene } from './render.js';

const MAXP = 900;
const pGeo = new THREE.BufferGeometry();
const pPos = new Float32Array(MAXP * 3), pCol = new Float32Array(MAXP * 3), pSize = new Float32Array(MAXP);
pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
pGeo.setAttribute('color', new THREE.BufferAttribute(pCol, 3));
pGeo.setAttribute('size', new THREE.BufferAttribute(pSize, 1));
pGeo.setDrawRange(0, 0);
const pMat = new THREE.ShaderMaterial({
  vertexShader: `attribute float size; attribute vec3 color; varying vec3 vC; void main(){ vC = color; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.); gl_PointSize = size; }`,
  fragmentShader: `varying vec3 vC; void main(){ gl_FragColor = vec4(vC, 1.); }`,
  depthWrite: false,
});
const points = new THREE.Points(pGeo, pMat); points.frustumCulled = false; points.renderOrder = 5;
scene.add(points);
const parts = [];
let lastDrawn = 0;
function emit(x, y, z, { n = 8, color = COL.amber, speed = 3, up = 2, life = 0.6, size = 2, spread = 1, grav = -4, vx = 0, vz = 0 } = {}) {
  const c = new THREE.Color(color).convertSRGBToLinear();
  for (let i = 0; i < n && parts.length < MAXP; i++) {
    const a = Math.random() * Math.PI * 2, s = speed * (0.3 + Math.random() * 0.7);
    parts.push({ x: x + (Math.random() - .5) * spread * .3, y, z: z + (Math.random() - .5) * spread * .3,
      vx: Math.cos(a) * s + vx, vy: up * (0.5 + Math.random()), vz: Math.sin(a) * s + vz,
      life, max: life, c, size: size + (Math.random() < .3 ? 1 : 0), grav });
  }
}
function updateParticles(dt) {
  let j = 0;
  for (let i = 0; i < parts.length; i++) {
    const p = parts[i]; p.life -= dt; if (p.life <= 0) continue;
    p.vy += p.grav * dt; p.x += p.vx * dt; p.y += p.vy * dt; p.z += p.vz * dt;
    p.vx *= 1 - 2.5 * dt; p.vz *= 1 - 2.5 * dt;
    if (p.y < 0.02) { p.y = 0.02; p.vy *= -0.3; }
    parts[j++] = p;
  }
  parts.length = j;
  if (j === 0 && lastDrawn === 0) return;
  for (let i = 0; i < j; i++) {
    const p = parts[i];
    pPos[i * 3] = p.x; pPos[i * 3 + 1] = p.y; pPos[i * 3 + 2] = p.z;
    const k = Math.min(1, p.life / p.max * 2);
    pCol[i * 3] = p.c.r * k + .02; pCol[i * 3 + 1] = p.c.g * k + .02; pCol[i * 3 + 2] = p.c.b * k + .03;
    pSize[i] = p.size;
  }
  pGeo.setDrawRange(0, j);
  lastDrawn = j;
  if (j === 0) return;
  pGeo.attributes.position.needsUpdate = pGeo.attributes.color.needsUpdate = pGeo.attributes.size.needsUpdate = true;
}

export { emit, updateParticles };
