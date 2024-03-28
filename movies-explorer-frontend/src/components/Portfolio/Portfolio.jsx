import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__links">
        <li className="portfolio__info">
          <a
            href="https://rde161rus.github.io/how-to-learn/"
            className="portfolio__link"
            target="_blank"
            rel="noreferrer"
          >
            Статичный сайт
            <span className="portfolio__arrow">&#129109;</span>
          </a>
        </li>
        <li className="portfolio__info">
          <a
            href="https://rde161rus.github.io/yet-another-project/"
            className="portfolio__link"
            target="_blank"
            rel="noreferrer"
          >
            Адаптивный сайт
            <span className="portfolio__arrow">&#129109;</span>
          </a>
        </li>
        <li className="portfolio__info">
          <a
            href="https://rde161rus.github.io/mesto/"
            className="portfolio__link"
            target="_blank"
            rel="noreferrer"
          >
            Одностраничное приложение
            <span className="portfolio__arrow">&#129109;</span>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
