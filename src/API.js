import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
const paramsRequest = {
  include_adult: false,
  language: "en-US",
  page: 1,
};
const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDQxMmMxYzEwODc1ZDg2ZjgzYTY2ZmQwYjhhYWZmZCIsInN1YiI6IjY1YmU1OGUxYmE0ODAyMDE4MjZhNGZlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6LyXAz5yYrCsmb6nuk8kfbBsh3O0NB1LAeGNlh6C0bo",
  },
  params: paramsRequest,
};
export async function getSearch() {
  const response = axios.get("search/movie", options);
  return response;
}
export async function getPopular() {
  const response = axios.get("movie/popular", options);
  return response;
}
export async function getTrending() {
  const response = axios.get("trending/movie/day", options);
  return response;
}
export async function getMovie(MovieId) {
  const response = axios.get(`movie/${MovieId}`, options);
  return response;
}
