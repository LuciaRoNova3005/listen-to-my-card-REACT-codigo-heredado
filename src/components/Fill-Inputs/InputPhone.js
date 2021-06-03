import React from "react";

class InputPhone extends React.Component {
  render() {
    return (
      <>
        <label className="label" for="phone">
          Teléfono
        </label>
        <input
          className="input js-inputPhone"
          type="tel"
          id="phone"
          name="phone"
          pattern="[0-9]{9}"
          title="El número debe contener 9 dígitos"
          placeholder="Ej: 555-55-55-55"
          required
        />
      </>
    );
  }
}
export default InputPhone;
