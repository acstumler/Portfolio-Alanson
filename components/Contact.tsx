"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/site";

// CONTACT — ported from the Lovable /contact page composition, folded into the
// single-page index as the closing band: rail eyebrow + heading + lede, then a
// two-column layout of contact facts and the inquiry form. The form mirrors
// Lovable's behaviour (local submitted state, no backend). Real email/links come
// from SITE so contact details stay correct. Copy kept em-dash-free.
export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="contact"
      className="section section--last"
      aria-labelledby="contact-label"
    >
      <div className="container section__inner">
        <Reveal>
          <div className="rail-grid">
            <header className="rail">
              <p className="eyebrow">05 / Contact</p>
            </header>

            <div className="rail-content">
              <h2 id="contact-label" className="contact__heading text-balance">
                Tell me about the workflow.
              </h2>
              <p className="contact__lede">
                The best conversations start with one specific, high-value,
                recurring workflow that runs on scattered data and judgment that
                was never written down.
              </p>

              <div className="contact-grid">
                <div className="contact-info">
                  <div>
                    <p className="eyebrow">Email</p>
                    <a
                      className="contact-info__value"
                      href={`mailto:${SITE.email}`}
                    >
                      {SITE.email}
                    </a>
                  </div>
                  <div>
                    <p className="eyebrow">Response</p>
                    <p className="contact-info__text">
                      Within two business days.
                    </p>
                  </div>
                  <div>
                    <p className="eyebrow">Elsewhere</p>
                    <p className="contact-info__text">
                      <a
                        href={SITE.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        LinkedIn
                      </a>
                      {" · "}
                      <a
                        href={SITE.links.calendly}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Calendly
                      </a>
                    </p>
                  </div>
                </div>

                {submitted ? (
                  <div className="contact-received">
                    <p className="eyebrow">Received</p>
                    <p className="contact-received__title">
                      Thanks, I&apos;ll be in touch shortly.
                    </p>
                  </div>
                ) : (
                  <form
                    className="contact-form"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                  >
                    <Field label="Name" name="name" required />
                    <Field label="Firm" name="firm" required />
                    <Field
                      label="Email"
                      name="email"
                      type="email"
                      required
                      full
                    />
                    <Field label="Role" name="role" full />
                    <div className="field--full">
                      <label className="eyebrow field__label" htmlFor="workflow">
                        The workflow
                      </label>
                      <textarea
                        id="workflow"
                        name="workflow"
                        rows={5}
                        required
                        className="field__textarea"
                        placeholder="Briefly: what is the recurring workflow, and what makes it expensive or fragile today?"
                      />
                    </div>
                    <div className="contact-form__foot">
                      <p className="contact-form__note">
                        Replies within 2 business days
                      </p>
                      <button type="submit" className="btn-solid">
                        Send <span aria-hidden>→</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  full,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  full?: boolean;
}) {
  return (
    <div className={full ? "field--full" : undefined}>
      <label className="eyebrow field__label" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="field__input"
      />
    </div>
  );
}
