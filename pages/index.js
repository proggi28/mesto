import Card from './components/Card.js';
import { FormValidator } from './components/FormValidator.js';
import Section from './components/Section.js';
import {PopupWithImage} from './components/PopupWithImage.js';
import UserInfo from './components/UserInfo.js'
import {PopupWithForm} from './components/PopupWithForm.js'
import { validationConfig } from './utils/config.js';
import { initialCards } from './utils/initial-cards.js';
import { profilePopup, popupTypeAddCardElement, popupOpenImgPlace, buttonOpenPopupProfile, buttonClosePopupProfile,
formElement, inputElement, userProfile, userInfo, profile, profileName, profileJob,itemTemplateElement,
profileTitle, profilePlace, listElement, popupAddOpenButtonElement, popupAddCloseButtonElement, popupAddSaveButtonElement,
formAddElement, editFormTitle, editFormLink, popupOpenImgPlaceImage, popupOpenImgPlaceText, popupOpenImgCloseButton, user } from '../pages/utils/constants.js';
//

const popupOpenImage = new PopupWithImage(popupOpenImgPlace) 

function handleCardClick(link, name) {
    popupOpenImage.open(link, name);
    popupOpenImage.setEventListeners();
}

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
  const cardElement = card.generateCard();
  cardList.addItem(cardElement);
}

const editProfileValidate = new FormValidator(validationConfig, formElement);
editProfileValidate.enableValidation();
const addNewCardValidate = new FormValidator(validationConfig, formAddElement);
addNewCardValidate.enableValidation();

const userProfileInfo = new UserInfo({nameSelector: user.userProfile, infoSelector: user.userInfo});
const editProfile = new PopupWithForm(profilePopup, userSubmitForm);
const addNewCard = new PopupWithForm(popupTypeAddCardElement, cardSubmitForm)


function userSubmitForm({name, info}) {
  userProfileInfo.setUserInfo({name, info});
  editProfile.close();
}

function cardSubmitForm() {
  createCard({
    name: editFormTitle.value,
    link: editFormLink.value
  }, listElement);
  formAddElement.reset();
  addNewCardValidate.toggleButtonState();
  addNewCardValidate.deleteValidation();
  addNewCard.close();
}

function editProfilePopup() {
  editProfile.open();
  userProfile.value = userProfileInfo.getUserInfo().name;
  userInfo.value = userProfileInfo.getUserInfo().info;
}

function editCardPopup() {
  addNewCard.open()
}

buttonOpenPopupProfile.addEventListener('click', editProfilePopup);
popupAddOpenButtonElement.addEventListener('click', editCardPopup)


editProfile.setEventListeners();
addNewCard.setEventListeners();

