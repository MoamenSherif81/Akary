import React from 'react'
import Carousel from '../Carousel'
import AllUnitsList from '../AllUnitsList'
import Breadcrumb from '../Breadcrumb'

export default function AllUnites() {
  let path = [{text: 'Home', link: '/'}, {text: 'Unites For Sale'}]
  let imgs = ["/images/Scroll Group 1.png", "/images/Scroll Group 1.png", "/images/Scroll Group 1.png"]

  return (
    <div>
      <Carousel imgs={imgs} />
      <div className='container section'>
        <Breadcrumb path={path} />
        <div className='d-flex justify-content-between align-items-center mb-4'>
          <h2>Units</h2>
          <input type='text' className='all-units-search' placeholder='Search...'/>
        </div>
        <AllUnitsList />
      </div>
    </div>
  )
}
