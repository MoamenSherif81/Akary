import React from 'react'
import Carousel from '../Carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as heartRegular } from '@fortawesome/free-regular-svg-icons'
import { faBath, faBed, faHouse, faLocationDot, faHeart as heartSolid} from '@fortawesome/free-solid-svg-icons'


export default function SingleUnit() {
  let imgs = ["/images/Scroll Group 1.png", "/images/Scroll Group 1.png", "/images/Scroll Group 1.png"]

  return (
    <div className='single-unit mb-5'>
      <Carousel imgs={imgs} />
      <div className='container'>
        <div className='single-unit__text mb-5'>
          <h4 className='single-unit__title'>شقه للبيع الحق العرررررررض ميتفوتش</h4>
          <div className='single-unit__header my-2 d-flex justify-content-between'>
            <span className='single-unit__price main-color'>250000 L.E.</span>
            <span className='single-unit__favourite'>
              <FontAwesomeIcon icon={heartSolid} />
              <FontAwesomeIcon icon={heartRegular} />
            </span>
          </div>
          <div className='mb-2'>
            <FontAwesomeIcon icon={faBed} />
            <span className='single-unit__bedrooms px-2'>4</span>
            <FontAwesomeIcon icon={faBath} />
            <span className='single-unit__bathrooms px-2'>2</span>
            <FontAwesomeIcon icon={faHouse} />
            <span className='single-unit__bathrooms px-2'>120 m<sup>2</sup></span>
          </div>
          <div className='single-unit__sub-description mb-1'>العرض الجامد جدا شقه 120 متر 4 غرف نوم و حمامين و حاجه اخر دلع</div>
          <div className='single-unit__location'>
            <FontAwesomeIcon icon={faLocationDot} /> 5 Mossadak, Dokki
          </div>
        </div>
        <div className='single-unit__rooms mb-4'>
          <table className='w-100'>
            <thead>
              <tr>
                <td className='main-color'>Type</td>
                <td className='main-color'>Length</td>
                <td className='main-color'>Width</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span>Room</span></td>
                <td><span>4</span></td>
                <td><span>2</span></td>
              </tr>
              <tr>
                <td><span>Room</span></td>
                <td><span>4</span></td>
                <td><span>3</span></td>
              </tr>
              <tr>
                <td><span>Room</span></td>
                <td><span>6</span></td>
                <td><span>2</span></td>
              </tr>
              <tr>
                <td><span>Room</span></td>
                <td><span>2</span></td>
                <td><span>1</span></td>
              </tr>
              <tr>
                <td><span>Bathroom</span></td>
                <td><span>2</span></td>
                <td><span>2</span></td>
              </tr>
              <tr>
                <td><span>Bathroom</span></td>
                <td><span>4</span></td>
                <td><span>2</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='single-unit__description mb-5'>
          <h4 className='text-center main-color fw-bolder mb-3'>Description</h4>
          <div className='single-unit__description-text'>
            الححححق العرض <br /> شقه بحاله ممتازه جدا جدا
          </div>
        </div>
        <div className='single-unit__owner d-flex rounded-5 align-items-center gap-4 justify-content-center'>
          <img className='rounded-5' src='/images/Moamen.jpg' alt='' />
          <div className='single-unit__owner-info'>
            <h3>Moamen Sherif</h3>
            <div>Sofware Enineer</div>
            <div className='fw-bold'>01020285982 / 01100405173</div>
          </div>
        </div>
      </div>
    </div>
  )
}
