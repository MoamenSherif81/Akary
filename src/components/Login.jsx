import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Login(props) {
  return (
    <>
      { props.loginActive &&
        <div className='user-login__cont rounded-4'>
          <div className='position-relative'>
            <img className='user-login__logo m-auto mb-3' src='/images/logo.png' alt='akary logo' />
            <div className='login__tabs mb-3'>
              <button className={'login__tab ' + (props.login && 'active')} onClick={() => props.setLogin(true)}>
                Login
              </button>
              <button className={'login__tab ' + (!props.login && 'active')} onClick={() => props.setLogin(false)}>
                Register
              </button>
            </div>
            {
              props.login ? 
              <div className='login__cont'>
                <p>Log in to your account</p>
                <div className='login__methods d-flex gap-3 justify-content-center'>
                  <a href='#'><img src='/images/facebook.svg' alt='login with facebook'></img></a>
                  <a href='#'><img src='/images/google.svg' alt='login with google'></img></a>
                </div>
                <p>Or login with an email</p>
                <form className='login__form'>
                  <input type='text' className='w-100 mb-3' placeholder='Email address' />
                  <input type='text' className='w-100 mb-1' placeholder='Password' /><br/>
                  <div className='w-100 text-end mb-3'>
                    <a href="#" className='main-color text-decoration-none'>Forget Password?</a>
                  </div>
                  <input type='submit' className='w-100' value='Login' />
                </form>
              </div>
              :
              <div className='register__cont'>
                <p>Create account</p>
                <div className='login__methods d-flex gap-3 justify-content-center'>
                  <a href='#'><img src='/images/facebook.svg' alt='login with facebook'></img></a>
                  <a href='#'><img src='/images/google.svg' alt='login with google'></img></a>
                </div>
                <p>Or Register with an email</p>
                <form className='login__form'>
                  <input type='text' className='w-100 mb-3' placeholder='Username' />
                  <input type='email' className='w-100 mb-3' placeholder='Email address' />
                  <input type='password' className='w-100 mb-3' placeholder='Password' /><br/>
                  <input type='password' className='w-100 mb-3' placeholder='Confirm Password' /><br/>
                  <div className='w-100 text-start mb-3 terms'>
                    <div className='d-flex align-items-start gap-2 mb-1'>
                      <input type='checkbox' className='mt-1' />
                      <label>Agree to Terms and Conditions & Privacy Policy</label>
                    </div>
                    <div className='d-flex align-items-start gap-2'>
                      <input type='checkbox' className='mt-1' />
                      <label>Agree to get time-saving design articles and new release notifications</label>
                    </div>
                  </div>
                  <input type='submit' className='w-100' value='Register' />
                </form>
              </div>
            }
            <div className='login__close'>
              <FontAwesomeIcon icon={faX} onClick={() => props.setLoginActive(false)}/>
            </div>
          </div>
        </div>
      }
      {props.loginActive && <div className='overlay' onClick={() => props.setLoginActive(false)}></div>}
    </>
  )
}
