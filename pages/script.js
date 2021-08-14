import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js'

//Поиск попапов
const profilePopup = document.querySelector('.popup_type_profile');
const popupTypeAddCardElement = document.querySelector('.popup_type_add-card');
const popupOpenImgPlace = document.querySelector('.popup-image');

//Кнопки попапа popupProfile
const popupOpenButtonElement = document.querySelector('.profile__edit-button');
const popupCloseButtonElement = profilePopup.querySelector('.popup__close-button');
//Форма попапа
const formElement = profilePopup.querySelector('.popup__form');
const inputElement = document.querySelector('popup__input');
//Поля попапа popupProfile
const editFormName = profilePopup.querySelector('.popup__input_type_name');
const editFormJob = profilePopup.querySelector('.popup__input_type_job');
const profile = document.querySelector('.profile');
const profileName = profile.querySelector('.profile__title');
const profileJob = profile.querySelector('.profile__text');

//Темплейт
const itemTemplateElement = document.querySelector('.item-template').content;
//Поля темплейта
const profileTitle = itemTemplateElement.querySelector('.card__title');
const profilePlace = itemTemplateElement.querySelector('.card__image');

//Список для добавления карточек
const listElement = document.querySelector('.cards__list-style');

//Кнопки попапа popupTypeAddCardElement
const popupAddOpenButtonElement = document.querySelector('.profile__add-button');
const popupAddCloseButtonElement = popupTypeAddCardElement.querySelector('.popup__close-button_add_card');
const popupAddSaveButtonElement = popupTypeAddCardElement.querySelector('.popup__save-button_add_card');
//Форма попапа popupTypeAddCardElement
const formAddElement = document.querySelector('.popup__form_add_element');
//Поля попапа popupTypeAddCardElement
const editFormTitle = popupTypeAddCardElement.querySelector('.popup__input_type_title');
const editFormPlace = popupTypeAddCardElement.querySelector('.popup__input_type_place');


//Попап увеличения изображения
const popupOpenImgPlaceImage = popupOpenImgPlace.querySelector('.popup-image__image');
const popupOpenImgPlaceText = popupOpenImgPlace.querySelector('.popup-image__text');
const popupOpenImgCloseButton = popupOpenImgPlace.querySelector('.popup__close-button_open_image');


function takePreviewImage(name, link) {
  popupOpenImgPlaceImage.src = link;
  popupOpenImgPlaceImage.alt = name;
  popupOpenImgPlaceText.textContent = name;
  openPopup(popupOpenImgPlace);
}

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__input-error',
  inputInvalidClass: 'popup__error-visible',
};

const editProfileValidate = new FormValidator(validationConfig, formElement);
const addNewCardValidate = new FormValidator(validationConfig, formAddElement);
editProfileValidate.enableValidation();
addNewCardValidate.enableValidation();

initialCards.forEach(function (el) {
  const card = new Card(el.name, el.link, itemTemplateElement, takePreviewImage);
  
  listElement.append(card.generateCard());
});

//Вызов основных функций

//Открытие попапа
const openPopup = function (popup) {
  popup.classList.add('popup_is-opened');

  document.addEventListener('keyup', handleEscUp);
}
//Закрытие попапа
const closePopup = function (popup) {
  popup.classList.remove('popup_is-opened');

  document.removeEventListener('keyup', handleEscUp);
}
//Закрытие попапа по темной области
const closePopupByClockOnOverlay = function (event) {
  if (event.target !== event.currentTarget) {
    return
  }

  const openedPopup = document.querySelector('.popup_is-opened');
  closePopup(openedPopup);
}
//Закрытие попапа кнопкой Esc
const handleEscUp = (evt) => {
  evt.preventDefault();
  if (evt.key === 'Escape') {
    const activePopup = document.querySelector('.popup_is-opened');
    closePopup(activePopup);
  }
};
//Кнопка отправки формы
const handleProfileFormSubmit = function (evt) {
  evt.preventDefault();
  profileName.textContent = editFormName.value;
  profileJob.textContent = editFormJob.value;

  closePopup(profilePopup);
}
//Слушатели попапа редактирования профиля
popupOpenButtonElement.addEventListener('click', () => {
  openPopup(profilePopup);
  editFormName.value = profileName.textContent;
  editFormJob.value = profileJob.textContent;
})

popupCloseButtonElement.addEventListener('click', () => closePopup(profilePopup));
profilePopup.addEventListener('click', closePopupByClockOnOverlay);
formElement.addEventListener('submit', handleProfileFormSubmit);

//Слушатели попапа добавления карточки
popupAddOpenButtonElement.addEventListener('click', () => {
  openPopup(popupTypeAddCardElement);
  formAddElement.reset();
})

popupAddCloseButtonElement.addEventListener('click', () => {
  closePopup(popupTypeAddCardElement);
})
popupTypeAddCardElement.addEventListener('click', closePopupByClockOnOverlay);
formAddElement.addEventListener('submit', handleCardFormSubmit);


//Слушатели для попапа увеличения изображения
popupOpenImgCloseButton.addEventListener('click', () => {
  closePopup(popupOpenImgPlace);
})
popupOpenImgPlace.addEventListener('keydown', handleEscUp);
popupOpenImgPlace.addEventListener('click', closePopupByClockOnOverlay);


function handleCardFormSubmit(evt) {
  const card = new Card (editFormTitle.value, editFormPlace.value, itemTemplateElement)
  evt.preventDefault();
  listElement.prepend(card.generateCard())
  closePopup(popupTypeAddCardElement);
  formAddElement.reset();

  const inputList = Array.from(formAddElement.querySelectorAll('.popup__input'));
  const buttonElement = formAddElement.querySelector('.popup__save-button_add_card');
  const inactiveButtonClass = 'popup__save-button_inactive';
  toggleButtonState(inputList, buttonElement, inactiveButtonClass);
}