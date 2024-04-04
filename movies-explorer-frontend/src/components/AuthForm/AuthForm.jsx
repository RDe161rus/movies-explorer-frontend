import { Link, useLocation } from 'react-router-dom';
import './AuthForm.css';

function AuthForm() {
  const location = useLocation().pathname;
  const isRegister = location === '/signup';
  return (
    <main>
      <section className="auth-form">
        <div className="auth-form__content">
          <Link to="/" className="auth-form__logo"></Link>
          <h2 className="auth-form__title">{isRegister ? 'Добро пожаловать!' : 'Рады видеть!'}</h2>

          <form className="auth-form__form" autoComplete="off">
            {isRegister && (
              <fieldset className="auth-form__input-container">
                <label className="auth-form__input-title">Имя</label>
                <input
                  type="text"
                  className="auth-form__input"
                  placeholder="Введите имя"
                  name="name"
                  minLength="2"
                  maxLength="40"
                  required
                />
                <span className="auth__input-error"></span>
              </fieldset>
            )}
            <fieldset className="auth-form__input-container">
              <label className="auth-form__input-title">E-mail</label>
              <input
                type="email"
                className="auth-form__input"
                placeholder="Введите Email"
                name="email"
                minLength="2"
                maxLength="40"
                required
              />
              <span className="auth__input-error"></span>
              <label className="auth-form__input-title">Пароль</label>
              <input
                required
                type="password"
                className="auth-form__input"
                placeholder="Введите пароль"
                name="password"
                minLength="6"
                maxLength="40"
              />
              <span className="auth__input-error"></span>
            </fieldset>
            <button type="submit" className="auth-form__btn">
              {isRegister ? 'Зарегистрироваться' : 'Войти'}
            </button>
          </form>

          <div className="auth-form__reg-log">
            <p className="auth-form__text">
              {isRegister ? 'Уже зарегистрированы?' : 'Еще не зарегистрированы? '}
            </p>
            {isRegister ? (
              <Link to="/signin" className="auth-form__link">
                Войти
              </Link>
            ) : (
              <Link to="/signup" className="auth-form__link">
                Регистрация
              </Link>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default AuthForm;
