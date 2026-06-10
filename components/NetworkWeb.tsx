"use client";

import { motion, useReducedMotion } from "framer-motion";

// Network web: the hero's only graphic. A fixed, approved topology of 24 nodes
// and 26 hairline edges in ink, converging on a single hub. On load it resolves
// scatter-to-settle, hub-outward by hop (~1.4s, ease-out): hub and mid nodes
// first, then outer, then far; each edge draws in with its outer endpoint, and
// the two unconnected stray dots fade in last. Under reduced motion it renders
// the settled state directly. The thesis as motion: scattered into organized.

const HUB = { x: 188, y: 196 };
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const DUR = 0.7;
// Base delay (seconds) per hop: hub, mid, outer, far, stray.
const HOP_DELAY = [0, 0.14, 0.34, 0.56, 0.84];

type Node = { x: number; y: number; r: number; o: number; hop: number };

const NODES: Node[] = [
  // hub
  { x: 188, y: 196, r: 4, o: 1, hop: 0 },
  // mid
  { x: 138, y: 148, r: 2.8, o: 0.6, hop: 1 },
  { x: 254, y: 162, r: 2.8, o: 0.6, hop: 1 },
  { x: 224, y: 256, r: 2.8, o: 0.6, hop: 1 },
  { x: 130, y: 232, r: 2.8, o: 0.6, hop: 1 },
  { x: 262, y: 216, r: 2.8, o: 0.6, hop: 1 },
  { x: 170, y: 128, r: 2.5, o: 0.55, hop: 1 },
  // outer
  { x: 106, y: 94, r: 1.9, o: 0.38, hop: 2 },
  { x: 68, y: 134, r: 1.9, o: 0.38, hop: 2 },
  { x: 292, y: 106, r: 1.9, o: 0.38, hop: 2 },
  { x: 328, y: 152, r: 1.9, o: 0.38, hop: 2 },
  { x: 242, y: 316, r: 1.9, o: 0.38, hop: 2 },
  { x: 172, y: 296, r: 1.9, o: 0.38, hop: 2 },
  { x: 340, y: 258, r: 1.9, o: 0.38, hop: 2 },
  { x: 84, y: 262, r: 1.9, o: 0.38, hop: 2 },
  { x: 158, y: 62, r: 1.9, o: 0.38, hop: 2 },
  { x: 272, y: 52, r: 1.9, o: 0.38, hop: 2 },
  // far
  { x: 402, y: 128, r: 1.6, o: 0.3, hop: 3 },
  { x: 368, y: 196, r: 1.6, o: 0.3, hop: 3 },
  { x: 396, y: 290, r: 1.6, o: 0.3, hop: 3 },
  { x: 42, y: 306, r: 1.6, o: 0.3, hop: 3 },
  { x: 334, y: 64, r: 1.6, o: 0.3, hop: 3 },
  // stray (unconnected; fade in last)
  { x: 306, y: 328, r: 1.4, o: 0.24, hop: 4 },
  { x: 58, y: 58, r: 1.4, o: 0.24, hop: 4 },
];

type Edge = { x1: number; y1: number; x2: number; y2: number; o: number; w: number };

