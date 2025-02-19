import styles from "./About.module.css";
import mainlogo from "/mainlogo.jpg";
import { redirectToWhatsApp } from "../../services/wpRedirect";

const About = () => {
  return (
    <section
      className={`${styles.section} ${styles.sectionDivider} ${styles.orange} ${styles.about}`}
      id="about"
    >
      <img
        style={{ borderRadius: "10px", marginBottom: "20px", height: "300px" }}
        src={mainlogo}
        alt=""
      />
      <div className={styles.container}>
        <div className={styles.aboutContent}>
          <h2 className={styles.sectionTitle}>
            Premium Indian Delicacies
            <span className={styles.span}>A Royal Feast of Flavors</span>
          </h2>

          <p className={styles.sectionText}>
          Anuhira Mahila Gruh Udyog was founded in 2001 , as a humble home-based fryum manufacturer. Today, it stands proudly as one of the most beloved shops for fryums, namkeen, and sweets in Ichalkaranji. Here, every bite carries the warmth and love of a mother's touch.
          </p>
          <p className={styles.sectionText}>
          Our journey has been marked by dedication, quality, and the unwavering trust of our valued customers. Anuhira Mahila Gruh Udyog is a testament to our commitment to excellence and our passion for bringing joy and flavor to your life.

          </p>
          <p className={styles.sectionText}>
          Our efforts and achievements have been recognized over the years:

          </p>
          <p className={styles.sectionText}>
          In 2013 , we were honored with the Utkrusht Mahila Udyojak award, celebrating our outstanding contributions as a women-led enterprise.

          </p>
          <p className={styles.sectionText}>
          In 2024 , we received the prestigious Vyavsay Gourav Puraskar , acknowledging our continued excellence and innovation in the industry.

          </p>
          <p className={styles.sectionText}>
          Welcome to Anuhira Mahila Gruh Udyog , where tradition meets taste, and every product is crafted with care and love. Thank you for being a part of our journey.
          </p>

          <ul className={styles.aboutList}>
            <li className={styles.aboutItem}>
              <ion-icon name="checkmark-outline"></ion-icon>
              <span className={styles.span}>
                Exquisite &amp; Authentic Flavors
              </span>
            </li>

            <li className={styles.aboutItem}>
              <ion-icon name="checkmark-outline"></ion-icon>
              <span className={styles.span}>
                Handcrafted Recipes Passed Down Through Generations
              </span>
            </li>

            <li className={styles.aboutItem}>
              <ion-icon name="checkmark-outline"></ion-icon>
              <span className={styles.span}>
                Ambience Inspired by Royal Indian Heritage
              </span>
            </li>

            <li className={styles.aboutItem}>
              <ion-icon name="checkmark-outline"></ion-icon>
              <span className={styles.span}>
                Swift &amp; Elegant Home Delivery
              </span>
            </li>
          </ul>

          <button
            onClick={() => redirectToWhatsApp()}
            className={`${styles.btn} ${styles.btnHover}`}
          >
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
