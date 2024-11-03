import Image from 'next/image';
import React from 'react';

function FoodResource() {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 m-10">
      <div className="relative">
        <Image
          src="https://images.pexels.com/photos/6646853/pexels-photo-6646853.jpeg?auto=compress&cs=tinysrgb&w=600"// Ensure this path is correct relative to the public directory
          alt="Delicious Food"
          width={400} // Adjust width as needed
          height={250} // Adjust height as needed
          layout="responsive"
          objectFit="cover"
          className="hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-5">
        <h2 className="mb-2 text-xl font-bold text-gray-900">Food Resource</h2>
        <p className="text-gray-700">
        Essential supplies to sustain nutrition during emergencies
        </p>
      </div>
    </div>
  );
}

export default FoodResource;