export class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
    }
    open() {
        this._popupSelector.classList.add('popup_is-opened');
        document.addEventListener('keydown', this._handleEscUp)
    }
    close() {
        this._popupSelector.classList.remove('popup_is-opened');
        document.removeEventListener('keydown', this._handleEscUp)
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
        this._popupSelector.querySelector('.popup__close-button').addEventListener('click', () => this.close());
        this._popupSelector.addEventListener('click', (event) => this._closePopupByClickOnOverlay(event))
        this._popupSelector.addEventListener('keydown', (event) => this._handleEscUp(event))
    }
}