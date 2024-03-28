import { Link, useLocation } from 'react-router-dom';
import './AuthForm.css';

function AuthForm() {
  const location = useLocation().pathname;
  const isRegister = location === '/signup';
  return (
    <section className="authForm">
      <div className="authForm__content">
        <Link to="/" className="authForm__logo"></Link>
        <h2 className="authForm__title">{isRegister ? 'Добро пожаловать!' : 'Рады видеть!'}</h2>

        <form className="authForm__form" autocomplete="off" novalidate>
          {isRegister && (
            <fieldset className="authForm__input-container">
              <label className="authForm__input-title">Имя</label>
              <input
                type="text"
                className="authForm__input"
                placeholder="Введите имя"
                name="name"
                minLength="2"
                maxLength="40"
                required
              />
              <span className="auth__input-error"></span>
            </fieldset>
          )}
          <fieldset className="authForm__input-container">
            <label className="authForm__input-title">E-mail</label>
            <input
              type="email"
              className="authForm__input"
              placeholder="Введите почту"
              name="email"
              minLength="2"
              maxLength="40"
              required
            />
            <span className="auth__input-error"></span>
          </fieldset>
          <fieldset className="authForm__input-container">
            <label className="authForm__input-title">Пароль</label>
            <input
              type="password"
              className="authForm__input"
              placeholder="Введите пароль"
              name="password"
              minLength="6"
              maxLength="40"
              required
            />
            <span className="auth__input-error">Что-то пошло не так...</span>
          </fieldset>
        </form>

        <button type="submit" className="authForm__btn">
          {isRegister ? 'Зарегистрироваться' : 'Войти'}
        </button>

        <div className="authForm__reg-log">
          <p className="authForm__text">
            {isRegister ? 'Уже зарегистрированы?' : 'Еще не зарегистрированы? '}
          </p>
          {isRegister ? (
            <Link to="/signin" className="authForm__link">
              Войти
            </Link>
          ) : (
            <Link to="/signup" className="authForm__link">
              Регистрация
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export default AuthForm;
