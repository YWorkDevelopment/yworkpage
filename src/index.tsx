import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";

// Main Style
import "./styles/main.css";

// Page Styles
import "./styles/pages/home.css";

// Component Styles
import "./styles/components/buttons.css";
import "./styles/components/footer.css";
import "./styles/components/navbar.css";

import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
registerServiceWorker();
