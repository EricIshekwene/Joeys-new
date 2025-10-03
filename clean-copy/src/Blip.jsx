import React, { useState, useEffect } from 'react'
import background from './assets/srcimages/Gemini_Table.png'
import maroon_line from './assets/hr/slick_maroon.png'
export default function Blip() {
  const isLarge = useIsLarge();
    function useIsLarge() {
        const [isLarge, setIsLarge] = useState(window.innerWidth >= 1200);

        useEffect(() => {
            const handleResize = () => setIsLarge(window.innerWidth >= 1200);
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }, []);

        return isLarge;
    }  
  return (
    <>
        { isLarge && (
          <div className="flex flex-row justify-center">
        <div className="flex flex-col  w-5/11 justify-start items-center p-2 ">
          <img src={background} alt="background" className="w-full rounded-tl-[8rem] object-cover" />
          <div className="w-full  mt-10 py-12 px-8 flex flex-col items-center justify-center bg-[#f5f0e6] text-left">
            <h2 className="text-4xl md:text-5xl font-raleway font-bold text-black mb-6 tracking-wide uppercase">
              Experience the Best Nights at Joey’s Place
            </h2>
            <img src={maroon_line} alt="maroon_line" className="w-full" />
            <p className="text-xl md:text-2xl font-raleway text-black leading-relaxed max-w-4xl">
              From high-energy <span className="font-semibold text-[#4b0e1e]">live DJs</span> that keep the dance floor moving,
              to unforgettable nights of <span className="font-semibold text-[#4b0e1e]">karaoke</span> with friends,
              plus <span className="font-semibold text-[#4b0e1e]">open bars</span> and drink specials that keep the good vibes flowing —
              Joey’s Place is your go-to spot for fun, music, and memories.
            </p>
          </div>

        </div>

        <div className="flex flex-row w-5/11 h-250 p-2">
          <img src={background} alt="background" className="w-full rounded-tr-[8rem] rounded-br-[8rem] object-cover" />
        </div>
      </div>
      
      
      ) 
    }
    </>
  )
}