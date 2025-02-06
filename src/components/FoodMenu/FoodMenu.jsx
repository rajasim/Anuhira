import React, { useState } from 'react';
import styles from './FoodMenu.module.css';

// Data for Indian Gharal (homestyle) fare
const menuItems = [
    {
        id: 1,
        category: "Breakfast",
        discount: "-10%",
        title: "Aloo Paratha",
        price: "35.00",
        originalPrice: "40.00",
        rating: 5,
        imageUrl: "https://source.unsplash.com/featured/?aloo-paratha"
    },
    {
        id: 2,
        category: "Lunch",
        discount: "-15%",
        title: "Rajma Chawal",
        price: "50.00",
        originalPrice: "60.00",
        rating: 5,
        imageUrl: "https://source.unsplash.com/featured/?rajma-chawal"
    },
    {
        id: 3,
        category: "Dinner",
        discount: "-20%",
        title: "Dal Makhani",
        price: "65.00",
        originalPrice: "80.00",
        rating: 5,
        imageUrl: "https://source.unsplash.com/featured/?dal-makhani"
    },
    {
        id: 4,
        category: "Snacks",
        discount: "-10%",
        title: "Samosa",
        price: "20.00",
        originalPrice: "25.00",
        rating: 5,
        imageUrl: "https://source.unsplash.com/featured/?samosa"
    },
    {
        id: 5,
        category: "Sweets",
        discount: "-5%",
        title: "Gulab Jamun",
        price: "30.00",
        originalPrice: "35.00",
        rating: 5,
        imageUrl: "https://source.unsplash.com/featured/?gulab-jamun"
    },
    {
        id: 6,
        category: "Breakfast",
        discount: "-12%",
        title: "Poha",
        price: "25.00",
        originalPrice: "28.00",
        rating: 5,
        imageUrl: "https://source.unsplash.com/featured/?poha"
    }
];

// Filter options
const filterOptions = ["All", "Breakfast", "Lunch", "Dinner", "Snacks", "Sweets"];

const FoodMenu = () => {
    const [activeFilter, setActiveFilter] = useState("All");

    // Filter the menu items based on the active category
    const filteredMenuItems =
        activeFilter === "All"
            ? menuItems
            : menuItems.filter((item) => item.category === activeFilter);

    return (
        <section className={`${styles.section} ${styles.foodMenu}`} id="food-menu">
            <div className={styles.container}>
                <p className={styles.sectionSubtitle}>Authentic Gharal Indian Fare</p>
                <h2 className={styles.sectionTitle}>
                    Our Homestyle <span className={styles.span}>Menus</span>
                </h2>
                <p className={styles.sectionText}>
                    Indulge in the rich flavors of Indian home cooking—each dish is prepared with love, tradition, and the finest locally sourced ingredients.
                </p>

                <ul className={styles.filterList}>
                    {filterOptions.map((filter) => (
                        <li key={filter}>
                            <button
                                className={`${styles.filterBtn} ${activeFilter === filter ? styles.active : ""}`}
                                onClick={() => setActiveFilter(filter)}
                            >
                                {filter}
                            </button>
                        </li>
                    ))}
                </ul>

                <ul className={styles.foodMenuList}>
                    {filteredMenuItems.map((item) => (
                        <li key={item.id}>
                            <div className={styles.foodMenuCard}>
                                <div className={styles.cardBanner}>
                                    <img src={item.imageUrl} alt={item.title} className={styles.cardImage} />
                                    <div className={styles.badge}>{item.discount}</div>
                                    <button className={`${styles.btn} ${styles.foodMenuBtn}`}>Order Now</button>
                                </div>
                                <div className={styles.wrapper}>
                                    <p className={styles.category}>{item.category}</p>
                                    <div className={styles.ratingWrapper}>
                                        {Array.from({ length: item.rating }).map((_, i) => (
                                            <ion-icon key={i} name="star"></ion-icon>
                                        ))}
                                    </div>
                                </div>
                                <h3 className={styles.cardTitle}>{item.title}</h3>
                                <div className={styles.priceWrapper}>
                                    <p className={styles.priceText}>Price:</p>
                                    <data className={styles.price} value={item.price}>
                                        ₹{item.price}
                                    </data>
                                    <del className={styles.del} value={item.originalPrice}>
                                        ₹{item.originalPrice}
                                    </del>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default FoodMenu;
