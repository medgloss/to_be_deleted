import { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
import  TableOne from './components/TableOne.tsx';
import TableTwo  from './components/TableTwo.tsx';
import  TableThree from './components/TableThree.tsx';
import  TableFour from './components/TableFour.tsx';
import TableFive  from './components/TableFive.tsx';

import './styles/App.css';






// Separate component for navigation logic
function NavigationButton() {
  const navigate = useNavigate()
  
  const handleClick = () => {
    navigate("/about")
  }
  
  return <button onClick={handleClick}>about</button>
}

function App() {
  

  return (
    <div className="container">
    <div className="top-row">
    <div className="top-row-1">
      <TableOne /></div>
      <TableOne />
      <TableOne />
      {/* <TableThree /> */}
    </div>
    
    <div className="bottom-row">
    <div className="bottom-row-1">
    <TableOne /></div>
      <div className="bottom-row-1">  <TableOne /> </div>
    </div>
  </div>
  )
}

export default App