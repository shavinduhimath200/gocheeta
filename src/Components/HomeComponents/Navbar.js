import React from 'react'
import { useNavigate } from 'react-router';
import "./Navbar.css"

function Navbar() {
  const navigate = useNavigate();
  const LoadAbout = () => {
  navigate('/About')
  }
   {
  const navigate = useNavigate();
  const LoadContactUs = () => {
  navigate('/ContactUs')
  }


  return (
  <div className='container'>
    <div>
    <h2>GoCheeta</h2>
    </div>
      <div className='containerpart2'>
        <h3 onClick={LoadAbout}>About</h3>
        <h3 onClick={LoadContactUs}>ContactUs</h3>
        <h3>Login</h3>
        <h3>SignUp</h3>
      </div>
  </div>

  )

}
}

export default Navbar;
