import React from 'react'
import "./ContactUsBody.css"
import ContactUsIMG from "../../Assets/taxi_img4.png"

function ContactUsBody() {
  return (
    <div className='ContactUsBody_container'>
      <img src={ContactUsIMG} alt ="" width={600} height={550} style={{marginLeft:"10px", marginTop:"10px", borderRadius:"20px"}} />
      <div className='ContactUsBody_section1'>
        <h1>Contact Us</h1>
        <h2>Hotlines</h2>
        <div className='ContactUsBody_section2'>
        <h3>General Inquires</h3>
        <p>+94112141514</p>
        <h3>Business Inquires</h3>
        <p>+94772411247</p>
        <h3>Media & Marketing</h3>
        <p>Email - gocheetacon@gmail.com</p>
        <h3>Inquiries on Affiliations</h3>
        <p>+94114507555</p>
        </div>
         
        </div>
     

      </div>
    
  )
}

export default ContactUsBody