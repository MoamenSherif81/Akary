import React from 'react'

export default function Navbar() {
  return (
    <nav className='bg-white'>
      <div className='container d-flex justify-content-between align-items-center'>
        <div className='nav__logo'>
          <img src='images/asset-1.png' alt='logo' />
        </div>
        <ul className='nav__list d-flex list-unstyled mb-2 mt-3 fw-bolder'>
          <li className='nav__item nav__item--active px-2 py-2'>Home</li>
          <li className='nav__item px-3 py-2'>Services</li>
          <li className='nav__item px-3 py-2'>About</li>
          <li className='nav__item px-3 py-2'>Contact</li>
        </ul>
        <div className='nav__user mt-1'>
          <div className='nav__login'>
            <button className='nav__login-button fw-bolder'>Login</button>
            <button className='nav__login-button fw-bolder'>Register</button>
          </div>
          <div className='nav__profile'>
            <img className='nav__profile-icon' src='images/profile-user.png' alt='profile-icon' />
          </div>
        </div>
      </div>
    </nav>
  )
}
