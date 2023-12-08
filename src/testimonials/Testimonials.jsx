import Hero from "../components/hero/Hero";
import styles from "./Testimonials.module.css";
import { TestimonialsData } from "../data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonials = () => {
  return (
    <div className={styles.testimonials}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <span>Top rated</span>
          <span>Seedily say has suitable disposal. Exercise joy </span>
        </div>

        <img src={Hero} alt="" />
        <div className={styles.container}>
          <span>100K</span>
          <span>Happy Customers</span>
        </div>
      </div>
      <div className={styles.reviews}>Reviews</div>

      <div className={styles.carousal}>
        <Swiper
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={20}
          className={styles.tCarousel}
        >
          {TestimonialsData.map((testimonial, i) => {
            <SwiperSlide key={i}>
              <div className={styles.testimonial}>
                <img src={testimonial.image} alt="" />
                <span>{testimonial.comment}</span>
                <hr />
                <span>{testimonial.name}</span>
              </div>
            </SwiperSlide>;
          })}
        </Swiper>
      </div>
    </div>
  );
};
export default Testimonials;
