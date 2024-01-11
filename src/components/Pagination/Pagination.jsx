import React from "react";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "../../store/slices/filterSlice";

import styles from "./Pagination.module.scss";

import ReactPaginate from "react-paginate";

const Pagination = () => {
  const [data, setData] = React.useState([]);
  const dispatch = useDispatch();
  const { currentPage } = useSelector((state) => state.filter);
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
  const pageNumber = [];
  for (let i = 0; i <= Math.ceil(data.length / 3); i++) {
    pageNumber.push(i);
  }
  return (
    <div className={styles.container}>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={(event) => dispatch(setCurrentPage(event.selected + 1))}
        pageRangeDisplayed={4}
        pageCount={2}
        forcePage={currentPage - 1}
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;
