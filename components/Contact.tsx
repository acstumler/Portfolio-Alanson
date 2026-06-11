"use client";

import { Fragment, useState, type FormEvent } from "react";
import { Reveal } from "@/components/Reveal";
import { SITE, CONTACT_FORM_ENDPOINT } from "@/lib/site";

// CONTACT — section 05. Conformed to the same rail grid as sections 02 to 04:
// the eyebrow + heading sit in the left rail, and the intro paragraphs plus the
// inquiry form fill the right content column (rail-content rail-content--pad) at
// the same width as the prose in those sections. The form POSTs to Formspree via
// the built-in fetch() (no email client dependency); a status enum drives the
// submitting / success / error states and success is only ever reported when the
// response was ok, so the entered values are never silently dropped. Copy is
// em-dash free with curly glyphs per house style.

type Status = "idle" | "submitting" | "success" | "error";

// Alternate ways to reach me, middot-separated, in the section 02 sources link
// styling (accent + underline, opens in a new tab, wraps on narrow viewports).
const ELSEWHERE = [
  { label: "Contact", href: SITE.links.contact },
  { label: "Calendly", href: SITE.links.calendly },
  { label: "LinkedIn", href: SITE.links.linkedin },
] as const;

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch(CONTACT_FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

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
              <h2 id="contact-label" className="rail__heading">
                Start with one workflow.
              </h2>
            </header>

            <div className="rail-content rail-content--pad">
              <div className="prose">
                <p className="prose__lead">
                  A workflow is something your operation runs again and again,
                  where doing it well takes judgment and getting it wrong is
                  quietly expensive. The information it needs is scattered across
                  systems, software, and spreadsheets, and the part that makes it
                  work well isn’t written down anywhere. It lives in the judgment
                  of the people who have done the job long enough to “just know.”
                </p>
                <p>
                  If one came to mind while you read that, that’s the one.
                  Describe what it is and what makes it slow, expensive, or
                  fragile today.
                </p>
              </div>

              {status === "success" ? (
                <div className="contact-received">
                  <p className="eyebrow">Received</p>
                  <p className="contact-received__title">
                    Thanks, I&apos;ll be in touch shortly.
                  </p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
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
                      placeholder="What the workflow is, and what makes it slow, expensive, or fragile today."
                    />
                  </div>

                  {/* Subject line for the inbound email, plus a honeypot: bots
                      fill hidden fields, so a non-empty _gotcha is treated as
                      spam by Formspree. Neither is shown to the user. */}
                  <input
                    type="hidden"
                    name="_subject"
                    value="New inquiry from the portfolio site"
                  />
                  <input
                    type="text"
                    name="_gotcha"
                    style={{ display: "none" }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="contact-form__foot">
                    <p className="contact-form__note">
                      Replies within 2 business days
                    </p>
                    <button
                      type="submit"
                      className="btn-solid"
                      disabled={status === "submitting"}
                    >
                      {status === "submitting" ? "Sending…" : "Send"}{" "}
                      <span aria-hidden>→</span>
                    </button>
                  </div>

                  {status === "error" && (
                    <p className="contact-form__error" role="alert">
                      That didn’t send. Please try again, or email me directly at{" "}
                      <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
                    </p>
                  )}
                </form>
              )}

              <div className="contact-meta">
                <div>
                  <p className="eyebrow">Email</p>
                  <p className="contact-meta__text">
                    <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                  </p>
                </div>
                <div>
                  <p className="eyebrow">Elsewhere</p>
                  <p className="sources contact-meta__links">
                    {ELSEWHERE.map((l, i) => (
                      <Fragment key={l.href}>
                        {i > 0 && (
                          <span className="contact-meta__dot" aria-hidden>
                            ·
                          </span>
                        )}
                        <a
                          className="sources__link"
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {l.label}
                        </a>
                      </Fragment>
                    ))}
                  </p>
                </div>
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
