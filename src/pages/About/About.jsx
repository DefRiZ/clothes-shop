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
      <h2 className={styles.title}>Про бренд</h2>
      <ul className={styles.breads}>
        <li className={styles.bread}>
          <Link to="/">Головна</Link>
        </li>
        <li className={styles.bread}>Про бренд</li>
      </ul>
      <div className={styles.about}>
        <div className={styles.upper}>
          <img src={img1} alt="about" />
          <div className={styles.text}>
            <h3>Ідея та жінка</h3>
            <p>
              Womazing була заснована у 2010-му і стала однією з найуспішніших
              компаній нашої країни. Як і багато італійських фірм, Womazing
              залишається сімейною компанією, хоча жоден із членів сім'ї не є
              модельєром.
            </p>
            <p>
              Ми діємо за успішною формулою, вдаючись до послуг відомих
              модельєрів для створення колекцій. Цей метод був описаний критиком
              моди Коліном Макдавеллом як форма дизайнерської співтворчості,
              характерна для низки італійських prêt-a-porter компаній.
            </p>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.text}>
            <h3>Магія в деталях</h3>
            <p>
              Перший магазин Womazing був відкритий у маленькому містечку на
              півночі країни у 2010 році. Перша колекція складалася з двох пальт
              та костюма, які були копіями паризьких моделей.
            </p>
            <p>
              Незважаючи на те, що за освітою засновниця була адвокатом, її
              сім'я завжди була тісно пов'язана з шиттям (прабабуся засновниці
              шила одяг для жінок, а мати заснувала професійну школу крою та
              шиття). Прагнення виробляти одяг для мас несло великі перспективи,
              особливо в той час, коли висока мода, як і раніше, домінувала, а
              ринку якісного prêt-a-porter просто не існувало.
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
