import * as React from "react";
import { Facebook, Instagram } from "react-feather";

interface SocialLinksProps {
  insta?: string;
  facebook?: string;
}

class SocialLinks extends React.Component<SocialLinksProps, {}> {
  public render() {
    return (
      <div>
        {this.props.insta !== undefined ? (
          <a
            href={"https://www.instagram.com/" + this.props.insta}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <Instagram size={28} />
          </a>
        ) : null}

        {this.props.facebook !== undefined ? (
          <a
            href={"https://www.facebook.com/" + this.props.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <Facebook size={28} />
          </a>
        ) : null}
      </div>
    );
  }
}

export { SocialLinks };
