import React, { useState, useEffect } from 'react'
import { FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa'
import EventCard from './components/subcomponents/EventCard'

import bar_drinks from './assets/background/bar_drinks.jpg'
import bar_drinks_compressed from './assets/compressed/bar_drinks.jpg'
import SmallEventCard from './components/subcomponents/SmallEventCard'
  export default function EventsNew({ Events, events_h1, events_text, event_1, event_1_name_date, event_1_subtext, event_1_time, event_2, event_2_name_date, event_2_subtext, event_2_time, event_3, event_3_name_date, event_3_subtext, event_3_time, event_4, event_4_name_date, event_4_subtext, event_4_time, instagram, facebook, tiktok, event_trivia, event_trivia_description, event_trivia_time, event_drag_brunch, event_drag_brunch_description, event_drag_brunch_time, event_karaoke, event_karaoke_description, event_karaoke_time, event_bingo, event_bingo_description, event_bingo_time, event_draft, event_draft_description, event_draft_time, event_wings, event_wings_description, event_wings_time }) {
  const isLarge = useIsLarge();
  function useIsLarge() {
    const [isLarge, setIsLarge] = useState(window.innerWidth >= 1000);
    useEffect(() => {
      const handleResize = () => setIsLarge(window.innerWidth >= 1000);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return isLarge;
  }
  return (
    <>
      {isLarge && Events == "TRUE" && (
        <div
          className='flex flex-row justify-start bg-[#f5f0e6] items-center relative'
          style={{
            backgroundImage: `url(${bar_drinks_compressed})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Overlay to darken the background */}
          <div className="absolute inset-0 bg-black/50 pointer-events-none z-0"></div>
          <div className={`flex flex-col flex-wrap ml-12 w-2/5 h-full items-start justify-center pb-10 z-10`}>
            <h2 className={`text-5xl xl:text-7xl ml-6 mt-30 font-bold font-cormorant-garamond text-[#f5f0e6]`}>Events</h2>

            <p className={`text-xl xl:text-2xl ml-6 w-2/3 xl:w-1/2 mt-6 font-raleway text-[#f5f0e6]`}>Take a look at our upcoming events</p>
            <p className={`text-md xl:text-lg ml-6 w-2/3 xl:w-1/2 mt-6 font-raleway text-[#f5f0e6]`}>Follow Our Socials to stay updated</p>
            <div className={`flex flex-row ml-6 gap-6 mt-6`}>
              <FaInstagram onClick={() => window.open(instagram)} className="text-2xl xl:text-4xl text-[#f5f0e6] hover:scale-150 transition-transform duration-300 ease-in-out" />
              <FaFacebook onClick={() => window.open(facebook)} className="text-2xl xl:text-4xl text-[#f5f0e6] hover:scale-150 transition-transform duration-300 ease-in-out" />
              <FaTiktok onClick={() => window.open(tiktok)} className="text-2xl xl:text-4xl text-[#f5f0e6] hover:scale-150 transition-transform duration-300 ease-in-out" /></div>

          </div>
          <div className="relative w-3/5  mr-12">
            <div className=" h-full p-4 overflow-x-auto overflow-y-hidden">
              <div className="flex flex-row gap-4 items-center justify-start snap-x snap-mandatory scroll-smooth">
                {event_1 == "TRUE" && <EventCard className="shrink-0 snap-start" event_name={event_1_name_date} event_subtext={event_1_subtext} event_time={event_1_time} />}
                {event_2 == "TRUE" && <EventCard className="shrink-0 snap-start" event_name={event_2_name_date} event_subtext={event_2_subtext} event_time={event_2_time} />}
                {event_3 == "TRUE" && <EventCard className="shrink-0 snap-start" event_name={event_3_name_date} event_subtext={event_3_subtext} event_time={event_3_time} />}
                {event_4 == "TRUE" && <EventCard className="shrink-0 snap-start" event_name={event_4_name_date} event_subtext={event_4_subtext} event_time={event_4_time} />}
                {event_drag_brunch == "TRUE" && <EventCard className="shrink-0 snap-start" event_name="Drag Brunch" event_subtext={event_drag_brunch_description} event_time={event_drag_brunch_time} />}
                {event_trivia == "TRUE" && <EventCard className="shrink-0 snap-start" event_name="Trivia Night" event_subtext={event_trivia_description} event_time={event_trivia_time} />}
                {event_karaoke == "TRUE" && <EventCard className="shrink-0 snap-start" event_name="Karaoke Night" event_subtext={event_karaoke_description} event_time={event_karaoke_time} />}
                {event_bingo == "TRUE" && <EventCard className="shrink-0 snap-start" event_name="Bingo Night" event_subtext={event_bingo_description} event_time={event_bingo_time}  />}
                {event_draft == "TRUE" && <EventCard className="shrink-0 snap-start" event_name="Draft Night" event_subtext={event_draft_description} event_time={event_draft_time} />}
                {event_wings == "TRUE" && <EventCard className="shrink-0 snap-start" event_name="Wings Night" event_subtext={event_wings_description} event_time={event_wings_time} />}
                 </div>
            </div>



          </div>

        </div>

      )}
      {
        !isLarge && Events == "TRUE" && (
          <div
            className="flex flex-col justify-start items-center relative py-10"
            style={{
              backgroundImage: `url(${bar_drinks_compressed})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 pointer-events-none z-0"></div>

            {/* Top text/socials */}
            <div className="relative flex flex-col items-center justify-center text-center px-6 z-10">
              <h2 className="text-4xl font-bold font-cormorant-garamond text-[#f5f0e6]">
                Events
              </h2>
              <p className="text-lg mt-4 font-raleway text-[#f5f0e6]">
               Take a look at our upcoming events
              </p>
              <p className="text-sm mt-3 font-raleway text-[#f5f0e6]">
                Follow Our Socials to stay updated
              </p>
              <div className="flex flex-row gap-6 mt-4">
                <FaInstagram
                  onClick={() => window.open(instagram)}
                  className="text-2xl text-[#f5f0e6] hover:scale-125 transition-transform duration-300 ease-in-out cursor-pointer"
                />
                <FaFacebook
                  onClick={() => window.open(facebook)}
                  className="text-2xl text-[#f5f0e6] hover:scale-125 transition-transform duration-300 ease-in-out cursor-pointer"
                />
                <FaTiktok
                  onClick={() => window.open(tiktok)}
                  className="text-2xl text-[#f5f0e6] hover:scale-125 transition-transform duration-300 ease-in-out cursor-pointer"
                />
              </div>
            </div>

            {/* Bottom event cards */}
            <div className="relative w-full mt-8 z-10">
              <div className="p-4 overflow-x-auto overflow-y-hidden">
                <div className="flex flex-row gap-4 items-center justify-start snap-x snap-mandatory scroll-smooth">
                  {event_1 == "TRUE" && <SmallEventCard className="shrink-0 snap-start " event_name={event_1_name_date} event_subtext={event_1_subtext} event_time={event_1_time} />}
                  {event_2 == "TRUE" && <SmallEventCard className="shrink-0 snap-start " event_name={event_2_name_date} event_subtext={event_2_subtext} event_time={event_2_time} />}
                  {event_3 == "TRUE" && <SmallEventCard className="shrink-0 snap-start " event_name={event_3_name_date} event_subtext={event_3_subtext} event_time={event_3_time} />}
                  {event_4 == "TRUE" && <SmallEventCard className="shrink-0 snap-start " event_name={event_4_name_date} event_subtext={event_4_subtext} event_time={event_4_time} />}
                  {event_drag_brunch == "TRUE" && <SmallEventCard className="shrink-0 snap-start" event_name="Drag Brunch" event_subtext={event_drag_brunch_description} event_time={event_drag_brunch_time} />}
                  {event_trivia == "TRUE" && <SmallEventCard className="shrink-0 snap-start" event_name="Trivia Night" event_subtext={event_trivia_description} event_time={event_trivia_time} />}
                  {event_karaoke == "TRUE" && <SmallEventCard className="shrink-0 snap-start" event_name="Karaoke Night" event_subtext={event_karaoke_description} event_time={event_karaoke_time} />}
                  {event_bingo == "TRUE" && <SmallEventCard className="shrink-0 snap-start" event_name="Bingo Night" event_subtext={event_bingo_description} event_time={event_bingo_time} />}
                  {event_draft == "TRUE" && <SmallEventCard className="shrink-0 snap-start" event_name="Draft Night" event_subtext={event_draft_description} event_time={event_draft_time} />}
                  {event_wings == "TRUE" && <SmallEventCard className="shrink-0 snap-start" event_name="Wings Night" event_subtext={event_wings_description} event_time={event_wings_time} />}
                </div>
              </div>
            </div>
          </div>
        )
      }

    </>
  )
}

