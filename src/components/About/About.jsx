import styles from './About.module.css';

const About = () => {
    return (
        <section
            className={`${styles.section} ${styles.sectionDivider} ${styles.gray} ${styles.about}`}
            id="about"
        >
            <div className={styles.container}>
                <div className={styles.aboutContent}>

                    <h2 className={styles.sectionTitle}>
                        Caferio, Burgers, and Best Pizzas
                        <span className={styles.span}>in Town!</span>
                    </h2>

                    <p className={styles.sectionText}>
                        The restaurants in Hangzhou also catered to many northern Chinese who had fled south from Kaifeng during the Jurchen invasion of the 1120s, while it is also known that many restaurants were run by families.
                    </p>

                    <ul className={styles.aboutList}>
                        <li className={styles.aboutItem}>
                            <ion-icon name="checkmark-outline"></ion-icon>
                            <span className={styles.span}>Delicious &amp; Healthy Foods</span>
                        </li>

                        <li className={styles.aboutItem}>
                            <ion-icon name="checkmark-outline"></ion-icon>
                            <span className={styles.span}>Spacific Family And Kids Zone</span>
                        </li>

                        <li className={styles.aboutItem}>
                            <ion-icon name="checkmark-outline"></ion-icon>
                            <span className={styles.span}>Music &amp; Other Facilities</span>
                        </li>

                        <li className={styles.aboutItem}>
                            <ion-icon name="checkmark-outline"></ion-icon>
                            <span className={styles.span}>Fastest Food Home Delivery</span>
                        </li>
                    </ul>

                    <button className={`${styles.btn} ${styles.btnHover}`}>Order Now</button>

                </div>
            </div>
        </section>
    );
};

export default About;
