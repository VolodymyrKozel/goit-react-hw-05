import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader/Loader";

import css from "./MovieReviews.module.css";

export default function MovieReviews() {
  const { movieId } = useParams();
  const { data, loading, error } = useFetch(`movie/${movieId}/reviews`);
  return (
    <div className="container">
      {loading && <Loader />}
      {error && <p>Error</p>}
      {!error && data && data.length ? (
        <ul className={css.list}>
          {data.map((item) => (
            <li className={css.item} key={data.id + item.created_at}>
              <h3 className={css.title}>{item.author}</h3>
              <p className={css.text}>{item.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.noReviews}>
          We do not have any reviews for this movie
        </p>
      )}
    </div>
  );
}
