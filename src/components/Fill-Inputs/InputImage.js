import React from "react";

class InputImage extends React.Component {
  render() {
    return (
      <>
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
      </>
    );
  }
}
export default InputImage;
