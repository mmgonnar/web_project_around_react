import React from "react";

const Cards = () => {
  return (
    <>
      <div className="cards" id="cards-template">
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
      </div>
    </>
  );
};
