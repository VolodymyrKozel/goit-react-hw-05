import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";

import css from "./MovieReviews.module.css";
import { getReviews } from "../../services/api";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    if (!movieId) return;
    const fetchData = async () => {
      try {
        setError(null);
        setLoading(true);
        const res = await getReviews(movieId);
        setReviews(res);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <div className="container tab-container">
      {loading && <Loader />}
      {error && <p>Ops! Something went wrong</p>}
      {reviews && reviews.results.length ? (
        <>
          <h2 className={css.title}>
            We have {reviews.results.length} reviews for this movie
          </h2>
          <ul className={css.list}>
            {reviews.results.map((item) => (
              <li className={css.item} key={reviews.id + item.created_at}>
                <h3 className={css.subtitle}>{item.author}</h3>
                <p className={css.text}>{item.content}</p>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p className={css.noReviews}>
          We do not have any reviews for this movie
        </p>
      )}
    </div>
  );
}
