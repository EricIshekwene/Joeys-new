
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
      <div className=" bg-white">

        <Navbar />
       
       
        <HeaderNew />
        <ViewMenus />
        <LeftImageDiv />
        <Contents />
        <EventsNew />       
        <Joeys />
          <RightImageDiv />    
        <Footer />
       
      </div>
    </>
  )
}

export default App
