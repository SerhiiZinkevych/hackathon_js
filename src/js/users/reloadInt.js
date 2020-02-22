import refs from '../refs';
import cardTemplate from '../../template/card.hbs';
import mainPageTemplate from '../../template/main-page.hbs';
import api from '../api';
import localStorageJs from '../localStorageJS';

const user1 = {
  mainPage() {
    api.getPopularFilms().then(data => {
      data.results.map(
        elem => (elem.release_date = elem.release_date.split('-')[0]),
      );
      // console.log(data.results);
      const markup = mainPageTemplate(data.results);
      this.insertCardsToMainPage(markup);
      // console.log(data.results[0].release_date.split('-')[0]);
    });
  },
  card(id) {
    api.getInfoById(id).then(data => {
      // console.log(data);
      const markup = cardTemplate(data);
      // console.log(markup);
      this.insertCardToMain(markup);
      this.setOnclickAddWatch();
      this.setOnclickAddQueue();
    });
  },
  buildCartTemplate(item) {
    return cardTemplate(item);
  },
  insertCardToMain(item) {
    refs.cardContainer.innerHTML = item;
  },
  insertCardsToMainPage(items) {
    refs.cardList.insertAdjacentHTML('beforeend', items);
  },
  showCardsByquery(query) {
    api.getMoviesByQuery(query).then(data => {
      data.results.map(
        elem => (elem.release_date = elem.release_date.split('-')[0]),
      );
      const markup = mainPageTemplate(data.results);
      this.insertCardsToMainPage(markup);
      this.setOnclick();
    });
  },
  setOnclick() {
    const markup = document.querySelectorAll('.itemCard');
    //console.log(markup);
    for (const li of markup) {
      li.addEventListener('click', e => {
        const id = e.currentTarget.dataset.movieid;
        //console.dir(id);
        this.card(id);
      });
    }
  },
  setOnclickAddWatch() {
    const buttonAddWatch = document.querySelector('.btnAddWatch');
    //console.log(buttonAddWatch);
    buttonAddWatch.addEventListener('click', e => {
      const id = e.currentTarget.dataset.movieid;
      const saveData = localStorageJs.setWatchedMovieIdToLocalStorage;
      const getObj = api.getInfoById(id).then(saveData);
      //getObj.then(console.log);
      console.log(localStorageJs.getWatchedMovieIdToLocalStorage());
    });
  },
  setOnclickAddQueue() {
    const buttonAddWatch = document.querySelector('.btnAddQueue');
    //console.log(buttonAddWatch);
    buttonAddWatch.addEventListener('click', e => {
      const id = e.currentTarget.dataset.movieid;
      const saveData = localStorageJs.deleteWatchedMovieIdFromLocalStorage;
      const getObj = api.getInfoById(id).then(saveData);
      //getObj.then(console.log);
      console.log(localStorageJs.getWatchedMovieIdToLocalStorage());
    });
  },
};

export default user1;
