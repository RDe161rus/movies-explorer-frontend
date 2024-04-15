import './MoviesCard.css';
import { useLocation, Link } from 'react-router-dom';

function MoviesCard({ movie, saved, onSave, onDelete }) {
  const location = useLocation();

  function formatDuration(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    const formattedHours = hours > 0 ? `${hours}ч` : '';
    const formattedMinutes = remainingMinutes > 0 ? `${remainingMinutes}м` : '';
    return `${formattedHours} ${formattedMinutes}`;
  }

  function handleSaveClick() {
    onSave(movie);
  }
  function handleDeleteClick() {
    onDelete(movie);
  }
  return (
    <li className="card">
      <div className="card__name-time">
        <p className="card-title">{movie.nameRU || movie.nameEN}</p>
        <span className="card-time">{formatDuration}</span>
      </div>
      <Link to={movie.trailerLink} target="_blanck">
        <img src={movie.image} alt={movie.image.alternativeText} className="card__img" />
      </Link>
      {location.pathname === '/movies' && (
        <button
          className="card__btn-save"
          onClick={saved ? handleDeleteClick : handleSaveClick}
          type="submit"
        ></button>
      )}
      {location.pathname === '/saved-movies' && (
        <button className="card__btn-save" onClick={handleDeleteClick} type="submit"></button>
      )}
    </li>
  );
}

export default MoviesCard;
