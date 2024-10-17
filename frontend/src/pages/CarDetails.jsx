import { useParams } from "react-router-dom";
import { Button, Datepicker } from "flowbite-react";

const CarDetails = () => {
  const { carId } = useParams();

  return (
    <div className="w-full px-[20vw] py-4">
      <div className="p-4 rounded-lg shadow-2xl">
        <img src="https://placehold.co/600x400" className="min-w-full h-[50vh]" alt="" />
        <h1>{carId}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          temporibus nisi maiores voluptatum quisquam dicta officiis, deserunt
          necessitatibus perspiciatis. Aliquid.
        </p>
        <p>Price: ₹1000 per day</p>
        <p>Available: Yes</p>
        <Datepicker inline />
        <Button color="blue" pill>
          Book
        </Button>
      </div>
    </div>
  );
};

export default CarDetails;
