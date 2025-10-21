import React from 'react'
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import { Outlet } from 'react-router-dom'
// Outlet lets you use your base components and render variable components in place of outlet
function Layout() {
  return (
    <div>
      <Header />
      <Outlet /> 
      <Footer />
    </div>
  )
}

export default Layout
