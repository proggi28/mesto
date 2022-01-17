import './pages/index.css'

import { Api } from './pages/components/Api';
import { Card } from './pages/components/Card.js'
import { FormValidator } from './pages/components/FormValidator.js';
import { Section } from './pages/components/Section.js';
import { PopupWithImage } from './pages/components/PopupWithImage.js';
import { UserInfo } from './pages/components/UserInfo.js'
import { PopupWithForm } from './pages/components/PopupWithForm.js'
import { validationConfig } from './pages/utils/config.js';
import { initialCards } from './pages/utils/initial-cards.js';
import { PopupDeleteCard } from './pages/components/PopupDeleteCard';
import {
  profilePopup, popupTypeAddCardElement, popupOpenImgPlace, popupCardDelete, popupAvatarChange, buttonOpenPopupProfile, buttonClosePopupProfile,
  formElement, inputElement, userProfile, userInfo, profile, profileName, profileJob, itemTemplateElement,
  profileTitle, profilePlace, listElement, popupAddOpenButtonElement, popupAddCloseButtonElement, popupAddSaveButtonElement,
  formAddElement, editFormTitle, editFormLink, popupOpenImgPlaceImage, popupOpenImgPlaceText, popupOpenImgCloseButton, user, buttonEditAvatar, formEditAvatar, popupAvatarSaveButton, popupEditSaveButton
} from './pages/utils/constants.js';
//

const popupOpenImage = new PopupWithImage(popupOpenImgPlace);

const editProfileValidate = new FormValidator(validationConfig, formElement);

const addNewCardValidate = new FormValidator(validationConfig, formAddElement);

const editAvatarValidate = new FormValidator(validationConfig, formEditAvatar);

const userProfileInfo = new UserInfo({ nameSelector: user.userProfile, infoSelector: user.userInfo, avatarSelector: user.avatar });

const popupEditProfile = new PopupWithForm(profilePopup, userSubmitForm);

const popupAddCard = new PopupWithForm(popupTypeAddCardElement, cardSubmitForm);

const popupEditAvatar = new PopupWithForm(popupAvatarChange, avatarChange);

const popupDelCard = new PopupDeleteCard(popupCardDelete, deleteCardSubmitHandler);

const cardList = new Section({ renderer: (item) => { cardList.addItem(createCard(item)) } }, listElement);

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-27',
  headers: {
    authorization: '772a000d-3f96-41bc-86aa-236e12ab469e',
    "content-type": "application/json"
  }
});
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
      likeButtonClick: (likeButton, cardId) => {
        if (likeButton.classList.contains('card__heart_active')) {
          api
            .deleteLike(cardId)
            .then((res) => {
              card.buttonLike(res.likes)
            })
            .catch((err) => {
              console.log(err)
            })
        } else {
          api
            .addLike(cardId)
            .then((res) => {
              card.buttonLike(res.likes);
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
  popupAddSaveButtonElement.textContent = "Сохранение..."
  api.addCard({ name: data.title, link: data.url })
    .then(() => {
      createCard({
        name: editFormTitle.value,
        link: editFormLink.value
      }, listElement);
      formAddElement.reset();
      addNewCardValidate.toggleButtonState();
      addNewCardValidate.deleteValidation();
    })
    .then((res) => {
      cardList.renderItems(res);
    })
    .catch((err) => console.log(err))
    .finally(() => {
      popupAddSaveButtonElement.textContent = "Создать"
    })
}

function userSubmitForm(data) {
  popupEditSaveButton.textContent = "Сохранение...";
  api.editProfile({ name: data.name, about: data.info })
    .then((data) => {
      console.log(data);
      userProfileInfo.setUserInfo(data);
      popupEditProfile.close();
    })
    .catch((err) => console.log(err))
    .finally(() => {
      popupEditSaveButton.textContent = "Сохранить";
    })
}



function avatarChange({ avatar }) {
  popupAvatarSaveButton.textContent = 'Сохранение...';
  api.editAvatar({ avatar })
    .then((res) => {
      console.log(res)
      userProfileInfo.setUserInfo(res);
      popupEditAvatar.close()
    })
    .catch((err) => console.log(err))
    .finally(() => {
      popupAvatarSaveButton.textContent = 'Сохранить';
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
