import styles from './Blog.module.css';

const Blog = () => {
    return (
        <section className={`${styles.section} ${styles.sectionDivider} ${styles.white} ${styles.blog}`} id="blog">
            <div className={styles.container}>
                <p className={styles.sectionSubtitle}>Latest Blog Posts</p>

                <h2 className={styles.sectionTitle}>
                    This Is All About <span className={styles.span}>Indian Farali Foods</span>
                </h2>

                <p className={styles.sectionText}>
                    Farali food is specially prepared for fasting days, using ingredients that are allowed during fasting. It's tasty, nutritious, and perfect for detoxing.
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
                                        <ion-icon name="calendar-outline"></ion-icon>
                                        <time className={styles.metaInfo} datetime="2022-01-01">Jan 01 2022</time>
                                    </a>

                                    <a href="#" className={styles.cardMetaLink}>
                                        <ion-icon name="person-outline"></ion-icon>
                                        <p className={styles.metaInfo}>Ravi Kumar</p>
                                    </a>
                                </div>

                                <h3 className={styles.cardTitle}>
                                    <a href="#" className={styles.cardTitleLink}>Delicious Farali Sabudana Khichdi Recipe</a>
                                </h3>

                                <p className={styles.cardText}>
                                    Discover the rich and tasty recipe of Sabudana Khichdi, a popular dish made during fasting days, using sago, potatoes, and spices.
                                </p>

                                <a href="#" className={styles.btnLink}>
                                    <span>Read More</span>
                                    <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                                </a>
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
                                        <ion-icon name="calendar-outline"></ion-icon>
                                        <time className={styles.metaInfo} datetime="2022-01-01">Jan 01 2022</time>
                                    </a>

                                    <a href="#" className={styles.cardMetaLink}>
                                        <ion-icon name="person-outline"></ion-icon>
                                        <p className={styles.metaInfo}>Priya Mehta</p>
                                    </a>
                                </div>

                                <h3 className={styles.cardTitle}>
                                    <a href="#" className={styles.cardTitleLink}>Farali Dosa Recipe for Fasting Days</a>
                                </h3>

                                <p className={styles.cardText}>
                                    Learn how to make crispy and healthy Farali Dosa using gluten-free ingredients, perfect for your fasting routine.
                                </p>

                                <a href="#" className={styles.btnLink}>
                                    <span>Read More</span>
                                    <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                                </a>
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
                                        <ion-icon name="calendar-outline"></ion-icon>
                                        <time className={styles.metaInfo} datetime="2022-01-01">Jan 01 2022</time>
                                    </a>

                                    <a href="#" className={styles.cardMetaLink}>
                                        <ion-icon name="person-outline"></ion-icon>
                                        <p className={styles.metaInfo}>Ankit Sharma</p>
                                    </a>
                                </div>

                                <h3 className={styles.cardTitle}>
                                    <a href="#" className={styles.cardTitleLink}>How to Make Farali Khandvi</a>
                                </h3>

                                <p className={styles.cardText}>
                                    Enjoy the traditional Gujarati Farali Khandvi made with gram flour, perfect for your fasting meals.
                                </p>

                                <a href="#" className={styles.btnLink}>
                                    <span>Read More</span>
                                    <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                                </a>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>
        </section>
    );
};

export default Blog;
