import '../pages/index.css';
import Api from '../componets/Api';
import Card from '../componets/Сard.js';
import PopupWithSubmit from '../componets/PopupSubmit.js'
import {
  FormValidator
} from '../componets/FormValidator.js';
import PopupWithImage from '../componets/PopUpWithImage.js';
import PopupWithForm from '../componets/PopUpWithForm.js';
import Section from '../componets/Section.js';
import UserInfo from '../componets/UserInfo.js';
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
  imgAvatarSelector,
  openPopupAvatar,
  popupAvatar,
  popupAvatarSelector,
  popupAvatarInput,
  popupAvatarBtnSubmit,
  userId,
  popupRemoveSelector,
  popUpFormSelect,
  formElAddCard,
  popupAvatarform,
  profileAvatar
} from '../utils/constants.js';
const api = new Api({
  address: 'https://mesto.nomoreparties.co/v1/cohort-22',
  token: 'c978f897-d705-4f1d-8b98-36c9feaeed93',
})

api.getUserInfo().then((data => {
  name.textContent = data.name
  profession.textContent = data.about;
  profileAvatar.src = data.avatar;
}))

const profilePopupEdit = new PopupWithForm(popUpProfileSelector, (info) => {
  profilePopupEdit.renderLoading(true)
  api.editUserInfo(info.name, info.job)
    .finally(() => {
      userInfo.setUserInfo(info)
      profilePopupEdit.renderLoading(false)
    })
    .catch((err) => {
      console.log(err);
    });
});
profilePopupEdit.setEventListeners()

const photoPopupAdd = new PopupWithForm(popUpCreatSelector, (info) => {
  photoPopupAdd.renderLoading(true)
  api.addCard(info.name, info.link)
    .then(info => {
      const newPhoto = createCard(info)
      cardList.addPhoto(newPhoto)
      photoPopupAdd.renderLoading(false)
    }).catch((err) => {
      console.log(err);
    });
});
photoPopupAdd.setEventListeners()



const popupWithImage = new PopupWithImage(btnImgPopSelector, popImageSelector, popImageSubSelector)
popupWithImage.setEventListeners()

const popUpEditAvatar = new PopupWithForm(popupAvatarSelector, () => {
  popUpEditAvatar.renderLoading(true)
  profileAvatar.src = popupAvatarInput.value

  api.editUserAvatar(popupAvatarInput.value)
    .finally(() => {
      popUpEditAvatar.renderLoading(false)
    }).catch((err) => {
      console.log(err);
    });

});
popUpEditAvatar.setEventListeners();


const popUpDeleteConfirm = new PopupWithSubmit(popupRemoveSelector, (evt, card) => {
  deleteConfirm(evt, card)
})
popUpDeleteConfirm.setEventListeners()

const editProfileValidator = new FormValidator(validationConfig, popUpFormSelect)

const addCardValidator = new FormValidator(validationConfig, formElAddCard)

const avatarUpdateValidation = new FormValidator(validationConfig, popupAvatarform)

api.getInitialCards().then((item) => {
  cardList.renderItems(item)
})

function createCard(item) {
  const newCard = new Card(item, template, {
    handleCardClick: (name, link) => {
      popupWithImage.open(name, link)
    },
    likeCardHandler: () => {
      const likedCard = newCard.likedCard();
      const resultApi = likedCard ? api.dislikeCard(newCard.getIdCard()) : api.likeCard(newCard.getIdCard());

      resultApi.then(data => {
        newCard.setLikes(data.likes);
        newCard.renderLikes()

      }).catch((err) => {
        console.log(err);
      })
    },
    deleteCardHandler: () => {
      popUpDeleteConfirm.open(newCard)

    }
  }, userId, item._id)


  const newUserCard = newCard.generateCard();
  return newUserCard;
}

const cardList = new Section({
  renderer: (cardItem) => {
    const newCard = createCard(cardItem)
    cardList.addItem(newCard);
  }
}, elementsContainerSelectors);



openBtnCreat.addEventListener('click', () => {
  photoPopupAdd.open()
  addCardValidator.deleteValidationErrors();
})

const userInfo = new UserInfo(profileSelectors)
openBtn.addEventListener('click', () => {
  profilePopupEdit.open();
  const currentInfo = userInfo.getUserInfo()
  nameInput.value = currentInfo.name
  jobInput.value = currentInfo.profession
  editProfileValidator.deleteValidationErrors();
})

const deleteConfirm = (evt, newCard) => {
  evt.preventDefault();
  api.removeCard(newCard.getIdCard())
    .then(response => {
      newCard.removeCard()
    }).finally(() => {
      popUpDeleteConfirm.close()
    }).catch((err) => {
      console.log(err);
    });
}


openPopupAvatar.addEventListener('click', () => {
  popUpEditAvatar.open()
  avatarUpdateValidation.deleteValidationErrors()
})


addCardValidator.enableValidation();
editProfileValidator.enableValidation();
avatarUpdateValidation.enableValidation()