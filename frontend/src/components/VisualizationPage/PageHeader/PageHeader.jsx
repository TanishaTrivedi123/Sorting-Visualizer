import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import styles from "./PageHeader.module.css";

const PageHeader = () => {
  return (
    <header className={styles.header}>
      <button className={styles.backBtn}>
        <FaArrowLeft />
        <span>Back to Home</span>
      </button>

      <h1 className={styles.heading}>
        Sorting <span>Visualization</span>
      </h1>
    </header>
  );
};

export default PageHeader;
