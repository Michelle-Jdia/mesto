import {openPopup} from './script.js';

export class Cards {
    constructor(card) {
        this._card = document.querySelector('.template');
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
        const btnImgPop = document.querySelector('.popup-img');
        const popImage = document.querySelector('.popup-img__image');
        const popImageSub = document.querySelector('.popup-img__subtitle');
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

        const opnenImgBtn = this._element.querySelector('.cards__image');
        opnenImgBtn.addEventListener('click', (event) => {
            this._openImg(event);
        })
    }
    _getItem() {
        return this._card.content.cloneNode(true)
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