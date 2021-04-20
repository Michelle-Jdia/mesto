import Popup from './Popup.js'

export default class PopupWithSubmit extends Popup {
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._popupSubmitButton = this._popup.querySelector('.popup-remove__button')
    this._defaultSubmitButtonText = this._popupSubmitButton.textContent

  }

  setEventListeners() {
    super.setEventListeners()
    this._popup.addEventListener('submit', (event) => {
      event.preventDefault()
      this._submitForm(event, this._card)
      // this.close()   СПАСИБО ЗА СОВЕТЫ !! 
    })
  }

  open(card) {
    this._card = card
    super.open()
  }

}