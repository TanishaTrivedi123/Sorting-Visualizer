import React from "react";
import { HiSparkles } from "react-icons/hi2";
import styles from "./VisualizationMessage.module.css";
import { useSelector } from "react-redux";

const VisualizationMessage = () => {
  const steps = useSelector((state) => state.sortArr.steps.steps);
  const currStep = useSelector((state) => state.sortArr.steps.currStep);
  const currStepData = steps[currStep - 1];

  return (
    <section className={styles.messageContainer}>
      <div className={styles.icon}>
        <HiSparkles />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{currStepData?.line1}</h3>

        <p className={styles.description}>{currStepData?.line2}</p>
      </div>
    </section>
  );
};

export default VisualizationMessage;
