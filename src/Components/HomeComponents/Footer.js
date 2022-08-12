import React from 'react'
import "./Footer.css"
import logoimg from "../../Assets/download.jpg";
import Fb from "../../Assets/facebook.png";
import linkedin from "../../Assets/linkdein.png";

function Footer() {
  return (
    <div className='Footercontainer'>
        <div className='footer_container'>
        <img
          src={logoimg}
          alt=""
          width="110"
          height="110"
          style={{
            marginTop: "20px",
            marginLeft: "15px",
            borderRadius: "20px",
          }}
        />
        <p>About</p>
        <p>Contact Us</p>
        <p>Privacy Policy</p>
        <div className='socialmedia'>
        <h3>Social Media</h3>
        <img
          src={Fb}
          alt=""
          width="40"
          height="40"
          style={{
            marginTop: "15px",
            marginLeft: "15px",
          }}
        />
        <img
          src={linkedin}
          alt=""
          width="40"
          height="40"
          style={{
            marginTop: "15px",
            marginLeft: "15px",
          }}
        />
        </div>
        </div>
            <div className='copyright'>
                 <p>Copyright 2022 GoCheeta all right reserved</p>
             </div>
  </div>

  )
}

export default Footer