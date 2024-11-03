import React from 'react'
import Image from 'next/image';


function Weather() {
  return (
    <div className="max-w-md mx-auto bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:bg-blue-50 transition-colors duration-300">
      <div className="relative">
        <Image
          src="https://images.pexels.com/photos/1154510/pexels-photo-1154510.jpeg?auto=compress&cs=tinysrgb&w=600" // Ensure this path is correct relative to the public directory
          alt="Weather Image"
          width={400} // Adjust width as needed
          height={250} // Adjust height as needed
          layout="responsive"
          objectFit="cover"
          className="hover:opacity-90 transition-opacity duration-300"
        />
      </div>
      <div className="p-5">
        <h2 className="mb-2 text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300">Weather Forecast</h2>
        <p className="text-gray-700 hover:text-blue-500 transition-colors duration-300">
          Stay updated with the latest weather conditions and forecasts. Plan your day with confidence knowing the weather ahead.
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Weather;