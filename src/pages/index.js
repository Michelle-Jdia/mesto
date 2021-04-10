import '../pages/index.css';

import Card from '../componets/card.js';
import {
  FormValidator
} from '../componets/FormValidator.js';
import PopupWithImage from '../componets/popUpWithImage.js';
import PopupWithForm from '../componets/popUpWithForm.js';
import Section from '../componets/section.js';
import UserInfo from '../componets/userInfo.js';
import {
  validationConfig,
  profileSelectors,
  initialCards,
  template,
  elementsContainerSelectors,
  openBtn,
  openBtnCreat,
  popUpProfile,
  popUpProfileSelector,
  nameInput,
  jobInput,
  popUpCreat,
  popUpCreatSelector,
  btnImgPopSelector,
  popImageSelector,
  popImageSubSelector,
} from '../utils/constants.js';

const profilePopupEdit = new PopupWithForm(popUpProfileSelector, (info) => userInfo.setUserInfo(info));
profilePopupEdit.setEventListeners()


const photoPopupAdd = new PopupWithForm(popUpCreatSelector, (info) => {
  const newPhoto = createCard(info)

  cardList.addPhoto(newPhoto)
});
photoPopupAdd.setEventListeners()

const popupWithImage = new PopupWithImage(btnImgPopSelector, popImageSelector, popImageSubSelector)
popupWithImage.setEventListeners()


const editProfileValidator = new FormValidator(validationConfig, popUpProfile)

const addCardValidator = new FormValidator(validationConfig, popUpCreat)



function createCard(card) {
  const newCard = new Card(card, template, {
    handleCardClick: (name, link) => {
      popupWithImage.open(name, link)
    }
  })

  const newUserCard = newCard.addCard();
  return newUserCard;
}

const cardList = new Section({
  items: initialCards,
  renderer: (cardItem) => {
    const newCard = createCard(cardItem)
    cardList.addItem(newCard);
  }

}, elementsContainerSelectors);
cardList.renderItems();


openBtnCreat.addEventListener('click', () => {
  photoPopupAdd.open()
  addCardValidator.deleteValidationErrors();
})

const userInfo = new UserInfo(profileSelectors)
openBtn.addEventListener('click', () => {
  profilePopupEdit.open();
  const currentInfo = userInfo.getUserInfo()
  nameInput.value = currentInfo.name
  jobInput.value = currentInfo.job
  editProfileValidator.deleteValidationErrors();
})

editProfileValidator.enableValidation();
addCardValidator.enableValidation();