import React from "react";
import { FiRotateCcw } from "react-icons/fi";
import styles from "./TopInfoBar.module.css";

const TopInfoBar = () => {
  const algorithm = "Bubble Sort";

  const array = [5, 3, 8, 1, 2, 7, 4, 6];

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

      <button className={styles.resetBtn}>
        <FiRotateCcw />
        <span>Reset Visualization</span>
      </button>
    </section>
  );
};

export default TopInfoBar;
