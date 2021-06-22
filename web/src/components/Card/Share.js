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
    this.userData = this.props;
    if (this.props.name === "") {
      this.setState({ response: "Debes rellenar el nombre" });
    } else if (this.props.job === "") {
      this.setState({ response: "Debes rellenar el puesto" });
    } else if (this.props.photo === "") {
      this.setState({ response: "Debes rellenar la imagen" });
    } else if (this.props.email === "") {
      this.setState({ response: "Debes rellenar el email" });
    } else if (this.props.linkedin === "") {
      this.setState({ response: "Debes rellenar el linkedin" });
    } else if (this.props.github === "") {
      this.setState({ response: "Debes rellenar el github" });
    } else if (this.props.phone === "") {
      this.setState({ response: "Debes rellenar el teléfono" });
    } else {
      getApiCard(this.userData).then((resultData) => {
        if (resultData.success === false) {
          console.log(this.userData);
          this.setState({ response: "Faltan datos por llenar" });
        } else {
          console.log(resultData);
          this.setState({
            response: true,
            url: resultData.cardURL,
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
            <button className="share-button js-create-card share-button2">
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
