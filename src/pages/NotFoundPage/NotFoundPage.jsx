import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";
export default function NotFoundPage() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Page not found</h1>
      <p className={css.text}>
        We&apos;re sorry, but the page you requested was not found
      </p>
      <Link className={css.btn} to="/">
        go to main page
      </Link>
    </div>
  );
}
