import { Reveal } from "@/components/Reveal";

// WHY NOW — ported from the Lovable index "02 / Why now" band: eyebrow + short
// heading in the rail, long-form thesis in the content column with a display
// lead paragraph. Keeps the existing #believe anchor and Reveal wrapper.
export function Believe() {
  return (
    <section id="believe" className="section" aria-labelledby="believe-label">
      <div className="container section__inner">
        <Reveal>
          <div className="rail-grid">
            <header className="rail">
              <p className="eyebrow">02 / Why now</p>
              <h2 className="rail__heading" id="believe-label">
                The prerequisite to competing.
              </h2>
            </header>

            <div className="rail-content rail-content--pad prose">
              <p className="prose__lead">
                AI applied to scattered, incomplete data produces unreliable
                output. AI applied to unified, agent-ready data compounds.
              </p>
              <p>
                AI-native firms move faster and decide better on the same
                problems. Firms without organized, agent-ready data fall behind
                and cannot close the distance by simply <em>adding AI</em>.
                Getting operational data captured and agent-ready is the
                prerequisite, and it is precisely what these firms are least
                equipped to do themselves.
              </p>
              <p>That prerequisite is what I build. One workflow at a time.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
