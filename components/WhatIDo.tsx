import { Reveal } from "@/components/Reveal";

// HOW I HELP — "03 / How I help" band: rail-style header (eyebrow + heading) over
// a short two-paragraph prose. No sub-headings, cards, or bullet lists. Keeps the
// existing #do anchor, Reveal wrapper, and heading/prose typography. Copy is em-dash
// free (commas on purpose) with curly apostrophes per house style.
export function WhatIDo() {
  return (
    <section id="do" className="section" aria-labelledby="do-label">
      <div className="container section__inner">
        <Reveal>
          <div className="offer__head">
            <p className="eyebrow">03 / How I help</p>
            <h2 id="do-label" className="text-balance">
              The foundation and workflows
            </h2>
          </div>

          <div className="prose">
            <p>
              Fragmented data, undocumented expertise, and the processes a
              business already runs on become one organized source it can trust,
              with the operation finally visible in one place instead of
              scattered across systems and locked in a few people&rsquo;s heads.
            </p>
            <p>
              Then we build agentic workflows on that foundation and agents that
              run the work on data that&rsquo;s complete and current.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
