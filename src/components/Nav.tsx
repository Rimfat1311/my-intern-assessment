import React from 'react'

export default function Nav() {
  return (
    <nav className='px-10 py-5 flex justify-between items-center text-center text-[#D0D0D0D0] bg-black gap-2'>
      <div>
        <h1 className='text-3xl'>Electronics, Fashion, Home Goods</h1>
        <p>Vibrant Marketplace</p>
      </div>
      <ul className='flex space-x-10'>
        <li>Shop Now</li>
        <li>Deals</li>
        <li>Categories</li>
        <li>About Us</li>
        <li>Contact</li>
      
      </ul>
      <button className='shardow shadow-sm bg-[#BBA27B] py-3 px-6 rounded-sm'>Get Started</button> 
    </nav>
  )
}
