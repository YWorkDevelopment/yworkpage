import * as React from "react";
import { Link } from "react-router-dom";

interface NavLinkProps {
  to: string;
}

class NavLink extends React.Component<NavLinkProps, {}> {
  public render() {
    return (
      <Link to={this.props.to} className="nav-link">
        {this.props.children}
      </Link>
    );
  }
}

export { NavLink };
