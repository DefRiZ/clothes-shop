import React from "react";
import { Link } from "react-router-dom";

import styles from "./SingleProduct.module.scss";

const SingleProduct = ({ id, imageUrl, title, price }) => {
  return (
    <div className={styles.item}>
      <Link to={`/catalog/items/${id}`}>
        <div className={styles.wrapper}>
          <img className={styles.image} src={imageUrl} alt="product" />
        </div>
        <h2 className={styles.name}>{title}</h2>
        <span className={styles.price}>{price} $</span>
      </Link>
    </div>
  );
};

export default SingleProduct;
