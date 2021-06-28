import React from "react";
import getApiCard from "../../services/Api";

class Share extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      response: "",
      url: "sfdwffdd",
    };

    this.handleFetch = this.handleFetch.bind(this);
  }

  handleFetch(ev) {
    ev.preventDefault();
    this.userCard = this.props;
    console.log(this.userCard);
    if (this.props.name === "") {
      this.setState({ response: "Rellena el campo con tu nombre" });
    } else if (this.props.job === "") {
      this.setState({ response: "Rellena el campo con tu puesto" });
    } else if (this.props.email === "") {
      this.setState({ response: "Rellena el campo con tu email" });
    } else if (this.props.linkedin === "") {
      this.setState({ response: "Rellena el campo con tu linkedin" });
    } else if (this.props.github === "") {
      this.setState({ response: "Rellena el campo con tu github" });
    } else if (this.props.phone === "") {
      this.setState({ response: "Rellena el campo con tu teléfono" });
    } else {
      getApiCard(this.userCard).then((resultCard) => {
        if (resultCard.success === false) {
          console.log(this.userCard);
          this.setState({ response: "Faltan datos por llenar" });
        } else {
          console.log(resultCard);
          this.setState({
            response: true,
            url: resultCard.cardURL,
          });
        }
      });
    }
  }

  /* render() {
    let nohidden = "";
    if (this.state.response === "") {
      nohidden = "set-up-container js-response js-hiddenTwitter";
    } else {
      nohidden = "set-up-container js-response";
    }
    return (
      <fieldset className="section-share container">
        <div className="hidden-content">
          <div className="button-container">
            <button
              onClick={this.handleFetch}
              className="share-button js-create-card share-button2"
            >
              <i className="far fa-address-card address-card-icon"></i>
              crear tarjeta
            </button>
            <div className={nohidden}>{this.state.response}</div>
            <div className={nohidden}></div>
          </div>
        </div>
      </fieldset>
    );
  }
}
export default Share; */

  render() {
    let twitter = "";
    let warning = "";
    let share = "hidden-share";
    console.log(this.state.url);
    console.log("fdfdg");

    if (this.state.response !== true) {
      twitter = "set-up-container js-response js-hiddenTwitter";
      warning = "text-set-up";
    } else {
      twitter = "set-up-container js-response set-up-container-top";
      warning = "text-set-up";
      share = "show-share";
    }
    return (
      <fieldset className="section-share container">
        <div className="hidden-content">
          <div className="button-container">
            <button
              onClick={this.handleFetch}
              className="share-button js-create-card share-button2"
            >
              <i className="far fa-address-card address-card-icon"></i>
              crear tarjeta
            </button>
            <div className={warning}>{this.state.response}</div>
            <div className={twitter}></div>
            <div className={share}>
              <h3 class="text-set-up">La tarjeta ha sido creada:</h3>
              <p>
                <a
                  href="wwww"
                  class="link-set-up js-twitter-link"
                  target="_blank"
                >
                  URL
                </a>
              </p>
              <a
                class="twitter-button js-btn-twitter"
                target="_blank"
                href="wwww"
              >
                <i class="fa fa-twitter"></i> Compartir en Twitter
              </a>
            </div>
          </div>
        </div>
      </fieldset>
    );
  }
}
export default Share;
