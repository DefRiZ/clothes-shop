import React from "react";
import { Link } from "react-router-dom";

import styles from "./Slider.module.scss";
import SliderItem from "../SliderItem/SliderItem";

const Slider = () => {
  return (
    <section className={styles.root}>
      <h2>Команда мрії Womazing</h2>
      <div className={styles.sliderBlock}>
        <div className={styles.imageSection}>
          <SliderItem />
        </div>

        <div className={styles.infoSection}>
          <h3>Для кожної</h3>
          <p className={styles.firstParagraph}>
            Кожна дівчина є унікальною. Однак, ми схожі в мільйонах дрібниць.
          </p>
          <p className={styles.secondParagraph}>
            Womazing шукає ці дрібниці та створює чудові речі, які вигідно
            підкреслюють переваги кожної дівчини.
          </p>
          <Link to="/about">Детальніше про бренд</Link>
        </div>
      </div>
    </section>
  );
};

export default Slider;
