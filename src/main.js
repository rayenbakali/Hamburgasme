import './style.css';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { Burger, LAYER_DEFS } from './burger.js';
import { studioEnvironment } from './surface.js';

gsap.registerPlugin(ScrollTrigger);

const TAU = Math.PI * 2;
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const damp = THREE.MathUtils.damp;
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = matchMedia('(pointer: fine)').matches;
const isMobile = () => innerWidth < 820;

/* ================================================================ content
   PLACEHOLDER menu — replace names/descriptions with the real Hamburgasme carte. */
const MENU = [
  { name: 'Le <em>Classique</em>', tag: 'L’original', desc: 'Steak smashé, cheddar fondu, salade, tomate, oignons rouges, sauce maison.',
    variant: { patty: 1, cheese: 1, lettuce: 1, tomato: 1, onion: 1, sauce: 1 } },
  { name: 'L’<em>Extase</em>', tag: 'Double', desc: 'Deux steaks, deux cheddars, oignons, cornichons, sauce maison. Sans retenue.',
    variant: { patty: 1, cheese: 1, patty2: 1, cheese2: 1, onion: 1, pickles: 1, sauce: 1 } },
  { name: 'Le <em>Frisson</em>', tag: 'Piquant', desc: 'Steak smashé, cheddar, cornichons, oignons rouges, sauce pimentée qui ne pardonne pas.',
    variant: { patty: 1, cheese: 1, pickles: 1, onion: 1, sauce: 1, spicy: 1 } },
  { name: 'Le <em>Tendre</em>', tag: 'Poulet', desc: 'Poulet croustillant, cheddar, salade, tomate, sauce maison. La douceur qui croque.',
    variant: { patty: 1, cheese: 1, lettuce: 1, tomato: 1, sauce: 1, chicken: 1 } },
];
const VARIANTS = {
  signature: { patty: 1, cheese: 1, patty2: 1, cheese2: 1, lettuce: 1, tomato: 1, onion: 1, sauce: 1 },
  anatomy: { patty: 1, cheese: 1, pickles: 1, lettuce: 1, tomato: 1, onion: 1, sauce: 1 },
  melt: { patty: 1, cheese: 1, patty2: 1, cheese2: 1, sauce: 1 },
};
const SECTION_VARIANT = { hero: 'signature', manifesto: 'signature', anatomy: 'anatomy', melt: 'melt', finale: 'signature' };
const BUILDER_DEFAULT = { patty: 1, cheese: 1, lettuce: 1, tomato: 1, sauce: 1 };
const MOANS = ['Mmmh.', 'Encore.', 'Oh oui…', 'Divin.', 'Hamburgasme.', 'Pas d’autre choix.', 'Croque.'];

/* ================================================================ DOM helpers */
function splitWords(root) {
  let i = 0;
  const walk = (node) => {
    [...node.childNodes].forEach((ch) => {
      if (ch.nodeType === 3) {
        const frag = document.createDocumentFragment();
        ch.textContent.split(/(\s+)/).forEach((part) => {
          if (!part) return;
          if (/^\s+$/.test(part)) return frag.append(document.createTextNode(part));
          const w = document.createElement('span');
          w.className = 'w';
          const inner = document.createElement('span');
          inner.textContent = part;
          inner.style.setProperty('--i', i++);
          w.append(inner);
          frag.append(w);
        });
        ch.replaceWith(frag);
      } else if (ch.nodeType === 1 && ch.tagName !== 'BR') walk(ch);
    });
  };
  walk(root);
  return [...root.querySelectorAll('.w > span')];
}
function splitChars(el) {
  const txt = el.textContent;
  el.textContent = '';
  [...txt].forEach((c) => {
    const s = document.createElement('span');
    s.className = 'ch';
    s.textContent = c;
    el.append(s);
  });
}

