//import "../stylesheets/App.scss";
import ListenLogo from "../images/listen-logo.png";
import TezCadey from "../images/Tez-Cadey-Seve.mp3";
import TezCadeyOgg from "../images/Tez-Cadey-Seve.ogg";
import logoAda from "../images/logo-adalab.png";
/*import Header from "./Header"*/

function App() {
  return (
    <>
      <header className="page__header">
        <a href="./index.html" className="header__link">
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
      </header>

      <main className="main wrapper">
        <section className="page__preview">
          <button className="page__preview--button js-resetButton">
            <i className="far fa-trash-alt"></i>Reset
          </button>
          <div className="page__preview--card js-cardElement opt1">
            <div className="preview__card--title-wrapper js-op__wrapper">
              <h2 className="preview__card--title js-namePreview js-op__name">
                Nombre Apellido
              </h2>
              <h3 className="preview__card--subtitle js-jobPreview">
                Front-end developer
              </h3>
            </div>
            <div className="preview__card--image js-imgPreview"></div>
            <ul className="preview__card--rrss">
              <li className="rrss-item js-op__circle js-op1__circle1">
                <a
                  className="rrss-link fas fa-mobile-alt js-telPreview js-op__icon js-op1__icon1"
                  href="tel:+34"
                  target="_blank"
                ></a>
              </li>
              <li className="rrss-item js-op__circle js-op1__circle2">
                <a
                  className="rrss-link fas fa-envelope js-mailPreview js-op__icon js-op1__icon2"
                  href="mailto:"
                  target="_blank"
                ></a>
              </li>
              <li className="rrss-item js-op__circle js-op1__circle3">
                <a
                  className="rrss-link fab fa-linkedin-in js-linkedinPreview js-op__icon js-op1__icon3"
                  href="https://www.linkedin.com/in/"
                  target="_blank"
                >
                  <div className="icon"></div>
                </a>
              </li>
              <li className="rrss-item js-op__circle js-op1__circle4">
                <a
                  className="rrss-link fab fa-github-alt js-gitHubPreview js-op__icon js-op1__icon4"
                  href="https://github.com/"
                  target="_blank"
                ></a>
              </li>
            </ul>
          </div>
        </section>

        <form
          className="refillable js-form "
          action="/signup"
          method="post"
          id="form"
          className="form"
          autocomplete="off"
        >
          <div className="js-hidden">
            <div className="collapsable__header container js-collapsible">
              <i className="far fa-object-ungroup header-icon"></i>
              <h2 className="collapsable__header--title">Diseña</h2>
              <i className="fas fa-chevron-up hidden__icon"></i>
            </div>
            <fieldset className="section-design container">
              <div className="selection hidden-content">
                <h3 className="selection__title">Colores</h3>
                <div className="selection__options">
                  <label
                    for="coloroption1"
                    className="selection__options--palette"
                  >
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
                  <label
                    for="coloroption2"
                    className="selection__options--palette"
                  >
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
                  <label
                    for="coloroption3"
                    className="selection__options--palette"
                  >
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
          </div>

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
      </main>
      <footer className="footer">
        <small className="footer__small"> Listen To My Card &copy; 2021 </small>
        <img src={logoAda} alt="Logo Adalab" className="footer__logo" />
      </footer>
    </>
  );
}

export default App;
