const refs = {
  body: document.querySelector('body'),
  intro: document.querySelector('.intro'),
  container: document.querySelector('#container'),
  cardList: document.querySelector('.card__list'),
  serchForm: document.querySelector('.search-form'),
  textArea: document.querySelector('#search-form'),
  // container: document.querySelector('#container'),
  // cardList: document.querySelector('.card_list'),
  // form: document.querySelector('.search-form'),
  // homeBtn: document.querySelector('#nav-home'),
  // libraryBtn: document.querySelector('#nav-libery'),
  // cards: document.querySelectorAll('.card__link'),
  test() {
    console.log(`${Object.getOwnPropertyNames(this)} OK`);
  },
};

export default refs;
