import React from "react";

import styles from "./Categories.module.scss";

import { useSelector, useDispatch } from "react-redux";
import { setCategoryId } from "../../store/slices/filterSlice";
import { useSearchParams } from "react-router-dom";

const list = ["Все", "Пальто", "Свитшоты", "Кардиганы", "Толстовки"];

const Categories = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { categoryId } = useSelector((state) => state.filter);

  React.useEffect(() => {
    setSearchParams({ category: "Все" });
  }, []);

  const onClickCategory = (category, i) => {
    dispatch(setCategoryId(i));
    const newSearchParams = { category: category };
    setSearchParams(newSearchParams);
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
            onClick={() => onClickCategory(category, i)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
