import React from "react";

import styles from "./BurgerDrawer.module.scss";

import { Link } from "react-router-dom";
import { setBurger } from "../../store/slices/filterSlice";
import { useDispatch } from "react-redux";

const BurgerDrawer = () => {
  const dispatch = useDispatch();
  return (
    <article className={styles.container}>
      <div className={styles.root}>
        <ul className={styles.navigation}>
          <li>
            <Link
              onClick={() => dispatch(setBurger())}
              className={styles.link}
              to="/"
            >
              Головна
            </Link>
          </li>
          <li>
            <Link
              onClick={() => dispatch(setBurger())}
              className={styles.link}
              to="/catalog"
            >
              Магазин
            </Link>
          </li>
          <li>
            <Link
              onClick={() => dispatch(setBurger())}
              className={styles.link}
              to="/about"
            >
              Про бренд
            </Link>
          </li>
          <li>
            <Link
              onClick={() => dispatch(setBurger())}
              className={styles.link}
              to="/"
            >
              Контакти
            </Link>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default BurgerDrawer;
