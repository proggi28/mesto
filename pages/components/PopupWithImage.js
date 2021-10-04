import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor(popupElement) {
        super(popupElement);
    }
    open(link, name) {
        this._popupImage = this._popupElement.querySelector('.popup-image__image');
        this._popupText = this._popupElement.querySelector('.popup-image__text');
        this._popupImage.src = link;
        this._popupImage.alt = name;
        this._popupText.textContent = name;
        super.open();
    }
}

