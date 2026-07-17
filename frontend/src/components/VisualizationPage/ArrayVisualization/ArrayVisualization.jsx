import React from "react";
import { HiMiniChartBar } from "react-icons/hi2";
import styles from "./ArrayVisualization.module.css";
import { useSelector } from "react-redux";

const ArrayVisualization = () => {
  const steps = useSelector((state) => state.sortArr.steps.steps);
  const currStep = useSelector((state) => state.sortArr.steps.currStep);
  const currStepData = steps[currStep - 1];

  const maxValue = Math.max(...currStepData.array);

  return (
    <section className={styles.visualizationContainer}>
      <div className={styles.heading}>
        <HiMiniChartBar />
        <h3>Array Visualization</h3>
      </div>

      <div className={styles.graphContainer}>
        {currStepData.array.map((value, index) => (
          <div key={index} className={styles.barWrapper}>
            <span className={styles.value}>{value}</span>

            <div
              className={`
                ${styles.bar}
                 ${
                   currStepData.sortedIndexes.includes(index)
                     ? styles.sortedBar
                     : currStepData.compareIndexes.includes(index)
                       ? styles.comparingBar
                       : styles.normalBar
                 }
              `}
              style={{
                height: `${(value / maxValue) * 200}px`,
              }}
            ></div>

            <span className={styles.index}>{index}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArrayVisualization;
