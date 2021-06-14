import React from "react";
import Profile from "../Card/Profile";

function MainPreview(props) {
  const nameCard = props.name === "" ? "Nombre Apellidos" : props.name;
  const jobCard = props.job === "" ? "Front-end developer" : props.job;
  let colorPallete = "";

  const palleteCard = () => {
    console.log(props);
    if (props.pallete === "1") {
      colorPallete = "opt1";
    } else if (props.pallete === "2") {
      colorPallete = "opt2";
    } else {
      colorPallete = "opt3";
    }
    return colorPallete;
  };

  return (
    <section className="page__preview">
      <button
        className="page__preview--button js-resetButton"
        onClick={props.handleReset}
      >
        <i className="far fa-trash-alt"></i>Reset
      </button>

      <div className={`page__preview--card js-cardElement ${palleteCard()}`}>
        <div className="preview__card--title-wrapper js-op__wrapper">
          <h2 className="preview__card--title js-namePreview js-op__name">
            {nameCard}
          </h2>
          <h3 className="preview__card--subtitle js-jobPreview">{jobCard}</h3>
        </div>
        <div className="preview__card--image js-imgPreview">
          <Profile avatar={props.avatar} />
        </div>

        <ul className="preview__card--rrss">
          <li className="rrss-item js-op__circle js-op1__circle1">
            <a
              className="rrss-link fas fa-mobile-alt js-telPreview js-op__icon js-op1__icon1"
              href={"tel:+34" + props.phone}
              target="_blank"
            ></a>
          </li>
          <li className="rrss-item js-op__circle js-op1__circle2">
            <a
              className="rrss-link fas fa-envelope js-mailPreview js-op__icon js-op1__icon2"
              href={"mailto:" + props.email}
              target="_blank"
            ></a>
          </li>
          <li className="rrss-item js-op__circle js-op1__circle3">
            <a
              className="rrss-link fab fa-linkedin-in js-linkedinPreview js-op__icon js-op1__icon3"
              href={"https://www.linkedin.com/in/" + props.linkedin}
              target="_blank"
            >
              <div className="icon"></div>
            </a>
          </li>
          <li className="rrss-item js-op__circle js-op1__circle4">
            <a
              className="rrss-link fab fa-github-alt js-gitHubPreview js-op__icon js-op1__icon4"
              href={"https://github.com/" + props.github}
              target="_blank"
            ></a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default MainPreview;
