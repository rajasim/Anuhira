import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerTop} style={{ backgroundImage: 'url("./assets/images/footer-illustration.png")' }}>
                <div className={styles.container}>

                    <div className={styles.footerBrand}>
                        <a href="#" className={styles.logo}>Anuhira <span className={styles.span}>Faral</span></a>
                        <p className={styles.footerText}>
                            Bringing the authentic taste of Indian Faral to your doorstep.
                        </p>

                        <ul className={styles.socialList}>
                            <li>
                                <a href="#" className={styles.socialLink}>
                                    <ion-icon name="logo-facebook"></ion-icon>
                                </a>
                            </li>
                            <li>
                                <a href="#" className={styles.socialLink}>
                                    <ion-icon name="logo-twitter"></ion-icon>
                                </a>
                            </li>
                            <li>
                                <a href="#" className={styles.socialLink}>
                                    <ion-icon name="logo-instagram"></ion-icon>
                                </a>
                            </li>
                            <li>
                                <a href="#" className={styles.socialLink}>
                                    <ion-icon name="logo-pinterest"></ion-icon>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <ul className={styles.footerList}>
                        <li>
                            <p className={styles.footerListTitle}>Contact Info</p>
                        </li>
                        <li>
                            <p className={styles.footerListItem}>+91 123 456 7890</p>
                        </li>
                        <li>
                            <p className={styles.footerListItem}>info@anuhirafaral.com</p>
                        </li>
                        <li>
                            <address className={styles.footerListItem}>Shop No. 15, MG Road, Mumbai, Maharashtra, 400101</address>
                        </li>
                    </ul>

                    <ul className={styles.footerList}>
                        <li>
                            <p className={styles.footerListTitle}>Opening Hours</p>
                        </li>
                        <li>
                            <p className={styles.footerListItem}>Monday-Sunday: 10:00 AM - 9:00 PM</p>
                        </li>
                    </ul>

                    <form action="#" className={styles.footerForm}>
                        <p className={styles.footerListTitle}>Book a Table</p>

                        <div className={styles.inputWrapper}>
                            <input type="text" name="full_name" required placeholder="Your Name" className={styles.inputField} />
                            <input type="email" name="email_address" required placeholder="Email" className={styles.inputField} />
                        </div>

                        <div className={styles.inputWrapper}>
                            <select name="total_person" className={styles.inputField}>
                                <option value="person">Person</option>
                                <option value="2 person">2 Person</option>
                                <option value="3 person">3 Person</option>
                                <option value="4 person">4 Person</option>
                                <option value="5 person">5 Person</option>
                            </select>

                            <input type="date" name="booking_date" className={styles.inputField} />
                        </div>

                        <textarea name="message" required placeholder="Message" className={styles.inputField}></textarea>
                        <button type="submit" className={styles.btn}>Book a Table</button>
                    </form>

                </div>
            </div>

            <div className={styles.footerBottom}>
                <div className={styles.container}>
                    <p className={styles.copyrightText}>
                        &copy; 2022 <a href="#" className={styles.copyrightLink}>Anuhira Faral</a> All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
