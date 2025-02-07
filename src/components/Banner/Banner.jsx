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

          <li className={`${styles.bannerItem} ${styles.bannerSm}`}>
            <div className={styles.bannerCard}>
              <div className={styles.bannerItemContent}>
                <h3 className={styles.bannerTitle}>Delights of Gujarat</h3>
                <p className={styles.bannerText}>
                  Savor the authentic taste of Gujarati snacks like dhokla,
                  khandvi, and fafda – a perfect blend of sweet, savory, and
                  spice that captures the vibrant culinary heritage of Gujarat.
                </p>
                <button className={styles.btn}>Order Now</button>
              </div>
            </div>
          </li>

          <li className={`${styles.bannerItem} ${styles.bannerSm}`}>
            <div className={styles.bannerCard}>
              <div className={styles.bannerItemContent}>
                <h3 className={styles.bannerTitle}>
                  South Indian Snack Fiesta
                </h3>
                <p className={styles.bannerText}>
                  Savor the authentic crunch of crispy murukku, delectable medu
                  vada, and zesty banana chips – a true celebration of South
                  Indian snack traditions.
                </p>
                <button className={styles.btn}>Order Now</button>
              </div>
            </div>
          </li>

          <li className={`${styles.bannerItem} ${styles.bannerMd}`}>
            <div className={styles.bannerCard}>
              {/* Banner image from Unsplash */}
              <img
                src="/booking.jpg"
                alt="Vegetarian Delights"
                className={styles.bannerImg}
              />
              <div className={styles.bannerItemContent}>
                <h3 className={styles.bannerTitle}>Vegetarian Delights</h3>
                <p className={styles.bannerText}>
                  Savor the best of Indian vegetarian cuisine with a variety of
                  sabzis, lentil dals, and paneer specialties.
                </p>
                <button className={styles.btn}>Explore Menu</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Banner;
