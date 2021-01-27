let editBut = document.querySelector('.profile__button-edit');
let openPopup = document.querySelector('.popup_opened');
let closePopup = document.querySelector('.popup__close');

editBut.addEventListener('click', openPop);

function openPop() {
    openPopup.setAttribute('style', 'display: block;');
}

closePopup.addEventListener('click', closePop);

function closePop() {
    openPopup.setAttribute('style', 'display: none;');
}

let whiteHeart = document.querySelectorAll('.cards__heart');
let blackHeart = document.querySelectorAll('.cards__heart_type_active');

function likeHeart() {
    
}

// Находим форму в DOM
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.input_text_type_name');
let jobInput = document.querySelector('.input_text_type_job');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.
    // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);