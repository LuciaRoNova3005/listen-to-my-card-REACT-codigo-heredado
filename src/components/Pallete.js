import React from "react";

class Pallete extends React.Component {
  constructor(props) {
    super(props);
    this.handleColor = this.handleColor.bind(this);
  }

  handleColor(ev) {
    this.props.handleColor(ev);
  }

  render() {
    return (
      <div>
        <label htmlFor="coloroption1" className="selection__options--palette">
          <input
            id={this.props.id}
            type="radio"
            value={this.props.value}
            onChange={this.handleColor}
            name="palette"
            className="selection__options--input js-colorOption js-paletteDefault"
            checked
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
