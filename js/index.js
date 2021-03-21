import {
    Cards
} from './card.js';
import {
    FormValidator
} from './FormValidator.js';
import {
    validationConfig
} from './utils/constants.js';
import {
    initialCards
} from './initial-cards.js';

//  selectors \\

// cards section \\
const elementsContainer = document.querySelector('.pictures');

// profile \\
const profileNmae = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__subtitle');
const openBtn = document.querySelector('.profile__button-edit');
const openBtnCreat = document.querySelector('.profile__button-add');

// popup \\
const popUpProfile = document.querySelector('.popup_profile');
const popUpCloseBtn = document.querySelector('.popup__close');
const popUpForm = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input-text_type_name');
const jobInput = document.querySelector('.popup__input-text_type_job');

// popup creat \\
const popUpCreat = document.querySelector('.popup-creat');
const containerPopCreat = popUpCreat.querySelector('.popup-creat__container');
const popUpCloseBtnCreat = document.querySelector('.popup-creat__close');
const inputName = document.querySelector('.popup-creat__input-name');
const inputLink = document.querySelector('.popup-creat__input-link');
const formElAddCard = document.querySelector('.popup-creat__form');

// popup img \\
const btnImgPopClose = document.querySelector('.popup-img__close');
export const btnImgPop = document.querySelector('.popup-img');
export const popImage = document.querySelector('.popup-img__image');
export const popImageSub = document.querySelector('.popup-img__subtitle');


//start open and close popup functions
export function openPopup(popup) {
    popup.classList.add('popup__opened');
    popup.addEventListener('click', closePopupByOverlay);
    document.addEventListener('keydown', closePopupByEsc)

}

function closePopup(popup) {
    popup.classList.remove('popup__opened');
    popup.removeEventListener('click', closePopupByOverlay);
    document.removeEventListener('keydown', closePopupByEsc);
    nameInput.value = "";
    jobInput.value = "";
    inputName.value = "";
    inputLink.value = "";
}

function closePopupByOverlay(evt) {
    if (evt.target.classList.contains('popup')) {
        closePopup(evt.target);
    }
}

function closePopupByEsc(event) {

    const key = event.key;
    if (key === "Escape") {
        const openedPopup = document.querySelector('.popup__opened');
        closePopup(openedPopup);
    }
};
//end open and close popup functions

// edite profile function
function submitEditProfileForm(evt) {
    evt.preventDefault();
    profileNmae.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popUpProfile); 
    nameInput.value = " ";
    jobInput.value = " ";
}

//creat cards

function addCardToDOM(e) {
elementsContainer.prepend(new Cards(e, '.template').addCard());
}
// to creat new card in page
function submitAddCardForm(e) {
    e.preventDefault();
    const newCard = {
        name: inputName.value,
        link: inputLink.value
    };

    addCardToDOM(newCard);
    closePopup(popUpCreat);

    formElAddCard.reset();
}
initialCards.forEach(function (item) {
    addCardToDOM(item)
})
const forProfile = new FormValidator(validationConfig, popUpProfile)
forProfile.enableValidation();
const forCard = new FormValidator(validationConfig, popUpCreat)
forCard.enableValidation();
containerPopCreat.addEventListener('submit', submitAddCardForm);

// event listeners 
openBtn.addEventListener('click', () => {
    openPopup(popUpProfile);
});
popUpCloseBtn.addEventListener('click', () => {
    closePopup(popUpProfile);
});

openBtnCreat.addEventListener('click', () => {
    openPopup(popUpCreat);
});
popUpCloseBtnCreat.addEventListener('click', () => {
    closePopup(popUpCreat);
});

btnImgPopClose.addEventListener('click', () => {
    closePopup(btnImgPop);
});
popUpForm.addEventListener('submit', submitEditProfileForm);