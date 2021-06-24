import React from "react";
import ListenLogo from "../..//images/listen-logo.png";
/* import TezCadey from "../../images/Tez-Cadey-Seve.mp3";
import TezCadeyOgg from "../../images/Tez-Cadey-Seve.ogg"; */
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="page__header">
      <Link to="/" className="header__link">
        <img
          src={ListenLogo}
          alt="logo-awesome-profile-cards"
          className="header__logo"
        />
      </Link>
      <h1 className="header__title">Listen To My Cards</h1>
      {/*  <audio id="miaudio" className="miaudio" controls autoPlay>
        <source src={TezCadey} type="audio/mpeg" />
        <source src={TezCadeyOgg} type="audio/ogg" />
      </audio> */}
    </header>
  );
}

export default Header;
