import styles from './Delivery.module.css';

const Delivery = () => {
    return (
        <section className={`${styles.section} ${styles.sectionDivider} ${styles.gray} ${styles.delivery}`}>
            <div className={styles.container}>
                <div className={styles.deliveryContent}>
                    <h2 className={styles.sectionTitle}>
                        A Moment of Delivery On <span className={styles.span}>Right Time</span> & Place
                    </h2>
                    <p className={styles.sectionText}>
                        The restaurants in Hangzhou also catered to many northern Chinese who had fled south from Kaifeng during
                        the Jurchen invasion of the 1120s, while it is also known that many restaurants were run by families.
                    </p>
                    <button className={`${styles.btn} ${styles.btnHover}`}>Order Now</button>
                </div>

                <figure className={styles.deliveryBanner}>
                    <img
                        src="./assets/images/delivery-banner-bg.png"
                        width="700"
                        height="602"
                        loading="lazy"
                        alt="clouds"
                        className={styles.w100}
                    />
                    <img
                        src="./assets/images/delivery-boy.svg"
                        width="1000"
                        height="880"
                        loading="lazy"
                        alt="delivery boy"
                        className={`${styles.w100} ${styles.deliveryImg}`}
                        data-delivery-boy
                    />
                </figure>
            </div>
        </section>
    );
};

export default Delivery;
