import './Promo.css';

function Promo() {
  return(
    <div className="promo">
      <div className="promo__content">
        <h1 className="promo__title">Учебный проект студента факультета <br /> Веб-разработки.</h1>
        <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <button className='promo__btn'>Узнать больше</button>
      </div>
      <div className="promo__landing"></div>
    </div>
  )
}

export default Promo;