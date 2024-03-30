import { HiSearch } from "react-icons/hi";
import css from "./SearchBox.module.css";

const SearchBox = ({ onSearch }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const query = form.elements.query.value;

    // Якщо текстове поле порожнє, виводимо повідомлення
    // і припиняємо виконання функції.
    if (form.elements.query.value.trim() === "") {
      alert("Please enter search term!");
      return;
    }

    // У протилежному випадку викликаємо пропс
    // і передаємо йому значення поля
    onSearch(query);
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="query" placeholder="Search movie..." />
      <button>Search</button>
    </form>
  );
};

export default SearchBox;
