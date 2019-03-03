import * as React from "react";
import { Link } from "react-router-dom";

interface NavLinkProps {
  to?: string;
  selector?: boolean;
}

class NavLink extends React.Component<NavLinkProps, {}> {
  public render() {
    return (
      <Link
        to={this.props.to || location.pathname}
        className={
          "nav-link" +
          (location.pathname === this.props.to ? " active" : "") +
          (this.props.selector ? " nopointer" : "")
        }
        onClick={() => window.scrollTo(0, 0)}
      >
        {this.props.children}
      </Link>
    );
  }
}

interface ButtonLinkProps {
  to: string;
}

class ButtonLink extends React.Component<ButtonLinkProps, {}> {
  public render() {
    return (
      <Link
        to={this.props.to}
        className="no-decoration"
        onClick={() => window.scrollTo(0, 0)}
      >
        {this.props.children}
      </Link>
    );
  }
}

export { NavLink, ButtonLink };
