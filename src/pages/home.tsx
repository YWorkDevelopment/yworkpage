import * as React from "react";

import { FindWorkButton, MoreButton } from "../components/buttons";
import Subcontainer from "../components/subcontainer";
import { SocialLinks } from "../components/social";

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
          image={<img src={logo} className="full-img" key="y-work-logo" />}
        />

        <div className="buffer-md" />

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
        />

        <div className="buffer-md" />

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
          align="left"
        />

        <Subcontainer
          subtitle="Social"
          title={
            <div>
              Wo ist <span className="y">Y</span>-Work?
            </div>
          }
          content="Wir haben Social Media Kanäle auf Instagram (@ywork2018) und Facebook (ywork.switzerland), wo wir dich ständig auf dem Laufenden halten. Schau doch mal vorbei!"
          moreButton={
            <SocialLinks insta="ywork2018" facebook="ywork.switzerland" />
          }
          align="right"
        />
      </div>
    );
  }
}

export default Home;
