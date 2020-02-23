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
import user2 from './users/user2';
import user3 from './users/user3';
import api from './api';

//user1.test();
// user2.test();
// user3.test();

refs.serchForm.addEventListener('submit', e => {
  e.preventDefault();
  const text = refs.textArea.value;

  //console.log(text);

  reloadInt.showCardsByquery(text);
  //console.log(refs.itemCard);
});

//console.log(refs.itemCard);
