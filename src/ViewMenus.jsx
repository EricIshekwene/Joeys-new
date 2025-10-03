import React from 'react'
import bar_drinks from './assets/background/bar_drinks.jpg'
export default function ViewMenus() {
  return (
    <div className='flex flex-col justify-center items-center h-160 gap-10' style={{ backgroundImage: `url(${bar_drinks})`, backgroundSize: 'cover', backgroundPosition: 'center ' }}>
    <p className='text-2xl lg:text-4xl md:text-3xl sm:text-2xl xl:text-6xl font-raleway font-bold text-center text-white'>Eat and Drink to your heart's content</p>
    <button className='border-2 border-white text-white font-raleway font-bold py-2 px-4 rounded-full hover:bg-white hover:text-[#4b0e1e] transition-all duration-300 ease-in-out'>View Menus</button>
  </div>
  )
}