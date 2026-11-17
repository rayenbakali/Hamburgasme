// Procedural burger — every layer is generated in code (no model files).
// Each layer's local origin sits at its *bottom*, so stacking is just summing heights.
// Realism comes from three things:
//   1. organic silhouettes   — geometry displaced with fractal value noise (CPU, once)
//   2. per-pixel surface      — crust, pores, veins, fat sheen via GPU noise (see surface.js)
//   3. light behaviour        — clearcoat egg-wash, fake subsurface glow on cheese/leaves/tomato
import * as THREE from 'three';
import { mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';
import { surface, bakeNoise } from './surface.js';

const TAU = Math.PI * 2;
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

function rng(a) {
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const rand = rng(1337);

/* 3D value noise + fbm for geometry (CPU). Smooth, non-repeating, cheap. */
function hash3(x, y, z) {
  let h = Math.imul(x, 374761393) ^ Math.imul(y, 668265263) ^ Math.imul(z, 2147483647);
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
}
function vnoise(x, y, z) {
  const xi = Math.floor(x), yi = Math.floor(y), zi = Math.floor(z);
  const xf = x - xi, yf = y - yi, zf = z - zi;
  const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf), w = zf * zf * (3 - 2 * zf);
  const L = (a, b, t) => a + (b - a) * t;
  const c = (dx, dy, dz) => hash3(xi + dx, yi + dy, zi + dz);
  return L(
    L(L(c(0, 0, 0), c(1, 0, 0), u), L(c(0, 1, 0), c(1, 1, 0), u), v),
    L(L(c(0, 0, 1), c(1, 0, 1), u), L(c(0, 1, 1), c(1, 1, 1), u), v),
    w
  ) * 2 - 1;
}
function fbm(x, y, z, oct = 4) {
  let s = 0, a = 0.5;
  for (let i = 0; i < oct; i++) { s += a * vnoise(x, y, z); x = x * 2.03 + 11.7; y = y * 2.03 + 3.1; z = z * 2.03 + 7.9; a *= 0.5; }
  return s;
}

export const LAYER_DEFS = [
  { key: 'bunBottom', h: 0.4, fixed: true, label: 'Pain du bas', desc: 'Celui qui tient tout.', chip: 'Pain', color: '#d48a3c' },
  { key: 'patty', h: 0.3, label: 'Steak smashé', desc: 'Écrasé sur la plaque, caramélisé sur les bords.', chip: 'Steak', color: '#6b3218' },
  { key: 'cheese', h: 0.03, label: 'Cheddar', desc: 'Fondu jusqu’à l’abandon.', chip: 'Cheddar', color: '#ffab1f' },
  { key: 'patty2', h: 0.3, label: 'Second steak', desc: 'Parce qu’un seul ne suffit jamais.', chip: '2ᵉ steak', color: '#6b3218' },
  { key: 'cheese2', h: 0.03, label: 'Second cheddar', desc: 'Encore. Toujours.', chip: '2ᵉ cheddar', color: '#ffab1f' },
  { key: 'pickles', h: 0.05, label: 'Cornichons', desc: 'Une pointe d’acidité.', chip: 'Cornichons', color: '#8aa83a' },
  { key: 'lettuce', h: 0.1, label: 'Salade', desc: 'Fraîche et croquante.', chip: 'Salade', color: '#6fbf3a' },
  { key: 'tomato', h: 0.1, label: 'Tomate', desc: 'Juteuse, en tranches épaisses.', chip: 'Tomate', color: '#e0301e' },
  { key: 'onion', h: 0.07, label: 'Oignons rouges', desc: 'Pour le croquant.', chip: 'Oignons', color: '#c98bd0' },
  { key: 'sauce', h: 0.03, label: 'Sauce maison', desc: 'La recette reste entre nous.', chip: 'Sauce', color: '#e8682a' },
  { key: 'bunTop', h: 1.0, fixed: true, label: 'Brioche dorée', desc: 'Toastée, sésame, sans culpabilité.', chip: 'Brioche', color: '#c8742a' },
];

/* ---------------------------------------------------------- helpers */

function lathe(pts, segs = 128, n = 110) {
  const curve = new THREE.SplineCurve(pts.map(([x, y]) => new THREE.Vector2(x, y)));
  const p = curve.getSpacedPoints(n).map((v) => new THREE.Vector2(Math.max(0, v.x), v.y));
  p[0].x = 0;
  p[p.length - 1].x = 0;
  return new THREE.LatheGeometry(p, segs);
}

// weld the lathe seam, displace, recompute normals
function finalize(geo, displace) {
  geo.deleteAttribute('uv');
  geo.deleteAttribute('normal');
  geo = mergeVertices(geo, 1e-4);
  const p = geo.attributes.position;
  const v = new THREE.Vector3();
  if (displace) {
    for (let i = 0; i < p.count; i++) {
      v.fromBufferAttribute(p, i);
      displace(v);
      p.setXYZ(i, v.x, v.y, v.z);
    }
  }
  geo.computeVertexNormals();
  return geo;
}

// disc built on a polar grid: fn(t, angle) -> { r, y }
function polarDisc(rings, segs, fn) {
  const pos = [], idx = [];
  for (let j = 0; j <= rings; j++) {
    const t = j / rings;
    for (let i = 0; i <= segs; i++) {
      const a = (i / segs) * TAU;
      const { r, y } = fn(t, a);
      pos.push(r * Math.cos(a), y, r * Math.sin(a));
    }
  }
  for (let j = 0; j < rings; j++) {
    for (let i = 0; i < segs; i++) {
      const a = j * (segs + 1) + i, b = a + segs + 1;
      idx.push(a, b, a + 1, b, b + 1, a + 1);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

function canvasTex(draw, size = 512) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  draw(c.getContext('2d'), size);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}

/* ---------------------------------------------------------- shared GLSL */

// open crumb: irregular pores, toasted toward the rim
const CRUMB = /* glsl */ `
  float holes = smoothstep(0.3, 0.8, snoise(P * vec3(24.0, 4.0, 24.0)));
  float small = smoothstep(0.45, 0.85, snoise(P * vec3(60.0, 6.0, 60.0) + 9.0));
  float r = length(P.xz);
`;

/* ---------------------------------------------------------- layers */

function topBun(uContact) {
  const r = 1.45, h = 0.95, b = 0.1;
  const pts = [[0, 0], [r * 0.55, 0], [r * 0.9, 0.012], [r * 0.985, 0.045], [r, b]];
  for (let i = 1; i <= 18; i++) {
    const a = (i / 18) * (Math.PI / 2);
    pts.push([r * Math.cos(a), b + h * Math.pow(Math.sin(a), 0.78)]);
  }
  // dome surface, used for the bun and for seating the seeds
  const lumps = (x, y, z) => fbm(x * 1.6, y * 1.6, z * 1.6, 3) * 0.05;
  const warp = (v) => {
    const a = Math.atan2(v.z, v.x), t = Math.max(0, v.y) / (b + h);
    const s = 1 + 0.028 * Math.sin(2 * a + 0.7) + 0.014 * Math.sin(3 * a + 2.1);
    v.x *= s; v.z *= s;
    // lopsided crown — expressed in x/z (not angle) so it stays smooth at the pole
    const nx = v.x / r, nz = v.z / r;
    v.y *= 1 + (0.05 * (nx * Math.cos(1.1) - nz * Math.sin(1.1)) + 0.02 * (nx * nx - nz * nz)) * t;
  };
  const geo = finalize(lathe(pts, 144, 120), (v) => {
    if (v.y >= 0.03) {
      const k = lumps(v.x, v.y, v.z) * Math.min(1, (v.y - 0.03) * 6);
      const nx = v.x / (r * r), ny = (v.y - b) / (h * h), nz = v.z / (r * r);
      const l = Math.hypot(nx, ny, nz) || 1;
      v.x += (nx / l) * k; v.y += (ny / l) * k; v.z += (nz / l) * k;
    }
    warp(v);
  });

  const mat = surface(
    new THREE.MeshPhysicalMaterial({
      roughness: 0.5, clearcoat: 0.85, clearcoatRoughness: 0.22,
      sheen: 0.35, sheenRoughness: 0.5, sheenColor: new THREE.Color('#ffcf94'),
    }),
    /* glsl */ `
      float t = smoothstep(0.06, 1.02, P.y);
      float m = fbm(P * 1.9);
      float mf = fbm(P * 9.0);
      vec3 pale = srgb(0.96, 0.76, 0.46);
      vec3 mid  = srgb(0.80, 0.44, 0.15);
      vec3 dark = srgb(0.46, 0.18, 0.05);
      vec3 c = mix(pale, mid, smoothstep(0.0, 0.32, t + m * 0.12));
      c = mix(c, dark, smoothstep(0.32, 1.0, t + m * 0.28));
      c *= 0.9 + mf * 0.14;
      float pits = smoothstep(0.5, 0.85, snoise(P * 55.0));
      c *= 1.0 - pits * 0.14;
      pH = mf * 0.006 + snoise(P * 32.0) * 0.0018 - pits * 0.0025;
      pR = 0.85 + m * 0.35 + pits * 0.6;
      // egg-wash is brushed on by hand: glossy in patches, dull in others
      pC = smoothstep(-0.35, 0.3, m + fbm(P * 4.5) * 0.4);
      pCR = 0.6 + (1.0 - pC) * 1.5;
      // oven-spring: the pale, matte, torn band where the dough burst up in the oven
      float tear = fbm(P * vec3(6.0, 2.0, 6.0)) * 0.05;
      float band = smoothstep(0.075, 0.1, P.y) * (1.0 - smoothstep(0.17 + tear, 0.21 + tear, P.y));
      c = mix(c, srgb(0.97, 0.82, 0.58) * (0.92 + mf * 0.1), band * 0.85);
      pH += band * fbm(P * vec3(30.0, 60.0, 30.0)) * 0.006;
      pR = mix(pR, 1.4, band);
      pC *= 1.0 - band;
      // sits on the fillings: darker where it meets them
      pAO = mix(1.0, 0.45 + 0.55 * smoothstep(0.0, 0.11, P.y), uContact);
      if (P.y < 0.02) {
        ${CRUMB}
        float toast = smoothstep(1.05, 1.43, r);
        c = mix(srgb(0.97, 0.88, 0.69), srgb(0.80, 0.52, 0.24), toast) * (1.0 - holes * 0.28 - small * 0.15);
        pH = -holes * 0.012 - small * 0.004 + fbm(P * 30.0) * 0.003;
        pR = 2.0;
        pC = 0.0;
      }
      diffuseColor.rgb = c;
    `,
    { bump: 1.2, uniforms: { uContact } }
  );
  const mesh = new THREE.Mesh(geo, mat);

  // sesame seeds — teardrop-ish, tinted per seed, seated on the dome
  const seedGeo = new THREE.SphereGeometry(0.032, 12, 8);
  seedGeo.scale(0.62, 0.3, 1.3);
  const sp = seedGeo.attributes.position;
  for (let i = 0; i < sp.count; i++) { const z = sp.getZ(i); sp.setX(i, sp.getX(i) * (1 - z * 4)); }
  seedGeo.computeVertexNormals();
  const N = 230;
  const seeds = new THREE.InstancedMesh(
    seedGeo,
    new THREE.MeshPhysicalMaterial({ roughness: 0.42, sheen: 0.6, sheenColor: new THREE.Color('#fff3d6'), clearcoat: 0.3 }),
    N
  );
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), q2 = new THREE.Quaternion(), q3 = new THREE.Quaternion();
  const up = new THREE.Vector3(0, 1, 0), fwd = new THREE.Vector3(1, 0, 0), nrm = new THREE.Vector3(), pos = new THREE.Vector3(), sc = new THREE.Vector3();
  const col = new THREE.Color();
  for (let i = 0; i < N; ) {
    const a = Math.asin(THREE.MathUtils.lerp(Math.sin(0.2), Math.sin(1.52), rand()));
    const th = rand() * TAU;
    pos.set(r * Math.cos(a) * Math.cos(th), b + h * Math.pow(Math.sin(a), 0.78), r * Math.cos(a) * Math.sin(th));
    const patch = Math.pow(clamp(fbm(pos.x * 1.3, pos.y * 1.3, pos.z * 1.3 + 4, 3) + 0.55, 0, 1), 1.6);
    if (rand() > 0.15 + patch * 0.85) continue; // rejection sampling -> clusters and bare spots
    nrm.set(pos.x / (r * r), (pos.y - b) / (h * h), pos.z / (r * r)).normalize();
    pos.addScaledVector(nrm, lumps(pos.x, pos.y, pos.z) + 0.002);
    warp(pos);
    q.setFromUnitVectors(up, nrm).multiply(q2.setFromAxisAngle(up, rand() * TAU)).multiply(q3.setFromAxisAngle(fwd, (rand() - 0.5) * 0.5));
    sc.setScalar(0.75 + rand() * 0.45);
    seeds.setMatrixAt(i, m.compose(pos, q, sc));
    col.setHSL(0.1 + rand() * 0.025, 0.4 + rand() * 0.2, 0.74 + rand() * 0.1);
    if (rand() < 0.15) col.offsetHSL(0, 0.12, -0.2); // a few toasted ones
    seeds.setColorAt(i++, col);
  }
  const g = new THREE.Group();
  g.add(mesh, seeds);
  return { obj: g, meshes: [mesh, seeds] };
}

function bottomBun(uContact) {
  const r = 1.4, h = 0.42;
  const geo = finalize(
    lathe([[0, 0], [r * 0.7, 0], [r * 0.95, 0.03], [r, 0.14], [r * 0.99, 0.3], [r * 0.95, 0.395], [r * 0.82, h], [0, h]], 144, 100),
    (v) => {
      const rr = Math.hypot(v.x, v.z);
      if (rr > 0.01) {
        const k = 1 + fbm(v.x * 2, v.y * 2, v.z * 2, 3) * 0.025;
        v.x *= k; v.z *= k;
      }
      if (v.y > h - 0.005) v.y += fbm(v.x * 3, 0, v.z * 3, 3) * 0.012; // torn crumb face
    }
  );
  const mat = surface(
    new THREE.MeshPhysicalMaterial({ roughness: 0.55, clearcoat: 0.25, clearcoatRoughness: 0.45, sheen: 0.4, sheenColor: new THREE.Color('#ffcf94') }),
    /* glsl */ `
      float m = fbm(P * 2.4);
      float mf = fbm(P * 10.0);
      vec3 c;
      if (P.y > 0.395) {
        ${CRUMB}
        // griddle-toasted face: golden, darker in patches and at the rim
        float toast = clamp(mf * 0.6 + 0.35 + smoothstep(0.9, 1.3, r) * 0.5, 0.0, 1.0);
        c = mix(srgb(0.95, 0.80, 0.55), srgb(0.66, 0.36, 0.12), toast) * (1.0 - holes * 0.3 - small * 0.15);
        pH = -holes * 0.012 - small * 0.004 + mf * 0.004;
        pR = 1.8;
      } else {
        float t = P.y / 0.42;
        c = mix(srgb(0.62, 0.30, 0.09), srgb(0.92, 0.66, 0.36), smoothstep(0.0, 0.85, t) + m * 0.12);
        c *= 0.9 + mf * 0.14;
        pH = mf * 0.005 + snoise(P * 40.0) * 0.0014;
        pR = 1.0 + m * 0.3;
        pC = smoothstep(-0.2, 0.4, m);
      }
      pAO = mix(1.0, 1.0 - 0.6 * smoothstep(0.22, 0.42, P.y), uContact);
      diffuseColor.rgb = c;
    `,
    { bump: 1.2, uniforms: { uContact } }
  );
  const mesh = new THREE.Mesh(geo, mat);
  return { obj: mesh, meshes: [mesh] };
}

function patty(mat, seed) {
  const r = 1.5, h = 0.3;
  const geo = finalize(
    lathe([[0, 0], [r * 0.9, 0], [r * 0.975, 0.025], [r, 0.08], [r * 1.005, 0.17], [r * 0.985, 0.25], [r * 0.92, h], [0, h]], 160, 100),
    (v) => {
      const rr = Math.hypot(v.x, v.z);
      if (rr > 0.001) {
        // smashed patties have ragged, lacy edges
        const e = rr / r;
        const k = 1 + (fbm(v.x * 1.4 + seed, v.y * 0.6, v.z * 1.4, 4) * 0.07 + fbm(v.x * 6, v.y * 4, v.z * 6 + seed, 3) * 0.035 + fbm(v.x * 15, v.y * 9, v.z * 15 + seed, 2) * 0.03) * e * e * e;
        v.x *= k; v.z *= k;
      }
      const n = Math.max(0, fbm(v.x * 2.5, v.y * 2, v.z * 2.5 + seed, 4) + 0.55);
      v.y += v.y > h * 0.5 ? -n * 0.032 : n * 0.012;
    }
  );
  const mesh = new THREE.Mesh(geo, mat);
  mesh.rotation.y = seed;
  return { obj: mesh, meshes: [mesh] };
}

function pattyMaterial(uChicken, uContact) {
  return surface(
    new THREE.MeshPhysicalMaterial({ roughness: 0.72, clearcoat: 1, clearcoatRoughness: 0.12 }),
    /* glsl */ `
      float cr = clamp((ridged(P * 5.5 + fbm(P * 2.0) * 0.8) * 0.75 + (fbm(P * 13.0) * 0.5 + 0.5) * 0.25 - 0.45) * 1.8 + 0.45, 0.0, 1.0);
      float fine = fbm(P * 24.0);
      float big = fbm(P * 1.6);
      float r = length(P.xz);
      // beef: near-black Maillard crust, ridges catch a lighter brown
      vec3 cb = mix(srgb(0.13, 0.055, 0.025), srgb(0.33, 0.15, 0.06), smoothstep(0.35, 0.78, cr));
      cb = mix(cb, srgb(0.58, 0.32, 0.15), smoothstep(0.72, 0.98, cr) * 0.75);
      cb *= mix(1.0, 0.55, smoothstep(1.25, 1.6, r)); // crispy charred lace
      // chicken: crunchy golden breading
      vec3 ck = mix(srgb(0.58, 0.30, 0.09), srgb(0.95, 0.66, 0.28), smoothstep(0.3, 0.85, cr));
      vec3 c = mix(cb, ck, uChicken);
      c *= 0.82 + fine * 0.22 + big * 0.18;
      diffuseColor.rgb = c;
      pH = cr * mix(0.022, 0.035, uChicken) + fine * 0.007;
      float fat = smoothstep(0.55, 0.9, snoise(P * 6.5 + 3.0));
      pR = mix(1.2, 0.6, fat * (1.0 - uChicken * 0.8));
      // juices: a thin wet film only on fat pockets and in the crevices
      float wet = max(fat, smoothstep(0.35, 0.1, cr) * 0.6) * (1.0 - uChicken * 0.85);
      pC = wet * 0.7;
      pCR = 1.0 + (1.0 - wet) * 2.0;
      // ground-beef grain: fine strands + pale fat flecks (faded out at distance by _aa)
      float grain = snoise(P * 58.0);
      float fleck = smoothstep(0.4, 0.65, snoise(P * 34.0 + 5.0)) * (1.0 - uChicken);
      diffuseColor.rgb *= 0.9 + grain * 0.14;
      diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * 1.7 + srgb(0.05, 0.025, 0.01), fleck * 0.3);
      pH += grain * 0.0028 + fleck * 0.002;
      // cracked black pepper
      float pep = smoothstep(0.62, 0.72, snoise(P * 75.0 + 40.0)) * (1.0 - uChicken);
      diffuseColor.rgb *= 1.0 - pep * 0.75;
      // contact with whatever sits above and below
      float side = smoothstep(1.1, 1.4, r);
      float ao = 1.0 - 0.55 * (1.0 - smoothstep(0.0, 0.09, P.y)) - 0.4 * smoothstep(0.2, 0.31, P.y) * side;
      pAO = mix(1.0, ao, uContact);
    `,
    { bump: 2, uniforms: { uChicken, uContact } }
  );
}

/* What a cheese slice rests on. Built from the patty's actual vertices:
   top(a, d) = surface height at angle a / distance d (relative to the layer's top plane, ≤ 0)
   edge(a)   = outermost radius of the patty at angle a (over all heights)
   The cheese drapes on top() and hangs just outside edge(), so it can never cut into the meat. */
const SA = 128, SR = 64, SMAX = 1.9;
function pattySupport(mesh, h) {
  const top = new Float32Array(SA * SR).fill(NaN), edge = new Float32Array(SA);
  const p = mesh.geometry.attributes.position;
  const c = Math.cos(mesh.rotation.y), sn = Math.sin(mesh.rotation.y);
  for (let i = 0; i < p.count; i++) {
    const lx = p.getX(i), y = p.getY(i), lz = p.getZ(i);
    const x = lx * c + lz * sn, z = -lx * sn + lz * c; // into the layer frame
    const r = Math.hypot(x, z);
    const ai = (Math.round(((Math.atan2(z, x) / TAU + 1) % 1) * SA)) % SA;
    const ri = Math.min(SR - 1, Math.round((r / SMAX) * (SR - 1)));
    const k = ai * SR + ri;
    if (!(top[k] >= y)) top[k] = y;
    if (r > edge[ai]) edge[ai] = r;
  }
  // fill radial gaps inward→outward, then dilate one bin each way (conservative)
  for (let a = 0; a < SA; a++) {
    let last = h;
    for (let r = 0; r < SR; r++) { const k = a * SR + r; if (isNaN(top[k])) top[k] = last; else last = top[k]; }
  }
  const dil = new Float32Array(SA * SR), e2 = new Float32Array(SA);
  for (let a = 0; a < SA; a++) {
    e2[a] = Math.max(edge[(a + SA - 1) % SA], edge[a], edge[(a + 1) % SA]);
    for (let r = 0; r < SR; r++) {
      let m = -Infinity;
      for (let da = -1; da <= 1; da++) for (let dr = -1; dr <= 1; dr++) {
        const rr = Math.min(SR - 1, Math.max(0, r + dr));
        m = Math.max(m, top[((a + da + SA) % SA) * SR + rr]);
      }
      dil[a * SR + r] = m - h;
    }
  }
  const af = (a) => ((a / TAU) % 1 + 1) % 1 * SA;
  return {
    edge(a) {
      const f = af(a), i = Math.floor(f) % SA, t = f - Math.floor(f);
      return e2[i] + (e2[(i + 1) % SA] - e2[i]) * t;
    },
    top(a, d) {
      const f = af(a), i = Math.floor(f) % SA, t = f - Math.floor(f);
      const g = Math.min(SR - 1.001, (d / SMAX) * (SR - 1)), j = Math.floor(g), u = g - j;
      const v = (ai) => dil[ai * SR + j] + (dil[ai * SR + j + 1] - dil[ai * SR + j]) * u;
      return v(i) + (v((i + 1) % SA) - v(i)) * t;
    },
  };
}
// bottom bun's crumb face sits ~0.02 above its layer height, plus up to ~0.008 of torn-crumb relief
const bunSupport = { edge: () => 1.45, top: () => 0.03 };

const THICK = 0.016; // a real slice is ~2 mm at burger scale

class Cheese {
  constructor(seed, uMelt) {
    const geo = new THREE.PlaneGeometry(2.62, 2.62, 72, 72);
    geo.rotateX(-Math.PI / 2);
    // rounded corners: pull the extremes in a little
    const pp = geo.attributes.position;
    for (let i = 0; i < pp.count; i++) {
      const x = pp.getX(i), z = pp.getZ(i);
      const c = Math.pow(Math.abs(x * z) / 1.716, 3) * 0.12;
      pp.setX(i, x * (1 - c)); pp.setZ(i, z * (1 - c));
    }
    geo.rotateY(Math.PI / 4 + seed * 0.45);
    // `sheet` is the draped underside; the visible mesh is a real slab built from it:
    // top surface = underside pushed out along its normal by THICK, joined by an edge strip.
    // Shared edge vertices get averaged normals -> the soft, rounded edge of a real slice.
    this.sheet = geo;
    this.base = Float32Array.from(geo.attributes.position.array);
    const V = (this.V = geo.attributes.position.count), S = 73;
    const solid = new THREE.BufferGeometry();
    solid.setAttribute('position', new THREE.BufferAttribute(new Float32Array(V * 6), 3));
    const idx = [], si = geo.index.array;
    for (let i = 0; i < si.length; i += 3) {
      idx.push(si[i], si[i + 1], si[i + 2]);                     // top
      idx.push(si[i] + V, si[i + 2] + V, si[i + 1] + V);         // bottom (flipped)
    }
    const loop = [];
    for (let x = 0; x < S - 1; x++) loop.push(x);                         // row 0
    for (let y = 0; y < S - 1; y++) loop.push(y * S + S - 1);             // right column
    for (let x = S - 1; x > 0; x--) loop.push((S - 1) * S + x);           // last row
    for (let y = S - 1; y > 0; y--) loop.push(y * S);                     // left column
    // orient the edge strip outward (checked once on the flat slice)
    const P0 = this.base, i0 = loop[0], i1 = loop[1];
    const ex = P0[i1 * 3] - P0[i0 * 3], ez = P0[i1 * 3 + 2] - P0[i0 * 3 + 2];
    // normal of tri (i, j, j+V) with top above bottom ~ (−ez, 0, ex) up to sign
    const outward = (-ez) * P0[i0 * 3] + ex * P0[i0 * 3 + 2] > 0;
    for (let k = 0; k < loop.length; k++) {
      const i = loop[k], j = loop[(k + 1) % loop.length];
      if (outward) idx.push(i, j + V, j, i, i + V, j + V);
      else idx.push(i, j, j + V, i, j + V, i + V);
    }
    solid.setIndex(idx);
    const geoSolid = solid;
    this.geo = geoSolid;
    const r = rng(seed * 99 + 7);
    this.seed = seed;
    this.drips = Array.from({ length: 8 }, () => ({ a: r() * TAU, w: 0.05 + r() * 0.09, len: 0.2 + r() * 0.55 }));
    this.mat = surface(
      new THREE.MeshPhysicalMaterial({
        roughness: 0.4, clearcoat: 0.5, clearcoatRoughness: 0.25,
        sheen: 0.3, sheenColor: new THREE.Color('#ffe7a6'),
      }),
      /* glsl */ `
        float m = fbm(P * 2.6);
        vec3 c = mix(srgb(0.98, 0.56, 0.04), srgb(1.0, 0.70, 0.16), m * 0.5 + 0.5);
        diffuseColor.rgb = c;
        pH = m * 0.005 + snoise(P * 22.0) * 0.0008;
        pR = 1.0 - uMelt * 0.4;
        pE = c * (0.05 + uMelt * 0.05); // light scattering through the slice
        pC = 0.5 + uMelt * 0.5;
        pCR = 1.0 - uMelt * 0.5;
      `,
      { bump: 1, oct: 3, uniforms: { uMelt } }
    );
    this.mesh = new THREE.Mesh(geo, this.mat);
    this.mesh.position.y = 0;
    this.last = -1;
  }
  // support: what's underneath; lift: extra clearance when stacked on another slice
  update(melt, support, lift = 0) {
    if (Math.abs(melt - this.last) < 0.002 && support === this.support && lift === this.lift) return;
    this.last = melt; this.support = support; this.lift = lift;
    const p = this.sheet.attributes.position.array, b = this.base;
    const gap = 0.009; // clearance above the meat
    for (let i = 0; i < p.length; i += 3) {
      const x = b[i], z = b[i + 2];
      const d = Math.hypot(x, z);
      const a = Math.atan2(z, x);
      const R = support.edge(a);
      const over = Math.max(0, d - R);
      let y, rad;
      if (over <= 0) {
        // resting on the meat: follow its real surface (crust dips, rounded shoulder)
        y = support.top(a, d) + gap;
        rad = d;
      } else {
        // past the outermost edge: hang straight down just outside it, like cloth;
        // melt lengthens the fold and grows the drips
        let drop = over * (0.85 + melt * 0.35);
        let drip = 0;
        for (const dr of this.drips) {
          const da = Math.abs(((((a - dr.a + Math.PI) % TAU) + TAU) % TAU) - Math.PI);
          drip += Math.exp(-(da * da) / (dr.w * dr.w)) * dr.len;
        }
        drop += melt * drip * Math.min(1, over * 5);
        const sh = Math.min(1, over / 0.06); // quick roll over the lip
        y = support.top(a, R) + gap - drop;
        rad = R + gap + lift + 0.012 * sh + over * 0.03;
      }
      const k = d > 1e-4 ? rad / d : 1;
      p[i] = x * k;
      p[i + 1] = y;
      p[i + 2] = z * k;
    }
    this.sheet.computeVertexNormals();
    const n = this.sheet.attributes.normal.array, o = this.geo.attributes.position.array, V3 = this.V * 3;
    for (let i = 0; i < V3; i += 3) {
      o[i] = p[i] + n[i] * THICK; o[i + 1] = p[i + 1] + n[i + 1] * THICK; o[i + 2] = p[i + 2] + n[i + 2] * THICK;
      o[V3 + i] = p[i]; o[V3 + i + 1] = p[i + 1]; o[V3 + i + 2] = p[i + 2];
    }
    this.geo.attributes.position.needsUpdate = true;
    this.geo.computeVertexNormals();
    this.geo.computeBoundingSphere();
  }
}

const lettuceMat = () =>
  surface(
    new THREE.MeshPhysicalMaterial({ side: THREE.DoubleSide, roughness: 0.42, clearcoat: 0.45, clearcoatRoughness: 0.2, sheen: 0.4, sheenColor: new THREE.Color('#efffc0') }),
    /* glsl */ `
      float r = length(P.xz);
      float a = atan(P.z, P.x);
      float warp = fbm(P * 1.8) * 0.7;
      float vein = 1.0 - smoothstep(0.0, 0.08, abs(sin(a * 7.0 + warp * 3.0 + r * 1.3)));
      float sub  = 1.0 - smoothstep(0.0, 0.06, abs(sin(a * 23.0 + warp * 6.0 + r * 4.0)));
      float t = smoothstep(0.15, 1.65, r + warp * 0.2);
      vec3 c = mix(srgb(0.88, 0.93, 0.64), srgb(0.30, 0.52, 0.13), t);
      c = mix(c, srgb(0.95, 0.98, 0.80), vein * 0.5 * (1.0 - t * 0.4) + sub * 0.12);
      c *= 0.88 + fbm(P * 11.0) * 0.18;
      diffuseColor.rgb = c;
      pH = vein * 0.007 + sub * 0.0025 + fbm(P * 15.0) * 0.005;
      pR = 1.0 - vein * 0.3;
      if (gl_FrontFacing) diffuseColor.rgb = mix(c, srgb(0.86, 0.92, 0.62), 0.45); // paler underside (disc winding: front = underside)
      pE = diffuseColor.rgb * 0.09; // leaves glow when lit from behind
    `,
    { bump: 1, oct: 4 }
  );

function lettuce() {
  const mat = lettuceMat();
  const g = new THREE.Group(), meshes = [];
  [[1.6, 0, 0, 0, 7], [1.4, 0.25, -0.15, 0.03, 19]].forEach(([R, ox, oz, y0, sd]) => {
    const geo = polarDisc(22, 220, (t, a) => {
      const ca = Math.cos(a), sa = Math.sin(a);
      const edge = R * (1 + fbm(ca * 1.2 + sd, sa * 1.2, 0, 3) * 0.28);
      // frilly edge: frequency rises toward the rim like a real leaf margin
      const fr = Math.pow(t, 2.4) * (fbm(ca * 4 + sd, sa * 4, t * 2, 4) * 0.34 + Math.sin(a * 26 + fbm(ca * 3, sa * 3, sd, 2) * 6) * 0.05);
      let y = y0 + 0.045 + fr - Math.pow(t, 3) * 0.13;
      // never sink into the patty below; only the overhang may droop
      if (edge * t < 1.72) y = Math.max(y, 0.065 + y0 + Math.abs(fr) * 0.3);
      return { r: edge * t, y };
    });
    const m = new THREE.Mesh(geo, mat);
    m.position.set(ox, 0, oz);
    m.rotation.y = sd;
    g.add(m); meshes.push(m);
  });
  return { obj: g, meshes };
}

const tomatoTex = () =>
  canvasTex((g, s) => {
    const c = s / 2, R = s * 0.47;
    g.fillStyle = '#9e1208'; g.fillRect(0, 0, s, s);
    // pericarp (outer flesh)
    let grad = g.createRadialGradient(c, c, R * 0.2, c, c, R);
    grad.addColorStop(0, '#f2563a'); grad.addColorStop(0.85, '#e0321c'); grad.addColorStop(1, '#b81a0c');
    g.fillStyle = grad; g.beginPath(); g.arc(c, c, R, 0, TAU); g.fill();
    // locules: jelly pockets full of seeds
    const L = 6;
    for (let k = 0; k < L; k++) {
      g.save(); g.translate(c, c); g.rotate((k / L) * TAU + rand() * 0.2);
      g.filter = 'blur(3px)';
      grad = g.createRadialGradient(0, -R * 0.55, 4, 0, -R * 0.55, R * 0.32);
      grad.addColorStop(0, 'rgba(255,190,110,0.95)'); grad.addColorStop(1, 'rgba(250,120,70,0.6)');
      g.fillStyle = grad;
      g.beginPath(); g.ellipse(0, -R * 0.55, R * 0.17, R * 0.28, 0, 0, TAU); g.fill();
      g.filter = 'none';
      for (let sd = 0; sd < 9; sd++) {
        const yy = -R * 0.33 - rand() * R * 0.42, xx = (rand() - 0.5) * R * 0.2;
        g.fillStyle = `rgba(255,${225 + rand() * 25},${150 + rand() * 50},0.95)`;
        g.beginPath(); g.ellipse(xx, yy, s * 0.009, s * 0.015, rand() * 3, 0, TAU); g.fill();
      }
      g.restore();
    }
    // core
    g.filter = 'blur(6px)';
    g.fillStyle = 'rgba(255,130,95,0.8)'; g.beginPath(); g.arc(c, c, R * 0.17, 0, TAU); g.fill();
    g.filter = 'none';
  }, 1024);

function tomato() {
  const tex = tomatoTex();
  const mat = surface(
    new THREE.MeshPhysicalMaterial({ map: tex, roughness: 0.24, clearcoat: 0.9, clearcoatRoughness: 0.14 }),
    /* glsl */ `
      pH = fbm(P * 12.0) * 0.004;
      pR = 0.7 + fbm(P * 4.0) * 0.5;
      pC = 0.55 + fbm(P * 3.0) * 0.6;   // wet in places, drier in others
      diffuseColor.rgb *= 0.92 + fbm(P * 2.0) * 0.16;
      pE = diffuseColor.rgb * 0.08;     // juicy, translucent flesh
    `,
    { oct: 3 }
  );
  const g = new THREE.Group(), meshes = [];
  [[-0.42, 0.05, 0, 0.3, 0.95], [0.45, -0.08, 0.025, 1.7, 0.9]].forEach(([x, z, y, rot, R], k) => {
    const T = 0.1;
    // rounded rim instead of a knife-sharp cylinder
    const prof = [[0, 0], [R * 0.7, 0], [R - 0.035, 0.002], [R - 0.008, 0.016], [R, T * 0.5], [R - 0.008, T - 0.016], [R - 0.035, T - 0.002], [R * 0.7, T], [0, T]];
    let geo = lathe(prof, 128, 60);
    let uv = geo.attributes.uv, p = geo.attributes.position;
    // planar mapping: the texture's skin ring (radius .47) lands exactly on the rim
    for (let i = 0; i < p.count; i++) uv.setXY(i, 0.5 + (p.getX(i) / R) * 0.47, 0.5 + (p.getZ(i) / R) * 0.47);
    geo.deleteAttribute('normal');
    geo = mergeVertices(geo, 1e-4); // weld the lathe seam (UVs now match there)
    p = geo.attributes.position;
    for (let i = 0; i < p.count; i++) {
      const vx = p.getX(i), vz = p.getZ(i), rr = Math.hypot(vx, vz);
      if (rr < 1e-3) continue;
      const a = Math.atan2(vz, vx);
      const sc = 1 + fbm(Math.cos(a) * 1.5 + k * 5, Math.sin(a) * 1.5, 0, 3) * 0.08;
      p.setX(i, vx * sc); p.setZ(i, vz * sc);
      p.setY(i, p.getY(i) + fbm(vx * 1.5, k, vz * 1.5, 2) * 0.012); // not perfectly flat
    }
    geo.computeVertexNormals();
    const m = new THREE.Mesh(geo, mat);
    m.position.set(x, y, z);
    m.rotation.set(0, rot, y ? 0.04 : -0.02);
    g.add(m); meshes.push(m);
  });
  return { obj: g, meshes };
}

const pickleTex = () =>
  canvasTex((g, s) => {
    const c = s / 2;
    g.fillStyle = '#3f5a14'; g.fillRect(0, 0, s, s);
    let grad = g.createRadialGradient(c, c, 10, c, c, s * 0.46);
    grad.addColorStop(0, '#d6e08e'); grad.addColorStop(0.6, '#b2c463'); grad.addColorStop(0.92, '#7f9a32'); grad.addColorStop(1, '#4c6a18');
    g.fillStyle = grad; g.beginPath(); g.arc(c, c, s * 0.46, 0, TAU); g.fill();
    g.filter = 'blur(2px)';
    g.fillStyle = 'rgba(240,244,200,0.9)';
    for (let k = 0; k < 10; k++) {
      const a = (k / 10) * TAU + rand() * 0.3, rr = s * (0.14 + rand() * 0.06);
      g.beginPath(); g.ellipse(c + Math.cos(a) * rr, c + Math.sin(a) * rr, s * 0.018, s * 0.034, a, 0, TAU); g.fill();
    }
    g.filter = 'none';
  }, 256);

function pickles() {
  const geo = new THREE.CylinderGeometry(0.3, 0.3, 0.045, 120, 1);
  const p = geo.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const vx = p.getX(i), vz = p.getZ(i), rr = Math.hypot(vx, vz);
    if (rr < 1e-3) continue;
    const s = 1 + Math.sin(Math.atan2(vz, vx) * 18) * 0.035; // crinkle cut
    p.setX(i, vx * s); p.setZ(i, vz * s);
  }
  geo.computeVertexNormals();
  geo.translate(0, 0.025, 0);
  const fx = /* glsl */ `pH = fbm(P * 26.0) * 0.003; pR = 0.75 + fbm(P * 8.0) * 0.4; pE = diffuseColor.rgb * 0.1;`;
  const cap = surface(new THREE.MeshPhysicalMaterial({ map: pickleTex(), roughness: 0.25, clearcoat: 1, clearcoatRoughness: 0.1 }), fx, { oct: 3 });
  const side = surface(new THREE.MeshPhysicalMaterial({ color: '#3d5612', roughness: 0.35, clearcoat: 0.8 }), fx, { oct: 3 });
  const g = new THREE.Group(), meshes = [];
  for (let k = 0; k < 6; k++) {
    const a = (k / 6) * TAU + rand() * 0.3;
    const m = new THREE.Mesh(geo, [side, cap, cap]);
    const rr = k === 5 ? 0 : 0.78;
    m.position.set(Math.cos(a) * rr, rand() * 0.012, Math.sin(a) * rr);
    m.rotation.set((rand() - 0.5) * 0.1, rand() * TAU, (rand() - 0.5) * 0.1);
    g.add(m); meshes.push(m);
  }
  return { obj: g, meshes };
}

function onion() {
  const mat = surface(
    new THREE.MeshPhysicalMaterial({ vertexColors: true, roughness: 0.2, clearcoat: 1, clearcoatRoughness: 0.1, sheen: 0.5, sheenColor: new THREE.Color('#ffffff') }),
    /* glsl */ `pH = fbm(P * 18.0) * 0.002; pE = diffuseColor.rgb * 0.12;`,
    { oct: 3 }
  );
  const g = new THREE.Group(), meshes = [];
  [[0.95, 0.22, -0.1], [0.72, -0.38, 0.3], [0.5, 0.15, 0.48], [0.62, -0.2, -0.45]].forEach(([R, x, z], k) => {
    const geo = new THREE.TorusGeometry(R, 0.05, 14, 120);
    geo.rotateX(Math.PI / 2);
    geo.scale(1, 0.75, 1);
    // purple skin on the outside of each ring, white flesh inside
    const p = geo.attributes.position, cols = new Float32Array(p.count * 3), c = new THREE.Color();
    for (let i = 0; i < p.count; i++) {
      const d = Math.hypot(p.getX(i), p.getZ(i)) - R;
      c.set('#f4e6f2').lerp(new THREE.Color('#8a2a78'), clamp((d + 0.01) / 0.05, 0, 1));
      cols.set([c.r, c.g, c.b], i * 3);
    }
    geo.setAttribute('color', new THREE.BufferAttribute(cols, 3));
    const m = new THREE.Mesh(geo, mat);
    m.position.set(x, 0.04 + k * 0.006, z);
    m.rotation.z = (k % 2 ? 1 : -1) * 0.03;
    g.add(m); meshes.push(m);
  });
  return { obj: g, meshes };
}

function sauce(mat) {
  const geo = polarDisc(14, 180, (t, a) => {
    const ca = Math.cos(a), sa = Math.sin(a);
    const edge = 1.2 + fbm(ca * 1.5, sa * 1.5, 3, 3) * 0.35;
    const lobe = Math.max(0, fbm(ca * 2.5, sa * 2.5, 9, 2) + 0.2);
    // thicker bead along the rim, like a squeezed line of sauce
    const bead = Math.exp(-Math.pow((t - 0.9) / 0.1, 2)) * 0.01;
    return { r: edge * t, y: 0.014 + bead + fbm(ca * 3 * t, sa * 3 * t, 1, 2) * 0.01 - Math.pow(t, 4) * 0.07 * lobe };
  });
  const mesh = new THREE.Mesh(geo, mat);
  return { obj: mesh, meshes: [mesh] };
}

function contactShadow() {
  const tex = canvasTex((g, s) => {
    const grad = g.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
    grad.addColorStop(0, 'rgba(0,0,0,0.9)');
    grad.addColorStop(0.35, 'rgba(0,0,0,0.5)');
    grad.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = grad; g.fillRect(0, 0, s, s);
  }, 256);
  tex.colorSpace = THREE.NoColorSpace;
  const m = new THREE.Mesh(
    new THREE.PlaneGeometry(4.2, 4.2).rotateX(-Math.PI / 2),
    new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false, opacity: 0.55 })
  );
  m.renderOrder = -1;
  return m;
}

