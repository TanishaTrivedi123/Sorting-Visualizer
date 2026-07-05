import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { FaUser, FaBars, FaTimes, FaHome, FaBookReader } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {/* website logo */}
        <div className={styles.logo}>
          <img className={styles.logoimg} src="/logo.png" alt="website logo" />
          <h1>Sortify</h1>
        </div>

        {/* middle section:- Navigation Links */}
        <div className={styles.navLinks}>
          <NavLink
            to="/sorting"
            className={({ isActive }) =>
              isActive ? `${styles.active} ${styles.link}` : styles.link
            }
          >
            <FaHome />
            <span>Home</span>
          </NavLink>
          <NavLink
            to="/algorithm"
            className={({ isActive }) =>
              isActive ? `${styles.active} ${styles.link}` : styles.link
            }
          >
            <FaBookReader />
            <span>Explore Algorithms</span>
          </NavLink>
          <NavLink
            to="/my-profile"
            className={({ isActive }) =>
              isActive ? `${styles.active} ${styles.link}` : styles.link
            }
          >
            <FaUser />
            <span>My Profile</span>
          </NavLink>
        </div>

        {/* right section */}
        <div className={styles.rightSection}>
          {/* profile */}
          <div className={styles.profile}>
            <FaUser />
          </div>

          {/* hamburger */}
          <button
            className={styles.menuBtn}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* ======================== Mobile Menu ===========================*/}
      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.showMenu : ""}`}
      >
        <NavLink
          to="/sorting"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive
              ? `${styles.active} ${styles.mobileLink}`
              : styles.mobileLink
          }
        >
          <FaHome />
          <span>Home</span>
        </NavLink>

        <NavLink
          to="/algorithm"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive
              ? `${styles.active} ${styles.mobileLink}`
              : styles.mobileLink
          }
        >
          <FaBookReader />
          <span>Explore Algorithms</span>
        </NavLink>

        <NavLink
          to="/algorithm"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive
              ? `${styles.active} ${styles.mobileLink}`
              : styles.mobileLink
          }
        >
          <FaUser />
          <span>My Profile</span>
        </NavLink>

        {/* User Info */}
        <div className={styles.mobileUser}>
          <div className={styles.mobileProfile}>
            <FaUser />
          </div>

          <div className={styles.userDetails}>
            <h4>Tanisha Trivedi</h4>
            <p>tanisha@gmail.com</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
