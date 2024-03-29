import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import nanoId from 'nano-id'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Breadcrumb(props) {
  return (
    <div className='breadcrumb d-flex gap-3 justify-content-center align-items-center mb-5'>
      {props.path.map(path => {
        return path.link ? 
          <span key={nanoId()} className='d-flex align-items-center gap-3'>
            <Link to={path.link} className='secondary-color text-decoration-none'>{path.text}</Link> 
            <div className='breadcrumb__seperator text-white'>
              <FontAwesomeIcon icon={faAngleLeft} />
            </div>
          </span> 
          : 
          <span key={nanoId()} className=' text-secondary'>{path.text}</span>
      })}
    </div>
  )
}
