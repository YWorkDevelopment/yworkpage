import * as React from "react";
import disableScroll from "disable-scroll";

import { NavLink } from "./links";

import logo from "../images/logo.png";

class NavBarLg extends React.Component<{}, {}> {
  public render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top navbar-shadow">
        <div className="flexer">
          <div className="navbar-brand bold">
            <img src={logo} width="32px" className="d-inline-block align-top" />
          </div>

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
      </nav>
    );
  }
}

interface NavBarSmState {
  isOpen: boolean;
}

class NavBarSm extends React.Component<{}, NavBarSmState> {
  state: NavBarSmState = {
    isOpen: false
  };

  public closeMenu() {
    this.setState({ isOpen: false });
  }

  public render() {
    if (this.state.isOpen) {
      disableScroll.on();
    } else {
      disableScroll.off();
    }

    return (
      <nav
        className={
          "navbar navbar-expand-md navbar-light bg-light fixed-top navbar-shadow" +
          (this.state.isOpen ? " navbar-disable-shadow" : "")
        }
      >
        <div className="flexer">
          <div className="navbar-brand bold">
            <img src={logo} width="32px" className="d-inline-block align-top" />
          </div>

          <div className="menu-arrow">
            <div
              className={"menu-wrap" + (this.state.isOpen ? " expanded" : "")}
              onClick={() => this.setState({ isOpen: !this.state.isOpen })}
            >
              <div className="menu-line" />
              <div className="menu-line" />
            </div>
          </div>
        </div>

        <div
          className={"menu-links" + (this.state.isOpen ? "" : " menu-closed")}
        >
          <ul className="navbar-nav">
            <li className="nav-item" onClick={this.closeMenu.bind(this)}>
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="nav-item" onClick={this.closeMenu.bind(this)}>
              <NavLink to="/events">Events</NavLink>
            </li>
            <li className="nav-item" onClick={this.closeMenu.bind(this)}>
              <NavLink to="/team">Team</NavLink>
            </li>
          </ul>

          <hr />

          <ul className="navbar-nav">
            <li className="nav-item" onClick={this.closeMenu.bind(this)}>
              <NavLink to="/kontakt">Kontakt</NavLink>
            </li>

            <li className="nav-item" onClick={this.closeMenu.bind(this)}>
              <NavLink to="/impressum">Impressum</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
/*
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
*/

class NavBar extends React.Component<{}, {}> {
  public render() {
    return window.innerWidth > 768 ? <NavBarLg /> : <NavBarSm />;
  }
}

export default NavBar;
