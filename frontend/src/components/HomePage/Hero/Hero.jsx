import React, { useRef, useState } from "react";
import styles from "./Hero.module.css";
import { FaArrowRight } from "react-icons/fa";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { GiAnticlockwiseRotation } from "react-icons/gi";
import bubbleSort from "../../../algorithms/bubbleSort";

const Hero = () => {
  const [error, setError] = useState("");
  const inputRef = useRef();
  const algoRef = useRef();

  // take the input and algo and save it to the redux
  const handleClick = () => {
    const input = inputRef.current.value.trim();
    const algo = algoRef.current.value;

    if (!input) {
      setError("Please enter an array.");
      return;
    }

    if (!algo) {
      setError("Please select an algorithm.");
      return;
    }

    const regex = /^\d+(?:,\s?\d+|\s\d+)*$/;

    if (!regex.test(input)) {
      setError("Enter valid numbers separated by commas and spaces.");
      return;
    }

    const arr = input.split(/,\s?|\s/).map(Number);

    console.log(arr);
    console.log(algo);

    const data = bubbleSort(arr);
    console.log(data);
  };

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
                ref={inputRef}
                type="text"
                id="input-array"
                placeholder="e.g. 5, 3, 8, 1, 2 or 5 3 8 1 2"
                className={styles.input}
              />
            </div>

            {/* Divider */}

            <div className={styles.divider}></div>

            {/* Right Side */}

            <div className={styles.selectBox}>
              <label className={styles.label}>Select Algorithm</label>

              <p className={styles.helperText}>Choose any sorting algorithm</p>

              <select ref={algoRef} defaultValue="" className={styles.select}>
                <option value="" disabled>
                  Select an algorithm
                </option>
                <option value="Bubble Sort">Bubble Sort</option>
                <option value="Selection Sort">Selection Sort</option>
                <option value="Insertion Sort">Insertion Sort</option>
                <option value="Merge Sort">Merge Sort</option>
                <option value="Quick Sort">Quick Sort</option>
              </select>
            </div>
          </div>

          <p
            className={`${styles.errorMessage} ${
              error ? styles.showError : ""
            }`}
          >
            {error}
          </p>

          {/* ================= Info Box ================= */}

          <div className={styles.infoBox}>
            <p className={styles.infoText}>
              Click the button below to visualize the sorting process.
            </p>
          </div>
        </div>

        {/* ================= Buttons ================= */}

        <div className={styles.buttonContainer}>
          <button className={styles.visualizeBtn} onClick={handleClick}>
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
