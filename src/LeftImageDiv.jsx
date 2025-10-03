import React, { useState } from 'react'
import bar_drinks from './assets/background/bar_drinks.jpg'
import open_live_hours from './assets/srcimages/open_live_hours.png'
import close_live_hours from './assets/srcimages/close_live_hours.png'

export default function LeftImageDiv() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-[#f5f0e6] flex flex-row h-150">
      {/* Left Image */}
      <img
        src={bar_drinks}
        alt="background"
        className="w-3/5 h-full object-cover"
      />

      {/* Right Side Content */}
      <div className="w-2/5 bg-[#f5f0e6] h-full flex flex-col justify-between items-center p-6">
        {/* Status image (open/close sign) */}
        <img
          src={isOpen ? open_live_hours : close_live_hours}
          alt="live_hours_status"
          className="h-24 object-contain mt-4"
        />

        {/* Hours list */}
        <div className="w-full flex flex-col items-center">
          <hr className="w-1/3 border-2 border-[#4b0e1e] mb-4" />

          <div className="w-full flex flex-row justify-center gap-8">
            {/* Days */}
            <div className="text-xl font-raleway flex flex-col items-end gap-2">
              <span>Monday</span>
              <span>Tuesday</span>
              <span>Wednesday</span>
              <span>Thursday</span>
              <span>Friday</span>
              <span>Saturday</span>
              <span>Sunday</span>
            </div>

            {/* Hours */}
            <div className="text-xl font-raleway flex flex-col items-start gap-2">
              <span>10:00 AM – 10:00 PM</span>
              <span>10:00 AM – 10:00 PM</span>
              <span>10:00 AM – 10:00 PM</span>
              <span>10:00 AM – 10:00 PM</span>
              <span>10:00 AM – 10:00 PM</span>
              <span>10:00 AM – 10:00 PM</span>
              <span>10:00 AM – 10:00 PM</span>
            </div>
          </div>

          <hr className="w-1/3 border-2 border-[#4b0e1e] mt-4" />
        </div>

        {/* Open/Closed toggle */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="mt-6 px-6 py-3 flex flex-row items-center gap-3 border-2 border-black cursor-pointer select-none"
        >
          {/* Glowing circle */}
          <div
            className={`w-5 h-5 rounded-full animate-pulse
              ${
                isOpen
                  ? 'bg-green-500 shadow-[0_0_6px_3px_rgba(34,197,94,0.8)]'
                  : 'bg-red-500 shadow-[0_0_6px_3px_rgba(239,68,68,0.8)]'
              }`}
          ></div>

          {/* Status text */}
          <p className="text-xl font-raleway text-black font-semibold uppercase">
            {isOpen ? 'Open' : 'Closed'}
          </p>
        </div>
      </div>
    </div>
  )
}
