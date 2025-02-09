import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div
        className={styles.footerTop}
        style={{ backgroundImage: 'url("./assets/images/footer-dark-bg.png")' }}
      >
        <div className={styles.container}>
          <div className={styles.footerBrand}>
            <a href="#" className={styles.logo}>
              Anuhira <span className={styles.span}>Faral</span>
            </a>
            <p className={styles.footerText}>
              Delivering the true essence of Indian Faral with a modern twist.
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
              <p className={styles.footerListItem}>+919822341010</p>
            </li>
            <li>
              <p className={styles.footerListItem}>info@anuhirafaral.com</p>
            </li>
            <li>
              <address className={styles.footerListItem}>
                Shahu Corner, Seva Lodge, Ichalkaranji, Maharashtra 416115
              </address>
            </li>
          </ul>

          <ul className={styles.footerList}>
            <li>
              <p className={styles.footerListTitle}>Opening Hours</p>
            </li>
            <li>
              <p className={styles.footerListItem}>
                Mon - Sun: 10:00 AM - 9:00 PM
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.container}>
          <p className={styles.copyrightText}>
            &copy; 2025{" "}
            <a href="#" className={styles.copyrightLink}>
              Anuhira
            </a>{" "}
            | All Rights Reserved. | Made with 💖 By Sourabh & ABM Group
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
