import refs from './refs';
const btn = {
  hideSearchForm() {
    refs.textArea.hidden = true;
  },
  showSearchForm() {
    refs.textArea.hidden = false;
  },
  hideSidebar() {
    refs.sidebar.classList.add('hide');
  },
  showSidebar() {
    refs.sidebar.classList.remove('hide');
  },
  hideLoadBtn() {
    refs.loadMoreBtn.classList.add('hide');
  },
  showLoadBtn() {
    refs.loadMoreBtn.classList.remove('hide');
  },
  hideCloseBtn() {
    const markup = document.querySelectorAll('.close');
    for (const li of markup) {
      li.classList.add('hide');
    }
  },
  showCloseBtn() {
    Array.from(refs.closeBtn).map(item => item.classList.remove('hide'));
  },
  activeWatchBtn() {
    refs.sidebarWatchBtn.classList.add('active');
  },
  disactiveWatchBtn() {
    refs.sidebarWatchBtn.classList.remove('active');
  },
  activeQueueBtn() {
    refs.sidebarQueueBtn.classList.add('active');
  },
  disactiveQueueBtn() {
    refs.sidebarQueueBtn.classList.remove('active');
  },
};

export default btn;
