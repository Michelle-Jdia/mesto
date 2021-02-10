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
    // nameInput.value = profileNmae.textContent;
    // jobInput.value = profileJob.textContent;
}
openBtnCreat.addEventListener('click', openCreatPop);

function closePopCreat() {
    popUpCreat.classList.remove('popup-creat__opened');
}
popUpCloseBtnCreat.addEventListener('click', closePopCreat);