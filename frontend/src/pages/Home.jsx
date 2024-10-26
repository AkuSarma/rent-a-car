// import Courousel from '../components/Courousel'
import CarsView from '../components/CarsView'
import HeroSection from '../components/HeroSection';
import Offers from '../components/Offers';

const Home = () => {
  return (
    <div className="min-h-[100vh]">
      {/* <Courousel /> */}
      <HeroSection/>      
      <Offers/>
      <CarsView carsPerPage={6}/>
    </div>
  );
}

export default Home