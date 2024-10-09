import { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Cards from "./Cards";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import api from "../utils/Api";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isAvatarPopupOpen, setAvatarPopupOpen] = useState(false);
  const [isCardPopupOpen, setCardPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cards, setCards] = useState([]);
  // const currentUser = api.getUserInfo();

  const [currentUser, setCurrentUser] = useState({
    name: "",
    about: "",
    avatar: "",
  });

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userData = await api.getUserInfo();
        setCurrentUser(userData);
      } catch (error) {
        console.error("Error fetching user data: ", error);
      }
    };

    fetchUserInfo();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cardsData = await api.getCards();
        setCards(cardsData);
      } catch (error) {
        console.error("Error fetching user data: ", error);
      }
    };

    fetchData();
  }, []);

  const handleEditAvatarClick = () => {
    console.log("click");
    setAvatarPopupOpen(true);
    console.log("opened");
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

  const handleUpdateUser = (name, about) => {
    api
      .updateUser(name, about)
      .then((updateUser) => {
        setCurrentUser(updateUser);
        handleClose("edit");
      })
      .catch((error) => {
        console.log(error);
        console.error("Error updating user");
      });
  };

  const handleUpdateAvatar = (avatar) => {
    api
      .updateAvatar(avatar)
      .then((updateAvatar) => {
        setCurrentUser(updateAvatar);
        handleClose("avatar");
      })
      .catch((error) => {
        console.log(error);
        console.error("Error updating avatar");
      });
  };

  const handleClose = (popupId) => {
    const setClose = handlers[popupId];
    setClose(false);
  };
  return (
    <CurrentUserContext.Provider value={currentUser}>
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
          setCurrentUser={setCurrentUser}
          onUpdateUser={handleUpdateUser}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <Footer />
      </>
    </CurrentUserContext.Provider>
  );
}

export default App;
