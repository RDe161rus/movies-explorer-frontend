import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const closeNav = () => document.querySelector('.navigation').classList.remove('navigation__open');
  return (
    <div className="navigation">
      <nav className="navigation__menu">
        <button className="navigation__btn-exit" onClick={closeNav}></button>
        <ul className="navigation__list">
          <li className="navigation__item">
            <NavLink to="/" className="navigation__link" onClick={closeNav}>
              Главная
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink to="/movies" className="navigation__link" onClick={closeNav}>
              Фильмы
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink to="/saved-movies" className="navigation__link" onClick={closeNav}>
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>
        <NavLink
          to="/profile"
          className="navigation__link navigation__link_profile"
          onClick={closeNav}
        >
          <span>Аккаунт</span>
          <div className="header__prof-img"></div>
        </NavLink>
      </nav>
    </div>
  );
}

export default Navigation;
