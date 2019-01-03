import * as React from "react";

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

          <img src={team} className="max-img" key="team-image" />
        </div>

        <div className="buffer-lg" />
        <div className="buffer-lg" />

        <Subcontainer
          subtitle="CEO"
          title="Jannis"
          content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
          moreButton={<SocialLinks insta="jannis.freitag" />}
          image={<img src={jannis} className="portrait" key="jannis-image" />}
        />

        <div className="buffer-md" />

        <Subcontainer
          subtitle="CFO"
          title="Alessandro"
          content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
          moreButton={<SocialLinks insta="__.iamale10.__" />}
          image={
            <img src={alessandro} className="portrait" key="alessandro-image" />
          }
          align="right"
        />

        <div className="buffer-md" />

        <Subcontainer
          subtitle="CTO"
          title="Andrea"
          content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
          moreButton={<SocialLinks insta="instaendu" />}
          image={<img src={andrea} className="portrait" key="andrea-image" />}
        />

        <div className="buffer-md" />

        <Subcontainer
          subtitle="CPO"
          title="Anriel"
          content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
          moreButton={<SocialLinks insta="anr.kie" />}
          image={<img src={anriel} className="portrait" key="anriel-image" />}
          align="right"
        />

        <div className="buffer-md" />

        <Subcontainer
          subtitle="CPO"
          title="Joshua"
          content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
          moreButton={<SocialLinks insta="jooshuaaa__" />}
          image={<img src={joshua} className="portrait" key="joshua-image" />}
        />
      </div>
    );
  }
}

export default Team;
