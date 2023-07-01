import React from "react";

import styles from "./SingleProduct.module.scss";

const SingleProduct = ({ imageUrl, title, price }) => {
  return (
    <div className={styles.item}>
      <a href="#">
        <div className={styles.wrapper}>
          <img className={styles.image} src={imageUrl} alt="product" />
        </div>
        <h2 className={styles.name}>{title}</h2>
        <span className={styles.price}>{price} $</span>
      </a>
    </div>
  );
};

export default SingleProduct;
