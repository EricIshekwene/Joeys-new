import React, { useState, useEffect } from 'react'
import Joey_background from './assets/compressed/joey_outside.jpg'

export default function LeftImageDiv({
  monday_times, tuesday_times, wednesday_times,
  thursday_times, friday_times, saturday_times, sunday_times
}) {
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
      {isLarge && (
        <div className="bg-[#f5f0e6] flex flex-row h-150">
          {/* Left Side Image */}
          <img src={Joey_background} alt="background" className="w-3/5 h-full object-cover" />

          {/* Right Side Hours */}
          <div className="w-2/5 bg-[#f5f0e6] h-full flex flex-col justify-center items-center p-6">
            <div className="w-full flex flex-col items-center">
              <hr className="w-1/3 border-2 border-[#4b0e1e] mb-4" />

              <div className="w-full flex flex-row justify-center gap-8">
                <div className="text-xl font-raleway flex flex-col items-end gap-2">
                  <span>Monday</span>
                  <span>Tuesday</span>
                  <span>Wednesday</span>
                  <span>Thursday</span>
                  <span>Friday</span>
                  <span>Saturday</span>
                  <span>Sunday</span>
                </div>

                <div className="text-xl font-raleway flex flex-col items-start gap-2">
                  <span>{monday_times}</span>
                  <span>{tuesday_times}</span>
                  <span>{wednesday_times}</span>
                  <span>{thursday_times}</span>
                  <span>{friday_times}</span>
                  <span>{saturday_times}</span>
                  <span>{sunday_times}</span>
                </div>
              </div>

              <hr className="w-1/3 border-2 border-[#4b0e1e] mt-4" />
            </div>
          </div>
        </div>
      )}

      {!isLarge && (
        <div className="bg-[#f5f0e6] flex flex-col items-center justify-center w-full">
          {/* Top Image */}
          <img
            src={Joey_background}
            alt="background"
            className="w-full h-80 object-cover"
          />

          {/* Hours List */}
          <div className="w-full flex flex-col items-center justify-center bg-[#f5f0e6] py-8 px-4">
            <hr className="w-1/3 border-2 border-[#4b0e1e] mb-4" />
            <div className="flex flex-row justify-center gap-4">
              <div className="text-base font-raleway flex flex-col items-end gap-1">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
              <div className="text-base font-raleway flex flex-col items-start gap-1">
                <span>{monday_times}</span>
                <span>{tuesday_times}</span>
                <span>{wednesday_times}</span>
                <span>{thursday_times}</span>
                <span>{friday_times}</span>
                <span>{saturday_times}</span>
                <span>{sunday_times}</span>
              </div>
            </div>
            <hr className="w-1/3 border-2 border-[#4b0e1e] mt-4" />
          </div>
        </div>
      )}
    </>
  );
}
