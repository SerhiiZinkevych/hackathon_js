const refs = {
  body: document.querySelector('body'),
  intro: document.querySelector('.intro'),
  container: document.querySelector('.container'),
  cardList: document.querySelector('.card__list'),
  serchForm: document.querySelector('.search-form'),
  textArea: document.querySelector('#search-form'),
  // container: document.querySelector('#container'),
  // cardList: document.querySelector('.card_list'),

  test() {
    console.log(`${Object.getOwnPropertyNames(this)} OK`);
  },
};

export default refs;
