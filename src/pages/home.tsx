import * as React from "react";
import { Zap } from "react-feather";

import { FindWorkButton, MoreButton } from "../components/buttons";
import Subcontainer from "../components/subcontainer";

import logo from "../images/logo.png";

class Home extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
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
        <div className="buffer-lg" />

        <Subcontainer
          subtitle="Name"
          title="Youth-Work, Why Work?"
          content="Youth-Work wird aus dem Englischen abgeleitet und steht für die
          Arbeit, die Jugendliche bei unserer Idee leisten. Ausgesprochen
          tönt das wie: „why work?“ auf Deutsch: „warum arbeiten?“ Darauf
          können wir die Antwort liefern. Es gibt nichts Besseres, als
          Gutes zu tun und dafür noch Entlohnung zu erhalten."
          image={<img src={logo} className="full-img" />}
        />

        <div className="buffer-md" />
        <div className="buffer-sm" />

        <Subcontainer
          subtitle="Idee"
          title={
            <div>
              Was ist <span className="y">Y</span>-Work?
            </div>
          }
          content="Unsere Idee ist es, Jugendliche an Menschen zu vermitteln, die
          nicht mehr oder vorübergehend nicht im Stande sind, einfache
          alltägliche Arbeiten zu verrichten, sowie an Firmen. Die
          Jugendlichen erledigen nach erfolgter Vermittlung Aufgaben wie
          Einkaufen, Rasenmähen etc. Die Vermittlung soll mittels einer
          Smartphone App erfolgen. Die Jugendlichen erhalten für ihr
          Engagement jeweils eine angemessene Entlohnung. Zudem leistet
          die Vermittlungs-App einen Beitrag zum
          generationenübergreifenden Miteinander."
          align="right"
          image={<Zap size="100%" className="shrink" />}
        />

        <div className="buffer-md" />
        <div className="buffer-sm" />

        <Subcontainer
          subtitle="Team"
          title={
            <div>
              Wer ist <span className="y">Y</span>-Work?
            </div>
          }
          content="Wir alle sind zurzeit in der Tertia des Gymnasium Thuns und
          haben das Schwerpunktfach Wirtschaft und Recht."
          moreButton={<MoreButton to="/team" />}
          align="center"
          image={<p />}
        />
      </div>
    );
  }
}

export default Home;
