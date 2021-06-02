import React from "react";
import logoAda from "../images/logo-adalab.png";

function Footer() {
  return (
    <footer className="footer">
      <small className="footer__small"> Listen To My Card &copy; 2021 </small>
      <img src={logoAda} alt="Logo Adalab" className="footer__logo" />
    </footer>
  );
}

export default Footer;
