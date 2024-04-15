import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import './MoviesCardList.css';

function MoviesCardList({
  searchResults,
  savedMovies,
  onSave,
  movies,
  onDelete,
  isLoading,
  handleLoadMore
}) {
  function isMovieSaved(savedMovies, movie) {
    return savedMovies.some(savedMovie => savedMovie.movieId === String(movie.id));
  }
  return (
    <section className="cards">
      <ul className="cards__list">
        {isLoading ? (
          <Preloader />
        ) : (
          movies.map(movie => (
            <MoviesCard
              key={movie.id || movie._id}
              movie={movie}
              saved={isMovieSaved(savedMovies, movie)}
              onSave={onSave}
              onDelete={onDelete}
            />
          ))
        )}
      </ul>
      {!isLoading && searchResults.length > movies.length ? (
        <button type="submit" className="cards__more-btn" onClick={handleLoadMore}>
          еще
        </button>
      ) : null}
    </section>
  );
}

export default MoviesCardList;
