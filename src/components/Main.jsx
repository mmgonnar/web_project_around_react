import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm";
/* import Profile from "./Profile"; */

const Main = (props) => {
  const [isAvatarPopupOpen, setAvatarPopupOpen] = useState(false);
  const handleEditAvatarClick = () => {
    setAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    const element = document.querySelector(".popup_edit");
    if (element) {
      element.classList.add("popup_show");
    }
  };
  const handleClosePopup = () => {
    const element = document.querySelector(".popup_edit");
    if (element) {
      element.classList.remove("popup_show");
    }
  };

  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
  };

  const handlers = {
    add: setAddPlacePopupOpen,
    avatar: setAvatarPopupOpen,
    edit: handleClosePopup,
  };

  const handleClose = (popupId) => {
    const setClose = handlers[popupId];
    setClose(false);
  };
  return (
    <>
      {/* <Profile /> */}
      <section className="profile">
        <div className="profile__container">
          <img
            src="/images/profile.png"
            alt="profile avatar"
            className="profile__avatar"
          />
          <button
            onClick={handleEditAvatarClick}
            className="button button_edit-avatar"
          ></button>
          <div className="profile__overlay"></div>
        </div>
        <div className="profile__info">
          <div className="profile__info-container">
            <p className="profile__name">Jacques Cousteau</p>
            <button
              onClick={handleEditProfileClick}
              className="button button_edit"
            ></button>
          </div>
          <p className="profile__job">Explorer</p>
        </div>
        <button
          onClick={handleAddPlaceClick}
          className="button button_add"
        ></button>
      </section>
      {/* Popup Edit */}
      <PopupWithForm
        title="Edit Profile"
        name="edit"
        isOpened={""}
        onClose={handleClose}
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
      {/* Popup Add */}
      {isAddPlacePopupOpen && (
        <PopupWithForm
          title="New Place"
          name="add"
          isOpened={isAddPlacePopupOpen}
          onClose={handleClose}
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
      )}
      {/* Popup Image */}
      <div className="popup popup_image">
        <div className="popup__overlay"></div>
        <div className="popup__content popup__content-image">
          <button className="button button_close"></button>
          <img src="" alt="" className="popup__element" />
          <span className="popup__title popup__title_img"></span>
        </div>
      </div>
      {/* Popup Avatar */}
      {isAvatarPopupOpen && (
        <PopupWithForm
          title="Change Profile"
          name="avatar"
          isOpened={isAvatarPopupOpen}
          onClose={handleClose}
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
              <span
                className="popup__error"
                id="input__error-url-avatar"
              ></span>
            </div>
          </fieldset>
        </PopupWithForm>
      )}
      {/* Popup Confirmation */}
      <div className="popup popup_confirmation">
        <div className="popup__overlay"></div>
        <div className="popup__content popup__content-confirmation">
          <div className="popup__container">
            <button className="button button_close"></button>
            <span className="popup__title">Are you sure?</span>
            <form
              className="popup__form popup__form_add"
              id="form-add-place-confirmation"
              noValidate
            >
              <fieldset className="popup__set">
                <button
                  type="submit"
                  className="button button_submit button_submit-disabled"
                >
                  Yes
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
      {/* Template */}
      {/* <template className="cards" id="cards-template">
        <div className="card">
          <img className="card__image" alt="" />
          <div className="card__info">
            <p className="card__title">
              <strong className="card__title-strong"></strong>
            </p>
            <div className="card__likes">
              <button className="button button_like"></button>
              <p className="card__counter"></p>
            </div>
            <button className="button button_delete"></button>
          </div>
        </div>
      </template> */}
    </>
  );
};

export default Main;
