export class Card {
    constructor(name, link, cardTemplate, takePreviewImage) {
        this._name = name;
        this._link = link;
        this._cardTemplate = cardTemplate;
        this._takePreviewImage = takePreviewImage;
    }

    generateCard() {
        this._element = this._cardTemplate.querySelector('.card').cloneNode(true);

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
           this._buttonOpenImage();
        })
    }

    _buttonDelete () {
        this._element.remove(); 
        this._element = null;
      }
    
      _buttonLike (evt) {
        evt.target.classList.toggle('card__like_active')
      }
    
      _buttonOpenImage () {
        this._takePreviewImage(this._name, this._link)
      }
}
