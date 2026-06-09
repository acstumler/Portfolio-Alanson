import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <section id="hero" className="hero" aria-label="Intro">
      <div className="container hero__inner">
        <p className="mono hero__kicker">Data &amp; AI for operationally complex firms</p>

        <h1 className="display hero__name">
          <span>Alanson</span>
          <span>Stumler</span>
        </h1>

        <div className="hero__lower">
          <p className="hero__lede">
            Organized data is becoming the line between the firms that keep up and the
            ones that pull ahead. I help complex businesses get on the right side of it.
          </p>

          <div className="mono hero__status">
            <p className="hero__status-line">
              <span className="hero__dot" aria-hidden="true">●</span> Open to new work
            </p>
            <a className="hero__contact-link" href="#contact">Get in touch ↗</a>
          </div>
        </div>

        {/* Node-graph motif (scattered → organized). Built in Phase 3, animated in Phase 4. */}
        <div className="hero__nodegraph" aria-hidden="true" />

        <div className="mono hero__footer">
          <a className="hero__footer-item" href="#believe">↓ What I believe</a>
          <span className="hero__footer-item">scattered → organized</span>
          <span className="hero__footer-item hero__links">
            <a href={SITE.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            {" · "}
            <a href={SITE.links.calendly} target="_blank" rel="noopener noreferrer">Calendly</a>
          </span>
        </div>
      </div>
    </section>
  );
}
