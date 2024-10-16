import { Button } from "flowbite-react";

const CarCard = ({car}) => {
  return (
    <div className="hover:shadow-2xl p-4 rounded-lg">
      <img src="https://placehold.co/600x400" className="w-full" alt="" />
      <h1>{car}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
        temporibus nisi maiores voluptatum quisquam dicta officiis, deserunt
        necessitatibus perspiciatis. Aliquid.
      </p>
      <p>Price: ₹1000 per day</p>
      <p>Available: Yes</p>
      <Button color="blue" pill>
        Book
      </Button>
    </div>
  );
};

export default CarCard;
