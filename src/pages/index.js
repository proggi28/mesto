import '/src/pages/index.css';

import { Api } from '/src/components/Api';
import { Card } from '/src/components/Card.js'
import { FormValidator } from '/src/components/FormValidator.js';
import { Section } from '/src/components/Section.js';
import { PopupWithImage } from '/src/components/PopupWithImage.js';
import { UserInfo } from '/src/components/UserInfo.js'
import { PopupWithForm } from '/src/components/PopupWithForm.js'
import { PopupDeleteCard } from '/src/components/PopupDeleteCard.js';

import {
  profilePopup, popupTypeAddCardElement, popupOpenImgPlace, popupCardDelete, popupAvatarChange, buttonOpenPopupProfile,
  formElement, userProfile, userInfo, itemTemplateElement,
  listElement, popupAddOpenButtonElement, popupAddSaveButtonElement,
  formAddElement, user, buttonEditAvatar, formEditAvatar
} from '/src/utils/constants.js';

import { validationConfig } from '/src/utils/config.js';


const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-27',
  headers: {
    authorization: '772a000d-3f96-41bc-86aa-236e12ab469e',
    "content-type": "application/json"
  }
});

const popupOpenImage = new PopupWithImage(popupOpenImgPlace);

const editProfileValidate = new FormValidator(validationConfig, formElement);

const addNewCardValidate = new FormValidator(validationConfig, formAddElement);

const userProfileInfo = new UserInfo({ nameSelector: user.userProfile, infoSelector: user.userInfo, avatarSelector: user.avatar });

const popupEditProfile = new PopupWithForm(profilePopup, userSubmitForm);

const popupAddCard = new PopupWithForm(popupTypeAddCardElement, cardSubmitForm);

const popupEditAvatar = new PopupWithForm(popupAvatarChange, avatarChange);

const popupDelCard = new PopupDeleteCard(popupCardDelete, deleteCardSubmitHandler);

const cardList = new Section({ renderer: (item) => { cardList.addItem(createCard(item)) } }, listElement);

const editAvatarValidate = new FormValidator(validationConfig, formEditAvatar);


let userId;
Promise.all([api.getUserServerInfo(), api.getCards()])
  .then(([userData, cards]) => {
    userId = userData._id;

    cardList.renderItems(cards);
    userProfileInfo.setUserInfo(userData)
  }).catch((err) => {
    console.log(err);
  });


function createCard(item) {
  const card = new Card(item, itemTemplateElement, userId, {
    handleCardClick: handleCardClick,
    deleteCardClick: (card, cardId, deleteCard) => {
      popupDelCard.open(card, cardId, deleteCard)
    },
    likeButtonClick: (addLike, cardId) => {
      if (addLike.classList.contains('card__heart_active')) {
        api
          .deleteLike(cardId)
          .then((res) => {
            card.addLike(res.likes)
          })
          .catch((err) => {
            console.log(err)
          })
      } else {
        api
          .addLike(cardId)
          .then((res) => {
            card.addLike(res.likes);
          })
          .catch((err) => {
            console.log(err);
          })
      }
    }
  });
  const cardElement = card.generateCard();
  return cardElement;
}


function deleteCardSubmitHandler(card, cardId, deleteCard) {
  api
    .deleteCard(cardId)
    .then(() => {
      deleteCard();
      popupDelCard.close();
    })
    .catch((err) => {
      console.log(err);
    })
}



function cardSubmitForm(data) {
  popupAddCard.renderLoading(true);
  api
    .addCard({ name: data.title, link: data.url })
    .then((res) => {
      const newCard = createCard(res);
      cardList.addOneItem(newCard);
      popupAddCard.close();
      formAddElement.reset();
      addNewCardValidate.toggleButtonState();
      addNewCardValidate.deleteValidation();
    })
    .catch((err) => console.log(err))
    .finally(() => {
      popupAddSaveButtonElement.textContent = "Создать";
    })
}

function userSubmitForm(data) {
  popupEditProfile.renderLoading(true);
  api
    .editProfile({ name: data.name, about: data.info, avatar: data.avatar })
    .then((res) => {
      userProfileInfo.setUserInfo(res);
      popupEditProfile.close();
    })
    .catch((err) => console.log(err))
    .finally(() => {
      popupEditProfile.renderLoading(false);
    })
}



function avatarChange(data) {
  popupEditAvatar.renderLoading(true);
  api
    .editAvatar({ name: data.name, about: data.info, avatar: data.avatar })
    .then((res) => {
      userProfileInfo.setUserInfo(res);
      popupEditAvatar.close();
      editAvatarValidate.deleteValidation();
    })
    .catch((err) => console.log(err))
    .finally(() => {
      popupEditAvatar.renderLoading(false);
    })
}

function openEditProfilePopup() {
  popupEditProfile.open();
  userProfile.value = userProfileInfo.getUserInfo().name;
  userInfo.value = userProfileInfo.getUserInfo().info;
}

function openEditCardPopup() {
  popupAddCard.open()
  addNewCardValidate.deleteValidation();
}

function openEditAvatarPopup() {
  popupEditAvatar.open();
}

function handleCardClick(link, name) {
  popupOpenImage.open(link, name);
}


buttonOpenPopupProfile.addEventListener('click', openEditProfilePopup);
popupAddOpenButtonElement.addEventListener('click', openEditCardPopup);
buttonEditAvatar.addEventListener('click', openEditAvatarPopup);


popupEditProfile.setEventListeners();
popupAddCard.setEventListeners();
popupEditAvatar.setEventListeners();
popupOpenImage.setEventListeners();
popupDelCard.setEventListeners();
editProfileValidate.enableValidation();
addNewCardValidate.enableValidation();
editAvatarValidate.enableValidation();
editAvatarValidate.toggleButtonState();
