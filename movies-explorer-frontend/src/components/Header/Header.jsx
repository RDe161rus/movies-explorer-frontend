import { Link } from 'react-router-dom';
import './Header.css';

import { NavLink, useLocation } from 'react-router-dom';

function Header({ isLoggedIn }) {
  return (
    <>
      {/*  <header className="header">
        <Link to="/" className="header__logo" alt="logo" />
        <nav className="header__nav">
          <Link to="signup" className="header__link">
            Регистрация
          </Link>
          <Link to="signin" className="header__link header__signin">
            Войти
          </Link>
        </nav>
      </header> */}

      {/* <header className="header">
        <Link to="/" className="header__logo" alt="logo" />
        <nav className="header__nav">
          <Link to="movies" className="header__link">
            Фильмы
          </Link>
          <Link to="signin" className="header__link">
            Сохранённые фильмы
          </Link>
          <Link to="profile" className="header__profile">
            <p className="header__link">Аккаунт</p>
            <div className="header__prof-img"></div>
          </Link>
        </nav>
      </header> */}
    </>
  );
}

export default Header;
