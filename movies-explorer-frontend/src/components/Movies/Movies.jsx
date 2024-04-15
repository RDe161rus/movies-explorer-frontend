import './Movies.css';
import { useEffect, useState } from 'react';
import { moviesApi } from '../../utils/MoviesApi.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';

function Movies({ savedMovies, onSave, onDelete, saveToLocalStorage }) {
  const [searchResults, setSearchResults] = useState([]);
  const [shortFilm, setShortFilm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [displayedMovies, setDisplayedMovies] = useState([]);
  const [visibleMoviesCount, setVisibleMoviesCount] = useState(0);

  const getFromLocalStorage = key => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : null;
  };

  const storedQuery = getFromLocalStorage('searchQuery');
  const storedShortFilm = getFromLocalStorage('shortFilm');
  const storedMovies = getFromLocalStorage('searchResults');
  const storedVisibleMoviesCount = getFromLocalStorage('visibleMoviesCount');

  const handleSearch = async query => {
    try {
      setLoading(true);
      const allMovies = await moviesApi.getItem();
      const finishedMovie = transformMovies(allMovies);
      const filteredMovies = finishedMovie.filter(movie => {
        return (
          movie.nameRU.toLowerCase().includes(query.toLowerCase()) ||
          movie.nameEN.toLowerCase().includes(query.toLowerCase())
        );
      });

      const finalMovies = filterShortFilms(filteredMovies, shortFilm);
      setSearchResults(filteredMovies);
      setDisplayedMovies(finalMovies.slice(0, visibleMoviesCount));
      setLoading(false);
      saveToLocalStorage('searchQuery', query);
      saveToLocalStorage('shortFilm', shortFilm);
      saveToLocalStorage('searchResults', filteredMovies);
      saveToLocalStorage('visibleMoviesCount', visibleMoviesCount);
    } catch (err) {
      setLoading(false);
    }
  };
  const filterShortFilms = (movies, isShort) => {
    return isShort ? movies.filter(movie => movie.duration <= 41) : movies;
  };
  function transformMovies(movies) {
    return movies.map(movie => {
      const transformedMovie = { ...movie };

      transformedMovie.image = movie.image
        ? `https://api.nomoreparties.co/${movie.image.url}`
        : 'https://plus.unsplash.com/premium_photo-1682125771198-f7cbed7cb868?q=80&w=2920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

      transformedMovie.thumbnail = movie.thumbnail
        ? `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`
        : 'https://plus.unsplash.com/premium_photo-1682125771198-f7cbed7cb868?q=80&w=2920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

      transformedMovie.country = movie.country || 'Country';
      transformedMovie.nameEN = movie.nameEN || movie.nameRU;

      return transformedMovie;
    });
  }

  const handleShortFilmChange = checked => {
    setShortFilm(checked);
    setDisplayedMovies(filterShortFilms(searchResults, checked));
  };

  const handleLoadMore = () => {
    setDisplayedMovies(prevMovies => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1280) {
        const newVisibleCount = prevMovies.length + 3;
        return searchResults.slice(0, newVisibleCount);
      } else if (screenWidth >= 786) {
        const newVisibleCount = prevMovies.length + 2;
        return searchResults.slice(0, newVisibleCount);
      } else if (screenWidth >= 320 && screenWidth <= 480) {
        const newVisibleCount = prevMovies.length + 2;
        return searchResults.slice(0, newVisibleCount);
      }
    });
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1280) {
        setVisibleMoviesCount(12);
      } else if (screenWidth >= 786) {
        setVisibleMoviesCount(8);
      } else if (screenWidth >= 320 && screenWidth <= 480) {
        setVisibleMoviesCount(4);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (storedMovies) {
      setSearchResults(storedMovies);
      setDisplayedMovies(storedMovies.slice(0, storedVisibleMoviesCount));
      setShortFilm(storedShortFilm);
    }
  }, []);

  return (
    <main>
      <SearchForm
        onSearch={handleSearch}
        storedQuery={storedQuery}
        onCheckboxChange={handleShortFilmChange}
        isShortFilm={shortFilm}
      />
      {displayedMovies.length === 0 && <p className="movies__not">Ничего не найдено</p>}
      {displayedMovies.length > 0 && (
        <MoviesCardList
          savedMovies={savedMovies}
          onSave={onSave}
          movies={displayedMovies}
          onDelete={onDelete}
          isLoading={loading}
          handleLoadMore={handleLoadMore}
          searchResults={searchResults}
        />
      )}
    </main>
  );
}

export default Movies;
