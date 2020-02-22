const movieLocalStorage = {
  setWatchedMovieIdToLocalStorage(obj) {
    let watchedArray = localStorage.getItem('watched');
    let parsedWatchedArray = watchedArray ? JSON.parse(watchedArray) : [];

    let isContain = parsedWatchedArray.find(movie => movie.id === obj.id);

    if (isContain) {
      return;
    };

    parsedWatchedArray.push(obj);

    localStorage.setItem('watched', JSON.stringify(parsedWatchedArray));
  },

  getWatchedMovieIdToLocalStorage() {
    const savedArrayOfId = localStorage.getItem('watched');
    const parsedArrayOfid = JSON.parse(savedArrayOfId);

    return parsedArrayOfid;
  },

  deleteWatchedMovieIdFromLocalStorage(obj) {

    let watchedArray = localStorage.getItem('watched');

    let parsedWatchedArray = watchedArray ? JSON.parse(watchedArray) : [];

    let isContain = parsedWatchedArray.find(movie => movie.id === obj.id);

    if (isContain) {
      const positionId = parsedWatchedArray.indexOf(isContain);

      parsedWatchedArray.splice(positionId, 1)
    };

    localStorage.setItem('watched', JSON.stringify(parsedWatchedArray));
  },

  setQueueMovieIdToLocalStorage(obj) {
    let queueArray = localStorage.getItem('queue');
    let parsedQueueArray = queueArray ? JSON.parse(queueArray) : [];

    let isContain = parsedQueueArray.find(movie => movie.id === obj.id);

    if (isContain) {
      return;
    };

    parsedQueueArray.push(obj);

    localStorage.setItem('queue', JSON.stringify(parsedQueueArray));
  },

  getQueueMovieIdToLocalStorage() {
    const savedArrayOfId = localStorage.getItem('queue');
    const parsedArrayOfid = JSON.parse(savedArrayOfId);

    return parsedArrayOfid;
  },

  deleteQueueMovieIdFromLocalStorage(obj) {
    let queueArray = localStorage.getItem('queue');
    let parsedQueueArray = queueArray ? JSON.parse(queueArray) : [];

    let isContain = parsedQueueArray.find(movie => movie.id === obj.id);

    if (isContain) {
      const positionId = parsedQueueArray.indexOf(isContain);

      parsedQueueArray.splice(positionId, 1);
    };

    localStorage.setItem('queue', JSON.stringify(parsedQueueArray));
  },
};

export default movieLocalStorage;
