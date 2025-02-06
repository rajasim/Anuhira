import styles from './Cta.module.css';

const Cta = () => {
    return (
        <section
            className={`${styles.section} ${styles.sectionDivider} ${styles.cta} ${styles.orangeBackground}`}
            id="cta"
        >
            <div className={styles.container}>
                <div className={styles.ctaContent}>
                    <h2 className={styles.sectionTitle}>
                        Indulge in a Regal Feast of Authentic Indian Street Food
                        <span className={styles.span}>Experience Culinary Royalty</span>
                    </h2>
                    <p className={styles.sectionText}>
                        Embark on a gastronomic journey where tradition meets sophistication.
                        Our curated selection of iconic Indian street food transforms everyday meals into unforgettable celebrations.
                        Savor the exquisite blend of spices and aromas—from our signature chaats to sumptuous pakoras—that capture the essence of India's rich culinary heritage.
                    </p>
                    <p className={styles.additionalText}>
                        Discover an immersive dining experience with our hand-picked recipes, perfected over generations.
                        Whether you choose to dine in our elegantly styled ambience or opt for our premium home delivery service,
                        every bite promises a symphony of flavors and a luxurious culinary delight.
                    </p>
                    <button className={`${styles.btn} ${styles.btnHover}`}>Order Now</button>
                </div>
            </div>
        </section>
    );
};

export default Cta;
