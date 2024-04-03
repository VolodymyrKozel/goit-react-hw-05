import css from "./MovieReviews.module.css";

import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader/Loader";

export default function MovieReviews() {
  const { state } = useLocation();
  const { data, loading, error } = useFetch(state.url);
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
