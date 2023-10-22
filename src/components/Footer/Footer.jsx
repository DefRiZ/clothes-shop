import React from "react";

import styles from "./Footer.module.scss";

import logo from "../../img/logo.svg";
import inst from "../../img/social/instagram.svg";
import facebook from "../../img/social/facebook.svg";
import twit from "../../img/social/twitter.svg";
import cards from "../../img/social/visa-mastercard.png";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrap}>
        <div className={styles.topSection}>
          <div className={styles.logoSection}>
            <img src={logo} alt="logo" />
          </div>
          <nav>
            <ul className={styles.nav}>
              <li>
                <Link to="/">Главная</Link>
              </li>
              <li>
                <Link to="/catalog">Магазин</Link>
              </li>
              <li>
                <Link to="/about">О бренде</Link>
              </li>
              <li>
                <Link to="#">Контакты</Link>
              </li>
            </ul>
          </nav>
          <div className={styles.contacts}>
            <p className={styles.phone}>+7 (495) 823-54-12</p>
            <p className={styles.mail}>hello@womazing.com</p>
          </div>
        </div>
        <div className={styles.bottomSection}>
          <div className={styles.license}>
            <span>© Все права защищены</span>
            <span>Политика конфиденциальности</span>
            <span>Публичная оферта</span>
          </div>
          <div className={styles.social}>
            <div className={styles.links}>
              <img src={inst} alt="insta" />
              <img src={facebook} alt="facebook" />
              <img src={twit} alt="twit" />
            </div>
            <div className={styles.cards}>
              <img src={cards} alt="cards" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
