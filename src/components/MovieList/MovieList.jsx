import { Link } from "react-router-dom";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import css from "./MovieList.module.css";
import { HiTrophy, HiUserGroup, HiHandThumbUp } from "react-icons/hi2";
import useFetch from "../../hooks/useFetch";
import { useState } from "react";
import Loader from "../Loader/Loader";

const urlImg = "https://image.tmdb.org/t/p/w500/";
export default function MovieList({ url }) {
  const [page, setPage] = useState(1);
  const { data, loading, error } = useFetch(url, page);
  console.log(data.results);
  const movies = data.results;
  return (
    <div>
      {loading && <Loader />}
      {error && <p>Error</p>}
      {movies && (
        <ul className={css.list}>
          {movies.map((movie) => (
            <li key={movie.id} className={css.item}>
              {/*       <img src={url + movie.backdrop_path} alt={movie.original_title} /> */}
              <img
                className={css.poster}
                src={urlImg + movie.poster_path}
                alt={movie.original_title}
              />
              <div className={css.top}>
                <p
                  className={css.vote}
                  aria-label="vote average"
                  title="vote average">
                  <HiTrophy className={css.icon} />
                  {movie.vote_average}
                </p>
                <p className={css.vote} title="vote count">
                  <HiUserGroup className={css.icon} /> {movie.vote_count}
                </p>
                <p className={css.vote} title="popularity">
                  <HiHandThumbUp className={css.icon} />
                  {movie.popularity}
                </p>
              </div>
              <div className={css.wrapper}>
                <h2 className={css.title}>{movie.original_title}</h2>
                <p className={css.overview}>{movie.overview}</p>
                <p className={css.date}>{movie.release_date}</p>
                <Link to={`/movies/${movie.id}`} className={css.more}>
                  More
                </Link>
              </div>
            </li>
          ))}
        </ul>
      )}
      <LoadMoreBtn />
    </div>
  );
}
