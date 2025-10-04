import React, { useState, useEffect } from 'react'
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";
import logo from '../assets/logo/logo_colored.png'

export default function Footer() {
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
    <div className="w-full bg-[#4b0e1e] justify-center  items-center text-white font-raleway">
      {/* Large screen */}
      {isLarge && (
        <div className="max-w-6xl mx-auto grid grid-cols-3 gap-8 px-6 py-12">
          {/* Logo & Info */}
          <div>
            <img src={logo} alt="Restaurant Logo" className="h-12 mb-4" />
            <p className="text-sm">2333 N High St, Columbus, OH</p>
            <p className="text-sm">Call: (614) 429-3524</p>
            <p className="text-sm">info@joeysplace.com</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <a 
                  onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })} 
                  className="hover:text-gray-300 transition-colors cursor-pointer"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  onClick={() => document.getElementById('menus').scrollIntoView({ behavior: 'smooth' })} 
                  className="hover:text-gray-300 transition-colors cursor-pointer"
                >
                  Menus
                </a>
              </li>
              <li>
                <a 
                  onClick={() => document.getElementById('reservations').scrollIntoView({ behavior: 'smooth' })} 
                  className="hover:text-gray-300 transition-colors cursor-pointer"
                >
                  Reservations
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className='flex flex-col gap-2 items-start'>
            <h4 className="font-semibold mb-2">Follow Us</h4>
            <div className='flex flex-row gap-3'>
              <FaInstagram 
                onClick={() => window.open('https://www.instagram.com/joeysplace/')} 
                className="cursor-pointer text-xl hover:scale-150 transition-transform duration-300" 
              />
              <FaFacebook 
                onClick={() => window.open('https://www.facebook.com/joeysplace/')} 
                className="cursor-pointer text-xl hover:scale-150 transition-transform duration-300" 
              />
              <FaTiktok 
                onClick={() => window.open('https://www.tiktok.com/@joeysplace/')} 
                className="cursor-pointer text-xl hover:scale-150 transition-transform duration-300" 
              />
            </div>
          </div>
        </div>
      )}

      {/* Small screen */}
      {!isLarge && (
        <div className="flex flex-col items-center text-center px-6 py-10 space-y-6">
          <img src={logo} alt="Restaurant Logo" className="h-12 mb-2" />
          <p className="text-sm">2333 N High St, Columbus, OH</p>
          <p className="text-sm">Call: (614) 429-3524</p>
          <p className="text-sm">info@joeysplace.com</p>

          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <a 
                  onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })} 
                  className="hover:text-gray-300 transition-colors cursor-pointer"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  onClick={() => document.getElementById('menus').scrollIntoView({ behavior: 'smooth' })} 
                  className="hover:text-gray-300 transition-colors cursor-pointer"
                >
                  Menus
                </a>
              </li>
              <li>
                <a 
                  onClick={() => document.getElementById('reservations').scrollIntoView({ behavior: 'smooth' })} 
                  className="hover:text-gray-300 transition-colors cursor-pointer"
                >
                  Reservations
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Follow Us</h4>
            <div className="flex flex-row gap-4 justify-center">
              <FaInstagram 
                onClick={() => window.open('https://www.instagram.com/joeysplace/')} 
                className="cursor-pointer text-xl hover:scale-125 transition-transform duration-300" 
              />
              <FaFacebook 
                onClick={() => window.open('https://www.facebook.com/joeysplace/')} 
                className="cursor-pointer text-xl hover:scale-125 transition-transform duration-300" 
              />
              <FaTiktok 
                onClick={() => window.open('https://www.tiktok.com/@joeysplace/')} 
                className="cursor-pointer text-xl hover:scale-125 transition-transform duration-300" 
              />
            </div>
          </div>
        </div>
      )}

      {/* Bottom Bar */}
      <div className="border-t border-white text-center py-4 text-xs text-gray-300">
        <p>© 2025 Joey's Place. All Rights Reserved.</p>
        <p className="mt-1">
          Website made by <span className="font-semibold">Eric Ishekwene</span> — 
          <a href="mailto:ericishcollege@gmail.com" className="underline hover:text-white"> ericishcollege@gmail.com</a> for inquiries
        </p>
      </div>
    </div>
  )
}
