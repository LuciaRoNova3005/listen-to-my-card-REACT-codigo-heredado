import React, { Component } from "react";
import { Link } from "react-router-dom";
import Listenlog from "../../images/listen-logo.png";

const Landing2 = (props) => {
  return (
    <div>
      <main class="landing central-column">
        <img
          src={Listenlog}
          alt="logo-awesome-profile-cards"
          class="landing__logo"
        />

        <div class="title-wrapper">
          <h1 class="landing__title">Crea tu tarjeta de visita</h1>
          <h2 class="landing__subtitle">
            Apúntate al networking sostenible de forma fácil, cómoda y... ¡al
            ritmo de la música!
          </h2>
        </div>

        <section>
          <ul className="landing__wrapper">
            <li className="landing__icon-design">
              <i className="landing__icon--icon far fa-object-ungroup frame"></i>
              <p className="landing__icon--text">Diseña</p>
            </li>

            <li className="landing__icon-fill">
              <i className="landing__icon--icon fas fa-keyboard"></i>
              <p class="landing__icon--text">Rellena</p>
            </li>

            <li className="landing__icon-share">
              <i className="landing__icon--icon fas fa-share-alt share"></i>
              <p className="landing__icon--text">Comparte</p>
            </li>
          </ul>
        </section>

        <div>
          <Link to="/card" className="landing__link">
            <span className="landing__link-text">COMENZAR</span>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Landing2;
