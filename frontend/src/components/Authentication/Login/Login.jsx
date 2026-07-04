import React from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { FaEye, FaListUl, FaEnvelope, FaLock } from "react-icons/fa";
import { IoCodeSlashSharp } from "react-icons/io5";

const Login = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.fullPage}>
      <div className={styles.container}>
        {/* ================= Left Side ================= */}
        <div className={styles.leftSide}>
          <h1 className={styles.heading}>
            Welcome Back to <span>Sortify</span>
          </h1>

          <p className={styles.description}>
            Log in to continue your journey of visualizing, learning, and
            mastering sorting algorithms.
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
          <div className={styles.loginCard}>
            <h2>Login to Your Account</h2>

            <p className={styles.subTitle}>
              Enter your credentials to access your account.
            </p>

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

            <div className={styles.forgotPassword}>
              <span>Forgot Password?</span>
            </div>

            <button className={styles.loginBtn}>Login</button>

            <p className={styles.signupText}>
              Don't have an account?
              <span onClick={() => navigate("/signup")}> Sign Up</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
