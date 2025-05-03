import css from './ErrorMessage.module.css'

export default function ErrorMessage() {
  return (
    <>
      <p className={css.errorText}>
        Connection problem, reload the page or try again later...
      </p>
    </>
  );
}
