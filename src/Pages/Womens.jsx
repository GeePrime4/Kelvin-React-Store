import React from 'react'
import Brands from '../components/Brands'
import FetchWomensClothes from '../components/FetchWomensClothes'
import WomensList from '../components/WomensList'

function Womens() {
  return (
    <div>
      <WomensList />
      <Brands />
      <FetchWomensClothes />
    </div>
  )
}

export default Womens
