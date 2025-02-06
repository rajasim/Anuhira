import styles from './Hero.module.css';
import { useEffect } from 'react';

const Hero = () => {
    useEffect(() => {
        // Add any scroll-based animations here if needed
    }, []);

    return (
        <section
            className={styles.hero}
            id="home"
        >
            <div className={styles.overlay}></div>

            <div className={styles.container}>
                <div className={styles.heroContent}>
                    <p
                        className={`${styles.heroSubtitle} ${styles.fadeInUp}`}
                        data-delay="0.2s"
                    >
                        Taste the Finest of
                    </p>

                    <h1 className={`${styles.heroTitle} ${styles.fadeInUp}`} data-delay="0.4s">
                        Authentic Indian <span className={styles.highlight}>Farsan</span>
                    </h1>

                    <p
                        className={`${styles.heroText} ${styles.fadeInUp}`}
                        data-delay="0.6s"
                    >
                        Crafted with generations-old recipes using premium ingredients. Experience the perfect blend of crispness, spices, and tradition in every bite.
                    </p>

                    <button
                        className={`${styles.btn} ${styles.fadeInUp}`}
                        data-delay="0.8s"
                    >
                        Savour the Tradition
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;