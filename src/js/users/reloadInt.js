import refs from '../refs';
import cardTemplate from '../../template/card.hbs';
import mainPageTemplate from '../../template/main-page.hbs';
import api from '../api';

const user1 = {
  mainPage() {
    api.getPopularFilms().then(data => {
      data.results.map(
        elem => (elem.release_date = elem.release_date.split('-')[0]),
      );
      // console.log(data.results);
      const markup = mainPageTemplate(data.results);
      insertCardsToMainPage(markup);
      // console.log(data.results[0].release_date.split('-')[0]);
    });
  },
  card(id) {
    api.getInfoById(id).then(data => {
      // console.log(data);
      const markup = buildCartTemplate(data);
      // console.log(markup);
      insertCardToMain(markup);
    });
  },
  buildCartTemplate(item) {
    return cardTemplate(item);
  },
  insertCardToMain(item) {
    refs.container.innerHTML = item;
  },
  insertCardsToMainPage(items) {
    refs.cardList.insertAdjacentHTML('beforeend', items);
  },
};

//card(419704);
// mainPage();

// function mainPage() {
//   api.getPopularFilms().then(data => {
//     data.results.map(
//       elem => (elem.release_date = elem.release_date.split('-')[0]),
//     );
//     // console.log(data.results);
//     const markup = mainPageTemplate(data.results);
//     insertCardsToMainPage(markup);
//     // console.log(data.results[0].release_date.split('-')[0]);
//   });
// }

// function card(id) {
//   api.getInfoById(id).then(data => {
//     // console.log(data);
//     const markup = buildCartTemplate(data);
//     // console.log(markup);
//     insertCardToMain(markup);
//   });
// }

// function buildCartTemplate(item) {
//   return cardTemplate(item);
// }

// function insertCardToMain(item) {
//   refs.container.innerHTML = item;
// }

// function insertCardsToMainPage(items) {
//   refs.cardList.insertAdjacentHTML('beforeend', items);
// }

export default user1;
