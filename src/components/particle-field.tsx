import { useEffect, useRef } from "react";

const LOGO_URL =
  "https://framerusercontent.com/images/PbnmwmSRKNoRH1WS7TcQ2K40.png?width=1200&height=1200";

const VERT = `
attribute vec2 a_position;
attribute float a_size;
attribute float a_intensity;
attribute float a_layerDim;
attribute vec3 a_originalColor;
uniform vec2 u_resolution;
uniform vec3 u_activeColor;
uniform vec3 u_inactiveColor;
uniform float u_useOriginalColors;
varying vec3 v_color;
varying float v_size;
void main() {
  vec2 clipSpace = (a_position / u_resolution) * 2.0 - 1.0;
  gl_Position = vec4(clipSpace * vec2(1.0, -1.0), 0.0, 1.0);
  gl_PointSize = a_size;
  vec3 customColor = mix(u_inactiveColor, u_activeColor, a_intensity);
  vec3 baseColor = mix(customColor, a_originalColor, u_useOriginalColors);
  v_color = baseColor * a_layerDim;
  v_size = a_size;
}
`;

const FRAG = `
precision mediump float;
varying vec3 v_color;
varying float v_size;
void main() {
  vec2 coord = gl_PointCoord - vec2(0.5);
  float dist = length(coord);
  float edge = 0.5;
  float smoothWidth = 1.0 / max(v_size, 1.0);
  float alpha = 1.0 - smoothstep(edge - smoothWidth, edge, dist);
  if (alpha < 0.01) discard;
  gl_FragColor = vec4(v_color, alpha);
}
`;

