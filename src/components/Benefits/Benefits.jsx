import React from "react";

import quality from "../../img/quality.svg";
import speed from "../../img/speed.svg";
import responsibility from "../../img/hand.svg";

import styles from "./Benefits.module.scss";

const Benefits = () => {
  return (
    <section className={styles.root}>
      <h2>Что для нас важно</h2>
      <div className={styles.benefitsList}>
        <div className={styles.benefitsBlock}>
          <img src={quality} alt="quality" />
          <h3>Качество</h3>
          <p>
            Наши профессионалы работают на лучшем оборудовании для пошива одежды
            беспрецедентного качества
          </p>
        </div>
        <div className={styles.benefitsBlock}>
          <img src={speed} alt="speed" />
          <h3>Скорость</h3>
          <p>
            Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти
            единиц продукции в наших собственных цехах
          </p>
        </div>
        <div className={styles.benefitsBlock}>
          <img src={responsibility} alt="responsibility" />
          <h3>Ответственность</h3>
          <p>
            Мы заботимся о людях и планете. Безотходное производство и
            комфортные условия труда - все это Womazing
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
