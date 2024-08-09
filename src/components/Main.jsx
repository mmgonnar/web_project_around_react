import React, { useState } from "react";
import Profile from "./Profile";

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
  return (
    <>
      {/* <Profile /> */}
      <section class="profile">
        <div class="profile__container">
          <img
            src="/images/profile.png"
            alt="profile avatar"
            class="profile__avatar"
          />
          <button
            onClick={handleEditAvatarClick}
            class="button button_edit-avatar"
          ></button>
          <div class="profile__overlay"></div>
        </div>
        <div class="profile__info">
          <div class="profile__info-container">
            <p class="profile__name">Jacques Cousteau</p>
            <button
              onClick={handleEditProfileClick}
              class="button button_edit"
            ></button>
          </div>
          <p class="profile__job">Explorer</p>
        </div>
        <button class="button button_add"></button>
      </section>
      {/* Popup Edit */}
      <section class="cards"></section>
      <div class="popup popup_edit">
        <div class="popup__overlay"></div>
        <div class="popup__content">
          <div class="popup__container">
            <button class="button button_close"></button>
            <span class="popup__title">Edit profile</span>
            <form class="popup__form" id="form-edit-profile" novalidate>
              <fieldset class="popup__set">
                <div class="popup__container-input">
                  <input
                    type="text"
                    name="name"
                    id="input-name"
                    class="popup__input popup__input-name"
                    placeholder="Name"
                    minlength="2"
                    maxlength="40"
                    required
                    autocomplete="on"
                  />
                  <span class="popup__error" id="input__error-name"></span>
                </div>
                <div class="popup__container-input">
                  <input
                    type="text"
                    name="job"
                    º
                    id="input-job"
                    class="popup__input popup__input-job"
                    placeholder="Job"
                    minlength="2"
                    maxlength="200"
                    required
                    autocomplete="on"
                  />
                  <span class="popup__error" id="input__error-job"></span>
                </div>
              </fieldset>
              <fieldset class="popup__set">
                <button
                  type="submit"
                  class="button button_submit button_submit-disabled"
                >
                  Save
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
      {/* Popup Add */}
      <div class="popup popup_add">
        <div class="popup__overlay"></div>
        <div class="popup__content">
          <div class="popup__container">
            <button class="button button_close"></button>
            <span class="popup__title">New Place</span>
            <form
              class="popup__form popup__form_add"
              id="form-add-place"
              novalidate
            >
              <fieldset class="popup__set">
                <div class="popup__container-input">
                  <input
                    type="text"
                    name="title"
                    id="input-title"
                    class="popup__input popup__input-title"
                    placeholder="Title"
                    minlength="2"
                    maxlength="30"
                    required
                    autocomplete="on"
                  />
                  <span class="popup__error" id="input__error-title"></span>
                </div>
                <div class="popup__container-input">
                  <input
                    type="url"
                    name="url"
                    id="input-image-add"
                    class="popup__input popup__input-image"
                    placeholder="Image URL"
                    minlength="6"
                    required
                    autocomplete="on"
                  />
                  <span class="popup__error" id="input__error-url"></span>
                </div>
              </fieldset>
              <fieldset class="popup__set">
                <button
                  type="submit"
                  class="button button_submit button_submit-disabled"
                >
                  Save
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
      {/* Popup Image */}
      <div class="popup popup_image">
        <div class="popup__overlay"></div>
        <div class="popup__content popup__content-image">
          <button class="button button_close"></button>
          <img src="" alt="" class="popup__element" />
          <span class="popup__title popup__title_img"></span>
        </div>
      </div>
      {/* Popup Avatar */}
      {isAvatarPopupOpen && (
        <div class="popup popup_avatar popup_show">
          <div class="popup__overlay"></div>
          <div class="popup__content popup__content-avatar">
            <div class="popup__container">
              <button class="button button_close"></button>
              <span class="popup__title">Change profile</span>
              <form
                class="popup__form popup__form_avatar"
                id="form-avatar"
                novalidate
              >
                <fieldset class="popup__set">
                  <div class="popup__container-input">
                    <input
                      type="url"
                      name="url-avatar"
                      id="input-image-avatar"
                      class="popup__input popup__input-image"
                      placeholder="Image URL"
                      minlength="6"
                      required
                      autocomplete="on"
                    />
                    <span
                      class="popup__error"
                      id="input__error-url-avatar"
                    ></span>
                  </div>
                </fieldset>
                <fieldset class="popup__set">
                  <button
                    type="submit"
                    class="button button_submit button_submit-disabled"
                  >
                    Save
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      )}
      {/* Popup Confirmation */}
      <div class="popup popup_confirmation">
        <div class="popup__overlay"></div>
        <div class="popup__content popup__content-confirmation">
          <div class="popup__container">
            <button class="button button_close"></button>
            <span class="popup__title">Are you sure?</span>
            <form
              class="popup__form popup__form_add"
              id="form-add-place-confitmation"
              novalidate
            >
              <fieldset class="popup__set">
                <button
                  type="submit"
                  class="button button_submit button_submit-disabled"
                >
                  Yes
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
      {/* Template */}
      {/* <template class="cards" id="cards-template">
        <div class="card">
          <img class="card__image" alt="" />
          <div class="card__info">
            <p class="card__title">
              <strong class="card__title-strong"></strong>
            </p>
            <div class="card__likes">
              <button class="button button_like"></button>
              <p class="card__counter"></p>
            </div>
            <button class="button button_delete"></button>
          </div>
        </div>
      </template> */}
    </>
  );
};

export default Main;
