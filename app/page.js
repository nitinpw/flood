"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const slides = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/14000726/pexels-photo-14000726.jpeg?auto=compress&cs=tinysrgb&w=600",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/14823613/pexels-photo-14823613.jpeg?auto=compress&cs=tinysrgb&w=600",
    url: "/",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/14823609/pexels-photo-14823609.jpeg?auto=compress&cs=tinysrgb&w=600",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className="h-[calc(100vh-80px)] overflow-hidden relative">
      <div
        className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((slide) => (
          <div
            className={`${slide.bg} w-screen h-full flex flex-col`}
            key={slide.id}
          >
            {/* IMAGE FULL WIDTH */}
            <div className="w-full h-full relative">
              <Image
                src={slide.img}
                alt=""
                layout="fill"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
        {slides.map((slide, index) => (
          <div
            className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
              current === index ? "scale-150" : ""
            }`}
            key={slide.id}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  
    <div className='flex justify-center items-center gap-14 bg-black'>
    <div className=" flex justify-center items-center  max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div>
      <a href="#">
        <Image
          className="rounded-t-lg"
          src="https://images.pexels.com/photos/6471970/pexels-photo-6471970.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          width={400} // Adjust width as needed
          height={250} // Adjust height as needed
          layout="responsive"
          objectFit="cover"
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Flood Wheather Alert
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Show Alert
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
        </div>
      </div>
      
    </div>
    <div className=" flex justify-center items-center  max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div>
      <a href="#">
        <Image
          className="rounded-t-lg"
          src="https://images.pexels.com/photos/14000672/pexels-photo-14000672.jpeg?auto=compress&cs=tinysrgb&w=600" // Ensure this path is correct relative to the public directory
          alt=""
          width={400} // Adjust width as needed
          height={250} // Adjust height as needed
          layout="responsive"
          objectFit="cover"
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Flood Management Shelter 
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Shelter
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
        </div>
      </div>
      
    </div>
    <div className=" flex justify-center items-center my-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div>
      <a href="/">
        <Image
          className="rounded-t-lg"
          src="https://images.pexels.com/photos/1633943/pexels-photo-1633943.jpeg?auto=compress&cs=tinysrgb&w=6000" // Ensure this path is correct relative to the public directory
          alt=""
          width={400} // Adjust width as needed
          height={250} // Adjust height as needed
          layout="responsive"
          objectFit="cover"
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Flood Management Control
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
        </div>
      </div>
      
    </div>
    
    </div>

    <div className='flex justify-center gap-24 my-10'>
    <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <div className="w-full md:w-400">
        <Image
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:rounded-none md:rounded-s-lg"
          src="https://images.pexels.com/photos/14823609/pexels-photo-14823609.jpeg?auto=compress&cs=tinysrgb&w=600" // Ensure this path is correct relative to the public directory
          alt="Noteworthy technology acquisitions 2021"
          width={400} // Adjust width as needed
          height={450} // Adjust height as needed
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Flood Damage
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
      </div>
    </a>
    <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <div className="w-full md:w-400">
        <Image
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:rounded-none md:rounded-s-lg"
          src="https://images.pexels.com/photos/6646865/pexels-photo-6646865.jpeg?auto=compress&cs=tinysrgb&w=600" // Ensure this path is correct relative to the public directory
          alt="Noteworthy technology acquisitions 2021"
          width={400} // Adjust width as needed
          height={450} // Adjust height as needed
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Food Resources
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
      </div>
    </a>
    </div>
    <div className='flex justify-center gap-24 my-10'>
    <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <div className="w-full md:w-400">
        <Image
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:rounded-none md:rounded-s-lg"
          src="https://images.pexels.com/photos/28123778/pexels-photo-28123778/free-photo-of-woman-holding-bag-on-stretcher.jpeg?auto=compress&cs=tinysrgb&w=600" // Ensure this path is correct relative to the public directory
          alt="Noteworthy technology acquisitions 2021"
          width={400} // Adjust width as needed
          height={450} // Adjust height as needed
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Saftey Kit 
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
      </div>
    </a>
    <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <div className="w-full md:w-400">
        <Image
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:rounded-none md:rounded-s-lg"
          src="https://images.pexels.com/photos/29143674/pexels-photo-29143674/free-photo-of-road-warning-signs-by-coastal-waterside.jpeg?auto=compress&cs=tinysrgb&w=600" // Ensure this path is correct relative to the public directory
          alt="Noteworthy technology acquisitions 2021"
          width={400} // Adjust width as needed
          height={450} // Adjust height as needed
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Flood Zone
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
      </div>
    </a>
    </div>
    </>
  );
}