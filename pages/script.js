// Вывод карточек из массива
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 


//const popupElement = document.querySelector('.popup')

//Поиск попапов
const profilePopup = document.querySelector('.popup_type_profile')
const popupTypeAddCardElement = document.querySelector('.popup_type_add-card')
const popupOpenImgPlace = document.querySelector('.popup-image');

//Кнопки попапа popupProfile
const popupOpenButtonElement = document.querySelector('.profile__edit-button')
const popupCloseButtonElement = profilePopup.querySelector('.popup__close-button')
//Форма попапа popupProfile
const formPopup = document.querySelector('.popup__form')
const formProfile = profilePopup.querySelector('.popup__form')
const inputElement = document.querySelector('popup__input')
//Поля попапа popupProfile
const editFormName = profilePopup.querySelector('.popup__input_type_name')
const editFormJob = profilePopup.querySelector('.popup__input_type_job')
const profile = document.querySelector('.profile')
const profileName = profile.querySelector('.profile__title')
const profileJob = profile.querySelector('.profile__text')

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
const formAddElement = document.querySelector('.popup__form_add_element')
//Поля попапа popupTypeAddCardElement
const editFormTitle = popupTypeAddCardElement.querySelector('.popup__input_type_title')
const editFormPlace = popupTypeAddCardElement.querySelector('.popup__input_type_place')


//Попап увеличения изображения
const popupOpenImgPlaceImage = popupOpenImgPlace.querySelector('.popup-image__image');
const popupOpenImgPlaceText = popupOpenImgPlace.querySelector('.popup-image__text');
const popupOpenImgCloseButton = popupOpenImgPlace.querySelector('.popup__close-button_open_image')


//Вызов основных функций
const openPopup = function(popup) {
    popup.classList.add('popup_is-opened') 
}

const closePopup = function(popup) {
    popup.classList.remove('popup_is-opened')
}

const closePopupByClockOnOverlay = function(event) {
    if (event.target !== event.currentTarget) {
        return
    }

    const openedPopup = document.querySelector('.popup_is-opened');
    closePopup(openedPopup);
}

const handleEscUp = (evt) => {
  evt.preventDefault();
  if (evt.key === 'Escape') {
    //const activePopup = document.querySelector('.popup_is-opened');
    //closePopup(activePopup);
    closePopup(profilePopup)
    closePopup(popupTypeAddCardElement)
    closePopup(popupOpenImgPlace);
  }
};

document.addEventListener('keyup', handleEscUp)

const submitProfileForm = function(evt) {
    evt.preventDefault()
    profileName.textContent = editFormName.value
    profileJob.textContent = editFormJob.value

    closePopup(profilePopup)
}
//Слушатели попапа редактирования профиля
popupOpenButtonElement.addEventListener('click', () => {
  openPopup(profilePopup);
  editFormName.value = profileName.textContent
  editFormJob.value = profileJob.textContent
})

popupCloseButtonElement.addEventListener('click', () => closePopup(profilePopup))
profilePopup.addEventListener('click', closePopupByClockOnOverlay)
formProfile.addEventListener('submit', submitProfileForm)

//Слушатели попапа добавления карточки
popupAddOpenButtonElement.addEventListener('click', () => {
  openPopup(popupTypeAddCardElement)
  editFormTitle.value = ""; 
  editFormPlace.value = ""; 
})

popupAddCloseButtonElement.addEventListener('click', () => {
  closePopup(popupTypeAddCardElement);
})

popupTypeAddCardElement.addEventListener('click', closePopupByClockOnOverlay)

formAddElement.addEventListener('submit', formAddSubmitHandler);

//Слушатели для попапа увеличения изображения
popupOpenImgCloseButton.addEventListener('click', () => {
  closePopup(popupOpenImgPlace)
})
popupOpenImgPlace.addEventListener('click', closePopupByClockOnOverlay)


function createCard(editFormTitle, editFormPlace) {
  const newCard = itemTemplateElement.querySelector('.card').cloneNode(true);
  newCard.querySelector('.card__title').textContent = editFormTitle;
  const selectCard = newCard.querySelector('.card__image');
  selectCard.src = editFormPlace;
  selectCard.alt = editFormTitle;

  newCard.querySelector('.card__heart').addEventListener('click', (evt) => {
    evt.target.classList.toggle('card__heart_active');
})

  newCard.querySelector('.card__button-delete').addEventListener('click', (evt) => {
    evt.target.closest('.card').remove();
})


  const takePreviewImage = () => {
    popupOpenImgPlace.classList.toggle('popup_is-opened');
    popupOpenImgPlaceImage.src = selectCard.src;
    popupOpenImgPlaceImage.alt = selectCard.alt;
    popupOpenImgPlaceText.textContent = selectCard.alt;
}

  newCard.querySelector('.card__image').addEventListener('click', () => takePreviewImage())


  return newCard
}

const renderCard = (listElement, newCard) => {
  listElement.prepend(newCard)
}

initialCards.forEach(function (el) {
  renderCard(listElement, createCard(el.name, el.link));
});

function formAddSubmitHandler(evt) {
  evt.preventDefault();
  listElement.prepend(createCard(editFormTitle.value, editFormPlace.value));
  closePopup(popupTypeAddCardElement)
  formAddElement.reset();}