import React, { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const EditProfilePopup = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  //const currentUser = React.useContext(CurrentUserContext);

  useEffect(() => {
    if (props.isOpen) {
      setName("");
      setDescription("");
      setIsFormValid(false);
    }
  }, [props.isOpen]);

  const handleChangeName = (evt) => {
    setName(evt.target.value);
  };

  const handleChangeDescription = (evt) => {
    setDescription(evt.target.value);
  };

  /* const handleSubmit = (evt) => {
    evt.preventDefault();
    if (isFormValid) {
      props.onSubmitEditProfile(name, description);
    }
  }; */

  return (
    <PopupWithForm
      title="Edit Profile"
      name="edit"
      isOpened={props.isOpen}
      onClose={props.onClose}
      onSubmit={props.handleSubmit}
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
            onChange={handleChangeName}
            value={name}
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
            onChange={handleChangeDescription}
            value={description}
          />
          <span className="popup__error" id="input__error-job"></span>
        </div>
      </fieldset>
    </PopupWithForm>
  );
};

export default EditProfilePopup;
