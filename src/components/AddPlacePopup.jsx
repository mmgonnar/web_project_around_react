import React, { useEffect, useRef, useState } from "react";
import PopupWithForm from "./PopupWithForm";

const AddPlacePopup = (props) => {
  const addPlaceInputRef = useRef(null);
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [isLinkValid, setIsLinkValid] = useState(false);
  const [isTitleValid, setIsTitleValid] = useState(false);

  useEffect(() => {
    if (props.isOpened) {
      setTitle("");
      setLink("");
    }
  }, [props.isOpened]);

  const handleChangeTitle = (evt) => {
    setTitle(evt.target.value);
    setIsTitleValid(evt.target.validity.valid);
    checkFormValidity();
  };

  const handleChangeLink = (evt) => {
    setLink(evt.target.value);
    setIsLinkValid(evt.target.validity.valid);
    checkFormValidity();
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    checkFormValidity();

    if (isFormValid) {
      props.onAddCard(link, title);
    } else {
      console.error("Please check inputs");
    }
  };

  console.log(isFormValid);
  const checkFormValidity = () => {
    if (isTitleValid && isLinkValid) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
    /* if (title.length >= 2 && title.length <= 40) {
      setIsFormValid(true);
      //setIsFormValid(title.length >= 2 && title.length <= 40);
    }
    if (link.target.validity.valid) {
      setIsFormValid(true);
      //setIsFormValid(link.target.validity.valid);
    } */
  };

  // const checkFormValidity = () => {
  //   const isTitleValid = title.trim() !== "";
  //   const isLinkValid = link.trim() !== "";
  //   setIsFormValid(isTitleValid && isLinkValid);
  // };

  return (
    <PopupWithForm
      title="New Place"
      name="add"
      isOpened={props.isOpened}
      onClose={props.onClose}
      isFormValid={isFormValid}
      onSubmit={handleSubmit}
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
            value={title}
            onChange={handleChangeTitle}
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
            value={link}
            ref={addPlaceInputRef}
            onChange={handleChangeLink}
          />
          <span className="popup__error" id="input__error-url"></span>
        </div>
      </fieldset>
    </PopupWithForm>
  );
};

export default AddPlacePopup;
