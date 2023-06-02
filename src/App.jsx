import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

// Import Swiper assets
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

function App() {
  return (
    <div>
      <Navbar />
      <section className="main-carousel">
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
      </section>
      <section className="home-section">
        <div className="container">
          <h2 className="home-section__header mb-4">Services</h2>
          <div className="services__list d-flex gap-4">
            <div className="services__item">
              <img className="services__img w-100" src="images/home-1622401_640.png" alt="home" />
            </div>
            <div className="services__item">
              <img className="services__img w-100" src="images/kitchen-2400367_640.png" alt="kitchen" />
            </div>
            <div className="services__item">
              <img className="services__img w-100" src="images/bathroom-1336164_640.png" alt="bathroom" />
            </div>
          </div>
        </div>
      </section>
      <section className="home-section">
        <div className="container">
          <h2 className="home-section__header mb-4">About</h2>
          <p className="about__text d-flex gap-4 text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, ratione. Culpa harum nostrum maxime, repellendus aspernatur recusandae natus dolorem dolor in saepe molestias. Nulla, praesentium pariatur. Impedit qui at facilis eaque earum repellendus sequi inventore hic ex deleniti laborum quis minima fugiat adipisci cupiditate voluptate mollitia voluptatem, odio nesciunt. A quas natus dolorum, beatae rem repellat architecto quibusdam sit, itaque est ea deserunt expedita cumque? Consectetur molestiae ipsa beatae deleniti corporis tempore natus, eos voluptatibus accusantium dicta ullam corrupti, soluta explicabo iste est. Omnis natus maxime quisquam unde iste ab explicabo pariatur quasi itaque! Aspernatur dolores nostrum eveniet impedit porro.
          </p>
        </div>
      </section>
      <section className="home-section">
        <div className="container">
          <h2 className="home-section__header mb-4">Contact</h2>
          <form className="contact__form d-flex flex-row-reverse gap-3">
            <div className="d-flex flex-column w-50 gap-3">
              <input type="text" className="contact__input p-2" placeholder="Name" />
              <input type="text" className="contact__input p-2" placeholder="Phone" />
              <input type="submit" className="contact__submit" value="Submit" />
            </div>
            <textarea className="contact__textarea w-50 p-2" placeholder="Message"></textarea>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
