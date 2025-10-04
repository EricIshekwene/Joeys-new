import React, { useState, useEffect } from 'react'
import bar_background from './assets/background/bar_background.jpg'
import bourbon_background from './assets/background/bourbon_background.jpg'
import restaurant_background from './assets/background/restuarant_background.jpg'
import fun_icon from './assets/srcimages/fun_icon.png'
import football_icon from './assets/srcimages/football_icon.png'
import dj_board from './assets/srcimages/dj_board.png'
import wine_glass from './assets/srcimages/wine_glass_white.png'
import diamond from './assets/srcimages/diamond.png'

export default function Contents() {
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
            {isLarge && (
                <div className='flex flex-row h-120 bg-gray-300 justify-center items-center'>

                {/* Reusable Card */}
                {[
                    {
                        bg: bar_background,
                        icon: wine_glass,
                        title: "Open Bar",
                        sub: "All the drinks you love"
                    },
                    {
                        bg: bourbon_background,
                        icon: diamond,
                        title: "Bourbon Room",
                        sub: "Reservations Accepted"
                    },
                    {
                        bg: restaurant_background,
                        icon: football_icon,
                        title: "Watch the Game",
                        sub: "Food & Sports Together"
                    },
                    {
                        bg: dj_board,
                        icon: fun_icon,
                        title: "Live DJs",
                        sub: "Music Every Night"
                    }
                ].map((item, idx) => (
                    <div
                        key={idx}
                        className="group relative w-1/4 h-full flex flex-col justify-center items-center overflow-hidden"
                        style={{ backgroundImage: `url(${item.bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    >

                        <div className="absolute inset-0 bg-black/0 transition-opacity duration-300 group-hover:bg-black/40"></div>

                        <div className="relative z-10 flex flex-col justify-center items-center text-center px-2">
                            <div className="flex flex-row items-center gap-2">
                                <img src={item.icon} alt={item.title} className="w-10" />
                                <p className="text-white font-raleway text-2xl xl:text-4xl font-bold">
                                    {item.title}
                                </p>
                            </div>

                            <p className="text-white font-raleway text-md xl:text-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100 mt-2">
                                {item.sub}
                            </p>
                        </div>
                    </div>

                ))}
            </div>
            )}
            {!isLarge && (
            <div className="grid grid-cols-2 grid-rows-2 h-120 w-full bg-gray-300 justify-center items-center">
                {[
                    {
                        bg: bar_background,
                        icon: wine_glass,
                        title: "Open Bar",
                        sub: "All the drinks you love"
                    },
                    {
                        bg: bourbon_background,
                        icon: diamond,
                        title: "Bourbon Room",
                        sub: "Reservations Accepted"
                    },
                    {
                        bg: restaurant_background,
                        icon: football_icon,
                        title: "Watch the Game",
                        sub: "Food & Sports Together"
                    },
                    {
                        bg: dj_board,
                        icon: fun_icon,
                        title: "Live DJs",
                        sub: "Music Every Night"
                    }
                ].map((item, idx) => (
                    <div
                        key={idx}
                        className="group relative flex flex-col justify-center items-center overflow-hidden aspect-square w-full h-full"
                        style={{
                            backgroundImage: `url(${item.bg})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                        }}
                    >
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/40"></div>

                        {/* Content */}
                        <div className="relative z-10 flex flex-col justify-center items-center text-center px-2">
                            <div className="flex flex-row items-center gap-2">
                                <img src={item.icon} alt={item.title} className="w-10" />
                                <p className="text-white font-raleway text-sm xl:text-4xl font-bold">
                                    {item.title}
                                </p>
                            </div>
                            
                        </div>
                    </div>
                ))}
            </div>
            )}
        </>
    )
}
