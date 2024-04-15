import './SearchForm.css';
import useInput from '../../hooks/useInput';

function SearchForm({ onSearch, storedQuery, onCheckboxChange, isShortFilm }) {
  const query = useInput(storedQuery);
  const handleCheckboxChange = e => {
    onCheckboxChange(e.target.checked);
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSearch(query.query);
  };

  return (
    <section className="search-form">
      <form className="search-form__container" onSubmit={handleSubmit}>
        <fieldset className="search-form__input-container">
          <input
            className="search-form__input"
            type="text"
            value={query.query || ''}
            onChange={query.handleInputChange}
            placeholder="Фильм"
            required
          />
          <button type="submit" className="search-form__btn">
            Поиск
          </button>
        </fieldset>
        <fieldset className="search-form__check-container">
          <label className="search-form__check">
            <input
              type="checkbox"
              id="shortFilmCheckbox"
              checked={isShortFilm ? true : false}
              onChange={handleCheckboxChange}
            />
            <span className="search-form__check-slider"></span>
          </label>
          <p className="search-form__check-text">Короткометражки</p>
        </fieldset>
      </form>
    </section>
  );
}

export default SearchForm;
