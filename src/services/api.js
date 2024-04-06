import axios from "axios";
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

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

export const getCast = async (movieId) => {
  const { data } = await instance.get(`movie/${movieId}/credits`, options);

  return data;
};

export const getReviews = async (movieId) => {
  const { data } = await instance.get(`movie/${movieId}/reviews`, options);
  return data;
};

export const getMovieDetails = async (movieId) => {
  const { data } = await instance.get(`movie/${movieId}`, options);
  return data;
};
