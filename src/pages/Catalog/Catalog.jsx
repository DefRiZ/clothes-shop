import React from "react";
import Categories from "../../components/Categories/Categories";
import { useSelector, useDispatch } from "react-redux";
import { fetchItems } from "../../store/slices/itemsSlice";
import SingleProduct from "../../components/SingleProduct/SingleProduct";

import styles from "./Catalog.module.scss";
import Pagination from "../../components/Pagination/Pagination";

const Catalog = () => {
  const dispatch = useDispatch();
  const { status, itemsFetch } = useSelector((state) => state.items);
  const { categoryId, currentPage } = useSelector((state) => state.filter);

  React.useEffect(() => {
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    dispatch(fetchItems({ category, currentPage }));
    window.scrollTo(0, 0);
  }, [categoryId, currentPage, dispatch]);

  const itemsList = itemsFetch.map((item) => (
    <SingleProduct key={item.id} {...item} />
  ));
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>Магазин</h2>
      <ul className={styles.breads}>
        <li className={styles.bread}>Главная</li>
        <li className={styles.bread}>Магазин</li>
      </ul>
      <Categories />
      <p className={styles.list}>Показано 9 из 12 товаров</p>
      <div className={styles.items}>
        {status === "error" && <p>Обновите страницу</p>}
        {status === "complete" && itemsList}
      </div>
      <p className={styles.list}>Показано 9 из 12 товаров</p>
      <Pagination />
    </div>
  );
};

export default Catalog;
