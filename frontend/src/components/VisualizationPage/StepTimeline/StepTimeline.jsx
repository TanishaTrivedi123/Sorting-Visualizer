import React from "react";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import styles from "./StepTimeline.module.css";

const StepTimeline = () => {
  const currentStep = 2;
  const totalSteps = 28;

  const steps = [
    {
      id: 1,
      title: "Step 1",
      description: "Compare 5 and 3",
      status: "No swap",
      active: true,
    },
    {
      id: 2,
      title: "Step 2",
      description: "Compare 5 and 8",
      status: "No swap",
    },
    {
      id: 3,
      title: "Step 3",
      description: "Compare 8 and 1",
      status: "Swap",
    },
    {
      id: 4,
      title: "Step 4",
      description: "Compare 8 and 2",
      status: "Swap",
    },
    {
      id: 5,
      title: "Step 5",
      description: "Compare 8 and 7",
      status: "Swap",
    },
    {
      id: 6,
      title: "Step 6",
      description: "Compare 8 and 4",
      status: "Swap",
    },
    {
      id: 7,
      title: "Step 7",
      description: "Compare 8 and 6",
      status: "Swap",
    },
    {
      id: 8,
      title: "Step 8",
      description: "End of Pass 1",
      status: "8 is in place",
      success: true,
    },
  ];

  return (
    <section className={styles.timeline}>
      <div className={styles.heading}>
        <HiBars3BottomLeft />
        <h3>Steps</h3>
      </div>

      <div className={styles.cards}>
        {steps.map((step) => (
          <div
            key={step.id}
            className={`${styles.card} ${step.active ? styles.activeCard : ""}`}
          >
            <h4>{step.title}</h4>

            <p>{step.description}</p>

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
