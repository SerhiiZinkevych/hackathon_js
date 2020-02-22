import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API = '8b49236e6b82eb62c6f5cab7126e8684';

export const getPopularFilms = () => {
  return axios
    .get(`/movie/popular/?api_key=${API}`)
    .then(response => response.data);
};

export const getInfoById = id => {
  return axios
    .get(`/movie/${id}?api_key=${API}`)
    .then(response => response.data);
};

export const getMoviesByQuery = query => {
  return axios
    .get(
      `/search/movie?api_key=${API}&query=${query}&include_adult=false&language=en-US`,
    )
    .then(response => response.data);
};
