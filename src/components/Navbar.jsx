import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Login from './Login'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Navbar() {
  const [loginActive, setLoginActive] = useState(false);
  const [login, setLogin] = useState(true)
  const [navActive, setNavActive] = useState(false);
  const refNavlist = useRef(null)
  const refBars = useRef(null)

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick, true);
  })

  function handleOutsideClick(e){
    if(!refNavlist.current.contains(e.target) && !refNavlist.current.contains(e.target)){
      setNavActive(false)
    }
  }

  return (
    <nav className='bg-white'>
      <div className='nav-content container d-flex justify-content-between align-items-center'>
        <div className='nav__logo'>
          <img src='/images/asset-1.png' alt='logo' />
        </div>
        <ul 
          className={'nav__list container container-md-fluid justify-content-center d-flex list-unstyled mb-2 mt-3 fw-bolder ' + (navActive ? 'list--active' : '')} 
          ref={refNavlist}
        >
          <li className='nav__item px-3 py-2'>
            <NavLink to='/' className='px-2 py-2'>Home</NavLink>
          </li>
          <li className='nav__item nav__services-item px-3 py-2 position-relative'>
            <NavLink to='services' className='px-2 py-2' onClick={ (event) => event.preventDefault() }>Services</NavLink>
            <ul className='nav__services list-unstyled position-absolute'>
              <li><Link to='/services/unit-pricing'>Unit Pricing</Link></li>
              <li><Link to='/services/calculation-of-finishing'>Finishing</Link></li>
              <li><Link to='/services/sell-unit'>Sell Unit</Link></li>
              <li><Link to='/services/all-units'>All Units</Link></li>
            </ul>
          </li>
          <li className='nav__item px-3 py-2'>
            <NavLink to='about' className='px-2 py-2'>About</NavLink>
          </li>
          <li className='nav__item px-3 py-2'>
            <NavLink to='contact' className='px-2 py-2'>Contact</NavLink>
          </li>
        </ul>
        <div className='nav__user mt-1'>
          <div className='nav__login'>
            <button className='nav__login-button fw-bolder' 
                    onClick={() => {setLoginActive(true)
                                  setLogin(true)}}>
              Login
            </button>
            <button className='nav__login-button fw-bolder'
                    onClick={() => {setLoginActive(true)
                                    setLogin(false)}}>
              Register
            </button>
          </div>
          <div className='nav__profile'>
            <img className='nav__profile-icon' src='/images/profile-user.png' alt='profile-icon' />
          </div>
          <span 
            className={'nav__bars'}
            onClick={() => {setNavActive(!navActive)}}
            ref={refBars}
          >
            <FontAwesomeIcon icon={faBars} />
          </span>
        </div>
      </div>
      <Login loginActive={loginActive} setLoginActive={setLoginActive} login={login} setLogin={setLogin} />
    </nav>
  )
}
