import refs from './refs';
import api from './api';
import localStorageJs from './localStorageJS';
import { renderSlider } from './slider';

import mainPageTemplate from '../template/main-page.hbs';
import cardTemplate from '../template/card.hbs';
import similarMoviesTemplate from '../template/similar-movies.hbs';

const updateUI = {
  createMarkup(data, template, container, append = false) {
    if (append) {
      container.insertAdjacentHTML('beforeend', template(data));
    } else {
      container.innerHTML = template(data);
    }
  },
  mainPage() {
    api
      .getPopularFilms()
      .then(data => this.createMarkup(data, mainPageTemplate, refs.cardList));
  },
  card(id) {
    api
      .getInfoById(id)
      .then(data => this.createMarkup(data, cardTemplate, refs.cardList))
      .then(() => {
        refs.btnAddWatch = document.querySelector('.btnAddWatch');
        refs.btnAddQueue = document.querySelector('.btnAddQueue');

        this.rerenderButtons();

        refs.btnAddWatch.addEventListener('click', addToWatched);
        refs.btnAddQueue.addEventListener('click', addToQueue);
      })
      .then(() => {
        this.renderSimilarMovies();
      });
  },
  renderSimilarMovies() {
    api
      .getSimilarMovies()
      .then(data =>
        this.createMarkup(data, similarMoviesTemplate, refs.cardList, true),
      )
      .then(renderSlider);
  },
  cardsByQuerry(append = false) {
    api
      .getMoviesByQuery()
      .then(data =>
        this.createMarkup(data, mainPageTemplate, refs.cardList, append),
      );
  },
  renderLibraryWatched() {
    const data = localStorageJs.getWatchedMovieIdToLocalStorage();
    this.createMarkup(data, mainPageTemplate, refs.cardList);
  },

  renderLibraryQueued() {
    const data = localStorageJs.getQueueMovieIdToLocalStorage();
    this.createMarkup(data, mainPageTemplate, refs.cardList);
  },

  rerenderButtons() {
    const watchedLS = localStorageJs.getWatchedMovieIdToLocalStorage();
    let isWatched = false;
    let isQueued = false;
    if (watchedLS) {
      isWatched = watchedLS.find(
        movie => movie.id === Number(refs.btnAddWatch.dataset.movieid),
      );
    }
    const queuedLS = localStorageJs.getQueueMovieIdToLocalStorage();
    if (queuedLS) {
      isQueued = queuedLS.find(
        movie => movie.id === Number(refs.btnAddQueue.dataset.movieid),
      );
    }
    if (isWatched) {
      refs.btnAddWatch.textContent = 'Remove from watched';
      refs.btnAddWatch.dataset.action = 'remove';
    } else {
      refs.btnAddWatch.textContent = 'Add to watched';
      refs.btnAddWatch.dataset.action = 'add';
    }

    if (isQueued) {
      refs.btnAddQueue.textContent = 'Remove from queue';
      refs.btnAddQueue.dataset.action = 'remove';
    } else {
      refs.btnAddQueue.textContent = 'Add to queue';
      refs.btnAddQueue.dataset.action = 'add';
    }
  },
};

function addToWatched(e) {
  const movieId = api.getMovieIdFromLink();
  if (e.currentTarget.dataset.action === 'add') {
    api
      .getInfoById(movieId)
      .then(localStorageJs.setWatchedMovieIdToLocalStorage)
      .then(updateUI.rerenderButtons);
  } else if (e.currentTarget.dataset.action === 'remove') {
    localStorageJs.deleteWatchedMovieIdFromLocalStorage(movieId);
    updateUI.rerenderButtons();
  }
}

function addToQueue(e) {
  const movieId = api.getMovieIdFromLink();
  if (e.currentTarget.dataset.action === 'add') {
    api
      .getInfoById(movieId)
      .then(localStorageJs.setQueueMovieIdToLocalStorage)
      .then(updateUI.rerenderButtons);
  } else if (e.currentTarget.dataset.action === 'remove') {
    localStorageJs.deleteQueueMovieIdFromLocalStorage(movieId);
    updateUI.rerenderButtons();
  }
}

export default updateUI;
