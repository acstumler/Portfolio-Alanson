import { SITE } from "@/lib/site";
import { NetworkWeb } from "@/components/NetworkWeb";

export function Hero() {
  return (
    <section id="hero" className="hero" aria-label="Intro">
      <div className="container hero__inner">
        <p className="hero__kicker">Data &amp; AI for operationally complex firms</p>

        <div className="hero__main">
          <div className="hero__lead">
            <h1 className="hero__name">
              <span>Alanson</span>
              <span>Stumler</span>
            </h1>
            <p className="hero__lede">
              Organized data is becoming the line between the firms that keep up and the
              ones that pull ahead. I help complex businesses get on the right side of it.
            </p>
          </div>

          <div className="hero__aside">
            <div className="hero__status">
              <p className="hero__status-line">
                <span className="hero__dot" aria-hidden="true">●</span> Open to new work
              </p>
              <a className="hero__contact-link" href={`mailto:${SITE.email}`}>Get in touch ↗</a>
            </div>

            {/* Network web (scattered into organized). The hero's only graphic. */}
            <div className="hero__web" aria-hidden="true">
              <NetworkWeb />
            </div>
          </div>
        </div>

        <div className="hero__footer">
          <a className="hero__footer-item" href="#believe">↓ What I believe</a>
          <span className="hero__footer-item hero__footer-mid">scattered into organized</span>
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
