import React from "react";

import styles from "./CartItem.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../../store/slices/cartSlice";

const CartItem = ({ id, imageUrl, title, price, count }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.root}>
      <div className={styles.info}>
        <svg
          className={styles.delete}
          onClick={() => dispatch(removeItem(id))}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L15.5 15.5M15.5 1L1 15.5" stroke="black" />
        </svg>
        <img className={styles.image} src={imageUrl} alt="item" />
        <span>{title}</span>
      </div>
      <span className={styles.price}>${price}</span>
      <span className={styles.count}>{count}</span>
      <span className={styles.total}>${count * price}</span>
    </div>
  );
};

export default CartItem;
