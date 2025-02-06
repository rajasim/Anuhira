import React, { useState } from 'react';
import styles from './FoodMenu.module.css';

// Data for Indian Gharal (homestyle) fare
const menuItems = [
    {
        id: 1,
        category: "Sweets",
        discount: "-5%",
        title: "Modak",
        price: "40.00",
        originalPrice: "45.00",
        rating: 5,
        imageUrl: "/Modak.jpeg"
    },
    {
        id: 2,
        category: "Namkeen",
        discount: "-8%",
        title: "Chakli",
        price: "15.00",
        originalPrice: "17.00",
        rating: 5,
        imageUrl: "/Chakli.jpeg"
    },
    {
        id: 3,
        category: "Namkeen",
        discount: "-10%",
        title: "Bhakrwadi",
        price: "20.00",
        originalPrice: "22.00",
        rating: 5,
        imageUrl: "/Bhakrwadi.jpeg"
    },
    {
        id: 4,
        category: "Sweets",
        discount: "-12%",
        title: "Puran Poli",
        price: "50.00",
        originalPrice: "60.00",
        rating: 5,
        imageUrl: "https://source.unsplash.com/featured/?puran-poli"
    },
    {
        id: 5,
        category: "Namkeen",
        discount: "-15%",
        title: "Gathiya",
        price: "18.00",
        originalPrice: "21.00",
        rating: 5,
        imageUrl: "/Gathiya.jpeg"
    },
    {
        id: 6,
        category: "Namkeen",
        discount: "-7%",
        title: "Sev",
        price: "22.00",
        originalPrice: "24.00",
        rating: 5,
        imageUrl: "/Sev.jpeg"
    },

    // {
    //     id: 7,
    //     category: "Sweets",
    //     discount: "-10%",
    //     title: "Jalebi",
    //     price: "35.00",
    //     originalPrice: "39.00",
    //     rating: 5,
    //     imageUrl: "https://source.unsplash.com/featured/?jalebi"
    // },
    // {
    //     id: 8,
    //     category: "Sweets",
    //     discount: "-8%",
    //     title: "Gulab Jamun",
    //     price: "30.00",
    //     originalPrice: "33.00",
    //     rating: 5,
    //     imageUrl: "https://source.unsplash.com/featured/?gulab-jamun"
    // },
    // {
    //     id: 9,
    //     category: "Sweets",
    //     discount: "-5%",
    //     title: "Rasgulla",
    //     price: "28.00",
    //     originalPrice: "30.00",
    //     rating: 5,
    //     imageUrl: "https://source.unsplash.com/featured/?rasgulla"
    // },
    // {
    //     id: 10,
    //     category: "Sweets",
    //     discount: "-12%",
    //     title: "Laddu",
    //     price: "32.00",
    //     originalPrice: "36.00",
    //     rating: 5,
    //     imageUrl: "https://source.unsplash.com/featured/?laddu"
    // },
    // {
    //     id: 11,
    //     category: "Sweets",
    //     discount: "-10%",
    //     title: "Barfi",
    //     price: "45.00",
    //     originalPrice: "50.00",
    //     rating: 5,
    //     imageUrl: "https://source.unsplash.com/featured/?barfi"
    // },
    // {
    //     id: 12,
    //     category: "Sweets",
    //     discount: "-15%",
    //     title: "Mysore Pak",
    //     price: "55.00",
    //     originalPrice: "65.00",
    //     rating: 5,
    //     imageUrl: "https://source.unsplash.com/featured/?mysore-pak"
    // },
    // {
    //     id: 13,
    //     category: "Namkeen",
    //     discount: "-9%",
    //     title: "Fafda",
    //     price: "25.00",
    //     originalPrice: "28.00",
    //     rating: 5,
    //     imageUrl: "https://source.unsplash.com/featured/?fafda"
    // },
    // {
    //     id: 14,
    //     category: "Sweets",
    //     discount: "-7%",
    //     title: "Besan Ladoo",
    //     price: "38.00",
    //     originalPrice: "41.00",
    //     rating: 5,
    //     imageUrl: "https://source.unsplash.com/featured/?besan-ladoo"
    // }
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
