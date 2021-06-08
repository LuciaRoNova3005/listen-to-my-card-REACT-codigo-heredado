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

/*
class InputName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  render() {
    return (
      <>
        <label className="label" htmlFor="name">Nombre completo</label>
        <input className="input js-inputName"
          type="text"
          id="name"
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
          maxlength="19"
          placeholder="Ej: Sally Jill"
          required
           />
      </>
    );
  }
}
export default InputName;*/
