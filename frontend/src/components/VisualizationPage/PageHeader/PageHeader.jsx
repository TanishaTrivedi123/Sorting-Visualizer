import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import styles from "./PageHeader.module.css";
import { useNavigate } from "react-router-dom";

const PageHeader = () => {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <button onClick={() => navigate("/sorting")} className={styles.backBtn}>
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
