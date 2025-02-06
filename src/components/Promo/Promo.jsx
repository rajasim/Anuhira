import React, { useEffect, useState } from 'react';
import styles from './Promo.module.css';

const initialPromoData = [
    {
        id: 1,
        title: 'Chakli Delight',
        description: 'Savor the crispy, spicy taste of our freshly made Chakli!',
        details: [
            'Handcrafted with traditional spices.',
            'Perfect for tea time or as a snack.',
            'Limited time offer – try it now!'
        ]
    },
    {
        id: 2,
        title: 'Bhakarwadi Bonanza',
        description: 'Enjoy the sweet and spicy fusion in every bite of Bhakarwadi!',
        details: [
            'Rolls packed with a unique blend of flavors.',
            'A must-try traditional Indian snack.',
            'Available for a limited period.'
        ]
    },
    {
        id: 3,
        title: 'Khandvi Magic',
        description: 'Experience the melt-in-your-mouth goodness of Khandvi!',
        details: [
            'Soft, spiced, and rolled to perfection.',
            'Served with a tangy tempering.',
            'Freshly prepared daily.'
        ]
    },
    {
        id: 4,
        title: 'Dhokla Treat',
        description: 'Relish the fluffy and tangy taste of our authentic Dhokla!',
        details: [
            'Light and steamed to perfection.',
            'Served with a side of green chutney.',
            'Ideal for a healthy snack.'
        ]
    }
];

const Promo = () => {
    const [promoData, setPromoData] = useState(initialPromoData);

    useEffect(() => {
        // Function to fetch a random food image from the Foodish API
        const fetchFoodImage = async () => {
            try {
                const response = await fetch('https://foodish-api.herokuapp.com/api/');
                if (!response.ok) {
                    throw new Error('Failed to fetch image');
                }
                const data = await response.json();
                return data.image;
            } catch (error) {
                console.error('Error fetching food image:', error);
                // Fallback image URL if the API call fails
                return 'https://via.placeholder.com/300?text=Food';
            }
        };

        // Fetch an image for each promo item
        const loadImages = async () => {
            const updatedPromos = await Promise.all(
                initialPromoData.map(async (promo) => {
                    const imageUrl = await fetchFoodImage();
                    return { ...promo, imageUrl };
                })
            );
            setPromoData(updatedPromos);
        };

        loadImages();
    }, []);

    return (
        <div className={styles.promoContainer}>
            {promoData.map((promo) => (
                <div key={promo.id} className={styles.promoCard}>
                    <div className={styles.imageWrapper}>
                        {promo.imageUrl ? (
                            <img src={promo.imageUrl} alt={promo.title} className={styles.promoImage} />
                        ) : (
                            <div className={styles.loader}>Loading...</div>
                        )}
                    </div>
                    <div className={styles.cardContent}>
                        <h3 className={styles.cardTitle}>{promo.title}</h3>
                        <p className={styles.cardDescription}>{promo.description}</p>
                        <ul className={styles.detailsList}>
                            {promo.details.map((detail, index) => (
                                <li key={index} className={styles.detailItem}>{detail}</li>
                            ))}
                        </ul>
                        <button className={styles.btn}>Order Now</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Promo;
