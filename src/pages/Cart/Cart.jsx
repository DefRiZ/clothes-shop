import React from "react";

import styles from "./Cart.module.scss";
import CartItem from "../../components/CartItem/CartItem";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Cart = () => {
  const { cart, totalPrice, totalCount } = useSelector((state) => state.cart);

  if (!totalCount) {
    return (
      <div className={styles.root}>
        <h2 className={styles.title}>Корзина</h2>
        <ul className={styles.breads}>
          <li className={styles.bread}>
            <Link to="/">Головна</Link>
          </li>
          <li className={styles.bread}>Корзина</li>
        </ul>
        <div className={styles.empty}>
          <h3 className={styles.title}>Ваша корзина пуста</h3>
          <div className={styles.block}>
            <Link className={styles.button} to="/catalog">
              Повернутись до магазину
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.root}>
      <h2 className={styles.title}>Корзина</h2>
      <ul className={styles.breads}>
        <li className={styles.bread}>
          <Link to="/">Главная</Link>
        </li>
        <li className={styles.bread}>Корзина</li>
      </ul>
      <div className={styles.info}>
        <h3>Товар</h3>
        <h3>Ціна</h3>
        <h3>Кількість</h3>
        <h3>Усього</h3>
      </div>
      <div className={styles.cart}>
        {cart.map((obj) => (
          <CartItem key={obj.id} {...obj} />
        ))}
      </div>
      <div className={styles.order}>
        <p>
          Разом: <span>${totalPrice}</span>
        </p>
        <button className={styles.button}>Оформити замовлення</button>
      </div>
    </div>
  );
};

export default Cart;
