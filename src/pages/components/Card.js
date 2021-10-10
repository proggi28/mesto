export class Card {
    constructor(data, cardSelector, handleCardClick) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
    }

    _getCard() {
      this._cardTemplate = document.querySelector(this._cardSelector).content;
      return this._cardTemplate.querySelector('.card').cloneNode(true);
    }

    generateCard() {
        this._element = this._getCard();

        this._cardText = this._element.querySelector('.card__title');
        this._selectCard = this._element.querySelector('.card__image');
        this._cardDeleteButton = this._element.querySelector('.card__button-delete');
        this._cardLikeButton = this._element.querySelector('.card__heart');

        this._cardText.textContent = this._name;
        this._selectCard.src = this._link;
        this._selectCard.alt = this._name;


        this._setEventListeners();

        return this._element;
    }

    
    _setEventListeners() {
        this._cardLikeButton.addEventListener('click', (evt) => {
            this._buttonLike(evt);
          })
        this._cardDeleteButton.addEventListener('click', () => {
            this._buttonDelete();
          })
        this._selectCard.addEventListener('click', () => {
           this._handleCardClick(this._link, this._name);
        })
    }

    _buttonDelete () {
        this._element.remove(); 
        this._element = null;
      }
    
      _buttonLike (evt) {
        evt.target.classList.toggle('card__heart_active')
      }
}
