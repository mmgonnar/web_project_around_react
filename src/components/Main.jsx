import { useContext, useEffect, useState } from "react";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";
import api from "../utils/Api";
import Cards from "./Cards";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
/* import Profile from "./Profile"; */

const Main = (props) => {
  const currentUser = useContext(CurrentUserContext);
  // const [cards, setCards] = useState([]);

  /* useEffect(() => {
    const fetchData = async () => {
      try {
        const cardsData = await api.getCards();
        setCards(cardsData);
      } catch (error) {
        console.error("Error fetching user data: ", error);
      }
    };

    fetchData();
  }, []); */

  /* const handleCardLike = async (card) => {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    try {
      let newCard;
      if (isLiked) {
        newCard = await api.deleteLikeCard(card._id);
      } else {
        newCard = await api.likeCard(card._id);
        console.error("Liked Card");
      }

      // const newCard = await api.changeLikeCardStatus(card._id, !isLiked);
      // console.log(newCard);
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    } catch (error) {
      console.error("card like status: ", error);
    }
  }; */

  /* const handleCardDelete = async (cardId) => {
    try {
      await api.deleteCard(cardId);
      setCards((state) => state.filter((c) => c._id !== cardId));
    } catch (error) {
      console.error("Error deleting card");
    }
  };

  if (!currentUser) {
    return <div>Loading...</div>;
  } */

  return (
    <>
      {/* <Profile
        isAvatarPopupOpen={isAvatarPopupOpen}
        isAddPlacePopupOpen={isAddPlacePopupOpen}
      /> */}
      <section className="profile">
        <div className="profile__container">
          <img
            src={currentUser.avatar}
            alt="profile avatar"
            className="profile__avatar"
          />
          <button
            onClick={props.onEditAvatarClick}
            className="button button_edit-avatar"
          ></button>
          <div className="profile__overlay"></div>
        </div>
        <div className="profile__info">
          <div className="profile__info-container">
            <p className="profile__name">{currentUser.name}</p>
            <button
              onClick={props.onEditProfileClick}
              className="button button_edit"
            ></button>
          </div>
          <p className="profile__job">{currentUser.about}</p>
        </div>
        <button
          onClick={props.onAddPlaceClick}
          className="button button_add"
        ></button>
      </section>
      {/* Popup Edit */}
      {props.isEditProfilePopupOpen && (
        <EditProfilePopup
          isOpened={props.isEditProfilePopupOpen}
          onClose={props.onClose}
          onUpdateUser={props.onUpdateUser}
        ></EditProfilePopup>
      )}
      {/* Popup Add */}
      {props.isAddPlacePopupOpen && (
        <PopupWithForm
          title="New Place"
          name="add"
          isOpened={props.isAddPlacePopupOpen}
          onClose={props.onClose}
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
      {props.selectedCard && (
        <ImagePopup card={props.selectedCard} onClose={props.onClose} />
      )}
      {/* Popup Avatar */}
      {props.isAvatarPopupOpen && (
        <EditAvatarPopup
          isOpened={props.isAvatarPopupOpen}
          onClose={props.onClose}
          onUpdateUser={props.onUpdateUser}
          onUpdateAvatar={props.onUpdateAvatar}
        ></EditAvatarPopup>
        // <PopupWithForm
        //   title="Change Profile"
        //   name="avatar"
        //   isOpened={props.isAvatarPopupOpen}
        //   onClose={props.onClose}
        // >
        //   <fieldset className="popup__set">
        //     <div className="popup__container-input">
        //       <input
        //         type="url"
        //         name="url-avatar"
        //         id="input-image-avatar"
        //         className="popup__input popup__input-image"
        //         placeholder="Image URL"
        //         minLength="6"
        //         required
        //         autoComplete="on"
        //       />
        //       <span
        //         className="popup__error"
        //         id="input__error-url-avatar"
        //       ></span>
        //     </div>
        //   </fieldset>
        // </PopupWithForm>
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
      <Cards
        onCardClick={props.onCardClick}
        cards={props.cards}
        onCardLike={props.handleCardLike}
        onCardDelete={props.handleCardDelete}
      />
    </>
  );
};

export default Main;
