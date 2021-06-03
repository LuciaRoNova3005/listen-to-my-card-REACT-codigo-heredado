import React from "react";
import InputName from "../components/Fill-Inputs/InputName";
import InputJob from "../components/Fill-Inputs/InputJob";
import InputImage from "../components/Fill-Inputs/InputImage";
import InputMail from "../components/Fill-Inputs/InputMail";
import InputPhone from "../components/Fill-Inputs/InputPhone";
import InputLinkedin from "../components/Fill-Inputs/InputLinkedin";
import InputGithub from "../components/Fill-Inputs/InputGithub";

class Fill extends React.Component {
  render() {
    return (
      <fieldset className="section-fill container">
        <div className="hidden-content form-padding">
          <InputName />
          <InputJob />
          <InputImage />
          <InputMail />
          <InputPhone />
          <InputLinkedin />
          <InputGithub />
        </div>
      </fieldset>
    );
  }
}
export default Fill;
