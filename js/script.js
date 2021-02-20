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
const listContainerEl = document.querySelector('.pictures');
const templateEl = document.querySelector('.template');
const creatCardBtn = document.querySelector('.popup-creat__button');
const inputName = document.querySelector('.popup-creat__input-name');
const inputLink = document.querySelector('.popup-creat__input-link');
const fallbackImage = 'https://www.froben11.de/wp-content/uploads/2016/10/orionthemes-placeholder-image.png';

const btnImgPopClose = document.querySelector('.popup-img__close');

const profileNmae = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__subtitle');
const nameInput = document.querySelector('.popup__input-text_type_name');
const jobInput = document.querySelector('.popup__input-text_type_job');



const openBtn = document.querySelector('.profile__button-edit');
const popUpCloseBtn = document.querySelector('.popup__close');
const formElement = document.querySelector('.popup__form');


const popUpCloseBtnCreat = document.querySelector('.popup-creat__close');
const openBtnCreat = document.querySelector('.profile__button-add');

const popUpCreat = document.querySelector('.popup-creat');
const btnImgPop = document.querySelector('.popup-img');
const popUp = document.querySelector('.popup');

function openPopup(popup) {
    popup.classList.add('popup__opened');
}
function closePopup(popup) {
    popup.classList.remove('popup__opened');
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

function formSubmitHandler(evt) {
    evt.preventDefault();

    profileNmae.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popUp);
}

formElement.addEventListener('submit', formSubmitHandler);


function addEl() {
    const page = initialCards.map(getItem);

    listContainerEl.prepend(...page);
}

function addCard(e) {
    e.preventDefault();
    const inputT = inputName.value;
    const inputL = inputLink.value ? inputLink.value : fallbackImage
    const listEl = getItem({
        name: inputT,
        link: inputL
    });

    inputT.value = '';
    inputLink.value = '';


    listContainerEl.prepend(listEl);
    closePopup(popUpCreat);
    

}

function getItem(item) {
    const newItem = templateEl.content.cloneNode(true);
    const addTitle = newItem.querySelector('.cards__title');
    const addImg = newItem.querySelector('.cards__image');
    addTitle.textContent = item.name;
    addImg.src = item.link;
    addImg.alt = item.name;


    newItem.querySelector('.cards').addEventListener('click', function () {
        document.querySelector('.popup-img__image').src = this.querySelector('.cards__image').src;
        document.querySelector('.popup-img__image').alt = this.querySelector('.cards__title').textContent;
        document.querySelector('.popup-img__subtitle').textContent = this.querySelector('.cards__title').textContent;
    });

    addImg.addEventListener('click', () => {
        openPopup(btnImgPop);
    });
    btnImgPopClose.addEventListener('click', () => {
        closePopup(btnImgPop);
    });

    const removeBtn = newItem.querySelector('.cards__bin');
    removeBtn.addEventListener('click', deleteItem);

    const likeBtn = newItem.querySelector('.cards__heart');
    likeBtn.addEventListener('click', likeBtnH);

    creatCardBtn.addEventListener('click', addCard);


    return newItem;
}


function deleteItem(event) {
    event.target.closest('.cards').remove();
}
creatCardBtn.addEventListener('submit', addCard);

function likeBtnH(evt) {
    evt.target.classList.toggle('cards__heart_active');
}
addEl();