import * as React from "react";

import Locales from "../scripts/locales";

import yourwaytowork from "../images/yourwaytowork.svg";

interface State {
  isGiver: boolean;
  invalid: boolean;
  message: string;
}

window["onHuman"] = (captcha: string) => {
  window["captcha"] = captcha;
};

class Contact extends React.Component<{}, State> {
  state: State = {
    isGiver: false,
    invalid: false,
    message: ""
  };

  public componentDidMount() {
    const reCAPTCHA: HTMLScriptElement = document.createElement("script");
    reCAPTCHA.src = `https://www.google.com/recaptcha/api.js?hl=${
      window["APPLANG"]
    }`;
    document.head.append(reCAPTCHA);
    window["focusedInput"] = "#null";
  }

  public submit(e: React.MouseEvent<HTMLButtonElement>) {
    const Locale = Locales[window["APPLANG"]].contact.errors;

    e.preventDefault();
    if (!this.validate()) return;

    const captcha = window["captcha"];
    const form = {
      mail: "",
      name: "",
      surname: "",
      age: "",
      works: "",
      places: "",
      time: "",
      address: "",
      deadline: "",
      work: ""
    };

    for (const value in form) {
      const formValue = document.querySelector(`#${value}`);
      form[value] = formValue ? formValue["value"] : "";
      formValue ? (formValue["value"] = "") : null;
    }

    form["isGiver"] = this.state.isGiver;

    if (captcha === undefined || captcha === "" || captcha === null) {
      this.setState({
        invalid: true,
        message: Locale.norobot
      });
      return;
    }

    fetch(`https://backend.ywork.ch/api`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ captcha, form })
    })
      .then(res => res.json())
      .then(data => {
        if (data.success == false) {
          this.setState({
            invalid: true,
            message: Locale.trylater
          });
        } else {
          location.pathname = "/";
        }
      })
      .catch(ex => {
        this.setState({
          invalid: true,
          message: Locale.trylater
        });
      });
  }

  public validate() {
    const Locale = Locales[window["APPLANG"]].contact.errors;

    const inputs: any = document.getElementsByTagName("input");
    const areas: any = document.getElementsByTagName("textarea");

    let valid: boolean = true;

    for (const input of inputs) {
      if (input["value"] === "") {
        valid = false;
        break;
      }
    }

    if (valid) {
      for (const area of areas) {
        if (area["value"] === "") {
          valid = false;
          break;
        }
      }
    }

    this.setState({
      invalid: !valid,
      message: valid ? this.state.message : Locale.emptyfields
    });

    return valid;
  }

  public render() {
    const Locale = Locales[window["APPLANG"]].contact;
    const FormLocale = Locales[window["APPLANG"]].contact.form;

    const Input = (props: {
      type: string;
      placeholder: string;
      name: string;
      className?: string;
    }) => (
      <input
        type={props.type}
        id={props.name}
        className={
          "contact-input form-control" +
          (props.className ? " " + props.className : "")
        }
        onFocus={() => (window["focusedInput"] = "#" + props.name)}
        onBlur={() => (window["focusedInput"] = "#null")}
        placeholder={props.placeholder}
        spellCheck={false}
        required={true}
        key={props.name}
      />
    );

    const NameForm = () => (
      <form className="input-container">
        <div className="row">
          <div className="col padding-input top-input">
            <Input type="text" placeholder={FormLocale.name} name="name" />
          </div>

          <div className="col padding-input">
            <Input
              type="text"
              placeholder={FormLocale.surname}
              name="surname"
            />
          </div>
        </div>
      </form>
    );
    return (
      <div className="text-center">
        <div className="buffer-sm" />
        <div className="h1 slogan">{Locale.title}.</div>

        <div className="buffer-md" />

        <div className="row">
          <div className="col col-no-padding option-left">
            <div
              className={"option" + (this.state.isGiver ? "" : " selected")}
              onClick={() => this.setState({ isGiver: false })}
            >
              {Locale.receiver}
            </div>
          </div>

          <div className="col col-no-padding option-right">
            <div
              className={"option" + (this.state.isGiver ? " selected" : "")}
              onClick={() => this.setState({ isGiver: true })}
            >
              {Locale.giver}
            </div>
          </div>
        </div>

        <img
          src={yourwaytowork}
          className="full-img svg bgbubble ywtw"
          alt="yourwaytowork"
          key="yourwaytowork"
        />

        <div className="buffer-md" />

        <NameForm />

        {this.state.isGiver ? (
          <div>
            <div className="buffer-sm" />

            <div className="input-container">
              <Input
                type="text"
                placeholder={FormLocale.address}
                name="address"
              />
            </div>

            <div className="buffer-sm" />

            <div className="input-container">
              <Input type="text" placeholder={FormLocale.time} name="time" />
            </div>

            <div className="buffer-sm" />

            <div className="input-container">
              <Input
                type="text"
                placeholder={FormLocale.deadline}
                name="deadline"
              />
            </div>

            <div className="buffer-sm" />

            <div className="input-container">
              <textarea
                id="work"
                className="form-control area-width contact-input"
                rows={3}
                placeholder={FormLocale.description}
                required={true}
              />
            </div>
          </div>
        ) : (
          <div>
            <div className="buffer-sm" />

            <div className="input-container">
              <Input
                type="text"
                placeholder={FormLocale.age}
                name="age"
                className="age-input"
              />
            </div>

            <div className="buffer-sm" />

            <div className="input-container">
              <Input type="text" placeholder={FormLocale.time} name="time" />
            </div>

            <div className="buffer-sm" />

            <div className="input-container">
              <textarea
                id="works"
                className="form-control area-width contact-input"
                rows={2}
                placeholder={FormLocale.works}
                required={true}
                key="works"
              />
            </div>

            <div className="buffer-sm" />

            <div className="input-container">
              <textarea
                id="places"
                className="form-control area-width contact-input"
                rows={2}
                placeholder={FormLocale.places}
                required={true}
                key="places"
              />
            </div>
          </div>
        )}

        <div className="buffer-sm" />

        <div className="input-container">
          <Input type="email" placeholder={FormLocale.mail} name="mail" />
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
          Senden
        </button>
      </div>
    );
  }
}

export default Contact;
