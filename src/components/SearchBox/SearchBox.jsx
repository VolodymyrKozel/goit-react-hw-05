import { HiSearch } from "react-icons/hi";
import css from "./SearchBox.module.css";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const SearchBox = ({ setSearchParams }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      toast.error("Please enter search term!");
      return;
    }
    setSearchParams({ query });
  };

  const handleSearchParams = ({ target: { value } }) => {
    setQuery(value);
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="query"
          autoFocus
          value={query}
          onChange={handleSearchParams}
          placeholder="Search movie..."
        />
        <button className={css.btn} type="submit">
          <HiSearch />
          Search
        </button>
      </form>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};

export default SearchBox;
