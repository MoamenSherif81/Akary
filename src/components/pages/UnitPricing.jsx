import React from 'react'

export default function UnitPricing() {
  return (
    <div className='page container'>
      <div className='section'>
        <div className='selling-header d-md-flex align-items-center gap-3'>
          <div className='selling-header__text'>
            <h1 className='fw-bold'>Unit Pricing</h1>
            <p>You can now add the details of your residential unit, and we will calculate its price accordinng to the area and the prices recognized in its surrounding</p>
          </div>
          <div className='selling-header__img d-none d-lg-block'>
            <img src='/images/asset-2.jpeg' className='w-100' alt='' />
          </div>
        </div>
      </div>
      <h3 className='text-center secondary-color mb-5'>To know the price of your unit please enter the following data</h3>
      <form className='selling-form d-flex justify-content-center flex-wrap'>
        <div className="mb-3 w-50 px-1">
          <label for="unit-type-input" className="form-label main-color">Unit Type</label>
          <select id="unit-type-input" class="form-select">
            <option>Apartment</option>
            <option>Duplex</option>
            <option>Penthouse</option>
            <option>Studio</option>
          </select>
        </div>
        <div className="mb-3 w-50 px-1">
          <label for="finish-ratio-input" className="form-label main-color">Finishing Ratio</label>
          <select id="finish-ratio-input" class="form-select">
            <option>Superlux</option>
          </select>
        </div>
        <div className="mb-3 w-50 px-1">
          <label for="space-input" className="form-label main-color">The Space</label>
          <input type="text" className="form-control" id="space-input" placeholder='Space' />
        </div>
        <div className="mb-3 w-50 px-1">
          <label for="rooms-input" className="form-label main-color">Number of Rooms</label>
          <input type="text" className="form-control" id="rooms-input" placeholder='Number of Rooms' />
        </div>
        <div className="mb-3 w-50 px-1">
          <label for="city-input" className="form-label main-color">City</label>
          <select id="city-input" class="form-select">
            <option>Cairo</option>
          </select>
        </div>
        <div className="mb-3 w-50 px-1">
          <label for="role-input" className="form-label main-color">Role</label>
          <input type="text" className="form-control" id="role-input" placeholder='Role' />
        </div>
        <input type='submit' className='w-50' />
      </form>
      <div className='price'>
        <span className='fw-bolder'>Price:</span> <span>251</span> L.E
      </div>
    </div>
  )
}
