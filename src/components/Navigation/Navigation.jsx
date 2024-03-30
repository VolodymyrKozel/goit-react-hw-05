import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  return (
    <header className={css.header}>
      <div className="container flex">
        <p className={css.logo}>
          <span role="img" aria-label="computer icon">
            💻
          </span>{" "}
          Movies
        </p>
        <nav className={css.nav}>
          <NavLink to="/" className={css.buildLinkClass}>
            Home
          </NavLink>
          <NavLink to="/movies" className={css.buildLinkClass}>
            Movies
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
