import styles from "./Testimonials.module.css";

const testimonials = [
  {
    name: "Anjali Joshi",
    title: "Food Blogger",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    review:
      "The Sabudana Khichdi was perfectly cooked, not sticky at all!  A great option for a light and flavorful meal during fasting.",
  },
  {
    name: "Vikram Singh",
    title: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/61.jpg",
    review:
      "Tried the Vada Pav and it was just like the ones I have in Mumbai!  The chutneys were amazing.",
  },
  {
    name: "Neha Reddy",
    title: "Yoga Instructor",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    review:
      "The Rajgira Puri and Aloo Sabzi were a healthy and delicious way to break my fast.  Highly recommend!",
  },
  {
    name: "Meera Patel",
    title: "Homemaker",
    image: "https://randomuser.me/api/portraits/women/42.jpg",
    review:
      "The Paneer Tikka Masala was rich and creamy, and the paneer was perfectly soft.  A true vegetarian delight!",
  },
  {
    name: "Rohan Gupta",
    title: "Student",
    image: "https://randomuser.me/api/portraits/men/25.jpg",
    review:
      "I loved the Dal Makhani and Jeera Rice.  It tasted just like my mom's cooking!",
  },
  {
    name: "Shalini Kapoor",
    title: "Doctor",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
    review:
      "The Vegetable Biryani was fragrant and flavorful, with a perfect blend of spices and vegetables.",
  },
];

const Testimonials = () => {
  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.testimonialsContainer}>
        <p className={styles.testimonialsSubtitle}>Testimonials</p>
        <h2 className={styles.testimonialsTitle}>
          Our Customers <span className={styles.highlight}>Reviews</span>
        </h2>
        <p className={styles.testimonialsDescription}>
          Discover what our customers say about us. Enjoy authentic flavors,
          traditional recipes, and unforgettable dining experiences.
        </p>

        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <div className={styles.testimonialProfile}>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className={styles.testimonialAvatar}
                />
                <div>
                  <h3 className={styles.testimonialName}>{testimonial.name}</h3>
                  <p className={styles.testimonialTitle}>{testimonial.title}</p>
                </div>
              </div>
              <blockquote className={styles.testimonialReview}>
                {testimonial.review}
              </blockquote>
              <div className={styles.testimonialRating}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={styles.star}>
                    &#9733;
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
