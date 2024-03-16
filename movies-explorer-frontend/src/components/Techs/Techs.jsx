import './Techs.css';

function Techs() {
  return (
    <section className="techs">
      <h2 className="techs__title">Технологии</h2>
      <h3 className="techs__subtitle">7 технологий</h3>
      <p className="techs__text">
        На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
      </p>
      <ul className="techs__programs">
        <li className="techs__program">HTML</li>
        <li className="techs__program">CSS</li>
        <li className="techs__program">JS</li>
        <li className="techs__program">React</li>
        <li className="techs__program">Git</li>
        <li className="techs__program">Express.js</li>
        <li className="techs__program">mongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;
