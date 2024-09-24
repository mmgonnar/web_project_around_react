import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const Cards = ({ cards, onCardClick, onCardLike, onCardDelete }) => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="cards" id="cards-template">
      {cards.map((card) => {
        const isOwn = card.owner._id === currentUser._id;
        //console.log(isOwn);
        const cardDeleteButtonClassName = `button_delete  ${
          isOwn ? "button_delete _visible" : "button_delete _hidden"
        }`;
        // const isLiked = card.likes.some((i) => i._id === currentUser._id);
        // console.log(isLiked);
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
                    //isLiked ? "button_lie.liked" : ""
                    card.likes.some((like) => like._id === currentUser._id)
                      ? "button_like liked"
                      : ""
                  }`}
                  onClick={() => onCardLike(card)}
                ></button>
                <p className="card__counter">{card.likes.length}</p>
              </div>
              <button
                className="button button_delete"
                onClick={() => onCardDelete(card._id)}
              ></button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
