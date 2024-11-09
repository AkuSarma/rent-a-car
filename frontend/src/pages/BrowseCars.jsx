import CarsView from '../components/CarsView';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../context/authContext';

const BrowseCars = () => {
  const {user} = useAuth();
  const navigate = useNavigate();

  if (!user){
    navigate("/registration");
  }


  return (
    <div className="">
      <CarsView carsPerPage={9} />
    </div>
  );
}

export default BrowseCars