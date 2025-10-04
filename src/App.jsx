
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
function App() {

  return (
    <>
      <div className=" bg-[#f5f0e6]">

        <Navbar />
       
       
        <HeaderNew />
        <ViewMenus />
        <LeftImageDiv />
        <Contents />
        <div className=''>
        <EventsNew /> 
        </div>     
        <RightImageDiv />     
        <Joeys />
        
        <Footer />
       
      </div>
    </>
  )
}

export default App
