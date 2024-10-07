import React, { useRef, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

const EditAvatarPopup = (props) => {
  const avatarInputRef = useRef(null);

  const handleSubmit = (evt) => {
    console.log("handle submit");
    evt.preventDefault();

    props.onUpdateAvatar({
      avatar: avatarInputRef.current.value,
    });
  };

  useEffect(() => {
    if (props.isOpened) {
    }
  }, [props.isOpened]);

  return (
    <PopupWithForm
      title="Change Profile"
      name="avatar"
      isOpened={props.isOpened}
      onClose={props.onClose}
      onSubmit={handleSubmit}
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
            ref={avatarInputRef}
          />
          <span className="popup__error" id="input__error-url-avatar"></span>
        </div>
      </fieldset>
    </PopupWithForm>
  );
};

export default EditAvatarPopup;
