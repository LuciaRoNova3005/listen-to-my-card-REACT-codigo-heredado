import React from "react";

class InputName extends React.Component {
  render() {
    return (
      <>
        <label className="label" for="name">
          Nombre completo
        </label>
        <input
          className="input js-inputName"
          type="text"
          id="name"
          name="name"
          maxlength="19"
          placeholder="Ej: Sally Jill"
          required
        />
      </>
    );
  }
}
export default InputName;
