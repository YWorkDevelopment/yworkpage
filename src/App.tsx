import * as React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import NavBar from "./components/navbar";
import Footer from "./components/footer";

import Home from "./pages/home";
import Events from "./pages/events";
import Team from "./pages/team";
import Contact from "./pages/contact";
import About from "./pages/about";
import _404 from "./pages/404";

class App extends React.Component<{}, {}> {
  public render() {
    return (
      <Router>
        <div>
          <NavBar />

          <div className="buffer-xlg" />

          <div className="router-switch paddinger">
            <Switch>
              <Route path="/" render={() => <Home />} exact={true} />
              <Route path="/events" render={() => <Events />} />
              <Route path="/team" render={() => <Team />} />
              <Route path="/kontakt" render={() => <Contact />} />
              <Route path="/impressum" render={() => <About />} />
              <Route render={() => <_404 />} />
            </Switch>
          </div>

          <div className="buffer-xlg" />

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
