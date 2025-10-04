import React, { useState, useEffect } from 'react'
import bar1 from './assets/srcimages/bar1.jpg'
import resturaunt from './assets/srcimages/resturaunt.jpg'
import bourbon from './assets/srcimages/bourbon.jpg'
import outer from './assets/srcimages/outer.jpg'

export default function RightImageDiv() {
  const isLarge = useIsLarge();
  
  function useIsLarge() {
    const [isLarge, setIsLarge] = useState(window.innerWidth >= 880);
    useEffect(() => {
      const handleResize = () => setIsLarge(window.innerWidth >= 880);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return isLarge;
  }

  return (
    <>
      {/* Large screen layout */}
      {isLarge && (
        <div className="bg-[#4b0e1e] flex flex-row justify-between items-center h-150">
          {/* Left text section */}
          <div className="w-2/5 h-full flex flex-col justify-center items-start gap-6 px-10">
            <h2 className="text-4xl font-raleway text-white">
              All Rooms Are Available For Reservation
            </h2>
            <p className="text-xl font-raleway text-white">Open to Reservation</p>

            <button className="px-6 py-3 text-[#f5f0e6] border-2 border-[#f5f0e6] rounded-full text-lg font-raleway uppercase tracking-wide hover:bg-[#f5f0e6] hover:text-[#4b0e1e] transition">
              Call Us to Inquire
            </button>
            <p className="text-lg font-raleway text-white">(614) 123-4567</p>
          </div>

          {/* Right image grid */}
          <div className="w-3/5 h-full flex flex-col justify-center items-center">
            <GridImages />
          </div>
        </div>
      )}

      {/* Small screen layout */}
      {!isLarge && (
        <div className="bg-[#4b0e1e] flex flex-col justify-start items-center">
          {/* Top text section */}
          <div className="w-full flex flex-col justify-center items-center gap-4 p-6 text-center">
            <h2 className="text-2xl font-raleway text-white">
              All Rooms Are Available For Reservation
            </h2>
            <p className="text-md font-raleway text-white">Open to Reservation</p>

            <button className="px-4 py-2 text-[#f5f0e6] border-2 border-[#f5f0e6] rounded-full text-sm font-raleway uppercase tracking-wide hover:bg-[#f5f0e6] hover:text-[#4b0e1e] transition">
              Call Us to Inquire
            </button>
            <p className="text-md font-raleway text-white">(614) 123-4567</p>
          </div>

          {/* Bottom image grid */}
          <div className="w-full h-[500px]">
            <GridImages />
          </div>
        </div>
      )}
    </>
  )
}

/* ✅ Reusable grid component */
function GridImages() {
  return (
    <div className="grid grid-cols-2 grid-rows-2 w-full h-full">
      {/* Card 1 */}
      <div className="group relative w-full h-full">
        <img src={bar1} alt="bar1" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30 transition duration-300 group-hover:bg-black/0"></div>
        <p className="absolute inset-0 flex items-center justify-center text-white font-cormorant-garamond text-3xl md:text-5xl transition-all duration-300">
          Bar
        </p>
      </div>

      {/* Card 2 */}
      <div className="group relative w-full h-full">
        <img src={resturaunt} alt="resturaunt" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30 transition duration-300 group-hover:bg-black/0"></div>
        <p className="absolute inset-0 flex items-center justify-center text-white font-cormorant-garamond text-3xl md:text-5xl transition-all duration-300">
          Restaurant
        </p>
      </div>

      {/* Card 3 */}
      <div className="group relative w-full h-full">
        <img src={bourbon} alt="bourbon" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30 transition duration-300 group-hover:bg-black/0"></div>
        <p className="absolute inset-0 flex items-center justify-center text-white font-cormorant-garamond text-3xl md:text-5xl transition-all duration-300">
          Bourbon Room
        </p>
      </div>

      {/* Card 4 */}
      <div className="group relative w-full h-full">
        <img src={outer} alt="outer" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30 transition duration-300 group-hover:bg-black/0"></div>
        <p className="absolute inset-0 flex items-center justify-center text-white font-cormorant-garamond text-3xl md:text-5xl transition-all duration-300">
          Entire Building
        </p>
      </div>
    </div>
  )
}
