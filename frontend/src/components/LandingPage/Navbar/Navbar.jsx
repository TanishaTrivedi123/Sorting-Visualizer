import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {/* website logo */}
        <div className={styles.logo}>
          <img className={styles.logoimg} src="/logo.png" alt="website logo" />
          <h1>Sortify</h1>
        </div>

        {/* signup or login button */}
        <div className={styles.buttons}>
          <button className={styles.login}>Login</button>
          <button className={styles.signup}>Sign Up</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
