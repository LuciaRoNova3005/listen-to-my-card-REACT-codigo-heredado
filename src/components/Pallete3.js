import React from "react";

class Pallete3 extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="coloroption3" className="selection__options--palette">
          <input
            id="3"
            type="radio"
            value="3"
            name="palette"
            className="selection__options--input js-colorOption"
          />
          <div className="palette palette__mix1"></div>
          <div className="palette palette__mix2"></div>
          <div className="palette palette__mix3"></div>
        </label>
      </div>
    );
  }
}
export default Pallete3;
