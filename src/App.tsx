import * as React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import NavBar from "./components/navbar";
import Footer from "./components/footer";

import Home from "./pages/home";
import Blog from "./pages/blog";
import Team from "./pages/team";
import Contact from "./pages/contact";
import About from "./pages/about";
import _404 from "./pages/404";

class App extends React.Component<{}, {}> {
  public componentWillMount() {
    window.onresize = () => this.forceUpdate();
  }

  public render() {
    return (
      <Router>
        <div>
          <NavBar />

          <div className="buffer-xlg" />

          <div className="router-switch paddinger">
            <Switch>
              {/* Home */}
              <Route path="/" component={Home} exact={true} />

              {/* Blog */}
              <Route path="/blog" component={Blog} />

              {/* Team */}
              <Route path="/team" component={Team} />

              {/* Contact */}
              <Route path="/kontakt" component={Contact} />

              {/* About */}
              <Route path="/impressum" component={About} />

              {/* Not Found! */}
              <Route component={_404} />
            </Switch>
          </div>

          <div className="buffer-lg" />
          <div className="buffer-lg" />
          {window.innerWidth > 768 ? <div className="buffer-lg" /> : null}

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
