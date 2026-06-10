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
              The firms that win the next decade won’t be the ones
              <span className="hero__title-soft"> buried </span>
              in data. They’ll be the ones that
              <span className="hero__title-soft"> organized </span>
              it first.
            </h1>

            <p className="hero__lede animate-fade-up">
              I’m Alanson Stumler. I work with operationally complex firms to
              close that gap, focusing on a single high-value workflow, by
              capturing the fragmented data, undocumented expertise, and
              processes they already run on, then building agentic workflows on
              that foundation.
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
