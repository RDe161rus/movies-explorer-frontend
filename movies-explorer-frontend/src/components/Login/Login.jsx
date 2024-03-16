import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  return (
    <section className="register">
      <div className="content">
        <Link to="/" className="register__logo"></Link>
        <h2 className="register__greetings">Рады видеть!</h2>

        <form className="form">
          <span className="form__span">E-mail</span>
          <input className="form__input" type="email" required />
          <span className="form__span">Password</span>
          <input className="form__input" type="password" required />
        </form>

        <button className="register__btn">Войти</button>
        <div className="register__signup">
          <span className="register__subtitle">Ещё не зарегистрированы?</span>
          <Link to="/signup" className="register__link">
            Регистрация
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Login;
