import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(props) {
  return (
    <footer>
      <div className='container'>
        <div className='row text-white'>
          <div className='col-12 col-md-5'>
            <img className='footer__logo' src='/images/logo.png' alt='akary logo' />
            <h4>Mission and Value</h4>
            <p>We seek to facilitate the bying nd selling process of the real estate market amoung people through the use of artificial intelligence</p>
            <div className='contact__social d-flex gap-3 mb-4 '>
              <a href='#'><img src='images/facebook.svg' alt='facebook' /></a>
              <a href='#'><img src='images/insta.svg' alt='insta' /></a>
              <a href='#'><img src='images/youtube.svg' alt='youtube' /></a>
              <a href='#'><img src='images/twitter.svg' alt='twitter' /></a>
            </div>
          </div>
          <div className='col-12 col-md-3'>
            <h3 className='mb-4'>AKARY</h3>
            <ul className='footer__list list-unstyled'>
              <li className='footer__list-item'><Link to='/'>Home</Link></li>
              <li className='footer__list-item'><Link to='/about'>About us</Link></li>
              <li className='footer__list-item'><Link to='/contact'>Contact us</Link></li>
              <li className='footer__list-item'><Link to='/' onClick={(e) => {props.setLoginActive(true); props.setLogin(true); e.preventDefault()}}>Login</Link></li>
              <li className='footer__list-item'><Link to='/' onClick={(e) => {props.setLoginActive(true); props.setLogin(false); e.preventDefault()}}>Register</Link></li>
            </ul>
          </div>
          <div className='col-12 col-md-4'>
            <h3 className='mb-4'>SERVICES</h3>
            <ul className='footer__list list-unstyled'>
              <li className='footer__list-item'><Link to='/services/unit-pricing'>Unit pricing</Link></li>
              <li className='footer__list-item'><Link to='/services/calculation-of-finishing'>Finishing Quantity</Link></li>
              <li className='footer__list-item'><Link to='/services/sell-unit'>Add unit</Link></li>
              <li className='footer__list-item'><Link to='/services/all-units'>Units</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
/*
<button className='nav__login-button fw-bolder' 
        onClick={() => {setLoginActive(true)
                      setLogin(true)}}>
  Login
</button>
<button className='nav__login-button fw-bolder'
        
  Register
</button>
*/