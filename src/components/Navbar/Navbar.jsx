import React, { useState, useEffect } from "react";
import { FiSearch, FiShoppingCart, FiX, FiMenu } from "react-icons/fi";
import styles from "./Navbar.module.css";
import { redirectToWhatsApp } from "../../services/wpRedirect";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className={styles.navbar} aria-label="Main navigation">
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <h1>ANUHIRA MAHILA GRUH UDYOG</h1>
        </div>

        {/* Desktop Navigation */}
        <div className={styles.desktopNav}>
          <ul className={styles.navList}>
            <li>
              <a href="#home" className={styles.navLink}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className={styles.navLink}>
                About
              </a>
            </li>

            <li onClick={() => redirectToWhatsApp()}>
              <a href="#footer" className={styles.navLink}>
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Navigation */}
        <button
          className={styles.menuButton}
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`${styles.mobileNav} ${
            isMobileMenuOpen ? styles.active : ""
          }`}
        >
          <ul className={styles.mobileNavList}>
            <li>
              <a
                href="#home"
                className={styles.navLink}
                onClick={toggleMobileMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={styles.navLink}
                onClick={toggleMobileMenu}
              >
                About
              </a>
            </li>

            <li onClick={() => redirectToWhatsApp()}>
              <a href="#" className={styles.navLink} onClick={toggleMobileMenu}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
