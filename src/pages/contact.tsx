import * as React from "react";

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
    reCAPTCHA.src = "https://www.google.com/recaptcha/api.js";
    document.head.append(reCAPTCHA);
    window["focusedInput"] = "#null";
  }

  public submit(e: React.MouseEvent<HTMLButtonElement>) {
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
        message: "Bestätigen Sie, dass Sie kein Roboter sind."
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
            message: "Versuchen Sie es später nochmals."
          });
        } else {
          location.pathname = "/";
        }
      })
      .catch(ex => {
        this.setState({
          invalid: true,
          message: "Versuchen Sie es später nochmals."
        });
      });
  }

  public validate() {
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
      message: valid ? this.state.message : "Füllen Sie alle Felder aus."
    });

    return valid;
  }

  public render() {
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
            <Input type="text" placeholder="Vorname" name="name" />
          </div>

          <div className="col padding-input">
            <Input type="text" placeholder="Nachname" name="surname" />
          </div>
        </div>
      </form>
    );
    return (
      <div className="text-center">
        <div className="buffer-sm" />
        <div className="h1 slogan">Kontakt.</div>

        <div className="buffer-md" />

        <div className="row">
          <div className="col col-no-padding option-left">
            <div
              className={"option" + (this.state.isGiver ? "" : " selected")}
              onClick={() => this.setState({ isGiver: false })}
            >
              Arbeitnehmer
            </div>
          </div>

          <div className="col col-no-padding option-right">
            <div
              className={"option" + (this.state.isGiver ? " selected" : "")}
              onClick={() => this.setState({ isGiver: true })}
            >
              Arbeitgeber
            </div>
          </div>
        </div>

        <div className="buffer-md" />

        <NameForm />

        {this.state.isGiver ? (
          <div>
            <div className="buffer-sm" />

            <div className="input-container">
              <Input
                type="text"
                placeholder="Strasse, Ort, PLZ"
                name="address"
              />
            </div>

            <div className="buffer-sm" />

            <div className="input-container">
              <Input
                type="text"
                placeholder="Zeit: z.B. 07:00 - 13:00"
                name="time"
              />
            </div>

            <div className="buffer-sm" />

            <div className="input-container">
              <Input
                type="text"
                placeholder="Frist: z.B. 13. August 2019"
                name="deadline"
              />
            </div>

            <div className="buffer-sm" />

            <div className="input-container">
              <textarea
                id="work"
                className="form-control area-width contact-input"
                rows={3}
                placeholder="Beschrieb der angebotenen Arbeit."
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
                placeholder="Alter"
                name="age"
                className="age-input"
              />
            </div>

            <div className="buffer-sm" />

            <div className="input-container">
              <Input
                type="text"
                placeholder="Zeit: z.B. 07:00 - 13:00"
                name="time"
              />
            </div>

            <div className="buffer-sm" />

            <div className="input-container">
              <textarea
                id="works"
                className="form-control area-width contact-input"
                rows={2}
                placeholder="Mögliche Arbeiten."
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
                placeholder="Mögliche Orte."
                required={true}
                key="places"
              />
            </div>
          </div>
        )}

        <div className="buffer-sm" />

        <div className="input-container">
          <Input type="email" placeholder="Email Adresse" name="mail" />
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
