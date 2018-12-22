import * as React from "react";
import { Link } from "react-router-dom";

interface NavLinkProps {
  to: string;
}

class NavLink extends React.Component<NavLinkProps, {}> {
  public render() {
    return (
      <Link
        to={this.props.to}
        className={
          "nav-link" + (location.pathname === this.props.to ? " active" : "")
        }
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
      <Link to={this.props.to} className="no-decoration">
        {this.props.children}
      </Link>
    );
  }
}

export { NavLink, ButtonLink };
