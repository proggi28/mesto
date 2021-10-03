import Popup from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor(popupSelector, submit) {
        super(popupSelector);
        this._submit = submit;
        this._inputList = this._popupSelector.querySelectorAll('.popup__input')
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
        this._popupForm = this._popupSelector.querySelector('.popup__form');
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
}