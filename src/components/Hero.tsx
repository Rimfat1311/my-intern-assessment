
import React from 'react'
import Image from "next/image";
import background from "@/public/images/background.png"


const Hero = () => {
  return (
    <div className=" h-100  bg-no-repeat bg-right bg-black object-cover"  >
        <Image className='relative object-cover h-screen opacity-50' src={background} alt="" />
    {/* <div className="absolute object-cover inset-0 bg-black bg-opacity-60"></div> */}
    <div className="absolute  top-72 ml-36 space-y-10 flex flex-col items-start justify-center text-left text-white">
      <h1 className="text-4xl md:text-6xl font-bold w-4/5">Discover Your Next Favorite Product!</h1>
     
      <a href="#" className="top-20 mt-6 px-4 py-2 bg-[#BBA27B] text-white rounded hover:bg-red-600">
      Sign Up for Free
      </a>
    </div>
  </div>
  )
}

export default Hero