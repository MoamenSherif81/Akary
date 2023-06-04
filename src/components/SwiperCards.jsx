import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useState } from "react";

export default function SwiperCards(props) {
  const [_, setInit] = useState();
  
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      navigation={{
        prevEl: props.prevRef.current,
        nextEl: props.nextRef.current,
      }}
      modules={[Navigation]}
      onInit={() => setInit(true)}
      className="mySwiper"
    >
      <SwiperSlide className="team__slide">
      </SwiperSlide>
      <SwiperSlide className="team__slide">
      </SwiperSlide>
      <SwiperSlide className="team__slide">
      </SwiperSlide>
      <SwiperSlide className="team__slide">
      </SwiperSlide>
    </Swiper>
  )
}
