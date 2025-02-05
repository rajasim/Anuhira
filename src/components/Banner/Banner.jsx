import styles from './Banner.module.css';

const Banner = () => {
    return (
        <section className={`${styles.section} ${styles.sectionDivider} ${styles.gray} ${styles.banner}`}>
            <div className={styles.container}>

                <ul className={styles.bannerList}>

                    <li className={`${styles.bannerItem} ${styles.bannerLg}`}>
                        <div className={styles.bannerCard}>
                            <div className={styles.bannerItemContent}>
                                <p className={styles.bannerSubtitle}>50% Off Now!</p>
                                <h3 className={styles.bannerTitle}>Authentic Indian Street Food at Half Price!</h3>
                                <p className={styles.bannerText}>Enjoy the vibrant flavors of India—spicy chaats, sizzling pakoras, and more, all for 50% off this week only!</p>
                                <button className={styles.btn}>Order Now</button>
                            </div>
                        </div>
                    </li>

                    <li className={`${styles.bannerItem} ${styles.bannerSm}`}>
                        <div className={styles.bannerCard}>
                            <div className={styles.bannerItemContent}>
                                <h3 className={styles.bannerTitle}>Savor the Taste of India</h3>
                                <p className={styles.bannerText}>Delicious curries and tandoori delights await you—order now and enjoy 50% off!</p>
                                <button className={styles.btn}>Order Now</button>
                            </div>
                        </div>
                    </li>

                    <li className={`${styles.bannerItem} ${styles.bannerSm}`}>
                        <div className={styles.bannerCard}>
                            <div className={styles.bannerItemContent}>
                                <h3 className={styles.bannerTitle}>Spicy Street Snacks</h3>
                                <p className={styles.bannerText}>Taste the heat with our spicy Indian snacks—get 50% off today!</p>
                                <button className={styles.btn}>Order Now</button>
                            </div>
                        </div>
                    </li>

                    <li className={`${styles.bannerItem} ${styles.bannerMd}`}>
                        <div className={styles.bannerCard}>
                            <div className={styles.bannerItemContent}>
                                <h3 className={styles.bannerTitle}>Tandoori Delights</h3>
                                <p className={styles.bannerText}>Indulge in the smoky goodness of tandoori dishes—50% off this week!</p>
                                <button className={styles.btn}>Order Now</button>
                            </div>
                        </div>
                    </li>

                </ul>

            </div>
        </section>
    );
};

export default Banner;
