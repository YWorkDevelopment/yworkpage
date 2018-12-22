import * as React from "react";
import { Instagram, Facebook } from "react-feather";

class Footer extends React.Component<{}, {}> {
  public render() {
    return (
      <footer className="footer-container">
        <div className="flexer">
          <kbd>Made with React.js :)</kbd>
          <div className="fade-text">Copyright 2018 &copy; Y-Work</div>
        </div>

        <div className="buffer-md" />

        <div className="flexer">
          <a
            href="https://www.instagram.com/ywork2018"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={28} /> Folge uns auf Instagram!
          </a>

          <a
            href="https://www.facebook.com/ywork.switzerland"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook size={28} /> Folge uns auf Facebook!
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
