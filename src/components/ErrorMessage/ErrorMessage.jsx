import css from './ErrorMessage.module.css';

export default function ErrorMessage({ error }) {
  return (
    <div className={css.container}>
      <h1 className={css.heading}>
        Error page {error.response && error.response.status}
      </h1>
      <p className={css.text}>{error.name && error.name}</p>
      <p className={css.text}>{error.messaage && error.message}</p>
      <p className={css.text}>{error.code && error.code}</p>
    </div>
  );
}
