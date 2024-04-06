import SearchBox from "../../components/SearchBox/SearchBox";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";
import css from "./MoviesPage.module.css";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";

export default function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [url, setUrl] = useState("");
  const [page, setPage] = useState(1);
  const { data, loading, error, totalPages } = useFetch(url, page);
  function handleLoadMore() {
    setPage((prevPage) => prevPage + 1);
  }
  useEffect(() => {
    const currentQuery = searchParams.get("query");

    if (!currentQuery) {
      setUrl("");
      return;
    }
    if (url !== `search/movie?${searchParams}`) {
      setPage(1);
    }
    setUrl(`search/movie?${searchParams}`);
  }, [searchParams]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>
        {searchParams.get("query")
          ? `your searching for "${searchParams.get("query")}"`
          : "Enter name of movie to search"}
      </h1>
      <SearchBox setSearchParams={setSearchParams} />
      {url !== "" && data && <MovieList movies={data} />}
      {error && <ErrorMessage error={"error"} />}
      {loading && <Loader />}
      {totalPages > 1 && page < totalPages && url !== "" ? (
        <LoadMoreBtn handleLoadMore={handleLoadMore} loading={loading} />
      ) : null}
    </div>
  );
}
