import * as React from "react";

import { getImgStyle } from "../scripts/util";
import Locales from "../scripts/locales";
import Constants from "../scripts/constants";

import { FindWorkButton, MoreButton } from "../components/buttons";
import Subcontainer from "../components/subcontainer";
import { SocialLinks } from "../components/social";

//import team from "../images/team.png";
import logo from "../images/logo.png";

class Home extends React.Component<{}, {}> {
  public render() {
    const Locale = Locales[window["APPLANG"]].home;
    const XLocale = Locales[window["APPLANG"]];

    return (
      <div>
        <div className="text-center">
          <div className="buffer-sm" />
          <div className="h1 slogan">Youth-Work.</div>
          <div className="h4 subslogan">{XLocale.shortslogan}</div>

          <div className="buffer-sm" />
          <div className="quote">{XLocale.longslogan}</div>

          <div className="buffer-md" />
          <FindWorkButton />
        </div>

        <div className="buffer-lg" />
        <div className="buffer-lg" />

        <Subcontainer
          subtitle={Locale.namelabel}
          title={Locale.nametitle}
          content={Locale.nametext}
          image={
            <img
              src={logo}
              onLoad={getImgStyle}
              className="full-img"
              alt="y-work-logo"
              key="y-work-logo"
            />
          }
        />

        <div className="buffer-md" />

        <Subcontainer
          subtitle={Locale.idealabel}
          title={
            <div>
              {Locale.ideatitle} <span className="y">Y</span>-Work?
            </div>
          }
          content={Locale.ideatext}
          align="right"
        />

        <div className="buffer-md" />

        <Subcontainer
          subtitle={Locale.teamlabel}
          title={
            <div>
              {Locale.teamtitle} <span className="y">Y</span>-Work?
            </div>
          }
          content={Locale.teamtext}
          moreButton={<MoreButton to="/team" />}
          /*image={
            <img
              src={team}
              onLoad={getImgStyle}
              className="full-img"
              alt="team-image"
              key="team-image-home"
            />
          }*/
        />

        <div className="buffer-md" />

        <Subcontainer
          subtitle={Locale.sociallabel}
          title={
            <div>
              {Locale.socialtitle} <span className="y">Y</span>-Work?
            </div>
          }
          content={Locale.socialtext}
          moreButton={
            <SocialLinks
              insta={Constants.insta}
              facebook={Constants.facebook}
            />
          }
          align="right"
        />
      </div>
    );
  }
}

export default Home;
