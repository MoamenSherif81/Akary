import React, { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router'
import Navbar from '../Navbar'
import Footer from '../Footer'

export default function MainLayout() {
  const [loginActive, setLoginActive] = useState(false);
  const [login, setLogin] = useState(true)

  return (
    <>
      <ScrollToTop />
      <Navbar loginActive={loginActive} setLoginActive={setLoginActive} login={login} setLogin={setLogin} />
      <Outlet />
      <Footer loginActive={loginActive} setLoginActive={setLoginActive} login={login} setLogin={setLogin} />
    </>
  )
}


const ScrollToTop = () => {
  const { pathname } = useLocation(); 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}


