import Breadcrumb from "../Breadcrumb";
import NewRoomsList from "../NewRoomsList";

export default function CalculationOfFinishing() {
  let path = [{text: 'Home', link: '/'}, {text: 'Finishing Quantity'}]

  return (
    <div className='page container'>
      <div className='section'>
        <Breadcrumb path={path} />
        <div className='selling-header d-md-flex align-items-center gap-3'>
          <div className='selling-header__text'>
            <h1 className='fw-bold'>Calculation of <br /> <span className='selling-header__sub-title'>finishing quantity</span></h1>
            <p>You can now add the details of your residential unit, and we will calculate its price accordinng to the area and the prices recognized in its surrounding</p>
          </div>
          <div className='selling-header__img d-none d-lg-block'>
            <img src='/images/asset-2.jpeg' className='w-100' alt='' />
          </div>
        </div>
      </div>
      <h3 className='text-center secondary-color mb-5'>To find out the amount of finishing your unit, please enter following data</h3>
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
          <label htmlFor="finish-ratio-input" className="form-label main-color">Finishing Ratio</label>
          <select id="finish-ratio-input" className="form-select">
            <option>Superlux</option>
          </select>
        </div>
        <div className="mb-3 w-100 px-1">
          <label htmlFor="height-input" className="form-label main-color">Height</label>
          <input type="text" className="form-control w-50" id="height-input" placeholder='Height' />
        </div>
        <div className='divider'></div>

        <NewRoomsList />
        
        <div className='mb-3 w-100 px-1'>
          <input type='submit' className='w-100' />
        </div>
      </form>
      <div className='price mb-5'>
        <span className='fw-bolder'>Number of cement bags:</span> <span>3</span>
      </div>
    </div>
  )
}
