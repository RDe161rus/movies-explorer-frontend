import { Link } from 'react-router-dom';
import './Profile.css';

function Profile() {
  return (
    <section className="profile">
      <div className="profile__content">
        <h2 className="profile__title">Привет, Виталий!</h2>

        <form className="profile__form">
          <fieldset className="profile__input-container">
            <label className="profile__input-name">Имя</label>
            <input
              type="text"
              minLength="2"
              maxLength="40"
              className="profile__input"
              defaultValue="Виталий"
              placeholder="Введите Имя"
            />
          </fieldset>
          <fieldset className="profile__input-container">
            <label className="profile__input-name">E-mail</label>
            <input
              type="email"
              className="profile__input"
              defaultValue="pochta@yandex.ru"
              placeholder="Введите E-mail"
              required
            />
          </fieldset>
        </form>
        <button type="button" className="profile__btn-edit">
          Редактировать
        </button>
        <Link to="/" className="profile__btn-exit">
          Выйти из аккаунта
        </Link>
      </div>
    </section>
  );
}

export default Profile;
