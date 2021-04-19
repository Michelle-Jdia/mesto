export {
  FormValidator
};
class FormValidator {
  constructor(validationConfig, formSelector) {
      this._formSelector = validationConfig.formSelector;
      this._inputSelector = validationConfig.inputSelector;
      this._submitButtonSelector = validationConfig.submitButtonSelector;
      this._inactiveButtonClass = validationConfig.inactiveButtonClass;
      this._inputErrorClass = validationConfig.inputErrorClass;
      this._errorClass = validationConfig.errorClass;
      this._formSelector = formSelector;
      this._inputList = Array.from(this._formSelector.querySelectorAll(this._inputSelector));
      this._buttonElement = this._formSelector.querySelector(this._submitButtonSelector);
  }
  _showInputError(inputElement, errorMessage) {
      const errorElement = this._formSelector.querySelector(`#${inputElement.id}-error`);
      inputElement.classList.add(this._inputErrorClass);
      errorElement.textContent = errorMessage;
      errorElement.classList.add(this._errorClass);
  };

  _hideInputError(inputElement) {
      const errorElement = this._formSelector.querySelector(`#${inputElement.id}-error`);
      inputElement.classList.remove(this._inputErrorClass);
      errorElement.textContent = "";
      errorElement.classList.remove(this._errorClass);
  }
  _checkInputValidity(inputElement) {
      if (!inputElement.validity.valid) {
          this._showInputError(inputElement, inputElement.validationMessage);
      } else {
          this._hideInputError(inputElement);
      }
  };

  deleteValidationErrors() {
      this._inputList.forEach((form) => {
          this._hideInputError(form);

      });
      this._toggleBtnState();
  };

  _setEventListeners() {
      this._toggleBtnState();

      this._inputList.forEach((inputElement) => {
          inputElement.addEventListener('input', () => {
              this._checkInputValidity(inputElement);
              this._toggleBtnState();
          })
      })
  };

  enableValidation() {
      this._formSelector.addEventListener('submit', (evt) => {
          evt.preventDefault();
          this._toggleBtnState()
      })
      this._setEventListeners();
  }

  _hasNotValidInput() {
      return this._inputList.some((inputElement) => {
          return !inputElement.validity.valid;
      })
  };

  _toggleBtnState() {
      if (this._hasNotValidInput()) {
          this._buttonElement.setAttribute('disabled', true);
          this._buttonElement.classList.add(this._inactiveButtonClass);
      } else {
          this._buttonElement.removeAttribute('disabled');
          this._buttonElement.classList.remove(this._inactiveButtonClass);
      }
  };
}