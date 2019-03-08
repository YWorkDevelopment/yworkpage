import * as React from "react";

import { getImgStyle } from "../scripts/util";
import Locales from "../scripts/locales";
import Constants from "../scripts/constants";

import { FindWorkButton, MoreButton } from "../components/buttons";
import Subcontainer from "../components/subcontainer";
import { SocialLinks } from "../components/social";

import logo from "../images/logo.png";

import schaffaeundprofitierae from "../images/schaffaeundprofitierae.svg";
import whyworkwhynot from "../images/whyworkwhynot.svg";
import yourwaytowork from "../images/yourwaytowork.svg";
import followus from "../images/followus.svg";

class Home extends React.Component<{}, {}> {
  public render() {
    const Locale = Locales[window["APPLANG"]].home;
    const XLocale = Locales[window["APPLANG"]];

    return (
      <div>
        <div className="text-center">
          <div className="buffer-sm" />
          <div className="h1 slogan">Y-Work.</div>
          <div className="h4 subslogan">{XLocale.shortslogan}</div>

          <div className="buffer-sm" />
          <div className="quote">{XLocale.longslogan}</div>

          <div className="buffer-md" />
          <FindWorkButton />
        </div>

        <img
          src={schaffaeundprofitierae}
          className="full-img svg bgbubble"
          alt="schaffaeundprofitierae"
          key="schaffaeundprofitierae"
        />

        <div className="buffer-lg" />
        <div className="buffer-lg" />

        <Subcontainer
          subtitle={Locale.namelabel}
          title={Locale.nametitle}
          content={Locale.nametext}
          image={
            <img
              src={whyworkwhynot}
              onLoad={getImgStyle}
              className="full-img svg"
              alt="whyworkwhynot"
              key="whyworkwhynot"
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
          image={
            <img
              src={yourwaytowork}
              onLoad={getImgStyle}
              className="full-img svg"
              alt="yourwaytowork"
              key="yourwaytowork"
            />
          }
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
          image={
            <img
              src={logo}
              onLoad={getImgStyle}
              className="full-img top-dist"
              alt="y-work-logo"
              key="y-work-logo"
            />
          }
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
          image={
            <img
              src={followus}
              onLoad={getImgStyle}
              className="full-img svg"
              alt="followus"
              key="followus"
            />
          }
        />
      </div>
    );
  }
}

export default Home;
