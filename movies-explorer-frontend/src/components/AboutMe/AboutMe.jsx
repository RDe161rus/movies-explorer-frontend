import './AboutMe.css';
import myFoto from '../../images/Me.jpg';
function AboutMe() {
  return (
    <main>
      <section className="about-me">
        <h2 className="about-me__title">Студент</h2>
        <div className="about-me__block">
          <div className="about-me__info">
            <h3 className="about-me__name">Денис</h3>
            <p className="about-me__profession">Фронтенд-разработчик, 31 год</p>
            <p className="about-me__biography">
              Я живу в Москве, закончил Таганрогский институт имени А.П. Чехова. У меня есть жена и
              сын. Увлекаюсь мини-футболом. Недавно начал кодить. После того, как прошёл курс по
              веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <a
              href="https://github.com/RDe161rus"
              className="about-me__link"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
          <img className="about-me__img" src={myFoto} alt="Моё фото" />
        </div>
      </section>
    </main>
  );
}

export default AboutMe;
