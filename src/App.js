import React from 'react'
import About from './Components/About Components/About'
import Home from './Home'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactUs from './Components/ContactUs Components/ContactUs';







function App() {
  return (
   <Router>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/About' exact element={<About/>} />
        <Route path='/ContactUs' exact element={<ContactUs/>} />
      </Routes>
    </Router>
    )
}

export default App