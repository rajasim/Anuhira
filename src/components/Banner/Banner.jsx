import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <section
      className={`${styles.section} ${styles.sectionDivider} ${styles.gray} ${styles.banner}`}
    >
      <div className={styles.container}>
        <ul className={styles.bannerList}>
          <li className={`${styles.bannerItem} ${styles.bannerLg}`}>
            <div className={styles.bannerCard}>
              {/* Banner image from Unsplash */}
              <img
                src="/phalahar.jpg"
                alt="Exotic Indian Cuisine"
                className={styles.bannerImg}
              />
              <div className={styles.bannerItemContent}>
                <p className={styles.bannerSubtitle}>New Arrival!</p>
                <h3 className={styles.bannerTitle}>
                  Celebrate Diwali with Authentic Festive Snacks!
                </h3>
                <p className={styles.bannerText}>
                  Explore our curated collection of traditional delights—from
                  crispy chakli and spicy bhakarwadi to crunchy papad and more.
                  Enjoy a burst of festive flavor in every bite!
                </p>

                <button className={styles.btn}>Discover Now</button>
              </div>
            </div>
          </li>

          <li className={`${styles.bannerItem} ${styles.bannerMd}`}>
            <div className={styles.bannerCard}>
              <img
                src="/booking.jpg"
                alt="Vegetarian Delights"
                className={styles.bannerImg}
              />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Banner;
