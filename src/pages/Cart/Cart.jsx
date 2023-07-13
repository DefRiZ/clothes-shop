import React from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import styles from "./Cart.module.scss";
import CartItem from "../../components/CartItem/CartItem";

const Cart = () => {
  const { cart, totalPrice } = useSelector((state) => state.cart);
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
        <h3>Цена</h3>
        <h3>Количество</h3>
        <h3>Всего</h3>
      </div>
      <div className={styles.cart}>
        {cart.map((obj) => (
          <CartItem key={obj.id} {...obj} />
        ))}
      </div>
      <div className={styles.order}>
        <p>
          Итого: <span>${totalPrice}</span>
        </p>
        <button className={styles.button}>Оформить заказ</button>
      </div>
    </div>
  );
};

export default Cart;
