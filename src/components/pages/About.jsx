import React from 'react'

export default function About() {
  return (
    <>
      <section className='section'>
        <div className='container d-flex align-items-center gap-2'>
          <div className='about-main__text w-50'>
            <h2 className='section__header text-start'>About Us</h2>
            <p className='about-main__paragraph'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quisquam optio magni, assumenda nemo tempore quasi. Beatae nam odio ex laudantium deserunt error cupiditate repudiandae, odit sit quia sapiente voluptates accusamus quaerat, magni suscipit est hic? Ex molestiae sit ab ullam vero deserunt, tenetur numquam odio itaque est a expedita.
            </p>
            <button className='about-main__button border-0 px-5 py-2'>More Goals</button>
          </div>
          <div className='about-main__img w-50 text-center'>
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
        <div className='container p-0 border rounded-4 d-flex align-items-stretch'>
          <div className='mission__left w-50 text-center'>
            <img src='images/Good team-rafiki.png' className='w-100' alt='mission' />
          </div>
          <div className='mission__right w-50 rounded-4 p-4 d-flex flex-column justify-content-between'>
            <h4 className='text-center text-gold mb-3'>Mission & Value</h4>
            <p className='mb-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius sit porro molestias amet. Soluta velit quaerat explicabo est aspernatur vel!</p>
            <p className='mb-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius sit porro molestias amet. Soluta velit quaerat explicabo est aspernatur vel!</p>
            <p className='mb-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius sit porro molestias amet. Soluta velit quaerat explicabo est aspernatur vel!</p>
          </div>
        </div>
      </section>
    </>
  )
}
