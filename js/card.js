import {openPopup} from './index.js';
import {btnImgPop, popImage, popImageSub} from './index.js';

export class Cards {
    constructor(card, cardSelector) {
        this._cardSelector = cardSelector;
        this._name = card.name;
        this._link = card.link;
    }
    _toggleLikeIcon(event) {
        event.target.classList.toggle('cards__heart_active');
    }
    _deleteItem(event) {
        event.target.closest('.cards').remove();
    }
    _openImg() {
        popImage.src = this._link;
        popImage.alt = this._name;
        popImageSub.textContent = this._name;
        openPopup(btnImgPop);
    }

    _setEventListeners() {
        const removeBtn = this._element.querySelector('.cards__bin');
        removeBtn.addEventListener('click', (event) => {
            this._deleteItem(event);
        });
    
        const likeBtn = this._element.querySelector('.cards__heart');
        likeBtn.addEventListener('click', (event) => {
            this._toggleLikeIcon(event);
        });

            this._element.querySelector('.cards__image').addEventListener('click', (event) => {
            this._openImg(event);
        })
    }
    _getItem() {
        const card = document.querySelector('.template').content.cloneNode(true);
        return card
    }
    addCard() {
        this._element = this._getItem();

        this._setEventListeners();

        this._element.querySelector('.cards__title').textContent = this._name;
        const cardLink = this._element.querySelector('.cards__image');
        cardLink.src = this._link;
        cardLink.alt = this._link;

        return this._element;
    }
}