const movieLocalStorage = {
  setWatchedMovieIdToLocalStorage(id) {
    let watchedArray = localStorage.getItem('watched');
    let parsedWatchedArray = watchedArray ? JSON.parse(watchedArray) : [];

    if (parsedWatchedArray.includes(id)) {
      return;
    };

    parsedWatchedArray.push(id);

    localStorage.setItem('watched', JSON.stringify(parsedWatchedArray));
  },

  deleteWatchedMovieIdFromLocalStorage(id) {
    let watchedArray = localStorage.getItem('watched');
    let parsedWatchedArray = watchedArray ? JSON.parse(watchedArray) : [];

    if (parsedWatchedArray.includes(id)) {
      const positionId = parsedWatchedArray.indexOf(id);
      parsedWatchedArray.splice(positionId, 1)
    };

    localStorage.setItem('watched', JSON.stringify(parsedWatchedArray));
  },

  setQueueMovieIdToLocalStorage(id) {
    let queueArray = localStorage.getItem('queue');
    let parsedQueueArray = queueArray ? JSON.parse(queueArray) : [];

    if (parsedQueueArray.includes(id)) {
      return;
    };

    parsedQueueArray.push(id);

    localStorage.setItem('queue', JSON.stringify(parsedQueueArray));
  },

  deleteQueueMovieIdFromLocalStorage(id) {
    let queueArray = localStorage.getItem('queue');
    let parsedQueueArray = queueArray ? JSON.parse(queueArray) : [];

    if (parsedQueueArray.includes(id)) {
      const positionId = parsedQueueArray.indexOf(id);
      parsedQueueArray.splice(positionId, 1)
    };

    localStorage.setItem('queue', JSON.stringify(parsedQueueArray));
  },
};

export default movieLocalStorage;
