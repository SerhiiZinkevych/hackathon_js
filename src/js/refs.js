const refs = {
  body: document.querySelector('body'),
  intro: document.querySelector('.intro'),

  test() {
    console.log(`${Object.getOwnPropertyNames(this)} OK`);
  },
};

export default refs;
