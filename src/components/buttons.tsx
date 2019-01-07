import * as React from "react";

import { ButtonLink } from "./links";

class FindWorkButton extends React.Component<{}, {}> {
  public render() {
    return (
      <ButtonLink to="/kontakt">
        <button className="button button-red">
          Arbeit finden oder anbieten
        </button>
      </ButtonLink>
    );
  }
}

interface MoreButtonProps {
  to: string;
}

class MoreButton extends React.Component<MoreButtonProps, {}> {
  public render() {
    return <LinkButton to={this.props.to}>Mehr</LinkButton>;
  }
}

interface LinkButtonProps {
  to: string;
}

class LinkButton extends React.Component<LinkButtonProps, {}> {
  public render() {
    return (
      <ButtonLink to={this.props.to}>
        <button className="button button-red">{this.props.children}</button>
      </ButtonLink>
    );
  }
}

export { FindWorkButton, MoreButton, LinkButton };
