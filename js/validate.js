// включение валидации вызовом enableValidation
// все настройки передаются при вызове

// enableValidation({
//     formSelector: '.popup__form',
//     inputSelector: '.popup__input',
//     submitButtonSelector: '.popup__button',
//     inactiveButtonClass: 'popup__button_disabled',
//     inputErrorClass: 'popup__input_type_error',
//     errorClass: 'popup__error_visible'
//   });


const showInputError = (formElement, inputElement, errorMessage) => {


    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__input_type_error');
}

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

    errorElement.textContent = '';
    errorElement.classList.remove('popup__input_type_error');

}

const checkInputValidity = (formElement, inputElement) => {
    const isInputNoValid = !inputElement.validity.valid;

    if (isInputNoValid) {
        const errorMessage = inputElement.validationMessage;

        showInputError(formElement, inputElement, errorMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
}

const toggleBtnState = (inputList, btnElement) => {
    const hasNotValidInput = inputList.some((inputElement) => !inputElement.validity.valid);
    if (hasNotValidInput) {
        btnElement.setAttribute('disabled', true);
        btnElement.classList.add('popup__button_disabled');
    } else {
        btnElement.removeAttribute('disabled');
        btnElement.classList.remove('popup__button_disabled');
    }

}

const setEventListeners = (formElement) => {
    formElement.addEventListener('submit', (event) => {
        event.preventDefault();

    });
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    const btnElement = formElement.querySelector('.popup__button');

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', (event) => {
            checkInputValidity(formElement, inputElement);
            toggleBtnState(inputList, btnElement);
        });
    });
    toggleBtnState(inputList, btnElement);
};

const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
    formList.forEach(setEventListeners);

};

enableValidation();