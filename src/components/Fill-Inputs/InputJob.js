import React from "react";

class InputJob extends React.Component {
  render() {
    return (
      <>
        <label className="label" for="job">
          Puesto
        </label>
        <input
          className="input js-inputJob"
          type="text"
          id="job"
          name="job"
          placeholder="Ej: Front-end unicorn"
          required
          maxlength="21"
        />
      </>
    );
  }
}
export default InputJob;
