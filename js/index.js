import {Cards} from './card.js';
import { FormValidator, selectorList } from './FormValidator.js';
const initialCards = [{
        name: 'Эр-Ракка',
        link: 'https://www.hi4best.com/raqqa/raqqa.jpg'
    },
    {
        name: 'Крак де Шевалье',
        link: 'https://img-fotki.yandex.ru/get/9310/137106206.44f/0_ea306_18bc48dc_orig.jpg'
    },
    {
        name: 'Алеппо',
        link: 'https://islam-today.ru/files/news/part_6/61852/181653-INNERRESIZED600-700-1.jpg'
    },
    {
        name: 'Латакия',
        link: 'https://img.buzzfeed.com/buzzfeed-static/static/2015-07/21/15/enhanced/webdr04/original-3055-1437507623-17.jpg?downsize=600:*&output-format=auto&output-quality=auto'
    },
    {
        name: 'Пальмира ',
        link: 'https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/5/15/1431704498938/45098765-08b9-4beb-92f7-a53f10da375d-2060x1371.jpeg?width=720&quality=45&auto=format&fit=max&dpr=2&s=6cce57fa113f41fa8ea220dfc2f22d20'
    },
    {
        name: 'Маалюля',
        link: 'https://i.pinimg.com/originals/b2/50/4d/b2504dba83db45e1dbbc1a14358a4e3b.jpg'
    }
];

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
const creatCardBtn = document.querySelector('.popup-creat__button');
const inputName = document.querySelector('.popup-creat__input-name');
const inputLink = document.querySelector('.popup-creat__input-link');
const formElAddCard = document.querySelector('.popup-creat__form');

// popup img \\
const btnImgPopClose = document.querySelector('.popup-img__close');
export const btnImgPop = document.querySelector('.popup-img');
export const popImage = document.querySelector('.popup-img__image'); 
export const popImageSub = document.querySelector('.popup-img__subtitle');

const formList = Array.from(document.querySelectorAll(selectorList.formSelector));

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
function handlerTextForms(evt) {
    evt.preventDefault();
    profileNmae.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popUpProfile);
}

//creat cards

function addEl(e) {
    elementsContainer.prepend(new Cards(e, '.template').addCard());
}
// to creat new card in page
function addNewCard(e) {
    e.preventDefault();
    const newCard = {name: inputName.value, link: inputLink.value};

    addEl(newCard);
    closePopup(popUpCreat);

    formElAddCard.reset();
    // const d = new FormValidator(selectorList, formElement);
    // d.disableSubmitButton(buttonElement, selectorList);
    // disableSubmitButton(creatCardBtn, selectorList);
}
initialCards.forEach(function (item) {
    addEl(item, elementsContainer, '.cards')
})



containerPopCreat.addEventListener('submit', addNewCard);

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
popUpForm.addEventListener('submit', handlerTextForms);

formList.forEach((formElement) => {
    const formValidator = new FormValidator(selectorList, formElement);
    formValidator.enableValidation(selectorList, formElement);
  });