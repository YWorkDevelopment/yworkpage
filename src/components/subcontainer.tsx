import * as React from "react";

interface Props {
  subtitle: string;
  title: string | JSX.Element;
  content: string;
  align?: "left" | "right";
  moreButton?: JSX.Element;
}

class Subcontainer extends React.Component<Props, {}> {
  public render() {
    const isRight = this.props.align === "right";

    return (
      <div
        className={
          "sub-container flexer " + (isRight ? "text-right" : "text-left")
        }
      >
        <div className="row full-width">
          {isRight ? <div className="col-md-4" /> : null}

          <div className="col-md-8">
            <div className="small-title">{this.props.subtitle}</div>

            <div className="large-title">{this.props.title}</div>

            <blockquote>{this.props.content}</blockquote>
            {this.props.moreButton}
          </div>

          {!isRight ? <div className="col-md-4" /> : null}
        </div>
      </div>
    );
  }
}

export default Subcontainer;
