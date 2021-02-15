let profileNmae = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__subtitle');
let nameInput = document.querySelector('.popup__input-text_type_name');
let jobInput = document.querySelector('.popup__input-text_type_job');
let popUp = document.querySelector('.popup');
let openBtn = document.querySelector('.profile__button-edit');
let popUpCloseBtn = document.querySelector('.popup__close');
let formElement = document.querySelector('.popup__form');

function openPop() {
    popUp.classList.add('popup__opened');
    nameInput.value = profileNmae.textContent;
    jobInput.value = profileJob.textContent;
}
openBtn.addEventListener('click', openPop);

function closePop() {
    popUp.classList.remove('popup__opened');
}
popUpCloseBtn.addEventListener('click', closePop);

function formSubmitHandler(evt) {
    evt.preventDefault();

    profileNmae.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePop();
}

formElement.addEventListener('submit', formSubmitHandler);

let popUpCreat = document.querySelector('.popup-creat');
let formElementCreat = document.querySelector('.popup-creat__form');
let placeNameInput = document.querySelector('.popup-creat__input-text_type_place-name');
let placeLinkInput = document.querySelector('.popup-creat__input-text_type_place-link');
let popUpCloseBtnCreat = document.querySelector('.popup-creat__close');
let openBtnCreat = document.querySelector('.profile__button-add');

function openCreatPop() {
    popUpCreat.classList.add('popup-creat__opened');
}
openBtnCreat.addEventListener('click', openCreatPop);

function closePopCreat() {
    popUpCreat.classList.remove('popup-creat__opened');
}
popUpCloseBtnCreat.addEventListener('click', closePopCreat);


const initialCards = [{
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];
const listContainerEl = document.querySelector('.pictures');
const templateEl = document.querySelector('.template');
const addBtncard = document.querySelector('.profile__button-add');
const creatCardBtn = document.querySelector('.popup-creat__button');
const inputName = document.querySelector('.popup-creat__input-name');
const inputLink = document.querySelector('.popup-creat__input-link');
const input = document.querySelector('.popup-creat__input-text');


function addEl() {
    const page = initialCards.map(getItem);

    listContainerEl.append(...page);
}

function addCard() {
    const inputT = inputName.value;
    const inputL = inputLink.value;
    const listEl = getItem({
        name: inputT,
        link: inputL
    });
    templateEl.prepend(listEl);
    input.value = '';

    closePopCreat();
}

creatCardBtn.addEventListener('click', addCard);

function getItem(item) {
    const newItem = templateEl.content.cloneNode(true);
    const addTitle = newItem.querySelector('.cards__title');
    const addImg = newItem.querySelector('.cards__image');
    addTitle.textContent = item.name;
    addImg.src = item.link;

    const removeBtn = newItem.querySelector('.cards__bin');
    removeBtn.addEventListener('click', deleteItem);


    return newItem;
}

function deleteItem(event) {
    const targetEl = event.target;
    const targetItem = targetEl.closest('.cards');
    targetItem.remove();
}

addEl();