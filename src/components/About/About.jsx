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
            Experience the essence of India with our carefully curated menu
            featuring authentic recipes, rich spices, and fresh ingredients.
            Every dish is crafted to perfection, blending tradition with modern
            culinary artistry—perfect for those who appreciate the finer things
            in life.
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
