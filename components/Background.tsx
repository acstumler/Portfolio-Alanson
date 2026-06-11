import { Reveal } from "@/components/Reveal";

// EXPERIENCE — "04 / Experience" band. Mirrors section 02 (Believe) and 03: the
// same rail grid with eyebrow + heading in the left rail and a prose paragraph
// in the right column, with a small/muted credentials caption beneath it (reusing
// the .sources treatment). Keeps the existing #background anchor so the header's
// "Experience" nav link still scrolls here. Copy is em-dash free (commas and the
// colon are intentional) with curly apostrophes per house style.
export function Background() {
  return (
    <section
      id="background"
      className="section"
      aria-labelledby="background-label"
    >
      <div className="container section__inner">
        <Reveal>
          <div className="rail-grid">
            <header className="rail">
              <p className="eyebrow">04 / Experience</p>
              <h2 className="rail__heading" id="background-label">
                Most people who understand the problem can&rsquo;t build the fix.
              </h2>
            </header>

            <div className="rail-content rail-content--pad prose">
              <p className="prose__lead">
                I spent most of a decade in tax and advisory inside operationally
                complex firms, logging more than 4,000 hours across tax seasons
                and structuring complex entities. That&rsquo;s where I saw how
                these businesses actually run: not in the system, but in
                spreadsheets, workarounds, and the people who&rsquo;ve done the
                job long enough to just know. The hard part of putting AI on an
                operation isn&rsquo;t the technology. It&rsquo;s understanding the
                work well enough to know what to build and whether what comes back
                is right. I work on both sides of that: I know these firms from
                the inside, and I build the systems that organize them.
              </p>
              <p className="sources">Bellarmine MBA · B.A. Accountancy</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
