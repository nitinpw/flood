import Image from 'next/image';
import React from 'react';

function SafetyEquipment() {
  return (
    <section className="safety-equipment py-12">
      <div className="equipment-contents max-w-4xl mx-auto">
        
        <div className="equipment-item flex flex-col md:flex-row items-center mb-8">
          <div className="equipment-icon mb-4 md:mb-0 md:mr-4">
            <Image
              src="https://images.pexels.com/photos/3683088/pexels-photo-3683088.jpeg?auto=compress&cs=tinysrgb&w=600" // Ensure this path is correct relative to the public directory
              alt="medicine"
              width={150}
              height={150}
            />
          </div>
          <div className="equipment-desc text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">Fristaid Kit</h2>
            <p className="text-gray-700">
            Essential supplies for emergency medical care and minor injuries
            </p>
          </div>
        </div>

        <div className="equipment-item flex flex-col md:flex-row items-center mb-8">
          <div className="equipment-icon mb-4 md:mb-0 md:mr-4">
            <Image
              src="https://images.pexels.com/photos/3786247/pexels-photo-3786247.jpeg?auto=compress&cs=tinysrgb&w=600" // Ensure this path is correct relative to the public directory
              alt="Safety Gloves"
              width={150}
              height={150}
            />
          </div>
          <div className="equipment-desc text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">Safety Gloves</h2>
            <p className="text-gray-700">
              Our safety gloves offer excellent grip and protection against cuts and abrasions. They are perfect for a variety of industrial applications.
            </p>
          </div>
        </div>

        <div className="equipment-item flex flex-col md:flex-row items-center">
          <div className="equipment-icon mb-4 md:mb-0 md:mr-4">
            <Image
              src="https://images.pexels.com/photos/9065476/pexels-photo-9065476.jpeg?auto=compress&cs=tinysrgb&w=600" // Ensure this path is correct relative to the public directory
              alt="Safety Vest"
              width={150}
              height={150}
            />
          </div>
          <div className="equipment-desc text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">Safety Vest</h2>
            <p className="text-gray-700">
              Our high-visibility safety vests are essential for ensuring you are seen in low-light conditions. They are lightweight and comfortable to wear.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default SafetyEquipment;