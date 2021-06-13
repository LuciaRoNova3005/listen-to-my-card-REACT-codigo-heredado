import React from "react";
import Sharecard from "../Card/Sharecard";
import Twitter from "../Card/Twitter";

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
