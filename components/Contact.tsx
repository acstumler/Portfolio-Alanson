import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="section section--contact" aria-labelledby="contact-label">
      <div className="container">
        <Reveal>
          <div className="section__grid">
            <header className="section__rail">
              <span className="section__num">004</span>
              <h2 className="section__name" id="contact-label">Contact</h2>
              <span className="section__rule" aria-hidden="true" />
            </header>

            <div className="section__content">
              <p className="contact__closing">
                The firms that get this right won’t be the ones with the most data. They’ll be
                the ones who organized it first.
              </p>

              <p className="contact__cta-line">
                If that’s the position you want to be in, let’s talk.
              </p>
              <p className="contact__email">
                <a className="contact__link" href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </p>

              <p className="contact__links">
                <a href={SITE.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                {" · "}
                <a href={SITE.links.calendly} target="_blank" rel="noopener noreferrer">Calendly</a>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
