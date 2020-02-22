const refs = {
  body: document.querySelector('body'),
  intro: document.querySelector('.intro'),
  container: document.querySelector('.container'),
  cardList: document.querySelector('.card__list'),
  form: document.querySelector('.search-form'),
  homeBtn: document.querySelector('#nav-home'),
  libraryBtn: document.querySelector('#nav-libery'),
  cards: document.querySelectorAll('.card__link'),

  test() {
    console.log(`${Object.getOwnPropertyNames(this)} OK`);
  },
};

export default refs;
