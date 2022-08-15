import React from 'react'
import "./HomeBody2.css"
import TaxiIMG2 from "../../Assets/taxi_img2.png"

function HomeBody2() {
  return (
    <div className='HomeBody2_container'>

      <div className='HomeBody2_Section2'>
      <h1>Ride</h1> 
      <h2>GoCheeta ride healing include the largest fleet of vehicles in Sri Lanka offering both of demand and pre booking features at the best rates. Including TUK-TUKs Flex, Minis, Cars, Mini Vans, and vans offering you comfort convenience and safety, covering the entire island nation.</h2>
      </div>
      <div className='HomeBody2_Section1'>
    <img src={TaxiIMG2} alt ="" width={700} height={700} style={{marginRight:"10px", borderRadius:"20px"}} />
    </div>
    </div>
  )
}

export default HomeBody2