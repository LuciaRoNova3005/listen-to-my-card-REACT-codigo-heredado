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
      <Collapsable title="Diseña" icon="far fa-object-ungroup header-icon"><Design></Design>  </Collapsable>
      
     
      <Collapsable title="Rellena" icon="far fa-keyboard i-main header-icon"> <Fill></Fill></Collapsable>
     
      <Collapsable title=""Comparte icon="fas fa-share-alt header-icon"><Share></Share></Collapsable>
      
    </form>
  );
}

export default MainForm;
