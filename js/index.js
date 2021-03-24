import {
    Cards
} from './card.js';
import {
    FormValidator
} from './FormValidator.js';
import {
    validationConfig, btnImgPop
} from './utils/constants.js';
import {
    initialCards
} from './initial-cards.js';

//  selectors \\

// cards section \\
const elementsContainer = document.querySelector('.pictures');

// profile \\
const profileName = document.querySelector('.profile__name');
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
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popUpProfile);
    // nameInput.value = " ";
    // jobInput.value = " ";
}

//creat cards
function creatCard (e) {
    return new Cards(e, '.template').addCard();
    
}
function addCardToDOM(e) {
   elementsContainer.prepend(creatCard (e));
      
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
//  validation forms
const editProfileValidator = new FormValidator(validationConfig, popUpProfile)
editProfileValidator.enableValidation();
const addCardValidator = new FormValidator(validationConfig, popUpCreat)
addCardValidator.enableValidation();
containerPopCreat.addEventListener('submit', submitAddCardForm);

// event listeners 

// open profile popup and reset forms value and errors
openBtn.addEventListener('click', () => {
    editProfileValidator.deleteValidationErrors();
    openPopup(popUpProfile);
});
// close profile popup
popUpCloseBtn.addEventListener('click', () => {
    closePopup(popUpProfile);
});
// open creat card popup and reset forms value and errors
openBtnCreat.addEventListener('click', () => {
    inputName.value = "";
    inputLink.value = "";
    addCardValidator.deleteValidationErrors();
    openPopup(popUpCreat);
});
// close creat card popup
popUpCloseBtnCreat.addEventListener('click', () => {
    closePopup(popUpCreat);
});
//close image handler popup
btnImgPopClose.addEventListener('click', () => {
    closePopup(btnImgPop);
});
//edite inputs in popup profile
popUpForm.addEventListener('submit', submitEditProfileForm);