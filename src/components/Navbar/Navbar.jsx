import { useState } from 'react';
import styles from './Navbar.module.css'; // Import CSS module

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>

                <h1>
                    <a href="#" className={styles.logo}>Foodie<span className={styles.span}>.</span></a>
                </h1>

                <nav className={`${styles.navbar} ${isMenuOpen ? styles.open : ''}`}>
                    <ul className={styles.navbarList}>
                        <li className={styles.navItem}>
                            <a href="#home" className={styles.navbarLink}>Home</a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="#about" className={styles.navbarLink}>About Us</a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="#food-menu" className={styles.navbarLink}>Shop</a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="#blog" className={styles.navbarLink}>Blog</a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="#" className={styles.navbarLink}>Contact Us</a>
                        </li>
                    </ul>
                </nav>

                <div className={styles.headerBtnGroup}>
                    <button className={styles.searchBtn} aria-label="Search">
                        <ion-icon name="search-outline"></ion-icon>
                    </button>

                    <button className={`${styles.btn} ${styles.btnHover}`}>Reservation</button>

                    <button className={styles.navToggleBtn} aria-label="Toggle Menu" onClick={toggleMenu}>
                        <span className={styles.lineTop}></span>
                        <span className={styles.lineMiddle}></span>
                        <span className={styles.lineBottom}></span>
                    </button>
                </div>

            </div>
        </header>
    );
}

export default Navbar;
