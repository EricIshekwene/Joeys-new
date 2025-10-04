import React, { useState, useEffect } from 'react'
import bar_drinks from './assets/background/bar_drinks.jpg'
import bar_background from './assets/background/bar_background.jpg'
export default function ViewMenus() {
  const images = [bar_drinks, bar_background, bar_drinks];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 1000); 
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex flex-col justify-center items-center h-160 gap-10 relative overflow-hidden">
      {images.map((img, idx) => (
        <div
          key={idx}
          className="absolute inset-0 w-full h-full transition-opacity duration-3000"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: idx === currentIndex ? 1 : 0,
            zIndex: 0,
          }}
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