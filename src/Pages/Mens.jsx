import React from 'react'
import Brands from '../components/Brands'
import FetchMensClothes from '../components/FetchMensClothes'
import MensList from '../components/MensList'

function Mens() {
  return (
    <div>
      <MensList />
      <Brands />
      <FetchMensClothes />
    </div>
  )
}

export default Mens
