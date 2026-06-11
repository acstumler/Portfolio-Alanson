import { Fragment } from "react";
import { Reveal } from "@/components/Reveal";

// WHY NOW — eyebrow + heading in the rail, two-paragraph thesis in the content
// column (display lead + body), followed by a quiet sources line. Keeps the
// existing #believe anchor, Reveal wrapper, and prose styling. Copy is em-dash
// free (commas on purpose) with curly apostrophes per house style.
const SOURCES = [
  {
    label: "McKinsey · The State of AI",
    href: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai",
  },
  {
    label: "MIT · The GenAI Divide",
    href: "https://www.artificialintelligence-news.com/wp-content/uploads/2025/08/ai_report_2025.pdf",
  },
  {
    label: "Gartner · 40% of Agentic AI Projects Canceled by 2027",
    href: "https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027",
  },
] as const;

export function Believe() {
  return (
    <section id="believe" className="section" aria-labelledby="believe-label">
      <div className="container section__inner">
        <Reveal>
          <div className="rail-grid">
            <header className="rail">
              <p className="eyebrow">02 / Why now</p>
              <h2 className="rail__heading" id="believe-label">
                AI rewards the firms that did the groundwork first.
              </h2>
            </header>

            <div className="rail-content rail-content--pad prose">
              <p className="prose__lead">
                Fragmented data and undocumented expertise have cost firms for
                years, quietly enough to live with. AI changes that. It amplifies
                whatever it&rsquo;s built on, turning an organized foundation into
                a real advantage and a disorganized one into the same problems,
                faster. The firms doing the groundwork now are the ones
                who&rsquo;ll have a head start.
              </p>
              <p>
                This is already happening. Businesses are rushing to add agentic
                workflows on top of what they have, and it often stalls, not
                because the agents can&rsquo;t do the work, but because the
                foundation underneath them was never put in order.
              </p>

              <p className="sources">
                <span className="sources__label">The research</span>
                {SOURCES.map((s, i) => (
                  <Fragment key={s.href}>
                    {i > 0 && <span className="sources__div" aria-hidden />}
                    <a
                      className="sources__link"
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {s.label}
                    </a>
                  </Fragment>
                ))}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
