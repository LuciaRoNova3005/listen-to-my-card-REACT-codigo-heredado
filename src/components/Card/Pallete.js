import React from "react";

class Pallete extends React.Component {
  constructor(props) {
    super(props);
    this.handleColor = this.handleColor.bind(this);
  }

  handleColor() {
    this.props.handleColor(this.props.id);
  }

  render() {
    return (
      <div>
        <label htmlFor={this.props.id} className="selection__options--palette">
          <input
            id={this.props.id}
            type="radio"
            onChange={this.handleColor}
            name="palette"
            className="selection__options--input js-colorOption js-paletteDefault"
            checked={this.props.pallete === this.props.value}
          />
          <div className={`palette ${this.props.opt1}`}></div>
          <div className={`palette ${this.props.opt2}`}></div>
          <div className={`palette ${this.props.opt3}`}></div>
        </label>
      </div>
    );
  }
}

export default Pallete;
