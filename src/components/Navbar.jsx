import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='bg-white'>
      <div className='container d-flex justify-content-between align-items-center'>
        <div className='nav__logo'>
          <img src='images/asset-1.png' alt='logo' />
        </div>
        <ul className='nav__list d-flex list-unstyled mb-2 mt-3 fw-bolder'>
          <li className='nav__item px-3 py-2'>
            <NavLink to='/' className='px-2 py-2'>Home</NavLink>
          </li>
          <li className='nav__item px-3 py-2'>
            <NavLink to='services' className='px-2 py-2'>Services</NavLink>
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
