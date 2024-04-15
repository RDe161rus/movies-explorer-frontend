import { useEffect, useState } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

function SavedMovies({ savedMovies, onDelete }) {
  const [searchResults, setSearchResults] = useState(savedMovies);
  const [shortFilm, setShortFilm] = useState(false);
  const [displayedMovies, setDisplayedMovies] = useState([]);

  const filterShortFilms = (movies, isShort) => {
    return isShort ? movies.filter(movie => movie.duration <= 41) : movies;
  };
  const handleSearch = query => {
    const filteredByQuery = savedMovies.filter(movie => {
      return (
        movie.nameRU.toLowerCase().includes(query.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(query.toLowerCase())
      );
    });
    const filteredMovies = filterShortFilms(filteredByQuery, shortFilm);
    setSearchResults(filteredByQuery);
    setDisplayedMovies(filteredMovies);
  };

  const handleShortFilmChange = checked => {
    setShortFilm(checked);
    setDisplayedMovies(filterShortFilms(searchResults, checked));
  };
  useEffect(() => {
    setDisplayedMovies(savedMovies);
  }, [savedMovies]);
  return (
    <main>
      <SearchForm
        onSearch={handleSearch}
        onCheckboxChange={handleShortFilmChange}
        isShortFilm={shortFilm}
      />
      {displayedMovies.length === 0 && <p className="movies__not">Ничего не найдено</p>}
      {displayedMovies.length > 0 && (
        <MoviesCardList movies={displayedMovies} savedMovies={savedMovies} onDelete={onDelete} />
      )}
    </main>
  );
}

export default SavedMovies;
