export {
    FormValidator
};
import {
    validationConfig
} from './utils/constants.js';
class FormValidator {
    constructor(validationConfig, formElement) {
        this._validationConfig = validationConfig;
        this._formElement = formElement;
    }
    _checkInputValidity(formElement, formInput, validationConfig) {

        if (!formInput.validity.valid) {

            this._showInputError(formElement, formInput, formInput.validationMessage, validationConfig);
        } else {
            this._hideInputError(formElement, formInput, validationConfig);
        }
    };
    _showInputError(formElement, inputElement, errorMessage, validationConfig) {

        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(validationConfig.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(validationConfig.errorClass);
    }

    _hideInputError(formElement, inputElement, validationConfig) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(validationConfig.inputErrorClass);
        errorElement.textContent = '';
        errorElement.classList.remove(validationConfig.errorClass);
    };


    _toggleBtnState(inputList, buttonElement, validationConfig) {

        if (this._hasNotValidInput(inputList)) {
            buttonElement.classList.add(validationConfig.inactiveButtonClass);
            buttonElement.setAttribute('disabled', true);
        } else {
            buttonElement.classList.remove(validationConfig.inactiveButtonClass);
            buttonElement.removeAttribute('disabled');
        }

    };

    _hasNotValidInput(inputList) {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        })
    };

    _setEventListeners(formElement, validationConfig) {
        const inputList = Array.from(this._formElement.querySelectorAll(validationConfig.inputSelector));
        const buttonElement = this._formElement.querySelector(validationConfig.submitButtonSelector);
        this._toggleBtnState(inputList, buttonElement, validationConfig);


        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(formElement, inputElement, validationConfig);
                this._toggleBtnState(inputList, buttonElement, validationConfig);
            });
        });

    };
    // disableSubmitButton(buttonElement, selectorList) {
    //     this._buttonElement.disabled = true;
    //     this._buttonElement.classList.add(selectorList.inactiveButtonClass);
    // }

    enableValidation(validationConfig, formElement) {
        this._formElement.addEventListener('submit', (e) => {
            e.preventDefault();
        });
        this._setEventListeners(formElement, validationConfig);
    }
}