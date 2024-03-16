import { Link } from 'react-router-dom';
import './Profile.css';

function Profile() {
  return (
    <section className="profile">
      <div className="profile__content">
        <h2 className="profile__greetings">Привет, Виталий!</h2>

        <form className="profile__form">
          <div className="profile__name">
            <span className="profile__span">Имя</span>
            <input className="profile__input" type="text" />
          </div>
          <div className="profile__name">
            <span className="profile__span">E-mail</span>
            <input className="profile__input" type="text" />
          </div>
        </form>

        <button className="profile__btn-edit">Редактировать</button>
        <Link to="/" className="profile__btn-exit">
          Выйти из аккаунта
        </Link>
      </div>
    </section>
  );
}

export default Profile;
