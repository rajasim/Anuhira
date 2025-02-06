import React from 'react';
import styles from './Promo.module.css';

const promoData = [
    {
        id: 1,
        title: 'Chakli Delight',
        description: 'Savor the crispy, spicy taste of our freshly made Chakli!',
        details: [
            'Handcrafted with traditional spices.',
            'Perfect for tea time or as a snack.',
            'Limited time offer – try it now!'
        ],
        imageUrl: '/chakli.png'
    },
    {
        id: 2,
        title: 'Bhakarwadi Bonanza',
        description: 'Enjoy the sweet and spicy fusion in every bite of Bhakarwadi!',
        details: [
            'Rolls packed with a unique blend of flavors.',
            'A must-try traditional Indian snack.',
            'Available for a limited period.'
        ],
        imageUrl: '/bhakarwadi.jpg'
    },
    {
        id: 3,
        title: 'Khandvi Magic',
        description: 'Experience the melt-in-your-mouth goodness of Khandvi!',
        details: [
            'Soft, spiced, and rolled to perfection.',
            'Served with a tangy tempering.',
            'Freshly prepared daily.'
        ],
        imageUrl: '/khandavi.png'
    },
    {
        id: 4,
        title: 'Dhokla Treat',
        description: 'Relish the fluffy and tangy taste of our authentic Dhokla!',
        details: [
            'Light and steamed to perfection.',
            'Served with a side of green chutney.',
            'Ideal for a healthy snack.'
        ],
        imageUrl: '/dhokala.jpg'
    }
];

const Promo = () => {
    return (
        <div className={styles.promoContainer}>
            {promoData.map((promo) => (
                <div key={promo.id} className={styles.promoCard}>
                    <div className={styles.imageWrapper}>
                        <img
                            src={promo.imageUrl}
                            alt={promo.title}
                            className={styles.promoImage}
                        />
                    </div>
                    <div className={styles.cardContent}>
                        <h3 className={styles.cardTitle}>{promo.title}</h3>
                        <p className={styles.cardDescription}>{promo.description}</p>
                        <ul className={styles.detailsList}>
                            {promo.details.map((detail, index) => (
                                <li key={index} className={styles.detailItem}>
                                    {detail}
                                </li>
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
