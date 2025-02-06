import { useState } from 'react';
import styles from './Navbar.module.css'; // Import CSS module

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle the menu open/close
    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
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
                <h1>
                    {/* Use the logo image from the public folder */}
                    <a href="/" className={styles.logo}>
                        <img src="/logo.jpg" alt="Logo" className={styles.logoImage} />
                    </a>
                </h1>

                <nav className={`${styles.navbar} ${isMenuOpen ? styles.open : ''}`}>
                    <ul className={styles.navbarList}>
                        <li className={styles.navItem}>
                            <a href="#home" className={styles.navbarLink} onClick={handleLinkClick}>Home</a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="#about" className={styles.navbarLink} onClick={handleLinkClick}>About Us</a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="#food-menu" className={styles.navbarLink} onClick={handleLinkClick}>Shop</a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="#blog" className={styles.navbarLink} onClick={handleLinkClick}>Blog</a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="#contact" className={styles.navbarLink} onClick={handleLinkClick}>Contact Us</a>
                        </li>
                    </ul>
                </nav>

                <div className={styles.headerBtnGroup}>
                    <button className={styles.searchBtn} aria-label="Search">
                        <ion-icon name="search-outline"></ion-icon>
                    </button>

                    <button className={`${styles.btn} ${styles.btnHover}`}>Call Us</button>

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
