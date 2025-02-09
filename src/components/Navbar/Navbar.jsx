import { useState } from "react";
import styles from "./Navbar.module.css"; // Import CSS module

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu open/close
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  // Close menu when a nav link is clicked (useful for mobile)
  const handleLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.animatedtext}>Anuhira</h1>

        <nav className={`${styles.navbar} ${isMenuOpen ? styles.open : ""}`}>
          <ul className={styles.navbarList}>
            <li className={styles.navItem}>
              <a
                href="#home"
                className={styles.navbarLink}
                onClick={handleLinkClick}
              >
                Home
              </a>
            </li>
            <li className={styles.navItem}>
              <a
                href="#about"
                className={styles.navbarLink}
                onClick={handleLinkClick}
              >
                About Us
              </a>
            </li>
            <li className={styles.navItem}>
              <a
                href="#food-menu"
                className={styles.navbarLink}
                onClick={handleLinkClick}
              >
                Shop
              </a>
            </li>
            <li className={styles.navItem}>
              <a
                href="#blog"
                className={styles.navbarLink}
                onClick={handleLinkClick}
              >
                Blog
              </a>
            </li>
            <li className={styles.navItem}>
              <a
                href="#contact"
                className={styles.navbarLink}
                onClick={handleLinkClick}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        <div className={styles.headerBtnGroup}>
          <img src="/mainlogo.jpg" className={styles.mainlogo} alt="" />

          <button
            className={styles.navToggleBtn}
            aria-label="Toggle Menu"
            onClick={toggleMenu}
          >
            <span className={styles.lineTop}></span>
            <span className={styles.lineMiddle}></span>
            <span className={styles.lineBottom}></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
