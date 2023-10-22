import React from "react";

import styles from "./SinglePage.module.scss";

import axios from "axios";

import SingleProduct from "../SingleProduct/SingleProduct";

import { Link, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../../store/slices/itemsSlice";
import { addItem } from "../../store/slices/cartSlice";

const SinglePage = () => {
  const dispatch = useDispatch();

  const [size, setSize] = React.useState(0);

  const onClickAdd = () => {
    const item = {
      id,
      imageUrl,
      title,
      price,
    };
    dispatch(addItem(item));
  };

  const [item, setItem] = React.useState({
    id: "0",
    imageUrl: "",
    title: "Загрузка",
    price: 0,
    category: 0,
    sises: ["xs", "s"],
  });
  const { id } = useParams();
  const { imageUrl, title, price, sises } = item;
  const { itemsFetch } = useSelector((state) => state.items);
  const { cart } = useSelector((state) => state.cart);
  const findItem = cart.find((obj) => obj.id === id);
  const countItem = findItem ? findItem.count : 0;
  const { categoryId, currentPage } = useSelector((state) => state.filter);

  React.useEffect(() => {
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    dispatch(fetchItems({ category, currentPage }));
    async function fetchItem() {
      try {
        const { data } = await axios.get(
          "https://63f6626c59c944921f73435d.mockapi.io/items/" + id
        );
        setItem(data);
      } catch (error) {
        alert(`Error`);
      }
    }
    fetchItem();
  }, [dispatch, id, categoryId, currentPage]);

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

  const recommendArray = getRandomElements(itemsFetch);

  return (
    <div className={styles.root}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.breads}>
        <li className={styles.bread}>
          <Link to="/">Главная</Link>
        </li>
        <li className={styles.bread}>
          <Link to="/catalog">Магазин</Link>
        </li>
        <li className={styles.bread}>{title}</li>
      </ul>
      <div className={styles.item}>
        <div className={styles.imageBlock}>
          <img src={imageUrl} alt="item" />
        </div>
        <div className={styles.info}>
          <span className={styles.price}>${price}</span>
          <div className={styles.sizeBlock}>
            <p>Выберите размер</p>
            <ul className={styles.sizes}>
              {sises.map((el, i) => (
                <li
                  className={size === i ? `${styles.active}` : `${styles.size}`}
                  key={i}
                  onClick={() => setSize(i)}
                >
                  {el}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.order}>
            <span className={styles.count}>{countItem}</span>
            <button onClick={() => onClickAdd()} className={styles.button}>
              Добавить в корзину
            </button>
          </div>
        </div>
      </div>
      <div className={styles.similar}>
        <h2 className={styles.title}>Связанные товары</h2>
        <div className={styles.items}>
          {recommendArray.map((el, i) => (
            <SingleProduct key={i} {...el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
