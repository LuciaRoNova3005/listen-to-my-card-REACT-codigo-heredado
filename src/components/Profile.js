import React from "react";
import PropTypes from "prop-types";
import defaultAvatar from "../images/listen-logo.png";
// import '../stylesheets/Profile.css';

class Profile extends React.Component {
  render() {
    const avatar = this.props.avatar === "" ? defaultAvatar : this.props.avatar;
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
  avatar: PropTypes.string.isRequired,
};

export default Profile;
