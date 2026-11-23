// Preview harness: renders a list of GLBs in a row (bundled with esbuild)
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const files = window.FILES;
const renderer = new THREE.WebGLRenderer({ antialias: false, preserveDrawingBuffer: true });
renderer.setSize(1200, 400);
document.body.appendChild(renderer.domElement);
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x211a2d);
const cam = new THREE.OrthographicCamera(-6, 6, 2, -2, 0.1, 100);
cam.position.set(0, 6, 8); cam.lookAt(0, 0.7, 0);
scene.add(new THREE.HemisphereLight(0xffeedd, 0x443355, 1.4));
const d = new THREE.DirectionalLight(0xffffff, 1.6); d.position.set(3, 6, 5); scene.add(d);
const loader = new GLTFLoader();
let n = 0;
files.forEach((f, i) => loader.load(f, g => {
  g.scene.position.x = -5 + i * (10 / Math.max(1, files.length - 1 || 1));
  if (files.length === 1) g.scene.position.x = 0;
  g.scene.rotation.y = window.YAW || 0;
  g.scene.scale.setScalar(window.SCALE || 1);
  scene.add(g.scene);
  if (++n === files.length) { renderer.render(scene, cam); window.DONE = true; }
}, undefined, e => { window.ERR = String(e); }));
