export class Popup {
    constructor(popupElement) {
        this._popupElement = popupElement;
    }
    open() {
        this._popupElement.classList.add('popup_is-opened');
        document.addEventListener('keydown', (event) => this._handleEscUp(event))
    }
    close() {
        this._popupElement.classList.remove('popup_is-opened');
        document.removeEventListener('keydown', (event) => this._handleEscUp(event))
    }
    _handleEscUp(event){
        if (event.key === 'Escape') {
            this.close();
        }
    }
    _closePopupByClickOnOverlay(event) {
        if (event.target !== event.currentTarget) {
            return
          }
          this.close(event.target);
    }
    setEventListeners() {
        this._popupElement.querySelector('.popup__close-button').addEventListener('click', () => this.close());
        this._popupElement.addEventListener('click', (event) => this._closePopupByClickOnOverlay(event))
    }
}