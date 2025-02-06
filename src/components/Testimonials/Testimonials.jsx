import React from "react";
import styles from "./Testimonials.module.css";

const testimonials = [
    {
        name: "Rahul Sharma",
        title: "Founder of Spice Trail",
        // Using Random User API for a male profile photo
        image: "https://randomuser.me/api/portraits/men/45.jpg",
        review:
            "The biryani here is absolutely phenomenal! The aroma and flavors remind me of my childhood in Delhi.",
    },
    {
        name: "Priya Singh",
        title: "CEO Curry House",
        // Using Random User API for a female profile photo
        image: "https://randomuser.me/api/portraits/women/47.jpg",
        review:
            "I've never experienced such authentic Indian flavors. The masala dosa is a must-try!",
    },
    {
        name: "Amit Patel",
        title: "Head Chef at Saffron",
        // Using Random User API for a male profile photo
        image: "https://randomuser.me/api/portraits/men/52.jpg",
        review:
            "Their paneer tikka is out of this world. A delightful culinary journey into Indian tradition!",
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
                                    <h3 className={styles.testimonialName}>
                                        {testimonial.name}
                                    </h3>
                                    <p className={styles.testimonialTitle}>
                                        {testimonial.title}
                                    </p>
                                </div>
                            </div>
                            <blockquote className={styles.testimonialReview}>
                                "{testimonial.review}"
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