/* menu cards */
const track = document.querySelector('.menu-track');
MENU.forEach((m, i) => {
  const ings = LAYER_DEFS.filter((d) => !d.fixed && m.variant[d.key]).map((d) => `<li>${d.chip}</li>`).join('');
  track.insertAdjacentHTML('beforeend', `
    <article class="card" data-i="${i}">
      <div class="card-top"><span class="card-num">0${i + 1}</span><span class="card-tag">${m.tag}</span></div>
      <h3 class="card-name">${m.name}</h3>
      <p class="card-desc">${m.desc}</p>
      <ul class="card-ings">${ings}</ul>
    </article>`);
});
const cards = [...track.querySelectorAll('.card')];

/* builder chips */
let builder = { ...BUILDER_DEFAULT };
let builderExplode = 0;
const chipsEl = document.querySelector('.chips');
const chips = LAYER_DEFS.filter((d) => !d.fixed).map((d) => {
  const b = document.createElement('button');
  b.type = 'button';
  b.className = 'chip';
  b.dataset.key = d.key;
  b.style.setProperty('--c', d.color);
  b.innerHTML = `<span class="chip-dot"></span>${d.chip}`;
  b.addEventListener('click', () => { builder[d.key] = builder[d.key] ? 0 : 1; syncBuilder(); });
  chipsEl.append(b);
  return b;
});
const meterVal = document.querySelector('.meter-val');
const meterBar = document.querySelector('.meter-bar i');
const explodeBtn = document.querySelector('[data-act="explode"]');
function syncBuilder() {
  chips.forEach((b) => b.setAttribute('aria-pressed', String(!!builder[b.dataset.key])));
  const n = Object.values(builder).filter(Boolean).length;
  meterVal.textContent = n <= 1 ? 'Timide' : n <= 3 ? 'Sage' : n <= 5 ? 'Gourmand' : n <= 7 ? 'Intense' : 'Hamburgasme.';
  meterBar.style.transform = `scaleX(${Math.max(0.04, n / 9)})`;
}
syncBuilder();
explodeBtn.addEventListener('click', () => {
  builderExplode = builderExplode ? 0 : 1;
  explodeBtn.textContent = builderExplode ? 'Rassembler' : 'Tout lâcher';
});
document.querySelector('[data-act="reset"]').addEventListener('click', () => {
  builder = { ...BUILDER_DEFAULT };
  builderExplode = 0;
  explodeBtn.textContent = 'Tout lâcher';
  syncBuilder();
});

/* anatomy labels */
const labelsEl = document.querySelector('.labels');
const labelEls = LAYER_DEFS.map((d, i) => {
  const el = document.createElement('div');
  el.className = 'label';
  el.innerHTML = `<div class="label-txt"><span class="label-name"><small></small>${d.label}</span><span class="label-desc">${d.desc}</span></div>`;
  labelsEl.append(el);
  return el;
});

document.querySelectorAll('.hero-title .ht').forEach(splitChars);
const manifestoWords = splitWords(document.querySelector('.manifesto-text'));
const reveals = [...document.querySelectorAll('.reveal')];
reveals.forEach(splitWords);

/* ================================================================ three */
const canvas = document.getElementById('gl');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
// Adaptive resolution: start sharp, step the pixel ratio down if frames run long,
// and never climb back to a level that already failed (avoids see-sawing).
const DPR_MAX = Math.min(devicePixelRatio, isMobile() ? 1.5 : 1.75);
const DPR_MIN = Math.min(DPR_MAX, isMobile() ? 0.85 : 1);
const perf = { dpr: DPR_MAX, ceil: DPR_MAX, avg: 1 / 60, t: 0, good: 0 };
renderer.setPixelRatio(perf.dpr);
function adaptResolution(dt) {
  perf.avg += (dt - perf.avg) * 0.05;
  if ((perf.t += dt) < 1) return;
  perf.t = 0;
  if (perf.avg > 1 / 48 && perf.dpr > DPR_MIN) {
    perf.ceil = perf.dpr - 0.01;
    perf.dpr = Math.max(DPR_MIN, perf.dpr - 0.25);
    perf.good = 0;
  } else if (perf.avg < 1 / 57 && perf.dpr + 0.125 <= perf.ceil) {
    if (++perf.good >= 3) { perf.dpr += 0.125; perf.good = 0; } else return;
  } else return;
  renderer.setPixelRatio(perf.dpr);
  renderer.setSize(innerWidth, innerHeight);
}
renderer.setSize(innerWidth, innerHeight);
// Khronos "PBR Neutral": keeps food colours true instead of ACES' orange push
renderer.toneMapping = THREE.NeutralToneMapping;
renderer.toneMappingExposure = 1.0;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const scene = new THREE.Scene();
scene.environment = studioEnvironment(renderer);
scene.environmentIntensity = 0.75;

