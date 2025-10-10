import React, { useState, useEffect } from 'react'
import bar_drinks from './assets/background/bar_drinks.jpg'
import open_live_hours from './assets/srcimages/open_live_hours.png'
import close_live_hours from './assets/srcimages/close_live_hours.png'
import outside1 from './assets/srcimages/outside1.jpg'
import outside1compressed from './assets/compressed/outside1.jpg'
export default function LeftImageDiv({
  monday_times, tuesday_times, wednesday_times,
  thursday_times, friday_times, saturday_times, sunday_times
}) {
  const [isOpen, setIsOpen] = useState(false);

  
  function parseHours(hoursStr) {
    if (!hoursStr || hoursStr.toLowerCase() === "closed") return null;
  
    const [openStr, closeStr] = hoursStr.split('-');
  
    const parseTime = (timeStr) => {
      const date = new Date();
      let [time, modifier] = timeStr.trim().split(/(AM|PM)/i);
      let [hours, minutes] = time.split(':').map(Number);
      if (!minutes) minutes = 0;
  
      if (modifier.toLowerCase() === 'pm' && hours < 12) hours += 12;
      if (modifier.toLowerCase() === 'am' && hours === 12) hours = 0;
  
      date.setHours(hours, minutes, 0, 0);
      return date;
    };
  
    return { open: parseTime(openStr), close: parseTime(closeStr) };
  }
  
  function checkIsOpen() {
    const now = new Date();
    const day = now.getDay(); // 0 = Sun ... 6 = Sat
    const hoursMap = [
      sunday_times,
      monday_times,
      tuesday_times,
      wednesday_times,
      thursday_times,
      friday_times,
      saturday_times,
    ];
  
    const todayHours = hoursMap[day];
    const parsed = parseHours(todayHours);
    if (!parsed) return false;
  
    let { open, close } = parsed;
  
    // ✅ handle wrap-around (e.g. 4PM–2:30AM)
    if (close <= open) {
      // add 1 day to close time
      close.setDate(close.getDate() + 1);
    }
  
    return now >= open && now <= close;
  }
  
  useEffect(() => {
   
    setIsOpen(checkIsOpen());

  
    const interval = setInterval(() => {
      setIsOpen(checkIsOpen());
    }, 60000);

    return () => clearInterval(interval);
  }, [monday_times, tuesday_times, wednesday_times, thursday_times, friday_times, saturday_times, sunday_times]);

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
         
          <img src={outside1compressed} alt="background" className="w-3/5 h-full object-cover" />

       
          <div className="w-2/5 bg-[#f5f0e6] h-full flex flex-col justify-between items-center p-6">
            
            <img
              src={isOpen ? open_live_hours : close_live_hours}
              alt="live_hours_status"
              className="h-24 object-contain mt-4"
            />

        
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
                {/* Hours */}
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

            {/* Status display */}
            <div className="mt-6 px-6 py-3 flex flex-row items-center gap-3 border-2 border-black select-none">
              <div
                className={`w-5 h-5 rounded-full animate-pulse
                ${isOpen
                    ? 'bg-green-500 shadow-[0_0_6px_3px_rgba(34,197,94,0.8)]'
                    : 'bg-red-500 shadow-[0_0_6px_3px_rgba(239,68,68,0.8)]'
                  }`}
              ></div>
              <p className="text-xl font-raleway text-black font-semibold uppercase">
                {isOpen ? 'Open' : 'Closed'}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
