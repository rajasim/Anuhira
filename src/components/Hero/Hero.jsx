import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero} id="home">
      {/* Background overlay with blur effect */}
      <div className={styles.overlay}></div>

      {/* Content container with Flexbox layout */}
      <div className={styles.container}>
        {/* Text content on the left */}
        <div className={styles.heroTextContainer}>
          <p
            className={`${styles.heroSubtitle} ${styles.fadeInUp}`}
            style={{ animationDelay: "0.2s" }}
          >
            Taste the Finest of
          </p>

          <h1
            className={`${styles.heroTitle} ${styles.fadeInUp}`}
            style={{ animationDelay: "0.4s" }}
          >
            Authentic Indian <span className={styles.highlight}>Farsan</span>
          </h1>

          <p
            className={`${styles.heroText} ${styles.fadeInUp}`}
            style={{ animationDelay: "0.6s" }}
          >
            Crafted with generations-old recipes using premium ingredients.
            Experience the perfect blend of crispness, spices, and tradition in
            every bite.
          </p>

          <button
            className={`${styles.btn} ${styles.fadeInUp}`}
            style={{ animationDelay: "0.8s" }}
          >
            Savor the Tradition
          </button>
        </div>

        {/* Image on the right */}
        <div className={styles.heroImageContainer}>
          <img
            src="/heroimg.jpg"
            alt="Farsan Dish"
            className={styles.heroImage}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
