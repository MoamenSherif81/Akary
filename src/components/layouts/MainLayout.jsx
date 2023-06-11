import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Navbar'
import Footer from '../Footer'

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