const camera = new THREE.PerspectiveCamera(32, innerWidth / innerHeight, 0.1, 100);
camera.position.set(0, 0.3, 7.5);

const key = new THREE.DirectionalLight('#fff2e0', 2.6);
key.castShadow = true;
key.shadow.mapSize.setScalar(isMobile() ? 1024 : 2048);
key.shadow.radius = 4;
key.shadow.camera.left = key.shadow.camera.bottom = -3.5;
key.shadow.camera.right = key.shadow.camera.top = 3.5;
key.shadow.camera.near = 0.5;
key.shadow.camera.far = 20;
key.shadow.bias = -0.0005;
key.shadow.normalBias = 0.02;
const rim = new THREE.DirectionalLight('#ffb070', 2.4);
const rim2 = new THREE.DirectionalLight('#fff0dc', 1.4);
scene.add(key, key.target, rim, new THREE.HemisphereLight('#fff1dc', '#3a1a0c', 0.35), rim2);

const burger = new Burger();
scene.add(burger.group);

/* seed burst particles */
const SEEDS = 90;
const seedGeo = new THREE.SphereGeometry(0.045, 8, 6).scale(0.62, 0.32, 1.35);
const seedMesh = new THREE.InstancedMesh(seedGeo, new THREE.MeshStandardMaterial({ color: '#fbefd0', roughness: 0.5 }), SEEDS);
seedMesh.frustumCulled = false;
scene.add(seedMesh);
const seedData = Array.from({ length: SEEDS }, () => ({ p: new THREE.Vector3(), v: new THREE.Vector3(), r: new THREE.Euler(), w: new THREE.Vector3(), life: 0 }));
const dummy = new THREE.Object3D();
let seedCursor = 0;
function burstSeeds(origin) {
  for (let k = 0; k < 22; k++) {
    const s = seedData[seedCursor++ % SEEDS];
    s.p.copy(origin);
    const a = Math.random() * TAU, sp = 2 + Math.random() * 3.5;
    s.v.set(Math.cos(a) * sp, 3 + Math.random() * 4, Math.sin(a) * sp + 1.5);
    s.w.set(Math.random() * 12, Math.random() * 12, Math.random() * 12);
    s.life = 1.4 + Math.random() * 0.6;
  }
}
function updateSeeds(dt) {
  for (let i = 0; i < SEEDS; i++) {
    const s = seedData[i];
    if (s.life > 0) {
      s.life -= dt;
      s.v.y -= 14 * dt;
      s.p.addScaledVector(s.v, dt);
      s.r.x += s.w.x * dt; s.r.y += s.w.y * dt; s.r.z += s.w.z * dt;
    }
    dummy.position.copy(s.p);
    dummy.rotation.copy(s.r);
    dummy.scale.setScalar(s.life > 0 ? Math.min(1, s.life * 2) : 0);
    dummy.updateMatrix();
    seedMesh.setMatrixAt(i, dummy.matrix);
  }
  seedMesh.instanceMatrix.needsUpdate = true;
}

