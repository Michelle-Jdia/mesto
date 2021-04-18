export class FormValidator {
    constructor(validationConfig, form) {
      this._inputSelector = validationConfig.inputSelector
      this._submitButtonSelector = validationConfig.submitButtonSelector
      this._inactiveButtonClass = validationConfig.inactiveButtonClass
      this._inputErrorClass = validationConfig.inputErrorClass
      this._errorClass = validationConfig.errorClass
      this._form = form
      this._inputs = Array.from(this._form.querySelectorAll(this._inputSelector));
  
    }
    _hasInvalidInput () {
      return this._inputs.some((inputElement) => {
        return !inputElement.validity.valid
      })
    }
    _showInputError () {
      this._inputElement.classList.add(this._inputErrorClass);
      this._errorElement.classList.add(this._errorClass);
      this._errorElement.textContent = this._inputElement.validationMessage;
    }

    _hideInputError (inputElement) {
      this._errorElement = this._form.querySelector(`#${inputElement.id}-error`);
      inputElement.classList.remove(this._inputErrorClass);
      this._errorElement.classList.remove(this._errorClass);
      this._errorElement.textContent = "";
    }
    _setEventListeners () {
      this._buttonElement = this._form.querySelector(this._submitButtonSelector)
      this._toggleButtonState()
      this._inputs.forEach((inputElement) => {
        inputElement.addEventListener("input",() => {
          this._showInputError (inputElement)
          this._toggleButtonState()
        })
      })
    }

    _showInputError (inputElement) {
      this._inputElement = inputElement
      this._errorElement = this._form.querySelector(`#${this._inputElement.id}-error`);
      if (!this._inputElement.validity.valid) {
        this._showInputError()
      }else {
        this._hideInputError(inputElement)
      }
    }
    disabledSubmit () {
      this._buttonElement.classList.add(this._inactiveButtonClass)
      this._buttonElement.setAttribute('disabled', true);
    }
    _toggleButtonState () {
      if (this._hasInvalidInput()) {
        this.disabledSubmit()
      }else {
        this._buttonElement.classList.remove(this._inactiveButtonClass)
        this._buttonElement.removeAttribute('disabled');
  
      }
    }
  
    enableValidation () {
      this._setEventListeners()
      this._form.addEventListener("submit", (evt) => {
        evt.preventDefault()
        this._toggleButtonState()
      })
    }
    deleteValidationErrors () {
      this._inputs.forEach((form) => {
        this._hideInputError (form)
      });
      this._toggleButtonState()
    }
  }