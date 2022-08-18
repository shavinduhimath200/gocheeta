import React from 'react'
import "./RideNowBody.css"
import TaxiIMG from "../../Assets/taxi_img5.jpg"
import RideNowForm from './RideNowForm'

function RideNowBody() {
  return (
    <div className='RideNowBody_container'>
      <div className='RideNowBody_section1'>
      <h1 style={{textAlign:"center"}}>Book a Ride</h1>
      <img src={TaxiIMG} alt ="" width={1349} height={200} />
      <p>
        <h2>Looking For a taxi</h2>
        <h1>Make your booking</h1>
      </p>
      <RideNowForm/>
    </div>
    </div>
  )
}

export default RideNowBody