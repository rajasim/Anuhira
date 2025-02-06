import styles from './Banner.module.css';

const Banner = () => {
    return (
        <section className={`${styles.section} ${styles.sectionDivider} ${styles.gray} ${styles.banner}`}>
            <div className={styles.container}>

                <ul className={styles.bannerList}>

                    <li className={`${styles.bannerItem} ${styles.bannerLg}`}>
                        <div className={styles.bannerCard}>
                            <div className={styles.bannerItemContent}>
                                <p className={styles.bannerSubtitle}>New Arrival!</p>
                                <h3 className={styles.bannerTitle}>
                                    Exotic Flavors of Indian Cuisine Await You!
                                </h3>
                                <p className={styles.bannerText}>
                                    Dive into a culinary adventure featuring spicy vindaloo, rich kormas, and aromatic biryanis. Taste the tradition in every bite!
                                </p>
                                <button className={styles.btn}>Discover Now</button>
                            </div>
                        </div>
                    </li>

                    <li className={`${styles.bannerItem} ${styles.bannerSm}`}>
                        <div className={styles.bannerCard}>
                            <div className={styles.bannerItemContent}>
                                <h3 className={styles.bannerTitle}>Flavors of South India</h3>
                                <p className={styles.bannerText}>
                                    Experience the vibrant taste of dosas, idlis, and sambhar – a perfect blend of spice and tradition.
                                </p>
                                <button className={styles.btn}>Order Now</button>
                            </div>
                        </div>
                    </li>

                    <li className={`${styles.bannerItem} ${styles.bannerSm}`}>
                        <div className={styles.bannerCard}>
                            <div className={styles.bannerItemContent}>
                                <h3 className={styles.bannerTitle}>Royal North Indian</h3>
                                <p className={styles.bannerText}>
                                    Indulge in the regal taste of butter chicken, naan, and aromatic pulao, fit for royalty.
                                </p>
                                <button className={styles.btn}>Try Now</button>
                            </div>
                        </div>
                    </li>

                    <li className={`${styles.bannerItem} ${styles.bannerMd}`}>
                        <div className={styles.bannerCard}>
                            <div className={styles.bannerItemContent}>
                                <h3 className={styles.bannerTitle}>Vegetarian Delights</h3>
                                <p className={styles.bannerText}>
                                    Savor the best of Indian vegetarian cuisine with a variety of sabzis, lentil dals, and paneer specialties.
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
