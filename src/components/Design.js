import React from "react";
import Pallete1 from "./Pallete1";
import Pallete2 from "./Pallete2";
import Pallete3 from "./Pallete3";

class Design extends React.Component {
  render() {
    return (
      <fieldset className="section-design container">
        <div className="selection hidden-content">
          <h3 className="selection__title">Colores</h3>
          <div className="selection__options">
            <Pallete1 />
            <Pallete2 />
            <Pallete3 />
          </div>
        </div>
      </fieldset>
    );
  }
}
export default Design;
