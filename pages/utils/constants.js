//Поиск попапов
const profilePopup = document.querySelector('.popup_type_profile');
const popupTypeAddCardElement = document.querySelector('.popup_type_add-card');
const popupOpenImgPlace = document.querySelector('.popup-image');

//Кнопки попапа popupProfile
const buttonOpenPopupProfile = document.querySelector('.profile__edit-button');
const buttonClosePopupProfile = profilePopup.querySelector('.popup__close-button');
//Форма попапа
const formElement = profilePopup.querySelector('.popup__form');
const inputElement = document.querySelector('popup__input');
//Поля попапа popupProfile
const userProfile = profilePopup.querySelector('.popup__input_type_name');
const userInfo = profilePopup.querySelector('.popup__input_type_job');
const profile = document.querySelector('.profile');
const profileName = profile.querySelector('.profile__title');
const profileJob = profile.querySelector('.profile__text');

//Темплейт
const itemTemplateElement = '.item-template';
//Поля темплейта
const profileTitle = '.card__title';
const profilePlace = '.card__image';

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
const editFormLink = popupTypeAddCardElement.querySelector('.popup__input_type_place');


//Попап увеличения изображения
const popupOpenImgPlaceImage = popupOpenImgPlace.querySelector('.popup-image__image');
const popupOpenImgPlaceText = popupOpenImgPlace.querySelector('.popup-image__text');
const popupOpenImgCloseButton = popupOpenImgPlace.querySelector('.popup__close-button_open_image');

const user = {
    userProfile: '.profile__title',
    userInfo: '.profile__text'
  }

export { profilePopup, popupTypeAddCardElement, popupOpenImgPlace, buttonOpenPopupProfile, buttonClosePopupProfile,
    formElement, inputElement, userProfile, userInfo, profile, profileName, profileJob,itemTemplateElement,
    profileTitle, profilePlace, listElement, popupAddOpenButtonElement, popupAddCloseButtonElement, popupAddSaveButtonElement,
    formAddElement, editFormTitle, editFormLink, popupOpenImgPlaceImage, popupOpenImgPlaceText, popupOpenImgCloseButton, user }