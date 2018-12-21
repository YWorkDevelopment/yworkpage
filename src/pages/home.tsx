import * as React from "react";

import { FindWorkButton, MoreButton } from "../components/buttons";

class Home extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="paddinger">
        <div className="text-center">
          <div className="buffer-sm" />
          <div className="h1 slogan">Youth-Work.</div>
          <div className="h4 subslogan">Schaffä u profitierä!</div>

          <div className="buffer-sm" />
          <div className="quote">
            — Eine Unternehmung, die Jugendliche mit wenig Arbeit reich
            macht🛠💵💰 Zumindest fast...😎
          </div>

          <div className="buffer-md" />
          <FindWorkButton />
        </div>

        <div className="buffer-lg" />

        <div className="sub-container flexer">
          <div className="row full-width">
            <div className="col-md-8">
              <div className="small-title">Name</div>

              <div className="large-title">Youth-Work, Why Work?</div>

              <blockquote>
                Youth-Work wird aus dem Englischen abgeleitet und steht für die
                Arbeit, die Jugendliche bei unserer Idee leisten. Ausgesprochen
                tönt das wie: „why work?“ auf Deutsch: „warum arbeiten?“ Darauf
                können wir die Antwort liefern. Es gibt nichts Besseres, als
                Gutes zu tun und dafür noch Entlohnung zu erhalten.
              </blockquote>
            </div>

            <div className="col-md-4" />
          </div>
        </div>

        <div className="buffer-sm" />

        <div className="sub-container flexer text-right">
          <div className="row full-width">
            <div className="col-md-4" />

            <div className="col-md-8">
              <div className="small-title">Idee</div>

              <div className="large-title">
                Was ist <span className="y">Y</span>-Work?
              </div>

              <blockquote>
                Unsere Idee ist es, Jugendliche an Menschen zu vermitteln, die
                nicht mehr oder vorübergehend nicht im Stande sind, einfache
                alltägliche Arbeiten zu verrichten, sowie an Firmen. Die
                Jugendlichen erledigen nach erfolgter Vermittlung Aufgaben wie
                Einkaufen, Rasenmähen etc. Die Vermittlung soll mittels einer
                Smartphone App erfolgen. Die Jugendlichen erhalten für ihr
                Engagement jeweils eine angemessene Entlohnung. Zudem leistet
                die Vermittlungs-App einen Beitrag zum
                generationenübergreifenden Miteinander.
              </blockquote>
            </div>
          </div>
        </div>

        <div className="buffer-sm" />

        <div className="sub-container flexer">
          <div className="row full-width">
            <div className="col-md-8">
              <div className="small-title">Team</div>

              <div className="large-title">
                Wer ist <span className="y">Y</span>-Work?
              </div>

              <blockquote>
                Wir alle sind zurzeit in der Tertia des Gymnasium Thuns und
                haben das Schwerpunktfach Wirtschaft und Recht.
              </blockquote>
              <MoreButton />
            </div>

            <div className="col-md-4" />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
