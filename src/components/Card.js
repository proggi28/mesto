export class Card {
  constructor(card, cardSelector, userId, { handleCardClick, deleteCardClick, likeButtonClick }) {
    this._card = card;
    this._cardSelector = cardSelector;
    this._userId = userId;
    this._handleCardClick = handleCardClick;
    this._deleteCardClick = deleteCardClick;
    this._likeButtonClick = likeButtonClick;


    this._deleteCardClick = this._deleteCardClick.bind(this);
    this._deleteButtonHandler = this._deleteButtonHandler.bind(this);
    this._likeButtonClick = this._likeButtonClick.bind(this);
    this._toggleLike = this._toggleLike.bind(this);
    this.removeCard = this.removeCard.bind(this);
    this.addLike = this.addLike.bind(this);


  }

  _getCard() {
    const cardTemplate = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.card')
      .cloneNode(true);
    return cardTemplate
  }


  generateCard() {
    this._element = this._getCard();

    this._cardText = this._element.querySelector('.card__title');
    this._selectCard = this._element.querySelector('.card__image');
    this._cardDeleteButton = this._element.querySelector('.card__button-delete');
    this._cardLikeButton = this._element.querySelector('.card__heart');
    this._likeCounter = this._element.querySelector('.card__like-length')

    this._setEventListeners();

    this._cardText.textContent = this._card.name;
    this._selectCard.src = this._card.link;
    this._selectCard.alt = this._card.name;
    this._likeCounter.textContent = this._card.likes.length;
    this._elementId = this._card._id;


      this._card.likes.some(element => {
        if (element._id === this._userId) {
          this._cardLikeButton.classList.add('card__heart_active')
        }
      })
  



    if (!(this._userId === this._card.owner._id)) {
      this._cardDeleteButton.style.display = "none";
    }

    

    return this._element;
  }



  _setEventListeners() {
    this._cardDeleteButton.addEventListener('click', this._deleteButtonHandler);

    this._cardLikeButton.addEventListener('click', this._toggleLike);

    this._selectCard.addEventListener('click', () => this._handleCardClick(this._card.link, this._card.name));
  }



  _toggleLike(evt) {
    this._likeButtonClick(evt.target, this._elementId);
  };


  _deleteButtonHandler() {
    this._deleteCardClick(this._element, this._elementId, this.removeCard)
  };


  removeCard() {
    this._element.remove();
    this._element = null;
  }

  addLike(likes) {
    this._cardLikeButton.classList.toggle('card__heart_active')
    this._likeCounter.textContent = likes.length;
  }
}

