import React from "react";
import PropTypes from "prop-types";
import defaultAvatar from "../../images/listen-logo.png";
// import '../stylesheets/Profile.css';

class Profile extends React.Component {
  render() {
    const avatar = this.props.image === "" ? defaultAvatar : this.props.image;
    return (
      <>
        <div
          className="preview__card--image js-imgPreview"
          style={{ backgroundImage: `url(${avatar})` }}
        ></div>
      </>
    );
  }
}
Profile.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Profile;
