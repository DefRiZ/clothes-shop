import React from "react";

import styles from "./Drawer.module.scss";

import { useDispatch } from "react-redux";
import { setDrawer } from "../../store/slices/filterSlice";

const Drawer = () => {
  const dispatch = useDispatch();
  const [isCallback, setIsCallback] = React.useState(false);
  if (isCallback === false)
    return (
      <div className={styles.root}>
        <div className={styles.overlay}>
          <div className={styles.drawer}>
            <svg
              className={styles.close}
              onClick={() => dispatch(setDrawer())}
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L15.5 15.5M15.5 1L1 15.5" stroke="black" />
            </svg>

            <h2>Замовити зворотній дзвінок</h2>
            <form className={styles.form}>
              <input placeholder="Имя" type="text" />
              <input placeholder="E-mail" type="email" />
              <input placeholder="Телефон" type="tel" />
            </form>
            <button
              onClick={() => setIsCallback(true)}
              className={styles.button}
            >
              Замовити дзвінок
            </button>
          </div>
        </div>
      </div>
    );
  if (isCallback) {
    return (
      <div className={styles.root}>
        <div className={styles.overlay}>
          <div className={styles.drawer}>
            <h2>Чудово! Ми незабаром вам передзвонимо.</h2>
            <button
              onClick={() => dispatch(setDrawer())}
              className={styles.button}
            >
              Закрити
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default Drawer;
