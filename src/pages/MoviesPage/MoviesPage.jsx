import SearchBox from "../../components/SearchBox/SearchBox";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";
import css from "./MoviesPage.module.css";
import { useState } from "react";

export default function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [url, setUrl] = useState("");
  /*   const updateQueryString = (query) => {
    const nextParams = query !== "" ? { query } : {};
  }; */
  const handleSearch = (query) => {
    setSearchParams({ query });
    setUrl(`search/movie?${searchParams}`);
  };

  return (
    <div>
      <SearchBox onSearch={handleSearch} />
      {url && <MovieList url={url} />}
    </div>
  );
}
