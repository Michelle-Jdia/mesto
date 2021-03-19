//  const showInputError = (formElement, inputElement, errorMessage, selectorList) => {

//      const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

//      errorElement.textContent = errorMessage;
//      errorElement.classList.add(selectorList.errorClass);
//  }

//  const hideInputError = (formElement, inputElement) => {
//      const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

//      errorElement.textContent = '';
//      errorElement.classList.remove(selectorList.errorClass);

//  };

//  const checkInputValidity = (formSelector, inputSelector, selectorList) => {

//      if (!inputSelector.validity.valid) {

//          showInputError(formSelector, inputSelector, inputSelector.validationMessage, selectorList);
//      } else {
//          hideInputError(formSelector, inputSelector, selectorList);
//      }
//  };

// const setEventListeners = (formSelector, selectorList) => {
//     const inputList = Array.from(formSelector.querySelectorAll(selectorList.inputSelector));
//     const btnElement = formSelector.querySelector(selectorList.submitButtonSelector);
//     toggleBtnState(inputList, btnElement, selectorList);


//     inputList.forEach((inputSelector) => {
//         inputSelector.addEventListener('input', function () {
//             checkInputValidity(formSelector, inputSelector, selectorList);
//             toggleBtnState(inputList, btnElement, selectorList);
//         });
//     });

// };

// const enableValidation = (selectorList) => {
//     const formList = Array.from(document.querySelectorAll(selectorList.formSelector));
//     formList.forEach((formSelector) => {
//         formSelector.addEventListener('submit', function (e) {
//             e.preventDefault();
//         });
//         setEventListeners(formSelector, selectorList);
//     });
// };




//  const hasNotValidInput = (inputList) => {
//      return inputList.some((inputSelector) => {
//          return !inputSelector.validity.valid;
//      })
//  };

// function disableSubmitButton(btnElement, selectorList) {
//     btnElement.disabled = true;
//     btnElement.classList.add(selectorList.inactiveButtonClass);
// }

//  const toggleBtnState = (inputList, btnElement, selectorList) => {

//      if (hasNotValidInput(inputList, selectorList)) {
//          disableSubmitButton(btnElement, selectorList);
//      } else {
//          btnElement.disabled = false;
//          btnElement.classList.remove(selectorList.inactiveButtonClass);
//      }

//  };

// enableValidation(selectorList);

export {
    FormValidator,
    selectorList
};
const selectorList = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input-error',
    errorClass: 'popup__input-error_visible'
};


class FormValidator {
    constructor(selectorList, formElement) {
        this._selectorList = selectorList;
        this._formElement = formElement;
    }
    _checkInputValidity(formElement, formInput, selectorList) {

        if (!formInput.validity.valid) {

            this._showInputError(formElement, formInput, formInput.validationMessage, selectorList);
        } else {
            this._hideInputError(formElement, formInput, selectorList);
        }
    };
    _showInputError(formElement, inputElement, errorMessage, selectorList) {

        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(selectorList.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(selectorList.errorClass);
    }

    _hideInputError(formElement, inputElement, selectorList) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(selectorList.inputErrorClass);
        errorElement.textContent = '';
        errorElement.classList.remove(selectorList.errorClass);
    };



    _toggleBtnState(inputList, buttonElement, selectorList) {

        if (this._hasNotValidInput(inputList)) {
            buttonElement.classList.add(selectorList.inactiveButtonClass);
            buttonElement.setAttribute('disabled', true);
        } else {
            buttonElement.classList.remove(selectorList.inactiveButtonClass);
            buttonElement.removeAttribute('disabled');
        }

    };

    _hasNotValidInput(inputList) {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        })
    };

    _setEventListeners(formElement, selectorList) {
        const inputList = Array.from(this._formElement.querySelectorAll(selectorList.inputSelector));
        const buttonElement = this._formElement.querySelector(selectorList.submitButtonSelector);
        this._toggleBtnState(inputList, buttonElement, selectorList);


        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(formElement, inputElement, selectorList);
                this._toggleBtnState(inputList, buttonElement, selectorList);
            });
        });

    };
    // disableSubmitButton(buttonElement, selectorList) {
    //     this._buttonElement.disabled = true;
    //     this._buttonElement.classList.add(selectorList.inactiveButtonClass);
    // }

    enableValidation(selectorList, formElement) {
        this._formElement.addEventListener('submit', (e) => {
            e.preventDefault();
        });
        this._setEventListeners(formElement, selectorList);
    }
}