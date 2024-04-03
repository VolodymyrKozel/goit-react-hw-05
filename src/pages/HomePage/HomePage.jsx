import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";
import css from "./HomePage.module.css";

const url = "trending/movie/day";

export default function HomePage() {
  const [page, setPage] = useState(1);
  const { data, loading, error, totalPages } = useFetch(url, page);

  function handleLoadMore() {
    setPage((prevPage) => prevPage + 1);
  }
  return (
    <div className="container">
      <h1 className={css.title}>Trending movies</h1>
      {loading && <Loader />}
      {error && <p>Error</p>}
      <MovieList movies={data} />
      {totalPages > 1 && page < totalPages ? (
        <LoadMoreBtn handleLoadMore={handleLoadMore} loading={loading} />
      ) : null}
    </div>
  );
}
