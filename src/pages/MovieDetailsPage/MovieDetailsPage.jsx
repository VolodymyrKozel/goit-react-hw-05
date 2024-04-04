import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import { Suspense } from "react";
import Loader from "../../components/Loader/Loader";
import { BackLink } from "../../components/BackLink/BackLink";
/* import ErrorMessage from "../../components/ErrorMessage"; */
import { HiTrophy, HiUserGroup, HiHandThumbUp } from "react-icons/hi2";
import useFetch from "../../hooks/useFetch";

import css from "./MovieDetailsPage.module.css";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
const urlImg = "https://image.tmdb.org/t/p/w500/";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";
  const { data, loading, error } = useFetch(`movie/${movieId}`);
  return (
    <div className="container">
      {loading && <Loader />}
      {error && <ErrorMessage error={error} backLinkHref={backLinkHref} />}
      {data && !error && !loading && (
        <>
          <div className={css.container}>
            <div className={css.imgContainer}>
              <BackLink to={backLinkHref}>Back</BackLink>
              <img
                className={css.poster}
                src={
                  data.poster_path === undefined || data.poster_path === null
                    ? "/no-image.webp"
                    : urlImg + data.poster_path
                }
                alt={data.original_title}
              />
            </div>
            <div className={css.wrapper}>
              <h2 className={css.movieTitle}>{data.original_title}</h2>
              <p className={css.overview}>
                {data.overview ? data.overview : "no discription to this film"}
              </p>
              <p className={css.text}>
                <span className={css.accent}> Budget: </span> {data.budget} $
              </p>
              <p className={css.text}>
                <span className={css.accent}> Runtime:</span> {data.runtime}{" "}
                min.
              </p>
              <p className={css.text}>
                <span className={css.accent}> Status: </span> {data.status}
              </p>
              <p className={css.text}>
                <span className={css.accent}> Tagline:</span> {data.tagline}
              </p>
              <p className={css.date}>{data.release_date}</p>

              <h3 className={css.title}>Genres:</h3>
              <ul className={css.list}>
                {data.genres?.map((item) => (
                  <li key={item.id}>{item.name}</li>
                ))}
              </ul>
              <h3 className={css.title}>Production companies: </h3>
              <ul className={css.list}>
                {data.production_companies?.map((item) => (
                  <li className={css.itemCompany} key={item.id}>
                    {item.logo_path !== true ? (
                      <img
                        className={css.companyImg}
                        src={urlImg + item.logo_path}
                        alt={item.name}
                      />
                    ) : (
                      <h4 className={css.subtitle}>{item.name}</h4>
                    )}
                  </li>
                ))}
              </ul>
              <div className={css.top}>
                <p
                  className={css.vote}
                  aria-label="vote average"
                  title="vote average">
                  <HiTrophy className={css.icon} />
                  {data.vote_average}
                </p>
                <p className={css.vote} title="vote count">
                  <HiUserGroup className={css.icon} /> {data.vote_count}
                </p>
                <p className={css.vote} title="popularity">
                  <HiHandThumbUp className={css.icon} />
                  {data.popularity}
                </p>
              </div>
            </div>
          </div>
          <div className={css.adInfo}>
            <h2 className={css.movieTitle}>Aditional information</h2>
            <ul className={css.linkList}>
              <li className={css.linkItem}>
                <Link
                  className={css.link}
                  to="cast"
                  state={{ url: `movie/${movieId}/credits` }}>
                  Cast
                </Link>
              </li>
              <li className={css.linkItem}>
                <Link
                  className={css.ink}
                  to="reviews"
                  state={{ url: `movie/${movieId}/reviews` }}>
                  Review
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}
