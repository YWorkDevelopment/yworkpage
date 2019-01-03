import * as React from "react";

import { NavLink } from "./links";

import logo from "../images/logo.png";

class FlexFix extends React.Component<{}, {}> {
  public render() {
    return window.innerWidth < 768 ? (
      this.props.children
    ) : (
      <div className="flexer">{this.props.children}</div>
    );
  }
}

class NavBar extends React.Component<{}, {}> {
  public render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top navbar-shadow">
        <FlexFix>
          <div className="navbar-brand bold">
            <img src={logo} width="32px" className="d-inline-block align-top" />
          </div>

          <div className="text-right">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
          </div>

          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/events">Events</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/team">Team</NavLink>
              </li>
            </ul>

            <ul className="navbar-nav float-right">
              <li className="nav-item">
                <NavLink to="/kontakt">Kontakt</NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/impressum">Impressum</NavLink>
              </li>
            </ul>
          </div>
        </FlexFix>
      </nav>
    );
  }
}

export default NavBar;
