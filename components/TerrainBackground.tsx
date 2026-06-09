"use client";

import { useEffect, useRef } from "react";

// Procedural dot-grid terrain. Pure 2D canvas, no dependencies, no WebGL.
// Ink stipple on the concrete ground: columns of dots whose rows are displaced
// by layered value noise into rolling hills and compressed toward a horizon in
// the upper third. Reads as a drawing on the surface; the grain layers above it.

function hash(x: number, y: number): number {
  let n = Math.imul(x | 0, 374761393) + Math.imul(y | 0, 668265263);
  n = Math.imul(n ^ (n >>> 13), 1274126177);
  n = (n ^ (n >>> 16)) >>> 0;
  return n / 4294967295;
}

function smooth(t: number): number {
  return t * t * (3 - 2 * t);
}

function valueNoise(x: number, y: number): number {
  const xi = Math.floor(x);
  const yi = Math.floor(y);
  const u = smooth(x - xi);
  const v = smooth(y - yi);
  const tl = hash(xi, yi);
  const tr = hash(xi + 1, yi);
  const bl = hash(xi, yi + 1);
  const br = hash(xi + 1, yi + 1);
  const top = tl + (tr - tl) * u;
  const bot = bl + (br - bl) * u;
  return top + (bot - top) * v;
}

// Layered (fractal) noise, 3 octaves, normalized to ~0..1.
function fbm(x: number, y: number): number {
  let sum = 0;
  let amp = 0.5;
  let freq = 1;
  for (let o = 0; o < 3; o++) {
    sum += valueNoise(x * freq, y * freq) * amp;
    amp *= 0.5;
    freq *= 2;
  }
  return sum / 0.875;
}

export function TerrainBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const hero = document.getElementById("hero");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let raf = 0;
    let running = false;

    const draw = (tSec: number) => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#0e0e0d"; // ink only; the ground shows through between dots
      const horizonY = height * 0.3;
      const rows = 74;
      const cols = Math.ceil(width / (width < 600 ? 12 : 16)); // denser columns on narrow screens
      const drift = tSec * 0.03; // very slow breathing of the noise field
      for (let zi = 0; zi < rows; zi++) {
        const t = zi / (rows - 1); // 0 at horizon, 1 in the foreground
        const baseY = horizonY + t * t * (height - horizonY); // rows compress toward horizon
        const r = 1 + 0.5 * t; // 1px far, 1.5px near
        const amp = 6 + 40 * t; // gentle hills, taller toward the foreground
        ctx.globalAlpha = 0.08 + 0.17 * t; // faint at horizon, denser/darker in front
        for (let xi = 0; xi <= cols; xi++) {
          const fx = xi / cols;
          const h = fbm(fx * 3, t * 2.2 + drift);
          const x = fx * width;
          const y = baseY - (h - 0.5) * amp;
          ctx.fillRect(x - r / 2, y - r / 2, r, r);
        }
      }
      ctx.globalAlpha = 1;
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2); // cap DPR at 2
      const h = (hero ? hero.offsetHeight : window.innerHeight) + 120; // bleed past hero
      canvas.style.height = `${h}px`;
      const w = canvas.getBoundingClientRect().width;
      width = w;
      height = h;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (!running) draw(performance.now() * 0.001); // keep a frame when paused/static
    };

    const frame = (now: number) => {
      if (!running) return;
      draw(now * 0.001);
      raf = requestAnimationFrame(frame);
    };

    const start = () => {
      if (running || reduceMotion) return;
      running = true;
      raf = requestAnimationFrame(frame);
    };

    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const onVisibility = () => {
      if (document.hidden) stop();
      else start();
    };

    resize();
    const ro = new ResizeObserver(resize);
    if (hero) ro.observe(hero);
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);

    if (reduceMotion) {
      draw(0); // single static frame, no animation loop
    } else {
      start();
    }

    return () => {
      stop();
      ro.disconnect();
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className="terrain" aria-hidden="true" />;
}
