import NewRoomsList from "../NewRoomsList";

export default function SellUnit() {

  return (
    <div className='page container'>
      <div className='section'>
        <div className='selling-header d-md-flex align-items-center gap-3'>
          <div className='selling-header__text'>
            <h1 className='fw-bold'>Show your unit</h1>
            <p>You can now display your unit for sale or rent and view it on our website</p>
          </div>
          <div className='selling-header__img d-none d-lg-block'>
            <img src='/images/asset-2.jpeg' className='w-100' alt='' />
          </div>
        </div>
      </div>
      <h3 className='text-center secondary-color mb-5'>View your unit fill oput the following form</h3>
      <form className='selling-form d-flex justify-content-center flex-wrap'>
        <div className="mb-3 w-50 px-1">
          <label htmlFor="unit-conditio-input" className="form-label main-color">Unit Condition</label>
          <select id="unit-conditio-input" className="form-select">
            <option>Semi Finished</option>
            <option>Not Finished</option>
            <option>Core & Shell</option>
          </select>
        </div>
        <div className="mb-3 w-50 px-1">
          <label htmlFor="space-input" className="form-label main-color">Space</label>
          <input type="text" className="form-control w-100" id="space-input" placeholder='Space' />
        </div>
        <div className="mb-3 w-100 px-1">
          <label htmlFor="location-input" className="form-label main-color">Location description</label>
          <input type="text" className="form-control w-100" id="location-input" placeholder='Location' />
        </div>
        <div className="mb-3 w-100 px-1">
          <label htmlFor="location-google-input" className="form-label main-color">Location from google maps</label>
          <input type="text" className="form-control w-100" id="location-google-input" placeholder='Location Link' />
        </div>
        <div className="mb-3 w-100 px-1">
          <label htmlFor="summary-input" className="form-label main-color">Short summary</label>
          <input type="text" className="form-control w-100" id="summary-input" placeholder='Short summary' />
        </div>
        <div className='divider'></div>

        <NewRoomsList />
        
        <h5 className="text-center secondary-color">More details</h5>

        <textarea className="w-100 mb-3 more-details-input"></textarea>

        <div className='mb-3 w-100 px-1'>
          <input type='submit' className='w-100' />
        </div>
      </form>
    </div>
  )
}
