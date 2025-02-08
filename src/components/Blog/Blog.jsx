import styles from "./Blog.module.css";

const Blog = () => {
  return (
    <section
      className={`${styles.section} ${styles.sectionDivider} ${styles.white} ${styles.blog}`}
      id="blog"
    >
      <div className={styles.container}>
        <p className={styles.sectionSubtitle}>Latest Blog Posts</p>

        <h2 className={styles.sectionTitle}>
          Explore <span className={styles.highlight}>Indian Farali Foods</span>
        </h2>

        <p className={styles.sectionText}>
          Discover the authentic recipes and vibrant flavors of traditional
          Indian fasting cuisine—crafted with care for your detox and
          nourishment.
        </p>

        <ul className={styles.blogList}>
          <li>
            <div className={styles.blogCard}>
              <div className={styles.cardBanner}>
                <div className={styles.badge}>Farali</div>
              </div>

              <div className={styles.cardContent}>
                <div className={styles.cardMetaWrapper}>
                  <a href="#" className={styles.cardMetaLink}>
                    <span className={styles.icon}>📅</span>
                    <time className={styles.metaInfo} dateTime="2022-01-01">
                      Jan 01 2022
                    </time>
                  </a>

                  <a href="#" className={styles.cardMetaLink}>
                    <span className={styles.icon}>👤</span>
                    <p className={styles.metaInfo}>Ravi Kumar</p>
                  </a>
                </div>

                <h3 className={styles.cardTitle}>
                  <a href="#" className={styles.cardTitleLink}>
                    Traditional Sabudana Chiwada for Fasting
                  </a>
                </h3>

                <p className={styles.cardText}>
                  Embrace the simplicity and flavor of Sabudana Khichdi—a
                  nutritious dish perfect for fasting days, combining sago,
                  potatoes, and a hint of spice.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className={styles.blogCard}>
              <div className={styles.cardBanner}>
                <div className={styles.badge}>Farali</div>
              </div>

              <div className={styles.cardContent}>
                <div className={styles.cardMetaWrapper}>
                  <a href="#" className={styles.cardMetaLink}>
                    <span className={styles.icon}>📅</span>
                    <time className={styles.metaInfo} dateTime="2022-02-15">
                      Feb 15 2022
                    </time>
                  </a>

                  <a href="#" className={styles.cardMetaLink}>
                    <span className={styles.icon}>👤</span>
                    <p className={styles.metaInfo}>Priya Mehta</p>
                  </a>
                </div>

                <h3 className={styles.cardTitle}>
                  <a href="#" className={styles.cardTitleLink}>
                    Gluten-Free Farali Pohe Recipe
                  </a>
                </h3>

                <p className={styles.cardText}>
                  Learn the art of crafting crispy, gluten-free dosas using
                  alternative flours and wholesome ingredients—perfect for your
                  fasting routine.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className={styles.blogCard}>
              <div className={styles.cardBanner}>
                <div className={styles.badge}>Farali</div>
              </div>

              <div className={styles.cardContent}>
                <div className={styles.cardMetaWrapper}>
                  <a href="#" className={styles.cardMetaLink}>
                    <span className={styles.icon}>📅</span>
                    <time className={styles.metaInfo} dateTime="2022-03-10">
                      Mar 10 2022
                    </time>
                  </a>

                  <a href="#" className={styles.cardMetaLink}>
                    <span className={styles.icon}>👤</span>
                    <p className={styles.metaInfo}>Ankit Sharma</p>
                  </a>
                </div>

                <h3 className={styles.cardTitle}>
                  <a href="#" className={styles.cardTitleLink}>
                    Easy Farali Khandvi for Detox Days
                  </a>
                </h3>

                <p className={styles.cardText}>
                  Master the delicate art of making soft and tangy Khandvi—a
                  detoxifying Gujarati snack made with gram flour and tempered
                  with spices.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Blog;
