import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className="container">
      <h2 className={css.title}>Trending movies</h2>
      <ul className={css.list}>
        <MovieList url={"trending/movie/day"} />
      </ul>
    </div>
  );
}
