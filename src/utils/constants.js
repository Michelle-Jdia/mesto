export const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input-error',
    errorClass: 'popup__input-error_visible'
};



// export const initialCards = [{
//         name: 'Эр-Ракка',
//         link: 'https://www.hi4best.com/raqqa/raqqa.jpg'
//     },
//     {
//         name: 'Крак де Шевалье',
//         link: 'https://img-fotki.yandex.ru/get/9310/137106206.44f/0_ea306_18bc48dc_orig.jpg'
//     },
//     {
//         name: 'Алеппо',
//         link: 'https://islam-today.ru/files/news/part_6/61852/181653-INNERRESIZED600-700-1.jpg'
//     },
//     {
//         name: 'Латакия',
//         link: 'https://img.buzzfeed.com/buzzfeed-static/static/2015-07/21/15/enhanced/webdr04/original-3055-1437507623-17.jpg?downsize=600:*&output-format=auto&output-quality=auto'
//     },
//     {
//         name: 'Пальмира ',
//         link: 'https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/5/15/1431704498938/45098765-08b9-4beb-92f7-a53f10da375d-2060x1371.jpeg?width=720&quality=45&auto=format&fit=max&dpr=2&s=6cce57fa113f41fa8ea220dfc2f22d20'
//     },
//     {
//         name: 'Маалюля',
//         link: 'https://i.pinimg.com/originals/b2/50/4d/b2504dba83db45e1dbbc1a14358a4e3b.jpg'
//     }
// ];

//  selectors \\
export const profileSelectors = {
    profileName: '.profile__name',
    profileProfession: '.profile__subtitle',
    profileAvatar: '.profile__avatar'
}
export const userIdd = 'c978f897-d705-4f1d-8b98-36c9feaeed93';
export const template = 'template';
// cards section \\
export const elementsContainer = document.querySelector('.pictures');
export const elementsContainerSelectors = '.pictures';
export const allForms = document.querySelector('.popup__form');
export const allFormsp = document.querySelector('.popup__form');
// profile \\
export const profileName = document.querySelector('.profile__name');
export const profileJob = document.querySelector('.profile__subtitle');
export const openBtn = document.querySelector('.profile__button-edit');
export const openBtnSelector = '.profile__button-edit';
export const openBtnCreat = document.querySelector('.profile__button-add');
export const openPopupAvatar = document.querySelector('.profile__hover-edit');
export const imgAvatarSelector = document.querySelector('.profile__avatar');

// popup \\
export const overlay = document.querySelectorAll('.popup');
export const jobInput = document.querySelector('.popup__input-text_type_job');
export const popUpProfile = document.querySelector('.popup_profile');
export const popUpProfileSelector = '.popup_profile';
export const popUpCloseBtn = document.querySelector('.popup__close');
export const popUpForm = document.querySelector('.popup__form');
export const popUpFormSelect = popUpProfile.querySelector('.popup__form');
export const nameInput = document.querySelector('.popup__input-text_type_name');

// popup creat \\
export const popUpCreat = document.querySelector('.popup-creat');
export const popUpCreatSelector = '.popup-creat';
export const containerPopCreat = popUpCreat.querySelector('.popup-creat__container');
export const popUpCloseBtnCreat = document.querySelector('.popup-creat__close');
export const inputName = document.querySelector('.popup-creat__input-name');
export const inputLink = document.querySelector('.popup-creat__input-link');
export const formElAddCard = popUpCreat.querySelector('.popup-creat__form');

// popup img \\
export const btnImgPopClose = document.querySelector('.popup-img__close');
export const btnImgPopCloseSelector = '.popup-img__close';

export const btnImgPop = document.querySelector('.popup-img');
export const btnImgPopSelector = '.popup-img';
export const popImage = document.querySelector('.popup-img__image');
export const popImageSelector = '.popup-img__image';
export const popImageSub = document.querySelector('.popup-img__subtitle');
export const popImageSubSelector = '.popup-img__subtitle';

// popup remove 
export const popupRemoveSelector = '.popup-remove';
export const popupRemoveCloseBtn = document.querySelector('.popup-remove__close');
export const popupRemoveForm = document.querySelector('.popup-remove__form');
export const popupRemoveSubmit = document.querySelector('.popup-remove__button');

//popup avatar
export const popupAvatar = document.querySelector('.popup-avatar');
export const popupAvatarform = popupAvatar.querySelector('.popup-avatar__form');
export const popupAvatarSelector = '.popup-avatar';
export const popupAvatarContainer = document.querySelector('.popup-avatar__container');
export const popupAvatarInput = document.querySelector('.popup-avatar__input-link');
export const popupAvatarBtnSubmit = document.querySelector('.popup-avatar__button');
export const profileAvatar = document.querySelector('.profile__avatar');