import React, { useState, useEffect } from 'react'
import food1 from './assets/background/DSC_0549.jpg'
import food2 from './assets/background/DSC07658.jpg'
import food3 from './assets/background/DSC07692.jpg'
import food4 from './assets/background/DSC_0563.jpg'
import food5 from './assets/srcimages/DSC_0573.jpg'
export default function ViewMenus() {
  const images = [food1, food2, food3, food4, food5  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 8000); 
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full flex flex-col p-4 justify-center items-center h-80 md:h-100 lg:h-120 xl:h-160 overflow-hidden">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="carousel"
          className={`absolute w-full h-full object-cover transition-all duration-[1500ms] ease-in-out
            ${index === currentIndex 
              ? "opacity-100 blur-0" 
              : "opacity-0 blur-xs"}`}
        />
      ))}
      <div className="relative z-10 flex flex-col justify-center items-center w-full">
        <p className='text-2xl lg:text-4xl md:text-3xl sm:text-2xl xl:text-6xl font-raleway font-bold text-center text-white mb-4'>
          Eat and Drink to your heart's content
        </p>
    <button className='border-2 border-white text-white font-raleway font-bold py-2 px-4 mt-4 rounded-full hover:bg-white hover:text-[#4b0e1e] transition-all duration-300 ease-in-out'>View Menus</button>
  </div>
  </div>
  )
}