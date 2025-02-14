import styles from "./Promo.module.css";
import { redirectToWhatsApp } from "../../services/wpRedirect";

const promoData = [
  {
    id: 1,
    title: "Chakli Delight",
    description: "Savor the crispy, spicy taste of our freshly made Chakli!",
    details: [
      "Handcrafted with traditional spices.",
      "Perfect for tea time or as a snack.",
      "Limited time offer – try it now!",
    ],
    imageUrl: "/Chakli.jpg",
  },
  {
    id: 2,
    title: "Peanut Chutney Bliss",
    description:
      "Enjoy the nutty, spicy goodness of our authentic Peanut Chutney!",
    details: [
      "Made with roasted peanuts and aromatic spices.",
      "A perfect accompaniment to idlis, dosas, and snacks.",
      "Freshly ground for rich flavor.",
    ],
    imageUrl: "/chatni.jpg",
  },
  {
    id: 3,
    title: "Bhakarwadi Bonanza",
    description:
      "Enjoy the sweet and spicy fusion in every bite of Bhakarwadi!",
    details: [
      "Rolls packed with a unique blend of flavors.",
      "A must-try traditional Indian snack.",
      "Available for a limited period.",
    ],
    imageUrl: "/bhakarwadi.jpg",
  },
];

const Promo = () => {
  return (
    <>
      <div>
        <p className={styles.heading}>Discover Categories</p>
      </div>
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
              <button
                onClick={() => redirectToWhatsApp()}
                className={styles.btn}
              >
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Promo;
