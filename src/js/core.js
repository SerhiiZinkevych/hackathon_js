import imagesLoaded from 'imagesloaded';
import lodash from 'lodash';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
//---------------------------------------------------
import imageCardTamplate from '../template/card.hbs';
import refs from './refs';
import myPnotify from './pnotifyAlerts';
import proxyElement from './proxyElemen';
//---------------------------------------------------
import user1 from './users/user1';
import user2 from './users/user2';
import user3 from './users/user3';
import api from './api';

console.log(`${imagesLoaded.name} OK`);
console.log(`${_.name} OK`);
console.log(`${basicLightbox.name} OK`);
console.log(imageCardTamplate.name + ' OK');
refs.test();
myPnotify.test();
console.log(`${proxyElement.name} OK`);

user1.test();
user2.test();
user3.test();

api.getPopularFilms().then(console.log);
api.getInfoById(419704).then(console.log);
api.getMoviesByQuery('batman').then(console.log);
