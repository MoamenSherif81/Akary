import React from 'react'
// Import Swiper assets
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

export default function Carousel() {
  return (
    <Swiper navigation={true} modules={[Navigation]} loop={true} className="mySwiper">
      <SwiperSlide>
        <img className="main-carousel__image" src="images/Scroll Group 1.png" alt="first slide" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="main-carousel__image" src="images/Scroll Group 1.png" alt="first slide" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="main-carousel__image" src="images/Scroll Group 1.png" alt="first slide" />
      </SwiperSlide>
    </Swiper>
  )
}
