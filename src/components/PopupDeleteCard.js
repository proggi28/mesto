import { Popup } from "./Popup";

export class PopupDeleteCard extends Popup {
    constructor(popupElement, handleCardDelete) {
        super(popupElement);
        this._popupForm = this._popupElement.querySelector('.popup__form');
        this._handleCardDelete = handleCardDelete;
    }

    open(card, cardId, deleteCard) {
        super.open();
        this._card = card;
        this._cardId = cardId;
        this.deleteCard = deleteCard;
    }

    cardId() {
        return this._cardId;
      }

    setEventListeners() {
        
        super.setEventListeners();
        this._popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleCardDelete(this._card, this._cardId, this.deleteCard);
        })
    }    
}