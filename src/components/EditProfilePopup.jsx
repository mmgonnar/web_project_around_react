import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm";

const EditProfilePopup = (props) => {
  /* const [name, setName] = useState('');
  const [descrition, setDescription] = useState(''); */

  return (
    <PopupWithForm
      title="Edit Profile"
      name="edit"
      isOpened={props.isOpen}
      onClose={props.onClose}
    >
      <fieldset className="popup__set">
        <div className="popup__container-input">
          <input
            type="text"
            name="name"
            id="input-name"
            className="popup__input popup__input-name"
            placeholder="Name"
            minLength="2"
            maxLength="40"
            required
            autoComplete="on"
          />
          <span className="popup__error" id="input__error-name"></span>
        </div>
        <div className="popup__container-input">
          <input
            type="text"
            name="job"
            id="input-job"
            className="popup__input popup__input-job"
            placeholder="Job"
            minLength="2"
            maxLength="200"
            required
            autoComplete="on"
          />
          <span className="popup__error" id="input__error-job"></span>
        </div>
      </fieldset>
    </PopupWithForm>
  );
};

export default EditProfilePopup;
