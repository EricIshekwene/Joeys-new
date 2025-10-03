import React from 'react'
import { FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa'
import EventCard from './components/subcomponents/EventCard'
export default function EventsNew() {
  return (
    <div className='flex flex-row justify-start  bg-[#f5f0e6] items-center '>
          <div className={`flex flex-col flex-wrap ml-12 w-2/5 h-full items-start justify-center pb-10`}>
            <h2 className={`text-5xl xl:text-7xl ml-6 mt-30 font-bold font-cormorant-garamond text-[#4b0e1e]`}>Events</h2>
            <p className={`text-xl xl:text-2xl ml-6 w-2/3 xl:w-1/2 mt-6 font-raleway text-black`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
            <p className={`text-md xl:text-lg ml-6 w-2/3 xl:w-1/2 mt-6 font-raleway text-black`}>Follow Our Socials to stay updated</p>
            <div className={`flex flex-row ml-6 gap-6 mt-6`}>
              <FaInstagram onClick={() => window.open('https://www.instagram.com/joeysplace/')} className="text-2xl xl:text-4xl text-[#4b0e1e] hover:scale-150 transition-transform duration-300 ease-in-out" />
              <FaFacebook onClick={() => window.open('https://www.facebook.com/joeysplace/')} className="text-2xl xl:text-4xl text-[#4b0e1e] hover:scale-150 transition-transform duration-300 ease-in-out" />
              <FaTiktok onClick={() => window.open('https://www.tiktok.com/@joeysplace/')} className="text-2xl xl:text-4xl text-[#4b0e1e] hover:scale-150 transition-transform duration-300 ease-in-out" /></div>

          </div>
          <div className="relative w-3/5  mr-12">
            <div className=" h-full p-4 overflow-x-auto overflow-y-hidden">
              <div className="flex flex-row gap-4 items-center justify-start snap-x snap-mandatory scroll-smooth">
                <EventCard className="shrink-0 snap-start hover:scale-105 transition-transform duration-300 ease-in-out" />
                <EventCard className="shrink-0 snap-start hover:scale-105 transition-transform duration-300 ease-in-out" />
                <EventCard className="shrink-0 snap-start hover:scale-105 transition-transform duration-300 ease-in-out" />
                <EventCard className="shrink-0 snap-start hover:scale-105 transition-transform duration-300 ease-in-out" />
              </div>
            </div>



          </div>

        </div>
  )
}
