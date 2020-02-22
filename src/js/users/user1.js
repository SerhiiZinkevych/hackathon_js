import refs from '../refs';
import cardTemplate from '../../template/card.hbs';
import api from '../api';

const user1 = {
  test() {
    console.log('user1 OK');
  },
};

Card(419704);

function Card(id) {
  api.getInfoById(id).then(data => {
    console.log(data);
    const markup = buildCartTemplate(data);
    console.log(markup);
    insertCardToMain(markup);

    console.log(refs.cardList);
  });
}

function buildCartTemplate(item) {
  return cardTemplate(item);
}

function insertCardToMain(item) {
  refs.container.innerHTML = item;
}
export default user1;
