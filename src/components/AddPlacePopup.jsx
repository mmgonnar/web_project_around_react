import React, { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

const AddPlacePopup = (props) => {
  const addPlaceInputRef = useRef(null);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (addPlaceInputRef.current.validity.valid) {
      //props.onAddCard;
    }
  };

  return (
    <PopupWithForm
      title="New Place"
      name="add"
      isOpened={props.isOpened}
      onClose={props.onClose}
    >
      <fieldset className="popup__set">
        <div className="popup__container-input">
          <input
            type="text"
            name="title"
            id="input-title"
            className="popup__input popup__input-title"
            placeholder="Title"
            minLength="2"
            maxLength="30"
            required
            autoComplete="on"
          />
          <span className="popup__error" id="input__error-title"></span>
        </div>
        <div className="popup__container-input">
          <input
            type="url"
            name="url"
            id="input-image-add"
            className="popup__input popup__input-image"
            placeholder="Image URL"
            minLength="6"
            required
            autoComplete="on"
          />
          <span className="popup__error" id="input__error-url"></span>
        </div>
      </fieldset>
    </PopupWithForm>
  );
};

export default AddPlacePopup;
