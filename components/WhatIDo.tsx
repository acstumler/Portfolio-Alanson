import { Reveal } from "@/components/Reveal";

// HOW I HELP — "03 / How I help" band. Mirrors section 02 (Believe): the same
// rail grid with eyebrow + heading in the left rail and a two-paragraph prose
// (display lead + body) in the right column. Keeps the existing #do anchor,
// Reveal wrapper, and "0N / Label" eyebrow. Copy is em-dash free (commas on
// purpose) with curly apostrophes per house style.
export function WhatIDo() {
  return (
    <section id="do" className="section" aria-labelledby="do-label">
      <div className="container section__inner">
        <Reveal>
          <div className="rail-grid">
            <header className="rail">
              <p className="eyebrow">03 / How I help</p>
              <h2 className="rail__heading" id="do-label">
                The foundation and workflows
              </h2>
            </header>

            <div className="rail-content rail-content--pad prose">
              <p className="prose__lead">
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
          </div>
        </Reveal>
      </div>
    </section>
  );
}
