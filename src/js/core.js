import 'basiclightbox/dist/basicLightbox.min.css';
import refs from './refs';
//---------------------------------------------------
import updateUI from './updateUI';
import api from './api';
import btn from './btn';

btn.hideSidebar();
btn.hideLoadBtn();
btn.hideCloseBtn();
btn.showSearchForm();

refs.cardList.addEventListener('click', e => {
  updateUI.card(e.target.parentNode.parentNode.dataset.movieid);
});

refs.serchForm.addEventListener('submit', e => {
  e.preventDefault();
  btn.showLoadBtn();
  api.currPage = 1;
  refs.cardList.innerHTML = '';
  updateUI.cardsByQuerry();
});

const movieId = api.getMovieIdFromLink();

if (movieId) {
  updateUI.card(movieId);
} else {
  updateUI.mainPage();
}

refs.loadMoreBtn.addEventListener('click', () => {
  updateUI.cardsByQuerry(true);
});

refs.library.addEventListener('click', () => {
  updateUI.renderLibraryWatched();
  btn.hideSearchForm();
  btn.showSidebar();
  btn.activeWatchBtn();
});

refs.sidebarWatchBtn.addEventListener('click', () => {
  updateUI.renderLibraryWatched();
  btn.activeWatchBtn();
  btn.disactiveQueueBtn();
});

refs.sidebarQueueBtn.addEventListener('click', () => {
  updateUI.renderLibraryQueued();
  btn.activeQueueBtn();
  btn.disactiveWatchBtn();
});
