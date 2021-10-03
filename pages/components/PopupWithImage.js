import Popup from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }
    open(link, name) {
        this._popupImage = this._popupSelector.querySelector('.popup-image__image');
        this._popupText = this._popupSelector.querySelector('.popup-image__text');
        this._popupImage.src = link;
        this._popupImage.alt = name;
        this._popupText.textContent = name;
        super.open();
    }
}

