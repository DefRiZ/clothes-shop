import React from "react";

import styles from "./Slider.module.scss";

import firstSlide from "../../img/slider/1-slide.jpg";
import secondSlide from "../../img/slider/2-slide.jpg";
import thirdSlide from "../../img/slider/3-slide.jpg";
import activeRec from "../../img/slider/active-rectangle.svg";
import rectangle from "../../img/slider/rectangle.svg";

import { Link } from "react-router-dom";

const slides = [firstSlide, secondSlide, thirdSlide];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentSlide === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentSlide - 1;
    setCurrentSlide(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentSlide === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentSlide + 1;
    setCurrentSlide(newIndex);
  };
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  return (
    <section className={styles.root}>
      <h2>Команда мрії Womazing</h2>
      <div className={styles.sliderBlock}>
        <div className={styles.imageSection}>
          <svg
            onClick={() => goToPrevious()}
            className={styles.leftArrow}
            width="29"
            height="16"
            viewBox="0 0 29 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29 8L0.999999 8M0.999999 8L8.18919 0.999999M0.999999 8L8.18919 15"
              stroke="#858585"
            />
          </svg>
          {currentSlide === 0 && <img src={firstSlide} alt="first" />}
          {currentSlide === 1 && <img src={secondSlide} alt="second" />}
          {currentSlide === 2 && <img src={thirdSlide} alt="third" />}
          <svg
            onClick={() => goToNext()}
            className={styles.rigthArrow}
            width="29"
            height="16"
            viewBox="0 0 29 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.34742e-08 8L28 8M28 8L20.8108 15M28 8L20.8108 1"
              stroke="black"
            />
          </svg>
          <div className={styles.rectangleBlock}>
            {slides.map((_, index) => (
              <div
                className={styles.rectangle}
                key={index}
                onClick={() => goToSlide(index)}
              >
                {currentSlide === index && <img src={activeRec} alt="active" />}
                {currentSlide !== index && (
                  <img src={rectangle} alt="non-active" />
                )}
              </div>
            ))}
          </div>
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
