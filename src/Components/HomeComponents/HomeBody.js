import React from 'react'
import "./HomeBody.css"
import TaxiIMG from "../../Assets/taxi_img.png"
function HomeBody() {
  return (
    <div className='HomeBody_container'>
    <div className='Section1'>
    <img src={TaxiIMG} alt ="" width={500} height={500} />
    </div>

      <div className='Section2'>
      <h1>Welcome to GoCheeta Cab Service</h1>
      <p>hi dnjfdsjf fkfhsfsfb kshfjfb dfffsfe sdsgsg<br/>hkdnkf khkfsf hf mf</p> 
      </div>
    </div>
  )
}

export default HomeBody