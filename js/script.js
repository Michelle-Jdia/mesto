const initialCards = [{
        name: 'Эр-Ракка',
        link: 'https://www.hi4best.com/raqqa/raqqa.jpg'
    },
    {
        name: 'Крак де Шевалье',
        link: 'https://img-fotki.yandex.ru/get/9310/137106206.44f/0_ea306_18bc48dc_orig.jpg'
    },
    {
        name: 'Алеппо',
        link: 'https://islam-today.ru/files/news/part_6/61852/181653-INNERRESIZED600-700-1.jpg'
    },
    {
        name: 'Латакия',
        link: 'https://img.buzzfeed.com/buzzfeed-static/static/2015-07/21/15/enhanced/webdr04/original-3055-1437507623-17.jpg?downsize=600:*&output-format=auto&output-quality=auto'
    },
    {
        name: 'Пальмира ',
        link: 'https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/5/15/1431704498938/45098765-08b9-4beb-92f7-a53f10da375d-2060x1371.jpeg?width=720&quality=45&auto=format&fit=max&dpr=2&s=6cce57fa113f41fa8ea220dfc2f22d20'
    },
    {
        name: 'Маалюля',
        link: 'https://i.pinimg.com/originals/b2/50/4d/b2504dba83db45e1dbbc1a14358a4e3b.jpg'
    }
];

//  selectors \\

// template \\
const listContainerEl = document.querySelector('.pictures');
const templateEl = document.querySelector('.template');

// profile \\
const profileNmae = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__subtitle');
const openBtn = document.querySelector('.profile__button-edit');
const openBtnCreat = document.querySelector('.profile__button-add');

// popup \\
const popUp = document.querySelector('.popup');
const popUpCloseBtn = document.querySelector('.popup__close');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input-text_type_name');
const jobInput = document.querySelector('.popup__input-text_type_job');

// popup creat \\
const popUpCreat = document.querySelector('.popup-creat');
const popUpCloseBtnCreat = document.querySelector('.popup-creat__close');
const creatCardBtn = document.querySelector('.popup-creat__button');
const inputName = document.querySelector('.popup-creat__input-name');
const inputLink = document.querySelector('.popup-creat__input-link');
const formElAddCard = document.querySelector('.popup-creat__form');
const fallbackImage = 'https://www.froben11.de/wp-content/uploads/2016/10/orionthemes-placeholder-image.png';

// popup img \\
const btnImgPopClose = document.querySelector('.popup-img__close');
const btnImgPop = document.querySelector('.popup-img');
const popImage = document.querySelector('.popup-img__image');
const popImageSub = document.querySelector('.popup-img__subtitle');


function openPopup(popup) {
    popup.classList.add('popup__opened');
    document.addEventListener('click', closePopupByOverlay);
}

function closePopup(popup) {
    popup.classList.remove('popup__opened');

}

function closePopupByOverlay(evt) {
    if (evt.target.classList.contains('popup')) {
        const overlayTarget = document.querySelector('.popup__opened');
        closePopup(overlayTarget);
    }



}

const closePopupByEsc = document.addEventListener('keydown', function (event) {

    const key = event.key;
    if (key === "Escape") {
        popUp.classList.remove('popup__opened');
        popUpCreat.classList.remove('popup__opened');
        btnImgPop.classList.remove('popup__opened');
    }
});


function formSubmitHandler(evt) {
    evt.preventDefault();
    profileNmae.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popUp);
}




function addEl() {
    const page = initialCards.map(getItem);

    listContainerEl.prepend(...page);
}
addEl();

function addCard(e) {
    e.preventDefault();
    const inputT = inputName.value;
    const inputL = inputLink.value ? inputLink.value : fallbackImage
    const listEl = getItem({
        name: inputT,
        link: inputL
    });
    closePopup(popUpCreat);
    inputName.value = '';
    inputLink.value = '';
    listContainerEl.prepend(listEl);
}

function getItem(item) {
    const newItem = templateEl.content.cloneNode(true);
    const addTitle = newItem.querySelector('.cards__title');
    const addImg = newItem.querySelector('.cards__image');
    addTitle.textContent = item.name;
    addImg.src = item.link;
    addImg.alt = item.name;

    addImg.addEventListener("click", () => {
        openImg(item);
    });

    const removeBtn = newItem.querySelector('.cards__bin');
    removeBtn.addEventListener('click', deleteItem);

    const likeBtn = newItem.querySelector('.cards__heart');
    likeBtn.addEventListener('click', toggleLikeIcon);

    return newItem;
}

function openImg(item) {
    popImage.src = item.link;
    popImage.alt = item.name;
    popImageSub.textContent = item.name;
    openPopup(btnImgPop);
}

function deleteItem(event) {
    event.target.closest('.cards').remove();
}

function toggleLikeIcon(evt) {
    evt.target.classList.toggle('cards__heart_active');
}


openBtn.addEventListener('click', () => {
    openPopup(popUp);
});
popUpCloseBtn.addEventListener('click', () => {
    closePopup(popUp);
});

openBtnCreat.addEventListener('click', () => {
    openPopup(popUpCreat);
});
popUpCloseBtnCreat.addEventListener('click', () => {
    closePopup(popUpCreat);
});

btnImgPopClose.addEventListener('click', () => {
    closePopup(btnImgPop);
});
formElement.addEventListener('submit', formSubmitHandler);
formElAddCard.addEventListener('submit', addCard);