/* ================================================================ smooth scroll */
let lenis = null;
if (!reduced) {
  lenis = new Lenis({ lerp: 0.085, wheelMultiplier: 0.9 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  lenis.stop();
}
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
scrollTo(0, 0);

document.querySelectorAll('[data-to]').forEach((a) =>
  a.addEventListener('click', (e) => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const box = target.parentElement.classList.contains('pin-spacer') ? target.parentElement : target;
    const y = box.getBoundingClientRect().top + scrollY;
    lenis ? lenis.scrollTo(y, { duration: 2, easing: (t) => 1 - Math.pow(1 - t, 4) }) : scrollTo({ top: y, behavior: 'smooth' });
  })
);

/* manifesto: words light up as you scroll */
gsap.to(manifestoWords, {
  opacity: 1, stagger: 0.1, ease: 'none',
  scrollTrigger: { trigger: '#manifesto', start: 'top 70%', end: 'bottom bottom', scrub: true },
});

/* menu: horizontal pinned track on desktop */
const mm = gsap.matchMedia();
mm.add('(min-width: 820px)', () => {
  const dist = () => track.scrollWidth - innerWidth;
  gsap.to(track, {
    x: () => -dist(), ease: 'none',
    scrollTrigger: { trigger: '#menu', start: 'top top', end: () => '+=' + dist(), pin: true, scrub: 1, invalidateOnRefresh: true },
  });
});

/* ================================================================ scroll choreography
   Keyframes are anchored to sections: [sectionId, progress 0..1, values].
   progress 0 = section top hits viewport top, 1 = section bottom hits viewport bottom.
   Missing values carry over from the previous keyframe. m* keys override on mobile. */
const KF = [
  ['hero', 0, { x: 0, y: 0.12, s: 0.88, ex: 0, melt: 0.15, cz: 7.5, tilt: 0.32, spin: 0, my: 0.55, ms: 0.78 }],
  ['manifesto', 0, { x: 1.75, y: 0, s: 0.82, tilt: 0.2, my: 1.25, ms: 0.6 }],
  ['manifesto', 1, { x: 1.75, y: 0, s: 0.82, tilt: 0.2, spin: 0.1 }],
  ['anatomy', 0, { x: 0, y: -0.15, s: 0.78, cz: 11, tilt: 0.12, melt: 0.1, my: -0.2, ms: 0.62 }],
  ['anatomy', 0.3, { ex: 1 }],
  ['anatomy', 0.78, { ex: 1 }],
  ['anatomy', 1, { ex: 0, cz: 9 }],
  ['melt', 0, { x: 0, y: 0.1, s: 0.78, cz: 7, tilt: 0.12, melt: 0.15, my: 0.4, ms: 0.75 }],
  ['melt', 0.55, { cz: 5.6, tilt: 0.06, melt: 1, y: 0.15 }],
  ['melt', 1, { cz: 6, melt: 1 }],
  ['menu', 0, { x: -2.05, y: -0.1, s: 0.8, cz: 7.5, tilt: 0.3, melt: 0.45, my: 1.4, ms: 0.6 }],
  ['menu', 1, { x: -2.05, spin: 0.3 }],
  ['builder', 0, { x: 1.85, y: -0.05, s: 0.98, tilt: 0.28, melt: 0.3, my: 1.25, ms: 0.62 }],
  ['builder', 1, { x: 1.85 }],
  ['finale', 0, { x: 0, y: 0.15, s: 1.08, tilt: 0.35, spin: 1, my: 0.3, ms: 0.75 }],
  ['finale', 1, { spin: 1.3, s: 0.9, y: 0.6 }],
];
const STATE_KEYS = ['x', 'y', 's', 'ex', 'melt', 'cz', 'tilt', 'spin'];
let frames = [];
function sectionBox(id) {
  const el = document.getElementById(id);
  const box = el.parentElement.classList.contains('pin-spacer') ? el.parentElement : el;
  const top = box.getBoundingClientRect().top + scrollY;
  return { top, len: Math.max(1, box.offsetHeight - innerHeight) };
}
function buildFrames() {
  const mob = isMobile();
  let prev = {};
  frames = KF.map(([id, f, vals]) => {
    const b = sectionBox(id);
    const v = { ...prev, ...vals };
    prev = v;
    const out = {};
    for (const k of STATE_KEYS) out[k] = v[k];
    if (mob) { out.x = 0; out.y = v.my ?? v.y; out.s = v.ms ?? v.s * 0.75; }
    return { pos: b.top + f * b.len, v: out };
  });
  for (let i = 1; i < frames.length; i++) frames[i].pos = Math.max(frames[i].pos, frames[i - 1].pos + 1);
}
const target = {};
function sample(y) {
  if (!frames.length) return;
  if (y <= frames[0].pos) return Object.assign(target, frames[0].v);
  for (let i = 0; i < frames.length - 1; i++) {
    const a = frames[i], b = frames[i + 1];
    if (y < b.pos) {
      let t = (y - a.pos) / (b.pos - a.pos);
      t = t * t * (3 - 2 * t);
      for (const k of STATE_KEYS) target[k] = a.v[k] + (b.v[k] - a.v[k]) * t;
      return;
    }
  }
  Object.assign(target, frames[frames.length - 1].v);
}
ScrollTrigger.addEventListener('refresh', buildFrames);

/* ================================================================ sections / variants */
const sections = [...document.querySelectorAll('main section')];
const indNum = document.querySelector('.ind-num');
const indLabel = document.querySelector('.ind-label');
const themeMeta = document.querySelector('meta[name="theme-color"]');
let activeId = '';
let activeCard = 0;
let introDone = false;
let lastVariant = '';

function updateSections() {
  const mid = innerHeight * 0.5;
  for (let i = 0; i < sections.length; i++) {
    const s = sections[i];
    const r = s.getBoundingClientRect();
    if (r.top <= mid && r.bottom > mid) {
      if (s.id !== activeId) {
        activeId = s.id;
        document.body.dataset.theme = s.dataset.theme;
        themeDirty = true;
        indNum.textContent = String(i + 1).padStart(2, '0');
        indLabel.textContent = s.dataset.label;
        requestAnimationFrame(() => themeMeta.setAttribute('content', getComputedStyle(document.body).getPropertyValue('--bg').trim()));
      }
      break;
    }
  }
}
function updateCards() {
  if (activeId !== 'menu') return;
  const mob = isMobile();
  let best = 0, bestD = Infinity;
  const rects = cards.map((c) => c.getBoundingClientRect()); // all reads first…
  cards.forEach((c, i) => {                                   // …then all writes
    const r = rects[i];
    const d = mob ? Math.abs(r.top + r.height / 2 - innerHeight * 0.6) : Math.abs(r.left + r.width / 2 - innerWidth * 0.66);
    if (d < bestD) { bestD = d; best = i; }
    if (!mob) {
      const fade = clamp((r.left - innerWidth * 0.3) / (innerWidth * 0.16), 0, 1);
      c.style.opacity = 0.05 + fade * 0.95;
      c.style.transform = `translateY(${(1 - fade) * 40}px) scale(${0.92 + fade * 0.08})`;
    }
  });
  if (best !== activeCard || !cards[best].classList.contains('is-active')) {
    activeCard = best;
    cards.forEach((c, i) => c.classList.toggle('is-active', i === best));
  }
}
function applyVariant() {
  if (!introDone) return;
  const v = activeId === 'menu' ? MENU[activeCard].variant : activeId === 'builder' ? builder : VARIANTS[SECTION_VARIANT[activeId] || 'signature'];
  const k = JSON.stringify(v);
  if (k === lastVariant) return;
  lastVariant = k;
  burger.setVariant(v);
}

/* ================================================================ pointer */
const pointer = { x: 0, y: 0, nx: 0, ny: 0, sx: 0, sy: 0 };
const ndc = new THREE.Vector2();
const raycaster = new THREE.Raycaster();
const cursor = document.querySelector('.cursor');
const cursorDot = cursor.querySelector('.cursor-dot');
const cursorRing = cursor.querySelector('.cursor-ring');
const cursorText = cursor.querySelector('.cursor-text');
const ring = { x: innerWidth / 2, y: innerHeight / 2 };
let hovering = false, dragging = false, down = null, dragAngle = 0, dragVel = 0;
if (finePointer && !reduced) document.body.classList.add('has-cursor');

function hitTest(cx, cy) {
  ndc.set((cx / innerWidth) * 2 - 1, -(cy / innerHeight) * 2 + 1);
  raycaster.setFromCamera(ndc, camera);
  return raycaster.intersectObjects(burger.meshes, false)[0] || null;
}
addEventListener('pointermove', (e) => {
  if (e.pointerType === 'mouse') document.body.classList.add('cursor-on');
  pointer.x = e.clientX; pointer.y = e.clientY;
  pointer.nx = (e.clientX / innerWidth) * 2 - 1;
  pointer.ny = (e.clientY / innerHeight) * 2 - 1;
  if (down) {
    const dx = e.clientX - down.x;
    if (!dragging && Math.abs(dx) > 6 && e.pointerType === 'mouse') { dragging = true; document.body.classList.add('dragging'); }
    if (dragging) { dragVel = (e.clientX - down.lx) * 0.012; dragAngle += dragVel; down.lx = e.clientX; }
  }
  if (finePointer) {
    const overUi = e.target.closest('a, button');
    hovering = !overUi && !!hitTest(e.clientX, e.clientY);
    cursor.classList.toggle('is-link', !!overUi);
  }
});
addEventListener('pointerdown', (e) => {
  if (e.target.closest('a, button')) return;
  down = { x: e.clientX, y: e.clientY, lx: e.clientX };
});
addEventListener('pointerup', (e) => {
  if (down && !dragging && Math.hypot(e.clientX - down.x, e.clientY - down.y) < 8) {
    const hit = hitTest(e.clientX, e.clientY);
    if (hit) boop(hit.point, e.clientX, e.clientY);
  }
  down = null;
  dragging = false;
  document.body.classList.remove('dragging');
});

let jy = 0, jv = 0, sq = 0, sqv = 0;
function boop(point, cx, cy) {
  jv += 5.5;
  sqv += 7;
  burstSeeds(point);
  const w = document.createElement('span');
  w.className = 'float-word';
  w.textContent = MOANS[(Math.random() * MOANS.length) | 0];
  w.style.left = cx + 'px';
  w.style.top = cy + 'px';
  document.body.append(w);
  setTimeout(() => w.remove(), 1300);
}

/* ================================================================ misc UI */
const progressBar = document.querySelector('.progress span');
const tempVal = document.querySelector('.temp-val');
const marquee = document.querySelector('.marquee-inner');
let mx = 0;
// sizes that need layout are measured on resize/refresh only, never per frame
const dims = { maxScroll: 1, marqueeHalf: 1 };
function measure() {
  dims.maxScroll = Math.max(1, document.documentElement.scrollHeight - innerHeight);
  dims.marqueeHalf = marquee.scrollWidth / 2;
}
ScrollTrigger.addEventListener('refresh', measure);
measure();
let lastTemp = '', lastCursorText = '', lastBig = null;

const tmpV = new THREE.Vector3();
const tmpV2 = new THREE.Vector3();
function project(v) {
  tmpV2.copy(v).project(camera);
  return { x: (tmpV2.x * 0.5 + 0.5) * innerWidth, y: (-tmpV2.y * 0.5 + 0.5) * innerHeight };
}
let themeDirty = true;
function updateLabels(ex) {
  const show = clamp((ex - 0.55) / 0.35, 0, 1);
  if (themeDirty && show > 0) { themeDirty = false; labelsEl.style.color = getComputedStyle(document.body).color; }
  if (show <= 0) {
    labelEls.forEach((el) => (el.style.opacity = 0));
    return;
  }
  const g = burger.group;
  const center = project(g.getWorldPosition(tmpV));
  const edge = project(tmpV.set(1.55 * g.scale.x, 0, 0).add(g.position));
  const radius = Math.abs(edge.x - center.x);
  labelsEl.classList.toggle('compact', activeId === 'builder');
  const mob = isMobile();
  // burger off to one side -> put every label on the open side
  const side = mob || center.x < innerWidth * 0.38 ? 'right' : center.x > innerWidth * 0.62 ? 'left' : 'alt';
  let vi = 0;
  burger.layers.forEach((l, i) => {
    const el = labelEls[i];
    const vis = clamp(l.s, 0, 1);
    if (vis < 0.5) { el.style.opacity = 0; return; }
    const p = project(l.holder.parent.localToWorld(tmpV.set(0, l.cy, 0)));
    const left = side === 'left' || (side === 'alt' && vi % 2 === 1);
    el.classList.toggle('left', left);
    const num = String(vi + 1).padStart(2, '0');
    if (el._num !== num) { el._num = num; el.querySelector('small').textContent = num; }
    const x = left ? center.x - radius - 16 : center.x + radius + 16;
    el.style.transform = `translate(${x}px, ${p.y}px) translate(${left ? '-100%' : '0'}, -50%)`;
    el.style.opacity = show * vis;
    vi++;
  });
}

/* ================================================================ loop */
const cur = { x: 0, y: 0.12, s: 0.88, ex: 0, melt: 0.15, cz: 7.5, tilt: 0.32, spin: 0 };
let time = 0;
let last = performance.now();

function tick() {
  const now = performance.now();
  const dt = Math.min(0.05, (now - last) / 1000);
  last = now;
  time += dt;
  const sy = lenis ? lenis.scroll : scrollY;
  const vel = lenis ? lenis.velocity : 0;

  updateSections();
  updateCards();
  applyVariant();
  sample(sy);

  // extra explode from the builder button
  const bx = activeId === 'builder' ? builderExplode : 0;
  target.ex = clamp(target.ex + bx, 0, 1);
  target.cz += bx * 4.5;
  target.y -= bx * 0.4;
  const lam = reduced ? 20 : 4.5;
  for (const k of STATE_KEYS) cur[k] = damp(cur[k], target[k], lam, dt);

  // pointer smoothing
  pointer.sx = damp(pointer.sx, pointer.nx, 3, dt);
  pointer.sy = damp(pointer.sy, pointer.ny, 3, dt);

  // inertia after drag
  if (!dragging) { dragAngle += dragVel; dragVel *= Math.pow(0.04, dt); }

  // springs: jump + squash (scroll velocity squashes, fast scroll-up stretches)
  jv += -jy * 140 * dt; jv *= Math.exp(-7 * dt); jy += jv * dt;
  const sqT = reduced ? 0 : clamp(vel * 0.0045, -0.16, 0.16);
  sqv += (sqT - sq) * 220 * dt; sqv *= Math.exp(-11 * dt); sq += sqv * dt;

  const g = burger.group;
  const s = cur.s;
  g.position.set(cur.x, cur.y + jy * 0.35, 0);
  g.scale.set(s * (1 + sq * 0.5), s * (1 - sq), s * (1 + sq * 0.5));
  g.rotation.x = cur.tilt + pointer.sy * 0.12 + clamp(vel * 0.002, -0.2, 0.2);
  g.rotation.y = (reduced ? 0 : time * 0.22) + sy * 0.0009 + dragAngle + cur.spin * TAU + pointer.sx * 0.35;
  g.rotation.z = -pointer.sx * 0.04 + sq * 0.15;

  // portrait screens have a narrow horizontal FOV: back the camera off to keep the burger framed
  const fit = Math.max(1, 0.62 / camera.aspect);
  camera.position.set(pointer.sx * 0.15, 0.3 - pointer.sy * 0.1, cur.cz * fit);
  camera.lookAt(cur.x * 0.12, 0, 0);

  key.position.set(g.position.x + 3, g.position.y + 5.5, 4);
  key.target.position.copy(g.position);
  rim.position.set(g.position.x - 4.5, g.position.y + 2, -3.5);
  rim2.position.set(g.position.x + 4, g.position.y - 1, -2);

  burger.update(dt, { explode: cur.ex, melt: cur.melt });
  updateSeeds(dt);
  updateLabels(cur.ex);

  // DOM bits
  progressBar.style.transform = `scaleX(${sy / dims.maxScroll})`;
  const temp = Math.round(20 + cur.melt * 160) + '°';
  if (temp !== lastTemp) tempVal.textContent = lastTemp = temp;
  if (!reduced) {
    const half = dims.marqueeHalf;
    mx -= dt * (70 + Math.abs(vel) * 9) * (vel < -0.5 ? -1 : 1);
    if (mx < -half) mx += half;
    if (mx > 0) mx -= half;
    marquee.style.transform = `translate3d(${mx}px,0,0)`;
  }
  if (finePointer) {
    ring.x = damp(ring.x, pointer.x, 12, dt);
    ring.y = damp(ring.y, pointer.y, 12, dt);
    cursorDot.style.transform = `translate(${pointer.x}px, ${pointer.y}px)`;
    cursorRing.style.transform = `translate(${ring.x}px, ${ring.y}px)`;
    const big = hovering || dragging;
    if (big !== lastBig) cursor.classList.toggle('is-big', (lastBig = big));
    const ct = dragging ? 'Tourner' : 'Croquer';
    if (ct !== lastCursorText) cursorText.textContent = lastCursorText = ct;
  }

  renderer.render(scene, camera);
  if (introDone && !document.hidden) adaptResolution(dt);
}
gsap.ticker.add(tick);

addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
  measure();
});

