import React from 'react'
import "./HomeBody.css"
import TaxiIMG from "../../Assets/taxi_img.png"
function HomeBody() {
  return (
    <div className='HomeBody_container'>
    <div className='Section1'>
    <img src={TaxiIMG} alt ="" width={600} height={560} />
    </div>

      <div className='Section2'>
      <h1>Welcome to GoCheeta Cab Service</h1> 
      <h2>Reliable and Secure Way to Reach <br/> Any Point of the City</h2>
      <h3>We provide affordable and fast way to find a taxi when and<b/> where you need it.</h3> 
      </div>
    </div>
  )
}

export default HomeBody