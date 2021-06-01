import React from "react";

class Header extends React.Component {
    render() {
      return ( <a href="./index.html" className="header__link">
          <img
            src={ListenLogo}
            alt="logo-awesome-profile-cards"
            className="header__logo"
          />
        </a>
        <h1 className="header__title">Listen To My Cards</h1>
        <audio id="miaudio" className="miaudio" controls autoplay>
          <source src={TezCadey} type="audio/mpeg" />
          <source src={TezCadeyOgg} type="audio/ogg" />
        </audio> 
        );
    }
}

export default Header;
