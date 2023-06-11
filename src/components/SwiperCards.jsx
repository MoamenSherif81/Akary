import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function SwiperCards(props) {
  const [_, setInit] = useState();

  return (
    <Swiper
      spaceBetween={30}
      navigation={{
        prevEl: props.prevRef.current,
        nextEl: props.nextRef.current,
      }}
      breakpoints={{
        300:{
          slidesPerView: 1
        },
        500:{
          slidesPerView: 2
        },
        1200:{
          slidesPerView: 3
        },
        1400:{
          slidesPerView: 4
        }
      }}
      loop={true}
      modules={[Navigation]}
      onInit={() => setInit(true)}
      className="mySwiper"
    >
    {
      props.content.map((ele) => {
        return (
          <SwiperSlide className="slide d-flex justify-content-between flex-column">
            <div className="slide__info">
              <img src={ele.image} alt="" />
              <div className="slide__text">
                <h6 className="slide__title m-0">{ele.name}</h6>
                {ele.position && <p className="slide__position">{ele.position}</p>}
              </div>
            </div>
            <div className="slide__social d-flex justify-content-center gap-3 align-content-center">
              <a href={ele.whatsapp}><FontAwesomeIcon icon={faWhatsapp} /></a>
              <a href={ele.twitter}><FontAwesomeIcon icon={faTwitter} /></a>
              <a href={ele.instagram}><FontAwesomeIcon icon={faInstagram} /></a>
              <a href={ele.facebook}><FontAwesomeIcon icon={faFacebook} /></a>
            </div>
          </SwiperSlide>
        );
      })
    }
    </Swiper>
  )
}
