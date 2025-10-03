
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import joey1 from './assets/srcimages/joey1.jpg'
import joey2 from './assets/srcimages/joey2.jpg'   
import HeaderNew from './components/HeaderNew'
import LeftImageDiv from './LeftImageDiv'
import EventsNew from './EventsNew'
import ViewMenus from './ViewMenus'
import RightImageDiv from './RightImageDiv'
import Contents from './Contents'

function App() {

  return (
    <>
      <div className=" bg-white">

        <Navbar />
       
       
        <HeaderNew />
        <ViewMenus />
        <LeftImageDiv />
        <Contents />
        <EventsNew />       
             <div className='relative flex flex-row justify-center items-center h-120'>
              {/* Black tint overlay */}
              <div className="absolute inset-0 bg-black opacity-40 z-10 pointer-events-none"></div>
              <img src={joey1} alt="joey1" className='w-2/3 h-full object-cover z-0' />
              <img src={joey2} alt="joey2" className='w-1/3 h-full object-cover z-0' />
             </div>
        <Footer />
       
      </div>
    </>
  )
}

export default App
