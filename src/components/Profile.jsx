import { useState } from "react";

const Profile = (props) => {
  const handleEditProfileClick = () => {};
  const handleAddPlaceClick = () => {};

  return (
    <section class="profile">
      <div class="profile__container">
        <img
          src="/images/profile.png"
          alt="profile avatar"
          class="profile__avatar"
        />
        <button
          onClick={props.handleEditAvatarClick}
          class="button button_edit-avatar"
        ></button>
        <div class="profile__overlay"></div>
      </div>
      <div class="profile__info">
        <div class="profile__info-container">
          <p class="profile__name">Jacques Cousteau</p>
          <button class="button button_edit"></button>
        </div>
        <p class="profile__job">Explorer</p>
      </div>
      <button class="button button_add"></button>
    </section>
  );
};

export default Profile;
