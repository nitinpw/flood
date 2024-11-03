import Image from 'next/image';
import React from 'react';

function Emergency() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <Image
          src="https://images.pexels.com/photos/14776512/pexels-photo-14776512.jpeg?auto=compress&cs=tinysrgb&w=600" // Ensure this path is correct relative to the public directory
          alt="Emergency Situation"
          width={800} // Set your desired width
          height={400} // Set your desired height
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Emergency Alert</h1>
        <h2 className="text-2xl font-semibold mb-2">Stay Informed</h2>
        <p className="text-gray-700 mb-4">
          In the event of an emergency, it is crucial to stay informed with the latest updates and instructions from local authorities. Ensure you have access to reliable sources of information.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Safety First</h2>
        <p className="text-gray-700 mb-4">
          Your safety is our top priority. Follow all safety protocols and guidelines to protect yourself and your loved ones during an emergency situation.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Community Support</h2>
        <p className="text-gray-700">
          Remember, we are all in this together. Support your community by checking on neighbors and offering help where possible. Together, we can overcome any challenge.
        </p>
      </div>
    </div>
  );
}

export default Emergency;