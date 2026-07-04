import React from "react";
import styles from "./Hero.module.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.hero}>
      {/* left side */}

      <div className={styles.leftSide}>
        <div className={styles.content}>
          <h1>
            Understand Sorting
            <br />
            Like <span>Never Before</span>
          </h1>

          <p>
            Sortify helps you visualize and understand sorting algorithms step
            by step with interactive animation.
          </p>

          <div className={styles.buttons}>
            <button
              onClick={() => navigate("/signup")}
              className={styles.primaryBtn}
            >
              Get Started <FaLongArrowAltRight className={styles.icon} />
            </button>
            <button className={styles.secondaryBtn}>
              8+ Sorting Algorithms
            </button>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className={styles.rightSide}>
        <img src="/wave.svg" alt="wavy image" className={styles.wave} />
        <img
          src="/heroImage.png"
          alt="hero-image"
          className={styles.heroImage}
        />
      </div>
    </section>
  );
};

export default Hero;
