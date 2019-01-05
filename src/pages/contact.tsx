import * as React from "react";

interface State {
  invalid: boolean;
  message: string;
  status: string;
  mail: string;
}

window["onHuman"] = (captcha: string) => {
  window["captcha"] = captcha;
};

class Contact extends React.Component<{}, State> {
  state: State = {
    invalid: false,
    message: "",
    status: "Senden",
    mail: ""
  };

  public componentDidMount() {
    const reCAPTCHA: HTMLScriptElement = document.createElement("script");
    reCAPTCHA.src = "https://www.google.com/recaptcha/api.js";
    document.head.append(reCAPTCHA);
  }

  public submit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    const mail = this.state.mail;
    const captcha = window["captcha"];

    if (!this.checkEmail(mail)) return;

    if (captcha === undefined || captcha === "" || captcha === null) {
      this.setState({
        invalid: true,
        message: "Bestätigen Sie, dass Sie kein Roboter sind."
      });
      return;
    }

    fetch(`https://ywork-backend.now.sh/api`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ captcha, mail })
    })
      .then(res => res.json())
      .then(data => {
        if (data.success == false) {
          this.setState({
            invalid: true,
            message: "Versuchen Sie es später nochmals."
          });
        }
      })
      .catch(ex => {
        this.setState({
          invalid: true,
          message: "Versuchen Sie es später nochmals."
        });
      });
  }

  public checkEmail(mail: string) {
    const pattern = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const valid = pattern.test(mail);

    this.setState({
      invalid: !valid,
      message: valid
        ? this.state.message
        : "Überprüfen Sie Ihre E-Mail Adresse."
    });

    return valid;
  }

  public render() {
    return (
      <div className="text-center">
        <div className="buffer-sm" />
        <div className="h1 slogan">Arbeit finden.</div>

        <div className="buffer-lg" />

        <div className="input-container">
          <input
            type="email"
            className="contact-input form-control"
            placeholder="z.B. max@example.com"
            onBlur={(e: React.FocusEvent<HTMLInputElement>) =>
              this.checkEmail(e.target["value"])
            }
            onInput={(e: React.FormEvent<HTMLInputElement>) =>
              this.setState({ mail: e.target["value"] })
            }
            value={this.state.mail}
            spellCheck={false}
            required={true}
          />
        </div>

        <div className="buffer-md" />
        <div className="captcha-container">
          <div
            className="g-recaptcha"
            data-sitekey="6LeYlYYUAAAAAONnyYHDi1RhG2jsFhXCfAh6euq_"
            data-callback="onHuman"
          />
        </div>

        <div className="buffer-md" />

        {this.state.invalid ? (
          <div className="retry-text">
            {this.state.message}
            <div className="buffer-md" />
          </div>
        ) : null}

        <button className="button button-red" onClick={this.submit.bind(this)}>
          {this.state.status}
        </button>
      </div>
    );
  }
}

export default Contact;
