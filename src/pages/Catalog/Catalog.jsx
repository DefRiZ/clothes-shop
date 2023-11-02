import React from "react";

import styles from "./Catalog.module.scss";
import axios from "axios";

import Pagination from "../../components/Pagination/Pagination";
import Categories from "../../components/Categories/Categories";
import SingleProduct from "../../components/SingleProduct/SingleProduct";

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchItems } from "../../store/slices/itemsSlice";

const Catalog = () => {
  const [data, setData] = React.useState([]);
  const dispatch = useDispatch();
  const { status, itemsFetch } = useSelector((state) => state.items);
  const { categoryId, currentPage } = useSelector((state) => state.filter);

  React.useEffect(() => {
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    dispatch(fetchItems({ category, currentPage }));
    window.scrollTo(0, 0);
  }, [categoryId, currentPage, dispatch]);
  React.useEffect(() => {
    async function fetchItem() {
      try {
        const { data } = await axios.get(
          "https://63f6626c59c944921f73435d.mockapi.io/items"
        );
        setData(data);
      } catch (error) {
        alert(`Error`);
      }
    }
    fetchItem();
  }, []);

  const itemsList = itemsFetch.map((item) => (
    <SingleProduct key={item.id} {...item} />
  ));
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>Магазин</h2>
      <ul className={styles.breads}>
        <li className={styles.bread}>
          <Link to="/">Головна</Link>
        </li>
        <li className={styles.bread}>Магазин</li>
      </ul>
      <Categories />
      <p className={styles.list}>
        Відображається {itemsFetch.length} з {data.length} товарів
      </p>
      <div className={styles.items}>
        {status === "error" && <p>Оновіть сторінку</p>}
        {status === "complete" && itemsList}
      </div>
      <p className={styles.list}>
        Відображається {itemsFetch.length} з {data.length} товарів
      </p>
      <Pagination />
    </div>
  );
};

export default Catalog;
