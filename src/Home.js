import React from 'react'
import Footer from './Components/HomeComponents/Footer'
import HomeBody from './Components/HomeComponents/HomeBody'
import HomeBody2 from './Components/HomeComponents/HomeBody2'
import Navbar from './Components/HomeComponents/Navbar'



function Home() {
  return (
    <div> 
      <Navbar/>
      <HomeBody/>
      <HomeBody2/>  
      <Footer/>     
    </div>
    
    )
}
export default Home