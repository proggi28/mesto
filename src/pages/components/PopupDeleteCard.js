import { Popup } from "./Popup";

export class PopupDeleteCard extends Popup {
    constructor(popupElement, handleCardDelete) {
        super(popupElement);
        this._handleCardDelete = handleCardDelete;
    }

    open(card, cardId, deleteCard) {
        super.open();
        this._card = card;
        this._cardId = cardId;
        this.deleteCard = deleteCard;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popupElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleCardDelete(this._card, this._cardId, this.deleteCard)
        })
    }    
}