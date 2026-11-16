// Procedural surface detail, computed per-pixel on the GPU.
// Instead of UV-mapped textures (seams, blur up close), each material samples 3D noise
// at the fragment's *object-space* position: infinite resolution, no seams, no downloads.
// A material's GLSL snippet can edit:
//   diffuseColor.rgb  albedo (linear)
//   pR                roughness multiplier
//   pH                height -> turned into a bump normal via screen-space derivatives
//   pE                emissive add (cheap fake subsurface glow)
//   pC / pCR          clearcoat amount / roughness multipliers (patchy egg-wash, wet fat glints)
//   pAO               ambient occlusion (contact darkening where layers touch)
// It can read P (object position) plus the helpers below.
import * as THREE from 'three';

const NOISE = /* glsl */ `
varying vec3 vOPos;
uniform sampler3D uNoise;
// Noise is pre-baked once into a tiling 3D texture (see bakeNoise) — one texture read
// instead of ~100 ALU ops of simplex maths. Lattice period = 16 units.
// Octaves finer than a pixel are faded out (they'd only shimmer) and skipped entirely.
float _aa(vec3 p){ return 1.0 - smoothstep(0.35, 0.7, length(fwidth(p))); }
float snoise(vec3 p){ return (texture(uNoise, p * 0.0625).r) * _aa(p); }
float fbm(vec3 p){
  float a = 0.5, s = 0.0, w = length(fwidth(p));
  for (int i = 0; i < OCT; i++){
    float f = 1.0 - smoothstep(0.35, 0.7, w);
    if (f <= 0.0) break;
    s += a * f * texture(uNoise, p * 0.0625).r;
    p = p * 2.03 + 17.1; w *= 2.03; a *= 0.5;
  }
  return s;
}
float ridged(vec3 p){
  float a = 0.5, s = 0.0, w = length(fwidth(p));
  for (int i = 0; i < OCT; i++){
    float f = 1.0 - smoothstep(0.35, 0.7, w);
    s += a * mix(0.6, 1.0 - abs(texture(uNoise, p * 0.0625).r), f);
    p = p * 2.07 + 3.7; w *= 2.07; a *= 0.5;
  }
  return s;
}
vec3 srgb(vec3 c){ return pow(c, vec3(2.2)); }
vec3 srgb(float r, float g, float b){ return pow(vec3(r, g, b), vec3(2.2)); }
// bump from a height field, identical maths to three's bumpmap chunk
vec3 _bump(vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection){
  vec3 vSigmaX = normalize(dFdx(surf_pos.xyz));
  vec3 vSigmaY = normalize(dFdy(surf_pos.xyz));
  vec3 vN = surf_norm;
  vec3 R1 = cross(vSigmaY, vN);
  vec3 R2 = cross(vN, vSigmaX);
  float fDet = dot(vSigmaX, R1) * faceDirection;
  vec3 vGrad = sign(fDet) * (dHdxy.x * R1 + dHdxy.y * R2);
  return normalize(abs(fDet) * surf_norm - vGrad);
}
`;

/* Tiling 3D gradient (Perlin) noise baked into a half-float 3D texture, once.
   Half-float keeps bump maps smooth (8-bit would terrace); values are in ~[-1, 1]. */
let noiseTex = null;
export function bakeNoise() {
  if (noiseTex) return noiseTex;
  const N = mobile ? 64 : 96, P = 16; // texels per side, lattice period
  const perm = new Uint8Array(P * P * P);
  let seed = 7;
  const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  const gx = new Float32Array(P * P * P), gy = new Float32Array(P * P * P), gz = new Float32Array(P * P * P);
  for (let i = 0; i < gx.length; i++) {
    const t = rnd() * Math.PI * 2, u = rnd() * 2 - 1, r = Math.sqrt(1 - u * u);
    gx[i] = r * Math.cos(t); gy[i] = r * Math.sin(t); gz[i] = u;
  }
  const fade = (t) => t * t * t * (t * (t * 6 - 15) + 10);
  const idx = (x, y, z) => (x & 15) + ((y & 15) << 4) + ((z & 15) << 8);
  const raw = new Float32Array(N * N * N);
  let o = 0, max = 0;
  for (let k = 0; k < N; k++) {
    const z = (k / N) * P, zi = Math.floor(z), zf = z - zi, w = fade(zf);
    for (let j = 0; j < N; j++) {
      const y = (j / N) * P, yi = Math.floor(y), yf = y - yi, v = fade(yf);
      for (let i = 0; i < N; i++) {
        const x = (i / N) * P, xi = Math.floor(x), xf = x - xi, u = fade(xf);
        let acc = 0;
        for (let c = 0; c < 8; c++) {
          const dx = c & 1, dy = (c >> 1) & 1, dz = c >> 2;
          const g = idx(xi + dx, yi + dy, zi + dz);
          const d = gx[g] * (xf - dx) + gy[g] * (yf - dy) + gz[g] * (zf - dz);
          acc += d * (dx ? u : 1 - u) * (dy ? v : 1 - v) * (dz ? w : 1 - w);
        }
        raw[o++] = acc;
        max += acc * acc;
      }
    }
  }
  // match the spread of the simplex noise the shaders were tuned with (std ≈ 0.35)
  const k = 0.35 / Math.sqrt(max / raw.length);
  const half = new Uint16Array(raw.length);
  for (let i = 0; i < raw.length; i++) half[i] = THREE.DataUtils.toHalfFloat(Math.max(-1, Math.min(1, raw[i] * k)));
  const t = new THREE.Data3DTexture(half, N, N, N);
  t.format = THREE.RedFormat;
  t.type = THREE.HalfFloatType;
  t.minFilter = t.magFilter = THREE.LinearFilter;
  t.wrapS = t.wrapT = t.wrapR = THREE.RepeatWrapping;
  t.unpackAlignment = 1;
  t.needsUpdate = true;
  noiseTex = t;
  return t;
}

