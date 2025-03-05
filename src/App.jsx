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
import Counter from './componets/dropdown.tsx'

function App() {
  

  return (
    <div className="container">
 <Counter />
  </div>
  )
}

export default App