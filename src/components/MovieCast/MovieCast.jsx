import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader/Loader";
import { MdOutlineImageNotSupported } from "react-icons/md";
import css from "./MovieCast.module.css";
const url = "https://image.tmdb.org/t/p/w500/";

export default function MovieCast() {
  const { movieId } = useParams();
  const { data, loading, error } = useFetch(`movie/${movieId}/credits`);
  return (
    <div className="container">
      {loading && <Loader />}
      {error && <p>Error</p>}

      {data.cast && (
        <ul className={css.list}>
          {data.cast.map((item) => (
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
