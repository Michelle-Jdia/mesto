import Popup from './Popup.js';
export default class PopupWithForm extends Popup {
	constructor(popupSelector, submitForm) {
		super(popupSelector);
		this._submitForm = submitForm;
		this._inputList = this._popup.querySelectorAll('.popup__input');
		this._popupSubmitButton = this._popup.querySelector('.popup__button');
		this._defaultSubmitButtonText = this._popupSubmitButton.textContent;
	}

	_getInputValues() {
		this._inputValues = {};
		this._inputList.forEach((input) => {
			this._inputValues[input.name] = input.value;
		});
		return this._inputValues;
	}
	setEventListeners() {
		super.setEventListeners();
		this._popup.addEventListener('submit', (event) => {
			event.preventDefault();
			this._submitForm(this._getInputValues());
			// this.close()
		});
	}
	close() {
		this._popup.querySelector('.popup__form').reset(); // СПОСИБО  Я СДЕЛАЮ!
		super.close();
	}
	// open() {
	//   super.open();
	// }
	renderLoading(isLoading, initialMessage = 'Сохранение...') {
		if (isLoading) {
			this._popupSubmitButton.textContent = initialMessage;
		} else {
			this._popupSubmitButton.textContent = this._defaultSubmitButtonText;
		}
	}
}
