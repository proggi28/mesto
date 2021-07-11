const popupOpenButtonElement = document.querySelector('.profile__edit-button')
const popupElement = document.querySelector('.popup')
const popupCloseButtonElement = popupElement.querySelector('.popup__close-button')
const formElement = popupElement.querySelector('.popup__form')
const editFormName = popupElement.querySelector('.popup__input_type_name')
const editFormJob = popupElement.querySelector('.popup__input_type_job')
const profile = document.querySelector('.profile')
const profileName = profile.querySelector('.profile__title')
const profileJob = profile.querySelector('.profile__text')


//Объявление переменных для новых попапов
const itemTemplateElement = document.querySelector('.item-template').content;
const listElement = document.querySelector('.cards__list-style');


const openPopup = function() {
    popupElement.classList.add('popup_is-opened')
    editFormName.value = profileName.textContent
    editFormJob.value = profileJob.textContent 
}

const closePopup = function() {
    popupElement.classList.remove('popup_is-opened')
}

const closePopupByClockOnOverlay = function(event) {
    if (event.target !== event.currentTarget) {
        return
    }

    closePopup()
}

const formSubmitHandler = function(evt) {
    evt.preventDefault()
    profileName.textContent = editFormName.value
    profileJob.textContent = editFormJob.value

    closePopup()
}

popupOpenButtonElement.addEventListener('click', openPopup)
popupCloseButtonElement.addEventListener('click', closePopup)
popupElement.addEventListener('click', closePopupByClockOnOverlay)
formElement.addEventListener('submit', formSubmitHandler)


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

  //Вывод карточек из массива
function renderCard(name, link) {
  const newCards = itemTemplateElement.querySelector('.card').cloneNode(true);
  newCards.querySelector('.card__title').textContent = name;
  const selectCard = newCards.querySelector('.card__image');
  selectCard.src = link;
  selectCard.alt = name;



  return newCards;
}



  initialCards.forEach(function (el) {
      listElement.append(renderCard(el.name, el.link));
});