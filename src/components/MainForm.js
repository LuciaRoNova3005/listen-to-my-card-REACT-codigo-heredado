import React from "react";
import Collapsable from "./Collapsable";
import Design from "./Design";
import Fill from "./Fill";
import Share from "./Share";

function MainForm(props) {
  console.log(props);
  return (
    <form
      className="refillable js-form "
      action="/signup"
      method="post"
      id="form"
      className="form"
      autoComplete="off"
    >
      <Collapsable title="Diseña" icon="far fa-object-ungroup header-icon">
        <Design></Design>
      </Collapsable>

      <Collapsable title="Rellena" icon="far fa-keyboard i-main header-icon">
        <Fill
          name={props.name}
          job={props.job}
          avatar={props.avatar}
          email={props.email}
          phone={props.phone}
          linkedin={props.linkedin}
          github={props.github}
          handleInputData={props.handleInputData}
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
