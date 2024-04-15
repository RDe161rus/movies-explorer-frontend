import './AuthForm.css';
import { Link, useLocation } from 'react-router-dom';
import Notification from '../Notification/Notification';
import useFormValid from '../../hooks/useFormValid';

function AuthForm({ onRegister, error, resetErr, onLogin }) {
  const location = useLocation().pathname;
  const isRegister = location === '/signup';

  const { values, messages, isValid, handleChange, resetForm } = useFormValid();

  function handleSubmit(e) {
    e.preventDefault();
    if (isRegister) {
      onRegister(values);
    } else {
      onLogin(values);
    }
  }

  function handleLinkClick() {
    resetForm();
    resetErr();
  }
  return (
    <main>
      <section className="auth-form">
        <div className="auth-form__content">
          <Link to="/" className="auth-form__logo"></Link>
          <h2 className="auth-form__title">{isRegister ? 'Добро пожаловать!' : 'Рады видеть!'}</h2>

          <form className="auth-form__form">
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
                  onChange={handleChange}
                  value={values.name || ''}
                  required
                />
                <span className="auth__input-error">{messages.name}</span>
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
                onChange={handleChange}
                value={values.email || ''}
                required
              />
              <span className="auth__input-error">{messages.email}</span>
              <label className="auth-form__input-title">Пароль</label>
              <input
                required
                type="password"
                className="auth-form__input"
                placeholder="Введите пароль"
                name="password"
                minLength="6"
                maxLength="40"
                onChange={handleChange}
                value={values.password || ''}
              />
              <span className="auth__input-error">{messages.password}</span>
            </fieldset>
            <div className="auth__container-btn">
              <Notification message={error} isSuccess={false} />
              <button
                type="submit"
                className="auth-form__btn"
                onClick={handleSubmit}
                disabled={!isValid}
              >
                {isRegister ? 'Зарегистрироваться' : 'Войти'}
              </button>
              <div className="auth-form__reg-log">
                <p className="auth-form__text">
                  {isRegister ? 'Уже зарегистрированы?' : 'Еще не зарегистрированы? '}
                </p>
                {isRegister ? (
                  <Link to="/signin" className="auth-form__link" onClick={handleLinkClick}>
                    Войти
                  </Link>
                ) : (
                  <Link to="/signup" className="auth-form__link" onClick={handleLinkClick}>
                    Регистрация
                  </Link>
                )}
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default AuthForm;
