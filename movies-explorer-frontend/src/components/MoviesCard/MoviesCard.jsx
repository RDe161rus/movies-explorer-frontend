import './MoviesCard.css';
import movieCard from '../../images/movie.png';

function MoviesCard() {
  return (
    <li className="card">
      <div className="name-time">
        <p className="movie-title">В погоне за Бенкси</p>
        <span className="movie-time">0ч 42м</span>
      </div>
      <img src={movieCard} alt="Обложка фильма" className="movie__img" />
      <button className="movie__save">Сохранить</button>
    </li>
  );
}

export default MoviesCard;
