import React from "react";
import Collapsable from "./Collapsable";
import Design from "./Design";
import Fill from "./Fill";
import Share from "./Share";

function MainForm(props) {
  return (
    <form
      className="refillable js-form "
      action="/signup"
      method="post"
      id="form"
      className="form"
      autocomplete="off"
      handleInputData={props.handleInputData}
    >
      <Collapsable title="Diseña" icon="far fa-object-ungroup header-icon">
        <Design></Design>
      </Collapsable>

      <Collapsable title="Rellena" icon="far fa-keyboard i-main header-icon">
        <Fill
          name={props.name}
          handleInputData={props.handleInputData}
          avatar={props.avatar}
          updateAvatar={props.updateAvatar}
        ></Fill>
      </Collapsable>

      <Collapsable title="Comparte" icon="fas fa-share-alt header-icon">
        <Share></Share>
      </Collapsable>
    </form>
  );
}

export default MainForm;
