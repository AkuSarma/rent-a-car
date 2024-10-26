import React from "react";

const Offers = () => {
  const offersList = [
    {
      title: "Long-term Rental",
      description: "Book for a week and save 15% on your total.",
      discount: "15%",
    },
    {
      title: "First-Time User",
      description: "Enjoy 10% off on your first rental with us.",
      discount: "10%",
    },
    {
      title: "Festive Season",
      description: "Up to 25% off on all car bookings during festivals!",
      discount: "25%",
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Special Offers
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {offersList.map((offer, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-md p-6 bg-white hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
              <p className="text-gray-700 mb-4">{offer.description}</p>
              <div className="text-lg font-semibold text-blue-600 mb-4">
                Save {offer.discount}
              </div>
              <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors duration-200">
                View Offer
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
