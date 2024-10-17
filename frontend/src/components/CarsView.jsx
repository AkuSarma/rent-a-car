import CarCard from "./CarCard";
import { useState } from "react";
import { Pagination } from "flowbite-react";

const CarsView = ({ carsPerPage }) => {
  const carsList = [
    "Nexon",
    "Nano",
    "I20",
    "Scorpio",
    "Thar",
    "Bolero",
    "XUV700",
    "Altroz",
    "Tigor",
    "Harrier",
    "Safari",
    "Kwid",
    "Tiago",
    "Seltos",
    "Sonet",
    "Creta",
    "Verna",
    "Venue",
    "Ciaz",
    "Brezza",
    "Swift",
    "Dzire",
    "Baleno",
    "Celerio",
    "Ignis",
    "Ertiga",
    "XL6",
    "Magnite",
    "Kiger",
  ];

  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the current slice of cars to show
  const startIndex = (currentPage - 1) * carsPerPage;
  const endIndex = startIndex + carsPerPage;
  const currentCars = carsList.slice(startIndex, endIndex);

  const totalPages = Math.ceil(carsList.length / carsPerPage);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="px-[10vw]">
      <form className="max-w-[70vw] mx-auto my-10">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>

      <div className="grid md:grid-cols-3 gap-10 grid-cols-1">
        {currentCars.map((car, index) => (
          <CarCard key={index} car={car} />
        ))}
      </div>

      <div className="flex overflow-x-auto sm:justify-center my-8">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default CarsView;
