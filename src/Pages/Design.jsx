import React, { useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
// import Preview from '../Components/Preview';
function Design() {
  // const [times, setTimes] = useState(0);

  return (
      <div>
        <Nav />
        <Outlet />
        <Footer />
      </div>
  )    
}

export default Design
