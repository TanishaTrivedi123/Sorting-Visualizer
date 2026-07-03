import React from "react";
import styles from "./Signup.module.css";
import {
  FaEye,
  FaListUl,
  FaEnvelope,
  FaLock,
  FaUser,
  FaBirthdayCake,
  FaLongArrowAltRight,
} from "react-icons/fa";
import { IoCodeSlashSharp } from "react-icons/io5";

const Signup = () => {
  return (
    <section className={styles.fullPage}>
      <div className={styles.container}>
        {/* ================= Left Side ================= */}
        <div className={styles.leftSide}>
          <h1 className={styles.heading}>
            Create Your <span>Sortify Account</span>
          </h1>

          <p className={styles.description}>
            Join Sortify and start your journey to visualize, learn, and master
            sorting algorithms.
          </p>

          <div className={styles.boxes}>
            {/* box1 */}
            <div className={styles.box}>
              <div className={styles.box1}>
                <FaEye />
              </div>

              <div className={styles.boxContent}>
                <h3>Visualize</h3>
                <p>See algorithms in action with interactive visualizations.</p>
              </div>
            </div>

            {/* box2 */}
            <div className={styles.box}>
              <div className={styles.box2}>
                <FaListUl />
              </div>

              <div className={styles.boxContent}>
                <h3>Learn</h3>
                <p>Understand each step with clear and simple explanations.</p>
              </div>
            </div>

            {/* box3 */}
            <div className={styles.box}>
              <div className={styles.box3}>
                <IoCodeSlashSharp />
              </div>

              <div className={styles.boxContent}>
                <h3>Master</h3>
                <p>Practice, experiment, and become an algorithm pro.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= Right Side ================= */}

        <div className={styles.rightSide}>
          <div className={styles.signupCard}>
            <h2>Login to Your Account</h2>

            <p className={styles.subTitle}>
              Fill in the details below to create your account.
            </p>

            {/* Full Name */}
            <div className={styles.formGroup}>
              <label htmlFor="username">Full Name</label>

              <div className={styles.inputBox}>
                <FaUser className={styles.inputIcon} />

                <input
                  id="username"
                  type="email"
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            {/* Email */}

            <div className={styles.formGroup}>
              <label htmlFor="email">Email Address</label>

              <div className={styles.inputBox}>
                <FaEnvelope className={styles.inputIcon} />

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            {/* Date of Birth */}

            <div className={styles.formGroup}>
              <label htmlFor="dateofbirth">Date of Birth</label>

              <div className={styles.inputBox}>
                <FaBirthdayCake className={styles.inputIcon} />

                <input
                  id="dateofbirth"
                  type="date"
                  placeholder="Enter your date of birth"
                />
              </div>
            </div>

            {/* Password */}

            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>

              <div className={styles.inputBox}>
                <FaLock className={styles.inputIcon} />

                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                />

                <FaEye className={styles.eyeIcon} />
              </div>
            </div>

            <div className={styles.suggestion}>
              <span>Password must be atleast 6 characters long.</span>
            </div>

            <button className={styles.signupBtn}>
              Create Account <FaLongArrowAltRight className={styles.icon} />
            </button>

            <p className={styles.loginText}>
              Already have an account?
              <span> Sign in </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
