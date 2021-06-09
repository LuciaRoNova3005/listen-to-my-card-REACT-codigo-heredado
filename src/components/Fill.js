import React from "react";
import GetAvatar from "./GetAvatar";

const Fill = (props) => {
  return (
    <fieldset className="section-fill container">
      <div className="hidden-content form-padding">
        <label className="label" htmlFor="name">
          Nombre completo
        </label>
        <input
          className="input js-inputName"
          value={props.name}
          onChange={props.handleInputData}
          type="text"
          id="name"
          name="name"
          maxLength="19"
          placeholder="Ej: Sally Jill"
          required
        />
        <label className="label" htmlFor="job">
          Puesto
        </label>
        <input
          className="input js-inputJob"
          value={props.job}
          onChange={props.handleInputData}
          type="text"
          id="job"
          name="job"
          placeholder="Ej: Front-end unicorn"
          required
          maxLength="21"
        />
        <label className="label" htmlFor="photo">
          Imagen de perfil
        </label>
        <div className="action">
          <GetAvatar
            avatar={props.avatar}
            updateAvatar={props.updateAvatar}
          ></GetAvatar>
          {/* <label className="action__upload-btn" for="photo">
            Añadir imagen
          </label>
          <input
            className="action__hiddenField js-inputImg"
            type="file"
            id="photo"
            name="photo"
            required
          />
          <div className="profile__preview js__profile-preview"></div> */}
        </div>
        <label className="label" htmlFor="email">
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
        <label className="label" htmlFor="phone">
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
        <label className="label" htmlFor="linkedin">
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
        <label className="label" htmlFor="github">
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
};

export default Fill;
