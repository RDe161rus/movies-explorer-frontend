import './Profile.css';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import Preloader from '../Preloader/Preloader';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import useFormValid from '../../hooks/useFormValid';
import Notification from '../Notification/Notification';

function Profile({ isLoggedIn, onLogout, onSubmit, successMessage, isSuccess }) {
  const currentUser = useContext(CurrentUserContext);
  const [isEdit, setIsEdit] = useState(false);
  const [message, setMessage] = useState(successMessage);
  const { values, handleChange, isValid, resetForm } = useFormValid();

  function handleEdit() {
    setIsEdit(true);
    setMessage('');
  }

  const isDataChanged = values.name !== currentUser.name || values.email !== currentUser.email;

  function handleSubmit(e) {
    e.preventDefault();
    if (isDataChanged && isValid) {
      onSubmit(values);
    }
  }
  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser, {}, true);
    }
  }, [currentUser, resetForm]);

  return (
    <main>
      <section className="profile">
        {!isLoggedIn ? (
          <Preloader />
        ) : (
          <div className="profile__content">
            <h2 className="profile__title">Привет, {currentUser.name}!</h2>
            <form className="profile__form" onSubmit={handleSubmit}>
              <fieldset className="profile__input-container">
                <label className="profile__input-name">Имя</label>
                <input
                  type="text"
                  name="name"
                  className="profile__input"
                  placeholder="Введите Имя"
                  minLength="2"
                  maxLength="40"
                  onChange={handleChange}
                  value={values.name || ''}
                  readOnly={!isEdit}
                  required
                />
              </fieldset>
              <fieldset className="profile__input-container">
                <label className="profile__input-name">E-mail</label>
                <input
                  type="email"
                  className="profile__input"
                  placeholder="Введите E-mail"
                  minLength="2"
                  maxLength="40"
                  onChange={handleChange}
                  value={values.email || ''}
                  readOnly={!isEdit}
                  required
                />
              </fieldset>
              <div className="profile__container-btn">
                <Notification message={message} isSuccess={isSuccess} />
                {isEdit ? (
                  <button
                    type="submit"
                    className="auth-form__btn"
                    disabled={!isValid || !isDataChanged}
                  >
                    Сохранить
                  </button>
                ) : (
                  <>
                    <button type="button" className="profile__btn-edit" onClick={handleEdit}>
                      Редактировать
                    </button>
                    <Link to="/" className="profile__btn-exit" onClick={onLogout}>
                      Выйти из аккаунта
                    </Link>
                  </>
                )}
              </div>
            </form>
          </div>
        )}
      </section>
    </main>
  );
}

export default Profile;
