const refs = {
  body: document.querySelector('body'),
  intro: document.querySelector('.intro'),
  container: document.querySelector('#container'),
  cardList: document.querySelector('.card_list'),

  test() {
    console.log(`${Object.getOwnPropertyNames(this)} OK`);
  },
};

export default refs;
