import React, { useState, useEffect } from 'react'
import joey1 from './assets/srcimages/joey1.jpg'
import joey2 from './assets/srcimages/joey2.jpg'
import complex_logo from './assets/srcimages/complex_logo.png'

export default function Joeys() {
    const isLarge = useIsLarge();
    function useIsLarge() {
        const [isLarge, setIsLarge] = useState(window.innerWidth >= 600);

        useEffect(() => {
            const handleResize = () => setIsLarge(window.innerWidth >= 600);
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }, []);

        return isLarge;
    }
    return (
        <>
            {isLarge && (
                <div className='relative flex flex-row justify-center items-center h-120'>
                    {/* Black tint overlay */}
                    <div className="absolute inset-0 bg-black opacity-40 z-10 pointer-events-none"></div>
                    <img src={joey1} alt="joey1" className='w-2/3 h-full object-cover z-0' />
                    <img src={joey2} alt="joey2" className='w-1/3 h-full object-cover z-0' />
                    {/* Foreground logo */}
                    <div className="absolute inset-0 flex flex-col  justify-center z-20 items-center gap-4 p-10">
                        <img
                            src={complex_logo}
                            alt="complex_logo"
                            className=" w-1/2 h-70 object-contain "
                        />
                        <p className='text-white  w-1/2 lg:w-1/3  text-center text-sm lg:text-lg xl:text-xl font-raleway'>lorewn ipsum dolor sit hbri jifdnv iudbfbvni iufdvnu oiedhi odnvc inevrdorf oiindvf oiednv dpjvt odfnv odefvn odifnv oedfinv odifnvt doivnjh </p>
                    </div>

                </div>
            )}
            {
                !isLarge && (

                    <div className="relative flex flex-col justify-center items-center h-120">
                        {/* Background stacked images */}
                        <div className="absolute inset-0 flex flex-col">
                            <img src={joey1} alt="joey1" className="w-full h-1/2 object-cover" />
                            <img src={joey2} alt="joey2" className="w-full h-1/2 object-cover" />
                        </div>

                        {/* Black overlay */}
                        <div className="absolute inset-0 bg-black/50 z-10"></div>

                        {/* Foreground logo + text */}
                        <div className="relative z-20 flex flex-col justify-center items-center gap-4 p-6 text-center">
                            <img
                                src={complex_logo}
                                alt="complex_logo"
                                className="w-2/3 h-auto object-contain"
                            />
                            <p className="text-white text-xs sm:text-sm font-raleway leading-relaxed px-2">
                                lorewn ipsum dolor sit hbri jifdnv iudbfbvni iufdvnu oiedhi odnvc inevrdorf oiindvf oiednv dpjvt odfnv odefvn odifnv oedfinv odifnvt doivnjh
                            </p>
                        </div>
                    </div>



                )}
        </>
    )
}
