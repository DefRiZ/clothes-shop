import React from "react";

import styles from "./Benefits.module.scss";

import quality from "../../img/quality.svg";
import speed from "../../img/speed.svg";
import responsibility from "../../img/hand.svg";

const Benefits = () => {
  return (
    <section className={styles.root}>
      <h2>Що для нас важливо</h2>
      <div className={styles.benefitsList}>
        <div className={styles.benefitsBlock}>
          <div className={styles.imgBlock}>
            <img src={quality} alt="quality" />
          </div>
          <h3>Якість</h3>
          <p>
            Наші професіонали працюють на кращому обладнанні для пошиття одягу
            безпрецедентної якості
          </p>
        </div>
        <div className={styles.benefitsBlock}>
          <div className={styles.imgBlock}>
            <img src={speed} alt="speed" />
          </div>
          <h3>Швидкість</h3>
          <p>
            Завдяки налагодженій системі у Womazing ми можемо відшивати до 20-ти
            одиниць продукції у наших власних цехах.
          </p>
        </div>
        <div className={styles.benefitsBlock}>
          <div className={styles.imgBlock}>
            <img src={responsibility} alt="responsibility" />
          </div>
          <h3>Відповідальність</h3>
          <p>
            Ми дбаємо про людей та планету. Безвідходне виробництво та комфортні
            умови праці - все це Womazing
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
