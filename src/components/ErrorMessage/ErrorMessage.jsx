import { BackLink } from "../BackLink/BackLink";
import css from "./ErrorMessage.module.css";

export default function ErrorMessage({ error, backLinkHref }) {
  return (
    <div className={css.container}>
      <h1 className={css.heading}>
        Error page {error.response && error.response.status}
      </h1>
      {error.response.status === 404 ? (
        <p className={css.text}>
          Sorry, but page are you looking for not found.
        </p>
      ) : (
        <div>
          <p className={css.text}>{error.name && error.name}</p>
          <p className={css.text}>{error.messaage && error.message}</p>
          <p className={css.text}>{error.code && error.code}</p>
        </div>
      )}
      <BackLink to={backLinkHref}>Back</BackLink>
    </div>
  );
}
