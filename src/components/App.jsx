import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Cards from "./Cards";
import { CurrentUserContext } from "../contexts/CurretUserContext";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isAvatarPopupOpen, setAvatarPopupOpen] = useState(false);
  const [isCardPopupOpen, setCardPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const currentUser = api.getUserInfo();

  const handleEditAvatarClick = () => {
    setAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
  };

  const handleCardClick = (card) => {
    setCardPopupOpen(true);
    setSelectedCard(card);
  };

  const handlers = {
    add: setAddPlacePopupOpen,
    avatar: setAvatarPopupOpen,
    edit: setEditProfilePopupOpen,
    image: () => {
      setSelectedCard(null);
    },
  };

  const handleClose = (popupId) => {
    const setClose = handlers[popupId];
    setClose(false);
  };
  return (
    <CurrentUserContext.Provider>
      <>
        <Header />
        <Main
          isEditProfilePopupOpen={isEditProfilePopupOpen}
          isAddPlacePopupOpen={isAddPlacePopupOpen}
          isAvatarPopupOpen={isAvatarPopupOpen}
          isCardPopupOpen={isCardPopupOpen}
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onEditAvatarClick={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onClose={handleClose}
          selectedCard={selectedCard}
        />
        <Footer />
      </>
    </CurrentUserContext.Provider>
  );
}

export default App;
