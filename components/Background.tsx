import { Reveal } from "@/components/Reveal";

// WHO IT'S FOR — ported from the Lovable index "04 / Who it's for" band: rail
// eyebrow + a large statement and a three-up grid of qualifying criteria, each
// a hairline-topped card. Keeps the existing #background anchor.
const CRITERIA = [
  {
    k: "Complex",
    v: "A high-value recurring workflow running on fragmented data and undocumented expertise.",
  },
  {
    k: "Large enough to feel it",
    v: "The cost of doing it manually is real, and worth paying to fix.",
  },
  {
    k: "Not equipped to build it",
    v: "Lacking the internal capability or appetite to solve it themselves.",
  },
] as const;

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
              <p className="eyebrow">04 / Who it&apos;s for</p>
            </header>

            <div className="rail-content">
              <h2 id="background-label" className="who__heading text-balance">
                Operationally complex firms, roughly $10M+ in revenue.
              </h2>
              <div className="who-grid">
                {CRITERIA.map((item) => (
                  <div key={item.k} className="who-card">
                    <p className="who-card__k">{item.k}</p>
                    <p className="who-card__v">{item.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
