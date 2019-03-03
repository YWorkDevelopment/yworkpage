import * as React from "react";

import { getImgStyle } from "../scripts/util";
import Locales from "../scripts/locales";

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
    const Locale = Locales[window["APPLANG"]].team;

    return (
      <div>
        <div className="text-center">
          <div className="buffer-sm" />
          <div className="h1 slogan">
            {Locale.title.prefix} <span className="y">Y</span>-Work
            {Locale.title.suffix}.
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
          content={Locale.jannis}
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
          content={Locale.alessandro}
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
          content={Locale.anriel}
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
          content={Locale.andrea}
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
          content={Locale.joshua}
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
