import React from 'react'
import Brands from '../components/Brands'
import {FetchElectronics} from '../components/FetchElectronics'
import Banner from '../components/Banner'
import ElectronicsList from '../components/ElectronicsList'

function Electronics() {
  return (
    
    <div>         
      <ElectronicsList />
      <Brands />
      <FetchElectronics/>
    </div>
  )
}

export default Electronics
