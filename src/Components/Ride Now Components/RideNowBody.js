import React from 'react'
import "./RideNowBody.css"
import TaxiIMG from "../../Assets/taxi_img5.jpg"

function RideNowBody() {
  return (
    <div className='RideNowBody_container'>
      <div className='RideNowBody_section1'>
      <h1>Book a Ride</h1>
      <img src={TaxiIMG} alt ="" width={1349} height={200} />
    </div>
    </div>
  )
}

export default RideNowBody