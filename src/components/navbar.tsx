import * as React from "react";

import { NavLink } from "./links";

class NavBar extends React.Component<{}, {}> {
  public render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top navbar-shadow">
        <div className="flexer">
          <div className="navbar-brand bold">
            <span className="y">Y</span>-Work
          </div>

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
        </div>
      </nav>
    );
  }
}

export default NavBar;
