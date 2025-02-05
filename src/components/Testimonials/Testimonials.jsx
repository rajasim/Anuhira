import styles from './Testimonials.module.css';

const Testimonials = () => {
    return (
        <section className={`${styles.section} ${styles.sectionDivider} ${styles.white} ${styles.testi}`}>
            <div className={styles.container}>

                <p className={styles.sectionSubtitle}>Testimonials</p>

                <h2 className={styles.sectionTitle}>
                    Our Customers <span className={styles.span}>Reviews</span>
                </h2>

                <p className={styles.sectionText}>
                    Food is any substance consumed to provide nutritional support for an organism.
                </p>

                <ul className={`${styles.testiList} ${styles.hasScrollbar}`}>

                    <li className={styles.testiItem}>
                        <div className={styles.testiCard}>

                            <div className={styles.profileWrapper}>

                                <figure className={styles.avatar}>
                                    <img src="./assets/images/avatar-1.jpg" width="80" height="80" loading="lazy" alt="Robert William" />
                                </figure>

                                <div>
                                    <h3 className={styles.testiName}>Robert William</h3>
                                    <p className={styles.testiTitle}>CEO Kingfisher</p>
                                </div>

                            </div>

                            <blockquote className={styles.testiText}>
                                "I would be lost without restaurant. I would like to personally thank you for your outstanding product."
                            </blockquote>

                            <div className={styles.ratingWrapper}>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                            </div>

                        </div>
                    </li>

                    <li className={styles.testiItem}>
                        <div className={styles.testiCard}>

                            <div className={styles.profileWrapper}>

                                <figure className={styles.avatar}>
                                    <img src="./assets/images/avatar-2.jpg" width="80" height="80" loading="lazy" alt="Thomas Josef" />
                                </figure>

                                <div>
                                    <h3 className={styles.testiName}>Thomas Josef</h3>
                                    <p className={styles.testiTitle}>CEO Getforce</p>
                                </div>

                            </div>

                            <blockquote className={styles.testiText}>
                                "I would be lost without restaurant. I would like to personally thank you for your outstanding product."
                            </blockquote>

                            <div className={styles.ratingWrapper}>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                            </div>

                        </div>
                    </li>

                    <li className={styles.testiItem}>
                        <div className={styles.testiCard}>

                            <div className={styles.profileWrapper}>

                                <figure className={styles.avatar}>
                                    <img src="./assets/images/avatar-3.jpg" width="80" height="80" loading="lazy" alt="Charles Richard" />
                                </figure>

                                <div>
                                    <h3 className={styles.testiName}>Charles Richard</h3>
                                    <p className={styles.testiTitle}>CEO Angela</p>
                                </div>

                            </div>

                            <blockquote className={styles.testiText}>
                                "I would be lost without restaurant. I would like to personally thank you for your outstanding product."
                            </blockquote>

                            <div className={styles.ratingWrapper}>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                            </div>

                        </div>
                    </li>

                </ul>

            </div>
        </section>
    );
};

export default Testimonials;
