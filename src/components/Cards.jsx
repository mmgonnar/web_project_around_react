import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const Cards = ({ cards, onCardClick }) => {
  const currentUser = useContext(CurrentUserContext);
  return (
    <div className="cards" id="cards-template">
      {cards.map((card) => {
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
                <button className="button button_like"></button>
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
