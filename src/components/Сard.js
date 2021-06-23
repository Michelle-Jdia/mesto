export default class Card {
	constructor(item, cardSelector, { handleCardClick, likeCardHandler, deleteCardHandler }, userId, cardId) {
		this._name = item.name;
		this._link = item.link;
		this._cardSelector = cardSelector;
		this._handleCardClick = handleCardClick;
		this._deleteCardHandler = deleteCardHandler;
		this._likeCardHandler = likeCardHandler;
		this._countLikes = item.likes;
		this._userID = userId;
		this._ownerID = item.owner._id;
		this._cardID = cardId;
	}

	_getTemplate() {
		const cardElement = document.querySelector(this._cardSelector).content.querySelector('.cards').cloneNode(true);

		return cardElement;
	}

	generateCard() {
		this._element = this._getTemplate();
		this._imgElement = this._element.querySelector('.cards__image');
		this._element.querySelector('.cards__title').textContent = this._name;
		this._imgElement.src = this._link;
		this._imgElement.alt = this._name;
		this._handleLike = this._element.querySelector('.cards__heart');
		this._deleteIcon = this._element.querySelector('.cards__bin');
		this._likes = this._element.querySelector('.cards__likes');
		if (this._ownerID !== this._userID) {
			this._deleteIcon.classList.add('cards__bin_hide');
		}

		this._renderLikes();

		this._setEventListeners();
		return this._element;
	}

	_setEventListeners() {
		this._element.querySelector('.cards__bin').addEventListener('click', () => {
			this._deleteCardHandler();
		});
		this._handleLike.addEventListener('click', () => {
			this._likeCardHandler();
		});
		this._imgElement.addEventListener('click', () => {
			this._handleCardClick(this._name, this._link);
		});
	}

	removeCard() {
		this._element.remove();
	}

	_likeButton() {
		this._handleLike.classList.toggle('cards__heart_active');
	}

	_renderLikes() {
		this._likes.textContent = this._countLikes.length;
		this._showLikes(this._userID);
	}

	getIdCard() {
		return this._cardID;
	}

	likedCard() {
		return this._countLikes.some((like) => {
			return like._id === this._userID;
		});
	}
	_showLikes() {
		if (this.likedCard(this._userID)) {
			this._handleLike.classList.add('cards__heart_active');
		} else {
			this._handleLike.classList.remove('cards__heart_active');
		}
	}

	setLikes(list) {
		this._countLikes = list;
		this._renderLikes();
	}
}
