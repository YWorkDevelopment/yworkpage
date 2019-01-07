import * as React from "react";
import Subcontainer from "../components/subcontainer";
import { SocialLinks } from "../components/social";

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
              className="full-img buffer-img"
              alt="investorenanlass-img"
              key="investor-image-27102018"
            />
          }
          moreButton={<SocialLinks insta="p/BpbrYZtlwIW/" />}
        />
      </div>
    );
  }
}

export default Blog;
