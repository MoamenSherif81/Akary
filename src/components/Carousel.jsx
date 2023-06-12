import React from 'react'
// Import Swiper assets
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

export default function Carousel(props) {
  console.log(props.imgs);
  return (
    <Swiper navigation={true} modules={[Navigation]} loop={true} className="mySwiper">
      {props.imgs.map(img => {
        return <SwiperSlide>
          <img className="main-carousel__image" src={img} alt="unit" />
        </SwiperSlide>
      })}
    </Swiper>
  )
}