// (x1,y1) is the inner endpoint (settled, lower hop); (x2,y2) is the outer
// endpoint that draws in with its node.
const EDGES: Edge[] = [
  // hub → six mid nodes
  { x1: 188, y1: 196, x2: 138, y2: 148, o: 0.2, w: 0.8 },
  { x1: 188, y1: 196, x2: 254, y2: 162, o: 0.2, w: 0.8 },
  { x1: 188, y1: 196, x2: 224, y2: 256, o: 0.2, w: 0.8 },
  { x1: 188, y1: 196, x2: 130, y2: 232, o: 0.2, w: 0.8 },
  { x1: 188, y1: 196, x2: 262, y2: 216, o: 0.2, w: 0.8 },
  { x1: 188, y1: 196, x2: 170, y2: 128, o: 0.18, w: 0.7 },
  // chains
  { x1: 138, y1: 148, x2: 106, y2: 94, o: 0.12, w: 0.6 },
  { x1: 138, y1: 148, x2: 68, y2: 134, o: 0.12, w: 0.6 },
  { x1: 170, y1: 128, x2: 158, y2: 62, o: 0.11, w: 0.6 },
  { x1: 254, y1: 162, x2: 292, y2: 106, o: 0.12, w: 0.6 },
  { x1: 254, y1: 162, x2: 328, y2: 152, o: 0.12, w: 0.6 },
  { x1: 224, y1: 256, x2: 242, y2: 316, o: 0.12, w: 0.6 },
  { x1: 224, y1: 256, x2: 172, y2: 296, o: 0.11, w: 0.6 },
  { x1: 262, y1: 216, x2: 340, y2: 258, o: 0.12, w: 0.6 },
  { x1: 130, y1: 232, x2: 84, y2: 262, o: 0.12, w: 0.6 },
  // third-hop
  { x1: 328, y1: 152, x2: 402, y2: 128, o: 0.1, w: 0.6 },
  { x1: 328, y1: 152, x2: 368, y2: 196, o: 0.1, w: 0.6 },
  { x1: 340, y1: 258, x2: 396, y2: 290, o: 0.1, w: 0.6 },
  { x1: 84, y1: 262, x2: 42, y2: 306, o: 0.1, w: 0.6 },
  { x1: 106, y1: 94, x2: 158, y2: 62, o: 0.09, w: 0.6 },
  { x1: 292, y1: 106, x2: 272, y2: 52, o: 0.09, w: 0.6 },
  { x1: 272, y1: 52, x2: 334, y2: 64, o: 0.08, w: 0.6 },
  // faint cross-links
  { x1: 68, y1: 134, x2: 106, y2: 94, o: 0.07, w: 0.6 },
  { x1: 340, y1: 258, x2: 328, y2: 152, o: 0.07, w: 0.6 },
  { x1: 172, y1: 296, x2: 84, y2: 262, o: 0.06, w: 0.6 },
  { x1: 158, y1: 62, x2: 272, y2: 52, o: 0.06, w: 0.6 },
];

// Deterministic scatter start for a node (derived from its coords so a node and
// any edge endpoint that lands on it agree). Hub and stray dots do not travel —
// the hub anchors, the strays only fade.
function scatter(x: number, y: number, hop: number): { x: number; y: number } {
  if (hop === 0 || hop >= 4) return { x, y };
  const dx = x - HUB.x;
  const dy = y - HUB.y;
  const jx = ((x * 7 + y * 13) % 17) - 8;
  const jy = ((x * 13 + y * 7) % 19) - 9;
  return { x: x + dx * 0.5 + jx, y: y + dy * 0.5 + jy };
}

// Per-node settled meta: scatter start + hop-resolved delay.
const META = NODES.map((n, i) => ({
  ...n,
  s: scatter(n.x, n.y, n.hop),
  delay: HOP_DELAY[n.hop] + i * 0.012,
}));

const outerOf = (x: number, y: number) =>
  META.find((m) => m.x === x && m.y === y) ?? META[0];

export function NetworkWeb() {
  const reduce = useReducedMotion();

  return (
    <svg
      className="network-web"
      viewBox="0 0 440 370"
      fill="none"
      aria-hidden="true"
    >
      <g>
        {EDGES.map((e, i) => {
          const outer = outerOf(e.x2, e.y2);
          return reduce ? (
            <line
              key={i}
              x1={e.x1}
              y1={e.y1}
              x2={e.x2}
              y2={e.y2}
              stroke="var(--ink)"
              strokeWidth={e.w}
              strokeOpacity={e.o}
              vectorEffect="non-scaling-stroke"
            />
          ) : (
            <motion.line
              key={i}
              x1={e.x1}
              y1={e.y1}
              stroke="var(--ink)"
              strokeWidth={e.w}
              vectorEffect="non-scaling-stroke"
              initial={{ x2: outer.s.x, y2: outer.s.y, opacity: 0 }}
              animate={{ x2: e.x2, y2: e.y2, opacity: e.o }}
              transition={{ duration: DUR, ease: EASE, delay: outer.delay }}
            />
          );
        })}
      </g>
      <g>
        {META.map((m, i) =>
          reduce ? (
            <circle
              key={i}
              cx={m.x}
              cy={m.y}
              r={m.r}
              fill="var(--ink)"
              fillOpacity={m.o}
            />
          ) : (
            <motion.circle
              key={i}
              r={m.r}
              fill="var(--ink)"
              initial={{ cx: m.s.x, cy: m.s.y, opacity: 0 }}
              animate={{ cx: m.x, cy: m.y, opacity: m.o }}
              transition={{ duration: DUR, ease: EASE, delay: m.delay }}
            />
          ),
        )}
      </g>
    </svg>
  );
}
