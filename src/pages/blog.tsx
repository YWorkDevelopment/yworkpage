import * as React from "react";

import { getImgStyle } from "../scripts/util";

import Subcontainer from "../components/subcontainer";
import { SocialLinks } from "../components/social";

import logo from "../images/logo.png";
import investorenanlass from "../images/investorenanlass.jpg";

class Blog extends React.Component<{}, {}> {
  public render() {
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
          subtitle="27. Oktober 2018"
          title="Investorenanlass"
          content="Der Investorenanlass war ein voller Erfolg! Danke an alle, die in uns
          investiert haben! Wir können nun endlich mit der Entwicklung unseres
          Produkts anfangen."
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
          subtitle="Der Y-Blog"
          title={
            <div>
              Was ist der <span className="y">Y</span>-Blog?
            </div>
          }
          content="Im Y-Blog erfährst du als Erstes die neuesten Sachen und spannende
          Neuheiten bei Y-Work. Wenn du bei einer Neuigkeit benachrichtigt
          werden willst, dann folge uns auf Instagram und Facebook!"
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
