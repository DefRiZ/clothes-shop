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
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <nav>
            <ul className={styles.nav}>
              <li>
                <Link to="/">Головна</Link>
              </li>
              <li>
                <Link to="/catalog">Магазин</Link>
              </li>
              <li>
                <Link to="/about">Про бренд</Link>
              </li>
              <li>
                <Link to="#">Контакти</Link>
              </li>
            </ul>
          </nav>
          <div className={styles.contacts}>
            <a href="tel:+380000000000" className={styles.phone}>
              +380000000000
            </a>
            <a href="*" className={styles.mail}>
              hello@womazing.com
            </a>
          </div>
        </div>
        <div className={styles.bottomSection}>
          <div className={styles.license}>
            <span>© Всі права захищені</span>
            <span>Політика конфіденційності</span>
            <span>Публічна оферта</span>
          </div>
          <div className={styles.social}>
            <div className={styles.links}>
              <a href="*">
                <img src={inst} alt="insta" />
              </a>
              <a href="*">
                <img src={facebook} alt="facebook" />
              </a>
              <a href="*">
                <img src={twit} alt="twit" />
              </a>
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
