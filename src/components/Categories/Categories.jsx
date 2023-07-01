import React from "react";

import styles from "./Categories.module.scss";

import { useSelector, useDispatch } from "react-redux";
import { setCategoryId } from "../../store/slices/filterSlice";

const list = ["Все", "Пальто", "Свитшоты", "Кардиганы", "Толстовки"];

const Categories = () => {
  const dispatch = useDispatch();
  const { categoryId } = useSelector((state) => state.filter);

  const onClickCategory = (i) => {
    console.log(1);
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
