import '../pages/index.css'

import { Card } from '../pages/components/Card.js'
import { FormValidator } from '../pages/components/FormValidator.js';
import { Section } from '../pages/components/Section.js';
import { PopupWithImage } from '../pages/components/PopupWithImage.js';
import { UserInfo } from '../pages/components/UserInfo.js'
import { PopupWithForm } from '../pages/components/PopupWithForm.js'
import { validationConfig } from '../pages/utils/config.js';
import { initialCards } from '../pages/utils/initial-cards.js';
import {
  profilePopup, popupTypeAddCardElement, popupOpenImgPlace, buttonOpenPopupProfile, buttonClosePopupProfile,
  formElement, inputElement, userProfile, userInfo, profile, profileName, profileJob, itemTemplateElement,
  profileTitle, profilePlace, listElement, popupAddOpenButtonElement, popupAddCloseButtonElement, popupAddSaveButtonElement,
  formAddElement, editFormTitle, editFormLink, popupOpenImgPlaceImage, popupOpenImgPlaceText, popupOpenImgCloseButton, user
} from '../pages/utils/constants.js';
//

const popupOpenImage = new PopupWithImage(popupOpenImgPlace)

function handleCardClick(link, name) {
  popupOpenImage.open(link, name);
}
popupOpenImage.setEventListeners();


const cardList = new Section(
  {
    data: initialCards,
    renderer: (item) => createCard(item),
  },
  listElement
);
cardList.renderItems();

function createCard(item) {
  const card = new Card(item, itemTemplateElement, handleCardClick);
  cardList.addItem(card.generateCard());
}


const editProfileValidate = new FormValidator(validationConfig, formElement);
editProfileValidate.enableValidation();
const addNewCardValidate = new FormValidator(validationConfig, formAddElement);
addNewCardValidate.enableValidation();

const userProfileInfo = new UserInfo({ nameSelector: user.userProfile, infoSelector: user.userInfo });
const popupEditProfile = new PopupWithForm(profilePopup, userSubmitForm);
const popupAddCard = new PopupWithForm(popupTypeAddCardElement, cardSubmitForm)


function userSubmitForm({ name, info }) {
  userProfileInfo.setUserInfo({ name, info });
}

function cardSubmitForm() {
  createCard({
    name: editFormTitle.value,
    link: editFormLink.value
  }, listElement);
  formAddElement.reset();
  addNewCardValidate.toggleButtonState();
  addNewCardValidate.deleteValidation();
}

function openEditProfilePopup() {
  popupEditProfile.open();
  userProfile.value = userProfileInfo.getUserInfo().name;
  userInfo.value = userProfileInfo.getUserInfo().info;
}

function openEditCardPopup() {
  popupAddCard.open()
}

buttonOpenPopupProfile.addEventListener('click', openEditProfilePopup);
popupAddOpenButtonElement.addEventListener('click', openEditCardPopup)


popupEditProfile.setEventListeners();
popupAddCard.setEventListeners();

