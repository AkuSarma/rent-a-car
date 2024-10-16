import React from 'react'
import Courousel from '../components/Courousel'
import CarsView from '../components/CarsView'

const Home = () => {
  return (
    <div className="min-h-[100vh] px-[10vw]">
      <Courousel/>
      <CarsView/>
    </div>
  )
}

export default Home