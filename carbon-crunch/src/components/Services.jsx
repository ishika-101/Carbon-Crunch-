import React from 'react';

const Services = () => {
    return (
      <section id="services" className="bg-white py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <span className="bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-medium">
            How It Works?
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mt-4">
            Getting Started is easy
          </h2>
          <p className="text-gray-600 mt-2">How Carboncrunch SAAS works</p>
        </div>
  
        {/* Steps Section */}
        <div className="mt-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {["01", "02", "03"].map((num, index) => (
            <div
              key={index}
              className="p-6 bg-gray-100 rounded-lg transition-shadow duration-300 hover:shadow-lg group"
            >
              <span className="text-black font-bold text-lg transition-colors duration-300 group-hover:text-green-600">
                {num}
              </span>
              <h3 className="text-black font-semibold mt-2 transition-colors duration-300 group-hover:text-green-600">
                Track and manage your Net Zero Pathway
              </h3>
              <p className="text-gray-600 mt-1">
                Set decarbonisation targets, obtain insights on the amount of emissions to be emitted by the target year.
              </p>
            </div>
          ))}
        </div>
  
        {/* Image Section */}
        <div className="mt-12 flex justify-center">
          <img
            src="/src/assets/servicesframe.png"
            alt="Carboncrunch Dashboard"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>
    );
  };
  
  export default Services;
  