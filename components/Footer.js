import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm mt-24'>
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <div className="text-2xl tracking-wide">Flood Management</div>
          </Link>
          <p>Winding way, Central plaza, WillowBrook, CA 90210, United States</p>
          <span className='font-semibold'>hello@nitin.dev</span>
          <span className='font-semibold'>+91 1234567890</span>
          <div className="flex gap-6">
            <Image src="/facebook.png" alt='' width={16} height={16}/>
            <Image src="/instagram.png" alt='' width={16} height={16}/>
            <Image src="/youtube.png" alt='' width={16} height={16}/>
            <Image src="/pinterest.png" alt='' width={16} height={16}/>
            <Image src="/x.png" alt='' width={16} height={16}/>
          </div>
        </div>
        {/* CENTER */}
        <div className="hidden lg:flex justify-between w-1/2">
        <div className="flex flex-col justify-between">
          <h1 className="font-medium text-lg">INFORMATION</h1>
          <div className="flex flex-col gap-6">
            <Link href="">About Us</Link>
            <Link href="">Safety Equipment</Link>
            <Link href="">Wheather</Link>
            <Link href="">Food Resources</Link>
            <Link href="">Contact Us</Link>
          </div>
        </div>
        
        <div className="flex flex-col justify-between">
          <h1 className="font-medium text-lg">HELP</h1>
          <div className="flex flex-col gap-6">
            <Link href="">Customer Service</Link>
            <Link href="">My Account</Link>
            <Link href="">Emergency</Link>
            <Link href="">Legal & Privacy</Link>
            <Link href="">Shelter</Link>
          </div>
        </div>
        </div>
        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
        <h1 className='font-medium text-lg'>SUBSCRIBE</h1>
        <p>Subscribe to know the Flood Area and precaution form flood !</p>
        <div className='flex'>
          <input type="text" placeholder='Email address' className='p-4 w-3/4' />
          <button className='w-1/4 bg-lama text-white'>JOIN</button>
          </div>
          <span className='font-semibold'>Flood Area</span>
          <div className='flex justify-between'>
            <p>Brahmaputra</p>
            <p>Ganga</p>
            <p>River Basins</p>
            
        </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className="">© 2024 Flood Management Contorl</div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="">
            <span className="text-gray-500 mr-4">Language</span>
            <span className="font-medium">India | Hindi & English</span>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Footer
