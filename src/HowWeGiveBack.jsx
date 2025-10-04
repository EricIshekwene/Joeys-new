import React, { useState, useEffect } from 'react'
import giveback1 from './assets/background/DSC07692.jpg'
import giveback2 from './assets/background/giveback2.jpg'

export default function HowWeGiveBack({ howWeGiveBack_subtext }) {
  const isLarge = useIsLarge();

  function useIsLarge() {
    const [isLarge, setIsLarge] = useState(window.innerWidth >= 930);
    useEffect(() => {
      const handleResize = () => setIsLarge(window.innerWidth >= 930);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return isLarge;
  }

  return (
    <>
      {/* Large screen */}
      {isLarge && (
        <div className="relative flex flex-row justify-center items-center h-120">
          {/* Tint overlay */}
          <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none"></div>

          {/* Background split images */}
          <img src={giveback1} alt="giveback1" className="w-2/3 h-full object-cover z-0" />
          <img src={giveback2} alt="giveback2" className="w-1/3 h-full object-cover z-0" />

          {/* Foreground text */}
          <div className="absolute inset-0 flex flex-col justify-center items-center gap-6 px-10 z-20 text-center">
            <h2 className="text-4xl lg:text-6xl font-cormorant-garamond text-white font-bold">
              How We Give Back
            </h2>
            <p className="text-white w-2/3 lg:w-1/3 text-sm lg:text-lg xl:text-xl font-raleway leading-relaxed">
              {howWeGiveBack_subtext}
                
            </p>
            <button className='border-1  border-white text-white font-raleway  py-2 px-4 mt-4 rounded-full hover:bg-white hover:text-[#4b0e1e] transition-all duration-300 ease-in-out'>
              Call Us to Get Involved
            </button>
          </div>
        </div>
      )}

      {/* Small screen */}
      {!isLarge && (
        <div className="relative flex flex-col justify-center items-center h-120">
          {/* Stacked background images */}
          <div className="absolute inset-0 flex flex-col">
            <img src={giveback1} alt="giveback1" className="w-full h-1/2 object-cover" />
            <img src={giveback2} alt="giveback2" className="w-full h-1/2 object-cover" />
          </div>

          {/* Tint overlay */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>

          {/* Foreground text */}
          <div className="relative z-20 flex flex-col justify-center items-center gap-4 p-6 text-center">
            <h2 className="text-3xl font-cormorant-garamond text-white font-bold">
              How We Give Back
            </h2>
            <p className="text-white text-xs sm:text-sm font-raleway leading-relaxed px-2">
              We’re proud to partner with local charities and community organizations. 
              Every month, a portion of our proceeds supports initiatives that uplift 
              and empower our neighbors.
            </p>
          </div>
        </div>
      )}
    </>
  )
}
