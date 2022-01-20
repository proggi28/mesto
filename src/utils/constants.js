//Поиск попапов
const profilePopup = document.querySelector('.popup_type_profile');
const popupTypeAddCardElement = document.querySelector('.popup_type_add-card');
const popupOpenImgPlace = document.querySelector('.popup-image');
const popupCardDelete = document.querySelector('.popup-delete');
const popupAvatarChange = document.querySelector('.popup-avatar');


//Кнопки попапа popupProfile
const buttonOpenPopupProfile = document.querySelector('.profile__edit-button');
//Форма попапа
const formElement = profilePopup.querySelector('.popup__form');
//Поля попапа popupProfile
const userProfile = profilePopup.querySelector('.popup__input_type_name');
const userInfo = profilePopup.querySelector('.popup__input_type_job');


//Темплейт
const itemTemplateElement = '.item-template';

//Список для добавления карточек
const listElement = document.querySelector('.cards__list-style');

//Кнопки попапа popupTypeAddCardElement
const popupAddOpenButtonElement = document.querySelector('.profile__add-button');

const popupAddSaveButtonElement = popupTypeAddCardElement.querySelector('.popup__save-button_add_card');
//Форма попапа popupTypeAddCardElement
const formAddElement = document.querySelector('.popup__form_add_element');

//Попап редактирования аватара
const buttonEditAvatar = document.querySelector('.profile__image-button');
const popupAvatarSaveButton = document.querySelector('.popup__save-button_button-avatar');

//Форма попапа редактирования профиля
const formEditAvatar = document.querySelector('.popup__form_add_avatar');


const user = {
  userProfile: '.profile__title',
  userInfo: '.profile__text',
  avatar: '.profile__avatar'
}

export {
  profilePopup, popupTypeAddCardElement, popupOpenImgPlace, popupCardDelete, buttonOpenPopupProfile,
  formElement, userProfile, userInfo, itemTemplateElement,
  listElement, popupAddOpenButtonElement, popupAddSaveButtonElement,
  formAddElement, user, popupAvatarChange, buttonEditAvatar, popupAvatarSaveButton, formEditAvatar
}