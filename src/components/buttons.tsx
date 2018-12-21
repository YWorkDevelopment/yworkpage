import * as React from "react";

class FindWorkButton extends React.Component<{}, {}> {
  public render() {
    return <button className="button button-red">Arbeit finden</button>;
  }
}

class MoreButton extends React.Component<{}, {}> {
  public render() {
    return <button className="button button-red">Mehr</button>;
  }
}

export { FindWorkButton, MoreButton };
