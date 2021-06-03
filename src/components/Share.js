import React from "react";

class Share extends React.Component {
  render() {
    return (
      <fieldset className="section-share container">
        <div className="hidden-content">
          <div className="button-container">
            <button className="share-button js-create-card share-button2">
              <i className="far fa-address-card address-card-icon"></i>
              crear tarjeta
            </button>
          </div>

          <div className="set-up-container js-response js-hiddenTwitter"></div>
        </div>
      </fieldset>
    );
  }
}
export default Share;
