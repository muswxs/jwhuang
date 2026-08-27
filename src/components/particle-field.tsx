import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
};

export function ParticleField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mouse = { x: -9e3, y: -9e3 };
    let particles: Particle[] = [];
    let w = 0;
    let h = 0;
    let raf = 0;
    let last = performance.now();
    let running = true;

    const spawn = () => {
      const n = Math.round(Math.min(150, Math.max(48, (w * h) / 11000)));
      particles = Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 16,
        vy: (Math.random() - 0.5) * 16,
        r: 0.7 + Math.random() * 1.5,
      }));
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      spawn();
    };

    const onMove = (e: PointerEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onLeave = () => {
      mouse.x = -9e3;
      mouse.y = -9e3;
    };

    const draw = (now: number) => {
      if (!running) return;
      raf = requestAnimationFrame(draw);
      let dt = (now - last) / 1000;
      last = now;
      if (dt > 0.05) dt = 0.05;

      ctx.clearRect(0, 0, w, h);

      if (!reduced) {
        for (const p of particles) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 180 * 180) {
            const d = Math.sqrt(d2) || 1;
            p.vx += (dx / d) * 48 * dt;
            p.vy += (dy / d) * 48 * dt;
          }
          p.x += p.vx * dt;
          p.y += p.vy * dt;
          if (p.x < 0) p.x += w;
          else if (p.x > w) p.x -= w;
          if (p.y < 0) p.y += h;
          else if (p.y > h) p.y -= h;
          p.vx *= 0.995;
          p.vy *= 0.995;
          const speed = Math.hypot(p.vx, p.vy);
          if (speed < 6) {
            p.vx += (Math.random() - 0.5) * 4 * dt;
            p.vy += (Math.random() - 0.5) * 4 * dt;
          }
        }
      }

      const link = Math.min(130, Math.max(90, w / 12));
      ctx.lineWidth = 0.6;
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d >= link) continue;
          ctx.strokeStyle = `rgba(17,17,17,${(1 - d / link) * 0.16})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      ctx.fillStyle = "rgba(17,17,17,0.42)";
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const onVis = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else {
        running = true;
        last = performance.now();
        raf = requestAnimationFrame(draw);
      }
    };

    resize();
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

  return <canvas ref={ref} className="absolute inset-0 size-full" aria-hidden />;
}
