import React from "react";

class InputMail extends React.Component {
  render() {
    return (
      <>
        <label className="label" for="email">
          Email
        </label>
        <input
          className="input js-inputEmail"
          type="email"
          id="email"
          name="email"
          placeholder="Ej: sally-hill@gmail.com"
          required
        />
      </>
    );
  }
}
export default InputMail;
