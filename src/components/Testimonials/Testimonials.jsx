import styles from "./Testimonials.module.css";

const testimonials = [
  {
    name: "Anjali Joshi",
    title: "Food Blogger",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    review:
      "The Chakli was absolutely delightful—crispy, perfectly spiced, and reminiscent of traditional recipes.",
  },
  {
    name: "Vikram Singh",
    title: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/61.jpg",
    review:
      "I tried the Papad and it was incredibly crunchy with an authentic seasoning that reminded me of home.",
  },
  {
    name: "Neha Reddy",
    title: "Yoga Instructor",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    review:
      "The Bhakarwadi was a burst of flavors—sweet, spicy, and perfectly crunchy. It’s my go-to snack during fasting.",
  },
  {
    name: "Meera Patel",
    title: "Homemaker",
    image: "https://randomuser.me/api/portraits/women/42.jpg",
    review:
      "I loved the mix of Chakli and Papad. Both were delightfully crispy and packed with traditional spices that made every bite special.",
  },
  {
    name: "Rohan Gupta",
    title: "Student",
    image: "https://randomuser.me/api/portraits/men/25.jpg",
    review:
      "The combination of Bhakarwadi and Chakli is my new favorite. The flavors are rich and capture the true essence of Indian farsan.",
  },
  {
    name: "Shalini Kapoor",
    title: "Doctor",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
    review:
      "The snack platter featuring Chakli, Papad, and Bhakarwadi was a hit at our family gathering—each bite was a burst of authentic flavor.",
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
