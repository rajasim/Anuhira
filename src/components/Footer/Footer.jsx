import styles from "./Footer.module.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer} aria-label="Website footer">
      <div className={styles.footerTop}>
        <div className={styles.container}>
          {/* Brand Section */}
          <section
            className={styles.brandSection}
            aria-label="Company information"
          >
            <h2 className={styles.logo}>
              <a href="/" className={styles.logoLink}>
                Anuhira <span className={styles.logoHighlight}>Faral</span>
              </a>
            </h2>
            <p className={styles.tagline}>
              Delivering the true essence of Indian Faral with a modern twist.
            </p>

            {/* Social Links */}
            {/* <div className={styles.socials} aria-label="Social media links">
              <a
                href="https://facebook.com"
                className={styles.socialLink}
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                className={styles.socialLink}
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                className={styles.socialLink}
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://pinterest.com"
                className={styles.socialLink}
                aria-label="Pinterest"
              >
                <FaPinterest />
              </a>
            </div> */}
          </section>

          {/* Navigation Sections */}
          <div className={styles.footerColumns}>
            {/* Quick Links */}
            {/* <nav aria-label="Quick links">
              <h3 className={styles.columnTitle}>Quick Links</h3>
              <ul className={styles.linkList}>
                <li>
                  <a href="/" className={styles.linkItem}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className={styles.linkItem}>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/products" className={styles.linkItem}>
                    Products
                  </a>
                </li>
                <li>
                  <a href="/contact" className={styles.linkItem}>
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav> */}

            {/* Contact Information */}
            <section aria-label="Contact information">
              <h3 className={styles.columnTitle}>Contact Info</h3>
              <address className={styles.contactInfo}>
                <p className={styles.contactItem}>
                  <a href="tel:+919822341010" className={styles.contactLink}>
                    +91 98223 41010
                  </a>
                </p>
                <p className={styles.contactItem}>
                  <a
                    href="mailto:info@anuhirafaral.com"
                    className={styles.contactLink}
                  >
                    info@anuhirafaral.com
                  </a>
                </p>
                <p className={styles.contactItem}>
                  Shahu Corner, Seva Lodge,
                  <br />
                  Ichalkaranji, Maharashtra
                  <br />
                  416115
                </p>
              </address>
            </section>

            {/* Opening Hours */}
            <section aria-label="Opening hours">
              <h3 className={styles.columnTitle}>Opening Hours</h3>
              <p className={styles.openingHours}>
                Mon - Sun:
                <br />
                10:00 AM - 9:00 PM
              </p>
            </section>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className={styles.footerBottom}>
        <div className={styles.container}>
          <p className={styles.copyright}>
            &copy; 2025{" "}
            <a href="/" className={styles.copyrightLink}>
              Anuhira Faral
            </a>{" "}
            | All Rights Reserved. | Made  By   ABM Group
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
