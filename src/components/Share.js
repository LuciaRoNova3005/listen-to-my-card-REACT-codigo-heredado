import React from "react";
import Sharecard from "./Sharecard";
import Twitter from "./Twitter";

class Share extends React.Component {
  render() {
    return (
      <fieldset className="section-share container">
        <Sharecard></Sharecard>
      </fieldset>
    );
  }
}
export default Share;
