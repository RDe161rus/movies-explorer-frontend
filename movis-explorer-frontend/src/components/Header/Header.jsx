import logo from '../../images/HeaderLogo.svg';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="logo" />
      <nav className="header__nav">
        <p className="title">Регистрация</p>
        <button className="header__btn">Войти</button>
      </nav>
    </header>
  );
}

export default Header;
