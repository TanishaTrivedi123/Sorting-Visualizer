import React from "react";
import styles from "./Hero.module.css";
import { FaMagic, FaArrowRight } from "react-icons/fa";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { GiAnticlockwiseRotation } from "react-icons/gi";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* ================= Hero Heading ================= */}

        <div className={styles.heroContent}>
          <h1 className={styles.heading}>
            Visualize Sorting <br />
            <span>Algorithms</span>
          </h1>

          <p className={styles.description}>
            Enter your array, choose a sorting algorithm, and visualize the
            magic in action.
          </p>
        </div>

        {/* ================= Input Card ================= */}

        <div className={styles.card}>
          <div className={styles.inputRow}>
            {/* Left Side */}

            <div className={styles.inputBox}>
              <label htmlFor="input-array" className={styles.label}>
                Enter Array
              </label>

              <p className={styles.helperText}>
                Input numbers separated by commas
              </p>

              <input
                type="text"
                id="input-array"
                placeholder="e.g. 5, 3, 8, 1, 2"
                className={styles.input}
              />
            </div>

            {/* Divider */}

            <div className={styles.divider}></div>

            {/* Right Side */}

            <div className={styles.selectBox}>
              <label className={styles.label}>Select Algorithm</label>

              <p className={styles.helperText}>Choose any sorting algorithm</p>

              <select className={styles.select}>
                <option>Select an algorithm</option>
                <option>Bubble Sort</option>
                <option>Selection Sort</option>
                <option>Insertion Sort</option>
                <option>Merge Sort</option>
                <option>Quick Sort</option>
              </select>
            </div>
          </div>

          {/* ================= Info Box ================= */}

          <div className={styles.infoBox}>
            <p className={styles.infoText}>
              Click the button below to visualize the sorting process.
            </p>
          </div>
        </div>

        {/* ================= Buttons ================= */}

        <div className={styles.buttonContainer}>
          <button className={styles.visualizeBtn}>
            <HiMiniBars3BottomLeft className={styles.buttonIcon} />

            <span>Visualize Sorting</span>

            <FaArrowRight className={styles.arrowIcon} />
          </button>

          <button className={styles.clearBtn}>
            <GiAnticlockwiseRotation className={styles.clearIcon} />
            <span>Clear</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
