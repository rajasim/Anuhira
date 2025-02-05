import styles from './Hero.module.css'; // Import CSS module

const Hero = () => {
    return (
        <section
            className={styles.hero}
            id="home"
            style={{ backgroundColor: '#f7f7f7' }} // Set a background color
        >
            <div className={styles.container}>

                <div className={styles.heroContent}>
                    <p className={styles.heroSubtitle}>Taste the Best of</p>

                    <h2 className={`${styles.h1} ${styles.heroTitle}`}>Authentic Indian Farsan!</h2>

                    <p className={styles.heroText}>
                        Relish the most popular Indian snacks, freshly made with the finest ingredients. From crispy samosas to spicy chivda, we have it all!
                    </p>

                    <button className={styles.btn}>Order Now</button>
                </div>

            </div>
        </section>
    );
};

export default Hero;
