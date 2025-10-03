import React from 'react';

export default function EventCard({ className = "" }) {
  return (
    <div className={`w-72 h-100 bg-[#4b0e1e] shadow-md overflow-hidden ${className}`}>
      <div className="relative h-48 bg-[#f5f0e6]">
        <img
          src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?auto=format&fit=crop&w=800&q=80"
          alt="card-image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-3 mt-2">
        <h5 className="text-lg font-semibold text-[#f5f0e6] font-cormorant-garamond font-bold text-lg mb-2">
          Event Name
        </h5>
        <p className="text-[#f5f0e6] h-20 overflow-hidden text-sm font-raleway">
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to "Naviglio" where you can enjoy the main
          night life in Barcelona.
        </p>
      </div>
      <div className="px-3 pb-6 mt-2">
        <button className="bg-[#f5f0e6] hover:bg-[#f5f0e6]/80 text-[#4b0e1e] font-raleway font-bold py-2 px-4 text-sm">
          Read More
        </button>
      </div>
    </div>
  );
}
