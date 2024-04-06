import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCast } from "../../services/api";
import Loader from "../../components/Loader/Loader";
import { MdOutlineImageNotSupported } from "react-icons/md";
import css from "./MovieCast.module.css";
const url = "https://image.tmdb.org/t/p/w500/";

export default function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCasts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    if (!movieId) return;
    const fetchData = async () => {
      try {
        setError(null);
        setLoading(true);
        const { cast } = await getCast(movieId);
        setCasts(cast);
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

      {cast && (
        <ul className={css.list}>
          {cast.map((item) => (
            <li className={css.item} key={item.name}>
              <div className={css.imgWrapper}>
                {item.profile_path ? (
                  <img
                    className={css.img}
                    src={url + item.profile_path}
                    alt={item.name}
                  />
                ) : (
                  <MdOutlineImageNotSupported className={css.icon} />
                )}
              </div>
              <h3 className={css.name}>{item.name}</h3>
              <p className={css.text}>
                <span className={css.accent}>Character:</span> {item.character}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
