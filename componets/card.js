export default class Cards {
  constructor(card, cardSelector, {
    handleCardClick
  }) {
    this._name = card.name
    this._link = card.link
    this._cardSelector = cardSelector
    this._handleCardClick = handleCardClick
  }
  _getItem() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.cards')
      .cloneNode(true);

    return cardElement;
  }
  addCard() {
    this._element = this._getItem();
    this._imgElement = this._element.querySelector('.cards__image');
    this._element.querySelector('.cards__title').textContent = this._name;
    this._imgElement.src = this._link;
    this._imgElement.alt = this._name;
    this._handleLike = this._element.querySelector('.cards__heart')

    this._setEventListeners()
    return this._element
  }
  _setEventListeners() {
    this._element.querySelector('.cards__bin').addEventListener('click', () => {
      this._deleteItem()
    })
    this._handleLike.addEventListener('click', () => {
      this._toggleLikeButton()
    })
    this._imgElement.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link)
    })
  }

  _deleteItem() {
    this._element.remove();

  }
  _toggleLikeButton() {
    this._handleLike.classList.toggle('cards__heart_active')

  }
}