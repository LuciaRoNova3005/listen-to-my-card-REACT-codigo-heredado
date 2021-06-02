import React from "react";
import Collapsable from "./Collapsable";

function MainForm() {
  return (
    <form
      className="refillable js-form "
      action="/signup"
      method="post"
      id="form"
      className="form"
      autocomplete="off"
    >
      <Collapsable>
        <i className="far fa-object-ungroup header-icon"></i>
        <h2>Diseña</h2>
      </Collapsable>

      <fieldset className="section-design container">
        <div className="selection hidden-content">
          <h3 className="selection__title">Colores</h3>
          <div className="selection__options">
            <label for="coloroption1" className="selection__options--palette">
              <input
                id="1"
                type="radio"
                value="1"
                name="palette"
                className="selection__options--input js-colorOption js-paletteDefault"
                checked
              />
              <div className="palette palette__cold1"></div>
              <div className="palette palette__cold2"></div>
              <div className="palette palette__cold3"></div>
            </label>
            <label for="coloroption2" className="selection__options--palette">
              <input
                id="2"
                type="radio"
                value="2"
                name="palette"
                className="selection__options--input js-colorOption"
              />
              <div className="palette palette__hot1"></div>
              <div className="palette palette__hot2"></div>
              <div className="palette palette__hot3"></div>
            </label>
            <label for="coloroption3" className="selection__options--palette">
              <input
                id="3"
                type="radio"
                value="3"
                name="palette"
                className="selection__options--input js-colorOption"
              />
              <div className="palette palette__mix1"></div>
              <div className="palette palette__mix2"></div>
              <div className="palette palette__mix3"></div>
            </label>
          </div>
        </div>
      </fieldset>

      <div className="js-hidden hidden">
        <div className="collapsable__header container js-collapsible">
          <i className="far fa-keyboard header-icon"></i>
          <h2 className="collapsable__header--title">Rellena</h2>
          <i className="fas fa-chevron-up hidden__icon"></i>
        </div>
        <fieldset className="section-fill container">
          <div className="hidden-content form-padding">
            <label className="label" for="name">
              Nombre completo
            </label>
            <input
              className="input js-inputName"
              type="text"
              id="name"
              name="name"
              maxlength="19"
              placeholder="Ej: Sally Jill"
              required
            />
            <label className="label" for="job">
              Puesto
            </label>
            <input
              className="input js-inputJob"
              type="text"
              id="job"
              name="job"
              placeholder="Ej: Front-end unicorn"
              required
              maxlength="21"
            />
            <label className="label" for="photo">
              Imagen de perfil
            </label>
            <div className="action">
              <label className="action__upload-btn" for="photo">
                Añadir imagen
              </label>
              <input
                className="action__hiddenField js-inputImg"
                type="file"
                id="photo"
                name="photo"
                required
              />
              <div className="profile__preview js__profile-preview"></div>
            </div>
            <label className="label" for="email">
              Email
            </label>
            <input
              className="input js-inputEmail"
              type="email"
              id="email"
              name="email"
              placeholder="Ej: sally-hill@gmail.com"
              required
            />
            <label className="label" for="phone">
              Teléfono
            </label>
            <input
              className="input js-inputPhone"
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]{9}"
              title="El número debe contener 9 dígitos"
              placeholder="Ej: 555-55-55-55"
              required
            />
            <label className="label" for="linkedin">
              Linkedin
            </label>
            <input
              className="input js-inputLinkedin"
              type="text"
              id="linkedin"
              name="linkedin"
              placeholder="Ej: sally-hill"
              required
            />
            <label className="label" for="github">
              Github
            </label>
            <input
              className="input js-inputGitHub"
              type="text"
              id="github"
              name="github"
              placeholder="Ej: sally-hill"
              required
            />
          </div>
        </fieldset>
      </div>

      <div className="js-hidden hidden">
        <div className="collapsable__header container js-collapsible">
          <i className="fas fa-share-alt header-icon"></i>
          <h2 className="collapsable__header--title">Comparte</h2>
          <i className="fas fa-chevron-up hidden__icon"></i>
        </div>
        <fieldset className="section-share container">
          <div className="hidden-content">
            <div className="button-container">
              <button className="share-button js-create-card share-button2">
                <i className="far fa-address-card address-card-icon"></i>
                crear tarjeta
              </button>
            </div>

            <div className="set-up-container js-response js-hiddenTwitter"></div>
          </div>
        </fieldset>
      </div>
    </form>
  );
}

export default MainForm;
