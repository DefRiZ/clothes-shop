import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../../store/slices/itemsSlice";

import styles from "./NewCollection.module.scss";

import SingleProduct from "../SingleProduct/SingleProduct";

const NewCollection = () => {
  const dispatch = useDispatch();
  const { itemsFetch, status } = useSelector((state) => state.items);
  const { categoryId, currentPage } = useSelector((state) => state.filter);

  React.useEffect(() => {
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    dispatch(fetchItems({ category, currentPage }));
  }, [dispatch, categoryId, currentPage]);

  function getRandomElements(array, count = 3) {
    // Создаем новый массив для сохранения выбранных элементов
    let result = [];

    // Проверяем, что количество запрашиваемых элементов меньше или равно длине исходного массива
    if (count <= array.length) {
      // Итерируемся до достижения нужного количества элементов
      while (result.length < count) {
        // Генерируем случайный индекс от 0 до (длины массива - 1)
        let randomIndex = Math.floor(Math.random() * array.length);

        // Проверяем, что элемент с таким индексом еще не был выбран
        if (!result.includes(array[randomIndex])) {
          // Добавляем элемент в результат
          result.push(array[randomIndex]);
        }
      }
    } else {
      // Если запрошенное количество элементов больше, чем длина массива,
      // просто перемешиваем исходный массив и возвращаем его полностью
      result = array.sort(function () {
        return 0.5 - Math.random();
      });
    }

    return result;
  }
  const bannerArray = getRandomElements(itemsFetch);
  const collectionList = bannerArray.map((obj) => (
    <SingleProduct key={obj.id} {...obj} />
  ));
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>Нова колекція</h2>
      <div className={styles.items}>
        {status === "error" && <h3>Оновіть сторінку!</h3>}
        {status === "complete" && collectionList}
      </div>

      <Link className={styles.button} to="/catalog">
        Відкрити магазин
      </Link>
    </div>
  );
};

export default NewCollection;
