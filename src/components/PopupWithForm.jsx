import React, { useEffect, useRef, useState } from "react";

const PopupWithForm = (props) => {
  const [isFormValid, setIsFormValid] = useState(false);
  const popupRef = useRef(null);
  const handleClose = () => {
    const popupId = popupRef.current.id;
    props.onClose(popupId);
  };

  useEffect(() => {
    const handleKeyPress = (evt) => {
      if (evt.key === "Escape") {
        handleClose(evt);
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  /* const handleSubmit = (evt) => {
    evt.preventDefault();
    if (isFormValid) {
      props.onSubmitEditProfile(name, description);
    }
  }; */

  const handleSubmit = (evt) => {
    evt.isFormValid();
    if (props.isFormValid) {
      props.onSubmit();
    }
  };

  return (
    <div
      ref={popupRef}
      id={props.name}
      className={`popup popup_${props.name} ${
        props.isOpened ? "popup_show" : ""
      }`}
    >
      <div onClick={handleClose} className="popup__overlay"></div>
      <div className="popup__content">
        <div className="popup__container">
          <button
            onClick={handleClose}
            className="button button_close"
          ></button>
          <span className="popup__title">{props.title}</span>
          <form
            className="popup__form"
            id={`form-${props.name}`}
            name={props.name}
            noValidate
          >
            {props.children}
            <button
              type="submit"
              className={`button button_submit ${
                isFormValid ? "" : "button_submit-disabled"
              }`}
              disabled={!props.isFormValid}
              onSubmit={handleSubmit()}
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopupWithForm;
