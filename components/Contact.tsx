import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="section section--contact" aria-labelledby="contact-label">
      <div className="container">
        <Reveal>
          <h2 className="mono section__label" id="contact-label">004 / Contact</h2>

          <p className="display contact__closing">
            The firms that get this right won’t be the ones with the most data. They’ll be
            the ones who organized it first.
          </p>

          <p className="contact__cta-line">
            If that’s the position you want to be in, let’s talk.
          </p>
          <p className="contact__email">
            <a className="contact__link" href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </p>

          <p className="mono contact__links">
            <a href={SITE.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            {" · "}
            <a href={SITE.links.calendly} target="_blank" rel="noopener noreferrer">Calendly</a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
