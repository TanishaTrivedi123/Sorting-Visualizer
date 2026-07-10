import React from "react";
import { HiSparkles } from "react-icons/hi2";
import styles from "./VisualizationMessage.module.css";

const VisualizationMessage = () => {
  return (
    <section className={styles.messageContainer}>
      <div className={styles.icon}>
        <HiSparkles />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>Comparing 2 and 7</h3>

        <p className={styles.description}>Since 2 &lt; 7, no swap needed.</p>
      </div>
    </section>
  );
};

export default VisualizationMessage;
