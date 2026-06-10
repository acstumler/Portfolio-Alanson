// HERO — ported from the Lovable index "01 / Thesis" band: a 12-col editorial
// grid with the eyebrow in the narrow rail and a large thesis headline (with
// italic, lighter "soft" spans) + lede + two CTAs in the content column. The
// plexus constellation lives in the page background, so the hero is type-led.
// Copy kept em-dash-free per this project's house style.
export function Hero() {
  return (
    <section id="hero" className="section" aria-label="Thesis">
      <div className="container hero__inner">
        <div className="hero__grid">
          <p className="eyebrow animate-fade-up">01 / Thesis</p>

          <div>
            <h1 className="hero__title text-balance animate-fade-up">
              AI compounds the advantage of firms whose data is already
              <span className="hero__title-soft"> unified </span>
              and whose workflows are
              <span className="hero__title-soft"> agentic</span>.
            </h1>

            <p className="hero__lede animate-fade-up">
              I&apos;m Alanson Stumler. I work with operationally complex firms to
              close that gap, one high-value workflow at a time, by capturing the
              scattered data and undocumented expertise they already run on, then
              layering agentic workflows on top.
            </p>

            <div className="hero__actions animate-fade-up">
              <a href="#do" className="btn-solid">
                See the approach <span aria-hidden>→</span>
              </a>
              <a href="#contact" className="btn-underline">
                Start a conversation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