const RAY_VERT = `
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const RAY_FRAG = `
precision mediump float;
uniform vec2 iResolution;
uniform float iTime;
uniform vec3 raysColor;
uniform float rayLength;
uniform float lightSpread;
uniform float noiseAmount;
uniform float pulsating;
uniform float fadeDistance;
uniform float speed;
float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}
float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}
void main() {
  vec2 coord = gl_FragCoord.xy;
  vec2 origin = vec2(0.0, 0.0);
  vec2 dir = normalize(coord - origin);
  float dist = length(coord - origin);
  float maxD = length(iResolution) * rayLength;
  float fall = clamp(1.0 - dist / maxD, 0.0, 1.0);
  float ang = atan(dir.y, dir.x);
  float rays = pow(abs(sin(ang * 11.0 + iTime * speed)), 12.0 / max(lightSpread, 0.15));
  float pulse = pulsating > 0.5 ? (0.82 + 0.18 * sin(iTime * speed * 3.0)) : 1.0;
  float n = noise(coord * 0.035 + iTime * 0.15);
  float grain = 1.0 - noiseAmount + noiseAmount * n;
  float fadeY = 0.18 + 0.82 * (coord.y / iResolution.y);
  float a = rays * fall * pulse * grain * fadeY * 0.42;
  gl_FragColor = vec4(raysColor * a, a * 0.75);
}
`;

type Sample = { nx: number; ny: number; r: number; g: number; b: number };

function compile(gl: WebGLRenderingContext, type: number, src: string) {
  const sh = gl.createShader(type);
  if (!sh) return null;
  gl.shaderSource(sh, src);
  gl.compileShader(sh);
  if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(sh));
    gl.deleteShader(sh);
    return null;
  }
  return sh;
}

function program(gl: WebGLRenderingContext, vsrc: string, fsrc: string) {
  const v = compile(gl, gl.VERTEX_SHADER, vsrc);
  const f = compile(gl, gl.FRAGMENT_SHADER, fsrc);
  if (!v || !f) return null;
  const p = gl.createProgram();
  if (!p) return null;
  gl.attachShader(p, v);
  gl.attachShader(p, f);
  gl.linkProgram(p);
  if (!gl.getProgramParameter(p, gl.LINK_STATUS)) {
    console.error(gl.getProgramInfoLog(p));
    return null;
  }
  return p;
}

function sampleLogo(img: HTMLImageElement, resolution: number): Sample[] {
  const aspect = img.height / img.width;
  const w = 500;
  const h = 500 * aspect;
  const step = 500 / resolution;
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");
  if (!ctx) return [];
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, w, h);
  ctx.drawImage(img, 0, 0, w, h);
  const data = ctx.getImageData(0, 0, w, h).data;
  const cols = Math.ceil(w / step);
  const rows = Math.ceil(h / step);
  const out: Sample[] = [];
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      if (Math.random() < 0.16) continue;
      const jx = (Math.random() - 0.5) * step * 0.9;
      const jy = (Math.random() - 0.5) * step * 0.9;
      const px = Math.floor(x * step + step / 2 + jx);
      const py = Math.floor(y * step + step / 2 + jy);
      if (px < 0 || py < 0 || px >= w || py >= h) continue;
      const i = (py * w + px) * 4;
      if (data[i] > 50 || data[i + 1] > 50 || data[i + 2] > 50) {
        out.push({
          nx: px / w - 0.5 + (Math.random() - 0.5) * 0.01,
          ny: (py / h - 0.5) * aspect + (Math.random() - 0.5) * 0.01,
          r: data[i] / 255,
          g: data[i + 1] / 255,
          b: data[i + 2] / 255,
        });
      }
    }
  }
  return out;
}

function pickShade(): [number, number, number] {
  const r = Math.random();
  if (r < 0.46) return [200 / 255, 203 / 255, 204 / 255];
  if (r < 0.7) return [192 / 255, 196 / 255, 196 / 255];
  if (r < 0.88) return [156 / 255, 158 / 255, 156 / 255];
  return [110 / 255, 110 / 255, 110 / 255];
}

export function ParticleField() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLCanvasElement>(null);
  const rayRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const logoCanvas = logoRef.current;
    const rayCanvas = rayRef.current;
    if (!wrap || !logoCanvas || !rayCanvas) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const gl =
      logoCanvas.getContext("webgl", { alpha: true, antialias: false, premultipliedAlpha: false }) ||
      (logoCanvas.getContext("experimental-webgl", { alpha: true, antialias: false }) as WebGLRenderingContext | null);
    const rayGl =
      rayCanvas.getContext("webgl", { alpha: true, antialias: false, premultipliedAlpha: false }) ||
      (rayCanvas.getContext("experimental-webgl", { alpha: true, antialias: false }) as WebGLRenderingContext | null);
    if (!gl) return;

    const logoProg = program(gl, VERT, FRAG);
    if (!logoProg) return;
    const rayProg = rayGl ? program(rayGl, RAY_VERT, RAY_FRAG) : null;

    const resolution = 78;
    const logoScale = 0.9;
    const particleSize = 3.4;
    const randomSize = true;
    const idleMovement = 2.2;
    const lensStrength = 9;
    const tiltStrength = 2;
    const parallaxStrength = 2;
    const hoverRadius = 200;
    const active = [110 / 255, 110 / 255, 110 / 255];
    const inactive = [200 / 255, 203 / 255, 204 / 255];

    let w = 0;
    let h = 0;
    let dpr = 1;
    let raf = 0;
    let running = true;
    let seeded = false;
    const mouse = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5, inside: false };

    type P = {
      nx: number;
      ny: number;
      z: number;
      x: number;
      y: number;
      vx: number;
      vy: number;
      fx: number;
      fy: number;
      sizeMul: number;
      r: number;
      g: number;
      b: number;
    };
    let particles: P[] = [];
    let buf = new Float32Array();
    const glBuf = gl.createBuffer();

    const loc = {
      pos: gl.getAttribLocation(logoProg, "a_position"),
      size: gl.getAttribLocation(logoProg, "a_size"),
      intensity: gl.getAttribLocation(logoProg, "a_intensity"),
      layerDim: gl.getAttribLocation(logoProg, "a_layerDim"),
      color: gl.getAttribLocation(logoProg, "a_originalColor"),
      res: gl.getUniformLocation(logoProg, "u_resolution"),
      active: gl.getUniformLocation(logoProg, "u_activeColor"),
      inactive: gl.getUniformLocation(logoProg, "u_inactiveColor"),
      useOrig: gl.getUniformLocation(logoProg, "u_useOriginalColors"),
    };

    let rayBuf: WebGLBuffer | null = null;
    let rayLoc: Record<string, WebGLUniformLocation | null> = {};
    if (rayGl && rayProg) {
      rayBuf = rayGl.createBuffer();
      rayGl.bindBuffer(rayGl.ARRAY_BUFFER, rayBuf);
      rayGl.bufferData(
        rayGl.ARRAY_BUFFER,
        new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
        rayGl.STATIC_DRAW,
      );
      rayLoc = {
        res: rayGl.getUniformLocation(rayProg, "iResolution"),
        time: rayGl.getUniformLocation(rayProg, "iTime"),
        color: rayGl.getUniformLocation(rayProg, "raysColor"),
        rayLength: rayGl.getUniformLocation(rayProg, "rayLength"),
        lightSpread: rayGl.getUniformLocation(rayProg, "lightSpread"),
        noiseAmount: rayGl.getUniformLocation(rayProg, "noiseAmount"),
        pulsating: rayGl.getUniformLocation(rayProg, "pulsating"),
        fadeDistance: rayGl.getUniformLocation(rayProg, "fadeDistance"),
        speed: rayGl.getUniformLocation(rayProg, "speed"),
      };
    }

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = wrap.clientWidth;
      h = wrap.clientHeight;
      for (const c of [logoCanvas, rayCanvas]) {
        c.width = Math.floor(w * dpr);
        c.height = Math.floor(h * dpr);
        c.style.width = `${w}px`;
        c.style.height = `${h}px`;
      }
      gl.viewport(0, 0, logoCanvas.width, logoCanvas.height);
      if (rayGl) rayGl.viewport(0, 0, rayCanvas.width, rayCanvas.height);
    };

    const onMove = (e: PointerEvent) => {
      mouse.tx = e.clientX / Math.max(w, 1);
      mouse.ty = e.clientY / Math.max(h, 1);
      mouse.inside = true;
    };
    const onLeave = () => {
      mouse.inside = false;
    };

    const build = (samples: Sample[]) => {
      particles = samples.map((s) => {
        const [cr, cg, cb] = pickShade();
        return {
          nx: s.nx,
          ny: s.ny,
          z: (Math.random() - 0.5) * 0.5,
          x: 0,
          y: 0,
          vx: 0,
          vy: 0,
          fx: Math.random() * Math.PI * 2,
          fy: Math.random() * Math.PI * 2,
          sizeMul: randomSize ? 0.82 + Math.random() * 0.5 : 1,
          r: cr,
          g: cg,
          b: cb,
        };
      });
      buf = new Float32Array(particles.length * 8);
      gl.bindBuffer(gl.ARRAY_BUFFER, glBuf);
      gl.bufferData(gl.ARRAY_BUFFER, buf.byteLength, gl.DYNAMIC_DRAW);
      seeded = false;
    };

    const load = () => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => build(sampleLogo(img, resolution));
      img.src = LOGO_URL;
    };

    const draw = (now: number) => {
      if (!running) return;
      raf = requestAnimationFrame(draw);
      const t = now / 1000;
      mouse.x += (mouse.tx - mouse.x) * 0.08;
      mouse.y += (mouse.ty - mouse.y) * 0.08;

      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

      if (particles.length) {
        const minSide = Math.min(w, h);
        const scale = minSide * logoScale;
        const cx = w * 0.5;
        const cy = h * 0.46;
        const mx = mouse.x * w;
        const my = mouse.y * h;
        const tiltX = (mouse.x - 0.5) * tiltStrength;
        const tiltY = (mouse.y - 0.5) * tiltStrength;
        const parX = (mouse.x - 0.5) * parallaxStrength;
        const parY = (mouse.y - 0.5) * parallaxStrength;
        const G = reduced ? 0 : idleMovement;

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          let tx = cx + p.nx * scale + parX * (1 + p.z);
          let ty = cy + p.ny * scale + parY * (1 + p.z);
          tx += tiltX * p.z * 8;
          ty += tiltY * p.z * 8;
          if (!reduced) {
            tx += Math.sin(t * 0.55 + p.fx) * G * (1.2 + p.z);
            ty += Math.cos(t * 0.48 + p.fy) * G * (1.2 + p.z);
          }

          let intensity = 0;
          if (mouse.inside) {
            const dx = mx - tx;
            const dy = my - ty;
            const dist = Math.hypot(dx, dy);
            if (dist < hoverRadius && dist > 0) {
              const fall = (Math.cos((dist / hoverRadius) * Math.PI) + 1) * 0.5;
              intensity = fall;
              const push = fall * lensStrength;
              tx -= (dx / dist) * push;
              ty -= (dy / dist) * push;
            }
          }

          if (!seeded) {
            p.x = tx;
            p.y = ty;
          } else {
            p.vx += (tx - p.x) * 0.08;
            p.vy += (ty - p.y) * 0.08;
            p.vx *= 0.82;
            p.vy *= 0.82;
            p.x += p.vx;
            p.y += p.vy;
          }

          const o = i * 8;
          buf[o] = p.x * dpr;
          buf[o + 1] = p.y * dpr;
          buf[o + 2] = particleSize * p.sizeMul * dpr * (1 - p.z * 0.08);
          buf[o + 3] = intensity;
          buf[o + 4] = 1 - Math.abs(p.z) * 0.06;
          buf[o + 5] = p.r;
          buf[o + 6] = p.g;
          buf[o + 7] = p.b;
        }
        seeded = true;

        gl.useProgram(logoProg);
        gl.bindBuffer(gl.ARRAY_BUFFER, glBuf);
        gl.bufferSubData(gl.ARRAY_BUFFER, 0, buf);
        const stride = 32;
        gl.enableVertexAttribArray(loc.pos);
        gl.vertexAttribPointer(loc.pos, 2, gl.FLOAT, false, stride, 0);
        gl.enableVertexAttribArray(loc.size);
        gl.vertexAttribPointer(loc.size, 1, gl.FLOAT, false, stride, 8);
        gl.enableVertexAttribArray(loc.intensity);
        gl.vertexAttribPointer(loc.intensity, 1, gl.FLOAT, false, stride, 12);
        gl.enableVertexAttribArray(loc.layerDim);
        gl.vertexAttribPointer(loc.layerDim, 1, gl.FLOAT, false, stride, 16);
        gl.enableVertexAttribArray(loc.color);
        gl.vertexAttribPointer(loc.color, 3, gl.FLOAT, false, stride, 20);
        gl.uniform2f(loc.res, logoCanvas.width, logoCanvas.height);
        gl.uniform3f(loc.active, active[0], active[1], active[2]);
        gl.uniform3f(loc.inactive, inactive[0], inactive[1], inactive[2]);
        gl.uniform1f(loc.useOrig, 1);
        gl.drawArrays(gl.POINTS, 0, particles.length);
      }

      if (rayGl && rayProg && rayBuf) {
        rayGl.clearColor(0, 0, 0, 0);
        rayGl.clear(rayGl.COLOR_BUFFER_BIT);
        rayGl.enable(rayGl.BLEND);
        rayGl.blendFunc(rayGl.SRC_ALPHA, rayGl.ONE_MINUS_SRC_ALPHA);
        rayGl.useProgram(rayProg);
        rayGl.bindBuffer(rayGl.ARRAY_BUFFER, rayBuf);
        const pos = rayGl.getAttribLocation(rayProg, "position");
        rayGl.enableVertexAttribArray(pos);
        rayGl.vertexAttribPointer(pos, 2, rayGl.FLOAT, false, 0, 0);
        rayGl.uniform2f(rayLoc.res, rayCanvas.width, rayCanvas.height);
        rayGl.uniform1f(rayLoc.time, reduced ? 0 : t);
        rayGl.uniform3f(rayLoc.color, 145 / 255, 145 / 255, 145 / 255);
        rayGl.uniform1f(rayLoc.rayLength, 1.5);
        rayGl.uniform1f(rayLoc.lightSpread, 1);
        rayGl.uniform1f(rayLoc.noiseAmount, 0.5);
        rayGl.uniform1f(rayLoc.pulsating, 1);
        rayGl.uniform1f(rayLoc.fadeDistance, 1);
        rayGl.uniform1f(rayLoc.speed, 0.7);
        rayGl.drawArrays(rayGl.TRIANGLES, 0, 6);
      }
    };

    const onVis = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else {
        running = true;
        raf = requestAnimationFrame(draw);
      }
    };

    resize();
    load();
    raf = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerleave", onLeave);
    document.addEventListener("visibilitychange", onVis);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <div ref={wrapRef} className="absolute inset-0 size-full" aria-hidden>
      <canvas ref={logoRef} className="absolute inset-0 size-full" />
      <canvas ref={rayRef} className="absolute inset-0 size-full opacity-75" />
    </div>
  );
}
