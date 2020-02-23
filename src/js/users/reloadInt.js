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
      this.setOnclick();
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
    refs.cardList.innerHTML = '';
    refs.cardList.innerHTML = item;
    refs.textArea.hidden = true;
  },
  insertCardsToMainPage(items) {
    refs.cardList.innerHTML = '';
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
    // console.log(markup);
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
      if (buttonAddWatch.dataset.action === 'add') {
        const saveData = localStorageJs.setWatchedMovieIdToLocalStorage;
        api
          .getInfoById(id)
          .then(saveData)
          .then(this.rerenderButtons);
      } else if (buttonAddWatch.dataset.action === 'remove') {
        api
          .getInfoById(id)
          .then(localStorageJs.deleteWatchedMovieIdFromLocalStorage)
          .then(this.rerenderButtons);
      }
      //getObj.then(console.log);
      // console.log(localStorageJs.getWatchedMovieIdToLocalStorage());
    });
  },
  rerenderButtons() {
    const buttonAddWatch = document.querySelector('.btnAddWatch');
    const buttonAddQueue = document.querySelector('.btnAddQueue');
    const watchedLS = localStorageJs.getWatchedMovieIdToLocalStorage();
    let isWatched = false;
    let isQueued = false;
    if (watchedLS) {
      isWatched = watchedLS.find(
        movie => movie.id === Number(buttonAddWatch.dataset.movieid),
      );
    }
    const queuedLS = localStorageJs.getQueueMovieIdToLocalStorage();
    if (queuedLS) {
      isQueued = queuedLS.find(
        movie => movie.id === Number(buttonAddQueue.dataset.movieid),
      );
    }
    // console.log(isWatched);

    if (isWatched) {
      buttonAddWatch.textContent = 'Remove from watched';
      buttonAddWatch.dataset.action = 'remove';
    } else {
      buttonAddWatch.textContent = 'Add to watched';
      buttonAddWatch.dataset.action = 'add';
    }

    if (isQueued) {
      buttonAddQueue.textContent = 'Remove from queue';
      buttonAddQueue.dataset.action = 'remove';
    } else {
      buttonAddQueue.textContent = 'Add to queue';
      buttonAddQueue.dataset.action = 'add';
    }
  },
  setOnclickAddQueue() {
    const buttonAddQueue = document.querySelector('.btnAddQueue');
    buttonAddQueue.addEventListener('click', e => {
      const id = e.currentTarget.dataset.movieid;
      if (buttonAddQueue.dataset.action === 'add') {
        const saveData = localStorageJs.setQueueMovieIdToLocalStorage;
        api
          .getInfoById(id)
          .then(saveData)
          .then(this.rerenderButtons);
      } else if (buttonAddQueue.dataset.action === 'remove') {
        api
          .getInfoById(id)
          .then(localStorageJs.deleteQueueMovieIdFromLocalStorage)
          .then(this.rerenderButtons);
      }
      //getObj.then(console.log);
      // console.log(localStorageJs.getWatchedMovieIdToLocalStorage());
    });
  },
  renderLibrary(type = 'watched') {
    let data = '';
    if (type === 'watched') {
      data = localStorageJs.getWatchedMovieIdToLocalStorage();
    } else if (type === 'queue') {
      data = localStorageJs.getQueueMovieIdToLocalStorage();
    }
    refs.textArea.hidden = true;
    const markup = mainPageTemplate(data);
    this.insertCardsToMainPage(markup);
    this.setOnclick();
  },
};

export default user1;