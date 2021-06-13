import React from "react";

class Pallete extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <label htmlFor={this.props.id} className="selection__options--palette">
          <input
            id={this.props.id}
            type="radio"
            value={this.props.value}
            onChange={this.props.handleColor}
            className="selection__options--input js-colorOption js-paletteDefault"
          />
          <div className={`palette ${this.props.op1}`}></div>
          <div className={`palette ${this.props.op2}`}></div>
          <div className={`palette ${this.props.op3}`}></div>
        </label>
      </div>
    );
  }
}

export default Pallete;
