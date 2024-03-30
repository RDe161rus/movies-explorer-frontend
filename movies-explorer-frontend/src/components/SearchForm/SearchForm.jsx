import './SearchForm.css';

function SearchForm() {
  return (
    <section className="search-form">
      <form className="search-form__container">
        <fieldset className="search-form__input-container">
          <input className="search-form__input" type="text" placeholder="Фильм" required />
          <button type="submit" className="search-form__btn">
            Поиск
          </button>
        </fieldset>
        <fieldset className="search-form__check-container">
          <label className="search-form__check">
            <input type="checkbox" />
            <span className="search-form__check-slider"></span>
          </label>
          <p className="search-form__check-text">Короткометражки</p>
        </fieldset>
      </form>
    </section>
  );
}

export default SearchForm;
