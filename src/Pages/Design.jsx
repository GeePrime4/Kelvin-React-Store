import React, { useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
function Design() {  

  return (
      <div>
        <Nav />
        <Outlet />
        <Footer />
      </div>
  )    
}

export default Design
