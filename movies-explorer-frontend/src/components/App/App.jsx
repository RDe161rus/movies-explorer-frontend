import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SearchForm from '../SearchForm/SearchForm';
import AuthForm from '../AuthForm/AuthForm';

function App() {
  const location = useLocation();
  const headerLocation = ['/', '/movies', '/saved-movies', '/profile'];
  const footerLocation = ['/', '/movies', '/saved-movies'];
  const isHeaderLocation = headerLocation.includes(location.pathname);
  const isFooterLocation = footerLocation.includes(location.pathname);
  return (
    <div className="page">
      {isHeaderLocation && <Header />}
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/signup" element={<AuthForm />} />
        <Route path="/signin" element={<AuthForm />} />
        <Route path="/signup" element={<AuthForm />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SearchForm />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {isFooterLocation && <Footer />}
    </div>
  );
}

export default App;
