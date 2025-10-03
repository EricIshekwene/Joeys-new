
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

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
       
        <Contents />
        <HeaderNew />
        <ViewMenus />
        <LeftImageDiv />
        <EventsNew />       
        <RightImageDiv />       
        <Footer />
       
      </div>
    </>
  )
}

export default App
