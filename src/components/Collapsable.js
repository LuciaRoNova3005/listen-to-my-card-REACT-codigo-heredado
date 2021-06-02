import React from "react";

class Collapsable extends React.Component {
  render() {
    return (
      <div className="js-hidden">
        <div className="collapsable__header container js-collapsible">
          <i className=""></i>
          <h2 className="collapsable__header--title">{this.props.children}</h2>
          <i className="fas fa-chevron-up hidden__icon"></i>
        </div>
      </div>
    );
  }
}

/*function Collapsable() {
  return (
    <div className="js-hidden">
      <div className="collapsable__header container js-collapsible">
        <i className="far fa-object-ungroup header-icon"></i>
        <h2 className="collapsable__header--title">{this.props.title}</h2>
        <i className="fas fa-chevron-up hidden__icon"></i>
      </div>
    </div>
  );
}*/

export default Collapsable;
