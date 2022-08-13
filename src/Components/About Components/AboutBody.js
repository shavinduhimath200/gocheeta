import React from 'react'
import "./AboutBody.css"
import taxiaboutIMG from "../../Assets/taxi_img3.png"

function AboutBody() {
  return (
    <div className='AboutBody_container'>
    <img src={taxiaboutIMG} alt ="" width={600} height={550} style={{marginLeft:"10px", marginTop:"10px"}} /> 
    <div className='About_section1'>
        <h1>About Us</h1>
        <h2>hkfkhf khjfbf</h2>
    </div>
    </div>
    
    
  )
}

export default AboutBody