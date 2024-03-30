import { useState, useEffect } from "react";
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

export default function useFetch(url, page = 1) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  options.params.page = page;
  console.log(options.params.page);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null);
        setLoading(true);
        const res = await axios.get(url, options);
        setData(res.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  const reFetch = async () => {
    try {
      setError(null);
      setLoading(true);
      const res = await get(url);
      setMovie(res.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  return { data, loading, error, reFetch };
}
