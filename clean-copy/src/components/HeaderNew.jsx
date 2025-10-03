import React, { useState, useEffect } from 'react'


export default function HeaderNew() {
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
        <section>

          <div className="p-10 flex flex-col items-center justify-start m-10">

            <div className="w-full flex flex-row items-center justify-center gap-16">

              <div className="  flex flex-col items-center justify-center gap-4 ">
                <p className="text-5xl font-cormorant-garamond text-[#4b0e1e] ">Joey's Place</p>
                
                <p className="text-7xl font-raleway text-center f text-black mt-6">
                  #1 bar on High Street
                </p>
                <hr className="border-2 border-[#D9CBB6] w-1/2 mt-3" />
                <p className="text-2xl w-3/5 font-raleway text-center f text-[#4b0e1e] mt-6">Authenticity, Community, Excellence, and Vibes Only. Making a place for everyone to feel at home and to feel like family.</p>
              </div>
            </div>
          </div>         
        </section >}
{
  !isLarge &&
  <section>
    

    <div className="p-10 flex flex-col items-center justify-start">

      <div className="w-full flex flex-row items-center justify-center gap-16">

        <div className="  flex flex-col items-center justify-center">
          <p className="text-3xl font-cormorant-garamond text-[#4b0e1e]">Joey's Place</p>
          <hr className="border-2 border-[#D9CBB6] w-1/3 mt-3" />
          <p className="text-5xl font-raleway text-center f text-black mt-6">
            #1 bar on High Street
          </p>
        </div>
      </div>


    </div>
  </section>
}
        </>
    )
}