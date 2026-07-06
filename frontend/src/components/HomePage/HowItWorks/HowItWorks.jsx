import React from "react";
import styles from "./HowItWorks.module.css";
import { FaChevronRight } from "react-icons/fa";
import { TbBulb } from "react-icons/tb";

const HowItWorks = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>How it works?</h2>

        <div className={styles.steps}>
          {/* Left Icon */}
          <div className={styles.ideaBox}>
            <div className={styles.ideaCircle}>
              <TbBulb />
            </div>
          </div>

          {/* Step 1 */}
          <div className={styles.step}>
            <div className={`${styles.number} ${styles.pink}`}>1</div>

            <div className={styles.content}>
              <h3>Enter Array</h3>
              <p>
                Provide numbers separated
                <br />
                by commas.
              </p>
            </div>
          </div>

          {/* Arrow */}
          <div className={styles.arrowCircle}>
            <FaChevronRight />
          </div>

          {/* Step 2 */}
          <div className={styles.step}>
            <div className={`${styles.number} ${styles.yellow}`}>2</div>

            <div className={styles.content}>
              <h3>Choose Algorithm</h3>
              <p>
                Select any sorting algorithm
                <br />
                from the dropdown.
              </p>
            </div>
          </div>

          {/* Arrow */}
          <div className={styles.arrowCircle}>
            <FaChevronRight />
          </div>

          {/* Step 3 */}
          <div className={styles.step}>
            <div className={`${styles.number} ${styles.green}`}>3</div>

            <div className={styles.content}>
              <h3>Visualize</h3>
              <p>
                Watch the algorithm sort
                <br />
                your array step by step.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
