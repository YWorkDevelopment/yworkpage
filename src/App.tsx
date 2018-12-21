import * as React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import NavBar from "./components/navbar";
import Footer from "./components/footer";

import Home from "./pages/home";

class App extends React.Component<{}, {}> {
  public render() {
    return (
      <Router>
        <div>
          <NavBar />

          <div className="buffer-xlg" />

          <div className="router-switch">
            <Switch>
              <Route path="/" render={() => <Home />} />
              {/* ELSE <Route component={_404} /> */}
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
