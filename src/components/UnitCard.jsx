import { faHeart as heartRegular } from '@fortawesome/free-regular-svg-icons'
import { faBath, faBed, faHouse, faLocationDot, faHeart as heartSolid} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

export default function UnitCard(props) {
  return (
    <div className='unit-card col-12 col-sm-6 col-md-4'>
      <div className='unit-card__content'>
        <img className='unit-card__img' src={props.img} alt='' />
        <div className='unit-card__text p-3'>
          <h4 className='mb-1'><Link className='text-decoration-none secondary-color' to=''>{props.title}</Link></h4>
          <div className='unit-card__header my-2 d-flex justify-content-between'>
            <span className='unit-card__price'>{props.price} L.E.</span>
            <span className='unit-card__favourite'>
              <FontAwesomeIcon icon={heartSolid} />
              <FontAwesomeIcon icon={heartRegular} />
            </span>
          </div>
          <div className='unit-card__description'>{props.desc}</div>
          <hr />
          <div className='mb-2'>
            <FontAwesomeIcon icon={faBed} />
            <span className='unit-card__bedrooms px-1'>{props.bedrooms}</span>
            <FontAwesomeIcon icon={faBath} />
            <span className='unit-card__bathrooms px-1'>{props.bathrooms}</span>
            <FontAwesomeIcon icon={faHouse} />
            <span className='unit-card__bathrooms px-1'>{props.size}</span>m<sup>2</sup>
          </div>
          <div className='unit-card__location'>
            <FontAwesomeIcon icon={faLocationDot} /> {props.location}
          </div>
        </div>
      </div>
    </div>
  )
}
