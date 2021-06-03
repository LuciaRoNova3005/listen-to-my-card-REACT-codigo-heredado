import React from "react";

class Design extends React.Component {
  render() {
    return (
      <fieldset className="section-design container">
        <div className="selection hidden-content">
          <h3 className="selection__title">Colores</h3>
          <div className="selection__options">
            <label for="coloroption1" className="selection__options--palette">
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
            <label for="coloroption2" className="selection__options--palette">
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
            <label for="coloroption3" className="selection__options--palette">
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
        </div>
      </fieldset>
    );
  }
}
export default Design;
