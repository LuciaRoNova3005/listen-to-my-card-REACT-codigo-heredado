import React from "react";
import Twitter from "./Twitter";

class Sharecard extends React.Component {
  render() {
    return (
      <div className="hidden-content">
        <div className="button-container">
          <button className="share-button js-create-card share-button2">
            <i className="far fa-address-card address-card-icon"></i>
            crear tarjeta
          </button>
          <Twitter></Twitter>
        </div>
      </div>
    );
  }
}
export default Sharecard;
