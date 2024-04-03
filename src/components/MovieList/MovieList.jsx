import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";
import { HiTrophy, HiUserGroup, HiHandThumbUp } from "react-icons/hi2";

const urlImg = "https://image.tmdb.org/t/p/w500/";
export default function MovieList({ movies }) {
  const location = useLocation();
  return (
    <div>
      {movies && (
        <ul className={css.list}>
          {movies.map((movie) => (
            <li key={movie.id} className={css.item}>
              <img
                className={css.poster}
                src={
                  movie.poster_path === null
                    ? "no-image.webp"
                    : urlImg + movie.poster_path
                }
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
                <Link
                  to={`/movies/${movie.id}`}
                  state={{ from: location }}
                  className={css.btn}>
                  More
                </Link>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
