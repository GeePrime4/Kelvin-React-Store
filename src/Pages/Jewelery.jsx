import React from 'react'
import Brands from '../components/Brands'
import FetchJewelery from '../components/FetchJewelery'
import JeweleryList from '../components/JeweleryList'

function Jewelery() {
  return (
    <div>
      <JeweleryList />
      <Brands/>
      <FetchJewelery />
    </div>
  )
}

export default Jewelery
