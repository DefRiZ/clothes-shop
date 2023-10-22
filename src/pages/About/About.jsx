import React from "react";

import styles from "./About.module.scss";

import img1 from "../../img/about/about1.jpg";
import img2 from "../../img/about/about2.jpg";

import { Link } from "react-router-dom";

const About = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>О бренде</h2>
      <ul className={styles.breads}>
        <li className={styles.bread}>
          <Link to="/">Главная</Link>
        </li>
        <li className={styles.bread}>О бренде</li>
      </ul>
      <div className={styles.about}>
        <div className={styles.upper}>
          <img src={img1} alt="about" />
          <div className={styles.text}>
            <h3>Идея и женщина</h3>
            <p>
              Womazing была основана в 2010-ом и стала одной из самых успешных
              компаний нашей страны. Как и многие итальянские фирмы, Womazing
              остаётся семейной компанией, хотя ни один из членов семьи не
              является модельером.
            </p>
            <p>
              Мы действуем по успешной формуле, прибегая к услугам известных
              модельеров для создания своих коллекций. Этот метод был описан
              критиком моды Колином Макдауэллом как форма дизайнерского
              со-творчества, характерная для ряда итальянских prêt-a-porter
              компаний.
            </p>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.text}>
            <h3>Магия в деталях</h3>
            <p>
              Первый магазин Womazing был открыт в маленьком городке на севере
              страны в 2010-ом году. Первая коллекция состояла из двух пальто и
              костюма, которые были копиями парижских моделей.
            </p>
            <p>
              Несмотря на то, что по образованию основательница была адвокатом,
              ее семья всегда была тесно связана с шитьём (прабабушка
              основательницы шила одежду для женщин, а мать основала
              профессиональную школу кроя и шитья). Стремление производить
              одежду для масс несло в себе большие перспективы, особенно в то
              время, когда высокая мода по-прежнему доминировала, а рынка
              качественного prêt-a-porter попросту не существовало.
            </p>
          </div>
          <img src={img2} alt="about" />
        </div>
        <Link className={styles.button} to="/catalog">
          Перейти в магазин
        </Link>
      </div>
    </div>
  );
};

export default About;
