import React from "react";

class InputLinkedin extends React.Component {
  render() {
    return (
      <>
        <label className="label" for="linkedin">
          Linkedin
        </label>
        <input
          className="input js-inputLinkedin"
          type="text"
          id="linkedin"
          name="linkedin"
          placeholder="Ej: sally-hill"
          required
        />
      </>
    );
  }
}
export default InputLinkedin;
