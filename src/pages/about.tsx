import * as React from "react";

import Locales from "../scripts/locales";

import Subcontainer from "../components/subcontainer";

class About extends React.Component<{}, {}> {
  public render() {
    const Locale = Locales[window["APPLANG"]].about;

    return (
      <div>
        <div className="text-center">
          <div className="buffer-sm" />
          <div className="h1 slogan">{Locale.title}.</div>
          <div className="h4 subslogan">{Locale.subtitle}</div>
        </div>

        <div className="buffer-lg" />

        <Subcontainer
          subtitle={Locale.analyticslabel}
          title={Locale.analyticstitle}
          content={Locale.analyticstext}
        />

        <Subcontainer
          subtitle={Locale.datasecuritylabel}
          title={Locale.datasecuritytitle}
          content={Locale.datasecuritytext}
          align="right"
        />

        <Subcontainer
          subtitle={Locale.cookielabel}
          title={Locale.cookietitle}
          content={Locale.cookietext}
        />
      </div>
    );
  }
}

export default About;
