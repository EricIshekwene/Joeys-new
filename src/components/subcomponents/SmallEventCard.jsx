import React from 'react';

export default function SmallEventCard({ className = "" }) {
  return (
    <div className={`w-40 h-70 bg-[#f5f0e6] rounded-3xl shadow-md overflow-hidden p-3 ${className}`}>
      <div className="relative h-30 shadow-lg bg-gray-500 rounded-3xl">
        <img
          src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?auto=format&fit=crop&w=800&q=80"
          alt="card-image"
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
      <div className="p-2 ">
        <h5 className="text-lg font-semibold text-[#4b0e1e] font-cormorant-garamond font-bold text-lg">
          Event Name
        </h5>
        <p className="text-[#4b0e1e] h-15 overflow-hidden text-xs font-raleway">
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to "Naviglio" where you can enjoy the main
          night life in Barcelona.urterswedtfyguhktyjrtcyrf
        </p>
      </div>
      <div className="px-2 pb-2 mt-2">
        <button className="bg-[#4b0e1e] hover:bg-[#4b0e1e]/80 text-[#f5f0e6] font-raleway font-bold py-1 px-2 rounded-lg text-xs">
          Read More
        </button>
      </div>
    </div>
  );
}
