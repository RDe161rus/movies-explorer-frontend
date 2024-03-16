import './SearchForm.css';

function SearchForm() {
  return (
    <section className="searchForm">
      <form className="searchForm__container">
        <div className="input__container">
          <input className="searchForm__input" type="text" placeholder="Фильм" />
          <button type="submit" className="input__btn">
            Поиск
          </button>
        </div>
        <div className="searchForm__check-container">
          <label className="searchForm__check">
            <input type="checkbox" />
            <span className="searchForm__check-slider"></span>
          </label>
          <p className="searchForm__check-text">Короткометражки</p>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
