import * as React from "react";

import Subcontainer from "../components/subcontainer";

class About extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        <div className="text-center">
          <div className="buffer-sm" />
          <div className="h1 slogan">Impressum und Datenschutz.</div>
          <div className="h4 subslogan">
            Beim Verwenden der Seite stimmen Sie den Geschäftsbedingungen von
            Y-Work und Google Analytics zu.
          </div>
        </div>

        <div className="buffer-lg" />

        <Subcontainer
          subtitle="Analytics"
          title="Google Analytics"
          content='Diese Seite verwendet Google Analytics, einen Webanalysedienst der
          Google Inc. ("Google"). Google Analytics verwendet sogenannte
          "Cookies", dies sind kurze Textstücke, die Informationen über den
          Client beinhalten und welche zum Server verschickt und dort
          verarbeitet werden. Die Cookies dienen dazu, dass Google Analytics
          verschiedene Clients voneinander unterscheiden und detaillierte
          Statistiken über die Seitenaktivität der Benutzer liefern kann. Y-Work
          gibt diese Daten nicht an Dritte (ausgenommen Google Analytics) weiter und behandelt sie mit grosser
          Sorgfalt, sie dienen ausschliesslich zu Marketingzwecken und zur
          Produktentwicklung.'
        />

        <Subcontainer
          subtitle="Datenschutz"
          title="Datenschutz"
          content="Y-Work behandelt alle gesammelten Daten mit grosser Sorgfalt und gibt
          diese nicht an Dritte (ausgenommen Google Analytics) weiter, zudem werden alle Daten anonym (nur
          selten mit vollständiger IP-Adresse) gespeichert."
          align="right"
        />

        <Subcontainer
          subtitle="Cookies"
          title="Cookie-Richtlinien"
          content="Cookies sind kurze Textstücke, die Informationen über den Client
          beinhalten und welche zum Server verschickt und dort verarbeitet
          werden. Die auf dieser Seite verwendeten Cookies beinhalten anonyme
          Daten zur Identifikation des Benutzer um sein Seitenverhalten zu
          analysieren. Indem der Nutzer diese Website nach dem Einblenden des
          Cookie-Banners aktiv weiter nutzt, willigt er in die Verwendung von
          Cookies ein."
        />
      </div>
    );
  }
}

export default About;
