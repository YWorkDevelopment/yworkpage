import * as React from "react";
import disableScroll from "disable-scroll";

import { NavLink } from "./links";

import Locales from "../scripts/locales";

import logo from "../images/logo.png";

class NavBarLg extends React.Component<{}, {}> {
  public render() {
    const Locale = Locales[window["APPLANG"]].navbar;

    return (
      <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top navbar-shadow">
        <div className="flexer">
          <div className="navbar-brand bold">
            <img src={logo} width="32px" className="d-inline-block align-top" />
          </div>

          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to="/">{Locale.home}</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/blog">{Locale.blog}</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/team">{Locale.team}</NavLink>
            </li>
          </ul>

          <ul className="navbar-nav float-right">
            <li className="nav-item">
              <NavLink to="/kontakt">{Locale.contact}</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/impressum">{Locale.about}</NavLink>
            </li>

            <li className="nav-item">
              <NavLink selector={true}>
                <span
                  className={
                    "pointer lang-option" +
                    (window["APPLANG"] == "DE" ? " lang" : "")
                  }
                  onClick={() => setLang("DE")}
                >
                  DE
                </span>{" "}
                I{" "}
                <span
                  className={
                    "pointer lang-option" +
                    (window["APPLANG"] == "FR" ? " lang" : "")
                  }
                  onClick={() => setLang("FR")}
                >
                  FR
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

function setLang(lang: "DE" | "FR") {
  localStorage.APPLANG = lang;
  window["SETAPPLANG"](lang);
  window["APPCOMPONENT"].forceUpdate();
  if (location.pathname === "/kontakt") {
    location.reload();
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

    const Locale = Locales[window["APPLANG"]].navbar;

    return (
      <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top navbar-shadow">
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
          <ul className="navbar-nav navbar-sm-nav">
            <li className="nav-item" onClick={this.closeMenu.bind(this)}>
              <NavLink to="/">{Locale.home}</NavLink>
            </li>
            <li className="nav-item" onClick={this.closeMenu.bind(this)}>
              <NavLink to="/blog">{Locale.blog}</NavLink>
            </li>
            <li className="nav-item" onClick={this.closeMenu.bind(this)}>
              <NavLink to="/team">{Locale.team}</NavLink>
            </li>
          </ul>

          <hr />

          <ul className="navbar-nav navbar-sm-nav">
            <li className="nav-item" onClick={this.closeMenu.bind(this)}>
              <NavLink to="/kontakt">{Locale.contact}</NavLink>
            </li>

            <li className="nav-item" onClick={this.closeMenu.bind(this)}>
              <NavLink to="/impressum">{Locale.about}</NavLink>
            </li>

            <li className="nav-item" onClick={this.closeMenu.bind(this)}>
              <NavLink selector={true}>
                <span
                  className={
                    "pointer lang-option" +
                    (window["APPLANG"] == "DE" ? " lang" : "")
                  }
                  onClick={() => setLang("DE")}
                >
                  DE
                </span>{" "}
                I{" "}
                <span
                  className={
                    "pointer lang-option" +
                    (window["APPLANG"] == "FR" ? " lang" : "")
                  }
                  onClick={() => setLang("FR")}
                >
                  FR
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

class NavBar extends React.Component<{}, {}> {
  public render() {
    return window.innerWidth > 768 ? <NavBarLg /> : <NavBarSm />;
  }
}

export default NavBar;
