import React from 'react'
import "./HomeBody.css"
import TaxiIMG from "../../Assets/taxi_img.png"
function HomeBody() {
  return (
    <div className='HomeBody_container'>
        <img src={TaxiIMG} alt ="" width={500} height={500} />
        <h1>Welcome to GoCheeta Cab Service</h1>
    </div>
  )
}

export default HomeBody