import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header() {
  const location = useLocation().pathname;
  const isLanding = location === '/';
  return (
    <header className={`header ${isLanding ? 'header_color' : ''}`}>
      {/* <Link to="/" className="header__logo" alt="logo" />
      <nav className="header__nav">
        <Link to="signup" className="header__link">
          Регистрация
        </Link>
        <Link to="signin" className="header__link header__signin">
          Войти
        </Link>
      </nav> */}
      <Link to="/" className="header__logo" alt="logo" />
      {/* <nav className="header__nav">
        <Link to="movies" className="header__link">
          Фильмы
        </Link>
        <Link to="saved-movies" className="header__link">
          Сохранённые фильмы
        </Link>
        <Link to="profile" className="header__profile">
          <p className="header__link">Аккаунт</p>
          <div className="header__prof-img"></div>
        </Link>
      </nav> */}
      <Navigation />
      <button className="header__btn-burger"></button>
    </header>
  );
}

export default Header;
