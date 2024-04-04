import './AboutProject.css';

function AboutProject() {
  return (
    <main>
      <section className="about-project">
        <h2 className="about-project__title">О проекте</h2>
        <div className="about-project__block">
          <div>
            <h3 className="about-project__title-description">Дипломный проект включал 5 этапов</h3>
            <p className="about-project__subtitle">
              Составление плана, работу над бэкендом, вёрстку, добавление функциональности и
              финальные доработки.
            </p>
          </div>
          <div>
            <h3 className="about-project__title-description">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="about-project__subtitle">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы
              успешно защититься.
            </p>
          </div>
        </div>
        <ul className="about-project__block-time">
          <li className="about-project__backend">
            <h4 className="about-project__backend-time">1 неделя</h4>
            <p className="about-project__block-title">Back-end</p>
          </li>
          <li className="about-project__frontend">
            <h4 className="about-project__frontend-time">4 недели</h4>
            <p className="about-project__block-title">Front-end</p>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default AboutProject;
