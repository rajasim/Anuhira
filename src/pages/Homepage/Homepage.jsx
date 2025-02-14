import About from "../../components/About/About";
import Banner from "../../components/Banner/Banner";
import Blog from "../../components/Blog/Blog";
import Cta from "../../components/CTA/Cta";
import FoodMenu from "../../components/FoodMenu/FoodMenu";
import Hero from "../../components/Hero/Hero";
import Promo from "../../components/Promo/Promo";
import Testimonials from "../../components/Testimonials/Testimonials";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Promo />
      <About />
      <FoodMenu />
      <Cta />
      <Testimonials />
      <Banner />
      <Blog />
    </>
  );
};

export default Homepage;
