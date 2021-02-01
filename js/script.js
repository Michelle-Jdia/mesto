let editBut = document.querySelector('.profile__button-edit');
let openPopup = document.querySelector('.popup__opened');
let closePopup = document.querySelector('.popup__close');

editBut.addEventListener('click', openPop);

function openPop() {
    openPopup.setAttribute('style', 'display: flex;');
}

closePopup.addEventListener('click', closePop);

function closePop() {
    openPopup.setAttribute('style', 'display: none;');
}

let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input-text_type_name');
let jobInput = document.querySelector('.popup__input-text_type_job');
let profileNmae = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__subtitle');

function formSubmitHandler(evt) {
    evt.preventDefault();

    profileNmae.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePop();
}

formElement.addEventListener('submit', formSubmitHandler);
