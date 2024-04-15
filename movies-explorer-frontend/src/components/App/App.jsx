import './App.css';
import { useState, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import AuthForm from '../AuthForm/AuthForm';
import { mainApi } from '../../utils/MainApi.js';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import Preloader from '../Preloader/Preloader';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const headerLocation = ['/', '/movies', '/saved-movies', '/profile'];
  const footerLocation = ['/', '/movies', '/saved-movies'];
  const isHeaderLocation = headerLocation.includes(location.pathname);
  const isFooterLocation = footerLocation.includes(location.pathname);

  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isTokenChecked, setIsTokenChecked] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const resetErr = () => {
    setErr('');
  };

  const handleRegister = async ({ name, email, password }) => {
    try {
      setLoading(true);
      await mainApi.register({ name, email, password });
      handleLogin({ email, password });
    } catch (err) {
      setErr(err);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async dataLogin => {
    try {
      setLoading(true);
      const res = await mainApi.login(dataLogin);
      setCurrentUser(res);
      setIsLoggedIn(true);
      saveToLocalStorage('storedIsLoggedIn', true);
      navigate('/movies', { replace: true });
    } catch (err) {
      setErr(err);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const checkToken = async () => {
    try {
      setLoading(true);
      const res = await mainApi.getContent();
      if (res) {
        setIsLoggedIn(true);
        setCurrentUser(res);
      } else {
        setIsLoggedIn(false);
      }
    } catch (err) {
      console.error(err);
      setIsLoggedIn(false);
    } finally {
      setLoading(false);
      setIsTokenChecked(true);
    }
  };

  const handleLogout = async () => {
    try {
      setLoading(true);
      await mainApi.logout();
      setIsLoggedIn(false);
      setCurrentUser({});
      localStorage.clear();
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  const handleProfileEdit = async ({ name, email }) => {
    try {
      setLoading(true);
      const res = await mainApi.updateUser({ name, email });
      setCurrentUser(res);
      setSuccessMessage('Данные изменены');
      setIsSuccess(true);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setIsSuccess(false);
      setSuccessMessage(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    const resetStates = () => {
      setSuccessMessage('');
      setIsSuccess(false);
    };
    return () => resetStates();
  }, [location.pathname]);

  const handleSaveMovie = async movie => {
    try {
      const res = await mainApi.createMovies(movie);
      setSavedMovies([res, ...savedMovies]);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteMovie = async movie => {
    try {
      const savedMovie = savedMovies.find(
        item => item.id === movie._id || item.movieID === String(movie.id)
      );
      if (!savedMovie) {
        throw new Error('Фильм не найден для удаления');
      }
      const res = await mainApi.deleteMovie(savedMovie._id);
      if (res) {
        setSavedMovies(prevMovies => prevMovies.filter(item => item._id !== savedMovie._id));
      }
    } catch (err) {
      console.error(err);
    }
  };

  const getSavedMovies = async () => {
    try {
      if (isLoggedIn && currentUser) {
        const res = await mainApi.getMovies();
        const movieList = res.filter(movie => movie.owner === currentUser._id);
        setSavedMovies(movieList);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  useEffect(() => {
    getSavedMovies();
  }, [currentUser, isLoggedIn]);

  return (
    <>
      {loading || !isTokenChecked ? (
        <Preloader />
      ) : (
        <div className="page">
          <CurrentUserContext.Provider value={currentUser}>
            {isHeaderLocation && <Header isLoggedIn={isLoggedIn} />}
            <Routes>
              <Route path="/" element={<Main />} />

              <Route
                path="/signup"
                element={<AuthForm onRegister={handleRegister} error={err} resetErr={resetErr} />}
              />

              <Route
                path="/signin"
                element={<AuthForm onLogin={handleLogin} error={err} resetErr={resetErr} />}
              />

              <Route
                path="/movies"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Movies
                    saveToLocalStorage={saveToLocalStorage}
                    savedMovies={savedMovies}
                    onSave={handleSaveMovie}
                    onDelete={handleDeleteMovie}
                  />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/saved-movies"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <SavedMovies
                    savedMovies={savedMovies}
                    onDelete={handleDeleteMovie}
                  />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/profile"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Profile
                    onLogout={handleLogout}
                    onSubmit={handleProfileEdit}
                    successMessage={successMessage}
                    isSuccess={isSuccess}
                  />
                  </ProtectedRoute>
                }
              />

              <Route path="*" element={<NotFound />} />
            </Routes>
            {isFooterLocation && <Footer />}
          </CurrentUserContext.Provider>
        </div>
      )}
    </>
  );
}

export default App;
