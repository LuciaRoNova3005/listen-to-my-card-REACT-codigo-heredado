import React from "react";
import Pallete from "./Pallete";

class Design extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
  }

  render() {
    return (
      <fieldset className="section-design container">
        <div className="selection hidden-content">
          <h3 className="selection__title">Colores</h3>
          <div className="selection__options">
            <Pallete
              htmlFor="1"
              id="1"
              value="1"
              op1="palette__cold1"
              op2="palette__cold2"
              op3="palette__cold3"
              onChange={this.props.handleColor}
            />
            <Pallete
              htmlFor="2"
              id="2"
              value="2"
              op1="palette__hot1"
              op2="palette__hot2"
              op3="palette__hot3"
              handleColor={this.props.handleColor}
            />
            <Pallete
              htmlFor="3"
              id="3"
              value="3"
              checked="3"
              op1="palette__mix1"
              op2="palette__mix2"
              op3="palette__mix3"
              handleColor={this.props.handleColor}
            />
          </div>
        </div>
      </fieldset>
    );
  }
}

export default Design;
