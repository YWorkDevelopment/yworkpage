import * as React from "react";

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
                <a className="nav-link">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Events</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Team</a>
              </li>
            </ul>

            <ul className="navbar-nav float-right">
              <li className="nav-item">
                <a className="nav-link">Kontakt</a>
              </li>

              <li className="nav-item">
                <a className="nav-link">Impressum</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
