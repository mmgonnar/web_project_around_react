import React from "react";

const ImagePopup = () => {
  return (
    <>
      <div class="popup popup_image">
        <div class="popup__overlay"></div>
        <div class="popup__content popup__content-image">
          <button class="button button_close"></button>
          <img src="" alt="" class="popup__element" />
          <span class="popup__title popup__title_img"></span>
        </div>
      </div>
    </>
  );
};
