import React from "react";
import getApiCard from "../../services/Api";

class Share extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      response: "",
      url: "",
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
    } else if (this.props.image === "") {
      this.setState({ response: "Rellena el campo con tu imagen" });
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

  render() {
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
            <div className="set-up-container js-response js-hiddenTwitter"></div>
          </div>
        </div>
      </fieldset>
    );
  }
}
export default Share;
