import React from "react";
import GetAvatar from "../Card/GetAvatar";

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
        </div>
        <label className="label" htmlFor="email">
          Email
        </label>
        <input
          className="input js-inputEmail"
          value={props.email}
          onChange={props.handleInputData}
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
          value={props.phone}
          onChange={props.handleInputData}
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
          value={props.linkedin}
          onChange={props.handleInputData}
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
          value={props.github}
          onChange={props.handleInputData}
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
