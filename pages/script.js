const popupOpenButtonElement = document.querySelector('.profile__edit-button')
const popupElement = document.querySelector('.popup')
const popupCloseButtonElement = popupElement.querySelector('.popup__close-button')
const popupSaveButtonElement = popupElement.querySelector('.popup__save-button')
const formElement = popupElement.querySelector('.popup__form')
const editFormName = popupElement.querySelector('.popup__input_type_name')
const editFormJob = popupElement.querySelector('.popup__input_type_job')
const profile = document.querySelector('.profile')
const profileName = profile.querySelector('.profile__title')
const profileJob = profile.querySelector('.profile__text')

console.log(popupOpenButtonElement, popupElement, popupCloseButtonElement, editFormName, editFormJob, profile, profileName, profileJob)

const openPopup = function() {
    popupElement.classList.add('popup_is-opened')
}

const closePopup = function() {
    popupElement.classList.remove('popup_is-opened')
}

const closePopupByClockOnOverlay = function(event) {
    console.log(event.target, event.currentTarget)
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
