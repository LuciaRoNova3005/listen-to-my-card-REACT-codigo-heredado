import React from "react";

class Fill extends React.Component {
  render() {
    return (
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
    );
  }
}
export default Fill;
