import React from 'react'
import Courousel from '../components/Courousel'
import CarsView from '../components/CarsView'

const Home = () => {
  return (
    <div className="min-h-[100vh]">
      <Courousel />
      <CarsView carsPerPage={6}/>
    </div>
  );
}

export default Home