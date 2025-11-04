
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HeaderNew from './components/HeaderNew'
import LeftImageDiv from './LeftImageDiv'
import RightImageDiv from './RightImageDiv'
import EventsNew from './EventsNew'
import ViewMenus from './ViewMenus'
import Contents from './Contents'
import Joeys from './Joeys'
import HowWeGiveBack from './HowWeGiveBack'
import { useState, useEffect } from 'react';
import Papa from "papaparse";
import menus from './assets/menus/menus.pdf'

function App() {
  const defaultData = {
    business_email: "joeysplace9@gmail.com",
    business_phone: "6144293524",
    instagram_link: "https://www.instagram.com/joeysplace614/",
    tiktok_link: "https://www.tiktok.com/@meetatjoeys",
    facebook_link: "https://www.facebook.com/JoeysPlace614",

    header_h1: "#1 Bar on High Street",
    header_text: "Authenticity, Community, Excellence, and Vibes Only. Making a place for everyone to feel at home and to feel like family.",

    menus_h1: "East and Drink to your heart's content",
    menu_pdf: menus,

    Times: "eg 10:00AM-10:00PM",
    monday_times: "Closed",
    tuesday_times: "4:00PM-11:00PM",
    wednesday_times: "4:00PM-11:00PM",
    thursday_times: "4:00PM-2:30AM",
    friday_times: "4:00PM-2:30AM",
    saturday_times: "4:00PM-2:30AM",
    sunday_times: "4:00PM-11:00PM",

    // Event controls
    Events: "FALSE",

    event_1: "FALSE",
    event_1_name_date: "",
    event_1_subtext: "",
    event_1_time: "",

    event_2: "FALSE",
    event_2_name_date: "",
    event_2_subtext: "",
    event_2_time: "",

    event_3: "FALSE",
    event_3_name_date: "",
    event_3_subtext: "",
    event_3_time: "",

    event_4: "FALSE",
    event_4_name_date: "",
    event_4_subtext: "",
    event_4_time: "",

    joey_subtext: "",
    howWeGiveBack_subtext: "Every month, a portion of our proceeds supports initiatives that uplift and empower our neighbors.",

    event_trivia: "FALSE",
    event_trivia_description: "Join us for a night of trivia! We'll have a variety of trivia questions for you to answer.",
    event_trivia_time: "Every Tuesday @ 7:00PM-10:00PM",

    event_drag_brunch: "FALSE",
    event_drag_brunch_description: "Join us for a afternoon of drag brunch! We'll have a variety of drag queens and kings for you to enjoy.",
    event_drag_brunch_time: "Every Other Sunday @12:00PM-3:00PM",

    event_karaoke: "FALSE",
    event_karaoke_description: "Join us for a night of karaoke! Get your favorite songs ready and sing your heart out!",
    event_karaoke_time: "Every Thursday @ 7:00PM-10:00PM",

    event_bingo: "FALSE",
    event_bingo_description: "Join us for a night of bingo! We'll have a variety of prizes for the winners.",
    event_bingo_time: "Every Tuesday @ 7:00PM-10:00PM",

    event_draft : "FALSE",
    event_draft_description: "With a purchase of your own joey's place mug you can get $2 draft beers and build your own burger at $5",
    event_draft_time: "Every Tuesday",
    
    event_wings : "FALSE",
    event_wings_description: "$1 wing night",
    event_wings_time: "Every Wednesday",

    

    event_pizza: "FALSE",
    event_pizza_description: "Build your own pizza and Long Islands",
    event_pizza_time: "Every Thursday",
  };
  const [data, setData] = useState(defaultData);


  useEffect(() => {
    const url = import.meta.env.VITE_SHEET_LINK;

    fetch(url)
      .then((res) => res.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          header: false,
          skipEmptyLines: true,
          complete: (results) => {
            const obj = { ...defaultData }; // start with defaults

            results.data.forEach(([key, value]) => {
              if (key) {
                if (value === undefined || value === null || value.trim() === "") {
                  obj[key] = defaultData[key]; // fallback to default
                } else {
                  obj[key] = value; // overwrite with sheet value
                }
              }
            });

            console.log("Final parsed data:", obj);
            setData(obj);
          },
        });
      })
      .catch(() => {
        console.warn("Falling back to default data");
        setData(defaultData);
      });
  }, []);



  return (
    <>
      <div className=" bg-[#f5f0e6]">
        
        <Navbar phone={data.business_phone} instagram={data.instagram_link} tiktok={data.tiktok_link} facebook={data.facebook_link} />


        <HeaderNew header_h1={data.header_h1} header_text={data.header_text} />
        <ViewMenus menus_h1={data.menus_h1} menu_pdf={data.menu_pdf} />
        <Contents />
        <LeftImageDiv monday_times={data.monday_times} tuesday_times={data.tuesday_times} wednesday_times={data.wednesday_times} thursday_times={data.thursday_times} friday_times={data.friday_times} saturday_times={data.saturday_times} sunday_times={data.sunday_times} />

        <div id='reservations'>
          <EventsNew Events={data.Events} events_h1={data.events_h1} events_text={data.events_text} 
          event_1={data.event_1} event_1_name_date={data.event_1_name_date} event_1_subtext={data.event_1_subtext} event_1_time={data.event_1_time} 
          event_2={data.event_2} event_2_name_date={data.event_2_name_date} event_2_subtext={data.event_2_subtext} event_2_time={data.event_2_time} 
          event_3={data.event_3} event_3_name_date={data.event_3_name_date} event_3_subtext={data.event_3_subtext} event_3_time={data.event_3_time} 
          event_4={data.event_4} event_4_name_date={data.event_4_name_date} event_4_subtext={data.event_4_subtext} event_4_time={data.event_4_time} 
          instagram={data.instagram_link} facebook={data.facebook_link} tiktok={data.tiktok_link} 
          event_trivia={data.event_trivia} event_trivia_description={data.event_trivia_description} event_trivia_time={data.event_trivia_time} 
          event_drag_brunch={data.event_drag_brunch} event_drag_brunch_description={data.event_drag_brunch_description} event_drag_brunch_time={data.event_drag_brunch_time} 
          event_karaoke={data.event_karaoke} event_karaoke_description={data.event_karaoke_description} event_karaoke_time={data.event_karaoke_time} 
          event_bingo={data.event_bingo} event_bingo_description={data.event_bingo_description} event_bingo_time={data.event_bingo_time}    
          event_draft={data.event_draft} event_draft_description={data.event_draft_description} event_draft_time={data.event_draft_time} 
          event_wings={data.event_wings} event_wings_description={data.event_wings_description} event_wings_time={data.event_wings_time} 
          event_pizza={data.event_pizza} event_pizza_description={data.event_pizza_description} event_pizza_time={data.event_pizza_time} 
          />
          <RightImageDiv phone={data.business_phone}/>
        </div>
        <section id='about'>
          <Joeys joey_subtext={data.joey_subtext} />
          <HowWeGiveBack howWeGiveBack_subtext={data.howWeGiveBack_subtext}   />
        </section>
        <Footer phone={data.business_phone} instagram={data.instagram_link} tiktok={data.tiktok_link} facebook={data.facebook_link} email={data.business_email} />

      </div>
    </>
  )
}

export default App
