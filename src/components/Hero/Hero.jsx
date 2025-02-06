import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero} id="home">
            {/* Background overlay with blur effect */}
            <div className={styles.overlay}></div>

            {/* Content container */}
            <div className={styles.container}>
                <div className={styles.heroContent}>
                    <p className={`${styles.heroSubtitle} ${styles.fadeInUp}`} style={{ animationDelay: '0.2s' }}>
                        Taste the Finest of
                    </p>

                    <h1 className={`${styles.heroTitle} ${styles.fadeInUp}`} style={{ animationDelay: '0.4s' }}>
                        Authentic Indian <span className={styles.highlight}>Farsan</span>
                    </h1>

                    <p className={`${styles.heroText} ${styles.fadeInUp}`} style={{ animationDelay: '0.6s' }}>
                        Crafted with generations-old recipes using premium ingredients. Experience the perfect blend of crispness, spices, and tradition in every bite.
                    </p>

                    <button className={`${styles.btn} ${styles.fadeInUp}`} style={{ animationDelay: '0.8s' }}>
                        Savour the Tradition
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
