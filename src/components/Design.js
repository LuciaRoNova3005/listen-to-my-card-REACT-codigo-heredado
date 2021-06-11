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
              id="1"
              value="1"
              opt1="palette__cold1"
              opt2="palette__cold2"
              opt3="palette__cold3"
              /* pallete={this.props.pallete} */
              handleColor={this.props.handleColor}
            />
            <Pallete
              id="2"
              value="2"
              opt1="palette__hot1"
              opt2="palette__hot2"
              opt3="palette__hot3"
              /* pallete={this.props.pallete} */
              handleColor={this.props.handleColor}
            />
            <Pallete
              id="3"
              value="3"
              opt1="palette__mix1"
              opt2="palette__mix2"
              opt3="palette__mix3"
              /* pallete={this.props.pallete} */
              handleColor={this.props.handleColor}
            />
          </div>
        </div>
      </fieldset>
    );
  }
}

export default Design;
