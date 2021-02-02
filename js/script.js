let profileNmae = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__subtitle');
let nameInput = document.querySelector('.popup__input-text_type_name');
let jobInput = document.querySelector('.popup__input-text_type_job');
let popUp = document.querySelector('.popup');
let openBtn = document.querySelector('.profile__button-edit');
let popUpCloseBtn = document.querySelector('.popup__close');
let formElement = document.querySelector('.popup__form');
openBtn.addEventListener('click', function openPop() {
    popUp.classList.add('popup__opened');
})

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