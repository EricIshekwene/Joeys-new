import React from 'react'
import food1 from './assets/background/DSC_0549.jpg'
import food1compressed from './assets/compressed/DSC_0549.jpg'
export default function ViewMenus({ menus_h1, menu_pdf }) {
  return (
    <div
      className="relative w-full flex flex-col p-4 justify-center items-center h-80 md:h-100 lg:h-120 xl:h-160 overflow-hidden"
      id="menus"
    >
      <img
        src={food1compressed}
        alt="menu background"
        className="absolute w-full h-full object-cover"
      />
      <div className="relative z-10 flex flex-col justify-center items-center w-full">
        <p className="text-2xl lg:text-4xl md:text-3xl sm:text-2xl xl:text-6xl font-raleway font-bold text-center text-white mb-4">
          {menus_h1}
        </p>
        <button className="border-2 border-white text-white font-raleway font-bold py-2 px-4 mt-4 rounded-full hover:bg-white hover:text-[#4b0e1e] transition-all duration-300 ease-in-out">
          View Menus
        </button>
      </div>
    </div>
  )
}
