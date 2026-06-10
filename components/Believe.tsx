import { Reveal } from "@/components/Reveal";

export function Believe() {
  return (
    <section id="believe" className="section section--believe" aria-labelledby="believe-label">
      <div className="container">
        <Reveal>
          <div className="section__grid">
            <header className="section__rail">
              <span className="section__num">001</span>
              <h2 className="section__name" id="believe-label">What I believe</h2>
              <span className="section__rule" aria-hidden="true" />
            </header>

            <div className="section__content believe__body">
              <p>
                For most operationally complex businesses, the information that runs their
                most important work is scattered across disconnected systems, and the
                judgment that actually drives it lives in the heads of a few experienced
                people. That has always been inefficient. It was survivable.
              </p>
              <p>
                AI is what changes the math. Firms whose data is organized and ready pull
                further ahead as the tools improve. The ones still running on fragments and
                memory don’t, and the gap tends to widen quietly, until it’s too wide to
                close. <em>You can’t put AI on top of scattered data and get answers you can
                trust.</em> The data has to be made ready first.
              </p>
              <p>
                I think getting there is the real work of the next few years for these
                firms, and it’s the work most of them are least equipped to do on their own.
                That’s where I come in.
              </p>
              <p className="believe__sign">Alanson Stumler</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
