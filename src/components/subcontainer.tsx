import * as React from "react";

interface Props {
  subtitle: string;
  title: string | JSX.Element;
  content: string;
  image?: JSX.Element;
  align?: "left" | "right" | "center";
  moreButton?: JSX.Element;
}

class Subcontainer extends React.Component<Props, {}> {
  public render() {
    const isRight = this.props.align === "right";
    const isCenter = this.props.align === "center";
    const isSize = window.innerWidth < 768;

    const imageCol = (
      <div className="col-md-4 text-center low-index">{this.props.image}</div>
    );

    const content = (
      <div className="col-md-8">
        <div className="small-title">{this.props.subtitle}</div>

        <div className="large-title">{this.props.title}</div>

        <blockquote>{this.props.content}</blockquote>
        {this.props.moreButton}
      </div>
    );

    return (
      <div
        className={
          "sub-container flexer " +
          (isRight ? "text-right" : isCenter ? "text-center" : "text-left")
        }
      >
        <div className="row full-width">
          {isRight && !isSize ? imageCol : null}
          {isCenter ? <div className="col-md-2" /> : null}

          {content}

          {isCenter ? <div className="col-md-2" /> : null}
          {!isRight || isSize ? imageCol : null}
        </div>
      </div>
    );
  }
}

export default Subcontainer;
