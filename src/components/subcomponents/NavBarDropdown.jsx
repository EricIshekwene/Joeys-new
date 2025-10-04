import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";

export default function NavBarDropdown() {
    const [open, setOpen] = useState(false);

    const menuItems = ["About", "Menus", "Reservations"];
  
    return (
      <div className="relative flex items-center">
        {/* Hamburger icon (far right) */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white text-2xl mr-4 focus:outline-none"
        >
          <FaBars />
        </button>
  
        {/* Slide-out items */}
        <div className="flex items-center overflow-hidden">
          {menuItems.map((item, index) => (
            <p
              key={item}
              className={`mr-4 text-sm text-white font-raleway cursor-pointer transition-all duration-500 ease-in-out flex items-center gap-2
                ${open ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}
              `}
              style={{
                transitionDelay: `${open ? index * 150 : 0}ms`, // stagger each item
              }}
              onClick={() => {
                if (item === "About") {
                  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
                } else if (item === "Menus") {
                  document.getElementById('menus').scrollIntoView({ behavior: 'smooth' });
                } else if (item === "Reservations") {
                  document.getElementById('reservations').scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {item}
              
            </p>
          ))}
        </div>
      </div>
    );
}

