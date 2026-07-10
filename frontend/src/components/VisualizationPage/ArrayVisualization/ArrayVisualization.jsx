import React from "react";
import { HiMiniChartBar } from "react-icons/hi2";
import styles from "./ArrayVisualization.module.css";

const ArrayVisualization = () => {
  const array = [5, 3, 8, 1, 2, 7, 4, 6];

  const currentIndex = 5;
  const comparingIndex = 4;

  const maxValue = Math.max(...array);

  return (
    <section className={styles.visualizationContainer}>
      <div className={styles.heading}>
        <HiMiniChartBar />
        <h3>Array Visualization</h3>
      </div>

      <div className={styles.graphContainer}>
        {array.map((value, index) => (
          <div key={index} className={styles.barWrapper}>
            <span className={styles.value}>{value}</span>

            <div
              className={`
                ${styles.bar}
                ${
                  index === currentIndex
                    ? styles.currentBar
                    : index === comparingIndex
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
