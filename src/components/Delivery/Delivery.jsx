import React, { useState, useEffect } from 'react';
import styles from './Delivery.module.css';

const Delivery = () => {
    const [images, setImages] = useState({
        banner: '',
        deliveryBoy: '',
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // For demonstration, we fetch random images from Unsplash with specific query terms.
        // In production, you might use a custom API endpoint with proper API keys.
        const fetchImages = async () => {
            try {
                // Unsplash random image endpoints (they return a redirect URL for the actual image)
                const bannerResponse = await fetch('https://source.unsplash.com/700x602/?indian,food');
                const deliveryBoyResponse = await fetch('https://source.unsplash.com/1000x880/?delivery');

                setImages({
                    banner: bannerResponse.url,
                    deliveryBoy: deliveryBoyResponse.url,
                });
                setLoading(false);
            } catch (err) {
                console.error('Error fetching images:', err);
                setError('Failed to load images');
                setLoading(false);
            }
        };

        fetchImages();
    }, []);

    if (loading) {
        return <div className={styles.loader}>Loading images...</div>;
    }

    if (error) {
        return <div className={styles.error}>{error}</div>;
    }

    return (
        <section
            className={`
        ${styles.section} 
        ${styles.premiumSection} 
        ${styles.orangeTheme} 
        ${styles.indianFlair}
      `}
        >
            <div className={styles.container}>
                <div className={styles.deliveryContent}>
                    <h2 className={styles.sectionTitle}>
                        Exquisite Delivery on <span className={styles.highlight}>Right Time</span>
                    </h2>
                    <p className={styles.sectionText}>
                        Experience a premium delivery service that marries modern precision with the rich elegance of Indian heritage.
                        Every detail is designed to delight—from vibrant saffron tones to intricate motifs inspired by traditional Indian art.
                    </p>
                    <button className={`${styles.btn} ${styles.btnHover}`}>Order Now</button>
                </div>

                <figure className={styles.deliveryBanner}>
                    <img
                        src={images.banner}
                        width="700"
                        height="602"
                        loading="lazy"
                        alt="Elegant backdrop with Indian motifs"
                        className={styles.w100}
                    />
                    <img
                        src={images.deliveryBoy}
                        width="1000"
                        height="880"
                        loading="lazy"
                        alt="Delivery person with Indian flair"
                        className={`${styles.w100} ${styles.deliveryImg}`}
                        data-delivery-boy
                    />
                </figure>
            </div>
        </section>
    );
};

export default Delivery;
