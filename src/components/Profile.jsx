import { useState } from "react";

const Profile = (props) => {
  const handleEditProfileClick = () => {};
  const handleAddPlaceClick = () => {};

  return (
    <section className="profile">
      <div className="profile__container">
        <img
          src="/images/profile.png"
          alt="profile avatar"
          className="profile__avatar"
        />
        <button
          onClick={props.handleEditAvatarClick}
          className="button button_edit-avatar"
        ></button>
        <div className="profile__overlay"></div>
      </div>
      <div className="profile__info">
        <div className="profile__info-container">
          <p className="profile__name">Jacques Cousteau</p>
          <button className="button button_edit"></button>
        </div>
        <p className="profile__job">Explorer</p>
      </div>
      <button className="button button_add"></button>
    </section>
  );
};

export default Profile;
