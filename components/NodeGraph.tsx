"use client";

import { motion, useReducedMotion } from "framer-motion";

// Node-graph motif: faint points connected by hairlines to one solid ink hub.
// On load the points drift in from scattered positions and settle, converging on
// the hub, once (~1.2s, ease-out). The thesis as motion: scattered to organized.
// Under reduced motion it renders the settled state directly, no animation.

const HUB = { x: 152, y: 72 };
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

// x,y = settled position; fx,fy = scattered start (off the settled grid).
const POINTS = [
  { x: 40, y: 30, fx: -20, fy: 96 },
  { x: 98, y: 18, fx: 70, fy: -34 },
  { x: 212, y: 42, fx: 286, fy: 4 },
  { x: 28, y: 112, fx: -48, fy: 158 },
  { x: 204, y: 128, fx: 292, fy: 182 },
  { x: 78, y: 168, fx: 18, fy: 244 },
  { x: 162, y: 176, fx: 226, fy: 250 },
] as const;

export function NodeGraph() {
  const reduce = useReducedMotion();

  return (
    <svg className="nodegraph" viewBox="0 0 240 200" fill="none" aria-hidden="true">
      <g>
        {POINTS.map((p, i) =>
          reduce ? (
            <line
              key={i}
              x1={HUB.x}
              y1={HUB.y}
              x2={p.x}
              y2={p.y}
              stroke="var(--hairline-strong)"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />
          ) : (
            <motion.line
              key={i}
              x1={HUB.x}
              y1={HUB.y}
              stroke="var(--hairline-strong)"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
              initial={{ x2: p.fx, y2: p.fy, opacity: 0 }}
              animate={{ x2: p.x, y2: p.y, opacity: 1 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.06 + i * 0.045 }}
            />
          ),
        )}
      </g>
      <g>
        {POINTS.map((p, i) =>
          reduce ? (
            <circle key={i} cx={p.x} cy={p.y} r="2.5" fill="var(--faint)" />
          ) : (
            <motion.circle
              key={i}
              r="2.5"
              fill="var(--faint)"
              initial={{ cx: p.fx, cy: p.fy, opacity: 0 }}
              animate={{ cx: p.x, cy: p.y, opacity: 1 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.06 + i * 0.045 }}
            />
          ),
        )}
        <circle cx={HUB.x} cy={HUB.y} r="4" fill="var(--ink)" />
      </g>
    </svg>
  );
}
