import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

function App() {
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
      <Header />
      <Main
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        conEditAvatarClick={handleEditAvatarClick}
        /* onCardClick={handleCardClick} */
      />
      <Footer />
    </>
  );
}

export default App;
