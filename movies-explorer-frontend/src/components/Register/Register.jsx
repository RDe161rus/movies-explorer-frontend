import { Link } from 'react-router-dom';
import './Register.css';

function Register() {
  return (
    <section className="register">
      <div className="content">
        <Link to="/" className="register__logo"></Link>
        <h2 className="register__greetings">Добро пожаловать!</h2>

        <form className="form">
          <span className="form__span">Имя</span>
          <input className="form__input" type="text" required />
          <span className="form__span">E-mail</span>
          <input className="form__input" type="email" required />
          <span className="form__span">Пароль</span>
          <input className="form__input" type="password" required />
        </form>

        <button className="register__btn">Зарегистрироваться</button>
        <div className="register__signup">
          <span className="register__subtitle">Уже зарегистрированы?</span>
          <Link to="/signin" className="register__link">
            Войти
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Register;
