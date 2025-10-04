
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
function App() {

  return (
    <>
      <div className=" bg-[#f5f0e6]">

        <Navbar />
       
       
        <HeaderNew />
        <ViewMenus />
        <Contents />
        <LeftImageDiv />
        
        <div id='reservations'>
        <EventsNew /> 
           
        <RightImageDiv /> 
        </div>  
        <section id='about'>
        <Joeys />
        <HowWeGiveBack />
        </section>    
        <Footer />
       
      </div>
    </>
  )
}

export default App
