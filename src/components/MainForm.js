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
      <Collapsable></Collapsable>
      <Design></Design>

      <Collapsable></Collapsable>
      <Fill></Fill>
      <Collapsable></Collapsable>
      <Share></Share>
    </form>
  );
}

export default MainForm;
