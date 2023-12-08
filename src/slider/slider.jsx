import {Swiper, SwiperSlide } from 'swiper/react'
import styles from './slider.module.css'
import {Pagination, Navigation} from 'swiper/modules'
import SliderProducts from '../data/products'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'




const Slider = () => {
  return (
    <div className={styles.slide}>
        <Swiper 
        modules={[Pagination, Navigation]}
        className={styles.mySwiper}
        navigation={true}
        loopFillGroupWithBlank={true}
          slidesPerView={3}
          spaceBetween={40}
          slidesPerGroup={1}
          loop={true}>
          {SliderProducts.map((slide, i)=>(
            <SwiperSlide key={i}>
              <div className={styles.leftSlide}>
                <div className={styles.name}>
                  <span>{slide.name}</span>
                  <span>{slide.detail}</span>
                </div>
              <span>{slide.price}$</span>
              <div>Shop Now</div>
              </div>

              <img src={slide.image} alt="product" className={styles.images} />
            </SwiperSlide>
           
          ))}
        
        </Swiper>
    </div>
  )
}

export default Slider
