import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor(popupElement, submit) {
        super(popupElement);
        this._submit = submit;
        this._popupForm = this._popupElement.querySelector('.popup__form');
        //this._submitButton = this._popupForm.querySelector('.popup__save-button')
        this._inputList = this._popupElement.querySelectorAll('.popup__input')
    }
    _getInputValues() {
        this._inputValues = {};
        this._inputList.forEach((inputElement) => {
            this._inputValues[inputElement.name] = 
            inputElement.value
        })
        return this._inputValues
    }
    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submit(this._getInputValues());
            this.close();
        })
    }
    close() {
        super.close();
        this._popupForm.reset();
    }
/*
    renderLoading(isLoading) {
        if(isLoading) {
            this._submitButton.textContent = 'Сохранение...'
        }else {
            this._submitButton.textContent = 'Создать'
        }
    }
    */
}