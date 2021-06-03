import React from "react";

class InputGithub extends React.Component {
  render() {
    return (
      <>
        <label className="label" for="github">
          Github
        </label>
        <input
          className="input js-inputGitHub"
          type="text"
          id="github"
          name="github"
          placeholder="Ej: sally-hill"
          required
        />
      </>
    );
  }
}
export default InputGithub;
