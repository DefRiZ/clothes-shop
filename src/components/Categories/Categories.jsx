import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId } from "../../store/slices/filterSlice";

import styles from "./Categories.module.scss";

const list = ["Все", "Пальто", "Свитшоты", "Кардиганы", "Толстовки"];

const Categories = () => {
  const dispatch = useDispatch();
  const { categoryId } = useSelector((state) => state.filter);

  const onClickCategory = (i) => {
    dispatch(setCategoryId(i));
  };

  return (
    <div className={styles.root}>
      <ul className={styles.categories}>
        {list.map((category, i) => (
          <li
            className={
              categoryId === i ? `${styles.active}` : `${styles.category}`
            }
            key={i}
            onClick={() => onClickCategory(i)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
