import React from "react";

class Collapsable extends React.Component {
  render() {
    return (
      <div className="js-hidden">
        <div className="collapsable__header container js-collapsible">
          <i className="far fa-object-ungroup header-icon"></i>
          <h2 className="collapsable__header--title">DISEÑA</h2>
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
/*<h2 className="collapsable__header--title">Rellena</h2>
<i className="fas fa-chevron-up hidden__icon"></i>
   <i className="fas fa-share-alt header-icon"></i>
     <h2 className="collapsable__header--title">Comparte</
*/

export default Collapsable;
