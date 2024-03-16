import './NotFound.css';
import { Link, useNavigate } from 'react-router-dom';
function NotFound() {
  const navigate = useNavigate();
  console.log(navigate);
  return (
    <section className="notfound">
      <h2 className="notfound__title">404</h2>
      <p className="notfound__subtitle">Страница не найдена</p>
      <Link to="*" className="notfound__exit" onClick={() => navigate(-1)}>
        Назад
      </Link>
    </section>
  );
}

export default NotFound;
