import React from 'react';
import event1 from '../../assets/srcimages/events1.jpg'
import event2 from '../../assets/srcimages/events2.jpg'
import event3 from '../../assets/srcimages/event3.jpg'
import event4 from '../../assets/srcimages/event4.jpg'
import wings from '../../assets/srcimages/wings.png'
import triviaImg from '../../assets/compressed/trivia_night.jpg'
import karaokeImg from '../../assets/compressed/karaoke.jpg'
import dragBrunchImg from '../../assets/compressed/drag_brunch.jpg'
import bingoImg from '../../assets/compressed/bingo.jpg'
import draft_beers from '../../assets/srcimages/draft_beers.png'
export default function SmallEventCard({ className = "", event_name, event_subtext, event_time }) {
  const images = [ event3, event4];
  const randomImage = images[Math.floor(Math.random() * images.length)];

  return (
    <div className={`w-44 h-80 bg-[#4b0e1e] shadow-md overflow-hidden ${className}`}>
      {/* Image section */}
      <div className="relative h-28 bg-[#f5f0e6]">
        <img
          src={event_name === "Trivia Night" ? triviaImg : event_name === "Karaoke Night" ? karaokeImg : event_name === "Bingo Night" ? bingoImg : event_name === "Drag Brunch" ? dragBrunchImg : event_name === "Draft Night" ? draft_beers : event_name === "Wings Night" ? wings : randomImage}
          alt="card-image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-3">
        <h5 className="text-md font-bold text-[#f5f0e6] font-cormorant-garamond mb-1">
          {event_name}
        </h5>
        <p className="text-[#f5f0e6] h-16 overflow-hidden text-xs font-raleway leading-snug">
          {event_subtext}
        </p>
      </div>

      {/* Button / Time */}
      <div className="px-3 pb-4">
        <button className="bg-[#f5f0e6] hover:bg-[#f5f0e6]/80 text-[#4b0e1e] font-raleway font-bold py-1 px-2 text-xs">
          {event_time}
        </button>
      </div>
    </div>
  );
}
