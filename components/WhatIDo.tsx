import { Reveal } from "@/components/Reveal";

// OFFERING — ported from the Lovable index "03 / Offering" band: a rail-grid
// header (eyebrow + large statement), then a two-column bordered grid laying
// out the two layers (Operational Data Capture / Layered Agentic Workflows),
// each with a roman-numeral marker, a paragraph, and a dash bullet list.
const LAYERS = [
  {
    num: "i.",
    title: "Build the foundation",
    body: "I take the fragmented data, undocumented expertise, and processes a business already runs on and turn them into one organized source it can actually use.",
    points: [
      "Disconnected systems and spreadsheets, pulled into one place",
      "The know-how trapped in a few heads, captured so the work no longer depends on them",
      "One source your people and your tools can both trust",
    ],
  },
  {
    num: "ii.",
    title: "Build the workflows on it",
    body: "With that foundation in place, I build agentic workflows that run the work end to end, on data that’s complete and current, instead of bolting AI onto a mess.",
    points: [
      "Agents that run the work, not just assist with it",
      "Decisions made on complete, current data",
      "Faster and steadier every cycle",
    ],
  },
] as const;

export function WhatIDo() {
  return (
    <section id="do" className="section" aria-labelledby="do-label">
      <div className="container section__inner">
        <Reveal>
          <div className="offer__head">
            <p className="eyebrow">03 / How I help</p>
            <h2 id="do-label" className="text-balance">
              First the foundation. Then the workflows that run on it.
            </h2>
          </div>

          <div className="offer-grid">
            {LAYERS.map((layer, i) => (
              <div
                key={layer.title}
                className={`offer-col ${i === 0 ? "offer-col--first" : "offer-col--second"}`}
              >
                <div className="offer-col__title">
                  <span className="offer-col__num">{layer.num}</span>
                  <h3>{layer.title}</h3>
                </div>
                <p className="offer-col__body">{layer.body}</p>
                <ul className="offer-list">
                  {layer.points.map((p) => (
                    <li key={p}>
                      <span aria-hidden>—</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
