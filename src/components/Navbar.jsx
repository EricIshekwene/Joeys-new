import React, { useState, useEffect } from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import logo from '../assets/srcimages/Joey_White_Logo.png'
import NavbarDropdown from './subcomponents/NavBarDropdown'
import text_logo from '../assets/logo/text_logo.png'
import Joey_outside from '../assets/background/joey_outside.jpg'

const Navbar = () => {
  const isLarge = useIsLarge();

  function useIsLarge() {
    const [isLarge, setIsLarge] = useState(window.innerWidth >= 1024);

    useEffect(() => {
      const handleResize = () => setIsLarge(window.innerWidth >= 1024);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return isLarge;
  }
  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Joey's Place", ariaLabel: "About Company" },
        { label: "How we give back", ariaLabel: "How we give back" }
      ]
    },
    {
      label: "Menu",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Food Menu", ariaLabel: "Featured Projects" },
        { label: "Drinks Menu", ariaLabel: "Project Case Studies" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us" },
        { label: "Phone", ariaLabel: "Phone" },
        { label: "Facebook", ariaLabel: "Facebook" },
        { label: "Instagram", ariaLabel: "Instagram" },
        { label: "Tiktok", ariaLabel: "Tiktok" }
      ]
    }
  ];
  return (
    <>
      {isLarge && (
        <div className="w-full h-260 bg-black flex items-start bg-cover bg-center" style={{ backgroundImage: `url(${Joey_outside})` }}>
          <div className="w-full h-full bg-black/50 p-6 flex items-start justify-center">
            <div className="flex flex-col gap-4 items-start justify-start w-full h-full">
              <div className="flex justify-between w-full items-center p-3">
                <div className="flex gap-7 flex-row items-start justify-start w-1/3">
                  <a  onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })} className="text-white text-lg font-raleway  hover:scale-110 transition-transform duration-300 ease-in-out">About Us</a>
                  <a  onClick={() => document.getElementById('menus').scrollIntoView({ behavior: 'smooth' })} className="text-white text-lg font-raleway  hover:scale-110 transition-transform duration-300 ease-in-out">Menus</a>
                  <a  onClick={() => document.getElementById('reservations').scrollIntoView({ behavior: 'smooth' })} className="text-white text-lg font-raleway  hover:scale-110 transition-transform duration-300 ease-in-out">Reservations</a>
                </div>
                <div className="flex flex-col items-center justify-center w-1/3  hover:scale-110 transition-transform duration-300 ease-in-out">
                  <img src={logo} alt="logo" className="w-1/5  hover:scale-110 transition-transform duration-300 ease-in-out h-full" />
                </div>
                <div className="flex gap-4 flex-row items-end justify-end w-1/3">
                  <FaInstagram onClick={() => window.open('https://www.instagram.com/joeysplace614/', '_blank')} className="text-white text-2xl font-bold  hover:scale-110 transition-transform duration-300 ease-in-out" />
                  <FaTiktok onClick={() => window.open('https://www.tiktok.com/@meetatjoeys', '_blank')} className="text-white text-2xl font-bold  hover:scale-110 transition-transform duration-300 ease-in-out" />
                  <FaFacebook onClick={() => window.open('https://www.facebook.com/joeysplace614', '_blank')} className="text-white text-2xl font-bold  hover:scale-110 transition-transform duration-300 ease-in-out" />
                </div>
              </div>

              <div className="flex flex-col mt-30 items-center justify-center w-full items-center p-3">
                <div className="flex flex-col items-center justify-center gap-10 w-full items-center p-3">
                  <img src={text_logo} alt="logo" className="w-2/5  hover:scale-110 transition-transform duration-300 ease-in-out h-full" />
                </div>
                <div className="flex flex-col mt-35 items-center justify-center w-full items-center p-3  hover:scale-110 transition-transform duration-300 ease-in-out">
                  <p onClick={() => window.open('tel:6144293524')} className="text-white text-lg font-raleway">(614)-429-3524</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {!isLarge && (
        <div className="w-full h-130 bg-black flex items-start bg-cover bg-center" style={{ backgroundImage: `url(${Joey_outside})` }}>
          <div className="w-full h-full bg-black/50  flex items-start justify-center">
            <div className="flex flex-col items-start  w-full h-full">
              <div className="flex justify-evenly w-full items-center pl-3 pr-3">
                <NavbarDropdown />
                <div
                  className="flex flex-shrink gap-4 flex-row items-start justify-start aspect-[11/10] h-20"
                  style={{ width: 'auto' }}
                >
                  <img src={logo} alt="logo" className=" h-3/5 object-contain self-center ml-8" />
                </div>
              </div>

              <div className="flex flex-col mt-20 md:mt-0 sm:mt-15 items-center justify-center w-full p-3 gap-4">
                <div
                  className="flex flex-shrink items-center justify-center w-full max-w-md h-40 sm:h-50 md:h-65"
                >
                  <img src={text_logo} alt="logo" className="max-w-full ml-8 max-h-full object-contain hover:scale-110 transition-transform duration-300 ease-in-out" />
                </div>
                <div className="flex flex-col items-center mt-25 sm:mt-10 md:mt-20 justify-center w-full p-3 hover:scale-110 transition-transform duration-300 ease-in-out">
                  <p onClick={() => window.open('tel:6144293524')} className="text-white text-lg font-raleway cursor-pointer">(614)-429-3524</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar