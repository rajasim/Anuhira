import styles from './FoodMenu.module.css';

const FoodMenu = () => {
    return (
        <section className={`${styles.section} ${styles.foodMenu}`} id="food-menu">
            <div className={styles.container}>
                <p className={styles.sectionSubtitle}>Popular Indian Fare</p>
                <h2 className={styles.sectionTitle}>
                    Our Delicious <span className={styles.span}>Foods</span>
                </h2>
                <p className={styles.sectionText}>
                    Enjoy a variety of authentic Indian snacks and sweets made with passion and tradition.
                </p>

                <ul className={styles.filterList}>
                    <li>
                        <button className={`${styles.filterBtn} ${styles.active}`}>All</button>
                    </li>
                    <li>
                        <button className={styles.filterBtn}>Snacks</button>
                    </li>
                    <li>
                        <button className={styles.filterBtn}>Sweets</button>
                    </li>
                    <li>
                        <button className={styles.filterBtn}>Street Food</button>
                    </li>
                    <li>
                        <button className={styles.filterBtn}>Breakfast</button>
                    </li>
                </ul>

                <ul className={styles.foodMenuList}>
                    <li>
                        <div className={styles.foodMenuCard}>
                            <div className={styles.cardBanner}>
                                {/* Image removed – placeholder area */}
                                <div className={styles.badge}>-15%</div>
                                <button className={`${styles.btn} ${styles.foodMenuBtn}`}>Order Now</button>
                            </div>
                            <div className={styles.wrapper}>
                                <p className={styles.category}>Snacks</p>
                                <div className={styles.ratingWrapper}>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                </div>
                            </div>
                            <h3 className={styles.cardTitle}>Chakli Delight</h3>
                            <div className={styles.priceWrapper}>
                                <p className={styles.priceText}>Price:</p>
                                <data className={styles.price} value="49.00">₹49.00</data>
                                <del className={styles.del} value="69.00">₹69.00</del>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className={styles.foodMenuCard}>
                            <div className={styles.cardBanner}>
                                {/* Image removed – placeholder area */}
                                <div className={styles.badge}>-10%</div>
                                <button className={`${styles.btn} ${styles.foodMenuBtn}`}>Order Now</button>
                            </div>
                            <div className={styles.wrapper}>
                                <p className={styles.category}>Sweets</p>
                                <div className={styles.ratingWrapper}>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                </div>
                            </div>
                            <h3 className={styles.cardTitle}>Laaldu Sweet Treat</h3>
                            <div className={styles.priceWrapper}>
                                <p className={styles.priceText}>Price:</p>
                                <data className={styles.price} value="29.00">₹29.00</data>
                                <del className={styles.del} value="39.00">₹39.00</del>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className={styles.foodMenuCard}>
                            <div className={styles.cardBanner}>
                                {/* Image removed – placeholder area */}
                                <div className={styles.badge}>-20%</div>
                                <button className={`${styles.btn} ${styles.foodMenuBtn}`}>Order Now</button>
                            </div>
                            <div className={styles.wrapper}>
                                <p className={styles.category}>Snacks</p>
                                <div className={styles.ratingWrapper}>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                </div>
                            </div>
                            <h3 className={styles.cardTitle}>Samosa Special</h3>
                            <div className={styles.priceWrapper}>
                                <p className={styles.priceText}>Price:</p>
                                <data className={styles.price} value="39.00">₹39.00</data>
                                <del className={styles.del} value="49.00">₹49.00</del>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className={styles.foodMenuCard}>
                            <div className={styles.cardBanner}>
                                {/* Image removed – placeholder area */}
                                <div className={styles.badge}>-25%</div>
                                <button className={`${styles.btn} ${styles.foodMenuBtn}`}>Order Now</button>
                            </div>
                            <div className={styles.wrapper}>
                                <p className={styles.category}>Street Food</p>
                                <div className={styles.ratingWrapper}>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                </div>
                            </div>
                            <h3 className={styles.cardTitle}>Vada Pav Classic</h3>
                            <div className={styles.priceWrapper}>
                                <p className={styles.priceText}>Price:</p>
                                <data className={styles.price} value="19.00">₹19.00</data>
                                <del className={styles.del} value="25.00">₹25.00</del>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className={styles.foodMenuCard}>
                            <div className={styles.cardBanner}>
                                {/* Image removed – placeholder area */}
                                <div className={styles.badge}>-5%</div>
                                <button className={`${styles.btn} ${styles.foodMenuBtn}`}>Order Now</button>
                            </div>
                            <div className={styles.wrapper}>
                                <p className={styles.category}>Snacks</p>
                                <div className={styles.ratingWrapper}>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                </div>
                            </div>
                            <h3 className={styles.cardTitle}>Dhokla Delight</h3>
                            <div className={styles.priceWrapper}>
                                <p className={styles.priceText}>Price:</p>
                                <data className={styles.price} value="59.00">₹59.00</data>
                                <del className={styles.del} value="69.00">₹69.00</del>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className={styles.foodMenuCard}>
                            <div className={styles.cardBanner}>
                                {/* Image removed – placeholder area */}
                                <div className={styles.badge}>-15%</div>
                                <button className={`${styles.btn} ${styles.foodMenuBtn}`}>Order Now</button>
                            </div>
                            <div className={styles.wrapper}>
                                <p className={styles.category}>Breakfast</p>
                                <div className={styles.ratingWrapper}>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                    <ion-icon name="star"></ion-icon>
                                </div>
                            </div>
                            <h3 className={styles.cardTitle}>Idli Sambar Combo</h3>
                            <div className={styles.priceWrapper}>
                                <p className={styles.priceText}>Price:</p>
                                <data className={styles.price} value="49.00">₹49.00</data>
                                <del className={styles.del} value="69.00">₹69.00</del>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default FoodMenu;
