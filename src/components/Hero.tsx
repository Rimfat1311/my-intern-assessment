import React from 'react'


const Hero = () => {
  return (
    <div className="relative h-screen  bg-no-repeat bg-right bg-white" style={{ backgroundImage: "url('/background.png')" }}>
    <div className="absolute inset-0 bg-black opacity-90"></div>
    <div className="relative flex flex-col items-start justify-center h-full text-left text-white">
      <h1 className="text-4xl md:text-6xl font-bold w-1/2">Discover Your Next Favorite Product!</h1>
     
      <a href="#" className="mt-6 px-4 py-2 bg-[#BBA27B] text-white rounded hover:bg-red-600">
      Sign Up for Free
      </a>
    </div>
  </div>
  )
}

export default Hero