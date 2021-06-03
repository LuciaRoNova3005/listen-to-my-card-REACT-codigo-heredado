import React from "react";
import Collapsable from "./Collapsable";
import Design from "./Design";
import Fill from "./Fill";
import Share from "./Share";

function MainForm() {
  return (
    <form
      className="refillable js-form "
      action="/signup"
      method="post"
      id="form"
      className="form"
      autocomplete="off"
    >
      <Collapsable title="Diseña" icon="far fa-object-ungroup header-icon"></Collapsable>
      <Design></Design>

      <Collapsable title="Rellena" icon="fas fa-chevron-up hidden__icon"></Collapsable>
      <Fill></Fill>
      <Collapsable title="Comparte" icon="fas fa-share-alt header-icon"></Collapsable>
      <Share></Share>
    </form>
  );
}

export default MainForm;
