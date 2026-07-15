import React from "react";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import styles from "./StepTimeline.module.css";
import { useSelector } from "react-redux";

const StepTimeline = () => {
  const steps = useSelector((state) => state.sortArr.steps.steps);
  const currentStep = useSelector((state) => state.sortArr.steps.currStep);
  const totalSteps = useSelector((state) => state.sortArr.steps.totalSteps);

  return (
    <section className={styles.timeline}>
      <div className={styles.heading}>
        <HiBars3BottomLeft />
        <h3>Steps</h3>
      </div>

      <div className={styles.cards}>
        {steps.map((step) => (
          <div
            key={`${step.id}`}
            className={`${styles.card} ${step.active ? styles.activeCard : ""}`}
          >
            <h4>{step.title}</h4>

            <p>{step.line1}</p>

            <span
              className={
                step.success
                  ? styles.success
                  : step.status === "Swap"
                    ? styles.swap
                    : styles.normal
              }
            >
              {step.status}
            </span>
          </div>
        ))}
      </div>

      <div className={styles.progress}>
        <div className={styles.progressFill}></div>
      </div>

      <div className={styles.controls}>
        <button className={styles.prevBtn}>
          <FaArrowLeft />
          <span>Previous Step</span>
        </button>

        <p className={styles.stepCounter}>
          Step <span>{currentStep}</span> of {totalSteps}
        </p>

        <button className={styles.nextBtn}>
          <span>Next Step</span>
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default StepTimeline;
