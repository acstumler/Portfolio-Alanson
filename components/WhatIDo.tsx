import { Reveal } from "@/components/Reveal";

// OFFERING — ported from the Lovable index "03 / Offering" band: a rail-grid
// header (eyebrow + large statement), then a two-column bordered grid laying
// out the two layers (Operational Data Capture / Layered Agentic Workflows),
// each with a roman-numeral marker, a paragraph, and a dash bullet list.
const LAYERS = [
  {
    num: "i.",
    title: "Operational Data Capture",
    body: "I take a high-value, recurring workflow and capture the data that drives it, from disconnected systems, spreadsheets, and expert judgment that was never written down, into one organized, queryable store.",
    points: [
      "Unify disconnected systems and spreadsheets",
      "Encode undocumented expert judgment",
      "Build one organized, agent-ready record",
    ],
  },
  {
    num: "ii.",
    title: "Layered Agentic Workflows",
    body: "On top of that store, I layer agents that execute the workflow end-to-end, replacing the manual stitching and judgment-by-memory that used to gate every decision.",
    points: [
      "Agents that run the workflow, not just assist it",
      "Decisions made on complete, current data",
      "Compounding speed and reliability per cycle",
    ],
  },
] as const;

export function WhatIDo() {
  return (
    <section id="do" className="section" aria-labelledby="do-label">
      <div className="container section__inner">
        <Reveal>
          <div className="offer__head">
            <p className="eyebrow">03 / Offering</p>
            <h2 id="do-label" className="text-balance">
              Two layers. One outcome: an operation that runs on data and agents.
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
