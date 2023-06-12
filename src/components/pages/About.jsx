import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import React, { useRef } from 'react'
import SwiperCards from '../SwiperCards';
import Breadcrumb from '../Breadcrumb';

export default function About() {
  const [prevRefTeam, nextRefTeam ] = [useRef(null), useRef(null)];
  const [prevRef, nextRef] = [useRef(null), useRef(null)];

  let team = [
    {
      name: 'nouraldeen Mahmoud',
      image: 'images/upwork-1.png',
      position: 'CEO',
      facebook: '',
      twitter: '',
      instagram: '',
      whatsapp: ''
    },
    {
      name: 'nour',
      image: 'images/upwork-1.png',
      position: 'co-founder',
      facebook: '',
      twitter: '',
      instagram: '',
      whatsapp: ''
    },
    {
      name: 'nouraldeen',
      image: 'images/upwork-1.png',
      position: 'sales',
      facebook: '',
      twitter: '',
      instagram: '',
      whatsapp: ''
    },
    {
      name: 'Mahmoud',
      image: 'images/upwork-1.png',
      position: 'accountant',
      facebook: '',
      twitter: '',
      instagram: '',
      whatsapp: ''
    },
    {
      name: 'Moamen',
      image: 'images/upwork-1.png',
      position: 'the best',
      facebook: '',
      twitter: '',
      instagram: '',
      whatsapp: ''
    },
  ]

  let partners = [
    {
      position: 'Google',
      image: 'images/googlelogo_color_272x92dp.png',
      facebook: '',
      twitter: '',
      instagram: '',
      whatsapp: ''
    },
    {
      position: 'Google',
      image: 'images/googlelogo_color_272x92dp.png',
      facebook: '',
      twitter: '',
      instagram: '',
      whatsapp: ''
    },
    {
      position: 'Google',
      image: 'images/googlelogo_color_272x92dp.png',
      facebook: '',
      twitter: '',
      instagram: '',
      whatsapp: ''
    },
    {
      position: 'Google',
      image: 'images/googlelogo_color_272x92dp.png',
      facebook: '',
      twitter: '',
      instagram: '',
      whatsapp: ''
    },
  ]

  return (
    <>
    <section className='section'>
      <div className='about__main-section container d-flex align-items-center gap-2'>
        <div className='about-main__text'>
          <h2 className='section__header text-start'>About Us</h2>
          <p className='about-main__paragraph'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quisquam optio magni, assumenda nemo tempore quasi. Beatae nam odio ex laudantium deserunt error cupiditate repudiandae, odit sit quia sapiente voluptates accusamus quaerat, magni suscipit est hic? Ex molestiae sit ab ullam vero deserunt, tenetur numquam odio itaque est a expedita.
          </p>
          <button className='about-main__button border-0 px-5 py-2'>More Goals</button>
        </div>
        <div className='about-main__img text-center'>
          <img className='w-100' src='images/Team work-amico-1.png' alt='aboutus' />
        </div>
      </div>
    </section>
    <section className='section'>
      <div className='container'>
        <h2 className='section__header mb-4'>About Us</h2>
        <p className='text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt nemo eius modi. <br /> Nesciunt eligendi fuga iure maxime delectus, nam, nostrum animi assumenda alias harum praesentium vero repellat voluptate? Consequatur, facere!</p>
        <p className='text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt nemo eius modi. <br /> Nesciunt eligendi fuga iure maxime delectus, nam, nostrum animi assumenda alias harum praesentium vero repellat voluptate? Consequatur, facere!</p>
        <p className='text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt nemo eius modi. <br /> Nesciunt eligendi fuga iure maxime delectus, nam, nostrum animi assumenda alias harum praesentium vero repellat voluptate? Consequatur, facere!</p>
      </div>
    </section>
    <section className='section'>
      <div className='container p-0 border rounded-4 d-md-flex align-items-stretch'>
        <div className='mission__left w-md-50 text-center'>
          <img src='images/Good team-rafiki.png' className='w-100' alt='mission' />
        </div>
        <div className='mission__right w-50 rounded-4 p-4 w-100 d-flex flex-column justify-content-between'>
          <h4 className='text-center text-gold mb-3'>Mission & Value</h4>
          <p className='mb-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius sit porro molestias amet. Soluta velit quaerat explicabo est aspernatur vel!</p>
          <p className='mb-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius sit porro molestias amet. Soluta velit quaerat explicabo est aspernatur vel!</p>
          <p className='mb-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius sit porro molestias amet. Soluta velit quaerat explicabo est aspernatur vel!</p>
        </div>
      </div>
    </section>
    <section className='team section'>
      <div className='container p-0'>
        <div className='team__text d-flex flex-column justify-content-center'>
          <h2>Meet Our Leadership Team</h2>
          <p>At Vserve, we believe that Our Success depands on the benfit Out clients Recieve...</p>
          <div className='team__swiper-buttons'>
            <button ref={prevRefTeam} className='team__swiper-button'>
              <FontAwesomeIcon icon={solid("angle-left")} />
            </button>
            <button ref={nextRefTeam} className='team__swiper-button'>
              <FontAwesomeIcon icon={solid("angle-right")} />
            </button>
          </div>
        </div>
        <div className='team__swiper'>
          <SwiperCards prevRef={prevRefTeam} nextRef={nextRefTeam} content={team} />
        </div>
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
    <section className='team section'>  
      <div className='container p-0'>
        <div className='team__text d-flex flex-column justify-content-center'>
          <h2>Meet Our Leadership Team</h2>
          <p>At Vserve, we believe that Our Success depands on the benfit Out clients Recieve...</p>
          <div className='team__swiper-buttons'>
            <button ref={prevRef} className='team__swiper-button'>
              <FontAwesomeIcon icon={solid("angle-left")} />
            </button>
            <button ref={nextRef} className='team__swiper-button'>
              <FontAwesomeIcon icon={solid("angle-right")} />
            </button>
          </div>
        </div>
        <div className='team__swiper'>
          <SwiperCards prevRef={prevRef} nextRef={nextRef} content={partners} />
        </div>
      </div>
    </section>
  </>)
}
