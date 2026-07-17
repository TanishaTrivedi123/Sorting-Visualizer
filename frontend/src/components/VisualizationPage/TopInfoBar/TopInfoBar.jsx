import React from "react";
import { FiRotateCcw } from "react-icons/fi";
import styles from "./TopInfoBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { resetVisualization } from "../../../redux/slices/sortingSlice";

const TopInfoBar = () => {
  const algorithm = useSelector((state) => state.sortArr.algorithm);
  const array = useSelector((state) => state.sortArr.inputArr);
  const arrSize = useSelector((state) => state.sortArr.steps.arrLength);
  const dispatch = useDispatch();

  return (
    <section className={styles.topInfoBar}>
      <div className={styles.infoCard}>
        <span className={styles.label}>Algorithm: </span>
        <span className={styles.value}>{algorithm}</span>
      </div>

      <div className={styles.infoCard}>
        <span className={styles.label}>Array: </span>
        <span className={styles.value}>[{array.join(", ")}]</span>
      </div>

      <div className={styles.infoCard}>
        <span className={styles.label}>Array Size: </span>
        <span className={styles.value}>{array.length}</span>
      </div>

      <button
        onClick={() => dispatch(resetVisualization())}
        className={styles.resetBtn}
      >
        <FiRotateCcw />
        <span>Reset Visualization</span>
      </button>
    </section>
  );
};

export default TopInfoBar;
