import * as React from "react";

import { getImgStyle } from "../scripts/util";

import Subcontainer from "../components/subcontainer";
import { SocialLinks } from "../components/social";

import team from "../images/team.png";

// Portraits
import alessandro from "../images/alessandro.png";
import andrea from "../images/andrea.png";
import anriel from "../images/anriel.png";
import jannis from "../images/jannis.png";
import joshua from "../images/joshua.png";

class Team extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        <div className="text-center">
          <div className="buffer-sm" />
          <div className="h1 slogan">
            Das <span className="y">Y</span>-Work Team.
          </div>

          <div className="buffer-md" />

          <img
            src={team}
            className="max-img"
            alt="team-image"
            key="team-image"
          />
        </div>

        <div className="buffer-lg" />
        <div className="buffer-lg" />

        <Subcontainer
          subtitle="CEO"
          title="Jannis Freitag"
          content="Ich sehe im YES-Projekt die Chance einen Eindruck der realen
          Wirtschaftswelt zu bekommen, und wertvolle Erfahrungen für die Zukunft
          zu sammeln. Natürlich ist der Posten des CEOs ziemlich anspruchsvoll.
          Ich stehe im ständigen Austausch mit den verschiedenen Abteilungen
          unseres Unternehmens und muss dafür sorgen, dass alle
          Herausforderungen wunschgemäss gemeistert werden. Das kann sehr
          herausfordernd sein, aber es macht mir grossen Spass die Fäden in der
          Hand zu haben."
          moreButton={<SocialLinks insta="jannis.freitag" />}
          image={
            <img
              src={jannis}
              onLoad={getImgStyle}
              className="portrait"
              alt="jannis-portrait"
              key="jannis-image"
            />
          }
        />

        <div className="buffer-lg" />

        <Subcontainer
          subtitle="CFO & CPO"
          title="Alessandro Manca"
          content="Ich sehe im YES-Projekt die Chance einen Einblick in die
          Wirtschaftswelt zu bekommen und wertvolle Erfahrungen fürs Leben zu
          gewinnen. Der Aufgabenbereich des CFOs fordert sicherlich eine hohe
          Konzentration, daher ist es wichtig, dass ich mich voll und ganz mit
          der Aufgabe auseinandersetze, wenn ich an der Arbeit bin. Ich trage
          eine grosse Verantwortung für unsere Firma und will für diese über
          mich hinauswachsen und Alles geben."
          moreButton={<SocialLinks insta="__.iamale10.__" />}
          image={
            <img
              src={alessandro}
              onLoad={getImgStyle}
              className="portrait"
              alt="alessandro-portrait"
              key="alessandro-image"
            />
          }
          align="right"
        />

        <div className="buffer-lg" />

        <Subcontainer
          subtitle="CMO & CPO"
          title="Anriel Kiener"
          content="Ich sehe das YES-Projekt als Chance, viel Erfahrung im Bereich
          Wirtschaft zu sammeln, und daraus zu lernen. Als CMO schreibe
          ich Protokolle von Sitzungen, um das Wichtige festzuhalten. Ich
          gestalte Informationsmaterial und Werbung. Neben dem Gestalten von
          Flyern oder Werbung bin ich auch für die Marktforschung
          verantwortlich. Ich will herausfinden, was die Jugendlichen wollen,
          damit wir erfahren, welche Gutscheine wir brauchen, um unser
          Unternehmen interessant zu machen."
          moreButton={<SocialLinks insta="anr.kie" />}
          image={
            <img
              src={anriel}
              onLoad={getImgStyle}
              className="portrait"
              alt="anriel-portrait"
              key="anriel-image"
            />
          }
        />

        <div className="buffer-lg" />

        <Subcontainer
          subtitle="CTO & CPO"
          title="Andrea Gribi"
          content="Ich sehe das YES-Projekt als Vorbereitung für das zukünftige Leben.
          Deswegen will ich viele positive, aber auch zum Teil negative
          Erfahrungen sammeln, damit ich eine grobe Vorstellung bekomme, wie es
          in der Zukunft für mich aussehen könnte. Die Position des CTOs
          erfordert ein vielfältiges Allgemeinwissen in den Bereichen Technik,
          Informatik und Soziale Netzwerke. Deswegen ist es wichtig, immer auf
          dem neuesten Stand zu sein, und alle Internetplattformen immer aktuell
          zu halten. Im Zeitalter der Sozialen Netzwerke und dem Internet trägt
          der CTO eine unverzichtbare Rolle und ist heutzutage nicht mehr
          wegzudenken. Deswegen nehme ich meine Rolle im Miniunternehmen sehr
          ernst und freue mich ein Teil davon zu sein."
          moreButton={<SocialLinks insta="instaendu" />}
          image={
            <img
              src={andrea}
              onLoad={getImgStyle}
              className="portrait"
              alt="andrea-portrait"
              key="andrea-image"
            />
          }
          align="right"
        />

        <div className="buffer-lg" />

        <Subcontainer
          subtitle="CAO"
          title="Joshua Ayenew"
          content="Ich habe mich für das Projekt entschieden, weil ich schon immer sehr
          neugierig gewesen bin auf die wirtschaftliche Welt und freue mich auf
          die Erfahrungen. Es gibt sehr wenige Dienstleistungen, von der drei
          Anspruchsgruppen profitieren können. Ich finde es schön, dass wir die
          Idee gehabt haben und bin stolz darauf, ein Mitarbeiter von Y-Work zu
          sein."
          moreButton={<SocialLinks insta="jooshuaaa__" />}
          image={
            <img
              src={joshua}
              onLoad={getImgStyle}
              className="portrait"
              alt="joshua-portrait"
              key="joshua-image"
            />
          }
        />
      </div>
    );
  }
}

export default Team;
