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
const creatCardBtn = document.querySelector('.popup-creat__button');
const inputName = document.querySelector('.popup-creat__input-name');
const inputLink = document.querySelector('.popup-creat__input-link');
const fallbackImage = 'https://www.froben11.de/wp-content/uploads/2016/10/orionthemes-placeholder-image.png';

const btnImgPopClose = document.querySelector('.popup-img__close');

let profileNmae = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__subtitle');
let nameInput = document.querySelector('.popup__input-text_type_name');
let jobInput = document.querySelector('.popup__input-text_type_job');



let openBtn = document.querySelector('.profile__button-edit');
let popUpCloseBtn = document.querySelector('.popup__close');
let formElement = document.querySelector('.popup__form');


let popUpCloseBtnCreat = document.querySelector('.popup-creat__close');
let openBtnCreat = document.querySelector('.profile__button-add');

let popUpCreat = document.querySelector('.popup-creat');
const btnImgPop = document.querySelector('.popup-img');
let popUp = document.querySelector('.popup');

function openPopup(popup) {
    popup.classList.add('popup__opened');
}
function closePopup(popup) {
    popup.classList.remove('popup__opened');
}
openBtn.addEventListener('click', () => {
    openPopup(popUp);
});
popUpCloseBtn.addEventListener('click', () => {
    closePopup(popUp);
});

openBtnCreat.addEventListener('click', () => {
    openPopup(popUpCreat);
});
popUpCloseBtnCreat.addEventListener('click', () => {
    closePopup(popUpCreat);
});

function formSubmitHandler(evt) {
    evt.preventDefault();

    profileNmae.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popUp);
}

formElement.addEventListener('submit', formSubmitHandler);


function addEl() {
    const page = initialCards.map(getItem);

    listContainerEl.append(...page);
}

function addCard(e) {
    const inputT = inputName.value;
    const inputL = inputLink.value ? inputLink.value : fallbackImage
    const listEl = getItem({
        name: inputT,
        link: inputL
    });

    inputName.value = '';
    inputLink.value = '';


    listContainerEl.append(listEl);
    closePopup(popUpCreat);
    e.preventDefault();

}

function getItem(item) {
    const newItem = templateEl.content.cloneNode(true);
    const addTitle = newItem.querySelector('.cards__title');
    const addImg = newItem.querySelector('.cards__image');
    addTitle.textContent = item.name;
    addImg.src = item.link;
    addImg.alt = item.name;


    newItem.querySelector('.cards').addEventListener('click', function () {
        document.querySelector('.popup-img__image').src = this.querySelector('.cards__image').src;
        document.querySelector('.popup-img__image').alt = this.querySelector('.cards__title').textContent;
        document.querySelector('.popup-img__subtitle').textContent = this.querySelector('.cards__title').textContent;
    });

    addImg.addEventListener('click', () => {
        openPopup(btnImgPop);
    });
    btnImgPopClose.addEventListener('click', () => {
        closePopup(btnImgPop);
    });

    const removeBtn = newItem.querySelector('.cards__bin');
    removeBtn.addEventListener('click', deleteItem);

    const likeBtn = newItem.querySelector('.cards__heart');
    likeBtn.addEventListener('click', likeBtnH);

    creatCardBtn.addEventListener('click', addCard);


    return newItem;
}


function deleteItem(event) {
    const targetEl = event.target;
    const targetItem = targetEl.closest('.cards');
    targetItem.remove();
}
creatCardBtn.addEventListener('click', addCard);

function likeBtnH(eve) {
    const targetH = eve.target;
    const targetBtn = targetH.closest('.cards__heart');
    targetBtn.classList.toggle('cards__heart_active');
}
addEl();