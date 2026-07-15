import React from "react";
import { HiSparkles } from "react-icons/hi2";
import styles from "./VisualizationMessage.module.css";
import { useSelector } from "react-redux";

const VisualizationMessage = () => {
  const line1 = useSelector((state) => state.sortArr.steps.steps[0]?.line1);
  const line2 = useSelector((state) => state.sortArr.steps.steps[0]?.line2);

  return (
    <section className={styles.messageContainer}>
      <div className={styles.icon}>
        <HiSparkles />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{line1}</h3>

        <p className={styles.description}>{line2}</p>
      </div>
    </section>
  );
};

export default VisualizationMessage;
