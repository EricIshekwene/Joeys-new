import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import logo from '../assets/logo/logo_colored.png'

export default function Footer() {
    return (
        <>
        <div className="w-full bg-[#4b0e1e] text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6 py-12">

          {/* Logo & Info */}
          <div>
            <img src={logo} alt="Restaurant Logo" className="h-12 mb-4" />
            <p className="text-sm font-raleway">2333 N High St, Columbus, OH</p>
            <p className="text-sm font-raleway">Call: (614) 429-3524</p>
            <p className="text-sm font-raleway">info@joeysplace.com</p>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-semibold mb-2 font-raleway">Hours</h4>
            <p className="text-sm font-raleway">Mon–Fri: 10:00 AM – 10:00 PM</p>
            <p className="text-sm font-raleway">Sat–Sun: 10:00 AM – 10:00 PM</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-2 font-raleway">Quick Links</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="/about" className="hover:text-gray-300 transition-colors font-raleway">About Us</a></li>
              <li><a href="/amenities" className="hover:text-gray-300 transition-colors font-raleway">Amenities</a></li>
              <li><a href="/events" className="hover:text-gray-300 transition-colors font-raleway">Events</a></li>
              <li><a href="/hours" className="hover:text-gray-300 transition-colors font-raleway">Hours</a></li>
            </ul>
          </div>

          {/* Social */}
          <div className='flex flex-col gap-2 items-start justify-start'>
            <h4 className="text-white font-semibold mb-2 font-raleway">Follow Us</h4>
            <div className='flex flex-row gap-2 items-start justify-start'>
              <FaInstagram onClick={() => window.open('https://www.instagram.com/joeysplace/')} className=" text-xl hover:scale-150  transition-transform duration-300 ease-in-out" />
              <FaFacebook onClick={() => window.open('https://www.facebook.com/joeysplace/')} className="text-xl hover:scale-150 transition-transform duration-300 ease-in-out" />
              <FaTiktok onClick={() => window.open('https://www.tiktok.com/@joeysplace/')} className="text-xl hover:scale-150 transition-transform duration-300 ease-in-out" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t  border-white text-center py-4 text-xs text-gray-300 font-raleway">
          © 2025 Joey's Place. All Rights Reserved.
        </div>
      </div>
    </>
  )
}