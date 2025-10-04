import React, { useState, useEffect } from 'react'
import leaf_beige from '../assets/background/leaf_beige.png'

export default function HeaderNew({ header_h1, header_text }) {
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
      {isLarge &&
       

          <div className="p-10 bg-[#f5f0e6] h-120 flex flex-col items-center justify-center " style={{ backgroundImage: `url(${leaf_beige})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

            <div className="w-full flex flex-row items-center justify-center gap-16">

              <div className="  flex flex-col items-center justify-center gap-4 ">
                <p className="text-5xl font-cormorant-garamond text-[#4b0e1e] ">Joey's Place</p>
                
                <p className="text-7xl font-raleway text-center f text-black mt-6">
                  {header_h1}
                </p>
                <hr className="border-2 border-[#D9CBB6] w-1/2 mt-3" />
                <p className="text-2xl w-3/5 font-raleway text-center f text-[#4b0e1e] mt-6">{header_text}</p>
              </div>
            </div>
          </div>         
        }
{
  !isLarge &&
  <section className='bg-[#f5f0e6]' style={{ backgroundImage: `url(${leaf_beige})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
    

    <div className="p-10 flex flex-col items-center justify-start">

      <div className="w-full flex flex-row items-center justify-center gap-16">

        <div className="  flex flex-col items-center justify-center">
          <p className="text-3xl font-cormorant-garamond text-[#4b0e1e]">Joeys Place</p>
          <hr className="border-2 border-[#D9CBB6] w-1/3 mt-3" />
          <p className="text-5xl font-raleway text-center f text-black mt-6">
            {header_h1}
          </p>
        </div>
      </div>


    </div>
  </section>
}
        </>
    )
}