/* ---------------------------------------------------------- steam */
// A few camera-facing planes; the wisps are the baked 3D noise scrolled upward,
// domain-warped, and masked into a column that widens as it rises.
class Steam {
  constructor() {
    this.group = new THREE.Group();
    this.alpha = 0;
    this.uTime = { value: 0 };
    this.uAlpha = { value: 0 };
    const geo = new THREE.PlaneGeometry(1.5, 2.6);
    geo.translate(0, 1.3, 0);
    const q = new THREE.Quaternion();
    this.planes = [[-0.55, 0.1, 1.3], [0.15, -0.2, 7.7], [0.7, 0.15, 13.1]].map(([x, z, seed]) => {
      const mat = new THREE.ShaderMaterial({
        transparent: true, depthWrite: false,
        uniforms: { uNoise: { value: bakeNoise() }, uTime: this.uTime, uAlpha: this.uAlpha, uSeed: { value: seed } },
        vertexShader: /* glsl */ `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
        fragmentShader: /* glsl */ `
          precision highp sampler3D;
          uniform sampler3D uNoise; uniform float uTime, uAlpha, uSeed; varying vec2 vUv;
          float n(vec3 p){ return texture(uNoise, p * 0.0625).r; }
          void main(){
            vec2 uv = vUv;
            float t = uTime;
            float cx = 0.5 + n(vec3(uv.y * 1.2 - t * 0.18, uSeed, 2.0)) * 0.35;
            float w = 0.1 + uv.y * 0.22;
            float col = exp(-pow((uv.x - cx) / w, 2.0) * 1.6);
            vec3 q = vec3(uv.x * 2.2, uv.y * 1.6 - t * 0.32, t * 0.07 + uSeed);
            float warp = n(q * 1.3);
            float d = n((q + vec3(warp * 1.4, warp * 0.6, 0.0)) * 2.6) * 0.5 + 0.5;
            float a = smoothstep(0.42, 0.8, d) * col * smoothstep(0.02, 0.22, uv.y) * (1.0 - smoothstep(0.45, 1.0, uv.y));
            gl_FragColor = vec4(vec3(1.0, 0.97, 0.92), a * uAlpha);
          }`,
      });
      const m = new THREE.Mesh(geo, mat);
      m.position.set(x, 0, z);
      m.renderOrder = 2;
      m.frustumCulled = false;
      // billboard: cancel the burger's rotation and face the camera
      m.onBeforeRender = (r, sc, cam) => {
        m.parent.getWorldQuaternion(q).invert();
        m.quaternion.copy(q).multiply(cam.quaternion);
      };
      this.group.add(m);
      return m;
    });
  }
  update(dt, height, target) {
    this.uTime.value += dt;
    this.alpha += (target - this.alpha) * (1 - Math.exp(-3 * dt));
    this.uAlpha.value = this.alpha * 0.32;
    this.group.visible = this.alpha > 0.01;
    this.group.position.y = height / 2 - 0.35;
  }
}

/* ---------------------------------------------------------- the burger */

export class Burger {
  constructor() {
    this.group = new THREE.Group();
    this.stack = new THREE.Group();
    this.group.add(this.stack);

    this.uChicken = { value: 0 };
    this.uMelt = { value: 0 };
    this.uContact = { value: 1 }; // 1 = stacked (layers touch), 0 = exploded
    this.pattyMat = pattyMaterial(this.uChicken, this.uContact);
    this.sauceBase = new THREE.Color('#d8361f');
    this.sauceHot = new THREE.Color('#a8100a');
    this.sauceMat = surface(
      new THREE.MeshPhysicalMaterial({ color: this.sauceBase.clone(), roughness: 0.12, clearcoat: 1, clearcoatRoughness: 0.05, side: THREE.DoubleSide }),
      /* glsl */ `pH = fbm(P * 5.0) * 0.006; diffuseColor.rgb *= 0.92 + fbm(P * 3.0) * 0.12; pE = diffuseColor.rgb * 0.08;`,
      { oct: 3 }
    );
    this.cheeses = [];
    this.supports = { bunBottom: bunSupport };

    const build = {
      bunBottom: () => bottomBun(this.uContact),
      patty: () => { const o = patty(this.pattyMat, 0.3); this.supports.patty = pattySupport(o.obj, 0.3); return o; },
      patty2: () => { const o = patty(this.pattyMat, 2.1); this.supports.patty2 = pattySupport(o.obj, 0.3); return o; },
      cheese: () => { const c = new Cheese(1, this.uMelt); c.key = 'cheese'; this.cheeses.push(c); return { obj: c.mesh, meshes: [c.mesh] }; },
      cheese2: () => { const c = new Cheese(2, this.uMelt); c.key = 'cheese2'; this.cheeses.push(c); return { obj: c.mesh, meshes: [c.mesh] }; },
      pickles, lettuce, tomato, onion,
      sauce: () => sauce(this.sauceMat),
      bunTop: () => topBun(this.uContact),
    };

    this.layers = LAYER_DEFS.map((d, i) => {
      const { obj, meshes } = build[d.key]();
      const holder = new THREE.Group();
      holder.add(obj);
      holder.scale.setScalar(1e-4);
      this.stack.add(holder);
      meshes.forEach((m) => { m.castShadow = true; m.receiveShadow = true; m.userData.layer = d.key; });
      return { ...d, i, holder, meshes, on: false, pend: null, delay: 0, s: 0, v: 0 };
    });
    this.meshes = this.layers.flatMap((l) => l.meshes);

    this.shadow = contactShadow();
    this.group.add(this.shadow);
    this.steam = new Steam();
    this.steamT = 0.6;
    this.group.add(this.steam.group);

    this.height = 0;
    this.chicken = 0; this.chickenT = 0;
    this.spicy = 0; this.spicyT = 0;
  }

  // map: { patty: 1, cheese: 1, ... , chicken?, spicy? } — buns are always on
  setVariant(map, stagger = 0.065) {
    const want = (l) => !!(l.fixed || map[l.key]);
    const changed = this.layers.filter((l) => want(l) !== (l.pend ?? l.on));
    const removing = changed.filter((l) => !want(l)).reverse(); // peel from the top
    const adding = changed.filter((l) => want(l));               // build from the bottom
    let k = 0;
    for (const l of [...removing, ...adding]) { l.pend = want(l); l.delay = k++ * stagger; }
    this.chickenT = map.chicken ? 1 : 0;
    this.spicyT = map.spicy ? 1 : 0;
  }

  update(dt, { explode = 0, melt = 0 } = {}) {
    dt = Math.min(dt, 1 / 30);
    let y = 0, vi = 0;
    const gap = 0.42;
    for (const l of this.layers) {
      if (l.pend !== null) {
        l.delay -= dt;
        if (l.delay <= 0) { l.on = l.pend; l.pend = null; }
      }
      // under-damped spring -> each layer "pops" into place
      l.v += ((l.on ? 1 : 0) - l.s) * 170 * dt;
      l.v *= Math.exp(-13 * dt);
      l.s += l.v * dt;
      const s = Math.max(1e-4, l.s), sc = clamp(l.s, 0, 1);
      l.holder.visible = l.s > 0.003;
      l.holder.scale.setScalar(s);
      l.holder.position.y = y + (1 - sc) * 1.4;
      l.holder.rotation.y = explode * (vi % 2 ? 1 : -1) * 0.35 * sc;
      l.cy = y + l.h * 0.5 * sc;
      y += (l.h + explode * gap) * sc;
      if (sc > 0.5) vi++;
    }
    this.height = y;
    this.stack.position.y = -y / 2;
    this.shadow.position.y = -y / 2 - 0.03;
    this.shadow.material.opacity = 0.55 * (1 - explode * 0.7);

    // each slice drapes over whatever is actually under it right now
    for (const c of this.cheeses) {
      let i = this.layers.findIndex((l) => l.key === c.key), lift = 0, sup = bunSupport;
      while (--i >= 0) {
        const l = this.layers[i];
        if (!l.on) continue;
        if (l.key.startsWith('cheese')) { lift += THICK + 0.012; continue; }
        sup = this.supports[l.key] || bunSupport;
        break;
      }
      c.update(melt, sup, lift);
    }
    this.uMelt.value = melt;
    this.uContact.value = 1 - Math.min(1, explode * 2.5);
    this.steam.update(dt, this.height, this.steamT * (1 - explode));
    const k = 1 - Math.exp(-6 * dt);
    this.chicken += (this.chickenT - this.chicken) * k;
    this.spicy += (this.spicyT - this.spicy) * k;
    this.uChicken.value = this.chicken;
    this.sauceMat.color.copy(this.sauceBase).lerp(this.sauceHot, this.spicy);
  }
}
