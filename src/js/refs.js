const refs = {
  body: document.querySelector('body'),
  logo: document.querySelector('.site-logo'),
  intro: document.querySelector('.intro'),
  container: document.querySelector('#container'),
  serchForm: document.querySelector('.search-form'),
  textArea: document.querySelector('#search-form'),
  cardContainer: document.querySelector('#container'),
  cardList: document.querySelector('.card_list'),
  library: document.querySelector('#nav-libery'),
  //itemCard: document.querySelectorAll('.itemCard'),
  // form: document.querySelector('.search-form'),
  // homeBtn: document.querySelector('#nav-home'),
  // libraryBtn: document.querySelector('#nav-libery'),
  // cards: document.querySelectorAll('.card__link'),
  test() {
    console.log(`${Object.getOwnPropertyNames(this)} OK`);
  },
};

export default refs;
