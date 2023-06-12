import Carousel from "../Carousel";

function Home() {
  let imgs = ["/images/Scroll Group 1.png", "/images/Scroll Group 1.png", "/images/Scroll Group 1.png"]

  return (
    <div>
      <section className="main-carousel">
        <Carousel imgs={imgs}/>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="section__header mb-4">Services</h2>
          <div className="services__list row">
            <div className="services__item col-6 col-lg-3 mb-3">
              <div className="services__item-content">
                <img className="services__img w-100" src="images/home-1622401_640.png" alt="home" />
                <div className="services__item-overlay"></div>
                <div className="services__item-text">Lorem ipsum dolor sit amet</div>
              </div>
            </div>
            <div className="services__item col-6 col-lg-3 mb-3">
              <div className="services__item-content">
                <img className="services__img w-100" src="images/kitchen-2400367_640.png" alt="kitchen" />
                <div className="services__item-overlay"></div>
                <div className="services__item-text">Lorem ipsum dolor sit amet</div>
              </div>
            </div>
            <div className="services__item col-6 col-lg-3 mb-3">
              <div className="services__item-content">
                <img className="services__img w-100" src="images/bathroom-1336164_640.png" alt="bathroom" />
                <div className="services__item-overlay"></div>
                <div className="services__item-text">Lorem ipsum dolor sit amet</div>
              </div>
            </div>
            <div className="services__item col-6 col-lg-3 mb-3">
              <div className="services__item-content">
                <img className="services__img w-100" src="images/bathroom-1336164_640.png" alt="bathroom" />
                <div className="services__item-overlay"></div>
                <div className="services__item-text">Lorem ipsum dolor sit amet</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container"> 
          <h2 className="section__header mb-4">About</h2>
          <p className="about__text d-flex gap-4 text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, ratione. Culpa harum nostrum maxime, repellendus aspernatur recusandae natus dolorem dolor in saepe molestias. Nulla, praesentium pariatur. Impedit qui at facilis eaque earum repellendus sequi inventore hic ex deleniti laborum quis minima fugiat adipisci cupiditate voluptate mollitia voluptatem, odio nesciunt. A quas natus dolorum, beatae rem repellat architecto quibusdam sit, itaque est ea deserunt expedita cumque? Consectetur molestiae ipsa beatae deleniti corporis tempore natus, eos voluptatibus accusantium dicta ullam corrupti, soluta explicabo iste est. Omnis natus maxime quisquam unde iste ab explicabo pariatur quasi itaque! Aspernatur dolores nostrum eveniet impedit porro.
          </p>
        </div>
      </section>
      <section className='section stats'>
        <div className='container d-flex align-items-center justify-content-center gap-4'>
          <div className='stats__item text-center'>
            <h2 className='stats__number'>826</h2>
            <p className='stats__text'>Meet Our</p>
            <p className='stats__text'>Leadership team</p>
          </div>
          <div className='stats__item text-center'>
            <h2 className='stats__number'>826</h2>
            <p className='stats__text'>Meet Our</p>
            <p className='stats__text'>Leadership team</p>
          </div>
          <div className='stats__item text-center'>
            <h2 className='stats__number'>826</h2>
            <p className='stats__text'>Meet Our</p>
            <p className='stats__text'>Leadership team</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
