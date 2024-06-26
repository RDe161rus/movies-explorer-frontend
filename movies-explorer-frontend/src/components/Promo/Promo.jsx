import './Promo.css';

function Promo() {
  return (
    <main>
      <section className="promo">
        <div className="promo__content">
          <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
          <p className="promo__text">
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
          <a
            href="https://practicum.yandex.ru/frontend-developer/?from=catalog"
            className="promo__link"
            target="_blank"
            rel="noreferrer"
          >
            Узнать больше
          </a>
        </div>
        <div className="promo__landing"></div>
      </section>
    </main>
  );
}

export default Promo;
