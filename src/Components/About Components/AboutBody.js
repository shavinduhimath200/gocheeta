import React from 'react'
import "./AboutBody.css"
import taxiaboutIMG from "../../Assets/taxi_img3.png"

function AboutBody() {
  return (
    <div className='AboutBody_container'>
    <img src={taxiaboutIMG} alt ="" width={600} height={550} style={{marginLeft:"10px", marginTop:"10px"}} /> 
    <div className='About_section1'>
        <h1>About Us</h1>
        <h2>As the market leader and Sri Lanka's most successful start-up business in recent times, we envision the intelligent upgrade of the local transportation industry; consequently inspiring Sri Lanka towards matching global standards in effective problem solving via technology. GoCheeta is the proud product of this vision, instilled by our leadership that comprises the enterprisingly youthful and highly accomplished, and realized by talent warehoused at our headquarters in Colombo, Sri Lanka.</h2>
    </div>
    </div>
    
    
  )
}

export default AboutBody