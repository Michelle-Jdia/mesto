const showInputError = (formElement, inputElement, errorMessage) => {


    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__input-error_active');
}

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

    errorElement.textContent = '';
    errorElement.classList.remove('popup__input-error_active');

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
        btnElement.classList.add('popup__btn-submit_disabled');
    } else {
        btnElement.removeAttribute('disabled');
        btnElement.classList.remove('popup__btn-submit_disabled');
    }

}

const setEventListeners = (formElement) => {
    formElement.addEventListener('submit', (event) => {
        event.preventDefault();

    });
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    const btnElement = formElement.querySelector('.popup__btn-submit');

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', (event) => {
            checkInputValidity(formElement, inputElement);
            toggleBtnState(inputList, btnElement);
        });
    });
    toggleBtnState(inputList, btnElement);
};

const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.form'));
    formList.forEach(setEventListeners);

};

enableValidation();