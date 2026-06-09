// Static node-graph motif: faint points connected by hairlines to one solid hub.
// The thesis as image: scattered to organized. Phase 4 animates the points
// drifting from scattered positions into these settled ones on load.

const HUB = { x: 152, y: 72 };

const POINTS = [
  { x: 40, y: 30 },
  { x: 98, y: 18 },
  { x: 212, y: 42 },
  { x: 28, y: 112 },
  { x: 204, y: 128 },
  { x: 78, y: 168 },
  { x: 162, y: 176 },
] as const;

export function NodeGraph() {
  return (
    <svg className="nodegraph" viewBox="0 0 240 200" fill="none" aria-hidden="true">
      <g className="nodegraph__edges">
        {POINTS.map((p, i) => (
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
        ))}
      </g>
      <g className="nodegraph__points">
        {POINTS.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r="2.5" fill="var(--faint)" />
        ))}
        <circle cx={HUB.x} cy={HUB.y} r="4" fill="var(--ink)" />
      </g>
    </svg>
  );
}
