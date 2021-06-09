import React from "react";

class Pallete1 extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="coloroption1" className="selection__options--palette">
          <input
            id="1"
            type="radio"
            value="1"
            name="palette"
            className="selection__options--input js-colorOption js-paletteDefault"
            checked
          />
          <div className="palette palette__cold1"></div>
          <div className="palette palette__cold2"></div>
          <div className="palette palette__cold3"></div>
        </label>
      </div>
    );
  }
}
export default Pallete1;
