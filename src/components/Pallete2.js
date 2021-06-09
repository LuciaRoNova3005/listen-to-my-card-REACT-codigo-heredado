import React from "react";

class Pallete2 extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="coloroption2" className="selection__options--palette">
          <input
            id="2"
            type="radio"
            value="2"
            name="palette"
            className="selection__options--input js-colorOption"
          />
          <div className="palette palette__hot1"></div>
          <div className="palette palette__hot2"></div>
          <div className="palette palette__hot3"></div>
        </label>
      </div>
    );
  }
}
export default Pallete2;
