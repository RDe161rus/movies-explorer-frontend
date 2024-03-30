import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</div>
      <div className="footer__info">
        <span className="footer__time">&copy; {new Date().getFullYear()}. Денис Растрепин</span>
        <div className="footer__links">
          <a
            href="https://practicum.yandex.ru"
            className="footer__link"
            target="_blank"
            rel="noreferrer"
          >
            Яндекс.Практикум
          </a>
          <a href="https://github.com/" className="footer__link" target="_blank" rel="noreferrer">
            Github
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
