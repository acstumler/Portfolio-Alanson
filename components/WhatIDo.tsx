import { Reveal } from "@/components/Reveal";

const STEPS = [
  {
    n: "01",
    title: "Bring the scattered data together",
    desc: "The records that live in different systems and spreadsheets get consolidated into one organized place.",
  },
  {
    n: "02",
    title: "Surface the judgment that isn’t written down",
    desc: "The experience that drives the work, currently held in a few people’s heads, gets captured so the operation no longer depends on memory.",
  },
  {
    n: "03",
    title: "Make it visible",
    desc: "Clear reporting on data that finally agrees with itself.",
  },
  {
    n: "04",
    title: "Put AI to work on top",
    desc: "With the foundation in place, AI can actually be trusted to help run the work.",
  },
] as const;

export function WhatIDo() {
  return (
    <section id="do" className="section section--do" aria-labelledby="do-label">
      <div className="container">
        <Reveal>
          <p className="mono section__label" id="do-label">002 / What I do</p>
          <p className="do__lead">
            I work with operationally complex firms on one problem: turning information
            that’s hard to use into a foundation they can decide and compete on.
          </p>
          <ol className="do__list">
            {STEPS.map((step) => (
              <li key={step.n} className="do__item">
                <span className="mono do__num">{step.n}</span>
                <h3 className="do__title">{step.title}</h3>
                <p className="do__desc">{step.desc}</p>
              </li>
            ))}
          </ol>
          <p className="do__outcome">
            What that adds up to is a better-run operation, built on organized data and
            clear judgment instead of guesswork.
          </p>
          <p className="do__scope">
            I work with firms like this across industries, from manufacturing to logistics
            to insurance.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
