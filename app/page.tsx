// Phase 1: empty, anchored section shells. Real copy lands in Phase 2,
// the visual system in Phase 3, motion in Phase 4.

const SECTIONS = [
  { id: "believe", index: "001", name: "What I believe" },
  { id: "do", index: "002", name: "What I do" },
  { id: "background", index: "003", name: "Background" },
  { id: "contact", index: "004", name: "Contact" },
] as const;

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <header className="site-header">
        <div className="container site-header__inner">
          {/* Hard rule: no em-dashes. Header spec's "AS — Louisville, KY"
              is rendered with the design's middot separator. */}
          <span className="mono">AS · Louisville, KY</span>
          <nav className="mono" aria-label="Primary">
            <a href="#believe">Believe</a>
            <a href="#do">Do</a>
            <a href="#background">Background</a>
            <a href="#contact" aria-current="true">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="hero" className="section section--hero" aria-label="Intro">
          <div className="container">
            <p className="mono">Data &amp; AI for operationally complex firms</p>
            <h1 className="display">Alanson Stumler</h1>
            {/* hero supporting paragraph, status block, node graph,
                and hero footer strip are built in Phase 2 / Phase 4 */}
          </div>
        </section>

        {SECTIONS.map(({ id, index, name }) => (
          <section key={id} id={id} className="section" aria-labelledby={`${id}-label`}>
            <div className="container">
              <p className="mono" id={`${id}-label`}>
                {index} / {name}
              </p>
              {/* content built in Phase 2 */}
            </div>
          </section>
        ))}
      </main>

      <footer className="site-footer">
        <div className="container">
          <p className="mono">© {year} Alanson Stumler</p>
        </div>
      </footer>
    </>
  );
}
