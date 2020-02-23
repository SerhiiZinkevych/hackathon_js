import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API = '8b49236e6b82eb62c6f5cab7126e8684';

export default {
  //picsPerPage: 6,
  getPopularFilms() {
    return axios
      .get(`/movie/popular/?api_key=${API}`)
      .then(response => response.data);
  },
  getInfoById(id) {
    id = this.getMovieIdFromLink() ? this.getMovieIdFromLink() : id;
    return axios
      .get(`/movie/${id}?api_key=${API}`)
      .then(response => response.data);
  },
  getMoviesByQuery(query, page = 1) {
    page = this.getPageFromLink() ? this.getPageFromLink() : page;
    return axios
      .get(
        `/search/movie?api_key=${API}&page=${page}&query=${query}&include_adult=false&language=en-US`,
      )
      .then(response => response.data);
  },
  getPageFromLink() {
    return location.hash.split('#page=')[1];
  },
  getMovieIdFromLink() {
    return location.hash.split('#id=')[1];
  },
};
