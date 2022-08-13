import React from 'react'
import About from './Components/About Components/About'
import Home from './Home'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";







function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/' exact element={<About/>} />
      </Routes>
    </Router>
    )
}

export default App