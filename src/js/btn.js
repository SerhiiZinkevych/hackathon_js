import refs from './refs';
const btn = {
  offSidebar() {
    refs.sidebar.classList.add('hide');
  },
  onSidebar() {
    refs.sidebar.classList.remove('hide');
  },
  offLoadBtn() {
    refs.loadMoreBtn.classList.add('hide');
  },
  onLoadBtn() {
    refs.loadMoreBtn.classList.remove('hide');
  },
};

export default btn;
