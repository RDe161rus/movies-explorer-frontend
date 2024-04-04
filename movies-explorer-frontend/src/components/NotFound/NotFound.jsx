import './NotFound.css';
import { Link, useNavigate } from 'react-router-dom';
function NotFound() {
  const navigate = useNavigate();
  console.log(navigate);
  return (
    <main>
      <section className="not-found">
        <h2 className="not-found__title">404</h2>
        <p className="not-found__subtitle">Страница не найдена</p>
        <Link to="*" className="not-found__exit" onClick={() => navigate(-1)}>
          Назад
        </Link>
      </section>
    </main>
  );
}

export default NotFound;
