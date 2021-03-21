import {openPopup} from './index.js';
import {btnImgPop, popImage, popImageSub} from './index.js';

export class Cards {
    constructor(card, selector) {
        this._selector = selector;
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
        const select = document.querySelector('.template').content.cloneNode(true);
        return select
    }
    addCard() {
        this._element = this._getItem();

        this._setEventListeners();

        this._element.querySelector('.cards__title').textContent = this._name;
        this._element.querySelector('.cards__image').src = this._link;
        this._element.querySelector('.cards__image').alt = this._link;

        return this._element;
    }
}