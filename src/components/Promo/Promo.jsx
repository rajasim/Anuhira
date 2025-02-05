import styles from './Promo.module.css';

const Promo = () => {
    return (
        <div className={styles.promoContainer}>
            <div className={styles.promoCard}>
                <img src="https://via.placeholder.com/150?text=Chole+Bhature" alt="Promo 1" />
                <h3>Chole Bhature Combo - 20% Off</h3>
                <p>Get 20% off on our delicious Chole Bhature combo meal today!</p>
                <ul>
                    <li>Freshly made Bhature with spicy Chole.</li>
                    <li>Accompanied by tangy pickle and yogurt.</li>
                    <li>Offer valid until end of the week.</li>
                </ul>
                <button className={styles.btn}>Order Now</button>
            </div>
            <div className={styles.promoCard}>
                <img src="https://via.placeholder.com/150?text=Masala+Dosa" alt="Promo 2" />
                <h3>Masala Dosa Special</h3>
                <p>Enjoy a Masala Dosa with free coconut chutney and sambar!</p>
                <ul>
                    <li>Crunchy dosa with spiced potato filling.</li>
                    <li>Fresh chutneys and hot sambar.</li>
                    <li>Only valid for dine-in customers.</li>
                </ul>
                <button className={styles.btn}>Order Now</button>
            </div>
            <div className={styles.promoCard}>
                <img src="https://via.placeholder.com/150?text=Paneer+Tikka" alt="Promo 3" />
                <h3>Paneer Tikka Bonanza</h3>
                <p>Get a free soft drink with every order of Paneer Tikka!</p>
                <ul>
                    <li>Grilled to perfection with a smoky flavor.</li>
                    <li>Served with green chutney and salad.</li>
                    <li>Offer valid only on weekends.</li>
                </ul>
                <button className={styles.btn}>Order Now</button>
            </div>
            <div className={styles.promoCard}>
                <img src="https://via.placeholder.com/150?text=Samosa" alt="Promo 4" />
                <h3>Samosa Fest - Buy 1 Get 1 Free</h3>
                <p>Buy one crispy Samosa and get one free, only this week!</p>
                <ul>
                    <li>Hot and crispy, filled with spicy potatoes.</li>
                    <li>Perfect with tamarind chutney or mint chutney.</li>
                    <li>Limited time offer, valid for delivery and takeaway.</li>
                </ul>
                <button className={styles.btn}>Order Now</button>
            </div>
        </div>
    );
};

export default Promo;