const mobile = typeof matchMedia !== 'undefined' && matchMedia('(max-width: 820px)').matches;

/**
 * Patch a MeshStandard/Physical material with procedural GLSL.
 * @param {THREE.Material} mat
 * @param {string} glsl  snippet (see header)
 * @param {object} [o]   { bump: strength, uniforms: {name: {value}}, oct: octaves }
 */
export function surface(mat, glsl, o = {}) {
  const bump = (o.bump ?? 1).toFixed(4);
  const oct = mobile ? Math.max(2, (o.oct ?? 5) - 2) : (o.oct ?? 5);
  const uniforms = { ...(o.uniforms || {}), uNoise: { value: null } };
  const decl = Object.entries(uniforms)
    .filter(([k]) => k !== 'uNoise')
    .map(([k, u]) => `uniform ${typeof u.value === 'number' ? 'float' : u.value.isColor ? 'vec3' : 'vec3'} ${k};`)
    .join('\n');
  mat.onBeforeCompile = (sh) => {
    uniforms.uNoise.value = bakeNoise();
    Object.assign(sh.uniforms, uniforms);
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vOPos;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvOPos = transformed;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>\n#define OCT ${oct}\n${decl}\n${NOISE}`)
      .replace(
        '#include <color_fragment>',
        `#include <color_fragment>\nvec3 P = vOPos; float pH = 0.0; float pR = 1.0; vec3 pE = vec3(0.0); float pC = 1.0; float pCR = 1.0; float pAO = 1.0;\n{\n${glsl}\n}`
      )
      .replace('#include <roughnessmap_fragment>', '#include <roughnessmap_fragment>\nroughnessFactor = clamp(roughnessFactor * pR, 0.04, 1.0);')
      .replace(
        '#include <normal_fragment_maps>',
        `#include <normal_fragment_maps>\nnormal = _bump(-vViewPosition, normal, vec2(dFdx(pH), dFdy(pH)) * ${bump}, faceDirection);`
      )
      .replace(
        '#include <lights_physical_fragment>',
        `#include <lights_physical_fragment>
        #ifdef USE_CLEARCOAT
          material.clearcoat = saturate(material.clearcoat * pC);
          material.clearcoatRoughness = clamp(material.clearcoatRoughness * pCR, 0.0525, 1.0);
        #endif`
      )
      .replace(
        '#include <aomap_fragment>',
        `#include <aomap_fragment>
        reflectedLight.indirectDiffuse *= pAO;
        reflectedLight.indirectSpecular *= pAO;
        reflectedLight.directDiffuse *= mix(1.0, pAO, 0.65);
        reflectedLight.directSpecular *= mix(1.0, pAO, 0.65);`
      )
      .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\ntotalEmissiveRadiance += pE;');
  };
  // unique program per snippet
  mat.customProgramCacheKey = () => glsl + bump + oct;
  return mat;
}

/**
 * A small photo-studio environment for reflections:
 * one big overhead softbox, two strip lights, a warm bounce card, dark walls.
 * That is what makes food photography speculars look like food photography.
 */
export function studioEnvironment(renderer) {
  const env = new THREE.Scene();
  const box = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: '#0d0a08', side: THREE.BackSide }));
  box.scale.setScalar(30);
  env.add(box);
  const panel = (w, h, color, intensity, pos, look) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color: new THREE.Color(color).multiplyScalar(intensity), side: THREE.DoubleSide }));
    m.position.set(...pos);
    m.lookAt(...look);
    env.add(m);
  };
  panel(9, 6, '#fff6ea', 5, [0, 9, 3], [0, 0, 0]);         // overhead softbox
  panel(2, 10, '#ffe2bf', 6, [-9, 2, 2], [0, 0, 0]);       // left strip (warm)
  panel(2, 10, '#eef2ff', 4, [8, 3, -4], [0, 0, 0]);       // right-back strip (cool)
  panel(10, 4, '#ff9a4a', 0.9, [0, -6, 6], [0, 0, 0]);     // warm bounce card below
  panel(6, 4, '#ffffff', 2, [3, 2, 10], [0, 0, 0]);        // front fill
  const pmrem = new THREE.PMREMGenerator(renderer);
  const tex = pmrem.fromScene(env, 0.02).texture;
  pmrem.dispose();
  return tex;
}
