import Image from 'next/image';
import React from 'react';

function Shelter() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Shelter Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Image
          src="https://images.pexels.com/photos/1739855/pexels-photo-1739855.jpeg?auto=compress&cs=tinysrgb&w=600" // Ensure this path is correct relative to the public directory
          alt="Shelter Image 1"
          width={500}
          height={300}
          layout="responsive"
          objectFit="cover"
        />
        <Image
          src="https://images.pexels.com/photos/3316278/pexels-photo-3316278.jpeg?auto=compress&cs=tinysrgb&w=600" // Ensure this path is correct relative to the public directory
          alt="Shelter Image 2"
          width={500}
          height={300}
          layout="responsive"
          objectFit="cover"
        />
      </div>

      {/* Shelter Information */}
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to Our Shelter</h1>
        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
        <p className="text-gray-700 mb-4">
          Our shelter is dedicated to providing a safe and nurturing environment for those in need. We strive to offer support, resources, and a sense of community to help individuals rebuild their lives.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Get Involved</h2>
        <p className="text-gray-700 mb-4">
          Join us in making a difference. Whether through volunteering, donations, or spreading awareness, your involvement can help change lives.
        </p>
        <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Shelter;