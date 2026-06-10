import { Reveal } from "@/components/Reveal";
import { SITE } from "@/lib/site";

const EXPERIENCE = [
  {
    date: "2025",
    role: "Founder, LumiLedger",
    desc: "Financial-reporting software for small businesses.",
    brochure: SITE.links.lumiledgerBrochure,
  },
  {
    date: "Mar 2020 to Feb 2025",
    role: "Cerity Partners, ARGI Financial Group",
    desc: "Tax, accounting, and retirement plan advisory.",
  },
  {
    date: "Jan 2017 to Mar 2020",
    role: "Tax & Accounting Staff, Freibert CPA Group",
    desc: "Returns, reconciliations, and financial records.",
  },
] as const;

const SKILLS = [
  "Data Strategy",
  "Data Analysis",
  "Artificial Intelligence (AI)",
  "Business Strategy & Operations",
  "Accounting & Finance",
  "Financial Reporting & Forecasting",
  "Software & Product Thinking",
] as const;

const PROOF = [
  "7+ years in tax and advisory",
  "Accounting and finance background",
  "Bellarmine University, MBA 2019",
  "B.A. of Accountancy 2018",
] as const;

export function Background() {
  return (
    <section id="background" className="section section--background" aria-labelledby="background-label">
      <div className="container">
        <Reveal>
          <div className="section__grid">
            <header className="section__rail">
              <span className="section__num">003</span>
              <h2 className="section__name" id="background-label">Background</h2>
              <span className="section__rule" aria-hidden="true" />
            </header>

            <div className="section__content section__content--wide">
              <div className="bg__grid">
                <div className="bg__col bg__col--experience">
                  <h3 className="bg__col-head">Experience</h3>
                  <ul className="bg__list">
                    {EXPERIENCE.map((entry) => (
                      <li key={entry.role} className="bg__entry">
                        <p className="bg__date">{entry.date}</p>
                        <p className="bg__role">{entry.role}</p>
                        <p className="bg__desc">
                          {entry.desc}
                          {"brochure" in entry ? (
                            <>
                              {" "}
                              <a
                                className="bg__brochure"
                                href={entry.brochure}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                LumiLedger Brochure ↗
                              </a>
                            </>
                          ) : null}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg__col bg__col--skills">
                  <h3 className="bg__col-head">Skills</h3>
                  <ul className="bg__skills">
                    {SKILLS.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg__col bg__col--proof">
                  <h3 className="bg__col-head">Proof</h3>
                  <ul className="bg__proof">
                    {PROOF.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  {/* Room for a first client or result here later. Do not manufacture metrics. */}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
