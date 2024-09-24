import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const Cards = ({ cards, onCardClick, onCardLike }) => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="cards" id="cards-template">
      {cards.map((card) => {
        const isOwn = card.owner._id === currentUser._id;
        const cardDeleteButtonClassName = `card__delete-button ${
          isOwn ? "card__delete-button_visible" : "card__delete-button_hidden"
        }`;
        const isLiked = card.likes.some((i) => i._id === currentUser._id);
        const cardLikeButtonClassName = `...`;

        return (
          <div className="card" id={card._id} key={card._id}>
            <div onClick={() => onCardClick(card)}>
              <img className="card__image" alt={card.name} src={card.link} />
            </div>
            <div className="card__info">
              <p className="card__title">
                <strong className="card__title-strong">{card.name}</strong>
              </p>
              <div className="card__likes">
                <button
                  //className="button button_like"
                  className={`button_like ${
                    card.likes.some((like) => like._id === currentUser._id)
                      ? "button_like.liked"
                      : ""
                  }`}
                  onClick={() => onCardLike}
                ></button>
                <p className="card__counter">{card.likes.length}</p>
              </div>
              <button className="button button_delete"></button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
