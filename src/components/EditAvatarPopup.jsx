import React from "react";
import PopupWithForm from "./PopupWithForm";

const EditAvatarPopup = (props) => {
  return;
  <PopupWithForm
    title="Change Profile"
    name="avatar"
    isOpened={props.isAvatarPopupOpen}
    onClose={props.onClose}
  >
    <fieldset className="popup__set">
      <div className="popup__container-input">
        <input
          type="url"
          name="url-avatar"
          id="input-image-avatar"
          className="popup__input popup__input-image"
          placeholder="Image URL"
          minLength="6"
          required
          autoComplete="on"
        />
        <span className="popup__error" id="input__error-url-avatar"></span>
      </div>
    </fieldset>
  </PopupWithForm>;
};

export default EditAvatarPopup;
