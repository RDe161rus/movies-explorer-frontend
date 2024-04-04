import './MoviesCard.css';
import movieCard from '../../images/movie.png';

function MoviesCard() {
  return (
    <li className="card">
      <div className="card__name-time">
        <p className="card-title">В погоне за Бенкси</p>
        <span className="card-time">0ч 42м</span>
      </div>
      <img src={movieCard} alt="Обложка фильма" className="card__img" />
      <button className="card__btn-save"></button>
    </li>
  );
}

export default MoviesCard;
