import * as React from "react";

import { ButtonLink } from "./links";

import Locales from "../scripts/locales";

class FindWorkButton extends React.Component<{}, {}> {
  public render() {
    const Locale = Locales[window["APPLANG"]];
    return (
      <ButtonLink to="/kontakt">
        <button className="button button-red">{Locale.findwork}</button>
      </ButtonLink>
    );
  }
}

interface MoreButtonProps {
  to: string;
}

class MoreButton extends React.Component<MoreButtonProps, {}> {
  public render() {
    const Locale = Locales[window["APPLANG"]];
    return <LinkButton to={this.props.to}>{Locale.more}</LinkButton>;
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
