import React from "react";

import logo from "../../img/logo.svg";
import cart from "../../img/shop-bag.svg";

import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setDrawer } from "../../store/slices/filterSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.root}>
      <div className={styles.logoDiv}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <nav>
        <ul className={styles.mainNav}>
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
            <a>Контакты</a>
          </li>
        </ul>
      </nav>
      <div className={styles.userMenu}>
        <svg
          className={styles.phone}
          onClick={() => dispatch(setDrawer())}
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_44649_237)">
            <path
              d="M2.25241 4.81643C0.750584 6.31823 0.750584 8.7618 2.25238 10.2636L3.05007 9.46592C1.98816 8.40402 1.98814 6.67613 3.0501 5.61417C4.11203 4.55224 5.83992 4.55224 6.90185 5.61414L7.69953 4.81646C6.19776 3.31463 3.75418 3.31466 2.25241 4.81643Z"
              fill="#6E9C9F"
            />
            <path
              d="M3.84127 6.39119C3.2091 7.02336 3.20907 8.05201 3.84124 8.68421L4.63895 7.88653C4.54578 7.79335 4.49446 7.66947 4.49446 7.53772C4.49446 7.40599 4.54581 7.2821 4.63898 7.18893C4.73215 7.09576 4.85603 7.04444 4.98776 7.04444C5.11952 7.04444 5.24343 7.09576 5.33658 7.18893L6.13426 6.39122C5.50209 5.75902 4.47344 5.75902 3.84127 6.39119Z"
              fill="#6E9C9F"
            />
            <path
              d="M13.7483 4.43513L11.8551 2.54848L7.92337 6.47367L9.44758 8.04781C9.19214 8.50125 8.6379 9.3699 7.69334 10.3145C6.74865 11.2592 5.87366 11.8197 5.41587 12.0792L3.87261 10.5556L0.0022583 14.4029L1.8851 16.2983C2.60485 17.0181 3.69998 17.2046 4.6102 16.7625C5.99921 16.0879 8.09546 14.8431 10.1943 12.7443C12.2931 10.6455 13.5379 8.54924 14.2125 7.16023C14.3723 6.83109 14.45 6.47787 14.45 6.12692C14.45 5.5072 14.2078 4.89464 13.7483 4.43513ZM13.1977 6.66732C12.5609 7.97846 11.3845 9.95865 9.39661 11.9466C7.40868 13.9345 5.42849 15.1109 4.11735 15.7477C3.63935 15.9799 3.06287 15.8806 2.6842 15.5019L1.59746 14.4079L3.87543 12.1436L5.19015 13.4415L5.5419 13.2849C5.59905 13.2595 6.95947 12.6438 8.49116 11.1121C10.0239 9.57947 10.6267 8.23054 10.6515 8.17386L10.8041 7.82683L9.50677 6.48705L11.8559 4.14178L12.9512 5.23327C13.3307 5.6133 13.4298 6.18952 13.1977 6.66732Z"
              fill="#6E9C9F"
            />
          </g>
          <defs>
            <clipPath id="clip0_44649_237">
              <rect width="17" height="17" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <span className={styles.number}>
          <a href="tel:+74958235412">+7 (495) 823-54-12</a>
        </span>
        <img className={styles.cart} src={cart} alt="cart" />
      </div>
    </div>
  );
};

export default Header;
