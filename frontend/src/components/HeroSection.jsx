import { Link } from "react-router-dom";
import carIllustration from "../images/car-illustration.gif"; 

const HeroSection = () => {
  return (
    <section className="relative w-full h-[90vh] bg-gray-900 flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1439792675105-701e6a4ab6f0"
          alt="Car Rental Hero Background"
          className="object-cover w-full h-full opacity-60"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center w-full max-w-6xl px-4 lg:px-12">
        {/* Text Content */}
        <div className="text-left text-white max-w-xl space-y-4">
          <h1 className="text-4xl sm:text-6xl font-extrabold">
            Find Your Perfect Ride
          </h1>
          <p className="text-lg sm:text-xl font-light">
            Explore our wide selection of premium cars for rent. Luxury,
            economy, or family trips, we've got you covered.
          </p>
          <Link
            to="browse-cars"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300 ease-in-out"
          >
            Browse Cars
          </Link>
        </div>

        {/* Illustration */}
        <div className="hidden lg:block lg:flex-grow ml-10">
          <img
            src={carIllustration}
            alt="Car Illustration"
            className="object-contain w-[70%] h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
