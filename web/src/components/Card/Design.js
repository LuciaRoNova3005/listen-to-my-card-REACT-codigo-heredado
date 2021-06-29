import React from "react";
import Pallete from "../Card/Pallete";

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
              pallete={this.props.pallete}
              opt1="pallete__cold1"
              opt2="pallete__cold2"
              opt3="pallete__cold3"
              handleColor={this.props.handleColor}
            />
            <Pallete
              htmlFor="2"
              id="2"
              value="2"
              pallete={this.props.pallete}
              opt1="pallete__hot1"
              opt2="pallete__hot2"
              opt3="pallete__hot3"
              handleColor={this.props.handleColor}
            />
            <Pallete
              htmlFor="3"
              id="3"
              value="3"
              opt1="pallete__mix1"
              opt2="pallete__mix2"
              opt3="pallete__mix3"
              pallete={this.props.pallete}
              handleColor={this.props.handleColor}
            />
          </div>
        </div>
      </fieldset>
    );
  }
}

export default Design;
