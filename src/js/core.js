import imagesLoaded from 'imagesloaded';
import lodash from 'lodash';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
//---------------------------------------------------
import imageCardTemplate from '../template/card.hbs';
import refs from './refs';
import myPnotify from './pnotifyAlerts';
import proxyElement from './proxyElemen';
//---------------------------------------------------
import reloadInt from './users/reloadInt';
import api from './api';
import button from './btn';

refs.serchForm.addEventListener('submit', e => {
  api.currPage = 1;
  e.preventDefault();
  refs.cardList.innerHTML = '';
  const text = refs.textArea.value;

  //console.log(text);

  reloadInt.showCardsByquery(text);
  //console.log(refs.itemCard);
});

const movieId = api.getMovieIdFromLink();

if (movieId) {
  console.log('here');
  reloadInt.card(movieId);
} else {
  reloadInt.mainPage();
}

refs.library.addEventListener('click', () => {
  // console.log('here');
  reloadInt.renderLibrary();
});

document.querySelector('#loadMore').addEventListener('click', () => {
  reloadInt.showCardsByquery(refs.textArea.value);
});