/* ================================================================ intro */
async function intro() {
  const num = document.querySelector('.pre-num');
  const counter = { v: 0 };
  const hidden = burger.layers.filter((l) => !l.holder.visible);
  hidden.forEach((l) => (l.holder.visible = true));
  const compiled = renderer.compileAsync(scene, camera).catch(() => {});
  await Promise.all([
    compiled,
    document.fonts ? document.fonts.ready : Promise.resolve(),
    new Promise((res) =>
      gsap.to(counter, { v: 100, duration: reduced ? 0.2 : 1.9, ease: 'power2.inOut', onUpdate: () => (num.textContent = Math.round(counter.v)), onComplete: res })
    ),
  ]);
  hidden.forEach((l) => (l.holder.visible = l.s > 0.003));
  renderer.render(scene, camera); // warm-up draw: uploads the noise texture + shadow maps before reveal
  ScrollTrigger.refresh();
  buildFrames();

  const tl = gsap.timeline();
  tl.to('.pre-inner, .pre-note', { yPercent: -40, opacity: 0, duration: 0.6, ease: 'power3.in' })
    .to('.preloader', { clipPath: 'inset(0 0 100% 0)', duration: 1.1, ease: 'expo.inOut' }, '-=.15')
    .add(() => {
      introDone = true;
      lastVariant = '';
      lenis?.start();
      reveals.forEach((el) =>
        ScrollTrigger.create({ trigger: el, start: 'top 98%', onEnter: () => el.classList.add('in'), onLeaveBack: () => el.classList.remove('in') })
      );
    }, '-=.7')
    .from('.hero-title .ch', { yPercent: 115, rotate: 6, duration: 1.3, stagger: 0.04, ease: 'expo.out' }, '-=.55')
    .add(() => document.querySelector('.preloader').remove());
}
intro();
if (import.meta.env.DEV) window.__lenis = lenis;
