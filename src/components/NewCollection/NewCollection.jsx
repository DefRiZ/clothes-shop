import React from "react";

import styles from "./NewCollection.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { fetchCollection } from "../../store/slices/newCollection";
import SingleProduct from "../SingleProduct/SingleProduct";

const NewCollection = () => {
  const dispatch = useDispatch();
  const { collectionFetch, status } = useSelector((state) => state.collection);
  React.useEffect(() => {
    dispatch(fetchCollection());
  }, [dispatch]);
  const collectionList = collectionFetch.map((obj, i) => (
    <SingleProduct key={obj.id} {...obj} />
  ));
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>Новая коллекция</h2>
      <div className={styles.items}>
        {status === "error" && <h3>Обновите страницу!</h3>}
        {status === "complete" && collectionList}
      </div>

      <a className={styles.button} href="#">
        Открыть магазин
      </a>
    </div>
  );
};

export default NewCollection;
