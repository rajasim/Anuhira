import styles from './Cta.module.css';

const Cta = () => {
    return (
        <section
            className={`${styles.section} ${styles.sectionDivider} ${styles.white} ${styles.cta}`}
            id="cta"
        >
            <div className={styles.container}>
                <div className={styles.ctaContent}>
                    <h2 className={styles.sectionTitle}>
                        Savor the Flavors of India with
                        <span className={styles.span}>Authentic Street Food!</span>
                    </h2>
                    <p className={styles.sectionText}>
                        Experience the vibrant taste of India—from spicy chaats to sizzling pakoras. Each bite is a journey to the heart of Indian cuisine, crafted with tradition and passion.
                    </p>
                    <button className={`${styles.btn} ${styles.btnHover}`}>Order Now</button>
                </div>
            </div>
        </section>
    );
};

export default Cta;
