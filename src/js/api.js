import axios from 'axios';
import refs from './refs';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API = '8b49236e6b82eb62c6f5cab7126e8684';

export default {
  currPage: 1,

  getPopularFilms() {
    return axios
      .get(`/movie/popular/?api_key=${API}`)
      .then(response => response.data.results);
  },

  getInfoById(id) {
    id = this.getMovieIdFromLink() ? this.getMovieIdFromLink() : id;
    return axios
      .get(`/movie/${id}?api_key=${API}`)
      .then(response => response.data);
  },

  getPageFromLink() {
    return location.hash.split('#page=')[1];
  },

  getMoviesByQuery() {
    return axios
      .get(
        `/search/movie?api_key=${API}&page=${this.currPage}&query=${refs.textArea.value}&include_adult=false&language=en-US`,
      )
      .then(response => {
        this.currPage += 1;
        return response.data.results;
      });
  },

  getMovieIdFromLink() {
    return location.hash.split('#id=')[1];
  },

  getSimilarMovies() {
    return axios
      .get(`/movie/${this.getMovieIdFromLink()}/similar?api_key=${API}`)
      .then(response => response.data.results);
  },
};
