import React from 'react'
import "./ContactUsBody.css"
import ContactUsIMG from "../../Assets/taxi_img4.png"

function ContactUsBody() {
  return (
    <div className='ContactUsBody_container'>
      <img src={ContactUsIMG} alt ="" width={600} height={550} style={{marginLeft:"10px", marginTop:"10px"}} />
      <div className='ContactUsBody_section1'>
        <h1>Contact Us</h1>
        <h2>Address</h2>
      </div>
    </div>
  )
}

export default ContactUsBody