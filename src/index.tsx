import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";

// Main Style
import "./styles/main.css";

// Page Styles
import "./styles/pages/about.css";
import "./styles/pages/contact.css";
import "./styles/pages/events.css";
import "./styles/pages/home.css";
import "./styles/pages/team.css";

// Component Styles
import "./styles/components/buttons.css";
import "./styles/components/footer.css";
import "./styles/components/links.css";
import "./styles/components/navbar.css";
import "./styles/components/subcontainer.css";

import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
registerServiceWorker();
