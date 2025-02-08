import { useState } from "react";
import styles from "./FoodMenu.module.css";

// Data for Indian Gharal (homestyle) fare
const menuItems = [
  {
    id: 1,
    category: "Sweets",
    discount: "-50%",
    title: "Shabudana Chiwda",
    price: "200.00",
    originalPrice: "400.00",
    rating: 5,
    imageUrl: "/shabudana.jpg",
  },
  {
    id: 2,
    category: "Namkeen",
    discount: "-50%",
    title: "Chakli",
    price: "300.00/KG",
    originalPrice: "600.00/KG",
    rating: 5,
    imageUrl: "/Chakli.jpg",
  },
  {
    id: 3,
    category: "Namkeen",
    discount: "-50%",
    title: "Bhakrwadi",
    price: "280.00",
    originalPrice: "560.00",
    rating: 5,
    imageUrl: "/bhakarwadi.jpg",
  },
  {
    id: 4,
    category: "Snacks",
    discount: "-50%",
    title: "Pohe Chiwda",
    price: "280.00",
    originalPrice: "560.00",
    rating: 5,
    imageUrl: "/pohe.jpg",
  },
  {
    id: 5,
    category: "Namkeen",
    discount: "-50%",
    title: "Aloo Masala and Aloo palak",
    price: "280.00",
    originalPrice: "560.00",
    rating: 5,
    imageUrl: "/Gathiya.jpg",
  },
  {
    id: 6,
    category: "Snacks",
    discount: "-7%",
    title: "Sev",
    price: "22.00",
    originalPrice: "24.00",
    rating: 5,
    imageUrl: "/Sev.jpg",
  },
];

// Filter options
const filterOptions = ["All", "Snacks", "Sweets"];

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
          Indulge in the rich flavors of Indian home cooking—each dish is
          prepared with love, tradition, and the finest locally sourced
          ingredients.
        </p>

        <ul className={styles.filterList}>
          {filterOptions.map((filter) => (
            <li key={filter}>
              <button
                className={`${styles.filterBtn} ${
                  activeFilter === filter ? styles.active : ""
                }`}
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
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className={styles.cardImage}
                  />
                  <div className={styles.badge}>{item.discount}</div>
                  <button className={`${styles.btn} ${styles.foodMenuBtn}`}>
                    Order Now
                  </button>
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
