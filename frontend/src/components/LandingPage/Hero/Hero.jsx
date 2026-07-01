import React from "react";
import styles from "./Hero.module.css";
import { FaLongArrowAltRight } from "react-icons/fa";

const Hero = () => {
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
            <button className={styles.primaryBtn}>
              Get Started <FaLongArrowAltRight className={styles.icon} />
            </button>
            <button className={styles.secondaryBtn}>Learn More</button>
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
