import * as React from "react";

import { getImgStyle } from "../scripts/util";
import Locales from "../scripts/locales";

import Subcontainer from "../components/subcontainer";
import { SocialLinks } from "../components/social";

import logo from "../images/logo.png";
import investorenanlass from "../images/blog/investorenanlass.jpg";
import yescoaching from "../images/blog/yescoaching.jpeg";

class Blog extends React.Component<{}, {}> {
  public render() {
    const Locale = Locales[window["APPLANG"]].blog;

    return (
      <div>
        <div className="text-center">
          <div className="buffer-sm" />
          <div className="h1 slogan">
            <span className="y">Y</span>-Blog.
          </div>
        </div>

        <div className="buffer-lg" />

        <Subcontainer
          subtitle={Locale[2].date}
          title={Locale[2].title}
          content={Locale[2].text}
          image={
            <img
              src={yescoaching}
              onLoad={getImgStyle}
              className="full-img buffer-img"
              alt="yescoaching-img"
              key="yescoaching-image-19012019"
            />
          }
          align="right"
          moreButton={<SocialLinks insta="p/BtOVJfLFTgf/" />}
        />

        <div className="buffer-lg" />
        <div className="buffer-md" />

        <Subcontainer
          subtitle={Locale[1].date}
          title={Locale[1].title}
          content={Locale[1].text}
          image={
            <img
              src={investorenanlass}
              onLoad={getImgStyle}
              className="full-img buffer-img"
              alt="investorenanlass-img"
              key="investor-image-27102018"
            />
          }
          moreButton={<SocialLinks insta="p/BpbrYZtlwIW/" />}
        />

        <div className="buffer-lg" />
        <div className="buffer-md" />

        <Subcontainer
          subtitle={Locale[0].date}
          title={
            <div>
              {Locale[0].title} <span className="y">Y</span>-Blog?
            </div>
          }
          content={Locale[0].text}
          image={
            <img
              src={logo}
              onLoad={getImgStyle}
              className="full-img"
              alt="y-work-logo"
              key="y-work-logo"
            />
          }
          moreButton={
            <SocialLinks insta="ywork2018" facebook="ywork.switzerland" />
          }
          align="right"
        />
      </div>
    );
  }
}

export default Blog;
