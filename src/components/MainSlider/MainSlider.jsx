import React from "react";

import styles from "./MainSlider.module.scss";

import main from "../../img/MainSlider/main.jpg";
import second from "../../img/MainSlider/second.jpg";
import third from "../../img/MainSlider/third.jpg";
import activeRec from "../../img/MainSlider/active.svg";
import rectangle from "../../img/slider/rectangle.svg";

import { Link } from "react-router-dom";

const textList = [
  {
    title: "Новые поступления в этом сезоне",
    text: "Утонченные сочетания и бархатные оттенки - вот то, что вы искали вэтом сезоне. Время исследовать.",
  },
  {
    title: "Что-то новенькое. Мы заждались тебя.",
    text: "Надоело искать себя в сером городе? Настало время новых идей, свежих красок и вдохновения с Womazing!",
  },
  {
    title: "Включай новый сезон с WOMAZING",
    text: "Мы обновили ассортимент - легендарные коллекции и новинки от отечественных дизайнеров",
  },
];

const MainSlider = () => {
  const [slide, setSlide] = React.useState(0);
  const onClickScroll = () => {
    window.scrollTo({
      top: 940,
      behavior: "smooth",
    });
  };
  return (
    <div className={styles.root}>
      <div className={styles.info}>
        {slide === 0 && (
          <h2 className={styles.title}>{textList[slide].title}</h2>
        )}
        {slide === 0 && <p className={styles.about}>{textList[slide].text}</p>}
        {slide === 1 && (
          <h2 className={styles.title}>{textList[slide].title}</h2>
        )}
        {slide === 1 && <p className={styles.about}>{textList[slide].text}</p>}
        {slide === 2 && (
          <h2 className={styles.title}>{textList[slide].title}</h2>
        )}
        {slide === 2 && <p className={styles.about}>{textList[slide].text}</p>}
        <div className={styles.buttonSection}>
          <button onClick={() => onClickScroll()} className={styles.arrow}>
            <svg
              width="16"
              height="29"
              viewBox="0 0 16 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 0V28M8 28L1 20.8108M8 28L15 20.8108"
                stroke="#6E9C9F"
              />
            </svg>
          </button>
          <Link to="/catalog" className={styles.button}>
            <button>Открыть магазин</button>
          </Link>
        </div>
        <div className={styles.rectangleBlock}>
          {textList.map((_, index) => (
            <div
              className={styles.rectangle}
              key={index}
              onClick={() => setSlide(index)}
            >
              {slide === index && <img src={activeRec} alt="active" />}
              {slide !== index && <img src={rectangle} alt="non-active" />}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.gallery}>
        <img src={main} alt="main" />
        <img src={second} alt="second" />
        <img src={third} alt="third" />
        {/* <div className={styles.bg}></div> */}
      </div>
    </div>
  );
};

export default MainSlider;
